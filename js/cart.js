function myCart (){
    return{
        smallCount: 0,
        mediumCount: 0,
        largeCount: 0,
        total: 0,
        payAmount:0,
        checkout: true,
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
        },
        checkout_onClick(){
            this.checkout = false;
            this.pay = true;
        },
        pay_onClick(){
            if(Number(this.total).toFixed(2) === Number(this.payAmount).toFixed(2)){
                this.message = "Enjoy your pizza";
                this.smallCount = 0;
                this.mediumCount = 0;
                this.largeCount = 0;
                this.payAmount = 0;
                this.updateTotal();

                setTimeout(()=>{                    
                    this.checkout = true;
                    this.pay = false;
                    this.message = "";
                }
                ,5000);
            }
            else{
                this.message = "Sorry - that is not enough money!";
                setTimeout(()=>{                    
                    this.message = "";
                }
                ,5000);
            }
            //this.message.style.visibility = "visible";
            
        }       
    }
}

document.addEventListener('alpine:init', function () {
    Alpine.data('cart', myCart)
})