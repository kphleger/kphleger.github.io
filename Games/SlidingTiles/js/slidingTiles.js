function Tile(pP, loc, img) {
	this.properPlace = pP;
	this.location = loc;
	this.image = img;
	this.move = function(blankSpace) {
		if((Math.abs(blankSpace - this.location) === 1) || (Math.abs(blankSpace - this.location) === 10)) {
			var temp = this.location;
			this.location = blankSpace;
			blankSpace = temp;
		} else {
			console.log("That move is not allowed");
		}
		return blankSpace;
	}
	this.getXLoc = function() {
		return 170*(this.location%10);
	}
	this.getYLoc = function() {
		return 170*Math.floor(this.location/10);
	}
	this.getImage = function() {
		return this.image;
	}
	this.isHome = function() {if(this.properPlace === this.location){return true;}}
}

function render() {
	t00i.setAttribute('x', t00.getXLoc());
	t00i.setAttribute('y', t00.getYLoc());
	t01i.setAttribute('x', t01.getXLoc());
	t01i.setAttribute('y', t01.getYLoc());
	t02i.setAttribute('x', t02.getXLoc());
	t02i.setAttribute('y', t02.getYLoc());
	t10i.setAttribute('x', t10.getXLoc());
	t10i.setAttribute('y', t10.getYLoc());
	t11i.setAttribute('x', t11.getXLoc());
	t11i.setAttribute('y', t11.getYLoc());
	t12i.setAttribute('x', t12.getXLoc());
	t12i.setAttribute('y', t12.getYLoc());
	t20i.setAttribute('x', t20.getXLoc());
	t20i.setAttribute('y', t20.getYLoc());
	t21i.setAttribute('x', t21.getXLoc());
	t21i.setAttribute('y', t21.getYLoc());
	victory(checkWin());
}

function checkWin() {
	return t00.isHome() && t01.isHome() && t02.isHome() && t10.isHome() && t11.isHome() && t12.isHome && t20.isHome() && t21.isHome();
}

function victory(isWon) {
	if(isWon) {
		var t22 = new Tile(22, 22, 'js/22.png');
		var t22i = document.createElementNS(xmlns, "image");
		t22i.setAttribute('width', '170');
		t22i.setAttribute('height', '170');
		t22i.getAttributeNS('http://www.w3.org/1999/xlink', 'href');
		t22i.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', t22.getImage());
		t22i.setAttribute('x', t22.getXLoc());
		t22i.setAttribute('y', t22.getYLoc());
		svg.appendChild(t22i);
		places[0] = 33;
		return true;
	}
	return false;
}

//make the eight tiles
places = [00, 01, 02, 10, 11, 12, 20, 21, 22];

var xmlns = "http://www.w3.org/2000/svg";
var svg = document.createElementNS(xmlns, "svg");
svg.setAttribute('width', '520');
svg.setAttribute('height', '520');
svg.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink");
document.body.appendChild(svg);

//initialize tile 00
var t00 = new Tile(00, places.splice(Math.floor(Math.random() * places.length), 1)[0], "js/00.png");
var t00i = document.createElementNS(xmlns, "image");
t00i.setAttribute('width', '170');
t00i.setAttribute('height', '170');
t00i.onclick = (function() {
	places[0] = t00.move(places[0]);
	render();
	});
t00i.getAttributeNS('http://www.w3.org/1999/xlink', 'href');
t00i.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', t00.getImage());
svg.appendChild(t00i);

//initialize tile 01
var t01 = new Tile(01, places.splice(Math.floor(Math.random() * places.length), 1)[0], "js/01.png");
var t01i = document.createElementNS(xmlns, "image");
t01i.setAttribute('width', '170');
t01i.setAttribute('height', '170');
t01i.onclick = (function() {
	places[0] = t01.move(places[0]);
	render();
	});
t01i.getAttributeNS('http://www.w3.org/1999/xlink', 'href');
t01i.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', t01.getImage());
svg.appendChild(t01i);

//initialize tile 02
var t02 = new Tile(02, places.splice(Math.floor(Math.random() * places.length), 1)[0], "js/02.png");
var t02i = document.createElementNS(xmlns, "image");
t02i.setAttribute('width', '170');
t02i.setAttribute('height', '170');
t02i.onclick = (function() {
	places[0] = t02.move(places[0]);
	render();
	});
t02i.getAttributeNS('http://www.w3.org/1999/xlink', 'href');
t02i.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', t02.getImage());
svg.appendChild(t02i);

//initialize tile 10
var t10 = new Tile(10, places.splice(Math.floor(Math.random() * places.length), 1)[0], "js/10.png");
var t10i = document.createElementNS(xmlns, "image");
t10i.setAttribute('width', '170');
t10i.setAttribute('height', '170');
t10i.onclick = (function() {
	places[0] = t10.move(places[0]);
	render();
	});
t10i.getAttributeNS('http://www.w3.org/1999/xlink', 'href');
t10i.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', t10.getImage());
svg.appendChild(t10i);

//initialize tile 11
var t11 = new Tile(11, places.splice(Math.floor(Math.random() * places.length), 1)[0], "js/11.png");
var t11i = document.createElementNS(xmlns, "image");
t11i.setAttribute('width', '170');
t11i.setAttribute('height', '170');
t11i.onclick = (function() {
	places[0] = t11.move(places[0]);
	render();
	});
t11i.getAttributeNS('http://www.w3.org/1999/xlink', 'href');
t11i.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', t11.getImage());
svg.appendChild(t11i);

//initialize tile 12
var t12 = new Tile(12, places.splice(Math.floor(Math.random() * places.length), 1)[0], "js/12.png");
var t12i = document.createElementNS(xmlns, "image");
t12i.setAttribute('width', '170');
t12i.setAttribute('height', '170');
t12i.onclick = (function() {
	places[0] = t12.move(places[0]);
	render();
	});
t12i.getAttributeNS('http://www.w3.org/1999/xlink', 'href');
t12i.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', t12.getImage());
svg.appendChild(t12i);

//initialize tile 20
var t20 = new Tile(20, places.splice(Math.floor(Math.random() * places.length), 1)[0], "js/20.png");
var t20i = document.createElementNS(xmlns, "image");
t20i.setAttribute('width', '170');
t20i.setAttribute('height', '170');
t20i.onclick = (function() {
	places[0] = t20.move(places[0]);
	render();
	});
t20i.getAttributeNS('http://www.w3.org/1999/xlink', 'href');
t20i.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', t20.getImage());
svg.appendChild(t20i);

//initialize tile 21
var t21 = new Tile(21, places.splice(Math.floor(Math.random() * places.length), 1)[0], "js/21.png");
var t21i = document.createElementNS(xmlns, "image");
t21i.setAttribute('width', '170');
t21i.setAttribute('height', '170');
t21i.onclick = (function() {
	places[0] = t21.move(places[0]);
	render();
	});
t21i.getAttributeNS('http://www.w3.org/1999/xlink', 'href');
t21i.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', t21.getImage());
svg.appendChild(t21i);

render();



