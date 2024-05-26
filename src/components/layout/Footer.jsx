// cspell: ignore Matías

const Footer = () => {
  const date = new Date();
  const options = { year: "numeric", month: "long" };
  const currentDate = new Intl.DateTimeFormat("es-ES", options).format(date);
  const formattedDate = currentDate
    .replace(" de ", " ")
    .replace(/^\w/, (c) => c.toUpperCase());
  return (
    <footer className="text-center p-3 text-lg  mt-4 bg-white  ">
      Matías Delgado &copy; - {formattedDate}
    </footer>
  );
};

export default Footer;
