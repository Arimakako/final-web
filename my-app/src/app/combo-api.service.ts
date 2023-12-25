// import { HttpClient, HttpErrorResponse, HttpHeaders } from
// '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { catchError, map, Observable, retry, throwError } from 'rxjs';
// import { Combo } from './combo';
// @Injectable({
// providedIn: 'root'
// })
// export class ComboAPIService {
// constructor(private _http: HttpClient) { }
// getCombos():Observable<any>
// {
// const headers=new HttpHeaders().set("Content-Type","text/plain;charset=utf8")
// const requestOptions:Object={
// headers:headers,
// responseType:"text"
// }
// return this._http.get<any>("/combos",requestOptions).pipe(
// map(res=>JSON.parse(res) as Array<Combo>),
// retry(3),
// catchError(this.handleError))
// }
// handleError(error:HttpErrorResponse){
// return throwError(()=>new Error(error.message))
// }
// postCombo(aCombo:Combo):Observable<any>
// {
// const headers=new HttpHeaders().set("ContentType","application/json;charset=utf-8")
// const requestOptions:Object={
// headers:headers,
// responseType:"text"
// }
// return this._http.post<any>("/combos",JSON.stringify(aCombo),requestOptions).pipe(
// map(res=>JSON.parse(res) as Combo),
// retry(3),
// catchError(this.handleError))
// }
// putCombo(aCombo:any):Observable<any>
// {
// const headers=new HttpHeaders().set("ContentType","application/json;charset=utf-8")
// const requestOptions:Object={
// headers:headers,
// responseType:"text"
// }
// return this._http.put<any>("/combos",JSON.stringify(aCombo),requestOptions).pipe(
// map(res=>JSON.parse(res) as Array<Combo>),
// retry(3),
// catchError(this.handleError))
// }
// deleteCombo(_id:string):Observable<any>
// {
// const headers=new HttpHeaders().set("ContentType","application/json;charset=utf-8")
// const requestOptions:Object={
// headers:headers,
// responseType:"text"
// }
// return this._http.delete<any>("/combos/"+_id,requestOptions).pipe(
// map(res=>JSON.parse(res) as Array<Combo>),
// retry(3),
// catchError(this.handleError))
// }
// }

import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, retry, throwError } from 'rxjs';
import { Combo } from './combo'

@Injectable({
  providedIn: 'root'
})
export class ComboAPIService {

  constructor(private _http: HttpClient) { }
getCombos():Observable<any>
{
const headers=new HttpHeaders().set("Content-Type","text/plain;charset=utf- 8")
const requestOptions:Object={
headers:headers,
responseType:"text"
}
return this._http.get<any>("/combos",requestOptions).pipe(
map(res=>JSON.parse(res) as Array<Combo>),
retry(3),
catchError(this.handleError))
}

  // get combo by id
  getCombo(comboId: string): Observable<any> {
    const headers = new HttpHeaders().set("Content-Type", "text/plain;charset=utf-8")
    const requestOptions: Object = {
      headers: headers,
      responseType: "text"
    }
    return this._http.get<any>("/combos/" + comboId, requestOptions).pipe(
      map(res => JSON.parse(res) as Array<Combo>),
      retry(3),
      catchError(this.handleError))
  }

  // post new combo
  postCombo(acombo: Combo): Observable<any> {
    const headers = new HttpHeaders().set("Content-Type", "application/json;charset=utf-8")
    const requestOptions: Object = {
      headers: headers,
      responseType: "text"
    }
    return this._http.post<any>("/combos/", JSON.stringify(acombo), requestOptions).pipe(
      map(res => JSON.parse(res) as Array<Combo>),
      retry(3),
      catchError(this.handleError))
  }

  // put combo
  putCombo(acombo: Combo): Observable<any> {
    const headers = new HttpHeaders().set("Content-Type", "application/json;charset=utf-8")
    const requestOptions: Object = {
      headers: headers,
      responseType: "text"
    }
    return this._http.put<any>("/combos", JSON.stringify(acombo), requestOptions).pipe(
      map(res => JSON.parse(res) as Array<Combo>),
      retry(3),
      catchError(this.handleError))
  }

  // delete combo
  deleteCombo(comboId: string): Observable<any> {
    const headers = new HttpHeaders().set("Content-Type", "application/json;charset=utf-8")
    const requestOptions: Object = {
      headers: headers,
      responseType: "text"
    }
    return this._http.delete<any>("/combos/" + comboId, requestOptions).pipe(
      map(res => JSON.parse(res) as Array<Combo>),
      retry(3),
      catchError(this.handleError))
  }

  handleError(error: HttpErrorResponse) {
    return throwError(() => new Error(error.message))
  }

  

}