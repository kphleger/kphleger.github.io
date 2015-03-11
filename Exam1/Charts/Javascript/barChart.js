//some constants
var w = 500;
var h = 300;
var url = "https://hivelab.org/static/exam1.json";
var dispYr = 3;

$.getJSON(url, function(d) {
	//move the data to an array
	var data = [];
	for (i = 0; i < d.length; i++) {
		var year = [];
		for (var a in d[i]) {
			if(!isNaN(d[i][a])) {
				year.push(d[i][a]);
			}
		}
		data.push(year);
	}
	//define the scale functions
	var xScale = d3.scale.ordinal()
		.domain([0, 1, 2, 3, 4])
		.rangeBands(w, 2, 2);
	var yScale = d3.scale.linear()
		.domain([0, 126])
		.range([0,h]);
	//put in the svg element
	var chartArea = d3.select("#barchart").append("svg")
		.attr("width", w)
		.attr("height", h);
	var bars = chartArea.selectAll("rect")
		.data(data[dispYr])
		.enter()
		.append("rect");
	var rectAttributes = bars
		.attr("x", function(d) {
			return xScale(data[dispYr].indexOf(d))*data[dispYr].indexOf(d);
			})
		.attr("y", function(d) { return h-yScale(d); })
		.attr("height", function(d) { return yScale(d); })
		.attr("width", function(d) { return xScale(0); })
		.style("fill", "blue");
	});
