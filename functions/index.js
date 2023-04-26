/* eslint-disable max-len */
/* eslint-disable comma-dangle */
/* eslint-disable indent */
const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
    "sk_test_51N0WGPGmRj1Z1DFGteupGdQIASoO5rl0akEHQCnJbK2o3uJ5YnaMult05Dan7KnOBFVg1EIDEK5pcPomH1VTUMnL00lgoO9BeY"
);
const app = express();
app.use(cors({origin: true}));
app.use(express.json());
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
const total = request.query.total;

console.log("Payment Request Recieved for this amount >>> ", total);

const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "usd",
});

  // OK - Created
response.status(201).send({
    clientSecret: paymentIntent.client_secret,
});
});
exports.api = functions.https.onRequest(app);
