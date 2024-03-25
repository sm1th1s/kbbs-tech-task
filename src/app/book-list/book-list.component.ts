import { Component, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BookDescComponent } from '../book-desc/book-desc.component';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [BookDescComponent],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
export class BookListComponent {

  readonly APIUrl="https://localhost:7263/api/books/";

  books:any=[];
  selectedBook:any;

  parentData=this.books;

  showDesc: boolean = false;
  visible: boolean = false;
  

  constructor(private http:HttpClient){
  }
  httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': 'http://localhost:4200/'
    })
  }

  getBooks(){
    this.http.get(this.APIUrl+'getBooks').subscribe(data=>{
      this.books=data;
      console.log(this.books);
    })
  }

  loadDetails(book:any){
    this.showDesc = true;
    this.selectedBook = book;
    console.log(book)
  }

  closeDetail(){
    this.showDesc = false;
  }

  ngOnInit(){
    this.getBooks();
  }

}
