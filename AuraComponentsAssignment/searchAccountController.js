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
    handleClick : function(component, event, helper) {
        var Idx = event.target.id;
        var baseUrl = "https://resourceful-wolf-b2vzfu-dev-ed.lightning.force.com/lightning/r/Account/";
        var endUrl = "/view";
        window.open(baseUrl+Idx+endUrl);
    }
})
