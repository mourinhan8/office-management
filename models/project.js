var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProjectSchema = new Schema({
    place: {type: String, required: true},
    name: {type: String, required: true},
    content: {type: String, required: true},
    receivedDate: {type: Date, required: true},
    phoneNumber: {type: Number, required: true},
    numPage: {type: Number, required: true},
    currentSquare: {type: Number, required: true},
    cerNumber: {type: String, required: true},
    mainHandler: {type: Schema.Types.ObjectId, ref: 'User', required: true},
    subHandler: {type: Schema.Types.ObjectId, ref: 'User', required: true},
    dateMeasure: {type: Date, required: true},
    dateSub: {type: Date, required: true},
    dateApp: {type: Date, required: true},
    officer: {type: String},
    note: {type: String}
});


module.exports = mongoose.model('Project', ProjectSchema);