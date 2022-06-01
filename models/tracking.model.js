const mongoose = require("mongoose");
const { Schema } = mongoose;

const Tracker = mongoose.model(
  "Tracker",
  new mongoose.Schema(
    {
      app_id: { type: Schema.Types.ObjectId, ref: "UserAccount" },
      event_name: String,
      event_category: String,
      event_action: String,
      event_label: String,
      event_property: String,
      event_value: String,
    },
    { timestamps: true }
  )
);
module.exports = Tracker;
