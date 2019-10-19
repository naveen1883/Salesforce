({
    onBoatClick : function(component, event, helper) {
        // to send the selected boat to the boat search result, in order to change the css
        // Getting the attribute
        var boat = component.get("v.boat");
        
        // Getting the event
        var updateEvent = component.getEvent("BoatSelect");
        
        // Setting the param on the event 
        updateEvent.setParams({ "boatId": {
            "boatId" : boat.Id
            }
        });
            
        // Fire the event so all the components can hear it
        updateEvent.fire();
        
        // Getting the event
        var boatSelectedEvent = $A.get("e.c:BoatSelected");
        
        // Setting the param on the event
        boatSelectedEvent.setParam("boat", boat);

        // Fire the event so all the parent components can hear it
        boatSelectedEvent.fire();
        
        // Fire the map event
        var plotMapMarker = $A.get("e.c:PlotMapMarker");
        plotMapMarker.setParams({
            "lat"   : boat.Geolocation__Latitude__s,
            "long"  : boat.Geolocation__Longitude__s,
            "label" : boat.Name,
            "SObjectId" : boat.Id});
        plotMapMarker.fire();
    }
})
