function addTimes(){
	var date = document.getElementById('date_in').value;
	if(date == ""){
		alert('you must input a date');
		return true;
	}
	var time1 = document.getElementById('time1_in').value;
	var time2 = document.getElementById('time2_in').value;
	var time3 = document.getElementById('time3_in').value;
	var time4 = document.getElementById('time4_in').value;
	var time5 = document.getElementById('time5_in').value;
	var validTimes = [];
	if(time1 != ""){validTimes.push(time1);};	//get valid times
	if(time2 != ""){validTimes.push(time2);};
	if(time3 != ""){validTimes.push(time3);};
	if(time4 != ""){validTimes.push(time4);};	
	if(time5 != ""){validTimes.push(time5);};
	if(validTimes.length === 0){
		alert('you must input at least one time')
		return true;
	}
	const user = firebase.auth().currentUser;
	const gid = document.getElementById('g_id').value;
	var updates = {};
	var numChosen;
	for(var timeIndex in validTimes){
		numChosen = 0;
		var db = firebase.database().ref('/group_times/' + gid);		//this part doesnt work, supossed to add a date_time object to group_times
		const date_time = "" + date + validTimes[timeIndex];			//KNOWN BUG: date_time object is always found as existing
		db.once('value').then(function(time_snap){
			if(time_snap.child('/' + date_time).exists()) {
				console.log('exists');
				console.log(time_snap.child(date_time).val());
				console.log(time_snap.key);
				numChosen = (time_snap.child(date_time).val().numPicks)+1;
				console.log(numChosen);
			}
			else{console.log('hi');}
		});
		var updateData = {
			numPicks: numChosen
		}
		updates['/group_times/' + gid + '/' + date_time] = updateData;
	}
	firebase.database().ref().update(updates);
	return false;
}
