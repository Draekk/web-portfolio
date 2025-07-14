export type tTextAll = {
  es: tLang;
  en: tLang;
};

export type tLang = {
  header: tHeader;
  hero: tHero;
  experience: tExperience;
  technologies: tTechnologies;
  contact: tContact;
  btnScreenshot: tBtnScreenshot;
  mailForm: tMailForm;
};

export type tHeader = {
  title: string;
  navHome: string;
  navExperience: string;
  navTechnologies: string;
  navContact: string;
};

export type tHero = {
  title: string;
  paragraph: string;
};

export type tExperience = {
  title: string;
  paragraph: string;
};

export type tTechnologies = {
  title: string;
};

export type tContact = {
  title: string;
};

export type tMailForm = {
  title: string;
  name: string;
  email: string;
  send: string;
};

export type tBtnScreenshot = {
  text: string;
  closeText: string;
};
