import React, { createContext, useContext, useState } from "react";

type Language = "ne" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

const translations = {
  ne: {
    welcome: "नेपाल वन विभागमा स्वागत छ",
    dedicated: "वन व्यवस्थापन र जैविक विविधताको संरक्षणमा समर्पित",
    login: "कर्मचारी लगइन",
    learn_more: "थप जान्नुहोस्",
    about: "हाम्रो बारेमा",
    about_text:
      "नेपाल वन विभाग वन र वन्यजन्तु संरक्षणको लागि कार्यरत नेपाल सरकारको एक प्रमुख निकाय हो।",
    forest_conservation: "वन संरक्षण",
    biodiversity: "जैविक विविधता",
    community: "समुदायिक सहकार्य",
    vision: "हाम्रो दृष्टि",
    contact: "सम्पर्क गर्नुहोस्",
    search: "के खोज्दै हुनुहुन्छ?",
    search_button: "खोज्नुहोस्",
    // Contact form translations
    name: "नाम",
    name_placeholder: "तपाईंको नाम प्रवेश गर्नुहोस्",
    email: "इमेल",
    email_placeholder: "तपाईंको इमेल प्रवेश गर्नुहोस्",
    subject: "विषय",
    subject_placeholder: "विषय प्रवेश गर्नुहोस्",
    message: "सन्देश",
    message_placeholder: "तपाईंको सन्देश प्रवेश गर्नुहोस्",
    send: "पठाउनुहोस्",
    // Additional translations
    register: "दर्ता गर्नुहोस्",
    statistics: "हाम्रा उपलब्धिहरू",
    forest_area: "वन क्षेत्र",
    protected_areas: "संरक्षित क्षेत्रहरू",
    wildlife_species: "वन्यजन्तु प्रजातिहरू",
    staff: "कर्मचारीहरू",
    news_updates: "समाचार र अपडेटहरू",
    success_stories: "सफलता कथाहरू",
    resource_center: "स्रोत केन्द्र",
    documents: "दस्तावेजहरू",
    educational_materials: "शैक्षिक सामग्री",
    guidelines: "दिशानिर्देशहरू",
    download: "डाउनलोड गर्नुहोस्",
    read: "पढ्नुहोस्",
    view: "हेर्नुहोस्",
    read_more: "थप पढ्नुहोस्",
    our_office: "हाम्रो कार्यालय",
    social_media: "सामाजिक संजाल",
    before: "अघि",
    after: "पछि",
    forest_restoration: "वन पुनर्स्थापना",
    wildlife_conservation: "वन्यजन्तु संरक्षण",
  },
  en: {
    welcome: "Welcome to Nepal Forest Department",
    dedicated: "Dedicated to forest management and biodiversity conservation",
    login: "Staff Login",
    learn_more: "Learn More",
    about: "About Us",
    about_text:
      "Nepal Forest Department is a key body of the Government of Nepal working for forest and wildlife conservation.",
    forest_conservation: "Forest Conservation",
    biodiversity: "Biodiversity",
    community: "Community Partnership",
    vision: "Our Vision",
    contact: "Contact Us",
    search: "What are you looking for?",
    search_button: "Search",
    // Contact form translations
    name: "Name",
    name_placeholder: "Enter your name",
    email: "Email",
    email_placeholder: "Enter your email",
    subject: "Subject",
    subject_placeholder: "Enter subject",
    message: "Message",
    message_placeholder: "Enter your message",
    send: "Send",
    // Additional translations
    register: "Register",
    statistics: "Our Achievements",
    forest_area: "Forest Area",
    protected_areas: "Protected Areas",
    wildlife_species: "Wildlife Species",
    staff: "Staff",
    news_updates: "News & Updates",
    success_stories: "Success Stories",
    resource_center: "Resource Center",
    documents: "Documents",
    educational_materials: "Educational Materials",
    guidelines: "Guidelines",
    download: "Download",
    read: "Read",
    view: "View",
    read_more: "Read More",
    our_office: "Our Office",
    social_media: "Social Media",
    before: "Before",
    after: "After",
    forest_restoration: "Forest Restoration",
    wildlife_conservation: "Wildlife Conservation",
  },
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [language, setLanguage] = useState<Language>("ne");

  const t = (key: string): string => {
    return (
      translations[language][key as keyof (typeof translations)["ne"]] || key
    );
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
