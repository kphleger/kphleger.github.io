//some constants
var w = 500;
var h = 300;
var wborder = 150;
var hborder = 30;
var url = "https://hivelab.org/static/exam1.json";


$.getJSON(url, function(d) {
	//get the domain and data
	var data = [];
	var dom = [];
	var rang = [];
	var year = [];
	for (i = 0; i < d.length; i++) {
		year = [];
		dom = [];
		for (var a in d[i]) {
			if(isNaN(d[i][a])) {
				rang.push(d[i][a]);
			}else{
				year.push([d[i][a], a]);
				if(d[i][a] > max) { max = d[i][a]; }
				dom.push(a);
			}
		}
		data.push(year);
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
	var index = 0;
	var bars = chartArea.selectAll("g")
		.data(data, function(d) { 
			for(i=0; i<d.length; i++) {
				d[i].push(index);
				d[i].push(i);
			}
			index++; 
			return d; 
			})
		.enter()
		.append("g")
		.selectAll("rect")
		.data(function(d) { 
			return d; 
			})
		.enter()
		.append("rect")
		.attr("id", function(d) {
			return rang[d[2]];
			})
		.attr("x", function(d) { return xScale(d[1]); })
		.attr("y", function(d) { 
			hSoFar[d[3]] = hSoFar[d[3]] - yScale(d[0])
			return hSoFar[d[3]]; 
			})
		.attr("height", function(d) { return yScale(d[0]); })
		.attr("width", function(d) { return xScale.rangeBand(); });
		
	
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
	var yAxisLabel = chartArea.append("text")
		.attr("class", "ylabel")
		.attr("text-anchor", "end")
		.attr("x", -h/3)
		.attr("dy", "0.7em")
		.attr("transform", "rotate(-90)")
		.text("Students");
	
	//Build the legend
	var legendArea = d3.select("#legend").append("svg")
		.attr("width", 100)
		.attr("height", rang.length*12);
	var legendColors = legendArea.selectAll("rect")
		.data(rang)
		.enter()
		.append("rect")
		.attr("id", function(d) { return d; })
		.attr("width", 10)
		.attr("height", 10)
		.attr("x", 1)
		.attr("y", function(d, i) { return i*11+1; });
	var legendTitles = legendArea.selectAll("text")
		.data(rang)
		.enter()
		.append("text")
		.text(function(d) { return d; })
		.attr("width", 98)
		.attr("height", 10)
		.attr("x", 12)
		.attr("y", function(d, i) { return i*11+11; });
	
	});
