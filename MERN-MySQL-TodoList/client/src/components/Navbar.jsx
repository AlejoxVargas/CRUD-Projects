import { Link } from "react-router-dom";

function Navbar() {
  return (
    < nav className="flex justify-around py-4 bg-white/80 backdrop-blur-md shadow-md w-full fixed top-0 left-0 right-0 z-10" >
      {/* Logo Container */}
      < div className="flex items-center" >
        {/* Logo */}
        <a a className="cursor-pointer" >
          <h3 className="text-2xl font-medium text-blue-500">
            <img
              className="h-10 object-cover"
              src="https://stackoverflow.design/assets/img/logos/so/logo-stackoverflow.svg"
              alt="Store Logo"
            />
          </h3>
        </a >
      </div >

      {/* Links Section */}
      <div div className="items-center hidden space-x-8 lg:flex" >
        <Link to="/">
          <a className="flex text-gray-600 cursor-pointer transition-colors duration-300 font-semibold">
            Inicio
          </a>
        </Link>

        <a className="flex text-gray-600 hover:text-gray-700 cursor-pointer transition-colors duration-300 ">
          Temas
        </a>

        <a className="flex text-gray-600 hover:text-gray-700 cursor-pointer transition-colors duration-300">
          Desarrolladores
        </a>

        <a className="flex text-gray-600 hover:text-gray-700 cursor-pointer transition-colors duration-300">
          Precio
        </a>

        <a className="flex text-gray-600 hover:text-gray-700 cursor-pointer transition-colors duration-300">
          Blog
        </a>

        <a className="flex text-gray-600 hover:text-gray-700 cursor-pointer transition-colors duration-300">
          Nosotros
        </a>
      </div >

      {/* Icon Menu Section */}
      < div className="flex items-center space-x-5" >
        {/* Agregar */}
        <Link to="/new">
          <button class="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded">
            Agregar
          </button>
        </Link>

        {/* Login */}
        <a a className="flex text-gray-600 cursor-pointer transition-colors duration-300 font-semibold " >
          <svg
            className="fill-current h-5 w-5 mr-2 mt-0.5"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            version="1.1"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              d="M10,17V14H3V10H10V7L15,12L10,17M10,2H19A2,2 0 0,1 21,4V20A2,2 0 0,1 19,22H10A2,2 0 0,1 8,20V18H10V20H19V4H10V6H8V4A2,2 0 0,1 10,2Z"
            />
          </svg>

          Salir
        </a >
      </div >
    </nav >
  );
}

export default Navbar;