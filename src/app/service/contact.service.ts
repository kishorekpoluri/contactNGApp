import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import {Contact} from "../model/contact";
import {Observable} from "rxjs/index";

@Injectable()
export class ContactService {

  
    
  constructor(
    private http: HttpClient) { }

    baseUrl: string = 'http://localhost:8080/contacts/';

  list() {
    //let contacts:ContactElement[];
    let url=this.baseUrl;
    return this.http.get<Contact[]>(url, {responseType: 'json'})
      .pipe(
        tap( // Log the result or error
          //data => this.log(url, data),
          //error => this.logError(filename, error)
        )
      );
  }

  get(name:string) {
    //let contacts:ContactElement[];
    let url=this.baseUrl+name;
    return this.http.get<Contact>(url, {responseType: 'json'})
      .pipe(
        tap( // Log the result or error
          //data => this.log(url, data),
          //error => this.logError(filename, error)
        )
      );
  }

  delete(name:string) {
    //let contacts:ContactElement[];
    let url=this.baseUrl+"/"+name;
    return this.http.delete(url)
      .pipe(
        tap( // Log the result or error
          //data => this.log(url, data),
          //error => this.logError(filename, error)
        )
      );
  }

  add(contact:Contact) {
    //let contacts:ContactElement[];
    let url=this.baseUrl;
    return this.http.post<Contact>(url,contact, {responseType: 'json'})
      .pipe(
        tap( // Log the result or error
          //data => this.log(url, data),
          //error => this.logError(filename, error)
        )
      );
  }

  update(contact:Contact) {
    //let contacts:ContactElement[];
    let url=this.baseUrl;
    return this.http.put<Contact>(url,contact, {responseType: 'json'})
      .pipe(
        tap( // Log the result or error
          //data => this.log(url, data),
          //error => this.logError(filename, error)
        )
      );
  }

  /*private log(filename: string, data: {}) {
    this.messageService.add(message);
  }

  private logError(filename: string, error: any) {
    const message = `DownloaderService failed to download "${filename}"; got error "${error.message}".`;
    console.error(message);
    this.messageService.add(message);
  }*/
}


/*@Injectable()
export class ApiService {

  constructor(private http: HttpClient) { }
  baseUrl: string = 'http://localhost:8080/users/';

  login(loginPayload) : Observable<ApiResponse> {
    return this.http.post<ApiResponse>('http://localhost:8080/' + 'token/generate-token', loginPayload);
  }

  getUsers() : Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl);
  }

  getUserById(id: number): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl + id);
  }

  createUser(user: User): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrl, user);
  }

  updateUser(user: User): Observable<ApiResponse> {
    return this.http.put<ApiResponse>(this.baseUrl + user.id, user);
  }

  deleteUser(id: number): Observable<ApiResponse> {
    return this.http.delete<ApiResponse>(this.baseUrl + id);
  }
}*/
