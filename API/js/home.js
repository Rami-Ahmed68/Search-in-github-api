




// fetch("https://api.github.com/users/elzerowebschool/repos").then((result) => {
//     console.log(result);
//     let mydata = result.json();
//     console.log(mydata);
//     return mydata
// }).then((ee) => {
//     ee.length = 10
//     return ee
// }).then((qq) => {
//     for(let i = 0; i < qq.length; i++) {
//         console.log(qq[i])
//     }
// })

let input = document.querySelector("input");
let body = document.querySelector("body")

let con = document.querySelector(".cont  button")

let select1 = document.querySelector("#one");
let select2 = document.querySelector("#tow");
let amount = document.querySelector(".cont  input");
let valuecont = document.querySelector(".cont  .value")

let y = [];

let z = {
    name : "",
    num : ""
}

fetch("https://api.currencyfreaks.com/v2.0/rates/latest?apikey=89fcc85da580465ca7ec7ff03f96e4bb").then((result) => {
    console.log(result);
    let data = result.json();
    return data;
}).then((rr) => {
    let t = rr.rates;
    return t
}).then((ff) => {
    for(let val in ff) {
        z.name = val;
        z.num = ff[val]
        y.unshift(JSON.stringify(z))
    };
    
    y.forEach(function (ele) {
        let par = JSON.parse(ele);
        let option = document.createElement("option");
        option.append(par.name);
        option.setAttribute("value" , par.num)
        select1.append(option)
    })
    y.forEach(function (ele) {
        let par = JSON.parse(ele);
        let option = document.createElement("option");
        option.append(par.name);
        option.setAttribute("value" , par.num)
        select2.append(option)
    })
})



    amount.addEventListener("input" , (e) => {
        let value = e.target.value;
        if (!isNaN(value)) {
            let po = value / select1.value * select2.value;
            valuecont.innerHTML = po;
            valuecont.style.backgroundColor = "green"
            body.style.backgroundColor = ""
        } else {
            body.style.backgroundColor = "red"
        }
    })

