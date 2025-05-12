import { BaseResponsePagination } from "@/lib/axiosClient";
 
interface Book {
  id: number;
  title: string;
  author: string;
  year: number | undefined | string;
  deskripsi : string;
  create_at: string;
  update_at: string;
}

interface User {
  id?: number;
  nama: string;
  email: string;
  password: string;
}

export interface socialPayload {
  email: string;
  nama: string;
  avatar: string;
}

 
 
export interface BookListResponse extends BaseResponsePagination {
  data: Book[];
}

export interface BookListFilter extends Partial<Book> {
  from_year?: string;
  to_year?: string;    
  page: number;
  pageSize: number;
}


export interface BookCreatePayload extends Pick<Book, "author" | "title" | "year" | "deskripsi"> {}
export interface DetailBookResponse extends Book{}
