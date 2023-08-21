import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-characters-page',
  templateUrl: './characters-page.component.html',
  styleUrls: ['./characters-page.component.scss']
})
export class CharactersPageComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getCharacters().subscribe(res => console.log(res))
  }

}
