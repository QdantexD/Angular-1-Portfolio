import { Component, Input, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-stats-card',
  templateUrl: './stats-card.component.html',
  styleUrls: ['./stats-card.component.scss']
})
export class StatsCardComponent implements OnInit, OnDestroy {
  @Input() title: string = '';
  @Input() value: string | number = '';
  @Input() change: number = 0;
  @Input() icon: string = '';
  @Input() color: string = 'primary';
  @Input() animated: boolean = true;
  @Input() clickable: boolean = true;
  @Output() cardClick = new EventEmitter<void>();

  displayValue: string | number = '';
  private animationFrame?: number;
  private startTime?: number;
  private startValue: number = 0;
  private endValue: number = 0;
  private duration: number = 2000;
  private isAnimating: boolean = false;

  constructor(private toastr: ToastrService) {}

  ngOnInit(): void {
    if (this.animated) {
      this.initializeAnimation();
    } else {
      this.displayValue = this.value;
    }
  }

  ngOnDestroy(): void {
    if (this.animationFrame) {
      cancelAnimationFrame(this.animationFrame);
    }
  }

  private initializeAnimation(): void {
    const valueStr = String(this.value);
    const numericMatch = valueStr.match(/[\d,]+/);
    
    if (numericMatch) {
      const numericValue = parseInt(numericMatch[0].replace(/,/g, ''));
      this.startValue = 0;
      this.endValue = numericValue;
      this.startTime = Date.now();
      this.isAnimating = true;
      this.animate();
    } else if (valueStr.includes('$')) {
      const numericValue = parseFloat(valueStr.replace(/[^0-9.]/g, ''));
      this.startValue = 0;
      this.endValue = numericValue;
      this.startTime = Date.now();
      this.isAnimating = true;
      this.animateCurrency();
    } else if (valueStr.includes('%')) {
      const numericValue = parseFloat(valueStr.replace(/[^0-9.]/g, ''));
      this.startValue = 0;
      this.endValue = numericValue;
      this.startTime = Date.now();
      this.isAnimating = true;
      this.animatePercentage();
    } else {
      this.displayValue = this.value;
    }
  }

  private animate(): void {
    if (!this.startTime) return;

    const now = Date.now();
    const elapsed = now - this.startTime;
    const progress = Math.min(elapsed / this.duration, 1);

    // Easing function (ease-out)
    const easeOut = 1 - Math.pow(1 - progress, 3);
    const current = Math.floor(this.startValue + (this.endValue - this.startValue) * easeOut);

    this.displayValue = this.formatNumber(current);

    if (progress < 1) {
      this.animationFrame = requestAnimationFrame(() => this.animate());
    } else {
      this.displayValue = this.value;
      this.isAnimating = false;
    }
  }

  private animateCurrency(): void {
    if (!this.startTime) return;

    const now = Date.now();
    const elapsed = now - this.startTime;
    const progress = Math.min(elapsed / this.duration, 1);

    const easeOut = 1 - Math.pow(1 - progress, 3);
    const current = this.startValue + (this.endValue - this.startValue) * easeOut;

    this.displayValue = '$' + this.formatNumber(Math.floor(current));

    if (progress < 1) {
      this.animationFrame = requestAnimationFrame(() => this.animateCurrency());
    } else {
      this.displayValue = this.value;
      this.isAnimating = false;
    }
  }

  private animatePercentage(): void {
    if (!this.startTime) return;

    const now = Date.now();
    const elapsed = now - this.startTime;
    const progress = Math.min(elapsed / this.duration, 1);

    const easeOut = 1 - Math.pow(1 - progress, 3);
    const current = this.startValue + (this.endValue - this.startValue) * easeOut;

    this.displayValue = current.toFixed(1) + '%';

    if (progress < 1) {
      this.animationFrame = requestAnimationFrame(() => this.animatePercentage());
    } else {
      this.displayValue = this.value;
      this.isAnimating = false;
    }
  }

  private formatNumber(num: number): string {
    return num.toLocaleString('es-ES');
  }

  get changeClass(): string {
    return this.change >= 0 ? 'positive' : 'negative';
  }

  get changeIcon(): string {
    return this.change >= 0 ? 'trending_up' : 'trending_down';
  }

  onCardClick(): void {
    if (this.clickable) {
      this.cardClick.emit();
      this.toastr.info(`Ver detalles de: ${this.title}`, 'Información', {
        timeOut: 2000,
        positionClass: 'toast-top-right'
      });
    }
  }
}

