/* eslint-disable no-extra-semi */
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
      notes: getInitialData,
      unfilteredNotes: getInitialData,
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

    if(result){
      axios.delete(`http://127.0.0.1:5000/api/v1/notes/${id}`)
      .then(response =>{
        toast.success('Note deleted!');
        window.location.reload();
      });
    };

    

  }



onArchiveHandler(id) {

  axios.put('http://127.0.0.1:5000/api/v1/notes/archive/'+id) 
  .then((response) => {
    window.location.reload();
  })
      
       
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
        <AppBody notes={this.state.notes} addNewNote={this.addNewNoteHandler} onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler} />
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
