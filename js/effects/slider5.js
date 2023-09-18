const slider5 = document.getElementById('slider5');
const barChartCanvas5 = document.getElementById('graph5');
const ctx5 = barChartCanvas5.getContext('2d');

// Initialize the chart with some default data
const chartx5 = new Chart(ctx5, {
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
                min: -20
            },
    },
},
});

// Function to update the chart based on the slider value
function updateChart5(value) {
    const newValue = value * -18.37; // Increase bar height by 5 for each slider point
    chartx5.data.datasets[0].data[0] = newValue;
    chartx5.update();
}

// Add an event listener to the slider to call the updateChart function when it changes
slider5.addEventListener('input', function() {
    const sliderValue5 = parseInt(slider5.value);
    const sliderValueText5 = document.getElementById('sliderValue5');
    const enterKey='\n';
    sliderValueText5.textContent = `Minimum Cost:${enterKey} ${sliderValue5} trilyun rupiah`;
    updateChart5(sliderValue5);
});


const hiddenElement5 = document.getElementById('hiddenElement5');
               
// Function to show the hidden element
// function showHiddenElement() {
// hiddenElement.style.display = 'block'; // Change display to 'block' to show the element
// }

// // Add an event listener to the slider to call the showHiddenElement function when it's clicked
// slider.addEventListener('click', showHiddenElement);

function showHiddenElement5() {
    if (slider5.value == 1) { // Check if the slider's value is 1
            hiddenElement5.style.display = 'block'; // Show the element
    } else {
            hiddenElement5.style.display = 'none'; // Hide the element for other values
    }
}

// Add an event listener to the slider to call the showHiddenElement function when it's clicked
slider5.addEventListener('input', showHiddenElement5);