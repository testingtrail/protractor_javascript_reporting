
// this will keep the methods of my function which is assinged to a class
let homepage = require('../pages/homepage');
//you can use this format
//import { get, enterFirstNumber, enterSecondNumber, clickGo, verifyResult } from '../pages/homepage';


//this is jasmine
describe('demo calculator tests', function(){

    //this is jasmine
    it('addition test',function(){

        //this is protractor
        //browser.get('http://juliemr.github.io/protractor-demo/');

        homepage.get('http://juliemr.github.io/protractor-demo/');
        homepage.enterFirstNumber('4');
        homepage.enterSecondNumber('3');
        homepage.clickGo();

        homepage.verifyResult('7');
       
         //this is protractor
         browser.sleep(3000); 
    });

    it('subtraction test',function(){


        homepage.get('http://juliemr.github.io/protractor-demo/');
        homepage.enterFirstNumber('4');
        homepage.enterSecondNumber('3');
        homepage.clickGo1();

        homepage.verifyResult('7');
       
         //this is protractor
         browser.sleep(3000); 
    });


});