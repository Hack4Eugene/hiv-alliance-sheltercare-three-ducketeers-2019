/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function Parse(str)
{
        var ret = str.replace(/\./g, "");             //remove all instances of invalid characters
        ret = ret.replace(/#/g, "");
        ret = ret.replace(/\$/g, "");
        ret = ret.replace(/\[/g, "");
        ret = ret.replace(/]/g, "");
        return ret;
}

function addAdminFunction()
{
	var admin = document.getElementById("updateText");
	if(admin == null || admin.value == "")
	{
		alert("Please enter an admin email to change");
		return ;
	}
	var adminEmail = admin.value;
	console.log(adminEmail);
	var db = firebase.database().ref();
	var query = "/encounterAdmins/"+Parse(adminEmail);
	console.log(query);
	db.child(query).once('value').then(function(snapshot){
		if(snapshot.exists()){alert("this admin already exists"); return ;}
		else
		{
			var updates = {};
			updates[query] = true;
			alert("Admin successfully added to the database");
			return firebase.database().ref().update(updates);
		}
	});
	return ;
}

function addUserFunction()
{
	var user = document.getElementById("updateText");
	if(user == null || user.value == "")
	{
		alert("Please enter a users email to change");
		return ;
	}
	var userEmail = user.value;
	console.log(userEmail);
	var db = firebase.database().ref();
	var query = "/encounterUsers/"+Parse(userEmail);
	console.log(query);
	db.child(query).once('value').then(function(snapshot){
		if(snapshot.exists()){alert("This user already exists"); return ;}
		else
		{
			var updates = {};
			updates[query] = true;
			alert("User successfully added to the database");
			return firebase.database().ref().update(updates);
		}
	});
	return ;
}
