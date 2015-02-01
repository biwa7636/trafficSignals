var path = d3.geo.path();

d3.json("traffic_signals.json", function(json) {

        svg.selectAll("path")
           .data(json.features)
           .enter()
           .append("path")
           .attr("d", path);

});