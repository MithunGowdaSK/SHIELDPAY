import { useNavigate } from "react-router";
import { ChevronLeft, Brain, MapPin, Package, CloudRain, Smartphone, Users, ArrowRight } from "lucide-react";
import { Button } from "../components/ui/button";
import { motion } from "motion/react";
import logoImage from "figma:asset/73dac9f10cfea7ee55ffe158646a98a51236caef.png";

const riskFactors = [
  { 
    id: 1, 
    label: "Location Pattern", 
    icon: MapPin, 
    score: 95, 
    color: "green",
    detail: "Consistent delivery zones"
  },
  { 
    id: 2, 
    label: "Order Activity", 
    icon: Package, 
    score: 92, 
    color: "green",
    detail: "Regular order patterns"
  },
  { 
    id: 3, 
    label: "Weather Severity", 
    icon: CloudRain, 
    score: 78, 
    color: "yellow",
    detail: "Moderate risk conditions"
  },
  { 
    id: 4, 
    label: "Device Authenticity", 
    icon: Smartphone, 
    score: 98, 
    color: "green",
    detail: "Verified device signature"
  },
  { 
    id: 5, 
    label: "Cluster Fraud Detection", 
    icon: Users, 
    score: 88, 
    color: "green",
    detail: "No coordinated activity"
  },
];

export default function AIRiskScoreScreen() {
  const navigate = useNavigate();

  // Calculate overall risk score
  const overallScore = Math.round(
    riskFactors.reduce((sum, factor) => sum + factor.score, 0) / riskFactors.length
  );

  const getRiskLevel = (score: number) => {
    if (score >= 85) return { level: "Low", color: "green" };
    if (score >= 60) return { level: "Medium", color: "yellow" };
    return { level: "High", color: "red" };
  };

  const getRiskColor = (color: string) => {
    switch (color) {
      case "green": return { bg: "bg-green-100", text: "text-green-700", bar: "bg-green-600" };
      case "yellow": return { bg: "bg-yellow-100", text: "text-yellow-700", bar: "bg-yellow-600" };
      case "red": return { bg: "bg-red-100", text: "text-red-700", bar: "bg-red-600" };
      default: return { bg: "bg-gray-100", text: "text-gray-700", bar: "bg-gray-600" };
    }
  };

  const overallRisk = getRiskLevel(overallScore);
  const overallColors = getRiskColor(overallRisk.color);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-teal-500 pt-12 pb-8 px-6 rounded-b-[2rem] shadow-lg">
        <button onClick={() => navigate("/fraud-result")} className="mb-4 text-white">
          <ChevronLeft className="w-6 h-6" />
        </button>
        <div className="flex justify-center mb-2">
          <img src={logoImage} alt="ShieldPay" className="h-12 w-auto" />
        </div>
        <h1 className="text-2xl font-bold text-white text-center mt-2">AI Risk Analysis</h1>
        <p className="text-white/90 text-sm text-center">Real-time fraud detection</p>
      </div>

      <div className="px-6 py-8 space-y-6">
        {/* Overall Risk Score */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className={`${overallColors.bg} border-2 border-${overallRisk.color}-300 rounded-2xl p-6`}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className={`w-16 h-16 bg-gradient-to-br from-blue-600 to-teal-500 rounded-full flex items-center justify-center`}>
              <Brain className="w-8 h-8 text-white" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Overall Risk Score</p>
              <h2 className={`text-3xl font-bold ${overallColors.text}`}>{overallScore}/100</h2>
            </div>
          </div>

          <div className="bg-white rounded-xl p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-700">Risk Level</span>
              <span className={`text-lg font-bold ${overallColors.text}`}>
                {overallRisk.level} Risk
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div
                className={`${overallColors.bar} h-3 rounded-full transition-all`}
                style={{ width: `${overallScore}%` }}
              />
            </div>
          </div>
        </motion.div>

        {/* Risk Factors */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-2xl shadow-lg p-6"
        >
          <h3 className="font-bold text-gray-900 mb-6">Risk Factors Analysis</h3>

          <div className="space-y-5">
            {riskFactors.map((factor) => {
              const Icon = factor.icon;
              const colors = getRiskColor(factor.color);

              return (
                <div key={factor.id} className="space-y-2">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 ${colors.bg} rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <Icon className={`w-5 h-5 ${colors.text}`} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <p className="font-medium text-gray-900 text-sm">{factor.label}</p>
                        <span className={`text-sm font-bold ${colors.text}`}>{factor.score}%</span>
                      </div>
                      <p className="text-xs text-gray-500">{factor.detail}</p>
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 ml-13">
                    <div
                      className={`${colors.bar} h-2 rounded-full transition-all`}
                      style={{ width: `${factor.score}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Payout Decision */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-gradient-to-br from-blue-50 to-teal-50 border-2 border-blue-200 rounded-2xl p-6"
        >
          <h3 className="font-bold text-gray-900 mb-4">AI Decision Matrix</h3>

          <div className="space-y-3">
            <div className={`p-4 rounded-xl ${overallRisk.level === "Low" ? "bg-green-100 border-2 border-green-300" : "bg-white"}`}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className={`w-3 h-3 rounded-full ${overallRisk.level === "Low" ? "bg-green-500" : "bg-gray-300"}`} />
                  <span className="font-medium text-gray-900 text-sm">Low Risk</span>
                </div>
                <span className="text-xs text-gray-600">→ Instant Payout</span>
              </div>
            </div>

            <div className={`p-4 rounded-xl ${overallRisk.level === "Medium" ? "bg-yellow-100 border-2 border-yellow-300" : "bg-white"}`}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className={`w-3 h-3 rounded-full ${overallRisk.level === "Medium" ? "bg-yellow-500" : "bg-gray-300"}`} />
                  <span className="font-medium text-gray-900 text-sm">Medium Risk</span>
                </div>
                <span className="text-xs text-gray-600">→ Auto Verification</span>
              </div>
            </div>

            <div className={`p-4 rounded-xl ${overallRisk.level === "High" ? "bg-red-100 border-2 border-red-300" : "bg-white"}`}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className={`w-3 h-3 rounded-full ${overallRisk.level === "High" ? "bg-red-500" : "bg-gray-300"}`} />
                  <span className="font-medium text-gray-900 text-sm">High Risk</span>
                </div>
                <span className="text-xs text-gray-600">→ Manual Review</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* View Cluster Detection */}
        <button
          onClick={() => navigate("/fraud-cluster")}
          className="w-full flex items-center justify-center gap-2 text-sm text-blue-600 font-medium hover:underline py-2"
        >
          View Cluster Fraud Detection
          <ArrowRight className="w-4 h-4" />
        </button>

        {/* Continue Button */}
        <Button
          onClick={() => navigate("/payout-approval")}
          className="w-full h-14 bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 text-lg font-semibold"
        >
          Continue to Verification
        </Button>
      </div>
    </div>
  );
}
