const PersonalSkills = (props) => {
  return (
    <div
      className="
          bg-lightCard dark:bg-darkBlack  md:bg-transparent md:dark:bg-transparent
            pt-6 md:pt-12 pb-7 md:pb-0 "
    >
      <header
        className="
            font-exo2  text-2xl mb-1
            text-center md:text-left uppercase  md:normal-case
            tracking-widest md:tracking-normal md:font-semibold"
      >
        {props.data.title}:
      </header>
      <section
        className="
            font-exo2 font-light 
            pl-6  md:pl-0 tracking-wider md:tracking-normal "
      >
        <div className="py-2 flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2 "
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
          <span>{props.data.phone}</span>
        </div>
        <div className="py-2  flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
          <span>{props.data.mail}</span>
        </div>
        <div className="py-1 flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
            />
          </svg>
          <a
            href={props.data.github[1]}
            target="_blank"
            rel="noreferrer"
            className="text-yellow-100"
          >
            {props.data.github[0]}
          </a>
        </div>
        <div className="py-2 flex items-center ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
          </svg>
          <a
            href={props.data.linkedIn[1]}
            target="_blank"
            rel="noreferrer"
            className="text-yellow-100"
          >
            {props.data.linkedIn[0]}
          </a>
        </div>
      </section>
    </div>
  );
};

export default PersonalSkills;
