import { useState } from "react";
import { useNavigate, useLocation } from "react-router";
import { Menu, X } from "lucide-react";

const screens = [
  { path: "/", label: "Splash" },
  { path: "/login", label: "Login" },
  { path: "/platform-verification", label: "Platform" },
  { path: "/location-permission", label: "Location" },
  { path: "/income-setup", label: "Income" },
  { path: "/plans", label: "Plans" },
  { path: "/payment", label: "Payment" },
  { path: "/dashboard", label: "Dashboard" },
  { path: "/orders", label: "Orders" },
  { path: "/alert", label: "Alert" },
  { path: "/anti-spoofing", label: "Anti-Spoof" },
  { path: "/fraud-result", label: "Fraud Result" },
  { path: "/ai-risk-score", label: "AI Risk" },
  { path: "/fraud-cluster", label: "Cluster" },
  { path: "/payout-approval", label: "Approval" },
  { path: "/claim-hold", label: "Hold" },
  { path: "/security-architecture", label: "Security" },
  { path: "/payout", label: "Payout" },
];

export default function DevNavigation() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 right-4 z-[100] w-12 h-12 bg-gray-900 text-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-800 transition-colors"
      >
        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {/* Navigation Menu */}
      {isOpen && (
        <div className="fixed bottom-20 right-4 z-[100] bg-white rounded-2xl shadow-2xl border border-gray-200 p-3 min-w-[160px]">
          <p className="text-xs font-semibold text-gray-500 mb-2 px-2">Quick Navigation</p>
          <div className="space-y-1">
            {screens.map((screen) => (
              <button
                key={screen.path}
                onClick={() => {
                  navigate(screen.path);
                  setIsOpen(false);
                }}
                className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  location.pathname === screen.path
                    ? "bg-blue-100 text-blue-700"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                {screen.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}