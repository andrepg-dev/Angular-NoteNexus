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
  user: {
    _id: string;
    username: string;
    user: string;
  };
}

export interface OwnNoteInterface {
  _id:      string;
  userName: string;
  user:     string;
  notes:    Note[];
}

export interface Note {
  _id:       string;
  content:   string;
  important: boolean;
  date:      string;
}

export interface NewUser {
  _id: string;
  user: string;
  userName: string;
  password: string;
  token: string;
}

export interface Login {
  userName: string;
  password: string;
}
