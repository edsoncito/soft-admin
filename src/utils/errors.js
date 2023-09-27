export const ERRORS = {
  401: {
    title: 'Sesión expirada',
    message: 'Ha sido desconectado por exceder el tiempo límite de inactividad',
  },
  408: {
    title: 'Proceso no completado',
    message: 'Favor intente nuevamente',
  },
  500: {
    title: 'Proceso no completado',
    message:
      'No se pudo establecer comunicacion con el servicio. Favor intente nuevamente o ingrese con codigo y clave',
  },
  ECONNABORTED: {
    title: 'Proceso no completado',
    message: 'No se pudo establecer comunicacion con el servicio. Favor intente nuevamente.',
  },
  connection_error: {
    title: 'Proceso no completado',
    message: 'No se pudo establecer comunicacion con el servicio. Favor intente nuevamente',
  },
  internet: {
    title: 'Error de conexión',
    message:
      'El dispositivo no tiene WI-FI o acceso a Internet. Intenta nuevamente después de establecer la conectividad',
  },
  default: {
    title: 'Error',
    message: 'Error desconocido',
  },
};
