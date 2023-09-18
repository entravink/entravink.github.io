const slider = document.getElementById('slider');
const barChartCanvas = document.getElementById('graph');
const ctx = barChartCanvas.getContext('2d');

// Initialize the chart with some default data
const chartx = new Chart(ctx, {
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
                max: 300,
            },
    },
},
});

// Function to update the chart based on the slider value
function updateChart(value) {
    const newValue = value * 259.66; // Increase bar height by 5 for each slider point
    chartx.data.datasets[0].data[0] = newValue;
    chartx.update();
}

// Add an event listener to the slider to call the updateChart function when it changes
slider.addEventListener('input', function() {
    const sliderValue = parseInt(slider.value);
    const sliderValueText = document.getElementById('sliderValue');
    const enterKey='\n';
    sliderValueText.textContent = `Pengeluaran per kapita:${enterKey} ${slider.value} juta rupiah`;
    updateChart(sliderValue);
});


const hiddenElement = document.getElementById('hiddenElement');
               
// Function to show the hidden element
// function showHiddenElement() {
// hiddenElement.style.display = 'block'; // Change display to 'block' to show the element
// }

// // Add an event listener to the slider to call the showHiddenElement function when it's clicked
// slider.addEventListener('click', showHiddenElement);

function showHiddenElement() {
    if (slider.value == 1) { // Check if the slider's value is 1
            hiddenElement.style.display = 'block'; // Show the element
    } else {
            hiddenElement.style.display = 'none'; // Hide the element for other values
    }
}

// Add an event listener to the slider to call the showHiddenElement function when it's clicked
slider.addEventListener('input', showHiddenElement);