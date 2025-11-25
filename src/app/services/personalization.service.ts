import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface PersonalizationSettings {
  layout: 'grid' | 'list' | 'compact';
  density: 'comfortable' | 'compact' | 'spacious';
  animations: boolean;
  notifications: boolean;
  language: string;
  timezone: string;
  dateFormat: string;
}

@Injectable({
  providedIn: 'root'
})
export class PersonalizationService {
  private settingsSubject = new BehaviorSubject<PersonalizationSettings>({
    layout: 'grid',
    density: 'comfortable',
    animations: true,
    notifications: true,
    language: 'es',
    timezone: 'America/Mexico_City',
    dateFormat: 'DD/MM/YYYY'
  });

  public settings$: Observable<PersonalizationSettings> = this.settingsSubject.asObservable();

  constructor() {
    this.loadSettings();
  }

  updateSettings(settings: Partial<PersonalizationSettings>): void {
    const currentSettings = this.settingsSubject.value;
    const newSettings = { ...currentSettings, ...settings };
    this.settingsSubject.next(newSettings);
    localStorage.setItem('personalizationSettings', JSON.stringify(newSettings));
  }

  getSettings(): PersonalizationSettings {
    return this.settingsSubject.value;
  }

  private loadSettings(): void {
    const saved = localStorage.getItem('personalizationSettings');
    if (saved) {
      try {
        const settings = JSON.parse(saved);
        this.settingsSubject.next(settings);
      } catch (e) {
        console.error('Error loading personalization settings:', e);
      }
    }
  }
}

