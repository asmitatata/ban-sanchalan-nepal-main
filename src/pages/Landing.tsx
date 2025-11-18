import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import CountUp from "react-countup";
import ContactForm from "@/components/ContactForm";
import { Input } from "@/components/ui/input";
import { useLanguage } from "@/contexts/LanguageContext";

const Landing: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { t, language, setLanguage } = useLanguage();
  const navigate = useNavigate();

  // Handle search submission
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement search functionality here
    console.log("Searching for:", searchQuery);
  };

  // Handle language toggle
  const toggleLanguage = () => {
    setLanguage(language === "ne" ? "en" : "ne");
  };

  // Handle logo click to refresh the page
  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate(0);
  };

  // Handle smooth scroll to section
  const handleLearnMoreClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Layout>
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-8">
              <a
                href="/"
                onClick={handleLogoClick}
                className="text-2xl font-bold text-[#0b5345]"
              >
                वन विभाग
              </a>
              <nav className="hidden md:flex space-x-6">
                <Link
                  to="/about"
                  className="text-gray-600 hover:text-[#0b5345]"
                >
                  {t("about")}
                </Link>
                <Link to="/news" className="text-gray-600 hover:text-[#0b5345]">
                  {t("news_updates")}
                </Link>
                <Link
                  to="/resources"
                  className="text-gray-600 hover:text-[#0b5345]"
                >
                  {t("resource_center")}
                </Link>
                <Link
                  to="/contact"
                  className="text-gray-600 hover:text-[#0b5345]"
                >
                  {t("contact")}
                </Link>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setLanguage(language === "ne" ? "en" : "ne")}
              >
                {language === "ne" ? "English" : "नेपाली"}
              </Button>
              <Button asChild>
                <Link to="/login">{t("login")}</Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/New-Map-of-Nepal-Vector-Map.svg/1920px-New-Map-of-Nepal-Vector-Map.svg.png')] bg-cover bg-center py-40 text-white relative">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold mb-4">{t("welcome")}</h1>
            <p className="text-xl mb-6">{t("dedicated")}</p>
            <div className="flex space-x-4">
              <Button size="lg" asChild>
                <Link to="/login">{t("login")}</Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="bg-transparent border-white text-white hover:bg-white hover:text-[#0b5345]"
                onClick={handleLearnMoreClick}
              >
                {t("learn_more")}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            {t("statistics")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#0b5345] mb-2">
                <CountUp end={44.74} duration={2.5} suffix="%" />
              </div>
              <p className="text-gray-600">{t("forest_area")}</p>
              <p className="text-sm text-gray-500 mt-1">
                नेपालको कुल क्षेत्रफलको
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#0b5345] mb-2">
                <CountUp end={20} duration={2.5} suffix="+" />
              </div>
              <p className="text-gray-600">{t("protected_areas")}</p>
              <p className="text-sm text-gray-500 mt-1">संरक्षित क्षेत्रहरू</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#0b5345] mb-2">
                <CountUp end={850} duration={2.5} suffix="+" />
              </div>
              <p className="text-gray-600">{t("wildlife_species")}</p>
              <p className="text-sm text-gray-500 mt-1">वन्यजन्तु प्रजातिहरू</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#0b5345] mb-2">
                <CountUp end={22} duration={2.5} suffix="K+" />
              </div>
              <p className="text-gray-600">{t("community_forests")}</p>
              <p className="text-sm text-gray-500 mt-1">सामुदायिक वनहरू</p>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#0b5345] mb-2">
                <CountUp end={2.9} duration={2.5} suffix="M" />
              </div>
              <p className="text-gray-600">{t("forest_users")}</p>
              <p className="text-sm text-gray-500 mt-1">वन प्रयोगकर्ताहरू</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#0b5345] mb-2">
                <CountUp end={1.8} duration={2.5} suffix="M" />
              </div>
              <p className="text-gray-600">{t("hectares_managed")}</p>
              <p className="text-sm text-gray-500 mt-1">हेक्टर व्यवस्थापन</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#0b5345] mb-2">
                <CountUp end={35} duration={2.5} suffix="%" />
              </div>
              <p className="text-gray-600">{t("forest_cover_increase")}</p>
              <p className="text-sm text-gray-500 mt-1">वन क्षेत्र वृद्धि</p>
            </div>
          </div>
        </div>
      </section>

      {/* News & Updates Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            {t("news_updates")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
                alt="Forest Action News"
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  Press Meet for जैविक कृषि जागरण यात्रा
                </h3>
                <p className="text-gray-600 mb-4">
                  ForestAction Nepal organized a press meet for month-long
                  journey focusing on organic agriculture awareness...
                </p>
                <Button variant="outline" className="w-full" asChild>
                  <a
                    href="https://forestaction.org/category/news/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t("read_more")}
                  </a>
                </Button>
              </CardContent>
            </Card>
            <Card className="overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1511497584788-876760111969?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
                alt="Nepal Ecosystems"
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  Nepal's Ecosystems: Aiming for New Heights
                </h3>
                <p className="text-gray-600 mb-4">
                  Challenges and opportunities in Nepal's journey towards
                  sustainable forest management...
                </p>
                <Button variant="outline" className="w-full" asChild>
                  <a
                    href="https://forestsnews.cifor.org/50284/nepals-ecosystems-aiming-for-new-heights?fnl=en"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t("read_more")}
                  </a>
                </Button>
              </CardContent>
            </Card>
            <Card className="overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
                alt="Community Forest Program"
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  Nepal's Community Forest Program
                </h3>
                <p className="text-gray-600 mb-4">
                  Analysis of Nepal's community forest program and its impact on
                  biodiversity conservation...
                </p>
                <Button variant="outline" className="w-full" asChild>
                  <a
                    href="https://news.mongabay.com/2023/02/nepals-community-forest-program-misses-the-biodiversity-for-the-trees/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t("read_more")}
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              {t("about")}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">{t("about_text")}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="bg-[#0b5345] h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="white"
                    className="w-8 h-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  {t("forest_conservation")}
                </h3>
                <p className="text-gray-600">
                  नेपालका वन क्षेत्रहरूको सुरक्षा र दिगो व्यवस्थापनका लागि
                  समर्पित।
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="bg-[#0b5345] h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="white"
                    className="w-8 h-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  {t("biodiversity")}
                </h3>
                <p className="text-gray-600">
                  जैविक विविधताको संरक्षण र प्रवर्धनका लागि प्रतिबद्ध।
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="bg-[#0b5345] h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="white"
                    className="w-8 h-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.479m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">{t("community")}</h3>
                <p className="text-gray-600">
                  स्थानीय समुदायहरूसँग काम गर्दै वनको दिगो व्यवस्थापन गर्न।
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            {t("success_stories")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="overflow-hidden">
              <div className="grid grid-cols-2 gap-4 p-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    {t("forest_restoration")}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    पूर्वी नेपालमा सफल वन पुनर्स्थापना कार्यक्रम...
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="text-sm text-gray-500">{t("before")}</div>
                    <div className="h-2 flex-1 bg-gray-200 rounded-full">
                      <div className="h-2 bg-red-500 rounded-full w-1/4"></div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 mt-2">
                    <div className="text-sm text-gray-500">{t("after")}</div>
                    <div className="h-2 flex-1 bg-gray-200 rounded-full">
                      <div className="h-2 bg-green-500 rounded-full w-3/4"></div>
                    </div>
                  </div>
                </div>
                <img
                  src="https://www.altitudehimalaya.com/media/files/Blog/Travel-Guides/makalu-in-nepal.jpg"
                  alt="Success Story 1"
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
            </Card>
            <Card className="overflow-hidden">
              <div className="grid grid-cols-2 gap-4 p-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    {t("wildlife_conservation")}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    बाघ संरक्षण कार्यक्रममा सफलता...
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="text-sm text-gray-500">२०१८</div>
                    <div className="h-2 flex-1 bg-gray-200 rounded-full">
                      <div className="h-2 bg-red-500 rounded-full w-1/3"></div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 mt-2">
                    <div className="text-sm text-gray-500">२०२५</div>
                    <div className="h-2 flex-1 bg-gray-200 rounded-full">
                      <div className="h-2 bg-green-500 rounded-full w-2/3"></div>
                    </div>
                  </div>
                </div>
                <img
                  src="https://www.altitudehimalaya.com/media/files/Blog/Travel-Guides/makalu-in-nepal.jpg"
                  alt="Success Story 2"
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Resource Center */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            {t("resource_center")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6">
                <div className="bg-[#0b5345] h-12 w-12 rounded-full flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="white"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">{t("documents")}</h3>
                <p className="text-gray-600 mb-4">
                  नीति, नियमावली र अन्य महत्वपूर्ण दस्तावेजहरू
                </p>
                <Button variant="outline" className="w-full">
                  {t("download")}
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="bg-[#0b5345] h-12 w-12 rounded-full flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="white"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  {t("educational_materials")}
                </h3>
                <p className="text-gray-600 mb-4">
                  वन संरक्षण र जैविक विविधता सम्बन्धी शैक्षिक सामग्री
                </p>
                <Button variant="outline" className="w-full">
                  {t("read")}
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="bg-[#0b5345] h-12 w-12 rounded-full flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="white"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V19.5a2.25 2.25 0 0 0 2.25 2.25h.75m0-3H12m-.75 3h3.75m-3.75 0V19.5m0 3h3.75M9 6.75h3m-3 4.5h3m-3 4.5h3"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  {t("guidelines")}
                </h3>
                <p className="text-gray-600 mb-4">
                  वन व्यवस्थापन र संरक्षणका लागि दिशानिर्देशहरू
                </p>
                <Button variant="outline" className="w-full">
                  {t("view")}
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Login Section */}
      <section className="py-16 bg-[#0b5345] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">{t("login")}</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            यदि तपाईं नेपाल वन विभागको कर्मचारी हुनुहुन्छ भने, व्यक्तिगत
            ड्यासबोर्ड, तालिम कार्यक्रम र अन्य सुविधाहरूमा पहुँच प्राप्त गर्न
            लगइन गर्नुहोस्।
          </p>
          <div className="flex justify-center space-x-4">
            <Button
              size="lg"
              className="bg-white text-[#0b5345] hover:bg-gray-100"
              asChild
            >
              <Link to="/login">{t("login")}</Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-[#0b5345]"
              asChild
            >
              <Link to="/register">{t("register")}</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Landing;
