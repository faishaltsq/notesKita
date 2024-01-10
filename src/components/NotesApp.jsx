/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { getInitialData } from '../utils/data';

import AppBody from './Body';
import Header from './Header';
import Footer from './Footer';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';

import autoBind from 'auto-bind';

class NotesApp extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      notes: getInitialData(),
      unfilteredNotes: getInitialData(),
      loading: false,
    }
    autoBind(this);
  }

  addNewNoteHandler(newNoteData) {
    this.setState((prevState) => {
      const newNotes = [
        ...prevState.notes,
        newNoteData,
      ];
      return {
        notes: newNotes,
        unfilteredNotes: newNotes,
        loading: false,
      };
    });

    toast.success('Note added!');
  }

  onDeleteHandler(id) {
    const result = window.confirm('Are you sure you want to delete this?');
    if (result) {
      this.setState((prevState) => {
        const newNotes = prevState.notes.filter(note => note.id !== id);
        const newUnfilteredNotes = prevState.unfilteredNotes.filter(note => note.id !== id);
        return {
          notes: newNotes,
          unfilteredNotes: newUnfilteredNotes,
          loading: false,
        };
      });
      toast.success('Note deleted!');
    }
  }



onArchiveHandler(id) {
    const noteToModify = this.state.unfilteredNotes.filter(note => note.id === id)[0];
    const modifiedNote = { ...noteToModify, archived: !noteToModify.archived };
    
    // Update note in the database
    axios.put(`/api/notes/${id}`, modifiedNote)
        .then(() => { // Remove unused variable 'response'
            this.setState((prevState) => {
                const newNotes = [
                    ...prevState.notes.filter(note => note.id !== id),
                    modifiedNote,
                ];
                const newUnfilteredNotes = [
                    ...prevState.unfilteredNotes.filter(note => note.id !== id),
                    modifiedNote,
                ];
                return {
                    notes: newNotes,
                    unfilteredNotes: newUnfilteredNotes,
                    loading: false,
                };
            });
            if (noteToModify.archived) {
                toast.success('Note moved to active!');
            } else {
                toast.success('Note archived!');
            }
        })
        .catch(error => {
            console.error('Error updating note:', error);
            toast.error('Failed to update note!');
        });
}

// ...


onSearchHandler() {
    this.setState({
        loading: true,
    });
    
    
    this.setState({
        loading: false,
        notes: filteredNotes,
    });
}


 


  render() {
    return (
        
      <div>
        
        <Header onSearch={this.onSearchHandler}/>
        <AppBody notes={this.state.notes} addNewNote={this.addNewNoteHandler} onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler} onMount={this.componentDidMount}/>
        <Footer />
        <ToastContainer 
          position="bottom-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    );
  }
}

export default NotesApp;
