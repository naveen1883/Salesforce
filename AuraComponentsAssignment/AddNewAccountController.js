({
    doInit : function(component,event,helper){
  		//Do nothing on load
 	},
 	cancelAction : function(component,event,helper){
        helper.closedModal();         
    },
    saveAccount : function(component,event,helper){
        //getting the candidate information
        var accountRecord = component.get("v.accObj");
        //Calling the Apex Function
        var action = component.get("c.createAccount");
        
        //Setting the Apex Parameter
        action.setParams({
            acc : accountRecord
        });
        
        //Setting the Callback
        action.setCallback(this,function(a){
            //get the response state
            var state = a.getState();
            
            //check if result is successfull
            if(state == "SUCCESS"){
                //Reset Form
                var newAccount = {'sobjectType': 'Account',
                                    'Name': '',
                                    'Phone': ''};
                
                //resetting the Values in the form
                component.set("v.accObj",newAccount);
            } 
           else if(state == "ERROR"){
                alert('Error in calling server side action');
            }
        });
 		//adds the server-side action to the queue        
        $A.enqueueAction(action);
        helper.closedModal(); //calls helper controller method to close the popup and refresh the account list. 
    }
})
