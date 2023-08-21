'use client'
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

type Note = {
  id: number;
  title: string;
  content: string;
};


const DeleteNote = ({ note }: { note: Note}) => {
  const router = useRouter();
  
  const handleDelete = async ( noteId: number) => {
    await axios.delete(`/api/notes/${noteId}`);
    router.refresh();
  };
  
    return (
        <>
        
        </>
    );
};

export default DeleteNote;