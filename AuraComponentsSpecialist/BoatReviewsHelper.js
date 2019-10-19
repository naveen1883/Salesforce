({
	onInit  : function(component, event, helper) {
        // Apex method (server-side)
        var action = component.get("c.getAll");
        
        action.setParams({
            "boatId": component.get("v.boat").Id
        });
        
        action.setCallback(this, function(response) {
            var state = response.getState();
            
            if (state === "SUCCESS") {
                
                var record = response.getReturnValue();
                component.set("v.boatReviews", record);
                
            } else if (state === "ERROR") {
                var errors = response.getError();
                if (errors) {
                    if (errors[0] && errors[0].message) {
                        console.log("Error message: " + errors[0].message);
                    }
                }
            }
        });
        
        $A.enqueueAction(action);
	}
})
