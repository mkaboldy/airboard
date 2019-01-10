const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;

const timeTableSchema = new Schema(
    {
        type : { type: String, required: true },
        status : { type: String, required: true },
    }, 
    { collection: 'timetable' }
);

module.exports = mongoose.model('timetable', timeTableSchema);
