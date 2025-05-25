
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { FileText, User } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <FileText className="w-8 h-8 text-green-600" />
            <span className="text-xl font-bold text-gray-900">eGov Sénégal</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-600 hover:text-green-600 transition-colors">
              Accueil
            </Link>
            <Link to="/services" className="text-gray-600 hover:text-green-600 transition-colors">
              Services
            </Link>
            <Link to="/faq" className="text-gray-600 hover:text-green-600 transition-colors">
              FAQ
            </Link>
            <Link to="/contact" className="text-gray-600 hover:text-green-600 transition-colors">
              Contact
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Button asChild variant="ghost">
              <Link to="/login">
                <User className="w-4 h-4 mr-2" />
                Connexion
              </Link>
            </Button>
            <Button asChild className="bg-green-600 hover:bg-green-700">
              <Link to="/register">S'inscrire</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
