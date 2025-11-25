import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface QuickAction {
  id: string;
  label: string;
  icon: string;
  color?: string;
  action: () => void;
}

@Component({
  selector: 'app-quick-actions',
  templateUrl: './quick-actions.component.html',
  styleUrls: ['./quick-actions.component.scss']
})
export class QuickActionsComponent implements OnInit {
  @Input() actions: QuickAction[] = [];
  @Input() isOpen: boolean = false;
  @Output() actionSelected = new EventEmitter<QuickAction>();

  defaultActions: QuickAction[] = [];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.defaultActions = [
      {
        id: 'new',
        label: 'Nuevo',
        icon: 'add',
        color: 'primary',
        action: () => console.log('Nuevo')
      },
      {
        id: 'search',
        label: 'Buscar',
        icon: 'search',
        color: 'accent',
        action: () => console.log('Buscar')
      },
      {
        id: 'settings',
        label: 'Configuración',
        icon: 'settings',
        color: 'primary',
        action: () => this.router.navigate(['/settings'])
      },
      {
        id: 'help',
        label: 'Ayuda',
        icon: 'help',
        color: 'accent',
        action: () => console.log('Ayuda')
      }
    ];
  }

  get displayActions(): QuickAction[] {
    return this.actions.length > 0 ? this.actions : this.defaultActions;
  }

  onActionClick(action: QuickAction): void {
    action.action();
    this.actionSelected.emit(action);
  }
}

