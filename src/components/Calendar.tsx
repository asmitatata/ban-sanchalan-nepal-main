import { Calendar as CalendarIcon } from "lucide-react";
import { DayPicker } from "react-day-picker";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";

interface TrainingEvent {
  date: Date;
  title: string;
  type: "upcoming" | "ongoing" | "completed";
}

const trainingEvents: TrainingEvent[] = [
  {
    date: new Date(2025, 4, 15),
    title: "वन संरक्षण सम्मेलन",
    type: "upcoming",
  },
  {
    date: new Date(2025, 5, 10),
    title: "वन्यजन्तु संरक्षण कार्यशाला",
    type: "upcoming",
  },
  {
    date: new Date(2025, 6, 22),
    title: "प्रकोप व्यवस्थापन प्रशिक्षण",
    type: "upcoming",
  },
];

export function TrainingCalendar() {
  const [selected, setSelected] = useState<Date | undefined>(new Date());

  const modifiers = {
    hasEvent: trainingEvents.map((event) => event.date),
    upcoming: trainingEvents
      .filter((event) => event.type === "upcoming")
      .map((event) => event.date),
    ongoing: trainingEvents
      .filter((event) => event.type === "ongoing")
      .map((event) => event.date),
    completed: trainingEvents
      .filter((event) => event.type === "completed")
      .map((event) => event.date),
  };

  const modifiersStyles = {
    hasEvent: {
      fontWeight: "bold",
      color: "#0b5345",
    },
    upcoming: {
      backgroundColor: "#e6f4ea",
    },
    ongoing: {
      backgroundColor: "#fff3e0",
    },
    completed: {
      backgroundColor: "#f5f5f5",
      textDecoration: "line-through",
    },
  };

  const selectedEvent = trainingEvents.find(
    (event) => event.date.toDateString() === selected?.toDateString()
  );

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <CalendarIcon className="h-5 w-5" />
          तालिम क्यालेन्डर
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col md:flex-row gap-4">
          <DayPicker
            mode="single"
            selected={selected}
            onSelect={setSelected}
            modifiers={modifiers}
            modifiersStyles={modifiersStyles}
            className="border rounded-md p-3"
          />
          <div className="flex-1">
            {selectedEvent ? (
              <div className="p-4 border rounded-md">
                <h3 className="font-medium mb-2">{selectedEvent.title}</h3>
                <p className="text-sm text-gray-600">
                  मिति: {selectedEvent.date.toLocaleDateString("ne-NP")}
                </p>
                <p className="text-sm text-gray-600">
                  स्थिति:{" "}
                  {selectedEvent.type === "upcoming"
                    ? "आगामी"
                    : selectedEvent.type === "ongoing"
                    ? "चालु"
                    : "पूरा"}
                </p>
              </div>
            ) : (
              <div className="p-4 border rounded-md text-center text-gray-500">
                कृपया एउटा मिति चयन गर्नुहोस्
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
