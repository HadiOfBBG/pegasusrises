jQuery(window).load(function() {
	var fix;
	var left_nav,
	currentHeight = $('.contentpanel').outerHeight(),
	displayheight = $( window ).height();
	//***********************************to do list *****************************
	$('.task-finish').click(function()	{
		if($(this).is(':checked'))	{
			$(this).parent().parent().addClass('selected');					
		}
		else	{
			$(this).parent().parent().removeClass('selected');
		}
	});
	//***********************************End to do list *****************************
	
	//***********************************Delete to do list*****************************
	$('.task-del').click(function()	{			
		var activeList = $(this).parent().parent();

		activeList.addClass('removed');
				
		setTimeout(function() {
			activeList.remove();
		}, 1000);
			
		return false;
	});
	//***********************************End Delete to do list *****************************
	
	
	//***********************************navigation menu toggle*****************************
	$(".menutoggle").click(function () {
		if ($('body').hasClass('left_nav_hide')) {
			if(fix==1) $('body').addClass('left_nav_fixed');
			$('body').removeClass('left_nav_hide');
		} 
		else {
			if($('body').hasClass('left_nav_fixed')){fix=1;$('body').removeClass('left_nav_fixed');}
			else fix=0;
			$('body').addClass('left_nav_hide');
			calculateHeight();
		} 
	});
	//***********************************End navigation menu toggle*****************************

	//***********************************Responsive change on navigation menu*****************************
	$(window).resize(function() {
	  var windowsize = $(window).width();
	  displayheight = $( window ).height();
	  if (windowsize < 960) {
		if (!$('body').hasClass('left_nav_hide')) {
			$('body').addClass('left_nav_hide');
			if($('body').hasClass('left_nav_fixed')){
				$('body').removeClass('left_nav_fixed');
				left_nav=1;
			}
			calculateHeight();
		} 
	  }
	  else
	  {
		if ($('body').hasClass('left_nav_hide')) {
			$('body').removeClass('left_nav_hide');
			if(left_nav==1) $('body').addClass('left_nav_fixed');
		}
	  }
		$('.slimScrollDiv').css('height',displayheight-80);
		$('.left_nav_slidebar').css('height',displayheight-80);
	});

    	function calculateHeight(){
		var contentHeight = parseInt($('.contentpanel').height(), 10);
		if (911 > contentHeight) {
		console.log("Small");
		}
	}
	//***********************************End Responsive change on navigation menu*****************************
	function equalHeight(group) {
		tallest = 0;
		group.each(function () {
			thisHeight = $(this).height();
			if (thisHeight > tallest) {
				tallest = thisHeight;
			}
		});
		group.height(tallest);
	}
	
	//***********************************Add Effect*****************************
	$(".btn-mini").click(function(){
		var $td=$(this).closest('tr').children('td');
		if($(this).hasClass('btn-primary')){
			$('body').addClass($td.eq(1).text());
			$(this).removeClass('btn-primary').addClass('btn-danger');
			$(this).text('No');
		}
		else if($(this).hasClass('btn-danger')){
			$('body').removeClass($td.eq(1).text());
			$(this).removeClass('btn-danger').addClass('btn-primary');
			$(this).text('Yes');
		}
	});
	//***********************************End Add Effect*****************************
	
	//***********************************Theme Change*********************************//
	$('.btn-lg').click(function(){
		var style=($(this).parent().children('h4').eq(1).text()).split(':'),
		code=style[1].split(";"),
		bodyclass=$('body').attr('class').split(" "),
		themeclass=bodyclass[bodyclass.length-1];
		applyTheme(themeclass,code[0]);
		
	});
	//***********************************end Theme Change*********************************//
	
	//***********************************Smooth Sliding menu *****************************
	$('.left_nav_slidebar ul li').on('click',function(e){ 
		e.stopPropagation(); 
		if($(this).has('ul').length) {
			var current_class = $('ul', this).attr("class");
			if(current_class!='opened'){
				$(this).find('ul:visible').slideToggle("normal");
				$(this).find('ul:visible').removeClass("opened");
			}
			if(current_class == 'opened')
			{
				$('ul', this).removeClass("opened");
				$('ul', this).parent().removeClass('left_nav_active theme_border');
			}
			else
			{
				$('.left_nav_slidebar ul li').find('ul:visible').parent().removeClass('left_nav_active theme_border');
				$('.left_nav_slidebar ul li').find('ul:visible').slideToggle("normal");
				$('.left_nav_slidebar ul li').find('ul:visible').removeClass("opened");
				$('ul', this).addClass("opened");
				$('ul', this).parent().addClass('left_nav_active theme_border');
			}
			$('ul', this).slideToggle("normal");
		} 
	});
	//***********************************End Smooth Sliding menu ***************************** 
	
	//***********************************Layout Option************************************//
	$("#demo-setting").click(function () {
		$(".demo").toggleClass("activate");
	}),
	$('input[type="checkbox"]#smart-fixed-header').click(function () {
		$(this).is(":checked") ? $('body').addClass("fixed_header") : $('body').removeClass("fixed_header") ;
	}),
	$('input[type="checkbox"]#smart-fixed-navigation').click(function () {
		$(this).is(":checked") ? $('body').addClass("left_nav_fixed") : $('body').removeClass("left_nav_fixed") ;
	}),
	$('input[type="checkbox"]#smart-rigth-navigation').click(function () {
		$(this).is(":checked") ? $('body').addClass("right_nav") : $('body').removeClass("right_nav") ;
	}),
	$('input[type="checkbox"]#smart-boxed-layout').click(function () {
		$(this).is(":checked") ? $('body').addClass("boxed_layout") : $('body').removeClass("boxed_layout") ;	
	})	
	
	
	$("#smart-styles > a").on("click", function () {
		bodyclass=$('body').attr('class').split(" "),
		themeclass=bodyclass[bodyclass.length-1];
		applyTheme(themeclass,$(this).attr("id"));
		if($(this).attr("id")=='light_theme') $('body').css('background','#ffffff');else  $('body').css('background','#262a33');
	
		$("#smart-styles > a #skin-checked").remove(),
		$(this).prepend("<i class='fa fa-check fa-fw' id='skin-checked'></i>")
	});
	//***********************************End Layout Option************************************//
	
	//***********************************Slim scroller *****************************
//	$('.left_nav_slidebar').each(function () {
//		$(this).slimScroll({
//		size: '5px',
//		color: '#a1b2bd',
//		height: displayheight-80,
//		alwaysVisible: ($(this).attr("data-always-visible") == "1" ? true : false),
//		railVisible: ($(this).attr("data-rail-visible") == "1" ? true : false),
//		disableFadeOut: true
//		});
//	});
	//***********************************End Slimscroller *****************************



	function applyTheme (themeclass,applyClass) {
		if(themeclass=='blue_thm' || themeclass=='red_thm' || themeclass=='magento_thm' || themeclass=='green_thm' || themeclass=='light_theme' || themeclass=='dark_theme'){
			if($('body').hasClass('light_theme') && $.trim(applyClass)=="dark_theme")
				$('body').removeClass('light_theme');
			if($('body').hasClass('dark_theme') && $.trim(applyClass)=="light_theme")
				$('body').removeClass('dark_theme');
			if((themeclass == 'dark_theme' && $.trim(applyClass)!="light_theme") || (themeclass == 'light_theme' && $.trim(applyClass)!="dark_theme"))
				themeclass = '';
			$('body').removeClass(themeclass);
		}
		if($('body').hasClass('light_theme') && $.trim(applyClass) == 'dark_theme'){
			$('body').removeClass('light_theme');
		}	
		$('body').addClass(applyClass);
		
	}	
   
 });
/*
 * angular-google-picker
 *
 * Interact with the Google API Picker
 * More information about the Google API can be found at https://developers.google.com/picker/
 *
 * (c) 2014 Loic Kartono
 * License: MIT
 */

angular.module('lk-google-picker', [])

.provider('lkGoogleSettings', function() {
  this.apiKey   = null;
  this.clientId = null;
  this.scopes   = ['https://www.googleapis.com/auth/drive'];
  this.features = ['MULTISELECT_ENABLED'];
  this.views    = [
    'DocsView().setIncludeFolders(true)',
    'DocsUploadView().setIncludeFolders(true)'
  ];
  this.locale   = 'en'; // Default to English

  /**
   * Provider factory $get method
   * Return Google Picker API settings
   */
  this.$get = function() {
    return {
      apiKey   : this.apiKey,
      clientId : this.clientId,
      scopes   : this.scopes,
      features : this.features,
      views    : this.views,
      locale   : this.locale
    }
  };

  /**
   * Set the API config params using a hash
   */
  this.configure = function(config) {
    for (key in config) {
      this[key] = config[key];
    }
  };
})

.directive('lkGooglePicker', ['lkGoogleSettings', function(lkGoogleSettings) {
  return {
    restrict: 'A',
    scope: {
      pickerFiles: '='
    },
    link: function(scope, element, attrs) {
      var accessToken = null;

      /**
       * Load required modules
       */
      function instanciate() {
        gapi.load('auth', { 'callback': onApiAuthLoad });
        gapi.load('picker');
      }

      /**
       * OAuth autorization
       * If user is already logged in, then open the Picker modal
       */
      function onApiAuthLoad() {
        if (gapi.auth.getToken() && accessToken) {
          openDialog();
        } else {
          gapi.auth.authorize({
            'client_id' : lkGoogleSettings.clientId,
            'scope'     : lkGoogleSettings.scopes,
            'immediate' : false
          }, handleAuthResult);
        }
      }

      /**
       * Google API OAuth response
       */
      function handleAuthResult(result) {
        if (result && !result.error) {
          accessToken = result.access_token;
          openDialog();
        }
      }

      /**
       * Everything is good, open the files picker
       */
      function openDialog() {
        var picker = new google.picker.PickerBuilder()
                               .setLocale(lkGoogleSettings.locale)
                               .setDeveloperKey(lkGoogleSettings.apiKey)
                               .setOAuthToken(accessToken)
                               .setCallback(pickerResponse);

        if (lkGoogleSettings.features.length > 0) {
          angular.forEach(lkGoogleSettings.features, function(feature, key) {
            picker.enableFeature(google.picker.Feature[feature]);
          });
        }

        if (lkGoogleSettings.views.length > 0) {
          angular.forEach(lkGoogleSettings.views, function(view, key) {
            var view = eval('new google.picker.' + view);
            picker.addView(view);
          });
        }

        picker.build().setVisible(true);
      }

      /**
       * Callback invoked when interacting with the Picker
       * data: Object returned by the API
       */
      function pickerResponse(data) {
        if (data.action == google.picker.Action.PICKED) {
          gapi.client.load('drive', 'v2', function() {
            angular.forEach(data.docs, function(file, index) {
              scope.pickerFiles.push(file);
            });
            scope.$apply();
          });
        }
      }

      gapi.load('auth');
      gapi.load('picker');

      element.bind('click', function(e) {
        instanciate();
      });
    }
  }
}]);
