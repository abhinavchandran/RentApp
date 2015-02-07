var form = document.getElementsByTagName("form")[0];

form.onsubmit = function(e) {
	e.preventDefault();
	
	var email = document.getElementById("email").value;
	var password = document.getElementById("password").value;

	var user = {
		email: email,
		password: password
	};

	var userID = parseAPI.loginUser(user, function(userID) {
		console.log(userID);

		if(userID)
			window.location = "/";
	});
}

