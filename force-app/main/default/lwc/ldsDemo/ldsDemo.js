import { api, LightningElement } from 'lwc';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
//checking changes
export default class LdsDemo extends LightningElement {
    @api recordId;
    @api objectApiName;

    connectedCallback()
    { 
        this.objectApiName=this.objectApiName;
    }
    handleLoad()
    { 
        const evnt=new ShowToastEvent({ 
        title:"Loaded",
            message:"Data loaded",
            variant:"info",
            mode:"dismissable"
        })
        this.dispatchEvent(evnt);

    }

    handleSuccess()
    { 
        const evnt=new ShowToastEvent({ 
        title:"Success",
            message:"Data saved successfully",
            variant:"success",
            mode:"dismissable"
        })
        this.dispatchEvent(evnt);

    }

    handleError()
    { 
        const evnt=new ShowToastEvent({ 
        title:"Error",
            message:"Error occured",
            variant:"error",
            mode:"dismissable"
        })
        this.dispatchEvent(evnt);

    }
}