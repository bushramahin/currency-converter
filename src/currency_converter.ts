#! /usr/bin/env node
import inquirer from "inquirer";
import { usd,eur,yen,gbp,aud,cad,swiss,cnh,hkd,nzd,mxn,krw,ind } from "./formulas.js";
import banner from 'node-banner';

let currency = [
    {
        name : "Currency",
        type : "list",
        choices  : ["US Dollar","Euro","Japnese yen","Pound sterling","Australian dollar",
            "Canadian dollar","Swiss franc","Chinese renminibi","Hong Kong dollar","New Zealand dollar",
            "Mexican peso","South korean won","Indian rupee"],
        message : "Select currency which you want to convert in PKR",
    }
]
let US = [
    {
        name : "money",
        type : "number",
        message : "Enter your money",
        validate(mon:number){
            if(isNaN(mon)){
                return "You can only enter numbers"
            }
            return true
        }
    }
]
let again = [
    {
        name : "Again",
        type : "confirm",
        message : "Do you want to convert moer money?"
    }
];
(async () => {
    await banner('Currency Converter');
})();
async function curency_converter(){
    let condition = true;
    while(condition){
        let {Currency} = await inquirer.prompt(currency)
        let {money} = await inquirer.prompt(US)
        if(Currency == "US Dollar"){
            console.log(usd(money) + "PKR");
        }
        else if(Currency == "Euro"){
            console.log(eur(money) + "PKR");
        }
        else if(Currency == "Japnese yen"){
            console.log(yen(money) + "PKR");
        }
        else if(Currency == "Pound sterling"){
            console.log(gbp(money) + "PKR");
        }
        else if(Currency == "Australian dollar"){
            console.log(aud(money) + "PKR");
        }
        else if(Currency == "Canadian dollar"){
            console.log(cad(money) + "PKR");
        }
        else if(Currency == "Swiss franc"){
            console.log(swiss(money) + "PKR");
        }
        else if(Currency == "Chinese renminibi"){
            console.log(cnh(money) + "PKR");
        }
        else if(Currency == "Hong Kong dollar"){
            console.log(hkd(money) + "PKR");
        }
        else if(Currency == "New Zealand dollar"){
            console.log(nzd(money) + "PKR");
        }
        else if(Currency == "Mexican peso"){
            console.log(mxn(money) + "PKR");
        }
        else if(Currency == "South korean won"){
            console.log(krw(money) + "PKR");
        }
        else{
            console.log(ind(money) + "PKR");
        }
        let {Again}= await inquirer.prompt(again)
        condition = Again;
    }
    console.log("Errors and omisions are expected");
    
    
}
setTimeout(() => {
    curency_converter()
},1000);