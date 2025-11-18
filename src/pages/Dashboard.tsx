import React, { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useAuth } from "@/contexts/AuthContext";
import { User, Bell, X } from "lucide-react";
import { Link } from "react-router-dom";
import { AvailableTrainings } from "@/components/AvailableTrainings";
import { db } from "@/lib/firebase";
import {
  collection,
  query,
  where,
  getDocs,
  orderBy,
  limit,
} from "firebase/firestore";

interface Notification {
  id: string;
  title: string;
  message: string;
  date: string;
  read: boolean;
}

const Dashboard: React.FC = () => {
  const { currentUser } = useAuth();
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [showNotifications, setShowNotifications] = useState(false);

  useEffect(() => {
    const fetchNotifications = async () => {
      if (!currentUser) return;

      try {
        // In a real app, you would fetch from Firestore
        // For now, we'll use mock data
        const mockNotifications: Notification[] = [
          {
            id: "1",
            title: "नयाँ तालिम कार्यक्रम",
            message: "वन संरक्षण तालिम कार्यक्रम अर्को हप्ता सुरु हुनेछ।",
            date: new Date().toISOString(),
            read: false,
          },
          {
            id: "2",
            title: "सिस्टम अपडेट",
            message: "सिस्टम अपडेट गरिएको छ। कृपया नयाँ सुविधाहरू हेर्नुहोस्।",
            date: new Date(Date.now() - 86400000).toISOString(), // 1 day ago
            read: true,
          },
          {
            id: "3",
            title: "महत्वपूर्ण सूचना",
            message: "कृपया आफ्नो प्रोफाइल जानकारी अपडेट गर्नुहोस्।",
            date: new Date(Date.now() - 172800000).toISOString(), // 2 days ago
            read: true,
          },
        ];

        setNotifications(mockNotifications);
      } catch (error) {
        console.error("Error fetching notifications:", error);
      }
    };

    fetchNotifications();
  }, [currentUser]);

  const unreadCount = notifications.filter((n) => !n.read).length;

  const markAsRead = (id: string) => {
    setNotifications(
      notifications.map((notification) =>
        notification.id === id ? { ...notification, read: true } : notification
      )
    );
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              कर्मचारी ड्यासबोर्ड
            </h1>
            <p className="text-gray-600">
              स्वागत छ,{" "}
              {currentUser?.displayName || currentUser?.email?.split("@")[0]}
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <button
                className="relative p-2 rounded-full hover:bg-gray-100"
                onClick={() => setShowNotifications(!showNotifications)}
              >
                <Bell className="h-6 w-6 text-gray-600" />
                {unreadCount > 0 && (
                  <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {unreadCount}
                  </span>
                )}
              </button>

              {showNotifications && (
                <div className="absolute right-0 mt-2 w-80 bg-white rounded-md shadow-lg z-10 border border-gray-200">
                  <div className="p-3 border-b border-gray-200 flex justify-between items-center">
                    <h3 className="font-medium">सूचनाहरू</h3>
                    <button onClick={() => setShowNotifications(false)}>
                      <X className="h-4 w-4 text-gray-500" />
                    </button>
                  </div>
                  <div className="max-h-80 overflow-y-auto">
                    {notifications.length === 0 ? (
                      <div className="p-4 text-center text-gray-500">
                        कुनै सूचना छैन
                      </div>
                    ) : (
                      notifications.map((notification) => (
                        <div
                          key={notification.id}
                          className={`p-3 border-b border-gray-100 ${
                            !notification.read ? "bg-blue-50" : ""
                          }`}
                          onClick={() => markAsRead(notification.id)}
                        >
                          <div className="flex justify-between">
                            <h4 className="font-medium">
                              {notification.title}
                            </h4>
                            <span className="text-xs text-gray-500">
                              {new Date(notification.date).toLocaleDateString()}
                            </span>
                          </div>
                          <p className="text-sm text-gray-600 mt-1">
                            {notification.message}
                          </p>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              )}
            </div>

            <div className="bg-[#0b5345] text-white rounded-full px-4 py-1 text-sm">
              कर्मचारी ID: NDF{Math.floor(10000 + Math.random() * 90000)}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="col-span-1 lg:col-span-2">
            <CardHeader>
              <CardTitle>उपलब्ध तालिम कार्यक्रमहरू</CardTitle>
            </CardHeader>
            <CardContent>
              <AvailableTrainings />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>प्रोफाइल जानकारी</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center mb-6">
                <div className="h-20 w-20 rounded-full bg-[#0b5345] flex items-center justify-center text-white text-2xl mb-2">
                  <User className="h-12 w-12" />
                </div>
                <h3 className="font-medium">
                  {currentUser?.displayName ||
                    currentUser?.email?.split("@")[0]}
                </h3>
                <p className="text-sm text-gray-600">{currentUser?.email}</p>
              </div>

              <div className="space-y-3 border-t pt-4">
                <div>
                  <p className="text-xs text-gray-500">पद</p>
                  <p className="font-medium">वन संरक्षण अधिकारी</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">विभाग</p>
                  <p className="font-medium">वन संरक्षण</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">कार्यालय स्थान</p>
                  <p className="font-medium">काठमाडौं, नेपाल</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">सम्पर्क</p>
                  <p className="font-medium">+977 9841XXXXXX</p>
                </div>
              </div>

              <Link
                to="/profile"
                className="block text-center mt-4 text-[#0b5345] text-sm hover:underline"
              >
                प्रोफाइल सम्पादन गर्नुहोस्
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
