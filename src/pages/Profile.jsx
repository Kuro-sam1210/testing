import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";

const Profile = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState("orders");

  // Mock orders
  const mockOrders = [
    { id: "ORD001", date: "2023-10-01", total: 150000, status: "Delivered" },
    { id: "ORD002", date: "2023-09-15", total: 75000, status: "Shipped" },
  ];

  if (!user) {
    return (
      <div className="px-4 md:px-8 lg:px-16 py-8">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg">Please log in to view your profile.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="px-4 md:px-8 lg:px-16 py-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6">My Profile</h2>

        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <h3 className="text-lg font-semibold mb-4">Account Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <p className="mt-1">{user.name || user.email.split("@")[0]}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <p className="mt-1">{user.email}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex border-b mb-4">
            <button
              onClick={() => setActiveTab("orders")}
              className={`px-4 py-2 ${activeTab === "orders" ? "border-b-2 border-orange-500 text-orange-500" : "text-gray-600"}`}
            >
              Orders
            </button>
            <button
              onClick={() => setActiveTab("addresses")}
              className={`px-4 py-2 ${activeTab === "addresses" ? "border-b-2 border-orange-500 text-orange-500" : "text-gray-600"}`}
            >
              Addresses
            </button>
          </div>

          {activeTab === "orders" && (
            <div>
              <h4 className="text-lg font-semibold mb-4">Order History</h4>
              {mockOrders.length > 0 ? (
                <div className="space-y-4">
                  {mockOrders.map((order) => (
                    <div key={order.id} className="border rounded p-4">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="font-medium">Order #{order.id}</p>
                          <p className="text-sm text-gray-600">Date: {order.date}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium">₦{order.total.toLocaleString()}</p>
                          <p className={`text-sm ${order.status === "Delivered" ? "text-green-600" : "text-blue-600"}`}>{order.status}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500">No orders yet.</p>
              )}
            </div>
          )}

          {activeTab === "addresses" && (
            <div>
              <h4 className="text-lg font-semibold mb-4">Saved Addresses</h4>
              <p className="text-gray-500">No addresses saved yet.</p>
              {/* Could add form to add addresses */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;