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
const cookieParser = require("cookie-parser");
process.on("uncaughtException",(err)=>{
    console.error(err.message);
    console.error("shutting down the server due to an uncaught exception");
    process.exit(1);

})

app.use(cors());
app.use(cookieParser());
app.use(express.urlencoded({ extended:true}))
app.use(express.json());
app.use((err, req, res, next) => {
    console.error(err.message)
    res.status(500).json({sucess:false});
  })
app.use("/api/user",userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/product", ProductRoutes);
app.use("/api/cart", CartRoutes);
app.use("/api/orders", OrderRoutes);

const server = app.listen(process.env.PORT,()=>{
    console.log('listening on port '+process.env.PORT);
});

process.on("uncaughtException",err=>{
    console.log(`Error: ${err.message}`);
    console.log(`shutting down to server due to unhandled promises rejection`);

    server.close(() =>{
        process.exit(1);
    });
});