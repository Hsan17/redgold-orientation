
import React from "react";
import { Link } from "react-router-dom";
import { Compass, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-burgundy text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo and About */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2 text-2xl font-serif font-bold text-white">
              <Compass className="h-8 w-8 text-gold" />
              <span>OrientPlus</span>
            </Link>
            <p className="text-white/80 mt-4">
              Plateforme d'orientation intelligente pour guider les étudiants post-bac vers leur avenir professionnel idéal.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-white hover:text-gold transition duration-200" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-gold transition duration-200" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-gold transition duration-200" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-gold transition duration-200" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-serif font-medium mb-4 text-gold">Liens rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-white/80 hover:text-gold transition duration-200">Accueil</Link>
              </li>
              <li>
                <Link to="/orientation" className="text-white/80 hover:text-gold transition duration-200">Orientation</Link>
              </li>
              <li>
                <Link to="/universities" className="text-white/80 hover:text-gold transition duration-200">Universités</Link>
              </li>
              <li>
                <Link to="/career" className="text-white/80 hover:text-gold transition duration-200">Simulation de carrière</Link>
              </li>
              <li>
                <Link to="/about" className="text-white/80 hover:text-gold transition duration-200">À propos</Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-xl font-serif font-medium mb-4 text-gold">Ressources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-white/80 hover:text-gold transition duration-200">Blog</a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-gold transition duration-200">Guides d'orientation</a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-gold transition duration-200">FAQ</a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-gold transition duration-200">Témoignages</a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-gold transition duration-200">Statistiques d'emploi</a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-serif font-medium mb-4 text-gold">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                <span className="text-white/80">123 Rue de l'Orientation, Tunis, Tunisie</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-gold" />
                <a href="mailto:contact@orientplus.tn" className="text-white/80 hover:text-gold transition duration-200">
                  contact@orientplus.tn
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-gold" />
                <a href="tel:+21612345678" className="text-white/80 hover:text-gold transition duration-200">
                  +216 12 345 678
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 text-center text-white/60">
          <p>© {currentYear} OrientPlus. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
