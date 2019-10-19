({
  doInit: function(component, event, helper) {
    helper.onSearch(component);
  },

  doSearch: function(component, event, helper) {
    var params = event.getParam("arguments");

    if (params) {
      var boatTypeId = params.boatTypeId;
      // setting the value from the method to the attribute on the component
      component.set("v.boatTypeId", boatTypeId);
      helper.onSearch(component);
      // only if synchronous, then use a return statement
      // return boatTypeId;
    }
  },

  onBoatSelect: function(component, event, helper) {
    var updateSelected = event.getParam("boatId");
    // setting the value sent by the boat tile to the parent 
    // the parent will store the value on the selected boat id attribute
    component.set("v.selectedBoatId", updateSelected.boatId);
  }
});
