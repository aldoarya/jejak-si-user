const config = require("../config/auth.config");
const db = require("../models");
const Tracker = db.tracker;

exports.trackEvent = (req, res) => {
  const {
    app_id,
    event_name,
    event_category,
    event_action,
    event_label,
    event_property,
    event_value,
  } = req.body;

  if (!app_id || !event_name || !event_category || !event_action) {
    return res.status(400).send({
      message:
        "No App ID, Event Name, Event Category, or Event Action is Given",
    });
  } else {
    const track = new Tracker({
      app_id,
      event_name,
      event_category,
      event_action,
      event_label,
      event_property,
      event_value,
    });

    console.log(track);

    track.save((err, track) => {
      if (err) {
        res.status(500).send({ message: err });
      } else {
        res.status(200).send({ message: `Tracked ${event_name} Succesfully` });
      }
    });
  }
};
