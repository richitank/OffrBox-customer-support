import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { StoreSignup } from '../storeSignup.service';
import { HttpClient } from "@angular/common/http";


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(/*private authService: AuthService,*/ private storeCustomerInfo: StoreSignup, private http: HttpClient /*private mailer: Mailer */) { }

  ngOnInit() {
  }

  info = [{}];

  onSend(form: NgForm) {
    //this.authService.isAuthenticated()
    
    const customerName = form.value.customerName;
    const email = form.value.email;
    const subject = form.value.subject;
    const comment = form.value.comment;

    this.info.push({
      customerName: customerName ,
      email: email,
      subject: subject,
      comment: comment
    });
    
    
    
    this.storeCustomerInfo.storeInfo(this.info)
      .subscribe(
          (response) => console.log(response),
          (error) => console.log(error)
      );


    //  const infoSentToServer = {email: applicantEmail, /*screeningCost: option,*/ ownerfirstName: firstName}
    //  this.http.post<{message: string}>('http://localhost:3000/api/welcome', infoSentToServer)
    //  .subscribe((responseData) => {
    //      console.log(responseData.message);         
    //  })

      
    }
    
    // addAnotherApplicant(){
    //   console.log("addAnotherApplicant testing");
    // }

}
