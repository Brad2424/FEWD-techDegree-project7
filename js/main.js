// -----------------------------------------------------//
// ----- Event listner for ALERT SECTION sectionk ----- //
// -----------------------------------------------------//

const alertButton = document.querySelector('.alert-div button');
const sendButton = document.getElementById('send');

alertButton.addEventListener('click', () => {
    const alertDiv = document.querySelector('.alert-div');
    alertDiv.remove();
});

// ---------------------------------------------------//
// ----- Event listner for MESSAGE USER section ----- //
// ---------------------------------------------------//

const sentStatus = document.createElement("p");
const parentDiv = document.querySelector('.messageUser');
const message = document.querySelector('#message');
const user = document.querySelector('#user');

sendButton.addEventListener('click', (e) => {
    // timeout functions for notice of a successully sent message
    let timeOut;
    function startTimeOut() {
        timeOut = window.setTimeout(() => {
            sentStatus.remove();
            sentStatus.textContent = "";
        }, 1000);
    };
    function stopTimeOut() {
        window.clearTimeout(timeOut);
    };
    // NOT the users first attempt 
    if (sentStatus.textContent === "Message Successfully Sent"  && message.value === "" || sentStatus.textContent === "Message Successfully Sent"  && user.value === "") {
        sentStatus.textContent = "Error: No Message/User Entered";
        sentStatus.style.color = "red";
        stopTimeOut();
    } else if (sentStatus.textContent === "Error: No Message/User Entered" && message.value && user.value) {
        sentStatus.textContent = "Message Successfully Sent";
        sentStatus.style.color = "green";
        startTimeOut();
        message.value = "";
        user.value = "";
    // users first attempt 
    } else if(sentStatus.textContent === "" && message.value === "" || sentStatus.textContent === "" && user.value === "") {
        parentDiv.insertBefore(sentStatus, e.target);
        sentStatus.textContent = "Error: No Message/User Entered";
        sentStatus.style.color = "red";
    } else if(sentStatus.textContent === "" && message.value && user.value) {
        parentDiv.insertBefore(sentStatus, e.target);
        sentStatus.textContent = "Message Successfully Sent";
        startTimeOut();
        message.value = "";
        user.value = "";
    };
});

// -----------------------------------------------//
// ----- Event listner for SETTINGS section ----- //
// -----------------------------------------------//

document.querySelectorAll(".switch").forEach(function(theSwitch) {
    theSwitch.addEventListener("click", moveSwitchCircle, false);
  });

function moveSwitchCircle(e) {

    // if the e.target is the button itself
    if (e.target.classList.contains('switch')) {
        const switchCircle = e.target.querySelector('#switchCircle')
        if (e.target.getAttribute("aria-checked") == "true") {
            switchCircle.style.left = "-21px";
            e.target.setAttribute("aria-checked", "false");
            e.target.style.background = 'rgb(255, 75, 75)';
            e.target.style.border = 'rgb(255, 75, 75) 1px solid';
        } else {
            switchCircle.style.left = "29px";
            e.target.setAttribute("aria-checked", "true");
            e.target.style.background = 'rgb(116, 119, 191)';
            e.target.style.border = 'rgb(116, 119, 191) 1px solid';
        } 
    // if the e.target is ON and OFF spans
    } else if(e.target.innerHTML === "ON" || e.target.innerHTML == "OFF") {
        const switchCircle = e.target.parentNode.querySelector('#switchCircle');
        if (e.target.parentNode.getAttribute("aria-checked") === "true") {
            switchCircle.style.left = "-21px";
            e.target.parentNode.setAttribute("aria-checked", "false");
            switchCircle.parentNode.style.background = 'rgb(255, 75, 75)';
            switchCircle.parentNode.style.border = 'rgb(255, 75, 75) 1px solid';
        } else {
            switchCircle.style.left = "29px";
            e.target.parentNode.setAttribute("aria-checked", "true");
            switchCircle.parentNode.style.background = 'rgb(116, 119, 191)';
            switchCircle.parentNode.style.border = 'rgb(116, 119, 191) 1px solid';
        }
    // if the e.target is the switch circle
    } else {
        const switchCircle = e.target;
        if (e.target.parentNode.getAttribute("aria-checked") === "true") {
            switchCircle.style.left = "-21px";
            e.target.parentNode.setAttribute("aria-checked", "false");
            switchCircle.parentNode.style.background = 'rgb(255, 75, 75)';
            switchCircle.parentNode.style.border = 'rgb(255, 75, 75) 1px solid';
        } else {
            switchCircle.style.left = "29px";
            e.target.parentNode.setAttribute("aria-checked", "true");
            switchCircle.parentNode.style.background = 'rgb(116, 119, 191)';
            switchCircle.parentNode.style.border = 'rgb(116, 119, 191) 1px solid';
        }
    }
};

// -----------------------------------------------//
// ----- Notifications Dropdown Menu --------------
// -----------------------------------------------//

const dropDownNotifications = document.querySelector('.notificationDropDown');
const notificationBadge = document.querySelector('.notification-badge');

// Callback function to display dropdown menu
function dropDown() {
    document.getElementById("myDropdown").classList.toggle("show");
    notificationBadge.remove();
}

// When the user clicks the notifictaion SVG
dropDownNotifications.addEventListener('click', dropDown);

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (event.target.tagName !== "A" && event.target.parentNode.tagName !== "A") {

    const dropdowns = document.getElementsByClassName("dropdown-content");
    for (let i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}