import React, { useState } from "react";
import Layout from "@/components/Layout";
import { TrainingRegistration } from "@/components/TrainingRegistration";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, Clock, MapPin, Users, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface TrainingProgram {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  availableSpots: number;
  description: string;
}

const Training: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("upcoming");

  // Mock data for training programs
  const trainingPrograms: TrainingProgram[] = [
    {
      id: "1",
      title: "वन संरक्षण सम्मेलन",
      date: "2025-05-15",
      time: "10:00 - 16:00",
      location: "काठमाडौं, नेपाल",
      availableSpots: 50,
      description:
        "वन संरक्षणमा नवीन पद्धतिहरू र प्रविधिहरू सिक्नुहोस्। यो सम्मेलनमा विशेषज्ञहरूको प्रस्तुति, प्यानल छलफल, र प्रायोगिक कार्यशालाहरू समावेश छन्।",
    },
    {
      id: "2",
      title: "वन्यजन्तु संरक्षण कार्यशाला",
      date: "2025-06-10",
      time: "09:30 - 15:00",
      location: "पोखरा, नेपाल",
      availableSpots: 30,
      description:
        "वन्यजन्तु चोरी शिकारी विरुद्ध रणनीति र अनुगमन विधिहरू सिक्नुहोस्। यो कार्यशालामा प्रायोगिक प्रशिक्षण र केस स्टडीहरू समावेश छन्।",
    },
    {
      id: "3",
      title: "वन प्रकोप व्यवस्थापन तालिम",
      date: "2025-07-22",
      time: "09:00 - 17:00",
      location: "धरान, नेपाल",
      availableSpots: 25,
      description:
        "वनमा आगलागी र अन्य प्रकोपहरू व्यवस्थापनको लागि तालिम। यस तालिममा प्रकोप व्यवस्थापन, प्रतिकार र रोकथामका उपायहरू सिक्ने अवसर प्राप्त हुनेछ।",
    },
  ];

  // Filter training programs based on search query
  const filteredPrograms = trainingPrograms.filter(
    (program) =>
      program.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      program.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      program.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4 md:mb-0">
            तालिम कार्यक्रमहरू
          </h1>

          <div className="relative w-full md:w-64">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
            <Input
              type="text"
              placeholder="तालिम खोज्नुहोस्..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <Tabs
          defaultValue="upcoming"
          className="space-y-6"
          onValueChange={setActiveTab}
        >
          <TabsList>
            <TabsTrigger value="upcoming">आगामी तालिमहरू</TabsTrigger>
            <TabsTrigger value="ongoing">चालु तालिमहरू</TabsTrigger>
            <TabsTrigger value="completed">पूरा भएका तालिमहरू</TabsTrigger>
          </TabsList>

          <TabsContent value="upcoming" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 space-y-6">
                {filteredPrograms.length === 0 ? (
                  <Card>
                    <CardContent className="pt-6">
                      <p className="text-center text-gray-600">
                        खोज अनुसार कुनै तालिम फेला परेन
                      </p>
                    </CardContent>
                  </Card>
                ) : (
                  filteredPrograms.map((program) => (
                    <Card key={program.id}>
                      <CardHeader>
                        <CardTitle>{program.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="flex items-center text-sm text-gray-600">
                            <Calendar className="h-4 w-4 mr-2" />
                            <span>{program.date}</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-600">
                            <Clock className="h-4 w-4 mr-2" />
                            <span>{program.time}</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-600">
                            <MapPin className="h-4 w-4 mr-2" />
                            <span>{program.location}</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-600">
                            <Users className="h-4 w-4 mr-2" />
                            <span>
                              {program.availableSpots} स्थानहरू उपलब्ध
                            </span>
                          </div>
                          <p className="text-gray-600">{program.description}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))
                )}
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
