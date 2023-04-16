import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

import users from "../models/auth.js";
import Stripe from "stripe";
const stripe = new Stripe(
  "sk_test_51Mk6ATSEQZiPMKXF5qLJlgFudZGmtv5X3kzsM4LVbEvOSWIRgGxV2V4yoIG5gpW50MvypqsQX6ypef6NWpGHV39W00md5f6XLN"
);

export const signup = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const existinguser = await users.findOne({ email });
    if (existinguser) {
      return res.status(404).json({ message: "User already exists." });
    }
    const hashedPassword = await bcrypt.hash(password, 12);
    const newUser = await users.create({
      name,
      email,
      password: hashedPassword,
    });
    const token = jwt.sign(
      { email: newUser.email, id: newUser._id },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );
    res.status(200).json({ result: newUser, token });
    console.log("You are signed up");
  } catch (error) {
    res.status(500).json("Something went wrong...");
    console.log(error);
    // 500 is for internal server error
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const existinguser = await users.findOne({ email });
    if (!existinguser) {
      return res.status(404).json({ message: "User doesn't exists." });
    }

    const isPasswordCrt = await bcrypt.compare(password, existinguser.password);
    if (!isPasswordCrt) {
      return res.status(400).json({ message: "Invalid credentials" });
    }
    const token = jwt.sign(
      { email: existinguser.email, id: existinguser._id },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );
    res.status(200).json({ result: existinguser, token });
  } catch (error) {
    res.status(500).json("Something went wrong...");
    console.log(error);
  }
};

export const payment = async (req, res) => {
  const body = req.body;
  const email = body.email;
  const plans = [
    {
      id: 1,
      tagName: "Free Plan",
      tagDesc: "You can post only 1 question a day",
      price: 0,
    },
    {
      id: 2,
      tagName: "Silver Plan",
      tagDesc: "For ₹100/month, you can post 5 questions a day",
      price: 10000,
    },
    {
      id: 3,
      tagName: "Gold Plan",
      tagDesc: "For ₹1000/month, you can post unlimited questions",
      price: 100000,
    },
  ];
  try {
    console.log("payment is being processed", body);
    const plan = plans[body?.type?.id - 1];
    console.log("plans selected", plan);
    const session = await stripe.checkout.sessions.create({
      //   payment_method_types: ["card"],
      mode: "payment",
      line_items: [
        {
          price_data: {
            currency: "inr",
            product_data: {
              name: plan.tagName,
            },
            unit_amount: plan.price,
          },
          quantity: 1,
        },
      ],
      success_url: `${process.env.CLIENT_URL}/Subscription/Success`,
      cancel_url: `${process.env.CLIENT_URL}/Subscription/Cancel`,
    });
    // console.log("user email", email);
    // const existinguser = await users.findOne({ email });
    // console.log("exisiting user", existinguser);
    // const updateQuery = { email: email };
    // const updateParameter = { $set:{plan: plan.tagName, }};
    // const updateUserPlan = await users.updateOne(updateQuery, updateParameter);
    // console.log("update", updateUserPlan);
    res.status(200).json({ url: session.url });
    // res.json({ url: session.url });
  } catch (e) {
    // res.status(200).json({ message: "success" });
    res.status(500).json({ error: e.message });
  }
};
