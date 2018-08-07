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

    let timeOut;
    
    function startTimeOut() {
        timeOut = window.setTimeout(() => {sentStatus.remove()}, 3000);
    };

    function stopTimeOut() {
        window.clearTimeout(timeOut);
    };

    if (sentStatus !== null && message.value === "" && sentStatus.textContent === "Message Successfully Sent") {
        const timeOut = window.setTimeout(() => {sentStatus.remove()}, 3000);
        sentStatus.textContent = "Error: No message entered";
        sentStatus.style.color = "red";
        stopTimeOut();
    } else if (sentStatus !== null && message.value && sentStatus.textContent === "Error: No message entered") {
        const timeOut = window.setTimeout(() => {sentStatus.remove()}, 3000);
        sentStatus.textContent = "Message Successfully Sent";
        sentStatus.style.color = "green";
        startTimeOut();
        message.value = "";
    } else if(message.value === "" && sentStatus === null) {
        parentDiv.insertBefore(sendConfirmation, e.target);
        sendConfirmation.textContent = "Error: No message entered";
        sendConfirmation.style.color = "red";
    } else if(message.value && sentStatus === null) {
        const timeOut = window.setTimeout(() => {sentStatus.remove()}, 3000);
        parentDiv.insertBefore(sendConfirmation, e.target);
        sendConfirmation.textContent = "Message Successfully Sent";
        startTimeOut();
        message.value = "";
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
    } else {
        switchCircle.style.left = "29px";
        e.target.setAttribute("aria-checked", "true");
    }
};
