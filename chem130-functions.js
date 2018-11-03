

// Grab element data from here
var elementURL = "https://raw.githubusercontent.com/andrejewski/periodic-table/master/data.csv";

function get(url, callback) {
    Http = new XMLHttpRequest();
    Http.open("GET", url);
    Http.send();
    Http.onreadystatechange = function(e) {
        callback(Http.responseText);
    }
}

get(elementURL, processData);

function processData(data) {
	var rows = data.split("\n");
    // Skip the top row which has column descriptions
    for(var i = 1; i < rows.length; i++) {
        var cols = rows[i].split(",");
        var symbol = cols[1];
        var name = cols[2];
        var mass = parseFloat(cols[3]);
		if (symbol != undefined) {
			symbol = symbol.trim();
        }
		if (name != undefined) {
			name = name.trim();
        }
        if (isNaN(mass)) mass = -1;
        window[symbol] = {
            "name" : name,
            "mm" : mass
        };
    }
}
