({
  onBoatSelected: function(component, event, helper) {
    // gets the param of the event
    var updateSelected = event.getParam("boat");

    // sets the id on the id attribute
    component.set("v.Id", updateSelected.Id);
    component.set("v.boat", updateSelected);

    // reloads the current record (reload by the id)
    var currentRecord = component.find("service");
    currentRecord.set("v.Id", updateSelected.Id);
    currentRecord.reloadRecord();
  },

  // created during challenge 6, not yet used
  onRecordUpdated: function(component, event, helper) {
    // The review component that will be refreshed by calling a public method
    var reviewcomponent = component.find("reviewcomponent");

    // The component might not be initialized by this moment, do an if statement
    if (typeof reviewcomponent != "undefined") {
      // Call the public method refresh, on the review component that will refresh the search
      reviewcomponent.refresh();
    }
  },

  onBoatReviewAdded: function(component, event, helper) {
    // Selecting the id of the review tab
    component.find("tabs").set("v.selectedTabId", "boatreviewtab");

    // The review component that will be refreshed by calling a public method
    var reviewcomponent = component.find("reviewcomponent");

    // Call the public method refresh, on the review component that will refresh the search
    reviewcomponent.refresh();
  }
});
