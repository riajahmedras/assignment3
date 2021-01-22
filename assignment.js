/**
 * Folder Link: https://github.com/riajahmedras/assignment3
 * File Link: https://github.com/riajahmedras/assignment3/blob/main/assignment.js
 */


// Assignment Part: 01. kilometerToMeter

function kilometerToMeter(kilometer){
   if(kilometer > 0){
   var metre = kilometer*1000;
   return metre;
   }
   else{
      return "Your measuring amount might not be in the minus figure."
   }
}
var result = kilometerToMeter(-2.2);
console.log(result);


// Assignment Part: 02. budgetCalculator
function budgetCalculator(watch, mobile, laptop){
   if(watch >= 0, mobile >= 0, laptop >= 0){
      var watchPrice = watch*50;
      var mobiblePrice = mobile*100;
      var laptopPrice = laptop*500;
      var totalPrice = watchPrice + mobiblePrice + laptopPrice;
   }
   return totalPrice;
}
console.log(budgetCalculator(3, 1, 6));

// Assignment Part: 03. hotelCost

function hotelCost(days){
   var rent = 0;
   if(days < 0){
      return "Sorry! You have inputed Nagetive value."
   } else if(days <= 10){
      rent = days * 100;
   } else if(days <= 20){
      var first10 = 10 * 100;
      var remaining = days - 10;
      var second10 = remaining * 80;
      rent = first10 + second10;
   } else{
      var first10 = 10 * 100;
      var second10 = 10 * 80;
      var remaining = days - 20;
      var third10 = remaining * 50;
      rent = first10 + second10 + third10;
   }
   return rent;
}
var totalRent = hotelCost(31);
console.log(totalRent);

// Assignment 04. megaFriend
function megaFriend(friends){
   var friendsLong = " ";
   for(var i = 0; i< friends.length; i++){
      var elements = friends[i];
      friendsLong = elements;
   }
   return friendsLong;
}
var friends = ["Anik", "Fonik", "Abul", "Hossain", "Manik", "Rahmat Ali" , "Sasmat Ali"];
var result = megaFriend(friends);
console.log("সবচেয়ে বড় নাম ", result , "যার টাইপ ", typeof(result));