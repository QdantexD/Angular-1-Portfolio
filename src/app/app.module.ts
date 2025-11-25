import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ToastrModule } from 'ngx-toastr';
import { NgChartsModule } from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './shared/material.module';

import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { DemoComponent } from './pages/demo/demo.component';
import { ThemeCustomizerComponent } from './components/theme-customizer/theme-customizer.component';
import { WidgetCardComponent } from './components/widget-card/widget-card.component';
import { StatsCardComponent } from './components/stats-card/stats-card.component';
import { ColorPickerComponent } from './components/color-picker/color-picker.component';
import { LayoutSelectorComponent } from './components/layout-selector/layout-selector.component';
import { ChartWidgetComponent } from './components/chart-widget/chart-widget.component';
import { CommandPaletteComponent } from './components/command-palette/command-palette.component';
import { QuickActionsComponent } from './components/quick-actions/quick-actions.component';
import { ToastComponent } from './components/toast/toast.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    DashboardComponent,
    ProfileComponent,
    SettingsComponent,
    DemoComponent,
    ThemeCustomizerComponent,
    WidgetCardComponent,
    StatsCardComponent,
    ColorPickerComponent,
    LayoutSelectorComponent,
    ChartWidgetComponent,
    CommandPaletteComponent,
    QuickActionsComponent,
    ToastComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule,
    DragDropModule,
    NgChartsModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
      progressBar: true,
      closeButton: true,
      enableHtml: true
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

