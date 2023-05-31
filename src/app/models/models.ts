export interface SideNavItem {
  title: string;
  link: string;
}

export enum UserType {
  ADMIN,
  USER,
}

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  mobile: string;
  password: string;
  blocked: boolean;
  active: boolean;
  createdOn: string;
  userType: UserType;
  fine: number;
}

export interface Book {
  BookId: number;
  BookTitle: string;
  category: string;
  subcategory: string;
  BookQuantity?: number;
  BookAuthor: string;
  BookFine: string;
  BookStatus: string;

   
}

export interface BookCategory {
  BcCategory: string;
  BcSubCategory: string;
  books: Book[];
}

export interface Order {
  id: number;
  userid: number;
  name: string;
  bookid: number;
  booktitle: string;
  orderedon: string;
  returned: boolean;
}

export interface Category {
  name: string;
  children?: Category[];
}
