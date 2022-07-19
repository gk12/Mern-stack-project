const Product = require("../models/productModel");
const ErrorHander = require("../utils/errorhander");
const catchAsyncErrors=require("../middleware/catchAsyncErrors");

//create product :-Admin route
exports.createProduct=catchAsyncErrors(async(req,res,next)=>{
    const product=await Product.create(req.body);
    res.status(201).json({
        success:true,
        product,
    });
});

// Get all product
exports.getAllProducts=catchAsyncErrors(async(req,res)=>{
    
    const products=await Product.find();

    res.status(200).json({
        success:true,
        products
    });
});

// Update Product -- Admin

exports.updateProduct=catchAsyncErrors(async(req,res,next)=>{
    let product=await Product.findById(req.params.id);

    if(!product)
    {
        return res.status(500).json({
            success:false,
            message:"Product not found"
        })
    }

    product=await Product.findByIdAndUpdate(req.params.id,req.body,{
        new:true,
        runValidators:true,
        userFindAndModify:false
    });

    res.status(200).json({
        success:true,
        product
    });
});

// DElete product:- Admin

exports.delteProduct=catchAsyncErrors( async (req,res,next)=>{

    const product=await Product.findById(req.params.id);

    if(!product)
    {
        return res.status(500).json({
            success:false,
            message:"Product not found"
        })
    }
  await product.remove();

    res.status(200).json({
        success:true,
        message:"Product deleted successfully"
    });

});

// Get single product

exports.getProductDetails= catchAsyncErrors( async (req,res,next)=>{
    const product=await Product.findById(req.params.id);
    
    if(!product)
    {
       return next(new ErrorHander("product not found",404));
    }

    res.status(200).json({
        success:true,
        product,
    });
});