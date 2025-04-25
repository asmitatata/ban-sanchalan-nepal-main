
import React, { useState } from "react";
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "@/hooks/use-toast";
import { User } from "lucide-react";

const Profile: React.FC = () => {
  const { currentUser } = useAuth();
  const [loading, setLoading] = useState(false);
  
  // Form fields
  const [formData, setFormData] = useState({
    fullName: currentUser?.displayName || "",
    email: currentUser?.email || "",
    position: "वन संरक्षण अधिकारी",
    department: "वन संरक्षण",
    office: "काठमाडौं, नेपाल",
    phone: "+977 9841XXXXXX",
    joinDate: "2020-04-15"
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate profile update
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "प्रोफाइल अपडेट भयो",
        description: "तपाईंको प्रोफाइल जानकारी सफलतापूर्वक अपडेट गरिएको छ।",
      });
    }, 1000);
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-gray-900">प्रोफाइल व्यवस्थापन</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle className="text-center">प्रोफाइल</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center">
                <div className="h-32 w-32 rounded-full bg-[#0b5345] flex items-center justify-center text-white mb-4">
                  <User className="h-16 w-16" />
                </div>
                <h3 className="text-xl font-medium">
                  {currentUser?.displayName || currentUser?.email?.split("@")[0]}
                </h3>
                <p className="text-gray-600">{currentUser?.email}</p>
                <p className="mt-2 text-sm text-gray-500">
                  कर्मचारी ID: NDF{Math.floor(10000 + Math.random() * 90000)}
                </p>
                
                <div className="w-full mt-6 pt-6 border-t">
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm font-medium">पद</p>
                      <p className="text-gray-600">{formData.position}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium">विभाग</p>
                      <p className="text-gray-600">{formData.department}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium">कार्यालय स्थान</p>
                      <p className="text-gray-600">{formData.office}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium">नियुक्ति मिति</p>
                      <p className="text-gray-600">{formData.joinDate}</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>प्रोफाइल विवरण सम्पादन</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="fullName">पूरा नाम</Label>
                    <Input
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">इमेल</Label>
                    <Input
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      disabled
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="position">पद</Label>
                    <Input
                      id="position"
                      name="position"
                      value={formData.position}
                      onChange={handleChange}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="department">विभाग</Label>
                    <Input
                      id="department"
                      name="department"
                      value={formData.department}
                      onChange={handleChange}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="office">कार्यालय स्थान</Label>
                    <Input
                      id="office"
                      name="office"
                      value={formData.office}
                      onChange={handleChange}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">फोन नम्बर</Label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="joinDate">नियुक्ति मिति</Label>
                    <Input
                      id="joinDate"
                      name="joinDate"
                      type="date"
                      value={formData.joinDate}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                
                <Button 
                  type="submit" 
                  className="mt-4 bg-[#0b5345] hover:bg-[#0a3d33]"
                  disabled={loading}
                >
                  {loading ? "अपडेट गर्दै..." : "प्रोफाइल अपडेट गर्नुहोस्"}
                </Button>
              </form>
              
              <div className="mt-8 pt-6 border-t">
                <h3 className="text-lg font-medium mb-4">पासवर्ड परिवर्तन</h3>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="currentPassword">हालको पासवर्ड</Label>
                    <Input
                      id="currentPassword"
                      type="password"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="newPassword">नयाँ पासवर्ड</Label>
                    <Input
                      id="newPassword"
                      type="password"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">नयाँ पासवर्ड पुष्टि</Label>
                    <Input
                      id="confirmPassword"
                      type="password"
                    />
                  </div>
                  
                  <Button variant="outline">
                    पासवर्ड परिवर्तन गर्नुहोस्
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
