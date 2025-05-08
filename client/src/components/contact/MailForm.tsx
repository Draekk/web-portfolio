import "../../App.css";
import "./mailForm.css";
import { tMailForm } from "../../types/tTextLang";
import { useEffect, useRef, useState } from "react";
import { tMailData } from "../../hooks/useMailSender";

type tMailFormProps = tMailForm & {
  mailModal: boolean;
  setMailModal: React.Dispatch<React.SetStateAction<boolean>>;
};

function MailForm({
  title,
  name,
  email,
  send,
  mailModal,
  setMailModal,
}: tMailFormProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  const initialMailData: () => tMailData = () => {
    return { name: "", email: "", body: "" };
  };

  const [mailData, setMailData] = useState(initialMailData);

  useEffect(() => {
    mailModal && modalRef.current ? modalRef.current.focus() : null;
  }, [mailModal]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setMailData({
      ...mailData,
      [e.target.id]: e.target.value,
    });
  };

  const onEscapeDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Escape") {
      setMailModal(false);
    }
  };

  const mailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMailData(initialMailData);
    setMailModal(false);
  };

  return (
    <div
      ref={modalRef}
      tabIndex={0}
      onKeyDown={onEscapeDown}
      id="mail-form"
      className="flex flex-col absolute p-5 bg-black border-2 border-l-0 rounded-xl rounded-l-none border-t-purple-600 border-purple-300 text-white w-[500px] aside-shadow"
    >
      <div className="flex items-center sm:justify-center px-1 w-full">
        <h2 className="font-black text-xl text-white text-center my-5 ml-auto">
          {title}
        </h2>
        <button
          onClick={() => setMailModal(false)}
          title="Cerrar"
          className="border-2 border-white rounded-full w-6 h-6 ml-auto cursor-pointer"
        >
          <i className="fa-solid fa-xmark lg:text-xl text-white"></i>
        </button>
      </div>
      <form className="flex flex-col">
        <span className="flex flex-col">
          <label htmlFor="name" className="underline italic pb-1 font-bold">
            {name}:
          </label>
          <input
            type="text"
            id="name"
            onChange={handleChange}
            placeholder={name}
            className="bg-white text-black text-lg text-nowrap py-1 pl-1"
          />
        </span>
        <span className="flex flex-col my-2">
          <label htmlFor="email" className="underline italic pb-1 font-bold">
            {email}:
          </label>
          <input
            type="email"
            id="email"
            onChange={handleChange}
            placeholder={email}
            className="bg-white text-black text-lg text-nowrap py-1 pl-1"
          />
        </span>
        <span>
          <label htmlFor="body"></label>
          <textarea
            name="body"
            id="body"
            onChange={handleChange}
            className="bg-white text-black text-lg text-wrap p-1 my-2 w-full min-h-[150px] max-h-[200px]"
          ></textarea>
        </span>
        <button
          onClick={mailSubmit}
          className="font-black bg-purple-600 hover:bg-purple-500 rounded py-2 self-end w-[100px] cursor-pointer"
        >
          {send}
        </button>
      </form>
    </div>
  );
}

export default MailForm;
