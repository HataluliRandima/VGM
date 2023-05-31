import { Component, OnInit } from '@angular/core';
import { AuthService } from '../Service/auth.service';
import { Book, BookCategory } from '../models/models';
import { AnimateTimings } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

userfilter:any;

  availableBooks: Book[] = [];
  booksToDisplay: BookCategory[] = [];
  displayedColumns: string[] = [
    
    'title',
    'author',
    'fine',
    'available',
    'order',

    //
  ];

  bb :any;
  constructor(  private authService : AuthService) { }


  ngOnInit(): void {
    this.authService.getallbooks().subscribe({
      next : (res: Book[]) => {
        this.availableBooks = [];
        console.log(res);
        for (var book of res) this.availableBooks.push(book);
        this.updateList();
      },
      error: (err: any) => console.log(err),
    });

    this.authService.getallbooksnumber().subscribe((res:any) =>
     {
        this.bb = res;
     });

     this.authService.getallborrowbymember().subscribe((res: any) => {
       console.log("Resutls :", res);
     });
     
  }

  //magic here
  

  
  updateList() {
    this.booksToDisplay = [];
    for (let book of this.availableBooks) {
      let exist = false;
      for (let categoryBooks of this.booksToDisplay) {
        if (
          book.category === categoryBooks.BcCategory &&
          book.subcategory === categoryBooks.BcSubCategory
        )
          exist = true;
      }
      
      if (exist) {
        for (let categoryBooks of this.booksToDisplay) {
          if (
            book.category === categoryBooks.BcCategory &&
            book.subcategory === categoryBooks.BcSubCategory
          )
            categoryBooks.books.push(book);
        }
      } else {
        this.booksToDisplay.push({
          BcCategory: book.category,
          BcSubCategory: book.subcategory,
          books: [book],
        });
      }
    }
  }

  search(value: string) {
   // value = value.toLowerCase();
    this.updateList();
    if (value.length > 0) {
      this.booksToDisplay = this.booksToDisplay.filter((categoryBooks) => {
        categoryBooks.books = categoryBooks.books.filter(
          (book) =>
            book.BookTitle.toLowerCase().includes(value) ||
            book.BookAuthor.toLowerCase().includes(value)
        );
        return categoryBooks.books.length > 0;
      });
    }
  }
 
   

}
