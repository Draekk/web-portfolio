function ProjectSummary() {
  return (
    <article>
      <div className="flex justify-center">
        <div className="w-32 h-32 bg-red-400 rounded-sm">
          <div className="w-full"></div>
        </div>
        <div className="w-[80%] px-4 flex flex-col justify-between">
          <h3 className="text-lg font-black">Project name</h3>
          <p className="text-wrap">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum cum
            deserunt minima magni facilis? Eos voluptatibus, molestiae pariatur,
            hic dolore optio accusantium saepe accusamus dolores in, repellat
            commodi porro! Rerum!
          </p>
          <div className="flex justify-between">
            <button>Screenshots</button>
            <ul className="flex flex-wrap justify-end gap-x-5 justify-self-end w-[70%]">
              <li>java</li>
              <li>javascript</li>
              <li>react</li>
              <li>mysql</li>
            </ul>
          </div>
        </div>
      </div>
    </article>
  );
}

export default ProjectSummary;
