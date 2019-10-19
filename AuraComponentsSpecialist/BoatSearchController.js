({
    onFormSubmit : function(component, event, helper) {
        var updateSelected = event.getParam("formData");
               	
        // The child component is the boat search result
        var childComponent = component.find('childComponent');
        
        // Call the public method search, on the child component
        childComponent.search(updateSelected.boatTypeId);
    }
})
