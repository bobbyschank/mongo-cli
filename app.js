var mongo = require("mongodb").MongoClient;
var prompt = require("prompt-sync")();
var url = "mongodb://localhost:27017/restaurant_db";

mongo.connect(url, function(err, db){
  var collection = db.collection('restaurants');
  
  // FIND RESTAURANT BY NAME
  // var searchRestaurant = prompt("What restaurants are you looking for? ");
  // collection.find({name: searchRestaurant}).forEach(function(doc) {
  // 	console.log(doc);
  // });



  // ADD RESTAURANT
  // var addName = prompt("What is the restaurant's name?: ");
  // var addStreet = prompt("What is the restaurant's street address?: ");
  // var addZip = prompt("What is the restaurant's zip code?: ");
  // var addAddress = {
  // 	"street": addStreet,
  // 	"zipcode": addZip
  // };
  // var addYelpPath= prompt("What is the restaurant's Yelp URL?: ");
  // var newRest = {
  // 	"name": addName,
  // 	"address": addAddress,
  // 	"yelp": addYelpPath
  // };
  // collection.insert(newRest);

  // EDIT RESTAURANT
  // var editRest = prompt("Type the name of the restaurant to edit: ");
  // var editProperty = prompt("What property would you like to edit/add? ");
  // var editValue = prompt("What is the property's value? ");

  // collection.update(
  // 		{name: editRest},
  // 		{$set: { editProperty: editValue}}
  // 	);

  // DELETE RESTAURANT
  var deleteRest = prompt("What is the name of the restaurant to delete? ");
  collection.remove({ name: deleteRest});



console.log('ALL RESTAURANTS:')

  // SHOW ALL RESTAURANTS
    collection.find().toArray(function(err, doc){
      console.log(doc);
    });
});