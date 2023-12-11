// Your javascript goes here

const listItems = document.querySelectorAll("li");
const dropContent = document.querySelectorAll(".dropdown-content");
const content1 = document.querySelector(".dc-1");
const content2 = document.querySelector(".dc-2");
const content3 = document.querySelector(".dc-3");
const content4 = document.querySelector(".dc-4");
const content5 = document.querySelector(".dc-5");
const svgIcon = document.getElementById("icon");
let counter = 0;

function toggleRadioIcon(event) {
  const currentIcon = event.currentTarget;
  const currentUse = currentIcon.querySelector("use");
  const currentHref = currentUse.getAttribute("xlink:href");
  const loadingIcon = document.getElementById("loading");

  const icon1 = "#radio-icon";
  const icon2 = "#checked";
  toggleButton();

  // const button = document.getElementById(`button${buttonNumber}`);

  // Check if the button is currently in checked state
  const isChecked = currentUse.getAttribute("data-checked") === "true";

  // Toggle the checked state
  currentUse.setAttribute("data-checked", !isChecked);

  // Update the counter based on the toggle action
  counter += isChecked ? -1 : 1;

  document.querySelector(".value-completed").innerHTML = counter + "/5";
  console.log(counter);
  if (counter == 0) {
    document.querySelector(".loader").style.width = "0";
  } else if (counter == 1) {
    document.querySelector(".loader").style.width = "14.4";
  } else if (counter == 2) {
    document.querySelector(".loader").style.width = "28.8";
  } else if (counter == 3) {
    document.querySelector(".loader").style.width = "43.2";
  } else if (counter == 4) {
    document.querySelector(".loader").style.width = "57.6";
  } else if (counter == 5) {
    document.querySelector(".loader").style.width = "72";
  }

  const newHref = currentHref === icon1 ? icon2 : icon1;
  currentUse.setAttribute("xlink:href", "#loading");
  currentIcon.classList.add("rotate");
  setTimeout(() => {
    currentIcon.classList.remove("rotate");
  }, 1000);

  // toggleButton();

  setTimeout(() => {
    currentUse.setAttribute("xlink:href", newHref);
  }, 1000);
}

const svgIcons = document.querySelectorAll("#icon");
svgIcons.forEach((icon) => {
  icon.addEventListener("click", toggleRadioIcon);
});

for (const listItem of listItems) {
  listItem.addEventListener("click", function (e) {
    for (const i of listItems) {
      i.classList.remove("dropdown-background");
      dropContent.forEach(function (el) {
        el.style.display = "none";
      });
    }

    listItem.classList.add("dropdown-background");
    if (listItem == listItems[0]) {
      content1.style.display = "flex";
    } else if (listItem == listItems[1]) {
      content2.style.display = "flex";
    } else if (listItem == listItems[2]) {
      content3.style.display = "flex";
    } else if (listItem == listItems[3]) {
      content4.style.display = "flex";
    } else if (listItem == listItems[4]) {
      content5.style.display = "flex";
    }
  });
}

function toggleCard() {
  var card = document.querySelector(".dashboard-card-open");
  card.classList.toggle("collapsed");
}

document
  .getElementById("toggle-card-btn")
  .addEventListener("click", function () {
    toggleCard();
  });

const radioCount = document.querySelectorAll(".use");
const radio = document.querySelector("#checked").getAttribute("id");
const loading = document.querySelector("#loading").getAttribute("id");
var hrefs = [];
let progress = 0;
function toggleButton() {
  // for (icon of radioCount) {
  //   const href = icon.getAttribute("id");
  //   const hrefValue = icon.href.baseVal;
  //   hrefs.push(hrefValue);
  //   if (href === "#" + radio) {
  //     progress++;
  //   }
  // }
  // console.log(hrefs);
  // for (i of hrefs) {
  //   if (i === "#" + radio) {
  //     progress++;
  //   }
  //   console.log(progress);
  //   // console.log(hrefs);
  //   // Check if the button is currently in checked state
  //   // const isChecked = button.getAttribute('data-checked') === 'true';
  //   // // Toggle the checked state
  //   // button.setAttribute('data-checked', !isChecked);
  //   // // Update the counter based on the toggle action
  //   // counter += isChecked ? -1 : 1;
  //   // // Update the counter display
  //   // document.getElementById('counter').innerText = `Counter: ${counter}`;
  // }
}
