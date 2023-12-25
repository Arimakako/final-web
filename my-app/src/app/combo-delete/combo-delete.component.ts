// // import { Component } from '@angular/core';
// // import { ComboAPIService } from '../combo-api.service';
// // @Component({
// //   selector: 'app-combo-delete',
// //   templateUrl: './combo-delete.component.html',
// //   styleUrls: ['./combo-delete.component.css']
// // })
// // export class ComboDeleteComponent {
// //   combos: any
// //   comboId: string = ''
// //   errMessage: string = ''

// //   constructor(private _service: ComboAPIService) {
// //     this._service.getCombos().subscribe({
// //       next: (data) => { this.combos = data },
// //       error: (err) => { this.errMessage = err },
// //     })
// //   }

// //   // delete combo
// //   deleteCombo(comboId: string) {
// //     if (this.validate(comboId)) {
// //       this._service.deleteCombo(comboId).subscribe({
// //         next: (data) => {
// //           this.combos = data,
// //             this.errMessage = 'Delete successfully',
// //             this.reset(),
// //             this.getCombos()
// //         },
// //         error: (err) => { this.errMessage = err },
// //       })
// //     }
// //   }

// //   // get combos
// //   getCombos() {
// //     this._service.getCombos().subscribe({
// //       next: (data) => { this.combos = data },
// //       error: (err) => { this.errMessage = err },
// //     })
// //   }

// //   // reset
// //   reset() {
// //     this.comboId = ''
// //     this.errMessage = ''
// //   }

// //   // validate
// //   validate(comboId: string) {
// //     if (comboId == '') {
// //       this.errMessage = 'Please enter combo id'
// //       return false
// //     } else
// //       // check if comboId is hex string or not
// //       if (!/^[0-9a-fA-F]{24}$/.test(comboId)) {
// //         this.errMessage = 'Combo id is not hex string'
// //         return false
// //       }
// //       else {
// //         this.errMessage = ''
// //         return true
// //       }
// //   }
// // }
import { Component } from '@angular/core';
import {ComboAPIService} from '../combo-api.service'
@Component({
    selector: 'app-combo-delete',
    templateUrl: './combo-delete.component.html',
    styleUrls: ['./combo-delete.component.css']
  })
export class ComboDeleteComponent {
  combos: any
  comboId: string = ''
  errMessage: string = ''

  constructor(private _service: ComboAPIService) {
    this._service.getCombos().subscribe({
      next: (data) => { this.combos = data },
      error: (err) => { this.errMessage = err },
    })
  }

  // delete combo
  deleteCombo(Id: any) {
    if (this.validate(Id)) {
      this._service.deleteCombo(Id).subscribe({
        next: (data) => {
          this.combos = data,
            this.errMessage = 'Delete successfully',
            this.reset(),
            this.getCombos()
        },
        error: (err) => { this.errMessage = err },
      })
    }
  }

  // get combos
  getCombos() {
    this._service.getCombos().subscribe({
      next: (data) => { this.combos = data },
      error: (err) => { this.errMessage = err },
    })
  }

  // reset
  reset() {
    this.comboId = ''
    this.errMessage = ''
  }

  // validate
  validate(comboId: string) {
    if (comboId == '') {
      this.errMessage = 'Please enter combo id'
      return false
    } else
      // check if comboId is hex string or not
      if (!/^[0-9a-fA-F]{24}$/.test(comboId)) {
        this.errMessage = 'Combo id is not hex string'
        return false
      }
      else {
        this.errMessage = ''
        return true
      }
  }
}
