({
  onInit: function(component, event, helper) {
    component.find("service").getNewRecord(
      "BoatReview__c", //objectApiName
      null, //recordTypeId
      false, //skip cache or not?
      $A.getCallback(function() {
        var rec = component.get("v.newBoatReview");
        var error = component.get("v.recordError");
        if (error || rec === null) {
          console.log("Error initializing record template: " + error);
        } else {
          // setting the id of the boat review
          rec.Boat__c = component.get("v.boat.Id");
          component.set("v.boatReview", rec);
        }
      })
    );
  }
});
