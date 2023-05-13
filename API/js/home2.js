


let input = document.querySelector("input");
let btn = document.querySelector("button");

// all conatiners start 
let userimg = document.querySelector(".all-data-cont img"),
Namecont = document.querySelector(".name-joined-account .name"),
accountcont = document.querySelector(".name-joined-account .account a"),
joinedcont = document.querySelector(".name-joined-account .joined"),
reposecont = document.querySelector(".repose-followers-following .repose"),
followerscont = document.querySelector(".repose-followers-following .followers"),
followingcont = document.querySelector(".repose-followers-following .following"),
locationcont = document.querySelector(".LO-TW .location p"),
twittercont = document.querySelector(".LO-TW .twitter p a"),
linkcont = document.querySelector(".LO-TW .link p a"),
lorem = document.querySelector(".all-data-cont .container .lorem");
// all conatiners end

let body = document.querySelector("body");
let bodya = document.querySelectorAll("body div");


let mode = document.querySelector(".logo-light .mode i");

let repocont = document.querySelector(".repos-conatiner");


let img = document.querySelector("img")


// darck mode start 
mode.onclick = function () {
    body.classList.toggle("light")

    if (mode.classList != "fa-solid fa-sun") {
        mode.classList = "fa-solid fa-sun";
        bodya.forEach(function (ele) {
            ele.style.color = "#fff"
            input.style.color = "#fff"
        })
        tt.forEach(function (el) {
            el.style.color = "#fff"
        })
    } else {
        mode.classList = "fa-solid fa-moon";
        bodya.forEach(function (ele) {
            ele.style.color = "black"
        })
        tt.forEach(function (el) {
            el.style.color = "black"
        })
        input.style.color = "black"
    }
}
// darck mode end


function user() {
    fetch(`https://api.github.com/users/${input.value}`).then((result) => {
    let out = result.json();
    return out
}).then((jj) => {
    console.log(jj);
    lorem.innerHTML = `The type of this account is a ${jj.type} with the name ${jj.name} and if id ${jj.id}`
    Namecont.innerHTML = jj.name;
    if (Namecont.textContent == "") {
        Namecont.innerHTML = "null"
    }
    userimg.setAttribute("src" , jj.avatar_url)
    joinedcont.innerHTML = jj.created_at;
    accountcont.innerHTML = jj.blog;
    accountcont.setAttribute("href" , jj.blog)
    if (accountcont.textContent == "") {
        accountcont.innerHTML = "null"
    }
    followerscont.innerHTML = `Followers : ${jj.followers}`;
    followingcont.innerHTML = `Following : ${jj.following}`;
    locationcont.innerHTML = jj.location;
    if (locationcont.textContent == "") {
        locationcont.innerHTML = "null"
    }
    twittercont.innerHTML = jj.twitter_username;
    twittercont.setAttribute("href" , `https://www.twitter.com/${jj.twitter_username}`)
    if (twittercont.textContent == "") {
        twittercont.innerHTML = "null"
        twittercont.setAttribute("href" , ``)
    }
    linkcont.innerHTML = jj.company;
    linkcont.setAttribute("href" , jj.html_url)
    if (linkcont.textContent == "") {
        linkcont.innerHTML = "null"
        linkcont.setAttribute("href" , "")
    }
    console.log(jj.type)
    })
}

let allrepos = [];

function userrepos() {
    fetch(`https://api.github.com/users/${input.value}/repos`).then((result) => {
        let out = result.json();
        return out
    }).then((data) => {
        data.forEach(function (ele) {
            allrepos.unshift(ele);
            reposecont.innerHTML = `Repos : ${allrepos.length}`;
            console.log(allrepos.length)
        })
        creatrepo()
        allrepos = [];
    })
}

let tt = ""

function creatrepo() {

    repocont.innerHTML = ""

    allrepos.forEach(function (ele) {
        let div1 = document.createElement("div");
        let div2 = document.createElement("div");
        let div3 = document.createElement("div");
        let div4 = document.createElement("div");
        let div5 = document.createElement("div");
        let a = document.createElement("a");
        
        div1.classList.add("repo");
        div2.classList.add("name");
        div3.classList.add("date");
        div4.classList.add("stars");
        div5.classList.add("link");
        
        a.innerHTML = "link"
        a.setAttribute("target" , "_blanck")
        a.setAttribute("href" , ele.clone_url)

        div2.innerHTML = `Repo Name : ${ele.name}`;
        div3.innerHTML = `Updated At : ${ele.updated_at}`
        div4.innerHTML = `Stars : ${ele.stargazers_count}`;
        div5.appendChild(a)

        div1.append(div2)
        div1.append(div3)
        div1.append(div4)
        div1.append(div5)

        repocont.append(div1);
        tt = document.querySelectorAll(".repos-conatiner .repo div");
        console.log(tt)
    })
}





btn.onclick = function () {
    user();
    userrepos();
}



