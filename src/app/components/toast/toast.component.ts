import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-toast',
  template: ''
})
export class ToastComponent {
  constructor(private toastr: ToastrService) {}

  showSuccess(message: string, title?: string): void {
    this.toastr.success(message, title || 'Éxito', {
      timeOut: 3000,
      positionClass: 'toast-top-right',
      progressBar: true,
      closeButton: true
    });
  }

  showError(message: string, title?: string): void {
    this.toastr.error(message, title || 'Error', {
      timeOut: 4000,
      positionClass: 'toast-top-right',
      progressBar: true,
      closeButton: true
    });
  }

  showWarning(message: string, title?: string): void {
    this.toastr.warning(message, title || 'Advertencia', {
      timeOut: 3500,
      positionClass: 'toast-top-right',
      progressBar: true,
      closeButton: true
    });
  }

  showInfo(message: string, title?: string): void {
    this.toastr.info(message, title || 'Información', {
      timeOut: 3000,
      positionClass: 'toast-top-right',
      progressBar: true,
      closeButton: true
    });
  }
}

