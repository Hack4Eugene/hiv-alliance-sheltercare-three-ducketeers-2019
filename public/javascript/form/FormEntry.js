//TODO write form parser to store to firebase RT-db
function ParseForm()
{
	var clientName = document.getElementById("clientname").value;
	var address = document.getElementById("address").value;
	var programDropDown = document.getElementById("program");
	var comments = document.getElementById("comments").value;
	var otherIssue = document.getElementById("other").value;
	var possibleIssues = document.getElementsByName("issue");
	var possibleResponses = document.getElementsByName("response");
	var issues = [];
	var responses = [];
	var otherTrue = possibleIssues[4].checked;
	var allResponses = "";
	var allIssues = "";
	const program = programDropDown.options[programDropDown.selectedIndex].text;
	for(issue in possibleIssues)
	{
		if(possibleIssues[issue].checked){issues.push(possibleIssues[issue].value);}
	}
	for(res in possibleResponses)
	{
		if(possibleResponses[res].checked){responses.push(possibleResponses[res].value);}
	}
	for(issue in issues)
	{
		allIssues = allIssues + issues[issue];
		if(issue != issues.length-1){allIssues = allIssues+","}
	}
	if(otherTrue)
	{
		allIssues = allIssues + ": " + otherIssue;
	}
	for(response in responses)
	{
		allResponses = allResponses + responses[response];
		if(response != responses.length-1){allResponses = allResponses+","}
	}
	var key = firebase.database().ref().child("Reports").push().key;
	var path = "/Reports/"+key+"/";
	var updates = {};
	updates[path+"Address"] = address;
	updates[path+"Comments"] = comments;
	updates[path+"Issue"] = allIssues;
	updates[path+"Name"] = clientName;
	updates[path+"Program"] = program;
	updates[path+"Responses"] = allResponses;
	updates[path+"Status"] = "Launched";
	updates[path+"Timestamp"] = address;
	return firebase.database().ref().update(updates);	
}
