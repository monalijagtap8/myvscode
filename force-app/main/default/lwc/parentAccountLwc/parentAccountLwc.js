import { LightningElement, track, wire } from 'lwc';
import getContact from '@salesforce/apex/lwcFirstApexClass.getContact';

export default class ParentAccountLwc extends LightningElement {
    @track accountId;
    @track records;
    @track errorMsg;

    @wire (getContact,{accId:'$accountId'})
    wireConRecords({error,data}){
        if(data)
        {
            this.records=data;
            this.errorMsg=undefined;
        }else{
            this.errorMsg=error;
            this.records=undefined;
        }
    }
    handleChangeContact(event){
        this.accountId=event.detail;
      //  window.console.log('accountId ' + this.accountId);
    }

}