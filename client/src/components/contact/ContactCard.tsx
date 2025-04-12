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
      className="flex items-center justify-start mx-5 w-full lg:w-[200px] px-2 cursor-pointer border-2 border-dashed border-white rounded-xl"
    >
      <figure className="w-8 h-8 overflow-hidden">
        <img src={imgUrl} alt={text} />
      </figure>
      <span className="text-sm md:text-lg lg:text-xl text-white w-full">
        {text}
      </span>
    </a>
  );
}

export default ContactCard;
