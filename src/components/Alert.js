import React, { useState, useEffect } from "react";

const Index = (props) => {
  const { status, message } = props;
  const color = status === "success" ? "green" : "red";

  const [show, setShow] = useState(true);

  useEffect(() => {
    const timeId = setTimeout(() => {
      setShow(false);
    }, 2000);

    return () => {
      clearTimeout(timeId);
    };
  }, []);

  if (!show) {
    return null;
  }

  return (
    <>
      {/* Code block starts */}
      <div className="flex items-center justify-center px-1 lg:px-0 py-4">
        <div
          id="alert"
          className={`transition duration-150 ease-in-out w-full mx-6 py-3 px-4  bg-${color}-400 md:flex items-center justify-between shadow rounded`}
        >
          <div className="sm:flex sm:items-start lg:items-center">
            <div className="flex items-end">
              <div className="mr-2 text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width={20}
                  height={20}
                  fill="currentColor"
                >
                  <path
                    className="heroicon-ui"
                    d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20zm0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16zm0 9a1 1 0 0 1-1-1V8a1 1 0 0 1 2 0v4a1 1 0 0 1-1 1zm0 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"
                  />
                </svg>
              </div>
              <p className="mr-2 text-base font-bold text-white">Warning</p>
            </div>
            <div className="h-1 w-1 rounded-full mr-2 hidden xl:block bg-white" />
            <p className="text-sm sm:text-base text-white pt-2 sm:pt-0 pb-2 sm:pb-0">
              {message}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Index;
