import * as React from "react";

const TodoItems = props => {
  const { text, done, id, onDelete,onDone } = props;

  return (
    <tbody>
      <tr>
        <td>{id}</td>
        <td>{text}</td>
        <td>{done ? "Done" : "Due"}</td>
        <td>
          <button
            // onClick={!done ? "": onDelete(id)}
            onClick={!done ? () => null : () => onDelete(id)}
            className={done ? "delete" : "done"}
          >
            {done ? "Delete" : "Done"}
          </button>
        </td>
      </tr>
    </tbody>
  );
};

export { TodoItems };
