import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Combo } from '../combo';
import { ComboClientService } from '../combo-client.service';
@Component({
  selector: 'app-comboeach',
  templateUrl: './comboeach.component.html',
  styleUrls: ['./comboeach.component.css']
})
export class ComboeachComponent {
  combo = new Combo() 
  id: string = '' 
  errMessage: string = ''

  constructor(private _service: ComboClientService, private _router: Router, private _activeroute: ActivatedRoute) {
    this._activeroute.params.subscribe(params => {
      this.id = params['id'] //
      if (this.id != null){
        this.searchCombo(this.id)
      } else {
        window.alert('Invalid combo id to show')
        this._router.navigate(['combo'])
      }
    })
  }
  goBack() {
    this._router.navigate(['combo']);
  }
  searchCombo(comboId: string) {
    this._service.getCombo(comboId).subscribe({
      next: (data) => { this.combo = data },
      error: (err) => { this.errMessage = err },
    })
  }
}
