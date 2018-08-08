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

sendButton.addEventListener('click', (e) => {
    const sendConfirmation = document.createElement("p");
    sendConfirmation.setAttribute("id", "sentStatus");
    const sentStatus = document.querySelector('.messageUser #sentStatus');

    const parentDiv = document.querySelector('.messageUser');
    const message = document.querySelector('#message');
    const user = document.querySelector('#user');

    let timeOut;
    function startTimeOut() {
        timeOut = window.setTimeout(() => {sentStatus.remove()}, 3000);
    };
    function stopTimeOut() {
        window.clearTimeout(timeOut);
    };

    if (sentStatus !== null && sentStatus.textContent === "Message Successfully Sent"  && message.value === "" || sentStatus !== null && sentStatus.textContent === "Message Successfully Sent"  && user.value === "") {
        sentStatus.textContent = "Error: No Message/User Entered";
        sentStatus.style.color = "red";
        stopTimeOut();
    } else if (sentStatus !== null && sentStatus.textContent === "Error: No Message/User Entered" && message.value && user.value) {
        sentStatus.textContent = "Message Successfully Sent";
        sentStatus.style.color = "green";
        startTimeOut();
        message.value = "";
        user.value = "";

    } else if(sentStatus === null && message.value === "" || sentStatus === null && user.value === "") {
        parentDiv.insertBefore(sendConfirmation, e.target);
        sendConfirmation.textContent = "Error: No Message/User Entered";
        sendConfirmation.style.color = "red";
    } else if(sentStatus === null && message.value && user.value) {
        parentDiv.insertBefore(sendConfirmation, e.target);
        sendConfirmation.textContent = "Message Successfully Sent";
        startTimeOut();
        message.value = "";
        user.value = "";
    };
});

                    // -----------------------------------------------//
                    // ----- Event listner for SETTINGS section ----- //
                    // -----------------------------------------------//

document.querySelectorAll(".switch").forEach(function(theSwitch) {
    theSwitch.addEventListener("click", handleClickEvent, false);
  });
  
function handleClickEvent(e) {

    const switchCircle = e.target.querySelector('#switchCircle');

    if (e.target.getAttribute("aria-checked") == "true") {
        switchCircle.style.left = "-21px";
        e.target.setAttribute("aria-checked", "false");
    } else if (e.target.getAttribute("aria-checked") == "false") {
        switchCircle.style.left = "29px";
        e.target.setAttribute("aria-checked", "true");
    }
};
