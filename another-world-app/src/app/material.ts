import {MatButtonModule, MatButtonToggleModule} from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [MatButtonModule, MatButtonToggleModule],
  exports: [MatButtonModule, MatButtonToggleModule],
})
export class materialModule { }