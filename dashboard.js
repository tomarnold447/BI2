// KPI 1a - Comparison
var ctx1a = document.getElementById('kpi1aChart').getContext('2d');
var kpi1aChart = new Chart(ctx1a, {
    type: 'bar',
    data: {
        labels: ['Category 1', 'Category 2', 'Category 3'],
        datasets: [{
            label: 'KPI 1a Comparison',
            data: [10, 20, 15],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Repeat the following code structure for other KPIs
// ...

// KPI 1b - Comparison
var ctx1b = document.getElementById('kpi1bChart').getContext('2d');
var kpi1bChart = new Chart(ctx1b, {
    type: 'bar', // or choose appropriate chart type for a Gantt Chart
    data: {
        labels: ['Task 1', 'Task 2', 'Task 3'],
        datasets: [{
            label: 'KPI 1b Comparison',
            data: [5, 10, 8],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Example KPI 2a - Process Flow Diagram
var ctx2a = document.getElementById('kpi2aChart').getContext('2d');
var kpi2aChart = new Chart(ctx2a, {
    type: 'scatter', // or choose appropriate chart type for a Process Flow Diagram
    data: {
        labels: ['Step 1', 'Step 2', 'Step 3'],
        datasets: [{
            label: 'KPI 2a Composition',
            data: [{x: 1, y: 10}, {x: 2, y: 20}, {x: 3, y: 15}],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            x: {
                type: 'linear',
                position: 'bottom'
            },
            y: {
                beginAtZero: true
            }
        }
    }
});

// Repeat the above structure for other KPIs...
// ...
// Example KPI 2b - Composition
var ctx2b = document.getElementById('kpi2bChart').getContext('2d');
var kpi2bChart = new Chart(ctx2b, {
    type: 'boxplot', // or choose appropriate chart type for Composition
    data: {
        labels: ['Dataset 1', 'Dataset 2'],
        datasets: [{
            label: 'KPI 2b Composition',
            data: [
                [10, 20, 25, 30, 35],
                [15, 25, 30, 35, 40]
            ],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});


// Example KPI 3a - Pie Chart
var ctx3a = document.getElementById('kpi3aChart').getContext('2d');
var kpi3aChart = new Chart(ctx3a, {
    type: 'pie',
    data: {
        labels: ['Category A', 'Category B', 'Category C'],
        datasets: [{
            label: 'KPI 3a Distribution',
            data: [30, 40, 30],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Example KPI 3b - Line Chart
var ctx3b = document.getElementById('kpi3bChart').getContext('2d');
var kpi3bChart = new Chart(ctx3b, {
    type: 'line',
    data: {
        labels: ['Month 1', 'Month 2', 'Month 3'],
        datasets: [{
            label: 'KPI 3b Composition',
            data: [50, 60, 45],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Example KPI 4a - Funnel Chart
var ctx4a = document.getElementById('kpi4aChart').getContext('2d');
var kpi4aChart = new Chart(ctx4a, {
    type: 'funnel', // or choose appropriate chart type for Composition
    data: {
        labels: ['Stage 1', 'Stage 2', 'Stage 3'],
        datasets: [{
            label: 'KPI 4a Composition',
            data: [100, 75, 50],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Example KPI 4b - Bar Chart
var ctx4b = document.getElementById('kpi4bChart').getContext('2d');
var kpi4bChart = new Chart(ctx4b, {
    type: 'bar',
    data: {
        labels: ['Category X', 'Category Y', 'Category Z'],
        datasets: [{
            label: 'KPI 4b Comparison',
            data: [25, 30, 20],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

