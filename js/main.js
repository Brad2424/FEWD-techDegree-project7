// -----------------------------------------------------//
// AJAX request for random users ------------------------
// -----------------------------------------------------//

function addMembers() {
    $.ajax({
    url: 'https://randomuser.me/api/?results=4&nat=nz&inc=name,email,registered,picture',
    dataType: 'json',
    success: function(data) {
        members = data.results
        addUsersToPage();
        addAutoComplete();
        }
    });
}

addMembers();

//Helpers --------------------------------------

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

const possibleActivities = ["liked", "shared", "commented on"]
const possiblePosts = ["Your Apps SEO Tips", "Future of Asynchronous Programming", "Why Is Coding Addictive", "Bradley Murchison Aquires Facebook"];

const memberDivs = document.getElementsByClassName('member');
const activityDivs = document.getElementsByClassName('recentActivity');

function addUsersToPage() {

    for (let i = 0; i < memberDivs.length; i++) {
        const member = memberDivs[i];
        
        member.innerHTML = `
                            <img class="picture" src ="${members[i].picture.thumbnail}" alt="User profile picture">
                            <p class="user"><span class="userName">${members[i].name.first} ${members[i].name.last}</span><br>
                                <span class="email">${members[i].email}</span>
                            </p>
                            <p class="dateRegistered">${members[i].registered.date.substring(0,10)}</p>
                            `
    }

    for (let i = 0; i < activityDivs.length; i++) {
        const activity = activityDivs[i];
    
        activity.innerHTML = `
                            <img src="${members[i].picture.thumbnail}" alt="User profile picture">
                            <p>
                                <span class="userName">${members[i].name.first} ${members[i].name.last}</span>
                                <span class="activity">${possibleActivities[getRandomInt(0, 3)]} ${possiblePosts[getRandomInt(0, 3)]}</span><br>
                                <span class="activityTime">${getRandomInt(1, 29)} days ago</span>
                            </p>
                            <a href="">v</a>
                            `
    }
}

// -----------------------------------------------------//
// Grid Areas searchbox function -------------------------
// -----------------------------------------------------//
const input = document.getElementById("gridSearchInput");
const gridContainer = document.querySelector('.container__main');
const gridAreas = document.querySelectorAll('.container__main>div');

function searchBox() {
    const filter = input.value.toUpperCase();
    for (let i = 0; i < gridAreas.length; i++) {
        if (gridAreas[i].firstElementChild.innerText.toUpperCase().indexOf(filter) > -1) {
            gridAreas[i].style.display = "";
        } else {
            gridAreas[i].style.display = "none";
        }
    }
}

input.addEventListener('keyup', searchBox);


// -----------------------------------------------------//
// Event listner for ALERT SECTION sectionk -------------
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
const user = document.querySelector('#userSearch');

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

// -----------------------------------------------------//
// Auto-complete for MESSAGE USER section ---------------
// -----------------------------------------------------//\

function addAutoComplete() {
    let userNames = document.querySelectorAll('.userName');
    let names = [];
    for (let i = 0; i < userNames.length; i++) {
        const name = userNames[i].innerText;
        if (names.indexOf(name) < 0) {
            names.push(name);
        }
    }

    function autocomplete(inp, arr) {
        /*the autocomplete function takes two arguments,
        the text field element and an array of possible autocompleted values:*/
        let currentFocus;
        /*execute a function when someone writes in the text field:*/
        inp.addEventListener("keyup", function(e) {
            var a, b, i, val = this.value;
            /*close any already open lists of autocompleted values*/
            closeAllLists();
            if (!val) { return false;}
            currentFocus = -1;
            /*create a DIV element that will contain the items (values):*/
            a = document.createElement("DIV");
            a.setAttribute("id", this.id + "autocomplete-list");
            a.setAttribute("class", "autocomplete-items");
            /*append the DIV element as a child of the autocomplete container:*/
            this.parentNode.appendChild(a);
            /*for each item in the array...*/
            for (i = 0; i < arr.length; i++) {
              /*check if the item starts with the same letters as the text field value:*/
              if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
                /*create a DIV element for each matching element:*/
                b = document.createElement("DIV");
                /*make the matching letters bold:*/
                b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
                b.innerHTML += arr[i].substr(val.length);
                /*insert a input field that will hold the current array item's value:*/
                b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
                /*execute a function when someone clicks on the item value (DIV element):*/
                    b.addEventListener("click", function(e) {
                    /*insert the value for the autocomplete text field:*/
                    inp.value = this.getElementsByTagName("input")[0].value;
                    /*close the list of autocompleted values,
                    (or any other open lists of autocompleted values:*/
                    closeAllLists();
                });
                a.appendChild(b);
              }
            }
        });
        /*execute a function presses a key on the keyboard:*/
        inp.addEventListener("keydown", function(e) {
            var x = document.getElementById(this.id + "autocomplete-list");
            if (x) x = x.getElementsByTagName("div");
            if (e.keyCode == 40) {
              /*If the arrow DOWN key is pressed,
              increase the currentFocus variable:*/
              currentFocus++;
              /*and and make the current item more visible:*/
              addActive(x);
            } else if (e.keyCode == 38) { //up
              /*If the arrow UP key is pressed,
              decrease the currentFocus variable:*/
              currentFocus--;
              /*and and make the current item more visible:*/
              addActive(x);
            } else if (e.keyCode == 13) {
              /*If the ENTER key is pressed, prevent the form from being submitted,*/
              e.preventDefault();
              if (currentFocus > -1) {
                /*and simulate a click on the "active" item:*/
                if (x) x[currentFocus].click();
              }
            }
        });
        function addActive(x) {
          /*a function to classify an item as "active":*/
          if (!x) return false;
          /*start by removing the "active" class on all items:*/
          removeActive(x);
          if (currentFocus >= x.length) currentFocus = 0;
          if (currentFocus < 0) currentFocus = (x.length - 1);
          /*add class "autocomplete-active":*/
          x[currentFocus].classList.add("autocomplete-active");
        }
        function removeActive(x) {
          /*a function to remove the "active" class from all autocomplete items:*/
          for (var i = 0; i < x.length; i++) {
            x[i].classList.remove("autocomplete-active");
          }
        }
        function closeAllLists(elmnt) {
          /*close all autocomplete lists in the document,
          except the one passed as an argument:*/
          var x = document.getElementsByClassName("autocomplete-items");
          for (var i = 0; i < x.length; i++) {
            if (elmnt != x[i] && elmnt != inp) {
            x[i].parentNode.removeChild(x[i]);
          }
        }
      }
      /*execute a function when someone clicks in the document:*/
      document.addEventListener("click", function (e) {
          closeAllLists(e.target);
      });
      }

      autocomplete(document.getElementById("userSearch"), names);
}


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