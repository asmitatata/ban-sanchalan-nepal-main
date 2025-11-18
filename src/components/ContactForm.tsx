import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useLanguage } from "@/contexts/LanguageContext";

const ContactForm: React.FC = () => {
  const { t } = useLanguage();

  return (
    <Card>
      <CardContent className="p-6">
        <form className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              {t("name")}
            </label>
            <Input
              id="name"
              type="text"
              placeholder={t("name_placeholder")}
              className="w-full"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              {t("email")}
            </label>
            <Input
              id="email"
              type="email"
              placeholder={t("email_placeholder")}
              className="w-full"
            />
          </div>
          <div>
            <label
              htmlFor="subject"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              {t("subject")}
            </label>
            <Input
              id="subject"
              type="text"
              placeholder={t("subject_placeholder")}
              className="w-full"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              {t("message")}
            </label>
            <Textarea
              id="message"
              placeholder={t("message_placeholder")}
              className="w-full"
              rows={4}
            />
          </div>
          <Button type="submit" className="w-full">
            {t("send")}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default ContactForm;
