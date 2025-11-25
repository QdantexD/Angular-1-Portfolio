import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-layout-selector',
  templateUrl: './layout-selector.component.html',
  styleUrls: ['./layout-selector.component.scss']
})
export class LayoutSelectorComponent {
  @Input() currentLayout: string = 'grid';
  @Output() layoutChange = new EventEmitter<string>();

  layouts = [
    { value: 'grid', icon: 'grid_view', label: 'Grid' },
    { value: 'list', icon: 'view_list', label: 'Lista' },
    { value: 'compact', icon: 'view_module', label: 'Compacto' }
  ];

  selectLayout(layout: string): void {
    this.currentLayout = layout;
    this.layoutChange.emit(layout);
  }
}

