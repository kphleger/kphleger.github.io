/*var obj = JSON.parse ('{"students" : '+
	'[{"Name":"Cristen Oconnell","GPA":3,"GRE_V":150,"GRE_Q":170,"Essay":5,"Recom":1},'+
	'{"Name":"Marla Provenzano","GPA":4,"GRE_V":165,"GRE_Q":169,"Essay":3,"Recom":2},'+
	'{"Name":"Cleta Morena","GPA":3.2,"GRE_V":170,"GRE_Q":168,"Essay":2,"Recom":2}]}');

function buttonChange() {
	document.getElementById("george").innerHTML = obj.students[0].Name;
}*/

$(function(){
	var JSONLink = "https://hivelab.org/static/students.json";
	$.getJSON(JSONLink, function(data) {	
		$.each(data, function(i,f) {
			var tblRow = "<tr>" + "<td>" +f.Name + "</td>" + "<td>" + f.GPA
			+ "</td>" + "<td>" + f.GRE_V + "</td>" + "<td> " + f.GRE_Q +
			"</td>" + "<td>" + f.Essay + "</td>" + "<td>" + f.Recom +
			"</td>" + "</tr>";
			$(tblRow).appendTo("#entrydata tbody");
		});
	});
});
