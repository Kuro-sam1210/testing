import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";

const Profile = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState("orders");

  // Mock orders
  const mockOrders = [
    { id: "ORD001", date: "2023-10-01", total: 150000, status: "Delivered", icon: "📦" },
    { id: "ORD002", date: "2023-09-15", total: 75000, status: "Shipped", icon: "🚚" },
    { id: "ORD003", date: "2023-08-20", total: 25000, status: "Processing", icon: "⚙️" },
  ];

  // Helper function to get status color
  const getStatusColor = (status) => {
    switch (status) {
      case "Delivered":
        return "text-[var(--success)]"; // Green for success
      case "Shipped":
        return "text-[var(--primary)]"; // Gold for in-progress
      case "Processing":
        return "text-blue-400"; // Blue for waiting
      default:
        return "text-[var(--text-mid)]";
    }
  };

  if (!user) {
    return (
      <div className="px-4 md:px-8 lg:px-16 py-16 bg-[var(--background)] min-h-[60vh]">
        <div className="max-w-4xl mx-auto text-center p-8 bg-[var(--surface)] rounded-xl shadow-luxe border border-[var(--border)]">
          <p className="text-xl text-[var(--text-light)]">
            Please log in to view your profile.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="px-4 md:px-8 lg:px-16 py-12 bg-[var(--background)] min-h-screen">
      <div className="max-w-4xl mx-auto">
        
        {/* Title */}
        <h2 className="text-4xl font-serif font-bold mb-8 text-[var(--text-light)] border-b border-[var(--border)] pb-4">
          👋 Welcome, {user.name || user.email.split("@")[0]}
        </h2>

        {/* Account Information Card */}
        <div className="bg-[var(--surface)] rounded-xl shadow-luxe border border-[var(--border)] p-8 mb-8">
          <h3 className="text-xl font-semibold mb-6 text-[var(--primary)] border-b border-[var(--border)] pb-2">
            Account Details
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-[var(--text-light)]">
            <div>
              <label className="block text-sm font-medium text-[var(--text-mid)] mb-1">Name</label>
              <p className="font-semibold text-lg">{user.name || user.email.split("@")[0]}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-[var(--text-mid)] mb-1">Email</label>
              <p className="font-semibold text-lg">{user.email}</p>
            </div>
          </div>
        </div>

        {/* Tabbed Content Card */}
        <div className="bg-[var(--surface)] rounded-xl shadow-luxe border border-[var(--border)] p-8">
          
          {/* Tabs */}
          <div className="flex border-b border-[var(--border)] mb-6">
            <button
              onClick={() => setActiveTab("orders")}
              // Active Tab: Primary border and text color
              className={`px-4 py-3 font-semibold transition ${activeTab === "orders" ? "border-b-2 border-[var(--primary)] text-[var(--primary)]" : "text-[var(--text-mid)] hover:text-[var(--text-light)]"}`}
            >
              Order History
            </button>
            <button
              onClick={() => setActiveTab("addresses")}
              // Active Tab: Primary border and text color
              className={`px-4 py-3 font-semibold transition ${activeTab === "addresses" ? "border-b-2 border-[var(--primary)] text-[var(--primary)]" : "text-[var(--text-mid)] hover:text-[var(--text-light)]"}`}
            >
              Saved Addresses
            </button>
          </div>

          {activeTab === "orders" && (
            <div>
              {mockOrders.length > 0 ? (
                <div className="space-y-4">
                  {mockOrders.map((order) => (
                    // Order Item Card
                    <div key={order.id} className="bg-[var(--background)] rounded-lg p-5 border border-[var(--border)] hover:border-[var(--primary)] transition-colors">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="font-medium text-lg text-[var(--text-light)]">
                            <span className="mr-2 text-xl">{order.icon}</span>Order #{order.id}
                          </p>
                          <p className="text-sm text-[var(--text-mid)]">Date: {order.date}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-lg text-[var(--primary)]">₦{order.total.toLocaleString()}</p>
                          {/* Status Indicator */}
                          <p className={`text-sm font-semibold ${getStatusColor(order.status)}`}>{order.status}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-[var(--text-mid)] p-4 text-center">No orders placed yet. Start shopping!</p>
              )}
            </div>
          )}

          {activeTab === "addresses" && (
            <div>
              <p className="text-[var(--text-mid)] p-4 text-center">
                No addresses saved yet. Add one during checkout!
              </p>
              {/* Optional: Add form to add addresses here */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;