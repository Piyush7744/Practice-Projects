import { Component } from '@angular/core';
import { FormBuilder ,FormGroup,Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practice';
  public data = '';
  login : FormGroup;
constructor(private fb:FormBuilder){
  this.login = this.fb.group({
    name : ['',Validators.required],
    password : ['',[Validators.required,Validators.minLength(6)]]
  })
}

  event1() {
    console.log(this.login.value);
  }
}
