
import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0b5345] text-white py-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">वन विभाग नेपाल</h3>
            <p className="text-sm">
              नेपाल सरकार<br />
              वन तथा वातावरण मन्त्रालय<br />
              बबरमहल, काठमाडौं
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">सम्पर्क</h3>
            <p className="text-sm">
              फोन: +977-1-4221231<br />
              फ्याक्स: +977-1-4227374<br />
              इमेल: info@dof.gov.np
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">उपयोगी लिंकहरू</h3>
            <ul className="text-sm space-y-2">
              <li><Link to="/" className="hover:underline">गृहपृष्ठ</Link></li>
              <li><a href="#" className="hover:underline">सूचनाको हक</a></li>
              <li><a href="#" className="hover:underline">सम्पर्क</a></li>
              <li><a href="#" className="hover:underline">नक्सा</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-4 border-t border-white/20 text-center text-sm">
          <p>© {new Date().getFullYear()} वन विभाग नेपाल। सर्वाधिकार सुरक्षित</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
