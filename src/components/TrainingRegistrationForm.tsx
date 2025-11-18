import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useAuth } from "@/contexts/AuthContext";
import { db } from "@/lib/firebase";
import { collection, addDoc } from "firebase/firestore";
import { toast } from "sonner";

interface TrainingRegistrationFormProps {
  training: {
    id: string;
    title: string;
    date: string;
    time: string;
    description: string;
    location: string;
    maxParticipants: number;
  };
  onClose: () => void;
}

export const TrainingRegistrationForm: React.FC<
  TrainingRegistrationFormProps
> = ({ training, onClose }) => {
  const { currentUser } = useAuth();
  const [formData, setFormData] = useState({
    name: currentUser?.displayName || "",
    email: currentUser?.email || "",
    phone: "",
    department: "",
    reason: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await addDoc(collection(db, "trainingRegistrations"), {
        ...formData,
        trainingId: training.id,
        trainingTitle: training.title,
        userId: currentUser?.uid,
        registrationDate: new Date().toISOString(),
        status: "pending",
      });

      toast.success("तालिम दर्ता सफल भयो!");
      onClose();
    } catch (error) {
      console.error("Error registering for training:", error);
      toast.error("तालिम दर्तामा त्रुटि भयो। कृपया पुन: प्रयास गर्नुहोस्।");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          नाम
        </label>
        <Input
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          इमेल
        </label>
        <Input
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          फोन नम्बर
        </label>
        <Input
          type="tel"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          विभाग
        </label>
        <Input
          type="text"
          value={formData.department}
          onChange={(e) =>
            setFormData({ ...formData, department: e.target.value })
          }
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          तालिममा सहभागी हुनुको कारण
        </label>
        <Textarea
          value={formData.reason}
          onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
          required
        />
      </div>

      <div className="flex justify-end space-x-2">
        <Button
          type="button"
          variant="outline"
          onClick={onClose}
          disabled={isSubmitting}
        >
          रद्द गर्नुहोस्
        </Button>
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "दर्ता गर्दै..." : "दर्ता गर्नुहोस्"}
        </Button>
      </div>
    </form>
  );
};
