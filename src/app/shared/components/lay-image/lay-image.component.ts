import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-lazy-image',
  standalone: false,
  templateUrl: './lay-image.component.html',
  styleUrl: './lay-image.component.css'
})
export class LayImageComponent implements OnInit{
  @Input()
  public url!:string ;

  @Input()
  public alt:string = '';

  public hasLoaded: boolean = false;

  ngOnInit(): void {
    if(!this.url) throw new Error('URL property is required');
  }

  onLoad(){
    setTimeout(()=>{
      //console.log('Image leaded');
      this.hasLoaded = true;
    },100)

  }
}
