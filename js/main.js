/* Alert Message */

const alertBox = document.getElementById("alert");

let alertMessage =    
    '<div class="alert-banner">' +
        '<p><strong>Alert:</strong> You have <strong > 6</strong> overdue tasks to complete</p>' +
        '<p class="alert-banner-close">X</p>' +
    '</div>';
  
alertBox.innerHTML = alertMessage;

alertBox.addEventListener('click', e => {
    const element = e.target;
    if (element.classList.contains("alert-banner-close")) {
        alertBox.style.display = "none"
    }
});

/* Notification Item */

const notificationBell = document.getElementById("notification-bell")
const notifications = document.getElementById("notifications")

notificationBell.addEventListener('mouseover', e => {
        notifications.style.display = "block"
});

notificationBell.addEventListener('mouseout', e => {
    notifications.style.display = "none"
});

notifications.addEventListener('click', e => {
    const element = e.target;
    if (element.classList.contains("notification-item-close")) {
        element.parentNode.style.display = "none"
    }
});

/* Traffic Line Chart */

const trafficCanvas = document.getElementById("traffic-chart");

let trafficHourly = {
    labels: ['0:00', '02:00', '04:00', '06:00', '08:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00', '22:00'],
    datasets: [{
        data: [20, 15, 5, 75, 180, 150, 95, 90, 75, 125, 135, 60],
        backgroundColor: 'rgba(116, 119, 191, .3)',
        borderWidth: 1,
    }]
};

let trafficDaily = {
    labels: ['1', '3', '5', '7', '9', '11', '13', '15', '17', '19', '21', '23', '25', '27', '29', '31'],
    datasets: [{
        data: [750, 780, 600, 650, 800, 500, 900, 925, 975, 1000, 875, 775, 850, 975, 1025, 950],
        backgroundColor: 'rgba(116, 119, 191, .3)',
        borderWidth: 1,
    }]
};

let trafficWeekly = {
    labels: ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31'],
    datasets: [{
        data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2500],
        backgroundColor: 'rgba(116, 119, 191, .3)',
        borderWidth: 1,
    }]
};

let trafficMonthly = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [{
        data: [5300, 7000, 8400, 7600, 6800, 9200, 9100, 10200, 8900, 9100, 7900, 9300],
        backgroundColor: 'rgba(116, 119, 191, .3)',
        borderWidth: 1,
    }]
};

let trafficOptions = {
    aspectRatio: 2.5,
    animation: {
        duration:  0
    },
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true
            }
        }]
    },
    legend: {
        display: false
    }
}


let trafficChart = new Chart(trafficCanvas, {
    type: 'line',
    data: trafficWeekly,
    options: trafficOptions
});

const chartSelection = document.getElementById("chart-selection")
let selectedChart = ""
let selectedData = ""

chartSelection.addEventListener('click', e => {
    const element = e.target;
    if (element.classList.contains("chart-option")) {
        selectedChart = element.innerText
        selectedData = "traffic" + selectedChart

        trafficChart = new Chart(trafficCanvas, {
            type: 'line',
            data: eval(selectedData),
            options: trafficOptions
        });
    }
});

/* Daily Traffic Bar Chart */

const dailyCanvas = document.getElementById("daily-chart");

let dailyData = {
    labels: ["S", "M", "T", "W", "T", "F", "S"],
    datasets: [{
        label: "# of Hits", 
        data: [75, 115, 175, 125, 225, 200, 100],
        backgroundColor: "#7477BF",
        borderWidth: 1
    }]
};

let dailyOptions = {
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true
            }
        }]
    },
    legend: {
        display: false
    }
};

let dailyChart = new Chart(dailyCanvas, {
    type: 'bar',
    data: dailyData,
    options: dailyOptions
});

/* Mobile Users Donut Chart */

const mobileCanvas = document.getElementById("mobile-chart");

let mobileData = {
    labels: ["Desktop", "Tablet", "Phones"], 
    datasets: [{
        label: '# of Users',
        data: [2000, 550, 500],
        borderWidth: 0,
        backgroundColor: [
            '#7477BF', 
            '#78CF82', 
            '#51B6C8'
        ]
    }]
};

let mobileOptions = {
    legend: {
        position: 'right',
        labels: {
            boxWidth: 20,
            fontStyle: 'bold'
        }
    }
};

let mobileChart = new Chart(mobileCanvas, {
    type: 'doughnut',
    data: mobileData,
    options: mobileOptions
});

/* Messdage Section */

const user = document.getElementById("userField");
const message = document.getElementById("messageField");
const send = document.getElementById("send");

send.addEventListener('click', () => {
    // check to see if message fields are filled out
    if (user.value === "" && message.value === "") {
        alert("Please fill out user and message fields before sending");
    } else if (user.value === "") {
        alert("Please fill out user field before sending");
    } else if (message.value === "") {
        alert("Please fill out message field before sending");
    } else {
        alert('Message successfully sent to: ${user.value}');
    }
});


/* const userOptions = ['Victoria Chambers', 'Dale Byrd', 'Dawn Wood', 'Dan Oliver']
const userFieldText = document.getElementById('userField').value

const autocomplete = (input, array) => {

} */