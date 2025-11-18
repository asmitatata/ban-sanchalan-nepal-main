import React from "react";
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { FileText, Book, Download, FileSpreadsheet } from "lucide-react";

const Resources: React.FC = () => {
  const { t } = useLanguage();

  const resources = [
    {
      id: 1,
      title: "वन नीति २०२५",
      type: "document",
      icon: <FileText className="h-6 w-6" />,
      description: "नेपालको वन नीति २०२५ को पूर्ण प्रतिलिपि",
      link: "/documents/forest-policy-2025.pdf",
    },
    {
      id: 2,
      title: "वन्यजन्तु संरक्षण दिशानिर्देश",
      type: "guide",
      icon: <Book className="h-6 w-6" />,
      description: "वन्यजन्तु संरक्षणका लागि दिशानिर्देशहरू",
      link: "/documents/wildlife-guidelines.pdf",
    },
    {
      id: 3,
      title: "वन आँकडा २०२४",
      type: "data",
      icon: <FileSpreadsheet className="h-6 w-6" />,
      description: "वन क्षेत्रको वार्षिक आँकडा र विश्लेषण",
      link: "/documents/forest-data-2024.xlsx",
    },
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">स्रोत केन्द्र</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((resource) => (
            <Card key={resource.id}>
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-[#0b5345] text-white rounded-lg">
                    {resource.icon}
                  </div>
                  <CardTitle className="text-xl">{resource.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{resource.description}</p>
                <Button asChild variant="outline" className="w-full">
                  <a
                    href={resource.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-2"
                  >
                    <Download className="h-4 w-4" />
                    <span>डाउनलोड गर्नुहोस्</span>
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

export default Resources;
