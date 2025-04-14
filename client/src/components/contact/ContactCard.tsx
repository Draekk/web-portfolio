type tContactCardProps = {
  imgUrl: string;
  url: string;
  text: string;
};

function ContactCard({ imgUrl, url, text }: tContactCardProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-start mx-5 w-full max-w-[350px] px-2 py-3 cursor-pointer border border-t-purple-500 border-purple-300 rounded-xl hover:scale-105 hover:border-dashed hover:bg-purple-950 hover:font-black hover:relative transition-all"
    >
      <figure className="w-8 h-8 overflow-hidden flex justify-center items-center">
        <img className="w-full" src={imgUrl} alt={text} />
      </figure>
      <span className="text-lg lg:text-xl text-white w-full ml-3">{text}</span>
    </a>
  );
}

export default ContactCard;
