import { Component, Input, OnInit } from '@angular/core';
import { ChartConfiguration, ChartType } from 'chart.js';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-chart-widget',
  templateUrl: './chart-widget.component.html',
  styleUrls: ['./chart-widget.component.scss']
})
export class ChartWidgetComponent implements OnInit {
  @Input() title: string = 'Gráfico';
  @Input() type: 'line' | 'bar' | 'doughnut' | 'pie' = 'line';
  @Input() data: any;
  @Input() options: any;

  public chartOptions: ChartConfiguration['options'] = {};
  public chartType: ChartType = 'line';
  public chartData: ChartConfiguration['data'] = {
    labels: [],
    datasets: []
  };

  constructor(private toastr: ToastrService) {}

  private getDefaultData(): any {
    switch (this.type) {
      case 'line':
        return {
          labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago'],
          datasets: [{
            label: 'Ventas',
            data: [12000, 19000, 15000, 25000, 22000, 30000, 28000, 35000],
            backgroundColor: 'rgba(63, 81, 181, 0.1)',
            borderColor: 'rgba(63, 81, 181, 1)',
            borderWidth: 3,
            fill: true,
            tension: 0.4,
            pointRadius: 5,
            pointHoverRadius: 8
          }]
        };
      
      case 'bar':
        return {
          labels: ['2020', '2021', '2022', '2023', '2024'],
          datasets: [{
            label: 'Ingresos',
            data: [450000, 520000, 480000, 610000, 750000],
            backgroundColor: [
              'rgba(63, 81, 181, 0.8)',
              'rgba(255, 64, 129, 0.8)',
              'rgba(0, 188, 212, 0.8)',
              'rgba(76, 175, 80, 0.8)',
              'rgba(255, 152, 0, 0.8)'
            ],
            borderColor: [
              'rgba(63, 81, 181, 1)',
              'rgba(255, 64, 129, 1)',
              'rgba(0, 188, 212, 1)',
              'rgba(76, 175, 80, 1)',
              'rgba(255, 152, 0, 1)'
            ],
            borderWidth: 2
          }]
        };
      
      case 'doughnut':
      case 'pie':
        return {
          labels: ['Productos', 'Servicios', 'Consultoría', 'Soporte'],
          datasets: [{
            data: [35, 25, 20, 20],
            backgroundColor: [
              'rgba(63, 81, 181, 0.8)',
              'rgba(255, 64, 129, 0.8)',
              'rgba(0, 188, 212, 0.8)',
              'rgba(76, 175, 80, 0.8)'
            ],
            borderColor: [
              'rgba(63, 81, 181, 1)',
              'rgba(255, 64, 129, 1)',
              'rgba(0, 188, 212, 1)',
              'rgba(76, 175, 80, 1)'
            ],
            borderWidth: 2
          }]
        };
      
      default:
        return {
          labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun'],
          datasets: [{
            label: 'Datos',
            data: [65, 59, 80, 81, 56, 55],
            backgroundColor: 'rgba(63, 81, 181, 0.2)',
            borderColor: 'rgba(63, 81, 181, 1)',
            borderWidth: 2
          }]
        };
    }
  }

  ngOnInit(): void {
    this.chartType = this.type as ChartType;
    
    if (this.data) {
      this.chartData = this.data;
    } else {
      this.chartData = this.getDefaultData();
    }

    this.chartOptions = this.options || {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: true,
          position: 'top'
        },
        tooltip: {
          enabled: true
        }
      },
      scales: this.type !== 'doughnut' && this.type !== 'pie' ? {
        y: {
          beginAtZero: true,
          grid: {
            color: 'rgba(0, 0, 0, 0.1)'
          }
        },
        x: {
          grid: {
            display: false
          }
        }
      } : undefined
    };
  }

  exportChart(): void {
    this.toastr.info('Exportando gráfico...', 'Exportar', {
      timeOut: 2000
    });
    // Aquí implementarías la lógica de exportación
  }

  refreshChart(): void {
    this.toastr.success('Gráfico actualizado', 'Actualizar', {
      timeOut: 2000
    });
    // Aquí implementarías la lógica de actualización
    this.ngOnInit();
  }

  configureChart(): void {
    this.toastr.info('Abrir configuración de gráfico', 'Configurar', {
      timeOut: 2000
    });
    // Aquí implementarías un modal de configuración
  }
}

