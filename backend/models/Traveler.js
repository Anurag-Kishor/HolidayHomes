class Traveler {

    constructor(){
        this.firstName = null;
        this.lastName = null;
        this.email = null;
        this.password = null;
        this.addressLine1 = null;
        this.addressLine2 = null;
        this.city = null;
        this.state = null;
        this.country = null;
        this.phoneNumber = null;
    }

    initModel(firstName, lastName, email, password, addressLine1, addressLine2, city, state, country, phoneNumber) {
        
        this.firstName = firstName;
        this.lastName = lastName;
        this.email =email;
        this.password = password;
        this.addressLine1 =addressLine1;
        this.addressLine2 = addressLine2;
        this.city = city;
        this.state = state;
        this.country = country;
        this.phoneNumber = phoneNumber;

    }

    //getters
    getFirstName() { return this.firstName }
    getLastName() { return this.lastName }
    getEmail() { return this.email }
    getPassword() { return this.password }
    getAddressLine1() { return this.addressLine1 }
    getAddressLine2() { return this.addressLine2 }
    getCity() { return this.city }
    getState() { return this.state }
    getCountry() { return this.country }


    fill (newFields) {
        for (let field in newFields) {
            if (this.hasOwnProperty(field) && newFields.hasOwnProperty(field)) {
                if (this[field] !== 'undefined') {
                    this[field] = newFields[field];
                }
            }
        }
    };
    
}

module.exports = Traveler;