// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-combo-detail',
//   templateUrl: './combo-detail.component.html',
//   styleUrls: ['./combo-detail.component.css']
// })
// export class ComboDetailComponent {

// }
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Combo } from '../combo';
import { ComboAPIService } from '../combo-api.service';
@Component({
    selector: 'app-combo-detail',
    templateUrl: './combo-detail.component.html',
    styleUrls: ['./combo-detail.component.css']
  })
export class ComboDetailComponent {
  id: string = ''
  combo = new Combo() // combo data to show
  errMessage: string = ''

  constructor(private _service: ComboAPIService, private _router: Router, private _activeroute: ActivatedRoute) {
    this._activeroute.params.subscribe(params => {
      this.id = params['id'] //
      if (this.id != null){
        this.searchCombo(this.id)
      } else {
        window.alert('Invalid combo id to show')
        this._router.navigate(['/combos'])
      }
    })
  }

  searchCombo(comboId: string) {
    this._service.getCombo(comboId).subscribe({
      next: (data) => { this.combo = data },
      error: (err) => { this.errMessage = err },
    })
  }
  goBack() {
    this._router.navigate(['admincombo']);
  }
}