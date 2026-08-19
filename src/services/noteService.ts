import type { Note, CreateNoteData } from "../types/note";
import axios from "axios";

axios.defaults.baseURL = import.meta.env.VITE_API_URL;
axios.defaults.headers.common.Authorization = `Bearer ${import.meta.env.VITE_NOTEHUB_TOKEN}`;

export interface NoteResponse {
  notes: Note[];
  totalPages: number;
}

export async function fetchNotes(
  page: number = 1,
  perPage: number = 10,
  search?: string,
): Promise<NoteResponse> {
  const params: {
    page: number;
    perPage: number;
    search?: string;
  } = {
    page,
    perPage,
  };
  if (search?.trim()) {
    params.search = search.trim();
  }
  const res = await axios.get<NoteResponse>("/notes", {
    params,
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
