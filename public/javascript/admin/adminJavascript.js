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

function EditAdmins()
{
	var admin = document.getElementById("adminName");
	var option = document.getElementById("adminChangeSelect").selected;
	if(admin == null || admin.value == "")
	{
		alert("Please enter an admin email to change");
	//	return ;
	}
	if(option = "Pick an option")
	{
		alert("Please pick an edit option");
		//return ;
	}
	var adminEmail = admin.value;
	console.log(adminEmail);
	console.log(option);
}
