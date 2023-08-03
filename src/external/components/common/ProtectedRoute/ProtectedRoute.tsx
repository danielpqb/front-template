import { Navigate } from "react-router-dom";

export default function ProtectedRoute({
  token,
  noTokenPath = "/",
  element,
}: {
  token: string | null;
  noTokenPath?: string;
  element: React.ReactElement;
}) {
  if (!token) {
    return (
      <Navigate
        to={noTokenPath}
        replace
      />
    );
  }

  return element;
}
