import { ERRORS } from "./errors";

export const handleError = (error) => {
  if (error?.response?.data?.is_error) {
    return {
      title: error.response.data.title,
      message: error.response.data.message,
      error_code: error.response.data.error_code,
      is_error: true,
    };
  }

  const serverProblem = {
    is_error: true,
    error_code: "Server Error",
    title: "Proceso no completado",
    message:
      "No se pudo establecer comunicación con el servicio. Favor intente nuevamente o ingrese con código y clave.",
  };

  if (!error.response) {
    return serverProblem;
  }

  if (error.response.status === 404) {
    return serverProblem;
  }

  return {
    is_error: true,
    error_code: "Default",
    ...ERRORS.default,
  };
};
