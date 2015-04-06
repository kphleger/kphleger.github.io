var csvLink = "https://hivelab.org/static/coffee.csv";

$.get(csvLink, function(data) {
	var dataString = new String(data);
	var dataArray = $.csv.toArray(dataString);
	console.log(dataArray[0,0]);
}, dataType='text');