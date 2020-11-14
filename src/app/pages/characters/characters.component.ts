import { Component, OnInit } from '@angular/core';
import { APIResponse } from 'src/app/models/apiresponse';
import { Character } from 'src/app/models/character';
import { ApiRequestService } from 'src/app/services/api-request.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {

  informacion: APIResponse ;
  personajes: Array<Character> = []

  constructor(private apiRequest: ApiRequestService) { }

  ngOnInit(): void {
    this.getCharacter();
  }

  getCharacter(): void{
    this.apiRequest.getAllCharacters().then(response=>{
      console.log('response', response);
      this.informacion=response.data;
      this.personajes=response.data.results

    }).catch(error=>{});
  }

}
