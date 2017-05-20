import { NgModule } from '@angular/core';
import { 
  MdButtonModule, 
  MdCheckboxModule, 
  MdMenuModule,
  MdListModule,
  MdCardModule,

} 
from '@angular/material';

@NgModule({
  imports: [
    MdButtonModule, 
    MdCheckboxModule,
    MdMenuModule,
    MdListModule,
    MdCardModule
    
  ],
  exports: [
    MdButtonModule, 
    MdCheckboxModule,
    MdMenuModule,
    MdListModule,
    MdCardModule
  ],
  declarations: [],


})
export class MaterialModule { }
