import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { ThemeService } from '../../services/theme.service';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() toggleSidebar = new EventEmitter<void>();
  
  userName$: Observable<string>;
  currentTheme$: Observable<string>;
  user$: Observable<any>;

  constructor(
    public userService: UserService,
    private themeService: ThemeService,
    private toastr: ToastrService
  ) {
    this.userName$ = this.userService.currentUser$.pipe(
      map(user => user.name)
    );
    this.user$ = this.userService.currentUser$;
    this.currentTheme$ = this.themeService.currentTheme$;
  }

  ngOnInit(): void {}

  onToggleSidebar(): void {
    this.toggleSidebar.emit();
  }

  toggleTheme(): void {
    const current = this.themeService.getCurrentTheme();
    const newTheme = current === 'light' ? 'dark' : 'light';
    this.themeService.setTheme(newTheme);
    this.toastr.success(`Tema ${newTheme === 'dark' ? 'oscuro' : 'claro'} activado`, 'Tema', {
      timeOut: 2000,
      positionClass: 'toast-top-right'
    });
  }
}

