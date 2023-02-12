let theToken = "";
const SignIn = document.getElementById("sign-in");
let SignUp = document.querySelector("#signup");

SignUp.addEventListener("click", (e) => {
  e.preventDefault();
  signUp();
});

SignIn.addEventListener("click", (e) => {
  e.preventDefault();
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  signin(email, password);
});

async function signin(email, password) {
  const response = await fetch("http://localhost:3000/auth/login", {
    method: "POST",
    body: JSON.stringify({
      email,
      password,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  if (data) {
    console.log(data.acces_token || data.message);
  }
  if (data.acces_token) {
    // console.log("from login",data.acces_token)
    window.open("../HOME.html", "_self");
    theToken = data.acces_token;
    sessionStorage.setItem("theToken", theToken);
  } else {
    let wrong = document.querySelector(".wrong-cred");
    wrong.style.display = "block";
    wrong.style.color = "red";
  }
}

//below is the signup methods

/* function signup(){
    
    let theSignUp = document.createElement("div")
    theSignUp.classList = "recievers"
    theSignUp.innerHTML = `
        <div class="recieve-block">
        <div class="image__cont">
          <img src="src/image/eagle.jpg" alt="logo picture here">
      </div>
            <form>
            <div class="form-container">
                <div class="flex-horizon">
                <label for="fname">First Name: </label>
                <input id="fname" type="text" />
                </div>
                <div class="flex-horizon">
                <label for="lname">Last Name: </label>
                <input id="lname" type="text" />
                </div>
                <div class="flex-horizon">
                <label for="email2">email: </label>
                <input id="email2" type="email" />
                </div>
                <div class="flex-horizon">
                <label for="password2" >password: </label>
                <input id="password2" type="password" />
                </div>
                <div class="flex-horizon">
                <label for="conf-password" class="conf-pass" >confirm password: </label>
                <input id="conf-password" type="password" />
                </div>
                </div>
            </form>
            <div class="doesn-match done">your passwords do not match</div>
            <div class="but-cont">
            <button class="only-create" onclick="onlyCreate()">Create user</button>
            <button class="create-login" onclick="createLogin()">Create and login</button>
            </div>
        </div>
    `
        document.body.append(theSignUp)
}
 */
/* function signUpPage(){
    let sign = document.querySelector(".sign-btn")  
    sign.addEventListener("click", (e)=>{
        e.preventDefault()
        let thetarget = document.querySelector(".recievers")
        thetarget.classList.remove("done")
        thetarget.style.display = "block"
        
    })
} */

/* function onlyCreate(){
    signinUp("")
} */
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/* function createLogin(){
    signinUp(true)
} */

async function signUp() {
  let firstName = document.getElementById("firstname").value;
  let lastName = document.getElementById("lastname").value;
  let email = document.getElementById("Email").value;
  let password = document.getElementById("Password").value;
  let confPassword = document.getElementById("confirm").value;
  let name = firstName + " " + lastName;

  if (password === confPassword) {
    const response = await fetch("http://localhost:3000/user", {
      method: "POST",
      body: JSON.stringify({
        name,
        email,
        password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    console.log(data.acces_token);
    if (data.acces_token) {
      let thetarget = document.querySelector(".signup");
      let or1 = document.getElementById("or1");
      let noMatch = document.querySelector(".nomatch");
      noMatch.innerText = "Succesfully Created you can login";
      theToken = "";
      sessionStorage.setItem("theToken", theToken);

      noMatch.style.display = "block";
      noMatch.style.color = "green";
      await sleep(1500);
      thetarget.style.display = "none";
      or1.style.display = "none";
    }
    if (data.message) {
      let noMatch = document.querySelector(".nomatch");
      noMatch.innerText = data.message;
      noMatch.style.color = "red";
    }
  }
  let noMatch = document.querySelector(".nomatch");
  noMatch.style.display = "block";
}

// export {theToken}
