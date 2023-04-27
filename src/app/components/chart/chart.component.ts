import { Component, Input } from "@angular/core";

@Component({
  selector: 'app-chart-component',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})

export class ChartComponent {

  //Pass the two dimensional array as input in html component (props)
  @Input() chartData: string[][]=[];
  
  public lineChartData = [    { data: [65, 59, 80, 81, 56, 55, 40, 50,12,70,89,62], label: 'Series A' },
    { data: [28, 48, 40, 19, 86, 27, 90, 85, 64, 29,12, 95], label: 'Series B' },
    { data: [18, 48, 77, 9, 100, 27, 40, 13, 43, 74, 29, 80], label: 'Series C' }
  ];

  public lineChartLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];


  public lineChartOptions = {
    responsive: true,
    scales: {
      xAxes: [{
        ticks: {
          beginAtZero: true
        }
      }],
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  };

  public lineChartColors: any[] = [
    { // Series A
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // Series B
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // Series C
      backgroundColor: 'rgba(255,153,0,0.2)',
      borderColor: 'rgba(255,153,0,1)',
      pointBackgroundColor: 'rgba(255,153,0,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(255,153,0,0.8)'
    }
  ];

  public lineChartLegend = true;
  public lineChartType = 'line';
}
