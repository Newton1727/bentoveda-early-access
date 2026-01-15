const Subscriber = require("../models/Subscriber");

exports.subscribeEmail = async (req, res) => {
  try {
    
    const { email } = req.body;
// console.log(email);
// console.log("Subscriber typeof:", typeof Subscriber);

    if (!email) {
      return res.status(400).json({
        message: "Email is required",
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        message: "Invalid email format",
      });
    }

    const exists = await Subscriber.findOne({ email });
    if (exists) {
      return res.status(409).json({
        message: "Email already subscribed",
      });
    }

    await Subscriber.create({ email });

    return res.status(201).json({
      message: "Subscribed successfully",
    });
  } catch (error) {
    console.error("Subscribe error:", error.message);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

exports.getAllSubscribers = async (req, res) => {
  try {
    const subscribers = await Subscriber.find().sort({
      createdAt: -1,
    });

    return res.status(200).json(subscribers);
  } catch (error) {
    console.error("Fetch subscribers error:", error.message);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};
