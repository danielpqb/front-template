import { useAppContext } from "../../../external/contexts/AppContext";
import { Error } from "../../../external/helpers/request";

export async function useAlertOnRequestError(error: Error) {
  const { setAlert } = useAppContext();

  const statusCode = error?.response?.status;
  const data = error?.response?.data as { message: string };

  const message = `Error ${statusCode}\n\n
                    ${data?.message}`;

  setAlert({
    show: true,
    message: message,
    flag: "red",
  });

  return error;
}
