function validateNewGroup(){
	//get values from html page
	var start = document.getElementById("start_d_in").value;
	var end = document.getElementById("end_d_in").value;
	var len = document.getElementById("len_in").value;
	var size = document.getElementById("numAttendees_in").value;
	var name = document.getElementById("meeting_name_in").value;
	var description = document.getElementById("description_in").value;
	const user = firebase.auth().currentUser;
	if(start.length == 0 || end.length == 0 || len.length == 0 || size.length == 0 || name.length == 0 || description == 0){
		//if user doesnt input enough fields reprompt
		alert("Please input all fields");
		return true;
	}
	//store data to ship to database
	var postData = {
		title: name,
		brief: description,
		endWindow: end,
		meetingLen: len,
		numAttendees: parseInt(size),
		numResponses: 0,
		startWindow: start
	};
	var gmtData = {
		isAdmin: true,
		responded: false,
		u_email: user.email
	};
	const postKey = firebase.database().ref().child('groups').push().key;	//create new group key and put it in database
	var updates = {};
	//update database to include the new group
	//add to users list of groups
	updates['/groups/' + postKey] = postData;
	updates['/users/' + user.uid + '/' + postKey] = true;
	updates['/group_member_table/' + postKey + '/' + user.uid] = gmtData;
	document.getElementById("g_key").textContent = "Copy this entire key: " + postKey; //give key back to admin
	return firebase.database().ref().update(updates);	//call update function to push updates
}
