class ShoppingCart {

    constructor(discount) {
        this.discount = discount;
        this.amount = 0;
    }

    checkout() {
        return this.discount(this.amount);
    }

    setAmount(amount) {
        this.amount = amount;
    }
}

function guestStrategy(amount) {
    return amount;
}

function regularStrategy(amount) {
    return amount * 0.9;
}

function premiumStrategy(amount) {
    return amount * 0.8;
}

//example
var guestCart = new ShoppingCart(guestStrategy);
guestCart.setAmount(100);
console.log(guestCart.checkout());

var regularCart = new ShoppingCart(regularStrategy);
regularCart.setAmount(100);
console.log(regularCart.checkout());

var premiumCart = new ShoppingCart(premiumStrategy);
premiumCart.setAmount(100);
console.log(premiumCart.checkout());