import React from "react";

const StyledForm = ({ title, children, onSubmit, error }) => {
  return (
    <section className="bg-earlgrey flex flex-col items-center justify-center min-h-screen w-full">
      <div className="w-full flex flex-col items-center">
        <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          <img className="w-8 h-8 mr-2" src="../src/assets/mouse-logo.png" alt="logo"/>
          Squeek
        </a>
        <div className="w-full bg-mickeygrey rounded-lg shadow border-2 border-cheeseyellow md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              {title}
            </h1>
            {error && (
              <div className="text-red-500">{error}</div>
            )}
            <form className="space-y-4 md:space-y-6" onSubmit={onSubmit}>
              {children}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StyledForm;
