export const getMonth = ({
  date = new Date(),
  locate = 'es-BO',
  format = 'long',
}) => date.toLocaleString(locate, { month: format });

export const getDay = ({
  date = new Date(),
  locate = 'es-BO',
  format = '2-digit',
}) => date.toLocaleString(locate, { day: format });

export const getYear = ({
  date = new Date(),
  locate = 'es-BO',
  format = 'numeric',
}) => date.toLocaleString(locate, { year: format });
