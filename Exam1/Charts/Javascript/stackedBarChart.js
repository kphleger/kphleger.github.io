//some constants
var w = 500;
var h = 300;
var wborder = 90;
var hborder = 30;
var url = "https://hivelab.org/static/exam1.json";
var dispYr = 3;


$.getJSON(url, function(d) {
	//get the domain
	var dom = [];
	for (i = 0; i < d.length; i++) {
		dom = [];
		for (var a in d[i]) {
			if(!isNaN(d[i][a])) {
				dom.push(a);
			}
		}
	}
	var max = [];
	var j = 0;
	//initialize the maximum array
	for (i = 0; i < dom.length; i++) {
		max.push(0);
	}
	for (i = 0; i < d.length; i++) {
		j = 0;
		for (var a in d[i]) {
			if(!isNaN(d[i][a])) {
				max[j] = max[j] + d[i][a];
				console.log(max[j]);
				j++;
			}
		}
	}
	//define the scale functions
	var xScale = d3.scale.ordinal()
		.domain(dom)
		.rangeRoundBands([0, w], wborder/w, 2*wborder/w);
	var yScale = d3.scale.linear()
		.domain([0, Math.max(max)])
		.range([0, h-hborder]);
	var yAxisScale = d3.scale.linear()
		.domain([0, Math.max(max)])
		.range([h-hborder, 0]);
	//put in the svg element
	var chartArea = d3.select("#barchart").append("svg")
		.attr("width", w)
		.attr("height", h);
	//iterate through the data to make room for the student years
	var years = chartArea.selectAll("div")
		.data(d)
		.enter()
		.append("div");
	var yearAttributes = years
		.attr("class", d.Year);
	
	
	//iterate through each year to build more bars and give them attributes
/*	var rectAttributes = bars
		.attr("x", function(d) {
			return xScale(d[1]);
			})
		.attr("y", function(d) { return h-yScale(d[0])-hborder; })
		.attr("height", function(d) { return yScale(d[0]); })
		.attr("width", function(d) { return xScale.rangeBand(); })
		.style("fill", "blue");*/
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
