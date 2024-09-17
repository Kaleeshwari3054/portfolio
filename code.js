// let mark=44;
// if(mark>=60){
//     console.log("pass")
// }
// else if(mark>=45){
//     console.log("pass2")   
// }
// else{
//     console.log("fail")
// }


// if (age >= 5 && age <= 12)


// let mark= 64;
// let grade ;
// if(mark>=60){
//     console.log("pass")
//     grade="A";
// }
// else if(mark>=45){
//     console.log("pass2")  
//     grade= "B";
// }
// else{
//     console.log("fail")
//     grade= "no grade";
// }
// console.log("Grade:" , grade)
// let day = 3;
// switch (day) {
//     case 1:
//         console.log("Today is Monday");
//         break;
//     case 2:
//         console.log("Today is Tuesday");
//         break;
//     case 3:
//         console.log("Today is Wednesday");
//         break;
//     case 4:
//         console.log("Today is Thursday");
//         break;
//     case 5:
//         console.log("Today is Friday");
//         break;
//     case 6:
//         console.log("Today is Saturday");
//         break;
//     case 7:
//         console.log("Today is Sunday");
//         break;
//     default:
//         console.log("Invalid day");
//         break;
// }
// let status=on;

// case on:
//     console.log("power on");
//     break;


// let n="i" ;
// if(n=="a"|| n=="e" || n=="i" || n=="o" || n=="u"){
//     console.log("it is a vowel letter")
// }
// else {
//   console.log("it is not vowel word")
// }
// let age=20;
// let price=20;
// if(age>5){
//     console.log("Free")

// }
// else if(age > 5 && age <= 12){
//     console.log("10")
// }
// else if(age>13 && age <= 64){
//     console.log("20")
// }
// else{
//     console.log("15")
// }

// let a=26;
// let b=30;
// if(a<b){
//     console.log("smallest number")
// }
// else{
//     console.log("greatest number")
// }

// function sumNumbers(n) {
//     let sum = 0;
//     let i = 1;

//     while (i <= 5) {
//         sum += i;
//         i++;
//     }
//     return sum
//    }
//      console.log(sum); 


// function Factorial(n) {
//     let factorial = 1;
//     let i = 10;

//     while (i > 0) {
//         factorial *= i;
//         i--;
//     }

//     return factorial;
// }

// console.log(Factorial(10)); 














// function printEvenNumbers(n) {
//     let i = 1;

//     while (i <= n) {
//         if (i % 2 === 0) {
//             console.log(i);
//         }
//         i++;
//     }
// }

// // Example usage:
// printEvenNumbers(10); // Output: 2, 4, 6, 8, 10



// function sumNumbers(n) {
//   let sum = 0;
//   let i = 0;
//   while (i < n) {
//     sum += i;
//     i++;
//   }
//   return sum;
// }
// function sumNumbers(n) {
//     let sum = 0;
//     let i = 1;
//     while (i <= n) {
//       sum += i;
//       i++;
//     }
//     return sum;
//   }
  
//   // Example usage:
//   console.log(sumNumbers(5)); // Output: 15 (1+2+3+4+5)
// sum=1;
// for(x=5; x>=1; x--){
   
//   console.log(x);
  
// }


//  function printEvenNumbers(n) {
//     let i = 1;

//     while (i <= n) {
//         if (i % 2 === 0) {
//             console.log(i);
//         }
//         i++;
//     }
// }


// function printEvenNumbers(n){

// let i=1;
// while(i<=100){
//     if (i % 2 === 0){
//     console.log(i);
//     }
//     i++;
// }
// return 
// }
// console.log()




    // let i=1;
    // while(i<=100){
    //     console.log(i)
    //     if (i % 2 === 0){
    //        console.log("even")
    //     }
    //     else{
    //         console.log("odd")
    //     }
    //     i++;
    // } 
    // function printOdd(){
    //     while(i % 2 === 0){
    //       console.log("odd")
    //     }
    //    }

    // function printEven(){
    //     while(i % 2!= 0){
    //       console.log("even")
    //         }
    //     }

   
    // let firstName = "Muthu";
    // let lastName = "kali";
//     // let fullName = firstName + " " + lastName;
//     // console.log(fullName)


// divisibleThree(1,100);
// // divisibleFour(1,100)
// // function divisibleFour(table,end){
// function divisibleThree(initial,final)
// {
//   while(initial<=final ){
//     if(initial %3==0 ){
//         console.log("true",initial)

//     }
//   }

//   initial++;
//   }

// divisiblethree(1,100);
  
// function divisiblethree(initial,final){
//   while(initial<=final){
//     if(initial %3==0){
//         console.log("true",initial)

//     }

//   initial++;
//   }
// }


// divisibleFour(1,100);
// divisibleThree(1,100);
  
// function divisibleThree(start,end){
//     function divisibleFour(initial,final){
//   while(initial<=final && start<=end){
//     for(initial %4==0 && start %3==0){
//         console.log("true",initial)
//         console.log("false",start)

//     }
// }

//   initial++;
//   }
// }









// let a=10;
// if(a%2==0){
//     console.log("even",a)

// }
// else{
//     console.log("odd")
// }



// function divisibleInRange(start, end) {
    
//     let initial = start;
//     while (initial <= end) {
//         if (initial % 4 === 0) {
//             console.log("Divisible by 4:", initial);
//         }
//         initial++;
//     }

   
//     for (let num = start; num <= end; num++) {
//         if (num % 3 === 0) {
//             console.log("Divisible by 3:", num);
//         }
//     }
// }

// // Call the function with the range 1 to 100
// divisibleInRange(1, 100);



// let i=5;
// while(i<=10){
//     console.log(i)
//     i++;
// }


// let i = 5;
// let result = "";  

// while (i <= 10) {
//     result= result + "* ";  
    
//     i--;
//     console.log(result);
   
   
// }

// function numberOdd(n){
 
//        if(n %2==0){

//        return "even"
//        }
//      else{
//         return"odd"
//      }

//     }
//     console.log(numberOdd(10))

// let m=50;
// for(i=10;i<=m;i--){
//   if(i% 2==0){
// console.log(i)
// }
// }

// rocket(10,1)
// function rocket(m,n){
//   if(m<=n){
//   console.log("get")
//   }
//   else if(n<=m){
//     console.log("ready")
//   }
//   else{
//     console.log("go")
//   }
// }
// let i=10;
// rocketLaunch(i)
// function rocketLaunch(i){

//   while(i>=1){
//    if(i==3){
//     console.log("get")
//    }
//    else if(i==2){
//     console.log("set");
    
//    }
//    else if(i==1){
//     console.log("Rocket Launch")
//    }
//    else{
//     console.log(i);
    
//    }
//    i--;
//   }
// }




// let  number=50;
// function classifyNumber(number) {
//   if (number % 3 === 0 && number % 5 === 0) {
//     return "Divisible by both 3 and 5";
//   } else if (number % 3 === 0) {
//     return "Divisible by 3";
//   } else if (number % 5 === 0) {
//     return "Divisible by 5";
//   } else {
//     return "Not divisible by 3 or 5";
//   }
  
// }
// console.log(classifyNumber(number))




// function getDayName(dayNumber) {
//   const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
//   return dayNumber >= 1 && dayNumber <= 7 ? days[dayNumber - 1] : "Invalid day number";
// }



// function printMultiplicationTable(n, r,m) {
//   for ( i = r; i >= 1; i--) {
//     console.log(${n} ,"*", ${i} ,"=", ${n*i});
//   }
// }

// printMultiplicationTable(5,6,50)



// classifyNumber(15) should return "Divisible by both 3 and 5".

// getDayName(3) should return "Tuesday".

// printMultiplicationTable(5, 6) 


// function printMultiplicationTable(n, r) {
//   for ( i = r; i >= 1; i--) {
//     // console.log(('${n} x ${i} = ${n * i}'));
//     console.log('${n')
//   }
// }

// printMultiplicationTable(5,6)


// function printMultiplicationTable(n, r) {
//     for ( i = r; i >= 10; i--) {
//         console.log(`${n} x ${i} = ${n * i}`);
//     }
// }



// for(i=31; i>=1; i--){
// if(i%3==0){
//   console.log("divisible by 3")
// }
// else if(i%5==0){
//   console.log("divisible by 5")
// }
// else if(i%3==0 && i%3==0){
//   console.log("divisible by both 3 and 5")
// }
// else{
//   console.log("not divisible by 3 or 5");
  
// }}



// function getDayName(day) {

// switch (day) {
//     case 1:
//         console.log("Today is Monday");
//         break;
//     case 2:
//         console.log("Today is Tuesday");
//         break;
//     case 3:
//         console.log("Today is Wednesday");
//         break;
//     case 4:
//         console.log("Today is Thursday");
//         break;
//     case 5:
//         console.log("Today is Friday");
//         break;
//     case 6:
//         console.log("Today is Saturday");
//         break;
//     case 7:
//         console.log("Today is Sunday");
//         break;
//     default:
//         console.log("Invalid day");
//         break;
// }

// }
// getDayName(7)



// let cars=["Audi", "BMW", "Cooper"]
//  console.log("The cars values are:",cars[2])

// for(i=0; i<cars.length; i++){
//   console.log(cars[i])
// }



// let cars=["bmw","audi","cooper","gi20","Thar"]
// for(i=cars.length-1;i>0;i--){
//   console.log(cars[i])
// } 

// let fruits=["Apple" , "Banana" , "Mango" , "Cherry", "PG"];
// for(i=0;i<fruits; i++){
//   console.log(fruits(i)) }


// let fruits=["Apple" , "Banana" , "Mango" , "Cherry", "PG"];
// for(fruits.length%2==0 ) {
// console.log(fruits(i))
// }

// let i=5
// let fruits=["Apple" , "Banana" , "Mango" , "Cherry", "PG"]
// for(i % 2 == 0 ){
// console.log(fruits(i))
// }


let fruits = ["Apple", "Banana", "Mango", "Cherry", "PG"]; 






fruits[1]=fruits[4];
console.log(fruits)





















