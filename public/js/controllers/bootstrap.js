'use strict';

// 关于angular-file-upload的API，查看：https://github.com/nervgh/angular-file-upload/wiki/Module-API
// 用到这个controller的地方，需要在config.router.js里面配置上：$ocLazyLoad.load('angularFileUpload')
app.controller('CategoryImageUploadCtrl', ['$scope', '$modalInstance', 'categoryId', 'FileUploader', 'authService', 'MsgUtil', 'WebConst',
  function($scope, $modalInstance, categoryId /* 图片分类id */, FileUploader, authService, MsgUtil, WebConst) {
    var uploader = $scope.uploader = new FileUploader({
      url: WebConst.WEB_URL + '/image/upload'
    });

    var uploadedImages = [];

    // FILTERS
    var alertExceedQueueSize = true;
    uploader.filters.push({
      name: 'customFilter',
      fn: function(item /*{File|FileLikeObject}*/ , options) {
        // 判断文件是否为图片
        var type = '|' + item.type.slice(item.type.lastIndexOf('/') + 1) + '|';
        if ('|jpg|png|jpeg|bmp|gif|'.indexOf(type) == -1) {
          MsgUtil.toastInfo('上传的文件不是图片文件', item.name);
          return false;
        }
        // 不允许上传bmp图片，太大了
        if ('|bmp|' === type) {
          MsgUtil.toastInfo(item.name, 'bmp格式的图片太大，不适合网络浏览，请转化成jpg');
          return false;
        }
        // 同时只允许上传20个文件
        if (this.queue.length < 20)
          return true;
        if (alertExceedQueueSize) {
          MsgUtil.toastWarn('本次上传最多20个文件，请上传完成后关闭对话框再点“上传图片”按钮，继续上传');
          alertExceedQueueSize = false;
        }
        return false;
      }
    });

    // CALLBACKS
    uploader.onBeforeUploadItem = function(item) {
      var user = authService.getProfile();
      var formData = [{
        categoryId: categoryId,
        userId:user.id
      }];
      Array.prototype.push.apply(item.formData, formData);
    };
    uploader.onSuccessItem = function(fileItem, response, status, headers) {
      //console.info('onSuccessItem', fileItem, response, status, headers);
      response.data.fileItem = fileItem;
      uploadedImages.push(response.data);
    };
    uploader.onErrorItem = function(fileItem, response, status, headers) {

      console.info('onErrorItem', fileItem, response, status, headers);
    };

    $scope.ok = function() {

      if (uploader.isUploading) {
        MsgUtil.toastWait('文件正在上传', '请等待或者取消上传后继续！');
        return;
      }
      if (uploader.queue.length && uploader.progress < 100) {
        if (!MsgUtil.confirm('有文件尚未上传，是否要退出？'))
          return;
      }

      if(!uploader.queue.length) {
        uploadedImages = [];
      } else {
        /*uploadedImages.forEach(function(uploadImage, index) {
          if(uploadImage.fileItem && uploadImage.fileItem.removeAfterUpload) {
            uploadedImages.splice(index, 1);
          }
        })*/
        var removeIndexs = [];
        angular.forEach(uploadedImages, function(item,index) {
          if(item.fileItem && item.fileItem.removeAfterUpload) {
            removeIndexs.push(index);
          }
        });

        removeIndexs.reverse();
        removeIndexs.forEach(function(index) {
          uploadedImages.splice(index, 1);
        });

      }
      // 检查是否有文件上传失败
      var uploadErrorAny = false, i, item;
      for (i = 0; i < uploader.queue.length; ++i) {
        item = uploader.queue[i];
        if (item.isError) {
          uploadErrorAny = true;
          break;
        }
      }
      if (uploadErrorAny) {
        if (!MsgUtil.confirm('有文件上传失败，是否要退出？'))
          return;
      }
      $modalInstance.close(uploadedImages);
    };

    $scope.cancel = function() {
      if (uploader.isUploading) {
        MsgUtil.toastWait('文件正在上传', '请等待或者取消上传后退出！');
        return;
      }
      if (uploader.queue.length && uploader.progress < 100) {
        if (!MsgUtil.confirm('有文件尚未上传，是否要退出？'))
          return;
      }
      $modalInstance.dismiss('cancel');
    };
  }
]);

app.factory('categoryImageUploader', ['$modal',
  function($modal) {
    return {
      // @return modalInstance
      openModal: function(categoryIdResolver) {
        return $modal.open({
          templateUrl: 'tpl/file_upload.html',
          controller: 'CategoryImageUploadCtrl',
          size: 'lg',
          backdrop: 'static',
          keyboard: false,
          resolve: {
            categoryId: categoryIdResolver
          }
        });
      }
    };
  }
]);



// 用到这个controller的地方，需要在config.router.js里面配置上：$ocLazyLoad.load('ngImgCrop')
app.controller('ImgUploadEditCtrl', ['$scope', '$timeout', '$modalInstance', 'options', 'MsgUtil',
  function($scope, $timeout, $modalInstance, options, MsgUtil) {
    var vm = this;

    vm.image = '';
    vm.croppedImage = '';
    vm.croppedImageSize = 256;
    vm.cropType = 'square';
    vm.options = angular.extend({
      title: '图片编辑'
    }, options);

    var handleFileSelect = function(evt) {
      var file = evt.currentTarget.files[0];
      var reader = new FileReader();
      reader.onload = function(evt) {
        $scope.$apply(function() {
          vm.image = evt.target.result;
        });
      };
      reader.readAsDataURL(file);
    };
    $timeout(function() {
      angular.element('#fileInput').on('change', handleFileSelect);
    });

    vm.ok = function() {
      $modalInstance.close(vm.image ? vm.croppedImage : '');
    };

    vm.cancel = function() {
      if (vm.image && !MsgUtil.confirm('您确定要放弃本次编辑吗？'))
        return;
      $modalInstance.dismiss('cancel');
    };
  }
]);

app.factory('imgUploadEditFactory', ['$modal',
  function($modal) {
    return {
      // @return modalInstance
      openModal: function(options) {
        return $modal.open({
          templateUrl: 'tpl/img_upload_edit.html',
          controller: 'ImgUploadEditCtrl as iue',
          size: 'lg',
          backdrop: 'static',
          keyboard: false,
          resolve: {
            options: function() {
              return options || {};
            }
          }
        });
      }
    };
  }
]);
