//http://hivelab.org/static/exam1.json
var w = 500
var h = 300
var url = "https://hivelab.org/static/exam1.json";

$.getJSON(url, function(d) {
	var chartArea = d3.select("#barchart").append("svg")
		.attr("width", w)
		.attr("height", h)
		//.style("background-color", "red");
	var bars = chartArea.selectAll("rect")
		.data(d)
		.enter()
		.append("rect");
	var rectAttributes = bars
		.attr("x", function(d) { return (d["University B"]-60)*10; })
		.attr("y", 0)
		.attr("height", function(d) { return d["University A"]/2; })
		.attr("width", 10)
		.style("fill", "black");
	});
