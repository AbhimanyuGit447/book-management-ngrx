import { createAction, props } from "@ngrx/store";
import { Book } from "../models/book";

export const AddBook = createAction(
  '[Book] Add Book', props<Book>()
);

export const AddBookSuccess = createAction(
  '[Book] Added Book Successfully', props<Book>()
);

export const AddBookFaliure = createAction(
  '[Book] Added Book Faliure', props<{error : any}>()
);

export const RemoveBook = createAction(
  '[Book] Remove Book', props<{bookId : string}>()
);

