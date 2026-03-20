import { useNavigate } from "react-router";
import { ChevronLeft, MapPin, AlertTriangle, Users, CheckCircle2, XCircle, ArrowRight } from "lucide-react";
import { Button } from "../components/ui/button";
import { motion } from "motion/react";
import logoImage from "figma:asset/73dac9f10cfea7ee55ffe158646a98a51236caef.png";

export default function FraudClusterScreen() {
  const navigate = useNavigate();

  const clusterData = {
    workersInZone: 47,
    activeClaims: 12,
    verifiedWorkers: 44,
    flaggedWorkers: 3,
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-teal-500 pt-12 pb-8 px-6 rounded-b-[2rem] shadow-lg">
        <button onClick={() => navigate("/ai-risk-score")} className="mb-4 text-white">
          <ChevronLeft className="w-6 h-6" />
        </button>
        <div className="flex justify-center mb-2">
          <img src={logoImage} alt="ShieldPay" className="h-12 w-auto" />
        </div>
        <h1 className="text-2xl font-bold text-white text-center mt-2">Security Monitoring</h1>
        <p className="text-white/90 text-sm text-center">Cluster fraud detection</p>
      </div>

      <div className="px-6 py-8 space-y-6">
        {/* Map Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-lg p-6"
        >
          <h3 className="font-bold text-gray-900 mb-4">Zone Activity Map</h3>
          
          {/* Simplified Map Representation */}
          <div className="relative bg-gradient-to-br from-blue-50 to-teal-50 rounded-xl h-64 overflow-hidden border-2 border-blue-200">
            {/* Zone Label */}
            <div className="absolute top-4 left-4 bg-white rounded-lg px-3 py-2 shadow-md">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-semibold text-gray-900">Koramangala, Bangalore</span>
              </div>
            </div>

            {/* Worker Dots - Simulating map markers */}
            <div className="absolute top-16 left-20 w-3 h-3 bg-green-500 rounded-full shadow-lg animate-pulse" />
            <div className="absolute top-24 right-32 w-3 h-3 bg-green-500 rounded-full shadow-lg" />
            <div className="absolute bottom-20 left-32 w-3 h-3 bg-green-500 rounded-full shadow-lg animate-pulse" />
            <div className="absolute top-32 right-16 w-3 h-3 bg-red-500 rounded-full shadow-lg animate-pulse" />
            <div className="absolute bottom-28 right-24 w-3 h-3 bg-green-500 rounded-full shadow-lg" />
            <div className="absolute top-40 left-28 w-3 h-3 bg-green-500 rounded-full shadow-lg" />
            <div className="absolute bottom-32 left-16 w-3 h-3 bg-red-500 rounded-full shadow-lg animate-pulse" />
            <div className="absolute top-28 right-40 w-3 h-3 bg-green-500 rounded-full shadow-lg animate-pulse" />
            <div className="absolute bottom-16 right-36 w-3 h-3 bg-green-500 rounded-full shadow-lg" />
            <div className="absolute top-36 left-40 w-3 h-3 bg-yellow-500 rounded-full shadow-lg animate-pulse" />

            {/* Legend */}
            <div className="absolute bottom-4 right-4 bg-white rounded-lg px-3 py-2 shadow-md space-y-1">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                <span className="text-xs text-gray-700">Verified</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-yellow-500 rounded-full" />
                <span className="text-xs text-gray-700">Review</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-red-500 rounded-full" />
                <span className="text-xs text-gray-700">Flagged</span>
              </div>
            </div>
          </div>

          <p className="text-xs text-gray-500 mt-3 text-center">
            Real-time monitoring of worker claims in your delivery zone
          </p>
        </motion.div>

        {/* AI Alert */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-yellow-50 border-2 border-yellow-300 rounded-2xl p-6"
        >
          <div className="flex items-start gap-3 mb-4">
            <AlertTriangle className="w-6 h-6 text-yellow-600 mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-bold text-gray-900 mb-2">Multiple Claims Detected</h3>
              <p className="text-sm text-gray-700">
                AI has identified {clusterData.activeClaims} active claims in the same zone during this weather event.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-4 border border-yellow-200">
            <p className="text-sm font-semibold text-gray-900 mb-2">⚠️ Possible Coordinated Fraud Activity</p>
            <p className="text-xs text-gray-600">
              AI is analyzing patterns to detect any coordinated fake claims. Genuine workers will not be affected.
            </p>
          </div>
        </motion.div>

        {/* Zone Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-2xl shadow-lg p-6"
        >
          <h3 className="font-bold text-gray-900 mb-6">Zone Analytics</h3>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-blue-50 rounded-xl p-4 text-center">
              <Users className="w-6 h-6 text-blue-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-blue-700">{clusterData.workersInZone}</p>
              <p className="text-xs text-gray-600 mt-1">Workers in Zone</p>
            </div>

            <div className="bg-orange-50 rounded-xl p-4 text-center">
              <AlertTriangle className="w-6 h-6 text-orange-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-orange-700">{clusterData.activeClaims}</p>
              <p className="text-xs text-gray-600 mt-1">Active Claims</p>
            </div>

            <div className="bg-green-50 rounded-xl p-4 text-center">
              <CheckCircle2 className="w-6 h-6 text-green-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-green-700">{clusterData.verifiedWorkers}</p>
              <p className="text-xs text-gray-600 mt-1">Verified Workers</p>
            </div>

            <div className="bg-red-50 rounded-xl p-4 text-center">
              <XCircle className="w-6 h-6 text-red-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-red-700">{clusterData.flaggedWorkers}</p>
              <p className="text-xs text-gray-600 mt-1">Flagged Workers</p>
            </div>
          </div>
        </motion.div>

        {/* AI Detection Details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-gradient-to-br from-blue-50 to-teal-50 border-2 border-blue-200 rounded-2xl p-6"
        >
          <h3 className="font-bold text-gray-900 mb-4">What We're Checking</h3>

          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-sm font-medium text-gray-900">Same device patterns</p>
                <p className="text-xs text-gray-600">Detecting if multiple claims from same device</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-sm font-medium text-gray-900">GPS clustering analysis</p>
                <p className="text-xs text-gray-600">Identifying suspiciously close locations</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-sm font-medium text-gray-900">Timing pattern detection</p>
                <p className="text-xs text-gray-600">Checking for coordinated claim submissions</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-sm font-medium text-gray-900">Platform cross-verification</p>
                <p className="text-xs text-gray-600">Validating with Zomato/Swiggy data</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Status Message */}
        <div className="bg-green-50 border border-green-200 rounded-xl p-4">
          <p className="text-sm text-green-800 text-center">
            ✓ Your claim is being processed normally. This monitoring protects all genuine workers.
          </p>
        </div>

        {/* Continue Button */}
        <Button
          onClick={() => navigate("/payout-approval")}
          className="w-full h-14 bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 text-lg font-semibold"
        >
          Continue Monitoring
          <ArrowRight className="w-5 h-5 ml-2" />
        </Button>
      </div>
    </div>
  );
}
