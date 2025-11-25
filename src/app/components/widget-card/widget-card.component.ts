import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-widget-card',
  templateUrl: './widget-card.component.html',
  styleUrls: ['./widget-card.component.scss']
})
export class WidgetCardComponent {
  @Input() title: string = '';
  @Input() content: string = '';
  @Input() type: 'chart' | 'list' | 'card' = 'card';
  @Input() icon?: string;
}

