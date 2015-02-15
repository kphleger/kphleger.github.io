
function averageGPA(obj) {
	var tot = 0;
	for (i = 0; i < obj.length; i++) {
//		console.log(obj[i].GPA);
		tot += obj[i].GPA;
	}
	return tot/obj.length;
}
function averageGRE_V(obj) {
	var tot = 0;
	for (i = 0; i < obj.length; i++) {
//		console.log(obj[i].GRE_V);
		tot += obj[i].GRE_V;
	}
	return tot/obj.length;
}
function averageGRE_Q(obj) {
	var tot = 0;
	for (i = 0; i < obj.length; i++) {
//		console.log(obj[i].GRE_Q);
		tot += obj[i].GRE_Q;
	}
	return tot/obj.length;
}
function averageEssay(obj) {
	var tot = 0;
	for (i = 0; i < obj.length; i++) {
//		console.log(obj[i].Essay);
		tot += obj[i].Essay;
	}
	return tot/obj.length;
}
function averageRecom(obj) {
	var tot = 0;
	for (i = 0; i < obj.length; i++) {
//		console.log(obj[i].Recom);
		tot += obj[i].Recom;
	}
	return tot/obj.length;
}

$(function(){
	var JSONLink = "https://hivelab.org/static/students.json";
	$.getJSON(JSONLink, function(data) {
		
		$.each(data, function(i,f) {
			var tblRow = "<tr>" + "<td>" +f.Name + "</td>" + "<td>" + f.GPA
			+ "</td>" + "<td>" + f.GRE_V + "</td>" + "<td> " + f.GRE_Q +
			"</td>" + "<td>" + f.Essay + "</td>" + "<td>" + f.Recom +
			"</td>" + "</tr>";
//			console.log(f.Name);
			$(tblRow).appendTo("#entrydata tbody");
		});
	});
});

//students = JSON.parse(students);

//document.getElementById("george").innerHTML = students;

/*

*/