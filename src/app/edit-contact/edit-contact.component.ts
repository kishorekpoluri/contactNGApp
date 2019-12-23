import { Component, OnInit } from '@angular/core';
import {Contact} from '../model/contact';
import { ContactService } from '../service/contact.service';
import { ActivatedRoute , ParamMap } from '@angular/router';
import {Router} from "@angular/router";
import { switchMap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.scss'],
  providers: [ ContactService ]
})
export class EditContactComponent implements OnInit {

  contact:Contact;
  constructor(private contactService:ContactService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit() {
    let name=this.route.snapshot.paramMap.get('name');
    /*let name = this.route.paramMap.pipe(switchMap((params: ParamMap) =>
        of(params.get('name'))
    ));*/
    this.contact=new Contact();
    this.contactService.get(name)
      .subscribe(contact=>{
        this.contact=contact;
      })
  }

  onSubmit(){
    this.contactService.update(this.contact)
      .subscribe(response=>{
        this.router.navigate(['contacts']);
      })
  }

  cancel(){
    this.router.navigate(['contacts']);
  }

}
