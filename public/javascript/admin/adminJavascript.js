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
	var db = firebase.database().ref();
	var query = "/encounterAdmins/"+Parse(adminEmail);
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
	var db = firebase.database().ref();
	var query = "/encounterUsers/"+Parse(userEmail);
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

function deleteAdminFunction()
{
    var admin = document.getElementById("updateText");
    if (admin == "null" || admin.nodeValue == '')
    {
      alert("please enter an admin email to change");
      return ;
    }
      var adminEmail = admin.value;
      var db = firebase.database().ref();
		var query = "/encounterAdmins/"+Parse(adminEmail);
		db.child(query).once("value").then(function(snapshot){
		if (snapshot.exists()) {
			if(confirm("Are you sure you want to delete this admin?"))
			{ 
				 db.child(query).remove();
				 alert("Admin was successfully removed");
			}
		}
		else
		{
			alert("This admin does not exist.");
		}
	});
}

function deleteUserFunction()
{
    var user = document.getElementById("updateText");
    if (user == "null" || user.nodeValue == '')
    {
      alert("please enter an user email to change");
      return ;
    }
      var userEmail = user.value;
      var db = firebase.database().ref();
		var query = "/encounterUsers/"+Parse(userEmail);
		db.child(query).once("value").then(function(snapshot){
		if (snapshot.exists()) {
			if(confirm("Are you sure you want to delete this user?"))
			{ 
				db.child(query).remove();
				 alert("User was successfully removed");
			}
		}
		else
		{
			alert("This user does not exist.");
		}
	});
		
}
function addProgramFunction()
{
	var program = document.getElementById("updateText");
	if(program == "null" | program.value == "")
	{
		alert("please enter a program to change");
		return ;
	}
	var prog = program.value;
	var db = firebase.database().ref();
	var query = "/programs/"+Parse(prog);
	db.child(query).once("value").then(function(snapshot){
		if(snapshot.exists())
		{
			alert("this program already exists");
			return ;
		}
		else
		{
			updates = {};
			updates[query] = true;
			alert("program successfully added");
			return firebase.database().ref().update(updates);
		}
	});	


}
function deleteProgramFunction()
{
	var program = document.getElementById("updateText");
	if(program == "null" | program.value == "")
	{
		alert("please enter a program to change");
		return ;
	}
	var prog = program.value;
	var db = firebase.database().ref();
	var query = "/programs/"+Parse(prog);
	db.child(query).once("value").then(function(snapshot){
		if(snapshot.exists())
		{
			if(confirm("Are you sure you want to delete this program?"))
			{
				db.child(query).remove();
				alert("successfully removed " + prog);
			}
			return ;
		}
		else
		{
			alert("this program does not exist");
			return ;
		}
	});	


}
