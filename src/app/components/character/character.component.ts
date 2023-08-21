import { Component, Input } from '@angular/core';
import { Character } from 'src/app/models/interfaces/character-response.interface';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent {
  @Input() character: any = {};
}
