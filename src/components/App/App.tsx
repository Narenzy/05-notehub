import { useState } from "react";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import css from "./App.module.css";
import NoteList from "../NoteList/NoteList";
import Pagination from "../Pagination/Pagination";
import { fetchNotes } from "../../services/noteService";
import NoteForm from "../NoteForm/NoteForm";
import Modal from "../Modal/Modal";
import SearchBox from "../SearchBox/SearchBox";

export default function App() {
  const [search, setSearch] = useState("");

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const [page, setPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { data } = useQuery({
    queryKey: ["notes", page, search],
    queryFn: () => fetchNotes(page, 10, search),
    placeholderData: keepPreviousData,
  });

  return (
    <div className={css.app}>
      <header className={css.toolbar}>
        <SearchBox value={search} onChange={setSearch} />

        <Pagination
          currentPage={page}
          totalPages={data?.totalPages ?? 1}
          onPageChange={setPage}
        />

        <button className={css.button} onClick={() => setIsModalOpen(true)}>
          Create note +
        </button>
      </header>
      {data && data.notes.length > 0 && <NoteList notes={data.notes} />}
      {isModalOpen && (
        <Modal onClose={closeModal}>
          <NoteForm onClose={closeModal} />
        </Modal>
      )}
    </div>
  );
}
