class Traveler {

    constructor(){
        this.FirstName = null;
        this.LastName = null;
        this.Email = null;
        this.Password = null;
        this.AddressLine1 = null;
        this.AddressLine2 = null;
        this.City = null;
        this.State = null;
        this.Country = null; 
    }

    initModel(data) {
        
        this.FirstName = data.FirstName;
        this.LastName = data.LastName;
        this.Email = data.Email;
        this.Password = data.Password;
        this.AddressLine1 = data.AddressLine1;
        this.AddressLine2 = data.AddressLine2;
        this.City = data.City;
        this.State = data.State;
        this.Country = data.Country;
    }

    //getters
    getFirstName() { return this.FirstName }
    getLastName() { return this.LastName }
    getEmail() { return this.Email }
    getPassword() { return this.getPassword }
    getAddressLine1() { return this.AddressLine1 }
    getAddressLine2() { return this.AddressLine2 }
    getCity() { return this.City }
    getState() { return this.State }
    getCountry() { return this.Country }


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