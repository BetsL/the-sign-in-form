var database = [
	{
		username: 'bets',
		password: 'supersecret'
	},
	{
		username: 'angel',
		password: 'mywoman'
	},
	{
		username: 'paul',
		password: 'garfunkel'
	}
];

var newsFeed = [
	{
		username: 'R. Stone',
		timeline: 'Get offa my cloud!'
	},
	{
		username: 'Jonas',
		timeline: 'I like sweaters.'
	}
];

// 2 parameters; arguments, username + password
function isUserValid(username, password) {
	for (var i=0; i < database.length; i++) {
		if(database[i].username === username &&
			database[i].password === password) {
			return true;
		} 
	}
	return false;
}

function signIn(username, password) {
	if (isUserValid(username, password)) {
		console.log(newsFeed);
	} else {
		alert('Sorry, wrong username and password');
	}
	//for (var i=0; i < database.length; i++) {
	//	if(database[i].username === username &&
	//		database[i].password === password) {
	//		console.log(newsFeed)
	//	} else {
	//		alert('Sorry, wrong username and password');
	//	}
	//}

	//if (username === database[0].username &&
	//	password === database[0].password) {
	//	console.log(newsFeed);
	//} else {
	//	alert('Sorry, wrong username and password!');
	//}
} 

var content = '';

for(var i=0; i<10; i++){
	content += '<div class="post">This is post '+i+'</div>';
}

document.getElementById('newsFeed').innerHTML = content;

var userNamePrompt = prompt('What\'s your username?');
var passwordPrompt = prompt('What\'s your password?');

signIn(userNamePrompt, passwordPrompt);






