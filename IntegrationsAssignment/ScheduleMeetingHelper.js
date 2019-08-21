({
	searchHelper : function(component,searchKeyword) {
        var encodedKeyword = searchKeyword.replace(/ /g,"%20");
        var action = component.get("c.getAutoCallout");
        action.setParams({
            'url' : '/autocomplete?text=' + encodedKeyword + "&latitude=35.7689&longitude=118.5473" 
        });
        action.setCallback(this,function(response){
            var state = response.getState();
            if(state === "SUCCESS"){
                component.set("v.listOfAutoComplete",response.getReturnValue());
            } else {
                console.log("ScheduleMeetingHelper.searchHelper() failed with state: " + state);
            }
        });
        $A.enqueueAction(action);
	},
    
    getBusiness : function(component,searchKeyword){
        var encodedKeyword = searchKeyword.replace(/ /g,"%20");
        var currentContact = component.get("v.currentContact");
        var location = currentContact.MailingAddress.city + "," + currentContact.MailingAddress.state;
        var encodedLocation = location.replace(/ /g,"%20");
        
        var action = component.get("c.getSearchCallout");
        action.setParams({
            'url' : '/businesses/search?term=' + encodedKeyword + '&location=' + encodedLocation
        });
        
        action.setCallback(this,function(response){
            var state = response.getState();
            if(state === "SUCCESS"){
                var searchResults = response.getReturnValue();
                var mapMarkers = [];
                for(var x = 0; x < searchResults.length; x++){
                    mapMarkers.push({
                        location : {
                            Street : searchResults[x].location.address1, //first line of address returned
                            City : searchResults[x].location.city,
                            PostalCode : searchResults[x].location.zip_code,
                            State : searchResults[x].location.state,
                            Country : searchResults[x].location.country
                        },
                        
                        title : searchResults[x].name,
                        description : searchResults[x].name + ' has a rating of ' + searchResults[x].rating
                        + ' and can be contacted at: ' + searchResults[x].phone + '.'
                    });
                    
                    if(x==4) break;
                }
                component.set("v.mapMarkers",mapMarkers);
                component.set("v.center",mapMarkers[0]);
            } else {
                console.log("ScheduleMeetingHelper.getBusinesses() failed with state: " + state);
            }
        });
        $A.enqueueAction(action);
    }
})
