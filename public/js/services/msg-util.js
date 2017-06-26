'use strict';

/**
 * Utilities for message toast or message box
 */
angular.module('app')
	.factory('MsgUtil', ['$window', 'toaster', function($window, toaster) {
		// LAC(2016-01-07): 临时解决用户在chrome下勾选了“禁止此页再显示对话框”
		var popupDisabledWarning = '您已禁止显示对话框，这将妨碍网站正常使用，请关闭浏览器后重新打开当前网页！';
		
		return {
			// Alias of window.alert
			alert: function(message) {
				var startTime = Date.now();
				$window.alert(message);
				var ellapse = Date.now() - startTime;
				if (ellapse < 200) {
					toaster.pop('warning', '警告', popupDisabledWarning);
				}
			},

			// Alias of window.confirm
			confirm: function(message) {
				var startTime = Date.now();
				var result = $window.confirm(message);
				var ellapse = Date.now() - startTime;
				if (ellapse < 200 && !result) {
					toaster.pop('warning', '警告', popupDisabledWarning);
				}
				return result;
			},

			// Alias of window.prompt
			prompt: function(title) {
				return $window.prompt(title);
			},

			toast: function(type, title, text) {
				toaster.pop(type, title, text);
			},

			toastSuccess: function(title, text) {
				if (arguments.length === 1) {
					text = title;
					title = '成功';
				}
				toaster.pop('success', title || '成功', text);
			},

			toastInfo: function(title, text) {
				if (arguments.length === 1) {
					text = title;
					title = '提醒';
				}
				toaster.pop('info', title, text);
			},

			toastWait: function(title, text) {
				if (arguments.length === 1) {
					text = title;
					title = '等待';
				}
				toaster.pop('wait', title, text);
			},

			toastWarn: function(title, text) {
				if (arguments.length === 1) {
					text = title;
					title = '警告';
				}
				toaster.pop('warning', title, text);
			},

			toastError: function(title, text) {
				if (arguments.length === 1) {
					text = title;
					title = '错误';
				}
				toaster.pop('error', title, text);
			}
		};
	}]);
