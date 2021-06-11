class Kitchen {
    constructor(budget){
        this.budget = budget;
        this.menu = {};
        this.productsInStock = {};
        this.actionsHistory = [];
    }

    loadProducts(products) {
        let productName;
        let productQuantity;
        let productPrice;
        products.forEach(el=> {
            let elem = el.split(' ');
            productName = elem[0];
            productQuantity = Number(elem[1]);
            productPrice = Number(elem[2]);

            if (productPrice <= this.budget) {
                if (!this.productsInStock.hasOwnProperty(productName)){
                    this.productsInStock[productName] = {'productQuantity': productQuantity, 'productPrice': productPrice};
                } else {
                    this.productsInStock[productName]['productQuantity'] += productQuantity;
                    this.productsInStock[productName]['productPrice'] += productPrice;
                }

                this.budget -= productPrice;

                this.actionsHistory.push(`"Successfully loaded ${productQuantity} ${productName}"`)
            } else {
                this.actionsHistory.push(`"There was not enough money to load ${productQuantity} ${productName}"`)
            }
        });

        console.log(this.actionsHistory.join('\n'));
    }

    addToMenu(meal, neededProducts, price) {
        if (!this.menu.hasOwnProperty(meal)){
            this.menu[meal] = {'products': neededProducts, 'price': price};
            console.log(`"Great idea! Now with the ${meal} we have ${Object.keys(this.menu).length} meals in the menu, other ideas?"`)
        } else {
            console.log(`"The ${meal} is already in our menu, try something different."`)
        }            
    }

    showTheMenu() {
        if (Object.keys(this.menu).length > 0) {
            for (let [key, value] of Object.entries(this.menu)){
                console.log(`${key} - $ ${value.price}`)
            }
        } else {
            console.log("Our menu is not ready yet, please come later...");
        }
    }

    makeTheOrder(order) {
        if (!this.menu.hasOwnProperty(order)){
            console.log(`"There is not ${order} yet in our menu, do you want to order something else?"`)
        } else {
            for (let value of Object.values(this.menu[order].products)) {
                let val = value.split(' ');
                if (this.productsInStock.hasOwnProperty(val[0]) && 
                    this.productsInStock[val[0]].productQuantity >= val[1]){
                        continue;
                } else {
                    console.log(`"For the time being, we cannot complete your order (${order}), we are very sorry..."`);
                    break;    
               }
            }
            console.log(`"Your order (${order}) will be completed in the next 30 minutes and will cost you ${this.menu[order].price}."`)
            this.budged += this.menu[order].price;

            for (let value of Object.values(this.menu[order].products)) {
                let val = value.split(' ');
                this.productsInStock[val[0]].productQuantity -= val[1];
            }
        }
    }
}

let kitchen = new Kitchen (1000);
kitchen.loadProducts(['Banana 10 5', 'Banana 20 10', 'Strawberries 50 30', 'Yogurt 10 10', 'Yogurt 500 1500', 'Honey 5 50']);
// kitchen.showTheMenu();
kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99);
kitchen.addToMenu('Pizza', ['Flour 0.5', 'Oil 0.2', 'Yeast 0.5', 'Salt 0.1', 'Sugar 0.1', 'Tomato sauce 0.5', 'Pepperoni 1', 'Cheese 1.5'], 15.55);
kitchen.showTheMenu();

kitchen.addToMenu('Pizza', ['Flour 0.5', 'Oil 0.2', 'Yeast 0.5', 'Salt 0.1', 'Sugar 0.1', 'Tomato sauce 0.5', 'Salami 1', 'Gouda 1.5'], 14.55);
kitchen.makeTheOrder('spagetti');
kitchen.makeTheOrder('frozenYogurt'); 