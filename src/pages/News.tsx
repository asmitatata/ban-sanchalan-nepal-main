import React from "react";
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const News: React.FC = () => {
  const { t } = useLanguage();

  const newsItems = [
    {
      id: 1,
      title: "वन संरक्षणमा नयाँ नीति",
      date: "2025-04-25",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
      summary:
        "नेपाल सरकारले वन संरक्षणको लागि नयाँ नीति जारी गरेको छ। यस नीतिले वन क्षेत्रको सुरक्षा र दिगो व्यवस्थापनलाई बढावा दिनेछ।",
      link: "https://forestaction.org/news/1",
    },
    {
      id: 2,
      title: "वन्यजन्तु संरक्षण कार्यक्रम",
      date: "2025-04-20",
      image: "https://images.unsplash.com/photo-1511497584788-876760111969",
      summary:
        "वन्यजन्तु संरक्षणको लागि नयाँ कार्यक्रम सुरु गरिएको छ। यस कार्यक्रममा स्थानीय समुदायको सहभागिता महत्वपूर्ण छ।",
      link: "https://forestaction.org/news/2",
    },
    {
      id: 3,
      title: "सामुदायिक वन व्यवस्थापन",
      date: "2025-04-15",
      image: "https://images.unsplash.com/photo-1448375240586-882707db888b",
      summary:
        "सामुदायिक वन व्यवस्थापनमा नयाँ सफलता प्राप्त भएको छ। यसले स्थानीय समुदायको आर्थिक स्थिति सुधार गर्दैछ।",
      link: "https://forestaction.org/news/3",
    },
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          समाचार र अपडेटहरू
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsItems.map((item) => (
            <Card key={item.id} className="overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <CardHeader>
                <CardTitle className="text-xl">{item.title}</CardTitle>
                <p className="text-sm text-gray-500">{item.date}</p>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{item.summary}</p>
                <Button asChild variant="outline" className="w-full">
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    थप पढ्नुहोस्
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default News;
