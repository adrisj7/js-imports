
// Grab element data from here
var elementURL = "https://raw.githubusercontent.com/andrejewski/periodic-table/master/data.csv";

$(document).ready(function() {
    $.ajax({
        type: "GET",
        url: elementURL,
        dataType: "text",
        success: function(data) {processData(data);}
     });
});

function processData(data) {
    var rows = data.split("\n");
    // Skip the top row which has column descriptions
    for(var i = 1; i < data.length; i++) {
        var cols = rows[i].split(" ");
        var symbol = cols[1];
        var name = cols[2];
        var mass = parseFloat(cols[3]);

        if (isNaN(mass)) mass = -1;

        window[symbol] = {
            "name" : name,
            "mass" : mass
        };
    }
}

