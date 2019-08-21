({
    selectBusiness : function(component, event, helper) {
        var action = component.getEvent("selectedBusinessEvent");
        action.setParams({
            "selectedBusiness" : component.get("v.business")
        });
        action.fire();
    }
})
