// Loads data from .csv file
queue()
    .defer(d3.csv, "data/HHSCyberSecurityBreaches.csv")
    .await(makeGraphs);
    

// Makes the graphs from the functions below
function makeGraphs(error, securityData) {
    var ndx = crossfilter(securityData);
    
    securityData.forEach(function(d){
        d.Individuals_Affected = parseInt(d.Individuals_Affected);
    });
    
    show_state(ndx);
    show_type(ndx);
    show_location(ndx);
    
    show_attack_type_bar(ndx);
    show_attack_type_pie(ndx);
    
    show_attack_item_bar(ndx);
    show_attack_item_pie(ndx);
    
    show_type_distribution(ndx);
    
    show_average_impact_by_type(ndx);
    show_average_impact_by_item(ndx);
    show_people_impacted_pie(ndx);
    
    dc.renderAll();
}


// Counts the total number of each type of breach
function rankByType(dimension, Type_of_Breach) {
    return dimension.group().reduce(
        function (p, v) {
            p.total++;
            if(v.Type_of_Breach == Type_of_Breach) {
                p.match++;
            }
            return p;
        },
        function (p, v) {
            p.total--;
            if(v.Type_of_Breach == Type_of_Breach) {
                p.match--;
            }
            return p;
        },
        function () {
            return {total: 0, match: 0};
        }
    );
}


// Allows the user to sort the data and change the graphs depending on the state the breach occured in
function show_state(ndx) {
    var dim = ndx.dimension(dc.pluck('State'));
    var group = dim.group();
    
    dc.selectMenu("#state-selector")
        .dimension(dim)
        .group(group);
}


// Allows the user to sort the data and change the graphs depending on the type of breach
function show_type(ndx) {
    var dim = ndx.dimension(dc.pluck('Type_of_Breach'));
    var group = dim.group();
    
    dc.selectMenu("#type-selector")
        .dimension(dim)
        .group(group);
}


// Allows the user to sort the data and change the graphs depending on the location of the breach
function show_location(ndx) {
    var dim = ndx.dimension(dc.pluck('Location_of_Breached_Information'));
    var group = dim.group();
    
    dc.selectMenu("#location-selector")
        .dimension(dim)
        .group(group);
}


// Bar chart showing the number of reports of each type of breach
function show_attack_type_bar(ndx) {
    var dim = ndx.dimension(dc.pluck('Type_of_Breach'));
    var group = dim.group();
    
    dc.barChart("#attack-type-bar")
        .width(725)
        .height(300)
        .margins({top: 10, right: 50, bottom: 30, left: 50})
        .dimension(dim)
        .group(group)
        .transitionDuration(500)
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .xAxisLabel("Type of Breach")
        .yAxisLabel("Number of Reports");
}


// Pie chart showing the number of reports of each type of breach
function show_attack_type_pie(ndx) {
    var dim = ndx.dimension(dc.pluck('Type_of_Breach'));
    var group = dim.group();
    
    dc.pieChart('#attack-type-pie')
        .height(330)
        .radius(90)
        .transitionDuration(1500)
        .dimension(dim)
        .group(group);
}


// Bar chart showing the number of reports of each breached item
function show_attack_item_bar(ndx) {
    var dim = ndx.dimension(dc.pluck('Location_of_Breached_Information'));
    var group = dim.group();
    
    dc.barChart("#attack-item-bar")
        .width(725)
        .height(300)
        .margins({top: 10, right: 50, bottom: 30, left: 50})
        .dimension(dim)
        .group(group)
        .transitionDuration(500)
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .xAxisLabel("Origin of the Breached Information")
        .yAxisLabel("Number of Reports");
}


// Pie chart showing the number of reports of each breached item
function show_attack_item_pie(ndx) {
    var dim = ndx.dimension(dc.pluck('Location_of_Breached_Information'));
    var group = dim.group();
    
    dc.pieChart('#attack-item-pie')
        .height(330)
        .radius(90)
        .transitionDuration(1500)
        .dimension(dim)
        .group(group);
}


// Bar chart showing how each item has been breached
function show_type_distribution(ndx) {
    var dim = ndx.dimension(dc.pluck("Location_of_Breached_Information"));
    var theftByType = rankByType(dim, "Theft");
    var otherByType = rankByType(dim, "Other");
    var hackingByType = rankByType(dim, "Hacking");
    var lossByType = rankByType(dim, "Loss");
    var unauthorizedAccessByType = rankByType(dim, "Unauthorized Access");
    var unknownByType = rankByType(dim, "Unknown");
    var improperDisposalByType = rankByType(dim, "Improper Disposal");

    dc.barChart("#type-distribution")
        .width(950)
        .height(350)
        .dimension(dim)
        .group(theftByType, "Theft")
        .stack(otherByType, "Other")
        .stack(hackingByType, "Hacking")
        .stack(lossByType, "Loss")
        .stack(unauthorizedAccessByType, "Unauthorized Access")
        .stack(unknownByType, "Unknown")
        .stack(improperDisposalByType, "Improper Disposal")
        .valueAccessor(function(d) {
            if(d.value.total > 0) {
                return (d.value.match / d.value.total) * 100;
            } else {
                return 0;
            }
        })
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .legend(dc.legend().x(805).y(20).itemHeight(20).gap(1))
        .margins({top: 10, right: 170, bottom: 30, left: 30});
}


// Adds the item to the graph, for example, when p = 1 this would correspond to the first report in the data. Then the function counts through the data calculating the average number of people affected by each instance.
function add_item(p, v) {
    p.count++;
    p.total += v.Individuals_Affected;
    p.average = p.total / p.count;
    return p;
}


// Sets the total and average to zero, if the count is zero. Otherwise, calculates the average by subtracting the number of individuals affected from the total, then dividing this by the count. 
function remove_item(p, v) {
    p.count--;
    if(p.count == 0) {
        p.total = 0;
        p.average = 0;
    } else {
        p.total -= v.Individuals_Affected;
        p.average = p.total / p.count;
    }
    return p;
}


// Initialises the count, total and average to zero.
function initialise() {
    return {count: 0, total: 0, average: 0};
}


// Barchart showing the average number of people impacted by each type of breach
function show_average_impact_by_type(ndx) {
    var dim = ndx.dimension(dc.pluck('Type_of_Breach'));
    var averageImpactByType = dim.group().reduce(add_item, remove_item, initialise);

    dc.barChart("#average-impact-type")
        .width(725)
        .height(200)
        .margins({top: 10, right: 50, bottom: 30, left: 50})
        .dimension(dim)
        .group(averageImpactByType)
        .valueAccessor(function(d){
            return d.value.average.toFixed(2);
        })
        .transitionDuration(500)
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .elasticY(true)
        .xAxisLabel("Each attack")
        .yAxisLabel("Average people affected");
}


// Barchart showing the average number of people impacted by the location of breached information
function show_average_impact_by_item(ndx) {
    var dim = ndx.dimension(dc.pluck('Location_of_Breached_Information'));
    var averageImpactByItem = dim.group().reduce(add_item, remove_item, initialise);

    dc.barChart("#average-impact-item")
        .width(725)
        .height(200)
        .margins({top: 10, right: 50, bottom: 30, left: 50})
        .dimension(dim)
        .group(averageImpactByItem)
        .valueAccessor(function(d){
            return d.value.average.toFixed(2);
        })
        .transitionDuration(500)
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .elasticY(true)
        .xAxisLabel("Each attack")
        .yAxisLabel("Average people affected");
}


// Pie chart showing the number of people affected by types of breach
function show_people_impacted_pie(ndx) {
    var dim = ndx.dimension(dc.pluck('Type_of_Breach'));
    var averageImpactByType = dim.group().reduce(add_item, remove_item, initialise);

    
    dc.pieChart('#people-impacted')
        .height(330)
        .radius(90)
        .transitionDuration(1500)
        .dimension(dim)
        .group(averageImpactByType)
        .valueAccessor(function(d){
            return d.value.average.toFixed(2);
        });
}