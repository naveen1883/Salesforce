({
	doInit : function(component, event, helper) {
		var action = component.get("c.getContact");
        action.setParams({
            "contactId" : component.get("v.recordId")
        });
        action.setCallback(this,function(response){
            var state = response.getState();
            if(state === "SUCCESS"){
                var currentContact = response.getReturnValue();
                component.set("v.currentContact",currentContact);
                component.set("v.mapMarkers",[{
                    location : {
                        Street : currentContact.MailingAddress.street,
                        City : currentContact.MailingAddress.city,
                        PostalCode : currentContact.MailingAddress.postalCode,
                        State : currentContact.MailingAddress.state,
                        Country : currentContact.MailingAddress.country
                    },
                    
                    title : "Your Location"
                }]);
                component.set("v.center", component.get("v.mapMarkers")[0]);
                component.set("v.markersTitle","Businesses");
                component.set("v.showFooter",true);  
            } else {
                console.log("ScheduleMeetingController.doInit() failed with state: " + state);
            }
        });
        $A.enqueueAction(action); 
	},
    
    onblur : function(component, event, helper){
        var close = component.find("searchResult");
        $A.util.addClass(close,"slds-is-close");
        $A.util.removeClass(close,"slds-is-open");
    },
    
    onfocus : function(component, event, helper){
        var searchKeyword = component.get("v.searchKeyword");
        if(searchKeyword.length!=0){
            var open = component.find("searchResult");
            $A.util.addClass(open,"slds-is-open");
        	$A.util.removeClass(open,"slds-is-close");
            helper.searchHelper(component,searchKeyword);
        }
    },
    
    handleSearchEvent : function(component, event, helper){
        var selectedBusiness = event.getParam("selectedBusiness");
        component.set("v.searchKeyword",selectedBusiness);
        component.set("v.selectedBusiness",selectedBusiness);
        
        var action = component.get("c.onblur");
        $A.enqueueAction(action);
    },
    
    keyPressController : function(component, event, helper){
        var searchKeyword = component.get("v.searchKeyword");
        
        if(searchKeyword.length > 2){
            var open = component.find("searchResult");
            $A.util.addClass(open,"slds-is-open");
            $A.util.removeClass(open,"slds-is-close");
            
            helper.searchHelper(component,searchKeyword);
        } else {
            component.set("v.listOfAutoComplete",[]);
            var action = component.get("c.onblur");
            $A.enqueueAction(action);
        }
    },
    
    keySearch : function(component, event, helper){
        if(event.which == 13){
            var searchKeyword = component.get("v.searchKeyword");
            helper.getBusiness(component,searchKeyword);
            
            var action = component.get("c.onblur");
            $A.enqueueAction(action);
        }
    }
})
