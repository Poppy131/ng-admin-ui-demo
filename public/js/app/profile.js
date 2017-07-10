app.controller('ProfileCtrl', ['$scope', 'WebConst', 'imgUploadEditFactory', 'BlockUI', '$http', 'MsgUtil', '$state',
    function ($scope, WebConst, imgUploadEditFactory, BlockUI, $http, MsgUtil, $state) {
        vm = this, $ = angular.element;

        var WEB_URL = WebConst.WEB_URL,
            AVATAR_IMAGE_ID = WebConst.ImageCategoryDef.AVATAR_IMAGE.id;

        vm.profile = {};
        vm.profileEdit = {};

        vm.newPassword = "";
        vm.newPasswordRepeat = "";

        vm.uploadAvatar = _uploadAvatar;
        vm.changePwd = _changePwd;

        _init();

        function _init() {
            BlockUI.mask({animate: true});
            $http.post(WEB_URL + '/admin/user/view')
                .success(function (res) {
                    BlockUI.unmask();
                    if (res && res.success && res.data) {
                        var data = res.data;
                        vm.profile = {
                            avatarUrl: '/image/avatar.jpg?',
                            name: data.name,
                            realName: data.realName,
                            lastLogin: data.lastLogin
                        };
                        _initEditProfile();
                    }
                });
        }

        function _initEditProfile() {
            if (!vm.profile) {
                return;
            }
            vm.profileEdit = {
                name: vm.profile.name,
                realName: vm.profile.realName
            };
        }

        function _uploadAvatar() {
            //var modalInstance = imgUploadEditFactory.openModal({title: '编辑头像'});
            //modalInstance.result.then(
            //    function (data) {
            //        if (data) {
            //            var idx = data.indexOf(';base64,'),
            //                mime = data.substring(5 /* skip data: */, idx);
            //            data = data.substring(idx + 8);
            //            BlockUI.mask({animate: true});
            //            $http.post(WEB_URL + '/image/base64/upload', {
            //                    categoryId: AVATAR_IMAGE_ID,
            //                    mime: mime,
            //                    data: data
            //                })
            //                .success(function () {
            //                    BlockUI.unmask();
            //                    vm.profile.avatarUrl = '/image/avatar.jpg?t=' + Math.random();
            //                });
            //        }
            //    }
            //);
        }

        function _changePwd() {
            if (!vm.newPassword || !vm.newPasswordRepeat) {
                MsgUtil.toastWarn("请输入完整！");
                return;
            }
            if (vm.newPassword != vm.newPasswordRepeat) {
                MsgUtil.toastWarn("两次输入密码不一致！");
                return;
            }
            if (vm.newPassword.length > 12 || vm.newPassword.length < 4) {
                MsgUtil.toastWarn("请输入4到12位密码！");
                return;
            }
            BlockUI.mask({animate: true});
            $http.post(WEB_URL + '/admin/user/pwd/change', {pwd: vm.newPassword})
                .success(function (res) {
                    BlockUI.unmask();
                    if (res && res.success && res.data) {
                        MsgUtil.alert("更新成功请重新登陆");
                        $state.go("login");
                    }
                });
        }

    }
]);
