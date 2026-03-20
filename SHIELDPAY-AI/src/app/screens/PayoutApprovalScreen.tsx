import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { CheckCircle2, CloudRain, Package, MapPin, Smartphone, Brain, TrendingUp } from "lucide-react";
import { Button } from "../components/ui/button";
import { motion } from "motion/react";
import logoImage from "figma:asset/73dac9f10cfea7ee55ffe158646a98a51236caef.png";

const verificationChecks = [
  { id: 1, label: "Weather confirmed", icon: CloudRain },
  { id: 2, label: "Order activity confirmed", icon: Package },
  { id: 3, label: "Location verified", icon: MapPin },
  { id: 4, label: "Device verified", icon: Smartphone },
  { id: 5, label: "AI risk low", icon: Brain },
];

export default function PayoutApprovalScreen() {
  const navigate = useNavigate();
  const [allChecked, setAllChecked] = useState(false);

  useEffect(() => {
    // Simulate checking all verifications
    const timer = setTimeout(() => {
      setAllChecked(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleReleasePayout = () => {
    navigate("/payout");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-teal-500 pt-12 pb-8 px-6 rounded-b-[2rem] shadow-lg">
        <div className="flex justify-center mb-2">
          <img src={logoImage} alt="ShieldPay" className="h-12 w-auto" />
        </div>
        <h1 className="text-2xl font-bold text-white text-center mt-2">Final Verification</h1>
        <p className="text-white/90 text-sm text-center">Confirming payout eligibility</p>
      </div>

      <div className="px-6 py-8 space-y-6">
        {/* Verification Checklist */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-lg p-6"
        >
          <h3 className="font-bold text-gray-900 mb-6">Verification Checklist</h3>

          <div className="space-y-4">
            {verificationChecks.map((check, index) => {
              const Icon = check.icon;
              const isChecked = allChecked;

              return (
                <motion.div
                  key={check.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex items-center gap-4 p-4 rounded-xl transition-all ${
                    isChecked
                      ? "bg-green-50 border-2 border-green-200"
                      : "bg-gray-50 border-2 border-gray-200"
                  }`}
                >
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${
                    isChecked ? "bg-green-500" : "bg-gray-300"
                  }`}>
                    {isChecked ? (
                      <CheckCircle2 className="w-6 h-6 text-white" />
                    ) : (
                      <Icon className="w-6 h-6 text-gray-500" />
                    )}
                  </div>
                  <div className="flex-1">
                    <p className={`font-medium ${
                      isChecked ? "text-green-700" : "text-gray-500"
                    }`}>
                      {check.label}
                    </p>
                    {isChecked && (
                      <p className="text-xs text-green-600 mt-1">✓ Verified</p>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Overall Status */}
          {allChecked && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-6 p-4 bg-green-100 border-2 border-green-300 rounded-xl"
            >
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0" />
                <div>
                  <p className="font-bold text-green-800">All Checks Passed</p>
                  <p className="text-sm text-green-700">Your claim is eligible for payout</p>
                </div>
              </div>
            </motion.div>
          )}
        </motion.div>

        {/* Payout Approval Card */}
        {allChecked && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl p-8 shadow-xl text-white text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.8, type: "spring", bounce: 0.5 }}
              className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <TrendingUp className="w-10 h-10 text-green-600" />
            </motion.div>
            
            <h2 className="text-3xl font-bold mb-2">Payout Approved!</h2>
            <p className="text-white/90 mb-6">Your claim has been verified and approved</p>
            
            <div className="bg-white/20 backdrop-blur rounded-xl p-6 mb-4">
              <p className="text-sm text-white/90 mb-2">Approved Amount</p>
              <p className="text-5xl font-bold">₹800</p>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-lg p-4">
              <div className="flex items-center justify-between text-sm">
                <span>Payment Method</span>
                <span className="font-semibold">UPI - ramesh@paytm</span>
              </div>
            </div>
          </motion.div>
        )}

        {/* Processing Info */}
        {allChecked && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="bg-blue-50 border border-blue-200 rounded-xl p-4"
          >
            <p className="text-sm text-blue-900 text-center">
              <span className="font-semibold">⚡ Instant Processing:</span> Your payout will be credited within 2-5 minutes
            </p>
          </motion.div>
        )}

        {/* Release Payout Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0 }}
        >
          <Button
            onClick={handleReleasePayout}
            disabled={!allChecked}
            className="w-full h-16 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-xl font-bold shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {allChecked ? "Release Payout Now" : "Verifying..."}
          </Button>
        </motion.div>

        {/* Security Note */}
        <div className="bg-gray-50 rounded-xl p-4">
          <p className="text-xs text-gray-600 text-center">
            🔒 All verifications completed using blockchain-verified data
          </p>
        </div>
      </div>
    </div>
  );
}
