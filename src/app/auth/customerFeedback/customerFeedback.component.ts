import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { StoreCustomerFeedback } from '../storeCustomerFeedback.service';
import { HttpClient } from "@angular/common/http";


@Component({
  selector: 'app-customerFeedback',
  templateUrl: './customerFeedback.component.html',
  styleUrls: ['./customerFeedback.component.css']
})
export class customerFeedbackComponent implements OnInit {

  constructor(private storeCustomerFeedback: StoreCustomerFeedback, private http: HttpClient) { }

  ngOnInit() {
  }

  info = [{}];

  onSend(form: NgForm) {
    
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
    
    
    
    this.storeCustomerFeedback.storeInfo(this.info)
      .subscribe(
          (response) => console.log(response),
          (error) => console.log(error)
      );


     const infoSentToServer = {customerName: customerName, email: email, subject: subject, comment: comment}
     this.http.post<{message: string}>('http://localhost:3000/api/welcome', infoSentToServer)
     .subscribe((responseData) => {
         console.log(responseData.message);         
     })
     alert("Feedback Received. You'll be contacted in 24 hours.")

      
    }

}
