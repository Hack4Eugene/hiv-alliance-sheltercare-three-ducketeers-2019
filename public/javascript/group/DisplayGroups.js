function DisplayUsersGroups(){  //display titles of users groups
	var list = document.getElementById("group_list");	//get list and create vars
	var newNode;
	var newButton;
	var newForm;
	var store_gid;
	var submit;
	var groupName;
	var db = firebase.database().ref();	//get database reference
	db.child('/users/' + firebase.auth().currentUser.uid).once('value', snapshot => {		//access users table
		snapshot.forEach(function(userSnapshot) {	//for each group the user is a part of
			db.child('/groups/' + userSnapshot.key).on('value', groupSnapshot => {	//get group name and add it to the list fetch extra info to store for when button is clicked
				groupName = groupSnapshot.val().title;
				newNode = document.createElement("li");
				//create form
				newForm = document.createElement("form");
				newForm.setAttribute('method', 'get');
				newForm.setAttribute('name', 'view_group_form');
				newForm.setAttribute('action', 'TeamPlannerViewGroupPage.html');
				//create submit button
				submit = document.createElement('input');
				submit.setAttribute('type', 'submit');
				submit.value = 'Go to '+groupName;
				newForm.appendChild(submit);
				//create key container
				store_gid = document.createElement('input');
				store_gid.setAttribute('type', 'text');
				store_gid.setAttribute('name', 'gid');
				store_gid.setAttribute('id', 'gid');
				store_gid.value = groupSnapshot.key;
				store_gid.hidden = true;
				newForm.appendChild(store_gid);
				//append form to node
				newNode.appendChild(newForm);
				//newNode.setAttribute("id", text);
				list.appendChild(newNode);
			});
		});
	});
}
