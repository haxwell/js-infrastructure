import { NgModule } from '@angular/core';
import { FirstLibraryComponent } from './first-library.component';
import { FirstLibraryService } from './first-library.service';

@NgModule({
  declarations: [FirstLibraryComponent],
  imports: [
  ],
  providers: [ FirstLibraryService ],
  exports: [FirstLibraryComponent]
})
export class FirstLibraryModule { }
