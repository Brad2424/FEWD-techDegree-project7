// GRAPH SECTIONS //

const traffic = document.getElementById("traffic");
const dailyTraf = document.getElementById("dailyTraf");
const mobileUsers = document.getElementById("mobileUsers");

// --------------------------------------------------
// Functions for creating and removing line graphs
// --------------------------------------------------

const createLineChart = (chartElement, labels, data) => {
    new Chart(chartElement, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Number of Visits',
                data: data,
                backgroundColor: 'rgba(116, 119, 191, 0.2)',
                borderColor: 'rgba(116, 119, 191, 1)',
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
                    ticks: {
                        beginAtZero:true
                    },
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

const trafficCharts = document.querySelector('.traffic');

//Create an graph on page to start with
createLineChart(traffic, ["1", "2", "3", "4", "5", "6", '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52'], [100, 150, 120, 130, 160, 180, 170, 190, 170, 180, 160, 190, 210, 170, 180, 170, 150, 130, 150, 140, 160, 190, 180, 150, 170, 200, 190, 210, 190, 170, 160, 180, 170, 220, 170, 200,  190, 200, 210, 180, 190, 170, 160, 150, 120, 140, 180, 160, 200, 210, 220, 210]);

trafficCharts.addEventListener('click', (e) => {
    if (e.target.textContent === 'Weekly') {
        createLineChart(traffic, ["1", "2", "3", "4", "5", "6", '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52'], [100, 150, 120, 130, 160, 180, 170, 190, 170, 180, 160, 190, 210, 170, 180, 170, 150, 130, 150, 140, 160, 190, 180, 150, 170, 200, 190, 210, 190, 170, 160, 180, 170, 220, 170, 200,  190, 200, 210, 180, 190, 170, 160, 150, 120, 140, 180, 160, 200, 210, 220, 210]);
    }

    if (e.target.textContent === 'Monthly') {
        createLineChart(traffic, ["January", "February", "March", "April", "May", "June", 'July', 'August', 'September', 'October', 'Novemebr', 'December'], [700, 1200, 1100, 1200, 2000, 1500, 1600, 1100, 1200, 1800, 1300, 1600]);
    }

    if (e.target.textContent === 'Quarterly') {
        createLineChart(traffic, ["Q1", "Q2", "Q3", "Q4"], [3700, 3000, 3800, 3200]);
    }

    if (e.target.textContent === 'Yearly') {
        createLineChart(traffic, ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018'], [10700, 9200, 11100, 12000, 20000, 15000, 16000, 19000, 19800]);
    }
});



// ----------------------------------------------------
// Creation of BAR GRAPH
// ----------------------------------------------------

new Chart(dailyTraf, {
    type: 'bar',
    data: {
        labels: ["Monday", 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        datasets: [{
            label: 'Number of Visits',
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
                },
            }],
            xAxes: [{
                gridLines: {
                    display: false,
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
            label: 'Number of Visits',
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
        //plugin to display percentages on doughnut chart
        plugins: {
            labels: {
              fontSize: 16,
              fontColor: 'white',
              fontStyle: 'bold',
              // show the real calculated percentages from the values and don't apply the additional logic to fit the percentages to 100 in total, default is false
            //   showActualPercentages: true,
            }
        }
    }
});