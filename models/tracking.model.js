const mongoose = require("mongoose");
const Tracker = mongoose.model(
    "Tracker",
    new mongoose.Schema({
        app_id: String,
        event_name: String,
        event_category: String,
        event_action: String,
        event_label: String,
        event_property: String,
        event_value: String,
    }, { timestamps: true })
);
module.exports = Tracker;