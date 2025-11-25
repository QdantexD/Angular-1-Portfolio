import { Component, OnInit } from '@angular/core';
import { ThemeService, ThemeColors } from '../../services/theme.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-theme-customizer',
  templateUrl: './theme-customizer.component.html',
  styleUrls: ['./theme-customizer.component.scss']
})
export class ThemeCustomizerComponent implements OnInit {
  isOpen: boolean = false;
  colors: ThemeColors = {
    primary: '#3f51b5',
    secondary: '#ff4081',
    accent: '#00bcd4',
    background: '#f5f5f5',
    surface: '#ffffff'
  };

  presetColors = [
    { name: 'Azul', primary: '#3f51b5', secondary: '#ff4081', accent: '#00bcd4' },
    { name: 'Verde', primary: '#4caf50', secondary: '#ff9800', accent: '#8bc34a' },
    { name: 'Púrpura', primary: '#9c27b0', secondary: '#e91e63', accent: '#673ab7' },
    { name: 'Naranja', primary: '#ff9800', secondary: '#f44336', accent: '#ff5722' }
  ];

  constructor(
    private themeService: ThemeService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.colors = this.themeService.getCurrentColors();
    this.themeService.colors$.subscribe(colors => {
      this.colors = colors;
    });
  }

  toggle(): void {
    this.isOpen = !this.isOpen;
  }

  updateColor(colorKey: keyof ThemeColors, value: string): void {
    this.themeService.setColors({ [colorKey]: value });
    this.toastr.info(`Color ${colorKey} actualizado`, 'Personalización', {
      timeOut: 1500
    });
  }

  applyPreset(preset: any): void {
    this.themeService.setColors({
      primary: preset.primary,
      secondary: preset.secondary,
      accent: preset.accent
    });
    this.toastr.success(`Tema "${preset.name}" aplicado`, 'Personalización', {
      timeOut: 2000
    });
  }
}

