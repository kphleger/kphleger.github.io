var csvLink = "https://hivelab.org/static/coffee.csv";

var coffeeTree = {"name": "Coffee Tree", "children": []};
var regions = [];
var states = [];
var caffeinations = [];
var types = [];


d3.csv(csvLink, function(data) {
	data.forEach( function(d) {
		if( ! (regions.indexOf(d.region)+1) ) {
			regions.push(d.region);
		}
		if( ! (states.indexOf(d.state)+1) ) {
			states.push(d.state);
		}
		if( ! (caffeinations.indexOf(d.caffeination)+1) ) {
			caffeinations.push(d.caffeination);
		}
		if( ! (types.indexOf(d.type)+1) ) {
			types.push(d.type);
		}
	});
	regions.forEach( function(d) {
		coffeeTree.children.push({"name": d, "children": 
			data.filter(function(obj) {
				if( obj.region === d ) {return obj};
			})
		});
	});
});