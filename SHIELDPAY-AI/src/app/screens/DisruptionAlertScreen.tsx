import { useNavigate } from "react-router";
import { CloudRain, AlertTriangle, TrendingUp, MapPin, Calendar, Clock } from "lucide-react";
import { Button } from "../components/ui/button";
import { motion } from "motion/react";
import logoImage from "figma:asset/73dac9f10cfea7ee55ffe158646a98a51236caef.png";

export default function DisruptionAlertScreen() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-orange-50">
      {/* Alert Header */}
      <div className="bg-gradient-to-r from-orange-500 to-red-500 pt-12 pb-12 px-6 rounded-b-[2rem] shadow-lg">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, type: "spring" }}
          className="flex flex-col items-center text-center mb-4"
        >
          <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-4 shadow-lg">
            <AlertTriangle className="w-10 h-10 text-orange-500 animate-pulse" />
          </div>
          <h1 className="text-2xl font-bold text-white mb-2">Disruption Detected!</h1>
          <p className="text-white/90 text-sm">Your insurance has been triggered</p>
        </motion.div>
      </div>

      {/* Content */}
      <div className="px-6 py-8 space-y-4">
        {/* Warning Message */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-2xl p-6 shadow-lg border-2 border-orange-200"
        >
          <div className="flex items-start gap-4 mb-4">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
              <CloudRain className="w-6 h-6 text-orange-600" />
            </div>
            <div>
              <h2 className="font-bold text-gray-900 mb-1">Heavy Rainfall Detected</h2>
              <p className="text-sm text-gray-700">
                Extreme weather conditions in your delivery zone have triggered your parametric insurance coverage.
              </p>
            </div>
          </div>

          {/* Event Details */}
          <div className="space-y-3 bg-orange-50 rounded-xl p-4">
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-gray-600" />
              <div>
                <p className="text-xs text-gray-600">Location</p>
                <p className="text-sm font-medium text-gray-900">Koramangala, Bangalore</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Calendar className="w-5 h-5 text-gray-600" />
              <div>
                <p className="text-xs text-gray-600">Date</p>
                <p className="text-sm font-medium text-gray-900">March 11, 2026</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="w-5 h-5 text-gray-600" />
              <div>
                <p className="text-xs text-gray-600">Time</p>
                <p className="text-sm font-medium text-gray-900">2:30 PM - 6:00 PM</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Parametric Trigger Info */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-2xl p-6 shadow-lg"
        >
          <h3 className="font-bold text-gray-900 mb-4">Trigger Parameters</h3>
          
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-700">Rainfall Intensity</span>
                <span className="text-sm font-bold text-blue-700">65mm/hour</span>
              </div>
              <div className="w-full bg-blue-200 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{ width: "85%" }}></div>
              </div>
              <p className="text-xs text-gray-600 mt-1">Threshold: 50mm/hour</p>
            </div>

            <div className="bg-purple-50 rounded-xl p-4 border border-purple-200">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-700">Duration</span>
                <span className="text-sm font-bold text-purple-700">3.5 hours</span>
              </div>
              <div className="w-full bg-purple-200 rounded-full h-2">
                <div className="bg-purple-600 h-2 rounded-full" style={{ width: "70%" }}></div>
              </div>
              <p className="text-xs text-gray-600 mt-1">Minimum: 2 hours</p>
            </div>
          </div>

          <div className="mt-4 p-3 bg-green-50 rounded-lg border border-green-200">
            <p className="text-sm text-green-800">
              <span className="font-semibold">✓ Verified:</span> Data from India Meteorological Department (IMD)
            </p>
          </div>
        </motion.div>

        {/* Payout Amount */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl p-6 shadow-lg text-white"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-white/20 backdrop-blur rounded-full flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-sm text-white/90">Payout Amount</p>
              <h2 className="text-4xl font-bold">₹800</h2>
            </div>
          </div>
          
          <div className="bg-white/20 backdrop-blur rounded-lg p-3">
            <p className="text-sm text-white/90 mb-1">Processing Status</p>
            <p className="font-semibold">Ready for disbursement</p>
          </div>
        </motion.div>

        {/* Claim Button */}
        <Button
          onClick={() => navigate("/anti-spoofing")}
          className="w-full h-14 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-lg font-semibold shadow-lg"
        >
          Claim Payout Now
        </Button>

        <p className="text-center text-sm text-gray-600 px-4">
          Your payout will be automatically processed and credited to your registered UPI account
        </p>
      </div>
    </div>
  );
}