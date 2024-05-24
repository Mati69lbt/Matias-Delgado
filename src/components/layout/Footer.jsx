// cspell: ignore Matías

const Footer = () => {
  const date = new Date();
  const options = { year: "numeric", month: "long" };
  const currentDate = new Intl.DateTimeFormat("es-ES", options).format(date);
  const formattedDate = currentDate
    .replace(" de ", ", ")
    .replace(/^\w/, (c) => c.toUpperCase());
  return <footer>Matías Delgado &copy; - {formattedDate}</footer>;
};

export default Footer;
