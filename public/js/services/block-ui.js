'use strict';

/**
 * A wrapper for jquery.blockUI.js
 */
angular.module('app')
  .factory('BlockUI', function() {
    var $ = angular.element,
      extend = angular.extend;
    return {
      // Block the whole page or an specific element with translucent overlay.
      // params:
      //   message: the text for the block
      //   boxed: with a frame for text
      //   textOnly: do not show the loading spinner
      //   iconOnly: show only the loading spinner without text
      //   animate: show 3 CSS3 animated balls (no text message)
      mask: function(options) {
        options = extend({}, options);
        var html = '';
        if (options.animate) {
          html = '<div class="loading-message ' + (options.boxed ? 'loading-message-boxed' : '') + '">' + '<div class="block-spinner-bar"><div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div></div>' + '</div>';
        } else if (options.iconOnly) {
          html = '<div class="loading-message ' + (options.boxed ? 'loading-message-boxed' : '') + '"><img src="img/loading-spinner-grey.gif" align=""></div>';
        } else if (options.textOnly) {
          html = '<div class="loading-message ' + (options.boxed ? 'loading-message-boxed' : '') + '"><span>&nbsp;&nbsp;' + (options.message ? options.message : 'LOADING...') + '</span></div>';
        } else {
          html = '<div class="loading-message ' + (options.boxed ? 'loading-message-boxed' : '') + '"><img src="img/loading-spinner-grey.gif" align=""><span>&nbsp;&nbsp;' + (options.message ? options.message : 'LOADING...') + '</span></div>';
        }

        if (options.target) { // element blocking
          var el = $(options.target);
          if (el.height() <= ($(window).height())) {
            options.cenrerY = true;
          }
          el.block({
            message: html,
            baseZ: options.zIndex ? options.zIndex : 1000,
            centerY: options.cenrerY !== undefined ? options.cenrerY : false,
            css: {
              top: '10%',
              border: '0',
              padding: '0',
              backgroundColor: 'none'
            },
            overlayCSS: {
              backgroundColor: options.overlayColor ? options.overlayColor : '#555',
              opacity: options.boxed ? 0.05 : /*0.1->*/ 0.05,
              cursor: 'wait'
            }
          });
        } else { // page blocking
          $.blockUI({
            message: html,
            baseZ: options.zIndex ? options.zIndex : 1000,
            css: {
              border: '0',
              padding: '0',
              backgroundColor: 'none'
            },
            overlayCSS: {
              backgroundColor: options.overlayColor ? options.overlayColor : '#555',
              opacity: options.boxed ? 0.05 : 0.1,
              cursor: 'wait'
            }
          });
        }
      },

      unmask: function(target) {
        if (target) {
          var el = $(target);
          el.unblock({
            onUnblock: function() {
              el.css('position', '');
              el.css('zoom', '');
            }
          });
        } else {
          $.unblockUI();
        }
      },

      // Block the whole page without background overlay
      startPageLoading: function(options) {
        if (options && options.animate) {
          $('.page-spinner-bar').remove();
          $('body').append('<div class="page-spinner-bar"><div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div></div>');
        } else {
          $('.page-loading').remove();
          $('body').append('<div class="page-loading"><img src="img/loading-spinner-grey.gif"/>&nbsp;&nbsp;<span>' + (options && options.message ? options.message : 'Loading...') + '</span></div>');
        }
      },

      stopPageLoading: function() {
        $('.page-loading, .page-spinner-bar').remove();
      }
    };
  });