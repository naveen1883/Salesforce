({
    SearchHelper : function(component,event) {
        // show spinner message
        component.find("Id_spinner").set("v.class" , 'slds-show');
        var action = component.get("c.fetchAccount");
        action.setParams({
            'searchKeyWord' : component.get("v.searchKeyword")
        });
        action.setCallback(this, function(response) {
           // hide spinner when response coming from server 
            component.find("Id_spinner").set("v.class" , 'slds-hide');
            var state = response.getState();
            if (state === "SUCCESS") {
                var storeResponse = response.getReturnValue();
                
                // if storeResponse size is 0, display no record found message on screen.
                if (storeResponse.length == 0) {
                    component.set("v.errorMessage", true);
                } 
                
                else {
                    component.set("v.errorMessage", false);
                }
                
                // set numberOfRecord attribute value with length of return value from server
                component.set("v.TotalNumberOfRecord", storeResponse.length);
                
                // set searchResult list with return value from server.
                component.set("v.searchResult", storeResponse); 
                
            }
            else if (state === "INCOMPLETE") {
                alert('Response is Incompleted');
            }
            else if (state === "ERROR") {
                var errors = response.getError();
                if (errors) {
                    if (errors[0] && errors[0].message) {
                        alert("Error message: " + 
                                    errors[0].message);
                    }
                } 
                else {
                    alert("Unknown error");
                }
            }
        });
        $A.enqueueAction(action);
    },
    getAccountRecord : function(component) {
  		var action = component.get("c.getAccountRecord"); //Calling Apex class controller 'getAccountRecord' method
        action.setCallback(this, function(response) {
            var state = response.getState(); //Checking response status
            var result = JSON.stringify(response.getReturnValue());
            if (component.isValid() && state === "SUCCESS") {
                component.set("v.TotalNumberOfRecord", response.getReturnValue().length);
                component.set("v.searchResult", response.getReturnValue()); // Adding values in Aura attribute variable.   
            }
        });
        $A.enqueueAction(action);
 	}
})
