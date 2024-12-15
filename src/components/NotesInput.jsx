import React from "react";

class NotesInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
      maxChar: 50,
    };

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    const limitChar = this.state.maxChar;
    const char = event.target.value.length;
    if (char <= limitChar) {
      this.setState(() => {
        return {
          title: event.target.value,
        };
      });
    }
  }

  onBodyChangeEventHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      };
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addNotes(this.state);
  }

  render() {
    const charRemaining = this.state.maxChar - this.state.title.length;
    return (
      <div className="note-input">
        <form onSubmit={this.onSubmitEventHandler}>
          <h2>Buat Catatan Baru</h2>
          <p className="note-input__title__char-limit">
            Sisa karakter: {charRemaining}
          </p>
          <input
            type="text"
            className="note-input__title"
            value={this.state.title}
            onChange={this.onTitleChangeEventHandler}
            placeholder="Masukan judul"
          />
          <textarea
            className="note-input__body"
            value={this.state.body}
            onChange={this.onBodyChangeEventHandler}
            placeholder="Tulis catatan disini...."
          ></textarea>
          <button type="submit">Buat catatan</button>
        </form>
      </div>
    );
  }
}

export default NotesInput;
