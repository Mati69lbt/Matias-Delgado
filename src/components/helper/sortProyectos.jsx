export const parseDate = (dateStr) => {
  const [month, day] = dateStr.split(", ");
  const months = {
    Enero: 0,
    Febrero: 1,
    Marzo: 2,
    Abril: 3,
    Mayo: 4,
    Junio: 5,
    Julio: 6,
    Agosto: 7,
    Septiembre: 8,
    Octubre: 9,
    Noviembre: 10,
    Diciembre: 11,
  };
  const year = 2000 + parseInt(day, 10); 
  return new Date(year, months[month], 1);
};

export const sortProjects = (projects) => {
  return [...projects].sort((a, b) => {
    const dateA = parseDate(a.Date);
    const dateB = parseDate(b.Date);
    return dateB - dateA;
  });
};
