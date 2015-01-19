$window.renderSignin = function() {
		if ($('#signup-form').is(':visible')) {
			gapi.signin.render('customBtn', {
				'callback': $scope.signin,
				'immedediate': false,
				'clientid': '982002203062-qllsi843lackaof6acad3308p7m1j5pr.apps.googleusercontent.com',
				'cookiepolicy': 'single_host_origin',
				'requestvisibleactions': 'http://schemas.google.com/AddActivity',
				'scope': 'https://www.googleapis.com/auth/plus.login https://www.googleapis.com/auth/userinfo.email'
			});
		}

		if ($('#mobile').is(':visible')) {
			gapi.signin.render('customBtn_M', {
				'callback': $scope.signin,
				'immedediate': false,
				'clientid': '982002203062-qllsi843lackaof6acad3308p7m1j5pr.apps.googleusercontent.com',
				'cookiepolicy': 'single_host_origin',
				'requestvisibleactions': 'http://schemas.google.com/AddActivity',
				'scope': 'https://www.googleapis.com/auth/plus.login https://www.googleapis.com/auth/userinfo.email'
			});
		}
	}// end function renderSignin
}// end controller TourblyCtrl
