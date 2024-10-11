const list = document.querySelector("#list");

let texts = [];
let imgs = [];

for (var i = 0; i < list.children.length; i++) {
  texts.push(list.children[i].children[3]);
}
for (var i = 0; i < list.children.length; i++) {
  imgs.push(list.children[i].children[2]);
}

for (var i = 0; i < list.children.length; i++) {
  let text = list.children[i].children[3];
  let image = list.children[i].children[2];
  
  list.children[i].addEventListener("click", (e) => {
    let change = text.style.opacity !== "1";
    for (let txt of texts) {
      txt.style.height = "0px";
      txt.style.marginTop = "0px";
      txt.style.opacity = 0;
    }
    for (let img of imgs) img.classList.remove("rotate");
    if (change){
      image.classList.add("rotate");
      text.style.height = "auto";
      text.style.marginTop = "20px";
      text.style.opacity = 1;
    }
  })
}

const quest = document.querySelector("#questions");

let questions = [];

for (var i = 0; i < quest.children.length; i++) {
  if(quest.children[i].nodeName === "DIV") questions.push(quest.children[i]);
}

for (var i = 0; i < questions.length; i++) {
  let text = questions[i].children[1].children[1];
  let img = questions[i].children[2];


  questions[i].addEventListener("click", (e) => {
    let change = text.style.opacity !== "1";
    for (let qstn of questions) {
      qstn.children[1].children[1].style.opacity = 0;
      qstn.children[1].children[1].style.height = 0;
      qstn.children[1].children[1].style.marginTop = 0;
      qstn.children[1].children[1].style.marginBottom = 0;
      qstn.children[2].classList.remove("rotate");
    }
    if (change){
      img.classList.add("rotate");
      text.style.opacity = 1;
      text.style.height = "auto";
      text.style.marginTop = "10px";
      text.style.marginBottom = "10px";
    }
  })
}


const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");

btn1.addEventListener("click", () => {
  btn1.classList.add("select");
  btn2.classList.remove("select");
  btn3.classList.remove("select");
})
btn2.addEventListener("click", () => {
  btn1.classList.remove("select");
  btn2.classList.add("select");
  btn3.classList.remove("select");
})
btn3.addEventListener("click", () => {
  btn1.classList.remove("select");
  btn2.classList.remove("select");
  btn3.classList.add("select");
})


const btnAddMore = document.querySelector("#addMore");

btnAddMore.addEventListener("click", () => {
  for (let Case of document.querySelectorAll(".case")) {
    Case.classList.remove("hidden");
  }
  btnAddMore.style.display = "none";
})