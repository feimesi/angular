import { Component, OnInit, Output, Input, Directive} from '@angular/core';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  name: string;
  password: string;

  constructor() { }

  ngOnInit() {
  }

  getvalue() {
    console.log(this.name + '////::::::://///' + this.password);
  }

}
