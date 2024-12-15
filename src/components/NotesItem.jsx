import React from "react";
import NotesItemBody from "./NotesItemBody";
import ActionButton from "./ActionButton";

function NotesItem({ title, body, createdAt, id, onDelete }) {
  return (
    <div className="note-item">
      <NotesItemBody title={title} body={body} createdAt={createdAt} />
      <ActionButton id={id} onDelete={onDelete} />
    </div>
  );
}

export default NotesItem;
