var w = 750;
var h = 300;
/*
var mathData = [
	[12,3],
	[14,8],
	[16,14],
	[18,15],
	[20,12],
	[22,1],
	[24,3],
	[26,1]
];
var sciData = [
	[4,5],
	[6,12],
	[8,16],
	[10,11],
	[12,7],
	[14,2],
	[16,3]
];
*/
var mathData = [0, 0, 0, 0, 3, 8, 14, 15, 12, 1, 3, 1];
var sciData = [5, 12, 16, 11, 7, 2, 3, 0, 0, 0, 0, 0];

var x = d3.scale.linear()
	.domain([0, 16])
	.range([0,(w/2)-10]);
var y = d3.scale.linear()
	.domain([4, 26])
	.range([0,h-3*mathData.length]);
	
var svgContainer = d3.select("body").append("svg")
	.attr("width", w)
	.attr("height", h);

var xpos = 0;
var ypos = 0;
var wide = 0;
var tall = 0;

for(i=0; i < mathData.length; i++){
	ypos = y(2*i+4)+(i+1);
	wide = x(mathData[i]);
	tall = y(6);
	var rectangle = svgContainer.append("rect")
		.attr("x", 10)
		.attr("y", ypos)
		.attr("width", wide)
		.attr("height", tall);
}

for(i=0; i < sciData.length; i++){
	ypos = y(2*i+4)+(i+1);
	wide = x(sciData[i]);
	xpos = w-wide-10;
	tall = y(6);
	var rectangle = svgContainer.append("rect")
		.attr("x", xpos)
		.attr("y", ypos)
		.attr("width", wide)
		.attr("height", tall);
}

var xAxis = d3.svg.axis()
	.scale(x)
	.orient("bottom")

svgContainer.append("g")
	.call(xAxis);

var yAxis = d3.svg.axis()
	.scale(x)
	.orient("bottom")

svgContainer.append("g")
	.call(xAxis);

