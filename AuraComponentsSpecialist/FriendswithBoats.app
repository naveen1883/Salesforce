<aura:application extends="force:slds">
    
    <lightning:layout multipleRows="true">
        <lightning:layoutItem class="slds-col slds-size_2-of-3">
            <c:BoatSearch />
        </lightning:layoutItem>
        <lightning:layoutItem class="slds-col slds-size_1-of-3">
            <c:BoatDetails />
            <c:Map />
        </lightning:layoutItem>
    </lightning:layout>
    
</aura:application>
