import { Component, OnInit } from '@angular/core';
import { Chart, ChartDataset, registerables } from 'node_modules/chart.js'
import ChartDataLabels from 'chartjs-plugin-datalabels';
Chart.register(...registerables, ChartDataLabels);

@Component({
  selector: 'app-asset-availiblilty-by-type',
  templateUrl: './asset-availiblilty-by-type.component.html',
  styleUrls: ['./asset-availiblilty-by-type.component.scss']
})
export class AssetAvailibliltyByTypeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.labels = ['Thermostat', 'Switch', 'Battery', 'EV'];
    this.dataset[0].data = [332.90, 1134.62, 513.227, 1102.794];
    this.dataset[1].data = [449.24, 1813.46, 947.545, 1393.15];

    this.RenderChart();
  }

  labels: string[] = [];
  dataset: ChartDataset[] = [
    {
      label: 'Dataset 1',
      data: [],
      backgroundColor: ['#FFD200', '#00789E', '#54B948', '#26BCD7'],
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1,
  
    },
    {
      label: 'Dataset 2',
      data: [],
      backgroundColor: ['rgba(255, 210, 0, 0.5)', 'rgba(0, 120, 158, 0.5)', 'rgba(84, 185, 72, 0.5)', 'rgba(38, 188, 215, 0.5)'],
      borderColor: 'rgba(153, 102, 255, 1)',
      borderWidth: 1,
    }
  ];
  chart!: Chart;

  RenderChart(): void {
    this.chart = new Chart('myChart', {
      type: 'bar',
      data:{
        labels:this.labels,
        datasets:this.dataset
      },
      options: {
        plugins: {
          title: {
            display: true,
            text: 'Available Assets Capacity By Type ',
            font:{
              size:20
            },
            color:'#25ABC5'
          },
          legend: {
            display: false 
            
          },
          datalabels: {
            anchor: 'center', // Anchors the label to the end of the bar
            align: 'center',  // Aligns the label at the end of the bar
            color: '#FFFFFF', 
            font: {
              size: 18
            },
            formatter: (value) => {
              return value.toFixed(2);
            }
          }
        },
        responsive: true,
        scales: {
          x: {
            stacked: true,
            ticks: {
              color: 'white',
              padding: 0,
              
            },
            
          },
          y: {
            stacked: true,
            ticks: {
              color: 'white' // X-axis tick label color
            },
          }
        },
        backgroundColor: '#203446'
      }
    });
  }


}
