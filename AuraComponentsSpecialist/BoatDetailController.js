({
  onFullDetails: function(component, event, helper) {
    // navigating to record detail
    var boat = component.get("v.boat");
    var navEvent = $A.get("e.force:navigateToSObject");
    navEvent.setParams({
      recordId: boat.Id,
      slideDevName: "detail"
    });
    navEvent.fire();
  },

  doInit: function(component, event, helper) {
    //do nothing
  }
});
