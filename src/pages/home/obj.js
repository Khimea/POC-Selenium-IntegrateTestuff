const {By} = require("selenium-webdriver");

let obj = {
    "menu":{
        btnHome:() => By.id('nava'),
        btns :() => By.css('.nav-item')
    },
    "login":{
        userName:() => By.id('loginusername'),
        password:() => By.id('loginpassword'),
        btnLogin:() => By.css('#logInModal > div > div > div.modal-footer > button.btn.btn-primary'),
        btnClose:() => By.css('#logInModal > div > div > div.modal-footer > button.btn.btn-secondary'),
        lblUser: () => By.id('nameofuser')
    },
    "home": {
        titleProducts:() => By.css('.card-title'),
    },
    "Details": {
        btnAdd:() => By.css('.btn-success')
    },
    "carrito":{
        btnPlaceOrder:() => By.css('.btn-success'),
    },
    "modalPlaceOrder":{
        ModalPlaceOrder :() => By.css('.fade.show'),
        name :() => By.id('name'),
        country :() => By.id('country'),
        city :() => By.id('city'),
        card :() => By.id('card'),
        month :() => By.id('month'),
        year :() => By.id('year'),
        btns:() => By.css('button.btn'),
        sweetAlert : () => By.css('div.sweet-alert.showSweetAlert.visible > h2')
    }
    

}

module.exports =
{
    obj,
}