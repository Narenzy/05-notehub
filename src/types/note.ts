export interface Note {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  tag: string;
}
export interface NoteResponse {
  notes: Note[];
  totalPages: number;
}
export interface CreateNoteData {
  title: string;
  content: string;
  tag: string;
}
