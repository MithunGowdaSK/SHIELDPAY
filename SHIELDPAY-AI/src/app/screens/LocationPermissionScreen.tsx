import { useNavigate } from "react-router";
import { MapPin, Shield, AlertCircle } from "lucide-react";
import { Button } from "../components/ui/button";
import { motion } from "motion/react";
import logoImage from "figma:asset/73dac9f10cfea7ee55ffe158646a98a51236caef.png";

export default function LocationPermissionScreen() {
  const navigate = useNavigate();

  const handleAllow = () => {
    // In a real app, request GPS permission here
    navigate("/income-setup");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex flex-col">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-teal-500 pt-12 pb-16 px-6 rounded-b-[2rem] shadow-lg">
        <div className="flex justify-center mb-2">
          <img src={logoImage} alt="ShieldPay" className="h-12 w-auto" />
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 -mt-10">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md"
        >
          {/* Icon */}
          <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-teal-400 rounded-full flex items-center justify-center mx-auto mb-6">
            <MapPin className="w-12 h-12 text-white" />
          </div>

          {/* Title */}
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-3">
            Enable Location Access
          </h2>
          <p className="text-gray-600 text-center mb-8">
            Location is required to prevent fraud and verify your working status
          </p>

          {/* Features */}
          <div className="space-y-4 mb-8">
            <div className="flex items-start gap-3">
              <Shield className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium text-gray-900">Fraud Prevention</p>
                <p className="text-sm text-gray-600">Ensures genuine claims from verified locations</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-teal-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium text-gray-900">Verify Working Status</p>
                <p className="text-sm text-gray-600">Confirms you're actively delivering orders</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium text-gray-900">Local Weather Tracking</p>
                <p className="text-sm text-gray-600">Detects disruptions in your work area</p>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="space-y-3">
            <Button
              onClick={handleAllow}
              className="w-full h-12 bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600"
            >
              Allow Location Access
            </Button>
            <button
              onClick={() => navigate("/income-setup")}
              className="w-full text-center text-sm text-gray-600 hover:text-gray-900"
            >
              Skip for now
            </button>
          </div>

          {/* Privacy Note */}
          <p className="text-xs text-gray-500 text-center mt-6">
            Your location data is encrypted and never shared with third parties
          </p>
        </motion.div>
      </div>
    </div>
  );
}
