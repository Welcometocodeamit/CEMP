import { Component, OnInit } from '@angular/core';
import { Chart, ChartDataset, registerables } from 'node_modules/chart.js'
import ChartDataLabels from 'chartjs-plugin-datalabels';
Chart.register(...registerables, ChartDataLabels);

@Component({
  selector: 'app-total-capacity-pie',
  templateUrl: './total-capacity-pie.component.html',
  styleUrls: ['./total-capacity-pie.component.scss']
})
export class TotalCapacityPieComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.labels = ['Thermostat', 'Switch', 'Battery', 'EV'];
    this.dataset[0].data = [10, 39, 21, 30];

    this.RenderChart();
  }

  labels: string[] = [];
  dataset: ChartDataset[] = [
    {
      data: [],
      backgroundColor: ['#FFD200', '#00789E', '#54B948', '#26BCD7'],
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1,
      barPercentage:1,
  
    }
  ];
  chart!: Chart;

  RenderChart(): void {
    this.chart = new Chart('totalCapacityPie', {
      type: 'pie',
      data:{
        labels:this.labels,
        datasets:this.dataset
      },
      options: {
        plugins: {
          title: {
            display: true,
            text: 'Total Capacity By Asset Type',
            font:{
              size:20
            },
            color:'#25ABC5'
          },
          legend: {
            display: true 
            
          },
          datalabels: {
            anchor: 'center', // Anchors the label to the end of the bar
            align: 'center',  // Aligns the label at the end of the bar
            color: '#FFFFFF', 
            font: {
              size: 18
            },

          }
        },
        responsive: true,
        scales: {
          x: {
            stacked: true,
            grid:{
              display:false
            },
            ticks: {
              color: 'white' // X-axis tick label color
            },
            
          },
          y: {
            stacked: true,
            ticks: {
              color: 'white' // X-axis tick label color
            },
            grid:{
              display:false
            },
          }
        },
        backgroundColor: '#203446'
      }
    });
  }

}
