import { Component, NgModule  } from '@angular/core';
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  onSend(form: NgForm) {
    alert("Feedback Received. You'll be contacted in 24 hours.");

    console.log(form.value);
  }
}
