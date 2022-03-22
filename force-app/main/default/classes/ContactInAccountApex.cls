public with sharing class ContactInAccountApex {
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccount() {
        return [SELECT Id, Name FROM Account];
    }
    @AuraEnabled(cacheable=true)
    public static List<Contact> getContact(String accountId){
        return [Select Id,FirstName,LastName,Email,Phone from Contact where accountId=:accountId];
         
    }  
    public ContactInAccountApex() {

    }
}
