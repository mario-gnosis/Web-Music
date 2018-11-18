import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SharedService } from '../../services/shared.service';
import { ResponseApi } from '../../model/response-api';
import { SongsService } from '../../services/songs/songs.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  shared: SharedService;
  message: {};

  songs: object;

  // songs = new Songs('', '', '', '', '', '');

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
     }

  list1(id: string) {
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

  list(id: string) {
    this._SongsService.findById(id).subscribe((res) => {
      this.songs = res;
    });
  }

  private showMessage(message: {type: string, text: string}): void {
    this.message = message;
    setTimeout(() => {
      this.message = undefined;
    }, 3000);
  }

}
