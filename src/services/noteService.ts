import type { Note, NoteResponse } from "../types/note";
import axios from "axios";

axios.defaults.baseURL = import.meta.env.VITE_API_URL;
axios.defaults.headers.common.Authorization = `Bearer ${import.meta.env.VITE_NOTEHUB_TOKEN}`;

export async function fetchNotes(
  page: number = 1,
  perPage: number = 10,
): Promise<NoteResponse> {
  const res = await axios.get<NoteResponse>("/notes", {
    params: {
      page,
      perPage,
    },
  });
  return res.data;
}

export async function createNote(newNote: "/notes/"): Promise<Note> {
  const res = await axios.post<Note>("/notes", newNote);
  return res.data;
}

// export async function deleteNote(): Promise<Note(id)> {
//   const res = await axios.delete(`/notes/${id}`);
// }
