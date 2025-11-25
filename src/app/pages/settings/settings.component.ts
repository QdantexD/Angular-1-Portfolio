import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PersonalizationService } from '../../services/personalization.service';
import { ThemeService } from '../../services/theme.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  settingsForm!: FormGroup;
  currentTheme: string = 'light';

  constructor(
    private fb: FormBuilder,
    private personalizationService: PersonalizationService,
    private themeService: ThemeService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    const settings = this.personalizationService.getSettings();
    this.currentTheme = this.themeService.getCurrentTheme();

    this.settingsForm = this.fb.group({
      layout: [settings.layout],
      density: [settings.density],
      animations: [settings.animations],
      notifications: [settings.notifications],
      language: [settings.language],
      timezone: [settings.timezone],
      dateFormat: [settings.dateFormat],
      theme: [this.currentTheme]
    });

    this.settingsForm.valueChanges.subscribe(values => {
      if (values.theme !== this.currentTheme) {
        this.themeService.setTheme(values.theme);
        this.currentTheme = values.theme;
      }
      this.personalizationService.updateSettings({
        layout: values.layout,
        density: values.density,
        animations: values.animations,
        notifications: values.notifications,
        language: values.language,
        timezone: values.timezone,
        dateFormat: values.dateFormat
      });
    });
  }

  onThemeChange(theme: string): void {
    this.themeService.setTheme(theme as 'light' | 'dark');
    this.currentTheme = theme;
  }
}

