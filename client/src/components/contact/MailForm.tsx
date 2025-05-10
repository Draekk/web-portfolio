import "../../App.css";
import "./mailForm.css";
import { tMailForm } from "../../types/tTextLang";
import { useEffect, useRef, useState } from "react";
import { tMailData, useMailSender } from "../../hooks/useMailSender";

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
  const { sendMail, success, setSuccess, isSending, error, setError } =
    useMailSender();
  const sendButtonRef = useRef<HTMLButtonElement>(null);

  const initialMailData: () => tMailData = () => {
    return { name: "", email: "", message: "" };
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
    sendButtonRef.current?.classList.add("send-button");
    if (sendButtonRef.current !== null) sendButtonRef.current.textContent = "";
    const data = await sendMail(mailData);
    data.success ? setSuccess(data.success) : setError(true);
    setTimeout(() => {
      if (data.success) {
        console.log(success);
        setMailData(initialMailData);
        setMailModal(false);
      } else {
        if (sendButtonRef.current !== null)
          sendButtonRef.current.textContent = send;
        sendButtonRef.current?.classList.remove("send-button");
        sendButtonRef.current?.classList.add("opacity-100");
        setError(false);
      }
    }, 1800);
  };

  return (
    <div
      ref={modalRef}
      tabIndex={0}
      onKeyDown={onEscapeDown}
      id="mail-form"
      className="flex flex-col py-[5vh] absolute xl:top-auto p-1 sm:px-2 lg:p-5 bg-black border-t lg:border-2 lg:border-l-0 lg:rounded-r-xl border-t-purple-600 border-purple-300 text-white w-screen h-[85vh]  lg:h-fit lg:w-[500px] aside-shadow"
    >
      <div className="flex items-center sm:justify-center px-1 w-full">
        <h2 className="font-black text-xl text-white text-center xl:my-5 ml-auto">
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
      <form className="grid grid-cols-2 gap-2">
        <span className="flex flex-col col-span-2 sm:col-span-1">
          <label htmlFor="name" className="underline italic pb-1 font-bold">
            {name}:
          </label>
          <input
            type="text"
            id="name"
            value={mailData.name}
            onChange={handleChange}
            placeholder={name}
            className="bg-white text-black text-lg text-nowrap pl-1"
          />
        </span>
        <span className="flex flex-col col-span-2 sm:col-span-1">
          <label htmlFor="email" className="underline italic pb-1 font-bold">
            {email}:
          </label>
          <input
            type="email"
            id="email"
            value={mailData.email}
            onChange={handleChange}
            placeholder={email}
            className="bg-white text-black text-lg text-nowrap pl-1"
          />
        </span>

        <span className="col-span-2">
          <label htmlFor="message"></label>
          <textarea
            name="message"
            id="message"
            value={mailData.message}
            onChange={handleChange}
            className="bg-white text-black text-lg text-wrap p-1 w-full h-[40vh] lg:h-44"
          ></textarea>
        </span>
        <p className="text-white">
          {(isSending && <>Enviando...</>) ||
            (success && <>Mensaje enviado!</>) ||
            (error && <>No se pudo enviar el mensaje...</>)}
        </p>
        <button
          id="send-button"
          ref={sendButtonRef}
          onClick={mailSubmit}
          disabled={isSending || success}
          className="font-black place-self-end bg-purple-600 hover:bg-purple-500 rounded h-12 sm:h-14 w-20 sm:w-[100px] cursor-pointer"
        >
          {send}
        </button>
      </form>
    </div>
  );
}

export default MailForm;
