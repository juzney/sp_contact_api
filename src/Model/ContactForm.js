const mongoose = require('mongoose');
   
const contactForm = new mongoose.Schema({

    firstName: {
        type: String,
        required:true
    },
    lastName: {
        type: String,
        required:true
    },
    phoneNumber: {
        type: Number,
        required:true
    },
    email: {
        type: String,
        required:true,
        lowercase:true
    },
    city: {
        type: String,
        required:true
    },
    subject: {
        type: String,
        required:true
    },
    message: {
        type: String,
        required:true
    }
}, { timestamps:true })


const contact = mongoose.model('Contact', contactForm);

module.exports = contact;

