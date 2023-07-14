function myCart (){
    return{
        smallCount: 0,
        mediumCount: 0,
        largeCount: 0,
        total: 0,
        payAmount:0,
        showOrderBtn: true,
        showCart: false,
        checkout: false,
        pay: false,
        message: "",
        increaseSmall(){
            this.smallCount+=59.00;
            this.updateTotal();
        },
        decreaseSmall(){
            if(this.smallCount > 0) {
                this.smallCount-=59.00;
                this.updateTotal();
            }
        },
        increaseMedium(){
            this.mediumCount+=99.00;
            this.updateTotal();
        },
        decreaseMedium(){
            if(this.mediumCount > 0) {
                this.mediumCount-=99.00;
                this.updateTotal();
            }
        },
        increaseLarge(){
            this.largeCount+=149.00;
            this.updateTotal();
        },
        decreaseLarge(){
            if(this.largeCount > 0) {
                this.largeCount-=149.00;
                this.updateTotal();
            }
        },
        updateTotal(){
            this.total = this.smallCount+this.mediumCount+this.largeCount;
            
            // If cart is hidden then hide checkout and pay buttons
            // this is to cater for scena
            if(this.showCart == false){
                this.checkout = false;
                this.showOrderBtn = true;
                this.pay = false;
            }
            // if the total is 0 hide the cart and the checkout button
            if(this.total == 0){
                this.showCart = false;
                this.checkout = false;
            }
            // else show the cart and checkout button
            else{
                this.showCart = true;
                this.checkout = true;
            }
        },
        checkout_onClick(){
            this.checkout = false;
            this.showOrderBtn = false;
            this.pay = true;
        },
        pay_onClick(){
            if(Number(this.total).toFixed(2) === Number(this.payAmount).toFixed(2)){
                this.message = "🤤 Enjoy your pizza!";
                this.smallCount = 0;
                this.mediumCount = 0;
                this.largeCount = 0;
                this.payAmount = 0;
                this.total = 0;
                this.checkout = false;
                this.pay = false;

                setTimeout(()=>{                    
                    this.showCart = false;                    
                    this.message = "";
                }
                ,3000);
            }
            else{
                this.message = "😳 Oops! - That is not enough money.";
                
                setTimeout(()=>{                    
                    this.message = "";
                }
                ,3000);
            }
        }       
    }
}

document.addEventListener('alpine:init', function () {
    Alpine.data('cart', myCart)
})