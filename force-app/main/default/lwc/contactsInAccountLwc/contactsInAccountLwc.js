import { LightningElement, track, wire } from 'lwc';
import getAccount from '@salesforce/apex/ContactInAccountApex.getAccount';
import getContact from '@salesforce/apex/ContactInAccountApex.getContact';
const columns = [{
    label: 'First Name',
    fieldName: 'FirstName'
},
{
    label: 'Last Name',
    fieldName: 'LastName'
},

{
    label: 'Phone',
    fieldName: 'phone',
    type: 'phone'
}

];

export default class ContactsInAccountLwc extends LightningElement {
    @track accountId = '';
    @track contacts;
    @track columns = columns;
    //  invoke apex method with wire property and fetch picklist options.
    // pass 'object information' and 'picklist field API name' method params which we need to fetch from apex
    @wire(getAccount) accounts;
    onValueSelection(event) {
        // eslint-disable-next-line no-alert
        const selectedAccount = event.target.value;
        this.accountId = event.target.value;
        if (selectedAccount != null) {
            getContact({
                    accountId: selectedAccount
                })
                .then(result => {
                    this.contacts = result;
                    // eslint-disable-next-line no-console
                   // console.log('result' + JSON.stringify(result) + selectedAccount);
                })
                .catch(error => {
                    this.error = error;
                });
        }
    }
}