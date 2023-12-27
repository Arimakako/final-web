import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Combo } from '../combo';
import { ComboAPIService } from '../combo-api.service';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, retry, throwError } from 'rxjs';
// import {AngularEditorConfig} from '@kolkov/angular-editor'
@Component({
    selector: 'app-combo-update',
    templateUrl: './combo-update.component.html',
    styleUrls: ['./combo-update.component.css']
  })
export class ComboUpdateComponent {
  combo = new Combo();
  combos: any;
  errMessage: string = ''
  constructor(private _service: ComboAPIService, private router: Router, private activateRoute: ActivatedRoute) {
    activateRoute.paramMap.subscribe((param) => {
      let id = param.get('id');
      if (id != null) {
        this.searchCombo(id);
      }
    });
  }
  public setCombo(f: Combo) {
    this.combo = f
  }
  searchCombo(Id: string) {
    this._service.getCombo(Id).subscribe({
      next: (data) => {
        this.combo = data;
      },
      error: (err) => {
        this.errMessage = err;
      },
    });
  }
  putCombo() {
    if(this.combo && this.combo._id) {
      this._service.putCombo(this.combo._id, this.combo).subscribe({
        next: (data) => { 
          this.combos = data; 
          alert('Edit combo success');
          this.goBack();
        },
        error: (err) => { 
          this.errMessage = err; 
          console.error('Error updating combo:', err);
        }
      });
    } else {
      console.error('combo ID or data is missing');
    }
  }

  goBack() {
    this.router.navigate(['combo-admin']);
  }
  onFileSelected(event: any, combo: Combo) {
    let me = this;
    let file = event.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      combo.img = reader.result!.toString();
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
  };

}