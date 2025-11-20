const Product = require("../models/product");
const path = require("../util/path");

exports.getProducts = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("shop/product-list", {
      prods: products,
      pageTitle: "Products",
      path: "/products",
      hasProducts: products.length > 0,
      // activeShop: true,
      productCSS: true,
    });
  });
};

exports.getProduct = (req, res, next) => {
  const prodId = req.params.productId;
  res.redirect('/')
}

exports.getIndex = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("shop/index", {
      prods: products,
      pageTitle: "Shop",
      path: "/",
      hasProducts: products.length > 0,
      activeShop: true,
      productCSS: true,
    });
  });
};

exports.getCart = (req,res,next) => {
  res.render("shop/cart", {
    pageTitle: "Cart",
    path: "/cart",
  });
}


exports.getOrders = (req,res,next) => {
  res.render("shop/cart", {
    pageTitle: "Cart",
    path: "/cart",
  });
}

exports.getCheckout = (req,res,next) => {
  res.render('shop/checkout' , {
    pageTitle: "Checkout",
    path: '/checkout'
  })
}