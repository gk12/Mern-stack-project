const express=require("express");
const app=express();
const errorMiddleware=require("./middleware/error");

// This method is called as a middleware in an application using this code:-
app.use(express.json())

//Route imports
const product=require("./routes/productRoute");
const user=require("./routes/productRoute");

app.use("/api/v1",product);
app.use("/api/v1",user);

//midleware for error
app.use(errorMiddleware);

module.exports=app;