({
    newBoat : function(component, event, helper) {
        var createRecordEvent = $A.get("e.force:createRecord");
                
        // Check if record exists for standalone app
        createRecordEvent.setParams({
            "entityApiName": "Boat__c",
        });
        
        // If no value is selected, open the form without the default boat type
        if(! component.find("levels").get("v.value") == '' ) {
            createRecordEvent.setParams({
                "defaultFieldValues" : {
                    'BoatType__c' : component.find("levels").get("v.value")
                }  
            })    
        }
        
        createRecordEvent.fire();
        
    },
    
    doInit : function(component, event, helper) {
        // Disable the button if createRecord is not available
        component.set("v.newButtonDisabled", $A.get("e.force:createRecord"));
        
        helper.getBoatTypes(component);
    },
    
    // Handle the changes of the option list
    handleChange: function( component, event, helper) {
        component.set("v.boatTypeId", component.find("levels").get("v.value"));
    },
    
    // Handle the event to submit the selected picklist type
    onFormSubmit: function( component, event, helper ) {
        // Getting the attribute
        var boatTypeId = component.get("v.boatTypeId");
        
        // Getting the event
        var updateEvent = component.getEvent("formsubmit");
        
        // Setting the param on the event
        updateEvent.setParams({ "formData": {
            "boatTypeId" : boatTypeId
            }
        });
            
        // Fire the event so all the components can hear it
        updateEvent.fire();
    }
})
