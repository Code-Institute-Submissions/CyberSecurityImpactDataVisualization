queue()
    .defer(d3.csv, "data/HHSCyberSecurityBreaches.csv")
    .await(makeGraphs);



function makeGraphs(error, securityData) {
    var ndx = crossfilter(securityData);
    
    show_breach_items(ndx)
    show_breach_types(ndx);
    
    dc.renderAll();
    
}

function show_breach_items(ndx) {
    dim = ndx.dimension(dc.pluck('Location.of.Breached.Information'));
    group = dim.group()
    
    dc.selectMenu("#breach-item")
        .dimension(dim)
        .group(group);
}


function show_breach_types(ndx) {
    var dim = ndx.dimension(dc.pluck('Type.of.Breach'));
    var group = dim.group();

    
    dc.barChart("#breach-types")
        .width(750)
        .height(300)
        .margins({top: 10, right: 50, bottom: 30, left: 50})
        .dimension(dim)
        .group(group)
        .transitionDuration(500)
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .xAxisLabel("Types of Breach")
        .yAxis().ticks(5);

}

