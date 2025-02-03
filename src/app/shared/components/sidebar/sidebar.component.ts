import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  standalone: false,
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  //private gifsService
  /*
    Se inyecta el servicio GifsService en el constructor usando inyección
    de dependencias, lo que permite acceder a las funcionalidades del
    servicio en el componente.
  */
  @ViewChild('txtTagInput')
  public tagInput!:ElementRef<HTMLInputElement>;
  constructor( private gifService:GifsService ){}

  get tags():string[]{
    return this.gifService.tagsHistory;
  }

  // searchTag(tags:string) {
  //   if (this.tagInput) {
  //     const newTag = this.tagInput.nativeElement.value;
  //     this.gifService.searchTag(newTag);
  //     this.tagInput.nativeElement.value = '';
  //   } else {
  //     console.error('tagInput is not initialized yet.');
  //   }
  // }
  

  searchTag(tag: string):void {
    this.gifService.searchTag(tag);
  }

}
