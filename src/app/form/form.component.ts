import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  contactMethods = [
    {id: 1, name:'Email' },
    {id: 2, name: 'Phone'}
  ]
  log(firstName){
    console.log(firstName)
  }
  constructor() { }

  ngOnInit() {
  }

}
