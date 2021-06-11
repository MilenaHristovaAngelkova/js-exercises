class CheckingAccount {
    constructor(clientId, email, firstName, lastName){
        this.clientId = clientId;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    set clientId(clientId) {
        if (!clientId.match(/\d{6}/)) {
            throw new TypeError("Client ID must be a 6-digit number");
        } else {
            return this._clientId = clientId;
        }
    };

    get clientID() {
        return this._clientID;
    };

    set email(email) {
        if (!email.match(/\w+@[a-zA-Z\.]+/)){
            throw new TypeError("Invalid e-mail");
        } else {
            return this._email = email;
        }
    }

    get email() {
        return this._email;
    }

    set firstName(firstName){
        if (firstName.match(/^[a-zA-Z]+$/) && firstName.length < 3 || firstName.match(/^[a-zA-Z]+$/) && firstName > 20) {
            throw new TypeError("First name must be between 3 and 20 characters long");  
        } else if (!firstName.match(/^[a-zA-Z]+$/)){
            throw new TypeError("First name must contain only Latin characters");
        } else {
            return this._firstName = firstName;
        }
    }

    get firstName() {
        return this._firstName;
    }

    set lastName(lastName){
        if (lastName.match(/^[a-zA-Z]+$/) && lastName.length < 3 || lastName.match(/^[a-zA-Z]+$/) && lastName > 20) {
            throw new TypeError("Last name must be between 3 and 20 characters long");               
        } else if (!lastName.match(/^[a-zA-Z]+$/)){
            throw new TypeError("Last name must contain only Latin characters");
        } else {
            return this._lastName = lastName;
        }
    }

    get lastName() {
        return this._lastName;
    }
}

let acc = new CheckingAccount('1314', 'ivan@some.com', 'Ivan', 'Petrov');
let acc = new CheckingAccount('131455', 'ivan@', 'Ivan', 'Petrov');
let acc = new CheckingAccount('131455', 'ivan@some.com', 'I', 'Petrov');
let acc = new CheckingAccount('131455', 'ivan@some.com', 'Ivan', 'P3trov');