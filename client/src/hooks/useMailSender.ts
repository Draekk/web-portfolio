import { useState } from "react";

export type tMailData = {
  name: string;
  email: string;
  message: string;
};

export function useMailSender() {
  const MAIL_URL = import.meta.env.VITE_API_URL + "/mail/send";

  const [isSending, setIsSending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const sendMail = async (mailData: tMailData) => {
    setIsSending(true);
    try {
      const res = await fetch(MAIL_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(mailData),
      });
      const data = await res.json();
      console.log(data);

      return data;
    } catch (err: any) {
      console.error(err);
      setError(true);
    } finally {
      setIsSending(false);
    }
  };

  return { sendMail, success, setSuccess, isSending, error, setError };
}
