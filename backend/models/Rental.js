class Rental {

    constructor(){
        this.name = null;
        this.description = null;
        this.addressLine1 = null;
        this.addressLine2 = null;
        this.city = null;
        this.state = null;
        this.country = null;
        this.available = null;
        this.dateFrom = null;
        this.dateTo = null;
        this.verified = null;
        this.pricePerDay = null;
        this.rentalTypeId = null;
        this.numberOfRooms = null;
        this.numberOfGuests = null;
        this.services = null;
        this.host_id = null;
    }

    initModel(name, description, addressLine1, addressLine2, city, state, country,
            available, dateFrom, dateTo, verified, pricePerDay, rentalTypeId,
            numberOfRooms, numberOfGuests, services, host_id) {
        this.name = name;
        this.description = description;
        this.addressLine1 = addressLine1;
        this.addressLine2 = addressLine2;
        this.city = city;
        this.state = state;
        this.country = country;
        this.available = available;
        this.dateFrom = dateFrom;
        this.dateTo = dateTo;
        this.verified = verified;
        this.pricePerDay = pricePerDay;
        this.rentalTypeId = rentalTypeId;
        this.numberOfRooms = numberOfRooms;
        this.numberOfGuests = numberOfGuests;
        this.services = services;
        this.host_id = host_id;

    }

  

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

module.exports = Rental;