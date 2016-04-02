import mongoose = require('mongoose');

// DEFINE THE OBJECT SCHEMA
var ticketSchema = new mongoose.Schema ({
   created: {
       type: Date,
       default:Date.now
   } ,
   ticketNum: {
        type: String,
        default: '',
        trim: true,
        required: 'Title is required'
    },
    ticketOwner: {
        type: String,
        default: '',
        trim: true
    },
    ticketStatus: {
        type: String,
        default: 'NEW',
        trim: true
    },
    ticketPriority: {
        type: String,
        default: 'LOW',
        trim: true
    },
    ticketDesc: {
        type: String,
        default: '',
        trim: true
    },
    ticketCreated: {
       type: Date,
       default:Date.now
    },
    ticketClosed: {
        type: Date,
        default: Date.now
    },
    ticketLife: {
        type: String,
        default: '',
        trim: true
    },
    ticketUpdate: {
        type: String,
        default: '',
        trim: true
    }
}, 
{
    collection:"ticketInfo"
});

// MAKE THIS PUBLIC SO THE CONTROLLER CAN SEE IT
export var Ticket = mongoose.model('Ticket', ticketSchema);