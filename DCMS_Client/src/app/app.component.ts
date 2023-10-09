import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DCMS_Client';

  constructor(private toastrService: ToastrService) {
  }

  public showSuccess(): void {
    this.toastrService.success('Message Success!', 'Toastr Success!');
  }

  public showInfo(): void {
    this.toastrService.info('Message Info!', 'Toastr Info!');
  }

  public showWarning(): void {
    this.toastrService.warning('Message Warning!', 'Toastr Warning!');
  }

  public showError(): void {
    this.toastrService.error('Message Error!', 'Toastr Error!');
  }
}
