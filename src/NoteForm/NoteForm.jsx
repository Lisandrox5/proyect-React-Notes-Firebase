import React, {Component} from 'react';
import './NoteForm.css';

class   NoteForm extends Component{

constructor(){
super();
this.addNote = this.addNote.bind(this);
}



addNote(){
    //console.log(this.texInput. value);
  this.props.addNote(this.texInput.value);
  this.texInput.value = '';
  this.texInput.focus();

}

removeNote(id){

    this.props.removeNote(id);
}

render(){
return(
        <div className="Noteform">
            <input 
            ref= {input => {this.texInput = input;}}
            placeholder ="Write a Note"
            type="text"/>

         <button
          onClick={this.addNote}>
          Add Note
         </button>
        

    
        </div>
        )
}

}

export default NoteForm;