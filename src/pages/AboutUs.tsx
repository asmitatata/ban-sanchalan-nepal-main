import React from "react";
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Users, TreePine, Award } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

const AboutUs: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1
          className={`text-3xl font-bold mb-8 ${
            isDark ? "text-white" : "text-gray-900"
          }`}
        >
          हाम्रोबारे
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="space-y-6">
            <h2
              className={`text-2xl font-semibold ${
                isDark ? "text-gray-200" : "text-gray-800"
              }`}
            >
              वन संरक्षणको महत्व
            </h2>
            <p
              className={`leading-relaxed ${
                isDark ? "text-gray-300" : "text-gray-600"
              }`}
            >
              नेपालको वन संरक्षण विभागले देशको प्राकृतिक सम्पदा र जैविक विविधता
              संरक्षण गर्ने महत्वपूर्ण जिम्मेवारी लिएको छ। हाम्रो वन
              संरक्षकहरूले दिनरात कडा मेहनत गरेर वन्यजन्तु चोरी शिकारी विरुद्ध
              लडाई लडिरहेका छन् र वन संरक्षणको क्षेत्रमा नयाँ नयाँ प्रविधि र
              पद्धतिहरू प्रयोग गर्दै छन्।
            </p>
            <p
              className={`leading-relaxed ${
                isDark ? "text-gray-300" : "text-gray-600"
              }`}
            >
              हाम्रो टिमले वन संरक्षणको क्षेत्रमा विशेषज्ञता हासिल गरेको छ र
              नियमित तालिम कार्यक्रमहरू मार्फत कर्मचारीहरूको क्षमता अभिवृद्धि
              गर्दै आएको छ। यसले गर्दा वन संरक्षणको कार्यमा नयाँ नयाँ प्रविधि र
              पद्धतिहरूको प्रयोग गर्न सक्षम बनेको छ।
            </p>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
            <img
              src="https://www.naturesafariindia.com/wp-content/uploads/2022/07/forest-guards.jpg"
              alt="Forest Guards"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card
            className={`hover:shadow-md transition-shadow ${
              isDark ? "bg-gray-800" : "bg-white"
            }`}
          >
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle
                className={`text-sm font-medium ${
                  isDark ? "text-gray-200" : "text-gray-900"
                }`}
              >
                वन संरक्षकहरू
              </CardTitle>
              <Shield className="h-5 w-5 text-[#0b5345]" />
            </CardHeader>
            <CardContent>
              <div
                className={`text-2xl font-bold ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                500+
              </div>
              <p
                className={`text-xs ${
                  isDark ? "text-gray-400" : "text-gray-600"
                }`}
              >
                सक्रिय वन संरक्षकहरू
              </p>
            </CardContent>
          </Card>

          <Card
            className={`hover:shadow-md transition-shadow ${
              isDark ? "bg-gray-800" : "bg-white"
            }`}
          >
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle
                className={`text-sm font-medium ${
                  isDark ? "text-gray-200" : "text-gray-900"
                }`}
              >
                संरक्षित क्षेत्र
              </CardTitle>
              <TreePine className="h-5 w-5 text-[#0b5345]" />
            </CardHeader>
            <CardContent>
              <div
                className={`text-2xl font-bold ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                20+
              </div>
              <p
                className={`text-xs ${
                  isDark ? "text-gray-400" : "text-gray-600"
                }`}
              >
                राष्ट्रिय निकुञ्ज र वन्यजन्तु आरक्ष
              </p>
            </CardContent>
          </Card>

          <Card
            className={`hover:shadow-md transition-shadow ${
              isDark ? "bg-gray-800" : "bg-white"
            }`}
          >
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle
                className={`text-sm font-medium ${
                  isDark ? "text-gray-200" : "text-gray-900"
                }`}
              >
                सहभागीहरू
              </CardTitle>
              <Users className="h-5 w-5 text-[#0b5345]" />
            </CardHeader>
            <CardContent>
              <div
                className={`text-2xl font-bold ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                1000+
              </div>
              <p
                className={`text-xs ${
                  isDark ? "text-gray-400" : "text-gray-600"
                }`}
              >
                तालिम प्राप्त कर्मचारीहरू
              </p>
            </CardContent>
          </Card>

          <Card
            className={`hover:shadow-md transition-shadow ${
              isDark ? "bg-gray-800" : "bg-white"
            }`}
          >
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle
                className={`text-sm font-medium ${
                  isDark ? "text-gray-200" : "text-gray-900"
                }`}
              >
                उपलब्धिहरू
              </CardTitle>
              <Award className="h-5 w-5 text-[#0b5345]" />
            </CardHeader>
            <CardContent>
              <div
                className={`text-2xl font-bold ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                50+
              </div>
              <p
                className={`text-xs ${
                  isDark ? "text-gray-400" : "text-gray-600"
                }`}
              >
                राष्ट्रिय र अन्तर्राष्ट्रिय पुरस्कारहरू
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
            <img
              src="https://images.squarespace-cdn.com/content/v1/59ccd51c8dd04135bf0ee25b/6b766dca-8275-4e3b-815a-97790e29c5e6/IMG_3330.jpg"
              alt="Forest Conservation"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="space-y-6">
            <h2
              className={`text-2xl font-semibold ${
                isDark ? "text-gray-200" : "text-gray-800"
              }`}
            >
              हाम्रो लक्ष्य र उद्देश्यहरू
            </h2>
            <ul
              className={`space-y-4 ${
                isDark ? "text-gray-300" : "text-gray-600"
              }`}
            >
              <li className="flex items-start">
                <span className="mr-2">•</span>
                वन संरक्षणको क्षेत्रमा नयाँ नयाँ प्रविधि र पद्धतिहरूको विकास र
                प्रयोग
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                वन संरक्षकहरूको क्षमता अभिवृद्धि र पेशागत विकास
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                वन्यजन्तु चोरी शिकारी विरुद्ध प्रभावकारी रणनीति विकास
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                स्थानीय समुदायहरूसँगको सहयोग र सहकार्यमा वृद्धि
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                वन संरक्षणको क्षेत्रमा अनुसन्धान र विकास कार्यहरूको विस्तार
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutUs;
