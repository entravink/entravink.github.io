const slider4 = document.getElementById('slider4');
const barChartCanvas4 = document.getElementById('graph4');
const ctx4 = barChartCanvas4.getContext('2d');

// Initialize the chart with some default data
const chartx4 = new Chart(ctx4, {
type: 'bar',
data: {
    labels: [''],
    datasets: [{
            label: 'Peluang (%)',
            data: [0],
            backgroundColor: 'rgba(230, 204, 178, 0.2)',
            borderColor: 'rgba(230, 204, 178, 1)',
            borderWidth: 1,
            barThickness: 40,
    }],
},
options: {
    scales: {
            y: {
                beginAtZero: true,
                max: 5,
                min: -100
            },
    },
},
});

// Function to update the chart based on the slider value
function updateChart4(value) {
    const newValue = value * -96.46; // Increase bar height by 5 for each slider point
    chartx4.data.datasets[0].data[0] = newValue;
    chartx4.update();
}

// Add an event listener to the slider to call the updateChart function when it changes
slider4.addEventListener('input', function() {
    const sliderValue4 = parseInt(slider4.value);
    const sliderValueText4 = document.getElementById('sliderValue4');
    const enterKey='\n';
    sliderValueText4.textContent = `Minimum Cost:${enterKey} ${sliderValue4} trilyun rupiah`;
    updateChart4(sliderValue4);
});


const hiddenElement4 = document.getElementById('hiddenElement4');
               
// Function to show the hidden element
// function showHiddenElement() {
// hiddenElement.style.display = 'block'; // Change display to 'block' to show the element
// }

// // Add an event listener to the slider to call the showHiddenElement function when it's clicked
// slider.addEventListener('click', showHiddenElement);

function showHiddenElement4() {
    if (slider4.value == 1) { // Check if the slider's value is 1
            hiddenElement4.style.display = 'block'; // Show the element
    } else {
            hiddenElement4.style.display = 'none'; // Hide the element for other values
    }
}

// Add an event listener to the slider to call the showHiddenElement function when it's clicked
slider4.addEventListener('input', showHiddenElement4);