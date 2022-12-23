import express from "express";
import * from paypal from "./paypal.js";

const app = express();

app.use(express.static("public"));

app.post("/api/orders", async (req, res) => {
    const order = await paypal.createOrder();
    res.json(order);
});
app.post("/api/order/:orderID/capture", async (req, res) => {
    const { orderID } = req.params;
    const captureData = await paypal.capturePayment(orderID);
    res.json(captureData);
});

app.listen(3000;)