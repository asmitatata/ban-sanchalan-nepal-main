import React from "react";
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useAuth } from "@/contexts/AuthContext";
import { Calendar, Clock, TrainTrack, User, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { TrainingCalendar } from "@/components/Calendar";
import { Statistics } from "@/components/Statistics";

const Dashboard: React.FC = () => {
  const { currentUser } = useAuth();

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              कर्मचारी ड्यासबोर्ड
            </h1>
            <p className="text-gray-600">
              स्वागत छ,{" "}
              {currentUser?.displayName || currentUser?.email?.split("@")[0]}
            </p>
          </div>
          <div className="bg-[#0b5345] text-white rounded-full px-4 py-1 text-sm">
            कर्मचारी ID: NDF{Math.floor(10000 + Math.random() * 90000)}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                तालिम कार्यक्रम
              </CardTitle>
              <TrainTrack className="h-5 w-5 text-[#0b5345]" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">5</div>
              <p className="text-xs text-gray-600">हालसम्म उपस्थित</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                पदस्थापन अवधि
              </CardTitle>
              <Calendar className="h-5 w-5 text-[#0b5345]" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3 वर्ष</div>
              <p className="text-xs text-gray-600">हालको पदमा</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                आगामी तालिम
              </CardTitle>
              <Clock className="h-5 w-5 text-[#0b5345]" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">10 दिन</div>
              <p className="text-xs text-gray-600">वन संरक्षण सम्मेलन</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                टिम सदस्यहरू
              </CardTitle>
              <Users className="h-5 w-5 text-[#0b5345]" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
              <p className="text-xs text-gray-600">तपाईंको टिममा</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="lg:col-span-2">
            <Statistics />
          </div>
          <div>
            <TrainingCalendar />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="col-span-1 lg:col-span-2">
            <CardHeader>
              <CardTitle>आगामी तालिम कार्यक्रमहरू</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border-b pb-3">
                  <div className="flex justify-between items-center mb-1">
                    <h3 className="font-medium">वन संरक्षण सम्मेलन</h3>
                    <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                      आगामी
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-2">
                    वन संरक्षणमा नवीन पद्धतिहरू र प्रविधिहरू सिक्नुहोस्
                  </p>
                  <div className="flex items-center text-xs text-gray-500">
                    <Calendar className="h-3 w-3 mr-1" /> 2025-05-15
                    <span className="mx-3">|</span>
                    <Clock className="h-3 w-3 mr-1" /> 10:00 - 16:00
                  </div>
                </div>

                <div className="border-b pb-3">
                  <div className="flex justify-between items-center mb-1">
                    <h3 className="font-medium">वन्यजन्तु संरक्षण कार्यशाला</h3>
                    <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                      भर्ना खुला
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-2">
                    वन्यजन्तु चोरी शिकारी विरुद्ध रणनीति र अनुगमन विधिहरू
                  </p>
                  <div className="flex items-center text-xs text-gray-500">
                    <Calendar className="h-3 w-3 mr-1" /> 2025-06-10
                    <span className="mx-3">|</span>
                    <Clock className="h-3 w-3 mr-1" /> 09:30 - 15:00
                  </div>
                </div>

                <div className="border-b pb-3">
                  <div className="flex justify-between items-center mb-1">
                    <h3 className="font-medium">प्रकोप व्यवस्थापन प्रशिक्षण</h3>
                    <span className="bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded">
                      सीमित स्थान
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-2">
                    वनमा आगलागी र अन्य प्रकोपहरू व्यवस्थापनको लागि तालिम
                  </p>
                  <div className="flex items-center text-xs text-gray-500">
                    <Calendar className="h-3 w-3 mr-1" /> 2025-07-22
                    <span className="mx-3">|</span>
                    <Clock className="h-3 w-3 mr-1" /> 09:00 - 17:00
                  </div>
                </div>

                <div>
                  <Link
                    to="/training"
                    className="text-[#0b5345] text-sm hover:underline"
                  >
                    सबै तालिम कार्यक्रमहरू हेर्नुहोस्
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>प्रोफाइल जानकारी</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center mb-6">
                <div className="h-20 w-20 rounded-full bg-[#0b5345] flex items-center justify-center text-white text-2xl mb-2">
                  <User className="h-12 w-12" />
                </div>
                <h3 className="font-medium">
                  {currentUser?.displayName ||
                    currentUser?.email?.split("@")[0]}
                </h3>
                <p className="text-sm text-gray-600">{currentUser?.email}</p>
              </div>

              <div className="space-y-3 border-t pt-4">
                <div>
                  <p className="text-xs text-gray-500">पद</p>
                  <p className="font-medium">वन संरक्षण अधिकारी</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">विभाग</p>
                  <p className="font-medium">वन संरक्षण</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">कार्यालय स्थान</p>
                  <p className="font-medium">काठमाडौं, नेपाल</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">सम्पर्क</p>
                  <p className="font-medium">+977 9841XXXXXX</p>
                </div>
              </div>

              <Link
                to="/profile"
                className="block text-center mt-4 text-[#0b5345] text-sm hover:underline"
              >
                प्रोफाइल सम्पादन गर्नुहोस्
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
