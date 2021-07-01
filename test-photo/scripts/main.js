let myImage = document.querySelector('img');
myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/szxy.jpg') {
      myImage.setAttribute('src', 'images/hjj1.jpg');
    } else {
      myImage.setAttribute('src', 'images/szxy.jpg');
    }
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName() {
  let myName = prompt('请输入你的名字。');
  if(!myName || myName === null) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = '宿州学院 酷毙了，' + myName;
  }
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = '宿州学院 酷毙了，' + storedName;
}
myButton.onclick = function() {
   setUserName();
}