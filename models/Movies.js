import mongoose from "mongoose";

// define schema
const movieSchema = new mongoose.Schema({
    name: { type:String, required: true, trim: true },
    ratings: { type: Number, required: true, min: 1 , max: 5},
    money:{
        type: mongoose.Decimal128,
        required: true,
        validate: v => v >= 10
    },
    genre: { type: Array, required: true, trim: true },
    isActive: { type: Boolean},
    comments: [{value: {type: String}, published: {type: Date, default: Date.now()}}]
})

// creating model
const MovieModel = mongoose.model("Movie", movieSchema);

// create docs to db
// const createDocs = async () =>{
//     try {

//     // creating new document
//       const m1 = new MovieModel({
//         name: "Avengers: Endgame",
//         ratings: 5,
//         money: 6000,
//         genre: ["Action", "Adventure", "Drama"],
//         isActive: true,
//         comments: [{value: "Amazing movie!"}]
//        });

//        const m2 = new MovieModel({
//         name: "The Dark Knight",
//         ratings: 4,
//         money: 1000,
//         genre: ["Action", "Crime", "Drama"],
//         isActive: true,
//         comments: [{value: "tough though to see it!"}]
//        });

//         const m3 = new MovieModel({
//         name: "The Shawshank Redemption",
//         ratings: 4,
//         money: 1000,
//         genre: ["Drama", "Crime"],
//         isActive: true,
//         comments: [{value: "Amazing movie but scary!"}]
//          });

//         const m4 = new MovieModel({
//         name: "Inception",
//         ratings: 3,
//         money: 2000,
//         genre: ["Action", "Crime", "Thriller"],
//         isActive: false,
//         comments: [{value: "Incredible adventure!"}]
//         });

//         const m5 = new MovieModel({
//             name: "The Godfather",
//             ratings: 4,
//             money: 1500,
//             genre: ["Crime", "Drama"],
//             isActive: true,
//             comments: [{value: "Amazing movie!"}]
//         })


//     //save to databse
//     // save one doc
//     const result = await m1.save()
//     console.log("Document saved successfully", result)
        
//     // save multiple docs
//     const result = await MovieModel.insertMany([m2, m3, m4, m5]);
//     console.log("Documents saved successfully", result);

//     } catch (error) {
//         console.log(error)
//     }
// }


// retrieve data from db
// const retrieveDocs = async () =>{
//     try {
//         const res = await MovieModel.find();
//         console.log("data Received:", res);

//         // iterate over the data
//         res.forEach(movie =>{
//             console.log(movie.comments);
//         })




//     } catch (error) {
//         console.log(error);
//     }
// }


// retrieve one doc
const retrieveDoc = async () =>{
    try {
        // const res = await MovieModel.findOne({name: "The Dark Knight"});
        // const res = await MovieModel.findById("674450c1ddc474a1b8ad7013");
        // const res1 = await MovieModel.find().countDocuments();

        // sort 
        // const res = await MovieModel.find().sort({ratings: 1});

        // comparison operator
        const res = await MovieModel.find({money: {$gt: 2000}});

        // and operator
        const res1 = await MovieModel.find({$and: [{ratings: {$gt: 3}}, {genre: "Crime"}]});

        // or operator
        const res2 = await MovieModel.find({$or: [{ratings: {$gt: 4}}, {genre: "Drama"}]});
        // console.log("data Received:", res);
        // console.log("data Received:", res2);
    } catch (error) {
        console.log(error);
    }
}


// update data by id
// const updateData = async (id) =>{
//     try {
//         const res = await MovieModel.updateOne({_id: id}, { name: "Legend of the seeker"});
//         console.log("data Updated:", res);
        
//     } catch (error) {
//         console.log(error)
//     }
// }

// update many
//  const updateMany = async () =>{

//     try {
//         const res = await MovieModel.updateMany({ratings: {$lt: 4}}, {isActive: true});
//         console.log("data Updated:", res);  
//     } catch (error) {
//         console.log(error)
//     }
//     }


    // delete data
    const deleteData = async () =>{
        try {
            const res = await MovieModel.deleteOne({name: "The Shawshank Redemption"});
            console.log("data Deleted:", res);
            
        } catch (error) {
            console.log(error);
        }
    }

export {deleteData};