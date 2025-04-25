import React from "react";
import Layout from "@/components/Layout";
import { TrainingRegistration } from "@/components/TrainingRegistration";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, Clock, MapPin, Users } from "lucide-react";

const Training: React.FC = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          तालिम कार्यक्रमहरू
        </h1>

        <Tabs defaultValue="upcoming" className="space-y-6">
          <TabsList>
            <TabsTrigger value="upcoming">आगामी तालिमहरू</TabsTrigger>
            <TabsTrigger value="ongoing">चालु तालिमहरू</TabsTrigger>
            <TabsTrigger value="completed">पूरा भएका तालिमहरू</TabsTrigger>
          </TabsList>

          <TabsContent value="upcoming" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>वन संरक्षण सम्मेलन</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center text-sm text-gray-600">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span>2025-05-15</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Clock className="h-4 w-4 mr-2" />
                        <span>10:00 - 16:00</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <MapPin className="h-4 w-4 mr-2" />
                        <span>काठमाडौं, नेपाल</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Users className="h-4 w-4 mr-2" />
                        <span>50 स्थानहरू उपलब्ध</span>
                      </div>
                      <p className="text-gray-600">
                        वन संरक्षणमा नवीन पद्धतिहरू र प्रविधिहरू सिक्नुहोस्। यो
                        सम्मेलनमा विशेषज्ञहरूको प्रस्तुति, प्यानल छलफल, र
                        प्रायोगिक कार्यशालाहरू समावेश छन्।
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>वन्यजन्तु संरक्षण कार्यशाला</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center text-sm text-gray-600">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span>2025-06-10</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Clock className="h-4 w-4 mr-2" />
                        <span>09:30 - 15:00</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <MapPin className="h-4 w-4 mr-2" />
                        <span>पोखरा, नेपाल</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Users className="h-4 w-4 mr-2" />
                        <span>30 स्थानहरू उपलब्ध</span>
                      </div>
                      <p className="text-gray-600">
                        वन्यजन्तु चोरी शिकारी विरुद्ध रणनीति र अनुगमन विधिहरू
                        सिक्नुहोस्। यो कार्यशालामा प्रायोगिक प्रशिक्षण र केस
                        स्टडीहरू समावेश छन्।
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div>
                <TrainingRegistration />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="ongoing">
            <Card>
              <CardContent className="pt-6">
                <p className="text-center text-gray-600">
                  हाल कुनै चालु तालिम छैन
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="completed">
            <Card>
              <CardContent className="pt-6">
                <p className="text-center text-gray-600">
                  पूरा भएका तालिमहरू यहाँ देखाइनेछन्
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default Training;
