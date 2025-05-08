export type tMailData = {
  name: string;
  email: string;
  body: string;
};

export function useMailSender() {
  const MAIL_URL = import.meta.env.VITE_API_URL + "/mail/send";

  // const sendMail = async (mailData: tMailData) => {
  //   const res = await fetch(MAIL_URL, {
  //     method: "POST",
  //     headers
  //   })
  // }

  return {};
}
