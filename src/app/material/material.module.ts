import { NgModule } from '@angular/core';
import { MatButtonModule} from '@angular/material/button';
import {MatExpansionModule} from  '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input'
import { MatDialogModule } from '@angular/material/dialog'

const MaterialComponents = [
  MatButtonModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatInputModule,
  MatDialogModule

]

@NgModule({  
  imports: [ MaterialComponents ],
  exports: [ MaterialComponents ]
})
export class MaterialModule { }
