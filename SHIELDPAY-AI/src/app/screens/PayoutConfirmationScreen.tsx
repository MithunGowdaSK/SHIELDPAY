import { useNavigate } from "react-router";
import { CheckCircle2, Calendar, CreditCard, FileText, ArrowRight, Home } from "lucide-react";
import { Button } from "../components/ui/button";
import { motion } from "motion/react";
import Confetti from "../components/Confetti";
import logoImage from "figma:asset/73dac9f10cfea7ee55ffe158646a98a51236caef.png";

export default function PayoutConfirmationScreen() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-emerald-50 relative overflow-hidden">
      <Confetti />

      {/* Success Header */}
      <div className="bg-gradient-to-r from-green-600 to-emerald-500 pt-12 pb-12 px-6 rounded-b-[2rem] shadow-lg">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, type: "spring", bounce: 0.5 }}
          className="flex flex-col items-center text-center"
        >
          <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mb-4 shadow-lg">
            <CheckCircle2 className="w-14 h-14 text-green-500" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">Payout Successful!</h1>
          <p className="text-white/90 text-sm">Your claim has been processed</p>
        </motion.div>
      </div>

      {/* Content */}
      <div className="px-6 py-8 space-y-4">
        {/* Amount Card */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-2xl p-6 shadow-lg text-center"
        >
          <p className="text-sm text-gray-600 mb-2">Amount Credited</p>
          <h2 className="text-5xl font-bold text-green-600 mb-3">₹800</h2>
          <div className="inline-flex items-center gap-2 bg-green-100 px-4 py-2 rounded-full">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-green-700">Paid via UPI</span>
          </div>
        </motion.div>

        {/* Transaction Summary */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-2xl p-6 shadow-lg"
        >
          <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
            <FileText className="w-5 h-5" />
            Transaction Summary
          </h3>

          <div className="space-y-4">
            <div className="flex items-center justify-between py-2 border-b border-gray-100">
              <span className="text-sm text-gray-600">Transaction ID</span>
              <span className="text-sm font-mono font-medium text-gray-900">TXN20260311145623</span>
            </div>

            <div className="flex items-center gap-3 py-2 border-b border-gray-100">
              <Calendar className="w-5 h-5 text-gray-400" />
              <div className="flex-1">
                <p className="text-sm text-gray-600">Date & Time</p>
                <p className="text-sm font-medium text-gray-900">March 11, 2026 at 2:56 PM</p>
              </div>
            </div>

            <div className="flex items-center gap-3 py-2 border-b border-gray-100">
              <CreditCard className="w-5 h-5 text-gray-400" />
              <div className="flex-1">
                <p className="text-sm text-gray-600">Payment Method</p>
                <p className="text-sm font-medium text-gray-900">UPI - ramesh@paytm</p>
              </div>
            </div>

            <div className="flex items-center justify-between py-2 border-b border-gray-100">
              <span className="text-sm text-gray-600">Trigger Event</span>
              <span className="text-sm font-medium text-gray-900">Heavy Rainfall</span>
            </div>

            <div className="flex items-center justify-between py-2 border-b border-gray-100">
              <span className="text-sm text-gray-600">Coverage Plan</span>
              <span className="text-sm font-medium text-gray-900">Standard Plan</span>
            </div>

            <div className="flex items-center justify-between py-2">
              <span className="text-sm text-gray-600">Status</span>
              <span className="inline-flex items-center gap-1 text-sm font-medium text-green-700">
                <CheckCircle2 className="w-4 h-4" />
                Completed
              </span>
            </div>
          </div>
        </motion.div>

        {/* Info Card */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-blue-50 rounded-xl p-4 border border-blue-200"
        >
          <p className="text-sm text-blue-900">
            <span className="font-semibold">💡 Good to know:</span> This payout was automatically processed based on verified weather data. No claim filing needed!
          </p>
        </motion.div>

        {/* Action Buttons */}
        <div className="space-y-3 pt-4">
          <Button
            onClick={() => navigate("/dashboard")}
            className="w-full h-12 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 font-semibold"
          >
            <Home className="w-5 h-5 mr-2" />
            Back to Dashboard
          </Button>

          <button className="w-full flex items-center justify-center gap-2 text-sm text-blue-600 font-medium hover:underline py-2">
            Download Receipt
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Support */}
        <div className="text-center pt-4">
          <p className="text-sm text-gray-600 mb-2">Need help with this transaction?</p>
          <button className="text-sm text-blue-600 font-medium hover:underline">
            Contact Support
          </button>
        </div>
      </div>
    </div>
  );
}