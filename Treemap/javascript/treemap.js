var csvLink = "https://hivelab.org/static/coffee.csv";

var coffeeTree = {"name": "Coffee Tree", "children": []};
var regions = [];
var states = [];
var caffeinations = [];
var types = [];

function children(thisParent, list, grandChildren) {
	var newChildren = [];
	list.forEach( function(d) {
		newChildren.push({"name": d, "children": [grandChildren]});
	})
	return newChildren;
}

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
	coffeeTree.children = (
		children(regions, children(states, children(caffeinations, children(types, ["a", "b", "c"]))))
	);
/*			data.filter(function(obj) {
				if( obj.region === d ) {return obj};
			})*/
});