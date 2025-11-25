import { Component, OnInit } from '@angular/core';
import { PersonalizationService } from '../../services/personalization.service';
import { ToastrService } from 'ngx-toastr';
import { MatDialog } from '@angular/material/dialog';
import { Observable, interval } from 'rxjs';
import { map } from 'rxjs/operators';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

interface StatData {
  title: string;
  value: string | number;
  change: number;
  icon: string;
  color: string;
}

interface WidgetData {
  title: string;
  content: string;
  type: 'chart' | 'list' | 'card';
  icon?: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  stats: StatData[] = [
    { title: 'Usuarios Activos', value: '12,547', change: 12.5, icon: 'people', color: 'primary' },
    { title: 'Ventas Totales', value: '$245,678', change: 8.2, icon: 'attach_money', color: 'accent' },
    { title: 'Pedidos', value: '3,567', change: -3.1, icon: 'shopping_cart', color: 'warn' },
    { title: 'Crecimiento', value: '23.4%', change: 15.7, icon: 'trending_up', color: 'primary' }
  ];

  widgets: WidgetData[] = [
    { title: 'Actividad Reciente', content: 'Lista de actividades', type: 'list', icon: 'history' },
    { title: 'Gráfico de Rendimiento', content: 'Visualización de datos', type: 'chart', icon: 'bar_chart' },
    { title: 'Ventas Mensuales', content: 'Gráfico de ventas', type: 'chart', icon: 'trending_up' },
    { title: 'Notificaciones', content: 'Últimas notificaciones', type: 'card', icon: 'notifications' },
    { title: 'Tareas Pendientes', content: 'Lista de tareas', type: 'list', icon: 'check_circle' },
    { title: 'Análisis de Datos', content: 'Gráfico de análisis', type: 'chart', icon: 'analytics' }
  ];

  layout$: Observable<string>;
  
  chartWidgets = [
    { title: 'Ventas Mensuales', type: 'line' as const },
    { title: 'Distribución de Productos', type: 'doughnut' as const },
    { title: 'Comparación Anual', type: 'bar' as const }
  ];

  constructor(
    private personalizationService: PersonalizationService,
    private toastr: ToastrService,
    private dialog: MatDialog
  ) {
    this.layout$ = this.personalizationService.settings$.pipe(
      map(settings => settings.layout)
    );
  }

  ngOnInit(): void {
    // Simular actualizaciones de datos cada 30 segundos
    interval(30000).subscribe(() => {
      this.updateStats();
    });
  }

  updateStats(): void {
    // Simular cambios pequeños en los datos
    this.stats.forEach(stat => {
      if (typeof stat.value === 'string') {
        const numMatch = stat.value.match(/[\d,]+/);
        if (numMatch) {
          const current = parseInt(numMatch[0].replace(/,/g, ''));
          const change = Math.floor(Math.random() * 100) - 50;
          const newValue = Math.max(0, current + change);
          
          if (stat.value.includes('$')) {
            stat.value = '$' + newValue.toLocaleString('es-ES');
          } else if (stat.value.includes('%')) {
            stat.value = (Math.random() * 30 + 10).toFixed(1) + '%';
          } else {
            stat.value = newValue.toLocaleString('es-ES');
          }
          
          stat.change = (Math.random() * 20 - 10);
        }
      }
    });
    
    this.toastr.info('Datos actualizados', 'Dashboard', {
      timeOut: 2000,
      positionClass: 'toast-bottom-right'
    });
  }

  onStatCardClick(stat: StatData): void {
    this.toastr.success(`Ver detalles de: ${stat.title}`, 'Información', {
      timeOut: 3000
    });
    // Aquí podrías abrir un modal con más detalles
  }

  onWidgetDrop(event: CdkDragDrop<any[]>): void {
    moveItemInArray(this.widgets, event.previousIndex, event.currentIndex);
    this.toastr.success('Widget reordenado', 'Dashboard', {
      timeOut: 2000
    });
  }
}

