import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LayImageComponent } from './components/lay-image/lay-image.component';

@NgModule({
  declarations: [
    SidebarComponent,
    LayImageComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    SidebarComponent,
    LayImageComponent
  ]
})
export class SharedModule { }
