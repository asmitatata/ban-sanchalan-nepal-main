import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { LogOut, User } from "lucide-react";

const Header: React.FC = () => {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
    } catch (error) {
      console.error("Failed to log out", error);
    }
  };

  return (
    <header className="bg-[#0b5345] text-white shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Emblem_of_Nepal.svg/1500px-Emblem_of_Nepal.svg.png"
              alt="Forest Department Logo"
              className="h-12 w-12 object-cover rounded-full border-2 border-white"
            />
            <div>
              <h1 className="text-xl font-bold">
                वन अनुसन्धान तथा प्रशिक्षण केन्द्र
              </h1>
              <p className="text-xs">Forest Department Nepal</p>
            </div>
          </div>

          <nav className="hidden md:flex space-x-4">
            <Link to="/" className="hover:text-gray-300 transition-colors">
              Home
            </Link>
            {currentUser ? (
              <>
                <Link
                  to="/dashboard"
                  className="hover:text-gray-300 transition-colors"
                >
                  ड्यासबोर्ड
                </Link>
                <Link
                  to="/profile"
                  className="hover:text-gray-300 transition-colors"
                >
                  प्रोफाइल
                </Link>
                <Link
                  to="/training"
                  className="hover:text-gray-300 transition-colors"
                >
                  तालिम
                </Link>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="hover:text-gray-300 transition-colors"
                >
                  लगइन
                </Link>
                <Link
                  to="/register"
                  className="hover:text-gray-300 transition-colors"
                >
                  दर्ता
                </Link>
              </>
            )}
          </nav>

          {currentUser && (
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                className="bg-transparent border-white text-white hover:bg-white hover:text-[#0b5345]"
                onClick={() => navigate("/profile")}
              >
                <User className="h-4 w-4 mr-1" />
                {currentUser.email?.split("@")[0]}
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="bg-transparent border-white text-white hover:bg-white hover:text-[#0b5345]"
                onClick={handleLogout}
              >
                <LogOut className="h-4 w-4 mr-1" />
                लगआउट
              </Button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
