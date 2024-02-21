import { Given,When,Then } from "@cucumber/cucumber";
Given{/^Google page is opened$}/,function(){
    browser.url("https://www.google.com")
    
}