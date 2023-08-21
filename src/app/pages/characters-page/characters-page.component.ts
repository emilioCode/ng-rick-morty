import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadCharacters, } from 'src/app/state/actions/characters.actions';
import { selectCharacters } from 'src/app/state/selectors/characters.selectors';

@Component({
  selector: 'app-characters-page',
  templateUrl: './characters-page.component.html',
  styleUrls: ['./characters-page.component.scss']
})
export class CharactersPageComponent implements OnInit {

  characters$: Observable<any> = new Observable();

  constructor(private store: Store<any>) { }

  ngOnInit(): void {

    this.characters$ = this.store.select(selectCharacters);

    this.store.dispatch(loadCharacters());

  }

}
