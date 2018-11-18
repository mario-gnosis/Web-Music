import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SharedService } from '../../services/shared.service';
import { ResponseApi } from '../../model/response-api';
import { SongsService } from '../../services/songs/songs.service';
// import { Songs } from '../../model/song.model';
// import { forEach } from '@angular/router/src/utils/collection';
import { Songs } from './../../model/song.model';
import { formArrayNameProvider } from '@angular/forms/src/directives/reactive_directives/form_group_name';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  shared: SharedService;
  message: {};

  // songs = new Songs('', 'Joais', 'oasis', 'teste', 'asdasd', 'dasd');
  songs = new Songs('', '', '', '', '', '');

  classCss: { 'alert': boolean; };

  constructor(private router: Router,
              private route: ActivatedRoute,
              private _SongsService: SongsService) {
    this.shared = SharedService.getInstance();
   }

  ngOnInit() {
    const id: string = this.route.snapshot.params['id'];

    if (id !== undefined) {
      this.list(id);
    }
  }

  onclick() {
    this.router.navigate(['/favorites']);
    alert('Teste');
  }

  list(id: string) {
    console.log('id --> ', id);
    this._SongsService.findById(id).subscribe((responseApi: ResponseApi) => {
      console.log('responseApi -->  ', responseApi);
      this.songs = responseApi.data;
  } , err => {
      this.showMessage({
        type: 'error',
        text: err['error']['errors'][0]
      });
    });
  }

  private showMessage(message: {type: string, text: string}): void {
    this.message = message;
    setTimeout(() => {
      this.message = undefined;
    }, 3000);
  }

}
