({
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
	var Idx = event.target.id;
	var baseUrl = "https://resourceful-wolf-b2vzfu-dev-ed.lightning.force.com/lightning/r/Account/";
	var endUrl = "/view";
	window.open(baseUrl+Idx+endUrl);
    }
})
