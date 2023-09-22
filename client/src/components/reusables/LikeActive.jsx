const LikeInactive = ({ activeHandler }) => {
  return (
    <section
      onClick={() => activeHandler(true)}
      className="flex cursor-pointer bg-green-400 hover:bg-green-300 items-center justify-center rounded-md w-8 h-8 "
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="fill-green-500 w-6 h-6"
      >
        <path
          fillRule="evenodd"
          d="M11.47 2.47a.75.75 0 011.06 0l7.5 7.5a.75.75 0 11-1.06 1.06l-6.22-6.22V21a.75.75 0 01-1.5 0V4.81l-6.22 6.22a.75.75 0 11-1.06-1.06l7.5-7.5z"
          clipRule="evenodd"
        />
      </svg>
    </section>
  );
};

export default LikeInactive;
