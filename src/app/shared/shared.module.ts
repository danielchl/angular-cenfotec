import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { PaginationComponent } from './pagination/pagination.component';
import { DecimalPipe } from './pipes/decimal.pipe';

@NgModule({
  declarations: [PaginationComponent, DecimalPipe],
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    TranslateModule.forChild()
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    PaginationComponent, 
    DecimalPipe
  ]
})
export class SharedModule { }
