/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { toast } from 'react-toastify';

const toastId1 = 'toast-1';
const toastId2 = 'toast-2';
const toastId3 = 'toast-3';

const NotesInput = ({ addNewNote, closeModal }) => {
    const [formData, setFormData] = useState({
        title: '',
        noteBody: '',
        noteBodyLength: 0
    });

    const onTitleChange = (event) => {
        event.preventDefault();
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }

    const onBodyChange = (event) => {
        event.preventDefault();
        if (event.target.value.length <= 200) {
            setFormData({
                ...formData,
                [event.target.name]: event.target.value,
                noteBodyLength: event.target.value.length
            })
        } else {
            toast.error('Max length for note body is 200', { toastId: toastId1 });
        }
    }

    const onSubmitForm = (event) => {
        event.preventDefault();
        if (formData.title === '') {
            toast.error('Title cannot be empty!', { toastId: toastId2 });
        } else if (formData.noteBody === '') {
            toast.error('Note body cannot be empty!', { toastId: toastId3 });
        } else {
            const newData = {
                id: +new Date(),
                title: formData.title,
                body: formData.noteBody,
                archived: false, 
                createdAt: new Date(),
            }
            const result = addNewNote(newData);
            if (!result.error) {
                toast.success('New note saved!');
                setFormData({
                    ...formData,
                    title: '',
                    noteBody: '',
                    noteBodyLength: 0
                })
                closeModal();
            } else {
                toast.error('New note failed to save!');
            }
        }
    }

    return (
        <div className="note-input">
            <h2>New Note</h2>
            <form>
                <p className="note-input__title__char-limit">Character left: {200 - formData.noteBodyLength}</p>
                <input 
                    className="note-input__title" 
                    type="text" 
                    name="title"
                    placeholder="Title" 
                    required
                    value={formData.title} 
                    onChange={onTitleChange} 
                />
                <textarea 
                    className="note-input__body" 
                    type="text" 
                    name="noteBody"
                    placeholder="Your notes here ..." 
                    required
                    value={formData.noteBody}
                    onChange={onBodyChange}
                ></textarea>
                <button type="submit" onClick={onSubmitForm}>Add note</button>
            </form>
        </div>
    )
}

export default NotesInput;