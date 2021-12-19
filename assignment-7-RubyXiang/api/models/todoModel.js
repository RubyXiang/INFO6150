
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TaskSchema = new Schema({
    id:{
      type: Number
    },
    title: {
        type: String,
        required: 'Kindly enter the title of the task'
    },
    description: {
        type: String,
        required: 'Kindly enter the description of the task'
    },
    createdDate: {
        type: Date,
        default: Date.now
    },
    lastModifiedDate:{
        type: Date
    }
});

module.exports = mongoose.model('Tasks', TaskSchema);

