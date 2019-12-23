import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {ContactService} from "../service/contact.service";


@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.scss'],
  providers: [ ContactService ]
})
export class NewContactComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,private router: Router, private contactService: ContactService) { }

  newContactForm:FormGroup
  ngOnInit() {
    this.newContactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required]
    });
    console.log(this.newContactForm);
  }

  onSubmit() {
    this.contactService.add(this.newContactForm.value)
      .subscribe( data => {
        this.router.navigate(['contacts']);
      });
  }

  reset() {
    this.newContactForm.reset();
    this.router.navigate(['contacts']);
}

}
