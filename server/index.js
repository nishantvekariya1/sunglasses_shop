require("dotenv").config();
const express = require("express");
const cors = require("cors");
const authRouter = require("./router/auth-router");
const contactRouter = require("./router/contact-router");
const productRouter = require("./router/product-router");
const adminRouter = require("./router/admin-router");
const orderRouter = require("./router/order-router");
const connectDb = require("./utils/db");
const errorMiddleware = require("./middleware/error-middleware");

const app = express();

const corsOpetions = {
  origin: "http://localhost:5173",
  methods: "GET,POST,PUT,DELETE,PATCH,HEAD",
  credentials: true,
};
app.use(cors(corsOpetions));

app.use(express.json());

app.use("/api/auth", authRouter);

app.use("/api/form", contactRouter);

app.use("/api/data", productRouter);

app.use("/api/admin", adminRouter);

app.use("/api/order", orderRouter);

app.use(errorMiddleware);

const port = process.env.PORT || 6000;
connectDb().then(() => {
  app.listen(port, () => {
    console.log(`Server is running on ${port}`);
  });
});
