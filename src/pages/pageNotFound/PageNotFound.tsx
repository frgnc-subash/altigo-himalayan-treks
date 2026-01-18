import { useRouteError, isRouteErrorResponse, Link } from "react-router-dom";

const PageNotFound = () => {
  const error = useRouteError();

  let errorMessage = "404 Page Not Found";
  let errorDetail = "The page you are looking for does not exist.";

  if (isRouteErrorResponse(error)) {
    errorMessage = `${error.status} ${error.statusText}`;
    errorDetail = error.data?.message || "Something went wrong";
  } else if (error instanceof Error) {
    errorMessage = "Application Error";
    errorDetail = error.message;
  } else if (typeof error === "string") {
    errorMessage = "Application Error";
    errorDetail = error;
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 text-center">
      <div className="bg-white shadow-xl rounded-2xl p-10 max-w-md w-full">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          {errorMessage}
        </h1>
        <p className="text-gray-600 mb-8">{errorDetail}</p>
        <Link
          to="/"
          className="inline-block px-6 py-3 rounded-xl font-semibold bg-blue-600 text-white hover:bg-blue-700 transition-all shadow-md"
        >
          Back
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
