const slider2 = document.getElementById('slider2');
const barChartCanvas2 = document.getElementById('graph2');
// Function to initialize and update the chart
function initChart2() {
    // Check if the chart exists, and if it does, destroy it
    if (window.chartx2) {
        window.chartx2.destroy();
    }

    // Initialize the chart with some default data
    const ctx2 = barChartCanvas2.getContext('2d');
    window.chartx2 = new Chart(ctx2, {
        type: 'bar',
        data: {
            labels: [''],
            datasets: [{
                label: 'Peluang (%)',
                data: [0],
                backgroundColor: 'rgba(242, 27, 63, 0.8)',
                //borderColor: 'rgba(242, 27, 63, 1)',
                borderWidth: 1,
                barThickness: 40,
            }],
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    max: 5,
                    min: -85
                },
            },
        },
    });
}

// Function to update the chart based on the slider value
function updateChart2(value) {
    const newValue = value * -82.48; // Increase bar height by 5 for each slider point
    window.chartx2.data.datasets[0].data[0] = newValue;
    window.chartx2.update();
}

// Initialize the chart when the page loads
initChart2();

// Function to handle tab shown event
// function handleTab2Shown() {
//     initChart2(); // Initialize the chart when Tab 2 is shown
// }

// // Add an event listener to the Tab 2 link to trigger chart initialization
// const tab2Link = document.getElementById('tab2-link');
// tab2Link.addEventListener('shown.bs.tab', handleTab2Shown);

function handleTab2Shown(e) {
    if (e.target.getAttribute('href') === '#tab2') {
        initChart2(); // Initialize the chart when Tab 2 is shown
    }
}

// Add an event listener to the Tab 2 link to trigger chart initialization
const tab2Link = document.querySelector('a[href="#tab2"]');
tab2Link.addEventListener('shown.bs.tab', handleTab2Shown);

// Add an event listener to the slider to call the updateChart function when it changes
slider2.addEventListener('input', function() {
    const sliderValue2 = parseInt(slider2.value)/10;
    const sliderValueText2 = document.getElementById('sliderValue2');
    const enterKey='\n';
    sliderValueText2.textContent = `Gini ratio:${enterKey} ${sliderValue2}`;
    updateChart2(slider2.value);
});


const hiddenElement2 = document.getElementById('hiddenElement2');
               
// Function to show the hidden element
// function showHiddenElement() {
// hiddenElement.style.display = 'block'; // Change display to 'block' to show the element
// }

// // Add an event listener to the slider to call the showHiddenElement function when it's clicked
// slider.addEventListener('click', showHiddenElement);

function showHiddenElement2() {
    if (slider2.value == 1) { // Check if the slider's value is 1
            hiddenElement2.style.display = 'block'; // Show the element
    } else {
            hiddenElement2.style.display = 'none'; // Hide the element for other values
    }
}

// Add an event listener to the slider to call the showHiddenElement function when it's clicked
slider2.addEventListener('input', showHiddenElement2);