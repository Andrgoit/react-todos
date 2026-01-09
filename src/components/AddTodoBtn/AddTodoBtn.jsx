import { useState } from "react";
import { Modal } from "@/components";

import DateRangePicker from "@wojtekmaj/react-daterange-picker";
import "@wojtekmaj/react-daterange-picker/dist/DateRangePicker.css";
import "react-calendar/dist/Calendar.css";

import styles from "@/components/AddTodoBtn/AddTodoBtn.module.css";

export default function AddTodoBtn({ AddTodo }) {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [dates, setDates] = useState([new Date(), new Date()]);

  const startDate = dates ? dates[0].toLocaleDateString() : "";
  const endDate = dates ? dates[1].toLocaleDateString() : "";

  const isDesabledButton =
    title.trim() !== "" && text.length <= 100 && text.length > 0;

  const CloseModal = () => {
    setIsOpen(false);
  };
  const OpenModal = () => {
    setIsOpen(true);
  };
  const ResetForm = () => {
    setTitle("");
    setText("");
    setDates([new Date(), new Date()]);
  };

  const HandlerSubmit = (e) => {
    const id = new Date().getTime().toString();
    e.preventDefault();
    CloseModal();
    ResetForm();
    AddTodo({ id, title, text, completed: false, dates });
  };

  return (
    <div className={styles.buttonWrapper}>
      <button onClick={OpenModal} className={styles.button}>
        Add task
      </button>
      {isOpen && (
        <Modal CloseModal={CloseModal}>
          <div className={styles.formWrapper}>
            <form onSubmit={HandlerSubmit} className={styles.form}>
              <input
                type="text"
                name="title"
                autoFocus
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Title"
                className={styles.formInput}
              />
              <textarea
                placeholder="Write a message..."
                name="meassage"
                value={text}
                onChange={(e) => setText(e.target.value)}
                className={styles.formTextarea}
              />
              <div>
                <span>Chose start and end dates:</span>
                <DateRangePicker
                  onChange={setDates}
                  value={dates}
                  format="dd.MM.yyyy"
                />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <p className="font-semibold">Start date:</p>
                  {dates && <span>{startDate}</span>}
                </div>
                <div className="flex items-center gap-2">
                  <p className="font-semibold">End date:</p>
                  {dates && <span>{endDate}</span>}
                </div>
              </div>
              <span
                className={
                  text.length <= 100
                    ? `${styles.formSpan}`
                    : `${styles.formFailSpan}`
                }
              >
                {text.length}/100
              </span>
              <button
                disabled={!isDesabledButton}
                type="submit"
                className={
                  !isDesabledButton
                    ? `${styles.disabledButton}`
                    : `${styles.button}`
                }
              >
                Create task
              </button>
            </form>
          </div>
        </Modal>
      )}
    </div>
  );
}
