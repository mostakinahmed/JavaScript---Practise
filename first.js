// const student ={
//     name:"sai",
//     age:20,
//     cgpa : 9.2,
//     ispassed:true,
// }
// student["name"]="Mostakin";
//  console.log(student.name);
 

//  let a=5;
//  let b=2;
//  let c=a+b;
//  let d = a-b;
//  let x = a**b;
//  console.log("A + B = ",c,"& A - B = ",d," & Reminder is ",a%b, "x = ",x);

//  let y=500;12

//  let z=66;
//  let max = (z<y)?z:y;
//  console.log(max);


//  let sol=prompt("Enter a Number: ");
//  let sol2 = (sol%5==0)?console.log("Yes"):console.log("No");
//  if(sol%5==0){
//     console.log("Yes");
//  }
//  else{
//     console.log("No");
//  }



// let i;
// for(i=1;i<=50;i++){
//     if(i%5==0)
//     console.log(i,"x","2 =",i*2);  
// }


// let a=15,i=1,b=10,temp=0;
// while(i<=a){
//     if(a%i==0){
//         console.log(i);
//     }
// i++
// }


// let obj = {
//     name:"sai",
//     age:25,
//     gender:"male"
// }
// let output = `My name is ${obj.name} and my age is ${obj.age} and my gender is ${obj.gender}`
// console.log(output);

// let str ="Mostakin Ahmed";
// let x= str.toUpperCase();
// let y= str.toLowerCase();
// console.log(x);
// console.log(y);

// let a="       Mostakin      Ahmed";
// let b= a.trim();
// console.log(b);


// let a=prompt("Enter your name: ");
// let x =a.toLowerCase();
// let b="@"+ x +a.length
// console.log(b);

// let name = ["mostakin","ahmed","sai","khan","mmmmm"]
// let k=name.length;
// for(i=0;i<k;i+=2){
//     console.log(name[i]);

// }

// let i;
// let x=[250,645,300,900,50];
// for(i=0;i<x.length;i++){
//     let offer = x[i]/10;
//     let c=x[i]-offer;
//     console.log(c);
// }


// let x=[250,645,300,900,50];
// x.splice(3,1,909090);
// console.log(x);

// let x = prompt("Enter a number: ");
// let i,j,y,flag=0; 
// if(x==0 || x==1){
//     flag=1;
// }
// for(i=2;i<x;i++){
//     if(x%i==0){
//         flag=1;
//         break;
//     }

// }

// if(flag==1){
//     console.log("Not a prime number");
// }
// else{
//     console.log("Prime number");
// }


let x = prompt("Enter a number: ");
let i,j,y,flag=0; 



for(i=2;i<=x;i++){

    for(j=0;j<i;j++){

        console.log(i);
        console.log(j);
        // if(i%j==0){
        //    console.log("Not a prime number");
        // }
        // else{
        //     console.log("Prime number");
        // }

    
    }
}


