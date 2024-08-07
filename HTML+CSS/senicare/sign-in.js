var userIdElement = document.getElementById('user-id');
var userPasswordElement = document.getElementById('user-password');
var messageElement = document.getElementById('message');
var signInButton = document.getElementById('sign-in-button');

function onSignInButtonClickHandler(event) { //ID, PW 확인
  var userId = userIdElement.value;
  var userPassword = userPasswordElement.value;

  if (userId !== 'qwer1234' || userPassword !== '1234') { // 로그인정보가 일치하지 않을 때
    messageElement.textContent = '로그인정보가 일치하지 않습니다.';
    return;
  } // 로그인 정보가 일치할 때
  alert('로그인 성공');
  messageElement.textContent = '';
}

function userIdKeyPressHandler(event) { // 아이디 창에서 엔터를 눌렀을때 패스워드로 커서 옮김
  if (event.key === 'Enter')
    userPasswordElement.focus()
}


function userPasswordKeyPressHandler(event) { // 비밀번호를 다 치고 엔터를 눌렸을 때 로그인 리스너 호출
  if (event.key === 'Enter')
    onSignInButtonClickHandler();
}


signInButton.addEventListener('click', onSignInButtonClickHandler); //로그인 리스너 등록
userIdElement.addEventListener('keypress', userIdKeyPressHandler);
userPasswordElement.addEventListener('keypress', userPasswordKeyPressHandler);
