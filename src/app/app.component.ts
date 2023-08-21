import { Component } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-rick-morty';

  constructor(private sanitizer: DomSanitizer) { }

  getAssetImage(): SafeUrl {
    const imageUrl = '../assets/images/rick-morty.png'; // Path to your image in the assets folder
    return this.sanitizer.bypassSecurityTrustUrl(imageUrl);
  }
}
