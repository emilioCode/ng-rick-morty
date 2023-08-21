import { Component } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {

  constructor(private sanitizer: DomSanitizer) { }

  getAssetImage(): SafeUrl {
    const imageUrl = '../assets/images/rick-morty.png';
    return this.sanitizer.bypassSecurityTrustUrl(imageUrl);
  }

}
