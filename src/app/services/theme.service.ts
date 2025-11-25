import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface ThemeColors {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  surface: string;
}

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private currentThemeSubject = new BehaviorSubject<string>('light');
  public currentTheme$: Observable<string> = this.currentThemeSubject.asObservable();

  private colorsSubject = new BehaviorSubject<ThemeColors>({
    primary: '#3f51b5',
    secondary: '#ff4081',
    accent: '#00bcd4',
    background: '#f5f5f5',
    surface: '#ffffff'
  });
  public colors$: Observable<ThemeColors> = this.colorsSubject.asObservable();

  constructor() {
    this.loadTheme();
  }

  setTheme(theme: 'light' | 'dark'): void {
    this.currentThemeSubject.next(theme);
    localStorage.setItem('theme', theme);
    this.applyTheme(theme);
  }

  setColors(colors: Partial<ThemeColors>): void {
    const currentColors = this.colorsSubject.value;
    const newColors = { ...currentColors, ...colors };
    this.colorsSubject.next(newColors);
    localStorage.setItem('themeColors', JSON.stringify(newColors));
    this.applyColors(newColors);
  }

  private loadTheme(): void {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' || 'light';
    const savedColors = localStorage.getItem('themeColors');
    
    if (savedColors) {
      try {
        const colors = JSON.parse(savedColors);
        this.colorsSubject.next(colors);
        this.applyColors(colors);
      } catch (e) {
        console.error('Error loading theme colors:', e);
      }
    }
    
    this.setTheme(savedTheme);
  }

  private applyTheme(theme: string): void {
    document.body.className = theme === 'dark' ? 'dark-theme' : '';
  }

  private applyColors(colors: ThemeColors): void {
    const root = document.documentElement;
    root.style.setProperty('--primary-color', colors.primary);
    root.style.setProperty('--secondary-color', colors.secondary);
    root.style.setProperty('--accent-color', colors.accent);
    root.style.setProperty('--background-color', colors.background);
    root.style.setProperty('--surface-color', colors.surface);
  }

  getCurrentTheme(): string {
    return this.currentThemeSubject.value;
  }

  getCurrentColors(): ThemeColors {
    return this.colorsSubject.value;
  }
}

