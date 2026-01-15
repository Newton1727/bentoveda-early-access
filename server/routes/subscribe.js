const express = require("express");
const { subscribeEmail, getAllSubscribers } = require("../controller/subscriberController");
const subscriberRouter = express.Router();


subscriberRouter.post("/", subscribeEmail);

subscriberRouter.get("/", getAllSubscribers);

module.exports = subscriberRouter;
