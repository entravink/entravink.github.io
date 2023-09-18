const slider3 = document.getElementById('slider3');
const barChartCanvas3 = document.getElementById('graph3');
const ctx3 = barChartCanvas3.getContext('2d');

// Initialize the chart with some default data
const chartx3 = new Chart(ctx3, {
type: 'bar',
data: {
    labels: [''],
    datasets: [{
            label: 'Peluang (%)',
            data: [0],
            backgroundColor: 'rgba(41, 191, 18, 0.8)',
            //borderColor: 'rgba(41, 191, 18, 1)',
            borderWidth: 1,
            barThickness: 40,
    }],
},
options: {
    scales: {
            y: {
                beginAtZero: true,
                max: 1100,
            },
    },
},
});

// Function to update the chart based on the slider value
function updateChart3(value) {
    const newValue = value * 1082.24; // Increase bar height by 5 for each slider point
    chartx3.data.datasets[0].data[0] = newValue;
    chartx3.update();
}

// Add an event listener to the slider to call the updateChart function when it changes
slider3.addEventListener('input', function() {
    const sliderValue3 = parseInt(slider3.value);
    const sliderValueText3 = document.getElementById('sliderValue3');
    const enterKey='\n';
    sliderValueText3.textContent = `Pengeluaran per kapita:${enterKey} ${sliderValue3} juta rupiah`;
    updateChart3(sliderValue3);
});


const hiddenElement3 = document.getElementById('hiddenElement3');
               
// Function to show the hidden element
// function showHiddenElement() {
// hiddenElement.style.display = 'block'; // Change display to 'block' to show the element
// }

// // Add an event listener to the slider to call the showHiddenElement function when it's clicked
// slider.addEventListener('click', showHiddenElement);

function showHiddenElement3() {
    if (slider3.value == 1) { // Check if the slider's value is 1
            hiddenElement3.style.display = 'block'; // Show the element
    } else {
            hiddenElement3.style.display = 'none'; // Hide the element for other values
    }
}

// Add an event listener to the slider to call the showHiddenElement function when it's clicked
slider3.addEventListener('input', showHiddenElement3);