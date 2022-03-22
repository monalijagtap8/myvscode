import { api, LightningElement } from 'lwc';
import{NavigationMixin} from 'lightning/navigation';

export default class NavigationLwcDemo extends NavigationMixin(LightningElement){
   @api recordId;
    navigateToNewAccount()
    {
        this[NavigationMixin.Navigate](
            {
                type:'standard__objectPage',
              attributes:
              {
                  objectApiName:'Account',
                 actionName:'new'
               },
        });
    }
    navigateToViewAccount()
    {
        this[NavigationMixin.Navigate](
            {
                type:'standard__recordPage',
                attributes:{
                    recordId:'0015j00000D05ixAAB',
                    objectApiName:'Account',
                    actionName:'view'
                },
            });
    }
    navigateToEditAccount(){
        this[NavigationMixin.Navigate](
            {
                type:'standard__recordPage',
                attributes:{
                    recordId:'0015j00000D05ixAAB',
                    objectApiName:'Account',
                    actionName:'edit'
                },
            });
    }

}