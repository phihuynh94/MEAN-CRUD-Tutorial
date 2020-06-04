const mongoose = require('mongoose');

var Employee = new mongoose.Schema({
    name: {
        type: String
    },

    position: {
        type: String
    },

    office: {
        type: String
    },

    salary: {
        type: Number
    }
});

module.exports = mongoose.model('Employee', Employee);