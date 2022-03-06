import { HttpEvent, HttpHeaders, HttpRequest, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url=environment.apiUrl;
public isAuthenticated: boolean;
  public userAuthenticated;
  public token;

  constructor(private http: HttpClient) { }


  uploadPhotoProduct(file: File, idProduct): Observable<HttpEvent<{}>>{
    let formData:FormData=new FormData();
    formData.append('file', file)
    const req=new HttpRequest("POST", this.url+"uploadPhoto/"+idProduct, formData,{
      reportProgress:true,
      responseType:"text",
      // headers:new HttpHeaders({'Authorization':this.jwtToken})
    })
    return this.http.request(req)
  }

  public users=[
    {username:"admin", password:"1234", role:["Admin", "User"]},
    {username:"nassira", password:"1234", role:["User"]},
    {username:"hamdi", password:"1234", role:[""]}
  ]



  public login(username, password){
    let user;
    this.users.forEach((u)=>{
      if(u.username==username && u.password==password){
        user=u;
        this.token=btoa(JSON.stringify({username:u.username, role: u.role}))
      }

    });
    if(user){
      this.isAuthenticated=true
      this.userAuthenticated=user
      console.log(this.userAuthenticated)
    }
    else{
      this.isAuthenticated=false
      this.userAuthenticated=undefined
      console.log(this.userAuthenticated)
    }
  }

  public isAdmin(){
    if(this.userAuthenticated){
    if(this.userAuthenticated.role.indexOf("Admin") > -1){
      return true
    }
    return false}
  }

public saveAuthLocalUser(){
  if(this.isAuthenticated){
    localStorage.setItem("authUser", this.token)
  }
}

public loadAuthenticationUserFromLocalStorage(){
  let t=localStorage.getItem("authUser")
  if(t){
    let user=JSON.parse(atob(t))
    console.log(user)
    this.userAuthenticated={username:user.username, role:user.role}
    console.log(this.userAuthenticated)
    this.isAuthenticated=true
    this.token=t
  }
}

removeTokenFromLocalStorage(){
  localStorage.removeItem("authUser")
  this.token=undefined;
  this.userAuthenticated=undefined
  this.isAuthenticated=false
}
}
