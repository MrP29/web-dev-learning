const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/fruitsDB", {
  useNewUrlParser: true,
});

const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please check your data entry, no name specified!"],
  },
  rating: {
    type: Number,
    min: 1,
    max: 10,
  },
  review: String,
});

const Fruit = mongoose.model("Fruit", fruitSchema);

// const fruit = new Fruit({
//   name: "Apple",
//   rating: 7,
//   review: "Good",
// });

const peach = new Fruit({
  name: "Peach",
  rating: 5,
  review: "nah"
})

// peach.save();

// Fruit.deleteOne({name: "Peach"}, (err) => {
//   if(err) {
//     console.log(err);
//   } else {
//     console.log("Successfully deleted");
//   }
// });

// Fruit.find((err, fruits) => {
//   if (err) {
//     console.log(err);
//   } else {
//     fruits.forEach((fruit) => {
//       console.log(fruit.name);
//     });
//   }
// });

const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
  favoriteFruit: fruitSchema
});

const Person = mongoose.model("Person", personSchema);

const person = new Person({
  name: "John",
  age: 37,
});

// person.save();

Person.updateOne({name: "John"}, {favoriteFruit: peach}, (err) => {
  if(err) {
    console.log(err);
  } else {
    console.log("Successfully updated");
  }
})
// Person.deleteMany({ name: "John" }, (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Successfully deleted");
//   }
// });

// mongoose.connection.close();
// const insertDocuments = function(db, callback) {
//     // Get the documents collection
//     const collection = db.collection("fruits");
//     // Insert some documents
//     collection.insertMany([
//         {
//             name: "Apple",
//             score: 8,
//             review: "Great fruit"
//         },
//         {
//             name: "Orange",
//             score: 6,
//             review: "Kinda sour"
//         },
//         {
//             name: "Banana",
//             score: 9,
//             review: "Great stuff!"
//         }
//     ], function(err, result) {
//         assert.equal(err, null);
//         // assert.equal(3, result.result.n);
//         // assert.equal(3, result.ops.length);
//         console.log("Inserted 3 documents into the collection");
//         callback(result);
//     });
// }

// const findDocuments = function(db, callback) {
//     // Get the documents collection
//     const collection = db.collection("fruits");
//     // Find some documents
//     collection.find({}).toArray(function(err, fruits) {
//         assert.equal(err, null);
//         console.log("Found the following records");
//         console.log(fruits);
//         callback(fruits);
//     });
// }
// mongoose.connection.close();