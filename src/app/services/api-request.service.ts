import { Injectable } from '@angular/core';
import Axios, { AxiosResponse } from 'axios';
import { stringify } from 'querystring';
import { APIResponse } from '../models/apiresponse';

@Injectable({
  providedIn: 'root'
})
export class ApiRequestService {
  API_URL = `https://rickandmortyapi.com/api/character`;
  
  
  constructor() { }

  getAllCharacters(): Promise<AxiosResponse<APIResponse>>{
    return Axios.get(this.API_URL);
  }

  


  
}
