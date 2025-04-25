import React from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Landing: React.FC = () => {
  return (
    <Layout>
      <section className="bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/New-Map-of-Nepal-Vector-Map.svg/1920px-New-Map-of-Nepal-Vector-Map.svg.png')] bg-cover bg-center py-40 text-white relative">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold mb-4">
              नेपाल वन विभागमा स्वागत छ
            </h1>
            <p className="text-xl mb-6">
              वन व्यवस्थापन र जैविक विविधताको संरक्षणमा समर्पित
            </p>
            <div className="flex space-x-4">
              <Button size="lg" asChild>
                <Link to="/login">कर्मचारी लगइन</Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="bg-transparent border-white text-white hover:bg-white hover:text-[#0b5345]"
              >
                <a href="#about">थप जान्नुहोस्</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              हाम्रो बारेमा
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              नेपाल वन विभाग वन र वन्यजन्तु संरक्षणको लागि कार्यरत नेपाल सरकारको
              एक प्रमुख निकाय हो।
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="bg-[#0b5345] h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="white"
                    className="w-8 h-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">वन संरक्षण</h3>
                <p className="text-gray-600">
                  नेपालका वन क्षेत्रहरूको सुरक्षा र दिगो व्यवस्थापनका लागि
                  समर्पित।
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="bg-[#0b5345] h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="white"
                    className="w-8 h-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">जैविक विविधता</h3>
                <p className="text-gray-600">
                  जैविक विविधताको संरक्षण र प्रवर्धनका लागि प्रतिबद्ध।
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="bg-[#0b5345] h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="white"
                    className="w-8 h-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.479m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">समुदायिक सहकार्य</h3>
                <p className="text-gray-600">
                  स्थानीय समुदायहरूसँग काम गर्दै वनको दिगो व्यवस्थापन गर्न।
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <img
                src="https://www.altitudehimalaya.com/media/files/Blog/Travel-Guides/makalu-in-nepal.jpg"
                alt="Forest Conservation"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                हाम्रो दृष्टि
              </h2>
              <p className="text-gray-600 mb-6">
                नेपालका वनहरूलाई दिगो रूपमा व्यवस्थापन गर्न र वन्यजन्तुको
                संरक्षणमा योगदान पुर्‍याउन हामी प्रतिबद्ध छौं। हाम्रो उद्देश्य
                वातावरणीय स्थिरता कायम गर्दै स्थानीय जीवनमा सुधार ल्याउनु हो।
              </p>
              <p className="text-gray-600">
                हामी वन्यजन्तु संरक्षण, वनको व्यवस्थापन र वन्यजन्तुको अवैध
                तस्करी रोक्नका लागि राष्ट्रिय र अन्तर्राष्ट्रिय साझेदारहरूसँग
                काम गर्दछौं।
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#0b5345] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            कर्मचारी पोर्टलमा लगइन गर्नुहोस्
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            यदि तपाईं नेपाल वन विभागको कर्मचारी हुनुहुन्छ भने, व्यक्तिगत
            ड्यासबोर्ड, तालिम कार्यक्रम र अन्य सुविधाहरूमा पहुँच प्राप्त गर्न
            लगइन गर्नुहोस्।
          </p>
          <div className="flex justify-center space-x-4">
            <Button
              size="lg"
              className="bg-white text-[#0b5345] hover:bg-gray-100"
              asChild
            >
              <Link to="/login">लगइन गर्नुहोस्</Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-[#0b5345]"
              asChild
            >
              <Link to="/register">दर्ता गर्नुहोस्</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Landing;
