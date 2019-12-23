import { Component, OnInit } from '@angular/core';
import { ContactService } from '../service/contact.service';
import { Contact } from '../model/contact';
import {Router} from "@angular/router";
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-contacts',
  templateUrl: './list-contacts.component.html',
  styleUrls: ['./list-contacts.component.scss'],
  providers: [ ContactService ]
})
export class ListContactsComponent implements OnInit {

  displayedColumns: string[] = ['name','phone','email','edit','delete'];
  dataSource=new MatTableDataSource<Contact>();

  constructor(private contactService:ContactService,private router:Router) { }

  ngOnInit() {
    this.contactService.list()
      .subscribe(contacts => (this.dataSource.data= contacts));
  }

  delete(name:string){
    this.contactService.delete(name)
    .subscribe(response=>{
      let data=this.dataSource.data;
      let index=data.findIndex((contact)=>{
        return contact.name===name;
      })
      data.splice(index,1);
      this.dataSource.data=data;
    });
  }

  editContact(name){
    this.router.navigate(['contacts/edit/'+name]);
  }

  newContact(): void {
    this.router.navigate(['contacts/new']);
  };

}
