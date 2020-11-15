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

  personajes: Array<Character> = []
  next: string = "//?page="
  sig: boolean = false
  contador: number = 1

  constructor(private apiRequest: ApiRequestService) { }

  ngOnInit(): void {
    this.getCharacters();
    
    
  }

  getCharacters(): void{
    this.apiRequest.getAllCharacters().then(response=>{
      console.log('response', response);
      this.personajes=response.data.results;
      
    }).catch(error=>{});
  }

  getNextPage(): void{
    this.contador +=1
    this.next ="//?page=" + this.contador.toString()
    console.log('contador', this.contador)
    console.log('next', this.next)
  }

  getPreviousPage(): void{
    this.contador -=1
    this.next ="//?page=" + this.contador.toString()
    console.log('contador', this.contador)
    console.log('next', this.next)
  }

}
