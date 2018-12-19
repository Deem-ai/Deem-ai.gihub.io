(function ($) {
    // single bar chart
    var ctx = document.getElementById("singelBarChart");
    ctx.height = 150;
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ["Sun", "Mon", "Tu", "Wed", "Th", "Fri", "Sat"],
            datasets: [
                {
                    label: "Personas",
                    data: [40, 55, 75, 81, 56, 55, 40],
                    borderColor: "rgba(0, 123, 255, 0.9)",
                    borderWidth: "0",
                    backgroundColor: "rgba(0, 123, 255, 0.5)"
                }
            ]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });

    //pie chart
    var ctx = document.getElementById("pieChart");
    ctx.height = 300;
    var myChart = new Chart(ctx, {
        type: 'pie',
        data: {
            datasets: [{
                data: [1000, 980, 750, 5000, 500, 550],
                backgroundColor: [
                    "rgba(0, 123, 255,1)",
                    "rgba(0, 123, 255,0.8)",
                    "rgba(0, 123, 255,0.6)",
                    "rgba(0, 123, 255,0.4)",
                    "rgba(0, 123, 255,0.2)",
                    "rgba(0,0,0,0.07)"
                ],
                hoverBackgroundColor: [
                    "rgba(0, 123, 255,1)",
                    "rgba(0, 123, 255,0.8)",
                    "rgba(0, 123, 255,0.6)",
                    "rgba(0, 123, 255,0.4)",
                    "rgba(0, 123, 255,0.2)",
                    "rgba(0,0,0,0.07)"
                ]

            }],
            labels: [
                "Falabella",
                "Exito",
                "Alkosto",
                "Cinecolombia",
                "Wok",
                "Creps & Waffles",
            ]
        },
        options: {
            responsive: true
        }
    });

    //line chart
    var ctx = document.getElementById("lineChart");
    ctx.height = 150;
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10",
                    "11", "12", "13", "14", "15", "16", "17", "18", "19", "20",
                    "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"],
            datasets: [
                {
                    label: "Noviembre",
                    borderColor: "rgba(0,0,0,.09)",
                    borderWidth: "1",
                    backgroundColor: "rgba(0,0,0,.07)",
                    data: [2055, 4259, 19162, 28115, 11396, 8631, 27311, 20846, 16200, 2036, 28375, 18258, 3538, 20120, 29017, 29908, 17710, 21955, 23784, 11360, 12319, 26155, 17518, 7133, 10294, 22841, 15785, 7546, 8480, 19516, 29824]
                },
                {
                    label: "Diciembre",
                    borderColor: "rgba(0, 123, 255, 0.9)",
                    borderWidth: "1",
                    backgroundColor: "rgba(0, 123, 255, 0.5)",
                    pointHighlightStroke: "rgba(26,179,148,1)",
                    data: [3842, 19459, 20680, 27749, 25453, 6457, 28543, 19418, 16482, 27608, 10956, 28868, 29049, 4516, 26368, 25478, 7844, 5844, 6301, 14572, 6583, 23850, 5607, 2370, 27482, 4213, 13625, 9300]
                }
            ]
        },
        options: {
            responsive: true,
            tooltips: {
                mode: 'index',
                intersect: false
            },
            hover: {
                mode: 'nearest',
                intersect: true
            }

        }
    });
})(jQuery);