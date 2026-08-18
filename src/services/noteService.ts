import type { Note, NoteResponse, CreateNoteData } from "../types/note";
import axios from "axios";

axios.defaults.baseURL = import.meta.env.VITE_API_URL;
axios.defaults.headers.common.Authorization = `Bearer ${import.meta.env.VITE_NOTEHUB_TOKEN}`;

export async function fetchNotes(
  page: number = 1,
  perPage: number = 10,
  search: string,
): Promise<NoteResponse> {
  const res = await axios.get<NoteResponse>("/notes", {
    params: {
      page,
      perPage,
      search,
    },
  });
  return res.data;
}

export async function createNote(newNote: CreateNoteData): Promise<Note> {
  const res = await axios.post<Note>("/notes", newNote);
  return res.data;
}

export async function deleteNote(id: string): Promise<Note> {
  const res = await axios.delete<Note>(`/notes/${id}`);
  return res.data;
}
