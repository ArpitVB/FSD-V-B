// console.log("hello js");

// var a=12;

// if(a>10){
//     a=23;
//     console.log("a is "+a);
// }

// console.log("hi , a = "+a)

// function fun(a=0,b=0){
//     console.log("hee");
//     return a+b;
// };

// var ans = fun(5);

// console.log(ans)



// // function c_compiler(){
// //     return "C Compiler";
// // }

// // function java_compiler(){
// //     return "Java Compiler";
// // }

// // function selectlanguage(clbk){
// //     return "You have selected "+clbk();
// // }



// function selectlanguage(clbk){
//     let data;

//     if(clbk == 'c'){
//     function c_compiler(){
//         return "C Compiler";
//     }
//     data = c_compiler();
// }

// else if (clbk == 'java'){
//     function java_compiler(){
//         return "Java Compiler";
//     }
//     data = java_compiler();
// }
// return data;
// }



// console.log(selectlanguage('c'))

// div = document.getElementsByClassName('parent')[0];

// div.innerHTML = "<h2 style=color:red>ABES ENGINNEERING COLLEGE</h2>";

// a = document.createElement('h1')
// a.innerHTML = "this is generated"
// a.style.backgroundColor = 'yellow'
// console.log(a)

// div.appendChild(a)

// let b = document.createElement('img')

// b.src='mob.jpg'

// b.setAttribute("height","200")
// b.setAttribute("width","200")

// div.appendChild(b)



// function getdata(){
//     a = document.getElementById('disp');
//     a.innerHTML = "<h1>hello<h1>"
// }

// function clrdata(){
//     a=document.getElementById('disp');
//     a.innerHTML=""
// }

// let b =document.getElementById('btn');


// a.addEventListener("click",getdata());


let prom = new Promise((res,rej)=>{
    let a = 12;
    if(a>10){
        res("RESOLVED");
    }
    else{
        rej("rejected");
    }
})

prom.then((msg)=>{
    console.log(msg);
})
.catch((err)=>console.log(err));











