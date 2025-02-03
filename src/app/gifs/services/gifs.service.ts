import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchResponse } from '../interfaces/gifs.interface';

@Injectable({providedIn: 'root'})
export class GifsService {
  public gifList:Gif[]=[];
  private _tagsHistory: string[] = [];
  private apiKey: string = '3H2u3D9Y5cTdKHRrxwQodcjCwgF9YJhs';
  private serviceUrl:string = 'https://api.giphy.com/v1/gifs';

  constructor(private http: HttpClient){
    this.loadLocalStorage();
    console.log('gifs service Ready');
  }

  get tagsHistory(){
    return [...this._tagsHistory];//es para crerar una copia de _tagsHistory
  }

  private organizeHistory(tag: string){
    tag = tag.toLowerCase();
    if( this._tagsHistory.includes(tag)){
      this._tagsHistory = this._tagsHistory.filter((oldTag)=>oldTag!== tag)
    }

    this._tagsHistory.unshift(tag);
    this._tagsHistory = this.tagsHistory.slice(0,10);
    this.saveLocalStorage();
  }

  private saveLocalStorage():void{
    localStorage.setItem('history', JSON.stringify(this._tagsHistory));
  }

  private loadLocalStorage():void{
    if(!localStorage.getItem('history')) return;
    this._tagsHistory =JSON.parse(localStorage.getItem('history')!);
    if(this.tagsHistory.length === 0 ) return;
    this.searchTag(this._tagsHistory[0]);
  }


  //async
  searchTag( tag:string):void{
    if(tag.length === 0 ) return;
    console.log(this.tagsHistory);
    this.organizeHistory(tag);
    const params = new HttpParams()
    .set('api_key',this.apiKey)
    .set('limit','10')
    .set('q', tag);

    //emite un valor cuando se tenga la respuesta
    this.http.get<SearchResponse>(`${this.serviceUrl}/search`,{params}).
    subscribe(resp=>{
      this.gifList = resp.data;
      console.log({gif:this.gifList});

    });

    // const resp= await fetch('https://api.giphy.com/v1/gifs/search?api_key=3H2u3D9Y5cTdKHRrxwQodcjCwgF9YJhs&q=valorant&limit=10')
    // const data = await resp.json();
    // console.log(data);
    //.then(resp=>resp.json())
    //.then(data=>console.log(data));
  }
}
