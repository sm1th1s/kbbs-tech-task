import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BookListComponent } from './book-list/book-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink,RouterLinkActive, BookListComponent, ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'kbbs-tech-task';
  readonly APIUrl="http://localhost:5038/api/kbbsapi"

  // constructor(private http:HttpClient){
  // }
  // books:any=[];

  // getBooks(){
  //   this.http.get(this.APIUrl+'getBooks').subscribe(data=>{
  //     this.books=data;
  //   })
  // }

  // ngOnInit(){
  //   this.getBooks();
  // }

}
