import { Component, OnInit } from '@angular/core';
import { ApiRequestService } from 'src/app/services/api-request.service';
import { CharactersComponent } from '../characters/characters.component';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.scss']
})
export class DetailPageComponent implements OnInit {

  constructor(private characters: CharactersComponent) { }

  Id: number
  index:number; 

  ngOnInit(): void {
  }

  getDetail(): void{
    this.characters.personajes[this.index].id
  }

}
