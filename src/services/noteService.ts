import type { Note } from "../types/note";
import axios from "axios";

axios.defaults.baseURL = import.meta.env.VITE_API_URL;
axios.defaults.headers.common.Authorization = `Bearer${import.meta.env.VITE_NOTEHAB_TOKEN}`;

export async function fetchNotes(): Promise<Note[]> {
  const res = await axios.get<Note[]>("/notes");
  return res.data;
}

export async function createNote(newNote: "/notes/"): Promise<Note> {
  const res = await axios.post<Note>("/notes", newNote);
  return res.data;
}

// export async function deleteNote(): Promise<Note(id)> {
//   const res = await axios.delete(`/notes/${id}`);
// }
