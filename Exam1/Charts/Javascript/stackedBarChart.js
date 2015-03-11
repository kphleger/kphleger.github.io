//some constants
var w = 500;
var h = 300;
var wborder = 90;
var hborder = 30;
var url = "https://hivelab.org/static/exam1.json";
var dispYr = 3;


$.getJSON(url, function(d) {
	//get the domain and data
	var data = [];
	var dom = [];
	var range = [];
	var year = [];
	var domy = [];
	for (i = 0; i < d.length; i++) {
		year = [];
		domy = [];
		for (var a in d[i]) {
			if(isNaN(d[i][a])) {
				range.push(d[i][a]);
			}else{
				year.push([d[i][a], a]);
				if(d[i][a] > max) { max = d[i][a]; }
				domy.push(a);
			}
		}
		data.push(year);
		dom = domy;
	}
	
	//find the maximum
	var max = [];
	for (i = 0; i < dom.length; i++) {
		max.push(0);
	}
	for (i = 0; i < d.length; i++) {
		j = 0;
		for (var a in d[i]) {
			if(!isNaN(d[i][a])) {
				max[j] = max[j] + d[i][a];
				j++;
			}
		}
	}
	for (i = 1; i < max.length; i++) {
		if(max[i] > max[0]) { max[0] = max[i]; }
	}
	max = max[0];
	
	//define the scale functions
	var xScale = d3.scale.ordinal()
		.domain(dom)
		.rangeRoundBands([0, w], wborder/w, 2*wborder/w);
	var yScale = d3.scale.linear()
		.domain([0, max])
		.range([0, h-hborder]);
	var yAxisScale = d3.scale.linear()
		.domain([0, max])
		.range([h-hborder, 0]);
	
	//put in the svg element
	var chartArea = d3.select("#barchart").append("svg")
		.attr("width", w)
		.attr("height", h);
	
	//iterate through the data to make bar chart
	var hSoFar = [h-hborder, h-hborder, h-hborder, h-hborder, h-hborder];
	//for (i = 1; i < range.length; i++) {
		var index = 0;
		var jndex = 0;
		var bars = chartArea.selectAll("g")
			.data(data/*, function() { index++; }*/)
			.enter()
			.append("g")
			.selectAll("rect")
			.data(function(d) {/* jndex++;*/ return d; })
			.enter()
			.append("rect")
			.attr("x", function(d) { return xScale(d[1]); })
			.attr("y", function(d) { 
				//hSoFar[jndex] = hSoFar[jndex] - yScale(d[0])
				//console.log(hSoFar[jndex]);
				//return hSoFar[jndex]; 
				return h-yScale(d[0])-hborder;
				})
			.attr("height", function(d) { return yScale(d[0]); })
			.attr("width", function(d) { return xScale.rangeBand(); })
			.attr("id", function() {
				return range[index];
				});
	//}
	
	//build the axes
	var xAxis = d3.svg.axis()
		.scale(xScale);
	var xAxisGroup = chartArea.append("g")
		.attr("class", "axis")
		.attr("transform", "translate(0," + (h - hborder) + ")")
		.call(xAxis);
	var yAxis = d3.svg.axis()
		.scale(yAxisScale)
		.orient("left");
	var yAxisGroup = chartArea.append("g")
		.attr("class", "axis")
		.attr("transform", "translate(" + wborder*0.3 + ", 0)")
		.call(yAxis);
	});
