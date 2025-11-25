import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ThemeService } from '../../services/theme.service';
import { ToastrService } from 'ngx-toastr';

interface Command {
  id: string;
  label: string;
  icon: string;
  action: () => void;
  category: string;
}

@Component({
  selector: 'app-command-palette',
  templateUrl: './command-palette.component.html',
  styleUrls: ['./command-palette.component.scss']
})
export class CommandPaletteComponent implements OnInit {
  isOpen: boolean = false;
  searchQuery: string = '';
  filteredCommands: Command[] = [];
  selectedIndex: number = 0;

  commands: Command[] = [];

  constructor(
    private router: Router,
    private themeService: ThemeService,
    private toastr: ToastrService
  ) {
    this.commands = [
      { id: 'dashboard', label: 'Ir a Dashboard', icon: 'dashboard', category: 'Navegación', action: () => this.navigateTo('/dashboard', 'Dashboard') },
      { id: 'demo', label: 'Ir a Demo/Showcase', icon: 'rocket_launch', category: 'Navegación', action: () => this.navigateTo('/demo', 'Demo') },
      { id: 'profile', label: 'Ir a Perfil', icon: 'person', category: 'Navegación', action: () => this.navigateTo('/profile', 'Perfil') },
      { id: 'settings', label: 'Ir a Configuración', icon: 'settings', category: 'Navegación', action: () => this.navigateTo('/settings', 'Configuración') },
      { id: 'theme-light', label: 'Cambiar a tema claro', icon: 'light_mode', category: 'Tema', action: () => this.toggleTheme('light') },
      { id: 'theme-dark', label: 'Cambiar a tema oscuro', icon: 'dark_mode', category: 'Tema', action: () => this.toggleTheme('dark') },
      { id: 'refresh', label: 'Actualizar página', icon: 'refresh', category: 'Sistema', action: () => this.refreshPage() },
      { id: 'help', label: 'Mostrar ayuda', icon: 'help', category: 'Sistema', action: () => this.showHelp() },
      { id: 'notifications', label: 'Ver notificaciones', icon: 'notifications', category: 'Sistema', action: () => this.showNotifications() },
    ];
  }

  navigateTo(route: string, name: string): void {
    this.router.navigate([route]);
    this.toastr.info(`Navegando a ${name}`, 'Navegación', {
      timeOut: 1500
    });
  }

  refreshPage(): void {
    this.toastr.info('Actualizando página...', 'Sistema', {
      timeOut: 1500
    });
    setTimeout(() => window.location.reload(), 500);
  }

  showHelp(): void {
    this.toastr.info('Presiona Ctrl+K para abrir este menú en cualquier momento', 'Ayuda', {
      timeOut: 4000,
      positionClass: 'toast-top-center'
    });
  }

  showNotifications(): void {
    this.toastr.info('No hay nuevas notificaciones', 'Notificaciones', {
      timeOut: 2000
    });
  }

  ngOnInit(): void {
    this.filteredCommands = this.commands;
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent): void {
    // Ctrl+K o Cmd+K para abrir
    if ((event.ctrlKey || event.metaKey) && event.key === 'k') {
      event.preventDefault();
      this.toggle();
    }

    // Escape para cerrar
    if (event.key === 'Escape' && this.isOpen) {
      this.close();
    }

    // Navegación con flechas
    if (this.isOpen) {
      if (event.key === 'ArrowDown') {
        event.preventDefault();
        this.selectedIndex = Math.min(this.selectedIndex + 1, this.filteredCommands.length - 1);
      } else if (event.key === 'ArrowUp') {
        event.preventDefault();
        this.selectedIndex = Math.max(this.selectedIndex - 1, 0);
      } else if (event.key === 'Enter') {
        event.preventDefault();
        if (this.filteredCommands[this.selectedIndex]) {
          this.executeCommand(this.filteredCommands[this.selectedIndex]);
        }
      }
    }
  }

  toggle(): void {
    this.isOpen = !this.isOpen;
    if (this.isOpen) {
      this.searchQuery = '';
      this.filteredCommands = this.commands;
      this.selectedIndex = 0;
      setTimeout(() => {
        const input = document.querySelector('.command-input') as HTMLInputElement;
        input?.focus();
      }, 100);
    }
  }

  close(): void {
    this.isOpen = false;
    this.searchQuery = '';
  }

  onSearchChange(): void {
    if (!this.searchQuery.trim()) {
      this.filteredCommands = this.commands;
    } else {
      const query = this.searchQuery.toLowerCase();
      this.filteredCommands = this.commands.filter(cmd =>
        cmd.label.toLowerCase().includes(query) ||
        cmd.category.toLowerCase().includes(query)
      );
    }
    this.selectedIndex = 0;
  }

  executeCommand(command: Command): void {
    command.action();
    this.close();
  }

  toggleTheme(theme: 'light' | 'dark'): void {
    this.themeService.setTheme(theme);
    this.toastr.success(`Tema ${theme === 'dark' ? 'oscuro' : 'claro'} activado`, 'Tema', {
      timeOut: 2000
    });
  }
}

