var mongoose = require('mongoose');
// DEFINE THE OBJECT SCHEMA
var ticketSchema = new mongoose.Schema({
    created: {
        type: Date,
        default: Date.now
    },
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
        default: 'NEW',
        trim: true
    }
}, {
    collection: "ticketInfo"
});
// MAKE THIS PUBLIC SO THE CONTROLLER CAN SEE IT
exports.Ticket = mongoose.model('Ticket', ticketSchema);

//# sourceMappingURL=ticket.js.map
