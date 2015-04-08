var csvLink = "https://hivelab.org/static/coffee.csv";

var coffeeTree = {"name": "Coffee Tree", "children": []};
var index = [0,0,0];

function testFor(objList, keyValue) {
	var bool = false;
	if(objList === undefined) { return bool; }
	objList.forEach( function(d) {
		bool = (d.name === keyValue) || bool;
	});
	return bool;
}

function thisIndex(objList, keyValue) {
	for(i = 0; i < objList.length; i++) {
		if(objList[i].name === keyValue) {break;}
	}
	return i;
}

d3.csv(csvLink, function(data) {
	data.forEach( function(d) {
		if(! testFor(coffeeTree.children, d.region)) {
			coffeeTree.children.push(
				{"name": d.region,
				 "children": [{"name": d.state,
					"children": [{"name": d.caffeination,
						"children": [{"name": d.type,
							"children": [d]}
						]}
					]}
				]}
			);
		} else {
			index[0] = thisIndex(coffeeTree.children, d.region);
			if(! testFor(coffeeTree.children[index[0]].children, d.state)) {
				coffeeTree.children[index[0]].children.push(
					{"name": d.state,
					 "children": [{"name": d.caffeination,
						"children": [{"name": d.type,
							"children": [d]}
						]}
					]}
				);
			} else {
				index[1] = thisIndex(coffeeTree.children[index[0]].children, d.state);
				if(! testFor(coffeeTree.children[index[0]].children[index[1]].children, d.caffeination)) {
					coffeeTree.children[index[0]].children[index[1]].children.push(
						{"name": d.caffeination,
						 "children": [{"name": d.type,
							"children": [d]}
						]}
					);
				} else {
					index[2] = thisIndex(coffeeTree.children[index[0]].children[index[1]].children, d.caffeination);
					if(! testFor(coffeeTree.children[index[0]].children[index[1]].children[index[2]].children, d.type)) {
						coffeeTree.children[index[0]].children[index[1]].children[index[2]].children.push(
							{"name": d.type,
							 "children": [d]}
						);
					} else {
						coffeeTree.children[index[0]].children[index[1]].children[index[2]].children.push(d);
					}
				}
			}
		}
	});
});