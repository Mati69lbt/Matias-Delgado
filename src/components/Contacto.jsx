//cspell: ignore Matias, Linkedin,formspree,xzbnqawd
import { useForm, ValidationError } from "@formspree/react";
const Contacto = () => {
  const [state, handleSubmit] = useForm("xzbnqawd");
  if (state.succeeded) {
    document.getElementById("contact-form").reset();
  }
  const a = [1, 2, 3];
  console.log(a);
  const b = [4, 5, 6];
  console.log(a.concat(b));

  return (
    <div>
      <h1 className="font-bold text-5xl p-10">Contacto</h1>
      <div className="flex flex-col md:grid md:grid-cols-2 gap-2">
        <div className="flex flex-col items-center ">
          <div className="text-left">
            <h1 className="text-3xl font-semibold">Matias Delgado</h1>
            <p className="mt-2 text-gray-600 ">Parana, Entre Rios, Argentina</p>
            <p className="text-gray-600 mt-4">mati69_lbt@hotmail.com</p>
            <p className="mt-4">
              <a
                href="https://www.linkedin.com/in/matiasdelgadodev/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 hover:underline"
              >
                Linkedin
              </a>
            </p>
            <p className="mt-2">
              <a
                href="https://github.com/Mati69lbt"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 hover:underline"
              >
                Github
              </a>
            </p>
          </div>
        </div>
        <div className="flex justify-center">
          <form
            id="contact-form"
            onSubmit={handleSubmit}
            className="w-full max-w-xs md:max-w-xl"
          >
            <div className="mt-2">
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                <input
                  type="text"
                  name="name"
                  id="name"
                  autoComplete="off"
                  className="block w-full border-0 bg-transparent py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  placeholder="Nombre o Empresa"
                  required
                />
              </div>
            </div>
            <div className="mt-2">
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="off"
                  className="block w-full border-0 bg-transparent py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  placeholder="Email"
                  required
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </div>
            </div>
            <div className="mt-2">
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                <input
                  type="text"
                  name="Subject"
                  id="subject"
                  autoComplete="off"
                  className="block w-full border-0 bg-transparent py-1.5 pl-3  text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  placeholder="Asunto"
                  required
                />
              </div>
            </div>
            <div className="mt-2 sm:max-w-md">
              <textarea
                name="message"
                id="message"
                rows="4"
                className="block w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Deje su mensaje aquí, le responderé lo antes posible, muchas gracias."
                required
              />
            </div>
            <div className="flex flex-col items-center mt-2">
              <button
                type="submit"
                className="rounded-md bg-indigo-600 px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mt-4"
              >
                Enviar
              </button>
            </div>

            {state.succeeded && (
              <p className="mt-4 text-green-500  text-center">
                Mensaje enviado con éxito!
              </p>
            )}
            {state.succeeded === "false" && (
              <p className="mt-4 text-red-500 text-center">
                Hubo un error al enviar el mensaje.
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
