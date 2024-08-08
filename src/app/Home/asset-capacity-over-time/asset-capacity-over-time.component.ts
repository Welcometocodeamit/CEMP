import { Component } from '@angular/core';
import { Chart, registerables } from 'node_modules/chart.js'
// import { shadowPlugin } from './shadow-plugin'; 
// import{ChartDataService}from'../../service/chart-data.service'
Chart.register(...registerables)
@Component({
    selector: 'app-asset-capacity-over-time',
    templateUrl: './asset-capacity-over-time.component.html',
    styleUrls: ['./asset-capacity-over-time.component.scss']
})
export class AssetCapacityOverTimeComponent {
    ngOnInit(): void {
        this.createChart();
    }
    // RenderChart(){
    //   const myChart = new Chart('asset-capacity',{
    //     type: '',
    //   }
    //   )
    // }
    createChart() {
        const canvas = document.getElementById('asset-capacity') as HTMLCanvasElement | null;

        if (canvas) {
            const ctx = canvas.getContext('2d');

            if (ctx) {
                // Define gradients
                const gradientThermostat = ctx.createLinearGradient(0, 0, 0, canvas.height);
                gradientThermostat.addColorStop(0, 'rgba(255, 210, 0, 1)');  // Top: fully opaque
                gradientThermostat.addColorStop(0.25, 'rgba(255, 210, 0, 0.9)'); // Middle: slightly less opaque
                gradientThermostat.addColorStop(0.5, 'rgba(255, 210, 0, 0.8)'); // Middle: slightly less opaque
                gradientThermostat.addColorStop(0.75, 'rgba(255, 210, 0, 0.6)'); // Middle: slightly less opaque
                gradientThermostat.addColorStop(1, 'rgba(255, 210, 0, 0.3)'); // Bottom: more transparent

                const gradientSwitch = ctx.createLinearGradient(0, 0, 0, canvas.height);
                gradientSwitch.addColorStop(0, 'rgba(0, 120, 158, 1)');  // Top: fully opaque
                gradientSwitch.addColorStop(0.5, 'rgba(0, 120, 158, 0.8)'); // Middle: slightly less opaque
                gradientSwitch.addColorStop(1, 'rgba(0, 120, 158, 0.3)'); // Bottom: more transparent

                const gradientBattery = ctx.createLinearGradient(0, 0, 0, canvas.height);
                gradientBattery.addColorStop(0, 'rgba(84, 185, 72, 1)');  // Top: fully opaque
                gradientBattery.addColorStop(0.5, 'rgba(84, 185, 72, 0.8)'); // Middle: slightly less opaque
                gradientBattery.addColorStop(1, 'rgba(84, 185, 72, 0.3)'); // Bottom: more transparent

                const gradientEv = ctx.createLinearGradient(0, 0, 0, canvas.height);
                gradientEv.addColorStop(0, 'rgba(38, 188, 215, 1)');  // Top: fully opaque
                gradientEv.addColorStop(0.5, 'rgba(38, 188, 215, 0.8)'); // Middle: slightly less opaque
                gradientEv.addColorStop(1, 'rgba(38, 188, 215, 0.3)'); // Bottom: more transparent

                const myChart = new Chart(ctx, {
                    type: 'line',
                    data: {
                        labels: ['12:00am', '1:00am', '2:00am', '3:00am', '4:00am', '5:00am', '6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm', '8:00pm', '9:00pm', '10:00pm', '11:00pm'],
                        datasets: [
                            {
                                label: "Thermostat",
                                data: ['180', '199', '195', '170', '166', '177', '160', '153', '152', '163', '169', '156', '155', '196', '190', '165', '184', '154', '198', '183', '179', '157', '150', '186'],
                                backgroundColor: gradientThermostat,
                                borderColor: '#FFD200',
                                fill: true
                            },
                            {
                                label: "Switch",
                                data: ['373', '436', '447', '369', '413', '378', '342', '423', '310', '431', '331', '420', '335', '414', '370', '328', '399', '371', '340', '343', '409', '351', '338', '392'],
                                backgroundColor: gradientSwitch,
                                borderColor: '#00789E',
                                fill: true
                            },
                            {
                                label: "Battery",
                                data: ['579', '578', '562', '571', '563', '584', '569', '555', '577', '582', '560', '586', '556', '552', '551', '550', '561', '566', '600', '589', '565', '572', '599', '553'],
                                backgroundColor: gradientBattery,
                                borderColor: '#54B948',
                                fill: true
                            },
                            {
                                label: "Ev",
                                data: ['657', '795', '760', '668', '671', '700', '680', '659', '656', '747', '721', '658', '702', '707', '711', '651', '696', '714', '652', '800', '781', '754', '715', '730'],
                                backgroundColor: gradientEv,
                                borderColor: '#26BCD7',
                                fill: true
                            }
                        ]
                    },
                    options: {
                        aspectRatio: 2.5,

                        plugins: {
                            title: {
                                display: true,
                                text: 'Available Assets Capacity By Type ',
                                font: {
                                    size: 20
                                },
                                color: '#25ABC5'
                            },
                            legend: {
                                position: 'top',
                                labels: {
                                    color: 'white'
                                }

                            },
                            datalabels: {
                                display:false,
                                // anchor: 'center', // Anchors the label to the end of the bar
                                // align: 'center',  // Aligns the label at the end of the bar
                                // color: '#FFFFFF', 
                                // font: {
                                //   size: 18
                                // },
                                // formatter: (value) => {
                                //   return value.toFixed(2);
                                // }
                              },
                            tooltip: {
                                callbacks: {
                                    label: function (tooltipItem) {
                                        return `${tooltipItem.dataset.label}: ${tooltipItem.raw}`;
                                    }
                                }
                            }
                        },
                        scales: {
                            y: {
                                beginAtZero: true,
                                ticks: {
                                    color: 'white' // Color of y-axis labels
                                },
                                grid: {
                                    display:false,
                                    color: '#ddd', // Color of grid lines
                                }
                            },
                            x: {
                                ticks: {
                                    color: 'white' // Color of x-axis labels
                                },
                                grid: {
                                    display:false,
                                    color: '#ddd', // Color of grid lines
                                }
                            }
                        }
                    }
                });
            } else {
                console.error('Failed to get 2D context');
            }
        } else {
            console.error('Canvas element not found');
        }
    }
}
