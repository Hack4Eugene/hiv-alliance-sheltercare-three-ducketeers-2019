function UpdatePage(){
	const formdata = window.location.search;
	const g_key = formdata.substring(5);	//get gid from link
	const user = firebase.auth().currentUser;
	var db = firebase.database().ref();
	db.child('/group_member_table/' + g_key + '/' + user.uid).once('value').then(snap => {	//if user not in group, redirect them
		if(!snap.exists()){
			alert('You are not a part of the requested group. Redirecting to main page.');
			toMainPage();
		}
	});
	var gid_storage = document.getElementById('g_id');	//store gid for future use
	gid_storage.value = g_key;
	db.child('/groups/'+g_key).once('value').then(groupSnapshot => {		//customize data based on user input
		document.getElementById('g_name').innerText = groupSnapshot.val().title;
		document.getElementById('g_brief').innerText = groupSnapshot.val().brief;
		document.getElementById('num_members').value = "Members: " + groupSnapshot.val().numAttendees;
		document.getElementById('num_responses').value = "Responses: " + groupSnapshot.val().numResponses;
		document.getElementById('startWindow').value = "Start date: "+groupSnapshot.val().startWindow;
		document.getElementById('endWindow').value = "End date: "+groupSnapshot.val().endWindow;
		document.getElementById('meeting_len').value = "Meeting len: " + groupSnapshot.val().meetingLen + " minutes";
		document.getElementById('add_key').value = "key:" + groupSnapshot.key;
	});
	var memberList = document.getElementById("member_list");
	var memberNode;
	db.child('/group_member_table/' + g_key + '/').once('value').then(memberSnapshot => {	//for each member
		memberSnapshot.forEach(function(personSnap) {
			
			if((!personSnap.val().isAdmin) && personSnap.key == user.uid){		//if current user and not admin, disable priviledges
				document.getElementById('abort_group').innerText = 'Leave Group';
				document.getElementById('calculate_now').setAttribute('hidden', 'true');
				document.getElementById('abort_group').onclick = removeUser;
			}
			else{
				document.getElementById('abort_group').onclick = removeGroup;
			}
			memberNode = document.createElement('li');
			memberNode.appendChild(document.createTextNode(personSnap.val().u_email));
			memberList.appendChild(memberNode);	//append member to list
		});
	});
}
