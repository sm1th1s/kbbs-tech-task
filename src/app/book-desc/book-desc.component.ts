import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-book-desc',
  standalone: true,
  imports: [],
  templateUrl: './book-desc.component.html',
  styleUrl: './book-desc.component.css'
})
export class BookDescComponent {
 @Input() selectedBook: any;
 @Output() closeDetail = new EventEmitter<void>();

 onCloseDetail(){
  this.closeDetail.emit()
 }

}


