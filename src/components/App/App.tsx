import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import css from "./App.module.css";
import NoteList from "../NoteList/NoteList";
import { fetchNotes } from "../../services/noteService";

export default function App() {
  const { data: notes = [] } = useQuery({
    queryKey: ["notes"],
    queryFn: fetchNotes,
  });

  return (
    <div className={css.app}>
      <header className={css.toolbar}>
        {notes.length > 0 && <NoteList notes={notes} />}
        {/* Компонент SearchBox */}
        {/* Пагінація */}
        {/* Кнопка створення нотатки */}
      </header>
    </div>
  );
}
