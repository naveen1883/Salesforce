({
    jsLoaded: function(component) {
        component.set("v.jsLoaded", true);
    },
    
    onPlotSet: function(component, event, helper) {
        // gets the param of the event
        var lat = event.getParam("lat");
        var long = event.getParam("long");
        var label = event.getParam("label");
        var sobjectid = event.getParam("sobjectid");
        
        component.set("v.location", {
            "lat": lat,
            "long": long,
            "label": label,
            "sobjectid": sobjectid,
        })
    }
})
