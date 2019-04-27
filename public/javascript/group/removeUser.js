function removeUser(){
	if(confirm('Are you sure you want to leave the group?')){
		var userID = firebase.auth().currentUser.uid;
		var groupID = document.getElementById("g_id").value;
		var db = firebase.database().ref();
		db.child('group_member_table/'+groupID+'/'+userID).remove();
		db.child('users/'+userID+'/'+groupID).remove();
		toMainPage();
	}
}
function removeGroup(){
	if(confirm('Are you sure you want to cancel the group?')){		//KNOWN BUG: should remove g_id from all users table, not just admins
		var userID = firebase.auth().currentUser.uid;
		var groupID = document.getElementById('add_key').value;
		var g_id = groupID.substring(4);
		var db = firebase.database().ref();
		db.child('group_member_table/'+g_id).remove();
		db.child('groups/'+g_id).remove();
		db.child('users/'+userID+'/'+g_id).remove();
		toMainPage();
	}
}
