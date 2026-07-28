const express=require("express");
const router=express.Router({mergeParams:true});
const WrapAsync=require("../utils/wrapAsync.js");
const ExpressError=require("../utils/ExpressError.js");
const Listing = require("../models/listing.js"); 
const Review=require("../models/reviews.js");
const {validateReview}=require("../middleware.js");
const { isLoggedIn,isReviewAuthor} = require("../middleware.js");
const reviewController=require("../controllers/reviews.js");



//reviews 
//post route 
router.post("/",isLoggedIn,validateReview ,WrapAsync(reviewController.createReview));
//Delete  review route
router.delete("/:reviewId", isLoggedIn,isReviewAuthor,
    WrapAsync(reviewController.destroyReview));
module.exports=router;