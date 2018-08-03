const returnedData = $.ajax({
                url: 'https://randomuser.me/api/?results=4&inc=name,email,registered,picture',
                dataType: 'json',
                success: function(data) {
                    data = JSON.parse(data);
                }
            });


// const randomPicture1 = results
// console.log(randomPicture1);

// document.getElementById('picture1').setAttribute("src", randomPicture1);