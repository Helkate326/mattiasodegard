var data = [
  {
    name: "Micheal Lyons",
    comment:
      "They BLEW the ROOF off at their last show, once everyone started ﬁguring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed.",
    date: "12/18/2018",
    img: "./assets/icons/PNG/man.png"
  },
  {
    name: "Gary Wong",
    comment:
      "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!",
    date: "12/12/2018",
    img: "./assets/icons/PNG/man-2.png"
  },
  {
    name: "Theodore Duncan",
    comment:
      "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s deﬁnitely my favorite ever!",
    date: "11/15/2018",
    img: "./assets/icons/PNG/woman.png"
  }
];

function displayComments(comments) {
  const display = document.querySelector("#comments-display");
  comments.forEach(comment => {
    let div = document.createElement("div");
    display.appendChild(div);
    div.classList.add("comments-contain");
    
    let img = document.createElement("img");
    img.setAttribute('src', comment.img);
    div.appendChild(img);
    img.classList.add("comments-img"); 
    
    flex = document.createElement("div");
    div.appendChild(flex);
    flex.classList.add("comments-contain-flex");

    let name = document.createElement("h2");
    name.innerText = comment.name;
    flex.appendChild(name);
    name.classList.add("comments-name");

    let date = document.createElement("h2");
    date.innerText = comment.date;
    flex.appendChild(date);
    date.classList.add("comments-date");

    let message = document.createElement("p");
    message.innerText = comment.comment;
    flex.appendChild(message);
    message.classList.add("comments-message");
  });
}

const form = document.querySelector("#form-section");
form.addEventListener("submit", submitEvent => {
  submitEvent.preventDefault();

  document.querySelector("#comments-display").innerHTML = "";
  let tempObj = {};
  let name = submitEvent.target.firstName.value;
  let comment = submitEvent.target.comment.value;
  tempObj.name = name;
  tempObj.comment = comment;
  data.unshift(tempObj);
  displayComments(data);
});

displayComments(data);
