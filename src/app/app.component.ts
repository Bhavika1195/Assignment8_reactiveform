import { Component } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reactiveform';

  submitForm= new FormGroup({
    user:new FormControl(''),
    email:new FormControl(''),
    password:new FormControl('')
  })
  submituser()
  {
    console.warn(this.submitForm.value)
  }
}
