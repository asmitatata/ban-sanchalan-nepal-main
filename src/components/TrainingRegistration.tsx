import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

interface TrainingFormData {
  name: string;
  email: string;
  phone: string;
  department: string;
  experience: string;
  trainingType: string;
  additionalNotes: string;
}

const initialFormData: TrainingFormData = {
  name: "",
  email: "",
  phone: "",
  department: "",
  experience: "",
  trainingType: "",
  additionalNotes: "",
};

export function TrainingRegistration() {
  const [formData, setFormData] = useState<TrainingFormData>(initialFormData);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log("Form submitted:", formData);
    toast({
      title: "तालिम दर्ता सफल",
      description: "तपाईंको तालिम दर्ता सफलतापूर्वक गरिएको छ।",
    });
    setFormData(initialFormData);
  };

  const handleChange = (field: keyof TrainingFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>तालिम दर्ता फारम</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">पूरा नाम</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => handleChange("name", e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">इमेल</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">फोन नम्बर</Label>
              <Input
                id="phone"
                value={formData.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="department">विभाग</Label>
              <Select
                value={formData.department}
                onValueChange={(value) => handleChange("department", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="विभाग चयन गर्नुहोस्" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="forest">वन संरक्षण</SelectItem>
                  <SelectItem value="wildlife">वन्यजन्तु संरक्षण</SelectItem>
                  <SelectItem value="disaster">प्रकोप व्यवस्थापन</SelectItem>
                  <SelectItem value="research">अनुसन्धान</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="experience">कार्य अनुभव (वर्षमा)</Label>
              <Input
                id="experience"
                type="number"
                value={formData.experience}
                onChange={(e) => handleChange("experience", e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="trainingType">तालिम प्रकार</Label>
              <Select
                value={formData.trainingType}
                onValueChange={(value) => handleChange("trainingType", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="तालिम प्रकार चयन गर्नुहोस्" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="conference">सम्मेलन</SelectItem>
                  <SelectItem value="workshop">कार्यशाला</SelectItem>
                  <SelectItem value="training">प्रशिक्षण</SelectItem>
                  <SelectItem value="seminar">सेमिनार</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="additionalNotes">अतिरिक्त नोटहरू</Label>
            <Textarea
              id="additionalNotes"
              value={formData.additionalNotes}
              onChange={(e) => handleChange("additionalNotes", e.target.value)}
              rows={4}
            />
          </div>
          <Button
            type="submit"
            className="w-full bg-[#0b5345] hover:bg-[#0b5345]/90"
          >
            दर्ता गर्नुहोस्
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
