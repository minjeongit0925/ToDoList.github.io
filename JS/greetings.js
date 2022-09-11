const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username"; // 문자열을 반복 사용하면 const로 지정해주어라.

function onLoginSubmit(tomato) {
  tomato.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);

  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  
  paintGreetings(username);
}

function paintGreetings(username) { // 반복되는 것이 있으면 함수로 만들어준다.
  greeting.innerText = `${username}'s TODO List` // "Hello " + username;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
  // show the form
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  // show the greetings
  paintGreetings(savedUsername);
}

/* 
  [ onLoginSubmit 함수의 작동 순서 ]
  STEP 1. event가 원래 하는 행동을 멈춰준다.
  STEP 2. form을 다시 숨겨준다.
  STEP 3. loginInput.value를 username이라는 변수로 저장해준다. 
  STEP 4. username 값을 username이라는 key와 함께 local storage에 저장한다.
  STEP 5. painGreetings 함수를 호출한다.
*/