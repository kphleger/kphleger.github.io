
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
		var avgGPA = averageGPA(data);
		var avgGRE_V = averageGRE_V(data);
		var avgGRE_Q = averageGRE_Q(data);
		var avgEssay = averageEssay(data);
		var avgRecom = averageRecom(data);
		$.each(data, function(i,f) {
			var tblRow = "<tr>" + "<td>" +f.Name + "</td>" + "<td id='GPA" + i + "'> " + f.GPA
			+ "</td>" + "<td id='GRE_V" + i + "'>" + f.GRE_V + "</td>" + "<td id='GRE_Q" + i + "'> " + f.GRE_Q +
			"</td>" + "<td id='Essay" + i + "'>" + f.Essay + "</td>" + "<td id='Recom" + i + "'> " + f.Recom +
			"</td>" + "</tr>";
//			console.log(f.Name);
			$(tblRow).appendTo("#entrydata tbody");
		});
		for (i = 0; i < data.length; i++) {
			if (data[i].GPA <= avgGPA) document.getElementById("GPA" + i).style.backgroundColor="darkgray";
			if (data[i].GRE_V <= avgGRE_V) document.getElementById("GRE_V" + i).style.backgroundColor="darkgray";
			if (data[i].GRE_Q <= avgGRE_Q) document.getElementById("GRE_Q" + i).style.backgroundColor="darkgray";
			if (data[i].Essay <= avgEssay) document.getElementById("Essay" + i).style.backgroundColor="darkgray";
			if (data[i].Recom <= avgRecom) document.getElementById("Recom" + i).style.backgroundColor="darkgray";
		}
	});
});

//students = JSON.parse(students);

//document.getElementById("george").innerHTML = students;

/*

*/