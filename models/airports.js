const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;

const airportSchema = new Schema(
    {
    }, 
    { collection: 'airports' }
);

module.exports = mongoose.model('airport', airportSchema);

module.exports.findByIataCode = function(iataCode){
    return new Promise((resolve, reject) => {

        // still callback function is ok
        airport.findOne({ iataCode : iataCode },function(err,airport){
            if (err) reject(err)
            resolve(airport)
        })

        // mongoose return promise, both is ok
        airport.findOne({ iataCode : iataCode }).then(airport => {
            resolve(airport)
        }).catch(err => {
            reject(err)
        })
    })

}
