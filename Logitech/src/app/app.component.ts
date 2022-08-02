import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Logitech';

  constructor (private spinner: NgxSpinnerService) {}

  ngOnInit() {
    /* Spinner Starts on init */
    this.spinner.show();

    /* spinner ends after 10 seconds */
    setTimeout(() => {
      this.spinner.hide();
    }, 10000);
  }
}
