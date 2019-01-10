const timeTable = require('../models/timetable');
const airport = require('../models/airports');

module.exports = (router) => {

    router.get('/departures', (req, res)=> {
        res.json({
            success: true,
            departures: [
                {
                    status: '',
                    flight: 'KL1148',
                    destination: 'Amsterdam',
                    departure: '11:45',
                    remark: 'Gate closed',
                },
                {
                    status: '',
                    flight: 'LH148',
                    destination: 'Frankfurt',
                    departure: '11:50',
                    remark: 'Boarding',
                },
                {
                    status: '',
                    flight: 'AFH148',
                    destination: 'Paris CDG',
                    departure: '11:50',
                    remark: 'Boarding',
                },
                {
                    status: '',
                    flight: 'BA5148',
                    destination: 'London Heathrow',
                    departure: '12:50',
                    remark: '',
                },
                {
                    status: '',
                    flight: 'MA601',
                    destination: 'Amsterdam',
                    departure: '12:50',
                    remark: 'Cancelled',
                },
            ],
        });
    });

    router.get('/arrivals', (req, res) => {
        timeTable.find({
        }, { _id: 0 }).lean().exec((err, arrivals) => {
            if (err) {
                res.json({ success: false, message: "Error retrieving timetable: " + err.message });
            } else {
                arrivals = arrivals.map((arrival) => {                    
                    airport.findOne({codeIataAirport: arrival.departure.iataCode},(err,res)=>{
                        arrival.fromAirport = res;
                    }).then((res)=>{
                        arrival.fromAirport = res;
                        console.log(res)
                    });
                    // console.log(arrival);
                    return arrival;
                });
                res.json({ success: true, arrivals: arrivals });                
            }            
        });
    });

    return router;
}