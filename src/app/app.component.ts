import { Component } from '@angular/core';
import { faShareAlt } from '@fortawesome/free-solid-svg-icons';

import data from "./helper";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'artist-ui';
  faShareAlt = faShareAlt;
  artistData: any;

  ngOnInit() {
    this.artistData = data;
  }
}
