({
    Search : function(component, event, helper) {
        var searchField = component.find('searchField');
        var isValueMissing = searchField.get('v.validity').valueMissing;
        // if value is missing show error message and focus on field
        if(isValueMissing) {
            searchField.showHelpMessageIfInvalid();
            searchField.focus();
        }
        else {
          	// else call helper function 
            helper.SearchHelper(component, event);
        }
    },
   	doInit : function(component,event,helper){
  		helper.getAccountRecord(component); // Calling Helper method on load
 	},
    showAccountModal : function(component,event,helper){
        component.set("v.displayNewAccount",true); // calls to show popup
    },
    newClosedModal : function(component,event,helper){
        component.set("v.displayNewAccount",false);
        helper.getAccountRecord(component); // Calling Helper method to display record after record save from popup
    },
    handleClick : function(component, event, helper) {
        var Idx = event.getSource().get("v.value");
        var navEvt = $A.get("e.force:navigateToSObject");
        navEvt.setParams({
          "recordId" : Idx
        });
        navEvt.fire();
    }
})
