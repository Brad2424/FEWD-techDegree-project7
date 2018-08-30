// GRAPH SECTIONS //

const traffic = document.getElementById("traffic");
const dailyTraf = document.getElementById("dailyTraf");
const mobileUsers = document.getElementById("mobileUsers");

// --------------------------------------------------
// Function for creating all graphs
// --------------------------------------------------

const createLineChart = (chartElement, labels, data, yAxis) => {
    new Chart(chartElement, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{ 
                data: data,
                borderColor: '#65619E',
                borderWidth: 1,
                backgroundColor: 'rgba(116, 119, 191, 0.2)',
                borderColor: [
                    'rgba(116, 119, 191, 1)',
                ],
                borderWidth: 1,
                lineTension: 0,
                pointBackgroundColor: 'white',
                pointRadius: '4',
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            legend: {
                display: false
            },
            scales: {
                yAxes: [{
                    ticks: yAxis,
                    gridLines: {
                        offsetGridLines: true,
                    }
                }],
            }
        }
    });
};

// ----------------------------------------------------
// Event listner for GRAPH OPTION BUTTONS on LINE CHART
// ----------------------------------------------------
const weeklyButton = document.querySelector("button#weekly");
const monthlyButton = document.querySelector("button#monthly");
const quarterlyButton = document.querySelector("button#quarterly");
const yearlyButton = document.querySelector("button#yearly");

monthlyButton.addEventListener("click", createLineChart(traffic, ["January", "February", "March", "April", "May", "June", 'July', 'August', 'September', 'October', 'Novemebr', 'December'], [700, 1200, 1100, 1200, 2000, 1500, 1600, 1100, 1200, 1800, 1300, 1600], {beginAtZero:true}));

weeklyButton.addEventListener("click", createLineChart(traffic, ["1", "2", "3", "4", "5", "6", '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'], [100, 150, 120, 130, 160, 180, 170, 190, 170, 180, 160, 190], {beginAtZero:true}));




// createLineChart(traffic, ["January", "February", "March", "April", "May", "June", 'July', 'August', 'September', 'October', 'Novemebr', 'December'], [700, 1200, 1100, 1200, 2000, 1500, 1600, 1100, 1200, 1800, 1300, 1600], {beginAtZero:true});


// ----------------------------------------------------
// Creation of BAR GRAPH
// ----------------------------------------------------

new Chart(dailyTraf, {
    type: 'bar',
    data: {
        labels: ["Monday", 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
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

// ----------------------------------------------------
// Creation of DOUGHNUT GRAPH
// ----------------------------------------------------
new Chart(mobileUsers, {
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