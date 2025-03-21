document.addEventListener("DOMContentLoaded", function () {
    function createRadarChart(chartId, stats) {
        const ctx = document.getElementById(chartId);
        if (!ctx) return;

        new Chart(ctx, {
            type: "radar",
            data: {
                labels: [
                    "Spike", "Receive", "Set", "Serve", "Block",
                ],
                datasets: [{
                    label: "Performance",
                    data: stats, // Stats now range from 1 to 10
                    backgroundColor: "rgba(0, 166, 251, 0.2)", /* Transparent Cyan */
                    borderColor: "#00A6FB", /* Cyan Blue */
                    pointBackgroundColor: "#00A6FB",
                    pointBorderColor: "#ffffff",
                    pointHoverBackgroundColor: "#ffffff",
                    pointHoverBorderColor: "#00A6FB"
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    r: {
                        beginAtZero: true,
                        min: 1,
                        max: 10,
                        grid: {
                            color: "rgba(255, 255, 255, 0.1)"
                        },
                        pointLabels: {
                            color: "#ffffff",
                            font: { size: 12 }
                        },
                        angleLines: {
                            color: "rgba(255, 255, 255, 0.2)"
                        },
                        ticks: {
                            display: false
                        }
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    }
                }
            }
        });
    }

    // Apply updated radar chart to both players
    createRadarChart("chart1", [10, 10, 10, 10, 10]); 
    createRadarChart("chart2", [10, 10, 10, 10, 10]); 
    createRadarChart("chart3", [10, 10, 10, 10, 10]); 
    createRadarChart("chart4", [10, 10, 10, 10, 10]); 
    createRadarChart("chart5", [10, 10, 10, 10, 10]); 
    createRadarChart("chart6", [10, 10, 10, 10, 10]); 
    createRadarChart("chart7", [10, 10, 10, 10, 10]); 
    createRadarChart("chart8", [10, 10, 10, 10, 10]);  
});
