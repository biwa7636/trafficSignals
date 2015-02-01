var w=1000;
var h=1000;

var projection = d3.geo.albersUsa()
                       .translate([11000, 2400])
                       .scale([96000]);

var path = d3.geo.path()
                 .projection(projection);

var svg = d3.select("#container")
		.append("svg")
		.attr("width", w)
		.attr("height", h)
		.style('background-color', 'green');

d3.json("traffic_signals.json", function(json) {
        svg.selectAll("path")
           .data(json.features)
           .enter()
           .append("path")
           .attr("d", path);
});

