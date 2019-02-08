let order = {
        id: String,
        state: String, // pending | baking | out for delivery | delivered
        timestamp: Date,
        courses: [ Object ],
        delivery: {
            assignedDrone: String, // Drone id
            location: { 
                long: String, 
                lat: String 
            }
        },
        billing: {
            payed: Boolean,
            sum: Number
        }
    };

let drone = {
        id: String,
        battery: 100,
        state: String, // occupied | ready
        currentOrder: Object
    };
        
