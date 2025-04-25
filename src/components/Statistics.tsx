import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Award, BookOpen, Clock, Target } from "lucide-react";

const trainingData = [
  { month: "बैशाख", completed: 3, upcoming: 2 },
  { month: "जेठ", completed: 2, upcoming: 3 },
  { month: "असार", completed: 4, upcoming: 1 },
  { month: "श्रावण", completed: 1, upcoming: 4 },
  { month: "भद्र", completed: 2, upcoming: 2 },
  { month: "आश्विन", completed: 3, upcoming: 1 },
];

const achievements = [
  {
    title: "उत्कृष्ट प्रदर्शन",
    description: "वन संरक्षण तालिममा सर्वोत्कृष्ट",
    icon: Award,
    color: "text-yellow-500",
  },
  {
    title: "नियमित उपस्थिति",
    description: "सबै तालिमहरूमा 95% उपस्थिति",
    icon: Clock,
    color: "text-green-500",
  },
  {
    title: "सर्टिफिकेट",
    description: "5 पेशागत सर्टिफिकेटहरू",
    icon: BookOpen,
    color: "text-blue-500",
  },
  {
    title: "लक्ष्य",
    description: "वार्षिक लक्ष्यको 80% पूरा",
    icon: Target,
    color: "text-purple-500",
  },
];

export function Statistics() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {achievements.map((achievement, index) => {
          const Icon = achievement.icon;
          return (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">
                  {achievement.title}
                </CardTitle>
                <Icon className={`h-5 w-5 ${achievement.color}`} />
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  {achievement.description}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>तालिम प्रगति</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={trainingData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="completed" name="पूरा" fill="#0b5345" />
                <Bar dataKey="upcoming" name="आगामी" fill="#e6f4ea" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
