class Booking {

    constructor(){
        this.rentalId = null;
        this.userId = null;
        this.bookFrom = null;
        this.bookTo = null;
        this.amount = null;
        this.numberOfRooms = null;
        this.numberOfGuests = null;
    }

    initModel(rentalId, userId, bookFrom, bookTo,
              amount, numberOfRooms,numberOfGuests) {
        this.rentalId = rentalId;
        this.userId = userId;
        this.bookFrom = bookFrom;
        this.bookTo = bookTo;
        this.amount = amount;
        this.numberOfRooms = numberOfRooms;
        this.numberOfGuests = numberOfGuests;
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

module.exports = Booking;