const Footer = () => {
  return (
    <div className="footer flex items-center flex-col bg-slate-900 text-white pt-8 md:pt-8 pb-6 md:pb-8 text-center">
      <h2 className="text-sm my-2 md:my-0">
        &copy; Feel free to copy whatever you need. 😍
      </h2>
      <h1 className="text-base md:text-l px-4 md:px-0">
        Made with ❤️ by&nbsp;
        <a
          href="https://www.linkedin.com/in/codeofmohit-mohit-verma/"
          target="_blank"
          rel="noreferrer"
          className="text-red-500 underline"
        >
          Mohit Verma.
        </a>
        &nbsp;to showcase his skills on React, Redux, JS & Web Developement in
        Genral!
      </h1>
    </div>
  );
};
export default Footer;
