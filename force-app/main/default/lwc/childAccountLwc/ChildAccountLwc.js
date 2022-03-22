import { LightningElement, track, wire } from 'lwc';
import getAccount from '@salesforce/apex/lwcFirstApexClass.getAccount'

export default class ChildAccountLwc extends LightningElement {
    @wire (getAccount) accRecords;
    @track getAccId;

    handleChangeRecord(event)
    {
        this.getAccId=event.target.value;
        const myCustomEvent=new CustomEvent('myevent',{detail:this.getAccId});
        this.dispatchEvent(myCustomEvent);
    }


 }