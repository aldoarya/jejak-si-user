const controller = require("../controllers/tracking.controller");
module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Headers", "Origin, Content-Type, Accept");
    next();
  });

  app.post("/api/track", controller.trackEvent);
  app.get("/api/track/:id", controller.getTrackEventByID);
};
