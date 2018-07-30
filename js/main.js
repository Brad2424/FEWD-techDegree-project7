const alertButton = document.querySelector('.alert-div button');

alertButton.addEventListener('click', () => {
    const alertDiv = document.querySelector('.alert-div');
    alertDiv.remove();
})