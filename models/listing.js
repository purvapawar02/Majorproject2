const mongoose=require("mongoose");
const Schema=mongoose.Schema;

const listingSchema=new Schema({
    title:{
        type:String,
        required:true,
    },
    description:String,
    image:{
        
        url:String,
        filename:String,
        // default:
        //     "https://www.google.com/search?sca_esv=74df811e3a5c80f0&sca_upv=1&rlz=1C1UEAD_en-GBIN1106IN1106&sxsrf=ADLYWIKmav1OxNVhE9HOFCppjd8p6acnxQ:1720698847947&q=unsplash+beach+sunset+coconut+tree+without+copyright&udm=2&fbs=AEQNm0DYVld7NGDZ8Pi819Yg8r6em07j6rW9d2jUMtr8MB7htoxbI0iAKNRPykigVf3e9aputkbr8jzmN5LYbANOqrq5HYnx4MjtyMxZ94LvgeHWmGBcuWUoydKfNaoB5JMdZlMtXmg2De2y5O7nn-eTbNdYHsRiT1RQ-pB6qp3ejXJ5VpdCk5NA1Jug5hVR16L7F-A1C1p-4xpfp7qj2HsGNaipPZQOiw&sa=X&ved=2ahUKEwixrePc9p6HAxX2xDgGHdVlCJAQtKgLegQIDxAB&biw=1536&bih=738&dpr=1.25#vhid=ZNhqtmd0Qsgq0M&vssid=mosaic",
        // // set:(v)=> 
        // //     v === "" 
        // //     ? "https://www.google.com/search?sca_esv=74df811e3a5c80f0&sca_upv=1&rlz=1C1UEAD_en-GBIN1106IN1106&sxsrf=ADLYWIKmav1OxNVhE9HOFCppjd8p6acnxQ:1720698847947&q=unsplash+beach+sunset+coconut+tree+without+copyright&udm=2&fbs=AEQNm0DYVld7NGDZ8Pi819Yg8r6em07j6rW9d2jUMtr8MB7htoxbI0iAKNRPykigVf3e9aputkbr8jzmN5LYbANOqrq5HYnx4MjtyMxZ94LvgeHWmGBcuWUoydKfNaoB5JMdZlMtXmg2De2y5O7nn-eTbNdYHsRiT1RQ-pB6qp3ejXJ5VpdCk5NA1Jug5hVR16L7F-A1C1p-4xpfp7qj2HsGNaipPZQOiw&sa=X&ved=2ahUKEwixrePc9p6HAxX2xDgGHdVlCJAQtKgLegQIDxAB&biw=1536&bih=738&dpr=1.25#vhid=ZNhqtmd0Qsgq0M&vssid=mosaic"
        // //     : v,

    },
    price:Number,
    location:String,
    country:String,
});

const Listing=mongoose.model("Listing",listingSchema);

module.exports=Listing;