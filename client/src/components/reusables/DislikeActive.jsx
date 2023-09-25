const DislikeActive = ({ activeHandler }) => {
  return(
    <section
            onClick={() => activeHandler(false)}
            className="flex cursor-pointer bg-red-700 hover:bg-red-300 items-center justify-center rounded-md w-8 h-8 "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="fill-red-500 w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M12 2.25a.75.75 0 01.75.75v16.19l6.22-6.22a.75.75 0 111.06 1.06l-7.5 7.5a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 111.06-1.06l6.22 6.22V3a.75.75 0 01.75-.75z"
                clipRule="evenodd"
              />
            </svg>
          </section>
  )
}

export default DislikeActive;