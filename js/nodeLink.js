//var jsonLink = "https://kphleger.github.io/js/siteMap.json";
var jsonLink = "js/siteMap.json";

var width = 960,
    height = 500;

var force = d3.layout.force()
    .charge(-100)
    .linkDistance(300)
    .size([width, height]);

var svg = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height);

d3.json(jsonLink, function(error, graph) {
	if (error) throw error;

	force
		.nodes(graph.nodes)
		.links(graph.links)
		.start();

	var link = svg.selectAll(".link")
		.data(graph.links)
		.enter().append("line")
		.attr("class", "link")
		.style("stroke-width", function(d) {return d.value; });

	var gnodes = svg.selectAll("g.node")
		.data(graph.nodes)
		.enter().append('g')
		.attr("class", "gnode");
	
	var node = gnodes.append("circle")
		.attr("class", "node")
		.attr("r", function(d) {return Math.sqrt(1000*d.value/3.14); })
		.style("fill", function(d) {return d.color; })
		.on("click", function(d) {window.location.href = d.link;})
		.call(force.drag);

	var labels = gnodes.append("text")
		.text(function(d) {return d.name; });
		
	force.on("tick", function() {
		link.attr("x1", function(d) {return d.source.x; })
			.attr("y1", function(d) {return d.source.y; })
			.attr("x2", function(d) {return d.target.x; })
			.attr("y2", function(d) {return d.target.y; });

		gnodes.attr("transform", function(d) { 
			return 'translate(' + [d.x, d.y] + ')';
		});
	});
});