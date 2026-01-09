import { useState } from "react";
import { Modal } from "@/components";
import { FiEdit, FiTrash, FiCheckSquare } from "react-icons/fi";

import DateRangePicker from "@wojtekmaj/react-daterange-picker";
import "@wojtekmaj/react-daterange-picker/dist/DateRangePicker.css";
import "react-calendar/dist/Calendar.css";

import styles from "@/components/TodoItem/TodoItem.module.css";

export default function TodoItem({
  todo,
  UpdateTodo,
  DeleteTodo,
  CompleteTodo,
}) {
  const { id, title, text, completed, dates = [] } = todo;
  const [isOpen, setIsOpen] = useState(false);
  const [newTitle, setNewTitle] = useState(title);
  const [newText, setNewText] = useState(text);
  const [newCompleted, setNewCompleted] = useState(completed);
  const [newDates, setNewDates] = useState(dates);

  const startDate = dates ? new Date(dates[0]).toLocaleDateString() : "";
  const endDate = dates ? new Date(dates[1]).toLocaleDateString() : "";

  const isDesabledButton =
    newTitle.trim() !== "" && newText.length <= 100 && newText.length > 0;

  const OpenModal = () => {
    setIsOpen(true);
  };
  const CloseModal = () => {
    setIsOpen(false);
  };

  const HandlerSubmit = (e) => {
    e.preventDefault();

    const updatedTodo = {
      id,
      title: newTitle,
      text: newText,
      completed: newCompleted,
      dates: newDates,
    };

    UpdateTodo(id, updatedTodo);
    CloseModal();
  };

  return (
    <div className={styles.itemWrapper}>
      <div className={styles.itemIndicator}></div>
      <div className={styles.itemTextWrapper}>
        <p className={styles.itemTitile}>{title ? title : "No title"}</p>
        <p className={styles.itemMessage}>{text ? text : "No message"}</p>
        <p>{completed ? "Completed!" : ""}</p>
        {dates && (
          <div className="flex items-center gap-2">
            <p className="font-semibold">Start date:</p>
            <span>{startDate}</span>
          </div>
        )}
        {dates && (
          <div className="flex items-center gap-2">
            <p className="font-semibold">End date:</p>
            <span>{endDate}</span>
          </div>
        )}
      </div>
      <div className={styles.itemButtonsWrapper}>
        <button
          className={styles.editButton}
          onClick={OpenModal}
          title="Edit task"
        >
          <FiEdit size={28} />
        </button>
        <button
          className={styles.deleteButton}
          onClick={() => DeleteTodo(id)}
          title="Delete task"
        >
          <FiTrash size={28} />
        </button>
        <button
          className={styles.completedButton}
          onClick={() => CompleteTodo(id)}
          title="Task completed!"
        >
          <FiCheckSquare size={28} />
        </button>
      </div>

      {isOpen && (
        <Modal CloseModal={CloseModal}>
          <div className={styles.formWrapper}>
            <form className={styles.form}>
              <input
                type="text"
                autoFocus
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                placeholder="Title"
                className={styles.formInput}
              />
              <textarea
                type="text"
                value={newText}
                onChange={(e) => setNewText(e.target.value)}
                className={styles.formTextarea}
              />
              <span
                className={
                  newText.length <= 100
                    ? `${styles.formSpan}`
                    : `${styles.formFailSpan}`
                }
              >
                {newText.length}/100
              </span>
              <div>
                <div className="flex items-center gap-2">
                  <p className="font-semibold">Start date:</p>
                  {newDates && <span>{startDate}</span>}
                </div>
                <div className="flex items-center gap-2">
                  <p className="font-semibold">End date:</p>
                  {newDates && <span>{endDate}</span>}
                </div>
              </div>
              <div>
                <span>Change start and end dates:</span>
                <DateRangePicker
                  onChange={setNewDates}
                  value={newDates}
                  format="dd.MM.yyyy"
                />
              </div>

              <label className={styles.formCheckbox}>
                Completed!
                <input
                  type="checkbox"
                  name="completed"
                  checked={newCompleted}
                  onChange={() => setNewCompleted(!newCompleted)}
                />
              </label>

              <button
                onClick={HandlerSubmit}
                className={
                  !isDesabledButton
                    ? `${styles.disabledButton}`
                    : `${styles.button}`
                }
                disabled={!isDesabledButton}
              >
                Save changes
              </button>
            </form>
          </div>
        </Modal>
      )}
    </div>
  );
}
