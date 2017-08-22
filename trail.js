(function(){
   //@see https://stackoverflow.com/questions/1335851/what-does-use-strict-do-in-javascript-and-what-is-the-reasoning-behind-it
   'use strict';

   function Traveler(name, amount, isHealthy){
         this.name=name;
         this.amount=amount;
         this.isHealthy=isHealthy;


    }//end Traveler

   function Wagon(capacity, passengers) {
     this.passengers=passengers;
     this.capacity = capacity;
   }//end wagon
   //get random number from method
   function getRandomIntInclusive(min, max) {
     min = Math.ceil(min);
     max = Math.floor(max);
     return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
   }
   //make a new traveler
   function makeTraveler(tempName) {
     let amount=getRandomIntInclusive(1,100);
     let tempTraveler = new Traveler(tempName, amount, true);
     return tempTraveler;
   }
   //make a wagon
   function makeWagon(tempCapacity)
   {
     let passengers=[];
     //console.log("array length " + passengers.length);
     let tempWagon = new Wagon(tempCapacity, passengers);
     return tempWagon;
   }
   //possibly add more food
   function hunt(temp){
     let chance = getRandomIntInclusive(0,1);
     let holder = temp.amount;
     if(chance==1) {temp.amount = temp.amount+100;}//successful hunt
       //unsuccessful hunt will not change value
     //console.log("old food amount: " + holder + " new food amount: " + temp.amount + " chance was " + chance);
   }//end hunt

   //remove food
   function eat(temp){
     let holder = temp.amount;
     temp.amount=temp.amount-20;
     if(temp.amount<20){
       if(temp.amount<0){temp.amount=0;}//can't have negative amounts of food
       temp.isHealthy=false;
     }//if not enough food, amount is set to zero and isHealthy is false
     //console.log("old food amount: " + holder + " new food amount: " + temp.amount + " " + temp.name + " isHealthy is now " + temp.isHealthy);
   }
   
   function join(tempWagon, tempTraveler){
     let check=tempWagon.passengers.length;
     //console.log("check: " + check + "capacity: " + tempWagon.capacity + "traveler check:" + tempTraveler.name)
     //if adding person won't put wagon over capacity, add the person
     if(check<tempWagon.capacity){
       tempWagon.passengers.push(tempTraveler)
       check=tempWagon.passengers.length;
       //console.log("check: " + check + "capacity: " + tempWagon.capacity + "traveler check:" + tempTraveler.name)
     } else {console.log("Not able to add you to the wagon until you take someone out!")}
     //console.log("Capacity: " + tempWagon.capacity + "passenger list: " + tempWagon.passengers.length);
   }

   function quarantine(tempWagon){
     let holder = true;
     //check if anyone is unhealthy, if one is found, break loop
     for(let i = 0; i < tempWagon.passengers.length; i++){
       //console.log(tempWagon.passengers[i]);
       if(tempWagon.passengers[i].isHealthy===false) {
         return true;
       }
     }
     return false;
   }

   function food(tempWagon){
     let food = 0;
     //go through wagon and count food for each passenger
     for(let i = 0; i < tempWagon.passengers.length; i++) {
       food = food + tempWagon.passengers[i].amount;
       //console.log(tempWagon.passengers[i]);
       //console.log(tempWagon.passengers[i].amount);
       //console.log(food);
     }
            return food;
   }

//create travelers
//create wagon

       //let hero = new Hero("Batman", 100);
  //array of riders

  //code should run after coding is done
  // Create a wagon called 'wagon'
  let wagon = makeWagon(5);
  //console.log("Wagon capacity is: " + wagon.capacity);//confirm wagon was created

  // Create a traveler with the name 'Henrietta' called 'traveler'
  let traveler = makeTraveler('Henrietta');
  //console.log(traveler.name + " has been created with a food amount of " + traveler.amount + " and health is " + traveler.isHealthy);

  // // Create a traveler with the name 'Juan' called 'traveler2'
  let traveler2 = makeTraveler('Juan');
  //console.log(traveler2.name + " has been created with a food amount of " + traveler2.amount + " and health is " + traveler2.isHealthy);
  //
  hunt(traveler); // maybe get more food
  eat(traveler2);
  eat(traveler2); // juan is hungry
  join(wagon, traveler);
  //console.log(wagon.passengers);//passenger list
  join(wagon, traveler2);
  //console.log(wagon.passengers);//passenger list
  //
  console.log(quarantine(wagon)); // print true if someone is sick, false otherwise
  console.log(food(wagon)); // print juan's food + henrietta's food



   })();
