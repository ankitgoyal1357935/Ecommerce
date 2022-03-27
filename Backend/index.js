const express = require('express');
const app = express();
require('dotenv').config();
require("./db/conn");
const userRoutes = require("./Routes/user");
const authRoutes = require("./Routes/auth");
const ProductRoutes = require("./Routes/products");
const CartRoutes = require("./Routes/cart");
const OrderRoutes = require("./Routes/orderroute");
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use("/api/user",userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/products", ProductRoutes);
app.use("/api/cart", CartRoutes);
app.use("/api/orders", OrderRoutes);

app.listen(process.env.PORT,()=>{
    console.log('listening on port '+process.env.PORT);
})