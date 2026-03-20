import { useState } from "react";
import { useNavigate } from "react-router";
import { CheckCircle2, AlertTriangle, XCircle, ArrowRight, Phone } from "lucide-react";
import { Button } from "../components/ui/button";
import { motion } from "motion/react";
import logoImage from "figma:asset/73dac9f10cfea7ee55ffe158646a98a51236caef.png";

type ResultType = "verified" | "review" | "suspicious";

export default function FraudResultScreen() {
  const navigate = useNavigate();
  // You can change this to "review" or "suspicious" to see different states
  const [resultType] = useState<ResultType>("verified");

  const resultConfig = {
    verified: {
      icon: CheckCircle2,
      iconColor: "text-green-600",
      bgGradient: "from-green-500 to-emerald-500",
      cardBg: "bg-green-50",
      borderColor: "border-green-200",
      title: "Verified ✓",
      message: "Your activity matches delivery data",
      detail: "Payout will be processed",
      buttonText: "Continue to Payout",
      buttonAction: () => navigate("/payout-approval"),
    },
    review: {
      icon: AlertTriangle,
      iconColor: "text-yellow-600",
      bgGradient: "from-yellow-500 to-orange-500",
      cardBg: "bg-yellow-50",
      borderColor: "border-yellow-300",
      title: "Under Review",
      message: "Unusual activity detected",
      detail: "Verifying with platform data",
      buttonText: "Wait for Verification",
      buttonAction: () => navigate("/claim-hold"),
    },
    suspicious: {
      icon: XCircle,
      iconColor: "text-red-600",
      bgGradient: "from-red-500 to-rose-500",
      cardBg: "bg-red-50",
      borderColor: "border-red-300",
      title: "Action Required",
      message: "Possible GPS spoofing detected",
      detail: "Claim temporarily paused",
      buttonText: "Contact Support",
      buttonAction: () => alert("Support: +91 1800-123-4567"),
    },
  };

  const config = resultConfig[resultType];
  const Icon = config.icon;

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <div className={`bg-gradient-to-r ${config.bgGradient} pt-12 pb-12 px-6 rounded-b-[2rem] shadow-lg`}>
        <div className="flex justify-center mb-4">
          <img src={logoImage} alt="ShieldPay" className="h-12 w-auto" />
        </div>
        
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, type: "spring" }}
          className="flex flex-col items-center text-center"
        >
          <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mb-4 shadow-lg">
            <Icon className={`w-12 h-12 ${config.iconColor}`} />
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">{config.title}</h1>
        </motion.div>
      </div>

      <div className="px-6 py-8 space-y-6">
        {/* Result Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`${config.cardBg} border-2 ${config.borderColor} rounded-2xl p-6`}
        >
          <div className="text-center mb-4">
            <h2 className="text-xl font-bold text-gray-900 mb-2">{config.message}</h2>
            <p className="text-gray-700">{config.detail}</p>
          </div>

          {resultType === "verified" && (
            <div className="space-y-3 mt-6">
              <div className="flex items-center gap-3 p-3 bg-white rounded-lg">
                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span className="text-sm text-gray-700">Location data verified</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white rounded-lg">
                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span className="text-sm text-gray-700">Platform activity confirmed</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white rounded-lg">
                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span className="text-sm text-gray-700">Weather zone matched</span>
              </div>
            </div>
          )}

          {resultType === "review" && (
            <div className="space-y-3 mt-6">
              <div className="flex items-center gap-3 p-3 bg-white rounded-lg">
                <AlertTriangle className="w-5 h-5 text-yellow-600 flex-shrink-0" />
                <span className="text-sm text-gray-700">Location pattern unusual</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white rounded-lg">
                <AlertTriangle className="w-5 h-5 text-yellow-600 flex-shrink-0" />
                <span className="text-sm text-gray-700">Cross-verifying with platform</span>
              </div>
              <div className="bg-white rounded-lg p-4 mt-4">
                <p className="text-xs text-gray-600">
                  Expected resolution: 15-30 minutes
                </p>
              </div>
            </div>
          )}

          {resultType === "suspicious" && (
            <div className="space-y-3 mt-6">
              <div className="flex items-center gap-3 p-3 bg-white rounded-lg">
                <XCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                <span className="text-sm text-gray-700">GPS location inconsistent</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white rounded-lg">
                <XCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                <span className="text-sm text-gray-700">Device fingerprint mismatch</span>
              </div>
              <div className="bg-white rounded-lg p-4 mt-4 border-2 border-red-200">
                <div className="flex items-start gap-2">
                  <Phone className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-gray-900 mb-1">
                      Support Required
                    </p>
                    <p className="text-xs text-gray-600">
                      Please contact our support team to resolve this issue
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </motion.div>

        {/* Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-2xl shadow-lg p-6"
        >
          <h3 className="font-bold text-gray-900 mb-4">What happens next?</h3>
          
          {resultType === "verified" && (
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs font-bold text-blue-600">1</span>
                </div>
                <p className="text-sm text-gray-700">Your payout will be approved</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs font-bold text-blue-600">2</span>
                </div>
                <p className="text-sm text-gray-700">Amount will be credited to your UPI</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs font-bold text-blue-600">3</span>
                </div>
                <p className="text-sm text-gray-700">You'll receive instant confirmation</p>
              </div>
            </div>
          )}

          {resultType === "review" && (
            <div className="space-y-3">
              <p className="text-sm text-gray-700">
                We're cross-checking your data with platform records. This is a standard security measure that helps protect all workers.
              </p>
              <p className="text-sm text-gray-700">
                You'll receive a notification once verification is complete.
              </p>
            </div>
          )}

          {resultType === "suspicious" && (
            <div className="space-y-3">
              <p className="text-sm text-gray-700">
                Our AI detected unusual patterns that require manual verification. This protects the system for all genuine workers.
              </p>
              <p className="text-sm font-semibold text-gray-900">
                Support: +91 1800-123-4567
              </p>
            </div>
          )}
        </motion.div>

        {/* Action Button */}
        <Button
          onClick={config.buttonAction}
          className={`w-full h-14 bg-gradient-to-r ${config.bgGradient} hover:opacity-90 text-lg font-semibold text-white`}
        >
          {config.buttonText}
          {resultType === "verified" && <ArrowRight className="w-5 h-5 ml-2" />}
        </Button>

        {/* View Risk Score */}
        <button
          onClick={() => navigate("/ai-risk-score")}
          className="w-full flex items-center justify-center gap-2 text-sm text-blue-600 font-medium hover:underline py-2"
        >
          View AI Risk Analysis
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
