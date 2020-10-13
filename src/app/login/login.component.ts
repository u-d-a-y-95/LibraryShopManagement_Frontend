import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Http } from '../http.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(
    private http:Http,
    private router:Router,
    private authService:AuthService) { }

  ngOnInit(): void {}

  onClickSubmit(loginForm:NgForm){
    this.http.postData(`login`,{data:loginForm.value})
    .subscribe(result=>{
      if(result){
        this.authService.setToken(result.token)
        this.router.navigate(['dashboard'])

      }
    })
  }

}
