import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin, Users } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { TrainingRegistrationForm } from "./TrainingRegistrationForm";

const trainings = [
  {
    id: "1",
    title: "वन संरक्षण र जैविक विविधता प्रबन्धन",
    date: "2025-05-15",
    time: "10:00 - 16:00",
    description:
      "वन संरक्षण र जैविक विविधता प्रबन्धनको लागि व्यवहारिक तालिम। यस तालिममा वन संरक्षणका नवीन पद्धतिहरू, जैविक विविधता मूल्याङ्कन, र संरक्षण रणनीतिहरू सिक्ने अवसर प्राप्त हुनेछ।",
    location: "काठमाडौं, नेपाल",
    maxParticipants: 30,
  },
  {
    id: "2",
    title: "वन्यजन्तु संरक्षण र अनुगमन",
    date: "2025-06-10",
    time: "09:30 - 15:00",
    description:
      "वन्यजन्तु संरक्षण र अनुगमनको लागि विशेष तालिम। यस तालिममा वन्यजन्तु चोरी शिकारी विरुद्ध रणनीति, अनुगमन विधिहरू, र संरक्षण प्रयासहरू सिक्ने अवसर प्राप्त हुनेछ।",
    location: "पोखरा, नेपाल",
    maxParticipants: 25,
  },
  {
    id: "3",
    title: "वन प्रकोप व्यवस्थापन र प्रतिकार",
    date: "2025-07-22",
    time: "09:00 - 17:00",
    description:
      "वनमा आगलागी र अन्य प्रकोपहरू व्यवस्थापनको लागि तालिम। यस तालिममा प्रकोप व्यवस्थापन, प्रतिकार र रोकथामका उपायहरू सिक्ने अवसर प्राप्त हुनेछ।",
    location: "धरान, नेपाल",
    maxParticipants: 20,
  },
  {
    id: "4",
    title: "वन उद्यम र आर्थिक विकास",
    date: "2025-08-05",
    time: "10:00 - 16:00",
    description:
      "वन उद्यम र आर्थिक विकासको लागि तालिम। यस तालिममा वन उद्यम विकास, बजार व्यवस्थापन, र आर्थिक स्थिरता सिक्ने अवसर प्राप्त हुनेछ।",
    location: "बिरगंज, नेपाल",
    maxParticipants: 35,
  },
  {
    id: "5",
    title: "जलवायु परिवर्तन र वन संरक्षण",
    date: "2025-09-15",
    time: "09:30 - 15:30",
    description:
      "जलवायु परिवर्तन र वन संरक्षणको लागि तालिम। यस तालिममा जलवायु परिवर्तनको प्रभाव, अनुकूलन र रोकथामका उपायहरू सिक्ने अवसर प्राप्त हुनेछ।",
    location: "हेटौंडा, नेपाल",
    maxParticipants: 30,
  },
];

export const AvailableTrainings: React.FC = () => {
  const [selectedTraining, setSelectedTraining] = useState<
    (typeof trainings)[0] | null
  >(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleRegister = (training: (typeof trainings)[0]) => {
    setSelectedTraining(training);
    setIsDialogOpen(true);
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {trainings.map((training) => (
          <Card key={training.id} className="hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle className="text-lg">{training.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-gray-600">{training.description}</p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="h-4 w-4 mr-2" />
                    {training.date}
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="h-4 w-4 mr-2" />
                    {training.time}
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <MapPin className="h-4 w-4 mr-2" />
                    {training.location}
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Users className="h-4 w-4 mr-2" />
                    अधिकतम {training.maxParticipants} सहभागी
                  </div>
                </div>
                <Button
                  className="w-full"
                  onClick={() => handleRegister(training)}
                >
                  दर्ता गर्नुहोस्
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>तालिम दर्ता फारम</DialogTitle>
          </DialogHeader>
          {selectedTraining && (
            <TrainingRegistrationForm
              training={selectedTraining}
              onClose={() => setIsDialogOpen(false)}
            />
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};
