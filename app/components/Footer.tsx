export default function Footer(){
    return (
        <footer className="bg-gray-800 float-bottom text-white p-8 text-center mt-auto">
                <div className="flex flex-col items-center mb-4 space-y-4 md:flex-row md:justify-center md:space-x-8 md:space-y-0">
                <div className="flex items-center border-r border-gray-600 pr-4">
                <a href="mailto:correo@tuempresa.com" className="text-4xl hover:text-gray-500">
                    <i className="far fa-envelope"></i>
                </a>
                </div>
                <div className="flex items-center border-r border-gray-600 pr-4">
                <a href="https://www.instagram.com/tuempresa" target="_blank" rel="noopener noreferrer" className="text-4xl hover:text-gray-500">
                    <i className="fab fa-instagram"></i>
                </a>
                </div>
                <div className="flex items-center border-r border-gray-600 pr-4">
                <a href="https://twitter.com/tuempresa" target="_blank" rel="noopener noreferrer" className="text-4xl hover:text-gray-500">
                    <i className="fab fa-twitter"></i>
                </a>
                </div>
                <div className="flex items-center">
                <a href="https://www.facebook.com/tuempresa" target="_blank" rel="noopener noreferrer" className="text-4xl hover:text-gray-500">
                    <i className="fab fa-facebook"></i>
                </a>
                </div>
      </div>
            <p className="mb-2">
                <i className="fas fa-phone"></i> 943 46 46 46
            </p>
            <p>&copy; 2024 Tu Empresa</p>
        </footer>
    );
  };
  
  