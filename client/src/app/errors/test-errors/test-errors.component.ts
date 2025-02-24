import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-test-errors',
  standalone: true,
  imports: [],
  templateUrl: './test-errors.component.html',
  styleUrl: './test-errors.component.css'
})
export class TestErrorsComponent {
  basrUrl = environment.apiUrl;
  private http = inject(HttpClient);
  validationErros: string[] = [];
  get400Error() {
    this.http.get(this.basrUrl + "buggy/bad-request").subscribe({
      next: response => console.log(response),
      error: error => console.log(error),
      complete: () => console.log("Request has completed")

    })
  }
  get401Error() {
    this.http.get(this.basrUrl + "buggy/auth").subscribe({
      next: response => console.log(response),
      error: error => console.log(error),
      complete: () => console.log("Request has completed")

    })
  }
  get404Error() {
    this.http.get(this.basrUrl + "buggy/not-found").subscribe({
      next: response => console.log(response),
      error: error => console.log(error),
      complete: () => console.log("Request has completed")

    })
  }
  get500Error() {
    this.http.get(this.basrUrl + "buggy/server-error").subscribe({
      next: response => console.log(response),
      error: error => console.log(error),
      complete: () => console.log("Request has completed")

    })
  }
  get400ValidationError() {
    this.http.post(this.basrUrl + "account/register", {}).subscribe({
      next: response => console.log(response),
      error: error => {
        console.log(error)
        this.validationErros = error;
      },

    })
  }
}

