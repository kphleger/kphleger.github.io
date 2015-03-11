//http://hivelab.org/static/exam1.json
var w = 500
var h = 300
var url = "https://hivelab.org/static/exam1.json";
$.getJSON(url, function(data) {
	console.log("it works");
	var chartArea = d3.select("#barchart").append("svg")
		.attr("width", w)
		.attr("height", h)
	/*var bars = d3.selectAll("rect")
		.data(students)
		.enter()
		.append("rect")*/
	});