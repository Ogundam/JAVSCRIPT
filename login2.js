// function login(email, password, fname, lname){
//     if(email == "a@b.com" & password == "12345", fname == "Prince", lname == "Williams"){
//         alert("login successful");
    
//     }else{
//         alert("invalid data");
//     }
// }

// function submit(){
//     alert("You Submit a Form")
// }

// document.querySelector(".Secondbutton").onclick = function(){
//     alert("you submit a form")
// }

document.querySelector(".Secondbutton").onclick = function(){
    let fname = document.querySelector(".secondinput").value 
    let lname = document.querySelector(".firstinput").value 

    let namepattern = /^[a-z]{3,}$/gi   // to validate firstname
    let emailpattern = /^.{2,}\@[a-z]{2,}\.[a-z]{2,}$/gi     // to validate gmail
    let pwdpassword = /(?=.*[A-Z])(?=.*[/d])(?=.*[/W])/g        // to validate password

    if(fname === "" || lname === ""){
        alert("field cannot be empty")
    }else if(!namepattern.test(fname)){
        alert("Invalid name")
    }else if(!emailpattern.test(lname))
        alert("Invalid email")
        // else if(! passowrd.length > 7 && pwdpassword.test(passowrd) )
        // alert("")
    else{
        let user = {
            thefname: fname,
            thelname: lname
        }

        let data = JSON.stringify(user)

        localStorage.setItem("user", data)

        alert("signup successful")
    }



        // console.log({
        //     fname,
        //     lname,
        // });

    
}

