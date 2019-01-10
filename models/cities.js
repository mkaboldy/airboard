const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;

const citySchema = new Schema(
    {
    }, 
    { collection: 'cities' }
);

module.exports = mongoose.model('city', citySchema);

module.exports.findByIataCode = function(iataCode){
    return new Promise((resolve, reject) => {
        airport.findOne({ iataCode : iataCode }).then(airport => {
            resolve(airport)
        }).catch(err => {
            reject(err)
        });
    });
}
