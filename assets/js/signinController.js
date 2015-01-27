var renderSignin = function() {
	console.log('called');
		gapi.signin.render('customBtn', {
			'callback': signin,
			'immedediate': false,
			'clientid': '982002203062-qllsi843lackaof6acad3308p7m1j5pr.apps.googleusercontent.com',
			'cookiepolicy': 'single_host_origin',
			'requestvisibleactions': 'http://schemas.google.com/AddActivity',
			'scope': 'https://www.googleapis.com/auth/plus.login https://www.googleapis.com/auth/userinfo.email'
		});

	}// end function renderSignin
// end controller TourblyCtrl

function signin(){
	console.log('signin invoked by callback');
}