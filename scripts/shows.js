var shows = [
  {
    date: "Mon Dec 17 2018",
    Venue: "Ronald Lane",
    Location: "San Francisco"
  },
  {
    date: "Tue Jul 18 2019",
    Venue: "Pier 3 East",
    Location: "San Francisco"
  },
  {
    date: "Fri Jul 22 2019",
    Venue: "View Loungeu",
    Location: "San Francisco"
  },
  {
    date: "Sat Aug 12 2019",
    Venue: "Hyatt Agency",
    Location: "San Francisco"
  },
  {
    date: "Fri Sep 05 2019",
    Venue: "Moscow Center",
    Location: "San Francisco"
  },
  {
    date: "Wed Aug 11 2019",
    Venue: "Press Club",
    Location: "San Francisco"
  }
];

// function declaration
function createMobileTable(table, shows) {
  for (var show of shows) {
    for (key in show) {
      let keyRow = table.insertRow();
      let keyCell = keyRow.insertCell();
      let keyText = document.createTextNode(key);
      keyCell.appendChild(keyText);
      keyCell.classList.add("shows-class");

      // new row
      let row = table.insertRow();
      let cell = row.insertCell();
      let text = document.createTextNode(show[key]);
      let textH4 = document.createElement("h4");
      textH4.appendChild(text);
      console.log(text);
      if (textH4.innerText === show.date) {
        textH4.classList.add("bold", "normal");
      } else {
        textH4.classList.add("normal");
      }
      cell.appendChild(textH4);
      //if the text in the cell equals to one of the dates apply a specific class to those cells
      //if not give the cells a normal class
    }

    var buttonRow = table.insertRow();
    let buttonCell = buttonRow.insertCell();
    let buttonNode = document.createElement("button");
    buttonNode.innerText = "Buy Tickets";
    buttonRow.classList.add("shows__container");
    buttonCell.classList.add("shows-btn-container");
    buttonNode.classList.add("shows-btn");
    buttonCell.appendChild(buttonNode);
  }
}

const desktopTable = document.getElementById("desktop-table");
const mobileTable = document.getElementById("mobile-table");

let showKeys = Object.keys(shows[0]);

// function invocation
createMobileTable(mobileTable, shows);
createTableHead(desktopTable, showKeys);
createDesktopTable(desktopTable, shows);
//createTable(desktopTable, shows); // actually pass the students array
//createTableHead(desktopTable, showKeys);

// function declaration
function createDesktopTable(table, shows) {
  for (var show of shows) {
    let keyRow = table.insertRow();
    for (key in show) {
      let keyCell = keyRow.insertCell();
      let keyText = document.createTextNode(show[key]);
      keyCell.appendChild(keyText);
      keyCell.classList.add("shows-class");
    }

    let buttonCell = keyRow.insertCell();
    let buttonNode = document.createElement("button");
    buttonNode.innerText = "Buy Tickets";
    buttonCell.classList.add("shows-btn-container");
    buttonNode.classList.add("shows-btn");
    buttonCell.appendChild(buttonNode);
  }
}

function createTableHead(table, shows) {
  var tHead = table.createTHead();
  var row = tHead.insertRow();
  for (var show of shows) {
    var th = document.createElement("th");
    var text = document.createTextNode(show);
    th.appendChild(text);
    row.appendChild(th);
  }
}
var table = document.querySelector("desktop-table");
console.log(table);

let mobileScreen = window.matchMedia("(max-width:767px)");
function changeTable(screen) {
  if (screen.matches) {
    desktopTable.style.display = "none";
    mobileTable.style.display = "table";
  } else {
    desktopTable.style.display = "table";
    mobileTable.style.display = "none";
  }
}
