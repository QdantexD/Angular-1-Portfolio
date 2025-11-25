import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  profileForm!: FormGroup;
  user$: Observable<any>;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private toastr: ToastrService
  ) {
    this.user$ = this.userService.currentUser$;
  }

  ngOnInit(): void {
    this.user$.subscribe(user => {
      this.profileForm = this.fb.group({
        name: [user.name, Validators.required],
        email: [user.email, [Validators.required, Validators.email]],
        role: [user.role, Validators.required]
      });
    });
  }

  onSubmit(): void {
    if (this.profileForm.valid) {
      this.userService.updateUser(this.profileForm.value);
      this.toastr.success('Perfil actualizado correctamente', 'Éxito', {
        timeOut: 3000,
        positionClass: 'toast-top-right'
      });
    } else {
      this.toastr.error('Por favor, completa todos los campos requeridos', 'Error', {
        timeOut: 3000
      });
    }
  }
}

