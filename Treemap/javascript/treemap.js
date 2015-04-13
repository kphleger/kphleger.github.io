//declare the big constant variables
//var csvLink = "https://hivelab.org/static/coffee.csv";
var csvLink = "data/coffee.csv";
var margin = {top: 40, right: 10, bottom: 10, left: 10};

var coffeeTreeMap;

function position() {
  this.style("left", function(d) { return d.x + "px"; })
      .style("top", function(d) { return d.y + "px"; })
      .style("width", function(d) { return Math.max(0, d.dx) + "px"; })
      .style("height", function(d) { return Math.max(0, d.dy) + "px"; });
}
	
//This function is almost verbatim from an online source; I couldn't find a
//  good way to improve on it.
function reNameTree(tree, value_key) {
	for(var key in tree) {
		if(key == "key") {
			tree.name = tree.key;
			delete tree.key;
		}
		if(key == "values") {
			tree.children = [];
			for (item in tree.values) {
				tree.children.push(reNameTree(tree.values[item],value_key));
			}
			delete tree.values;
		}
		if (key == value_key) {
			tree.value = parseFloat(tree[value_key]);
			delete tree[value_key];
		}
	}
	return tree;
}
		
d3.csv(csvLink, function(data) {
	// define width and height based on the margin
	var width = 1100 - margin.left - margin.right;
	var height = 600 - margin.top - margin.bottom;
	
	// nest the data into coffeeTreeMap
	coffeeTreeMap = {"key": "National Coffee Sales from 1/1/2010 to 12/1/2011", "values": d3.nest()
		.key(function(d) {return d.region; })
		.key(function(d) {return d.state; })
		.key(function(d) {return d.caffeination; })
//		.key(function(d) {return d.type; })
		.entries(data)
		};
	
	//Format the new data for the treemap
	coffeeTreeMap = reNameTree(coffeeTreeMap, "sales");
	
	//Generate the Treemap
	var treemap = d3.layout.treemap()
		.size([width, height])
		.padding([14,0,0,0])
		.sticky(true)
		.value(function(d) { return d.value; });

	var div = d3.select("#treediv")
		.style("position", "relative")
		.style("width", (width + margin.left + margin.right) + "px")
		.style("height", (height + margin.top + margin.bottom) + "px")
		.style("left", margin.left + "px")
		.style("top", margin.top + "px");

	var node = div.datum(coffeeTreeMap).selectAll(".node")
		.data(treemap.nodes)
		.enter()
		.append("div")
		.attr("class", "node")
		.call(position)
		.style("background", function(d) {
			if(d.caffeination === "Decaf") {
				return "#FF9933";
			} else if(d.caffeination === "Regular") {
				return "#993300";
			}
			return "#291400";
			})
		.text(function(d) { return d.name; });
});
