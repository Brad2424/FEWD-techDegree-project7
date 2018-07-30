const traffic = document.getElementById("traffic");
const dailyTraf = document.getElementById("dailyTraf");
const mobileUsers = document.getElementById("mobileUsers");

let myCharts = new Chart(traffic, {
    type: 'line',
    data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [{
            label: 'TRAFFIC',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(116, 119, 191, 0.2)',
            ],
            borderColor: [
                'rgba(116, 119, 191, 1)'
            ],
            borderWidth: 1,
            lineTension: 0,
            pointBackgroundColor: 'white',
            pointRadius: '5',
        }],
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        responsiveAnimationDuration: 0,
        title: {
            display: true,
            position: 'top',
            text: 'TITLE',
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
}
});

myCharts += new Chart(dailyTraf, {
    type: 'bar',
    data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(56, 59, 131, 1)',
                'rgba(56, 59, 131, 1)',
                'rgba(56, 59, 131, 1)',
                'rgba(56, 59, 131, 1)',
                'rgba(56, 59, 131, 1)',
                'rgba(56, 59, 131, 1)',
            ],
            borderColor: [
                'rgba(56, 59, 131, 1)',
                'rgba(56, 59, 131, 1)',
                'rgba(56, 59, 131, 1)',
                'rgba(56, 59, 131, 1)',
                'rgba(56, 59, 131, 1)',
                'rgba(56, 59, 131, 1)',
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        responsiveAnimationDuration: 0,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});

myCharts += new Chart(mobileUsers, {
    type: 'doughnut',
    data: {
        labels: ["Phones", "Tablets", "Desktop"],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3],
            backgroundColor: [
                'rgba(116, 119, 191, 1)',
                'rgba(56, 59, 131, 1)',
                'rgba(176, 179, 251, 1)',

            ],
            borderColor: [
                'rgba(116, 119, 191, 1)',
                'rgba(56, 59, 131, 1)',
                'rgba(176, 179, 251, 1)',
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        responsiveAnimationDuration: 0,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});