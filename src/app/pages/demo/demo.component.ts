import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ThemeService } from '../../services/theme.service';
import { PersonalizationService } from '../../services/personalization.service';
import { ToastrService } from 'ngx-toastr';

interface Feature {
  title: string;
  description: string;
  icon: string;
  color: string;
  action?: () => void;
}

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {
  features: Feature[] = [];
  currentTheme: string = 'light';
  currentLayout: string = 'grid';

  constructor(
    private router: Router,
    private themeService: ThemeService,
    private personalizationService: PersonalizationService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.currentTheme = this.themeService.getCurrentTheme();
    this.currentLayout = this.personalizationService.getSettings().layout;

    this.features = [
      {
        title: 'Dashboard Interactivo',
        description: 'Panel de control con estadísticas animadas, widgets arrastrables y gráficos interactivos',
        icon: 'dashboard',
        color: 'primary',
        action: () => this.router.navigate(['/dashboard'])
      },
      {
        title: 'Personalización de Temas',
        description: 'Cambia entre temas claro/oscuro y personaliza colores en tiempo real',
        icon: 'palette',
        color: 'accent',
        action: () => this.toastr.info('Abre el personalizador de temas (botón flotante)', 'Tema')
      },
      {
        title: 'Command Palette',
        description: 'Acceso rápido a todas las funciones con Ctrl+K / Cmd+K',
        icon: 'keyboard',
        color: 'primary',
        action: () => this.toastr.info('Presiona Ctrl+K o Cmd+K para abrir', 'Command Palette')
      },
      {
        title: 'Drag & Drop',
        description: 'Reordena widgets arrastrándolos en el dashboard',
        icon: 'drag_indicator',
        color: 'accent',
        action: () => {
          this.router.navigate(['/dashboard']);
          setTimeout(() => {
            this.toastr.info('Arrastra los widgets para reordenarlos', 'Drag & Drop', {
              timeOut: 4000
            });
          }, 500);
        }
      },
      {
        title: 'Gráficos Interactivos',
        description: 'Visualiza datos con gráficos de línea, barras y dona interactivos',
        icon: 'bar_chart',
        color: 'primary',
        action: () => this.router.navigate(['/dashboard'])
      },
      {
        title: 'Notificaciones Toast',
        description: 'Sistema elegante de notificaciones para feedback del usuario',
        icon: 'notifications',
        color: 'accent',
        action: () => {
          this.toastr.success('¡Notificación de éxito!', 'Éxito');
          setTimeout(() => {
            this.toastr.info('Notificación informativa', 'Info');
          }, 1000);
          setTimeout(() => {
            this.toastr.warning('Notificación de advertencia', 'Advertencia');
          }, 2000);
        }
      },
      {
        title: 'Responsive Design',
        description: 'Adaptable a móvil, tablet y desktop con diseño fluido',
        icon: 'devices',
        color: 'primary',
        action: () => this.toastr.info('Redimensiona la ventana para ver la adaptabilidad', 'Responsive')
      },
      {
        title: 'Animaciones Suaves',
        description: 'Microinteracciones y animaciones fluidas en toda la aplicación',
        icon: 'animation',
        color: 'accent',
        action: () => this.toastr.info('Observa las animaciones al interactuar', 'Animaciones')
      }
    ];
  }

  toggleTheme(): void {
    const newTheme = this.currentTheme === 'light' ? 'dark' : 'light';
    this.themeService.setTheme(newTheme);
    this.currentTheme = newTheme;
    this.toastr.success(`Tema ${newTheme === 'dark' ? 'oscuro' : 'claro'} activado`, 'Tema');
  }

  changeLayout(layout: string): void {
    this.personalizationService.updateSettings({ layout: layout as any });
    this.currentLayout = layout;
    this.toastr.success(`Layout ${layout} aplicado`, 'Layout');
  }

  onFeatureClick(feature: Feature): void {
    if (feature.action) {
      feature.action();
    }
  }

  showTour(): void {
    this.toastr.info('Tour guiado iniciado. Sigue las instrucciones.', 'Tour Guiado', {
      timeOut: 3000
    });
    
    setTimeout(() => {
      this.toastr.success('1. Explora el Dashboard con estadísticas animadas', 'Paso 1', {
        timeOut: 4000
      });
    }, 3500);
    
    setTimeout(() => {
      this.toastr.info('2. Presiona Ctrl+K para abrir Command Palette', 'Paso 2', {
        timeOut: 4000
      });
    }, 8000);
    
    setTimeout(() => {
      this.toastr.warning('3. Arrastra los widgets para reordenarlos', 'Paso 3', {
        timeOut: 4000
      });
    }, 13000);
  }
}

