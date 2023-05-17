export interface UserInterface {
  userName: string;
  password: string;
  token: string;
}

export interface NoteInterface {
  _id: string;
  content: string;
  date: string;
  important: boolean;
  user: any;
}

export interface OwnNoteInterface {
  _id: string;
  user: string;
  userName: string;
}

export interface NewUser {
  _id: string;
  user: string;
  userName: string;
  password: string;
}

export interface Login {
  userName: string;
  password: string;
}
