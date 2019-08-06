({
   closedModal : function(){
        var appEvent = $A.get("e.c:NewClosedModalEvent"); 
        appEvent.setParams(false);
        appEvent.fire();
   }
})
