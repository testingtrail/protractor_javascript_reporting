
let homePage = function(){

    //this is protractor
    let firstNumber = element(by.model('first'));
    let secondNumber = element(by.model('second'));
    let goButton =  element(by.css('[ng-click="doAddition()"]'));

     //this is a variable for this 'class'
    this.get = function(url){
        //this is protractor
        browser.get(url);
    }

    this.enterFirstNumber = function(firstNo){
        firstNumber.sendKeys(firstNo);
    };

    this.enterSecondNumber = function(secondNo){
        secondNumber.sendKeys(secondNo);
    };

    this.clickGo = function(){
        goButton.click();
    };

    this.verifyResult = function(result){
        let output = element(by.cssContainingText('.ng-binding', result));
        //this is jasmine
        expect(output.getText()).toEqual(result);
    }

};

//this will allow me to export these functions
module.exports = new homePage();