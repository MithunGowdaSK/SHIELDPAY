import { useNavigate } from "react-router";
import { ChevronLeft, Users, Brain, Cloud, Shield, TrendingDown, Wallet, ArrowRight } from "lucide-react";
import { Button } from "../components/ui/button";
import { motion } from "motion/react";
import logoImage from "figma:asset/73dac9f10cfea7ee55ffe158646a98a51236caef.png";

const architectureSteps = [
  { id: 1, label: "Worker Data", icon: Users, color: "blue", description: "Platform verification & location tracking" },
  { id: 2, label: "AI Engine", icon: Brain, color: "purple", description: "Machine learning fraud detection" },
  { id: 3, label: "Weather API", icon: Cloud, color: "teal", description: "Real-time IMD data integration" },
  { id: 4, label: "Fraud Detection", icon: Shield, color: "red", description: "GPS spoofing & cluster analysis" },
  { id: 5, label: "Risk Score", icon: TrendingDown, color: "orange", description: "Multi-factor risk assessment" },
  { id: 6, label: "Payout Engine", icon: Wallet, color: "green", description: "Automated UPI disbursement" },
];

const securityFeatures = [
  "GPS location consistency verification",
  "Platform API cross-verification (Zomato, Swiggy)",
  "Device fingerprinting & authenticity check",
  "Weather zone matching with IMD data",
  "Cluster fraud detection using AI",
  "Behavioral pattern analysis",
  "Blockchain-based audit trail",
  "Real-time risk scoring",
];

export default function SecurityArchitectureScreen() {
  const navigate = useNavigate();

  const getColorClasses = (color: string) => {
    const colors = {
      blue: { bg: "bg-blue-100", text: "text-blue-700", border: "border-blue-300" },
      purple: { bg: "bg-purple-100", text: "text-purple-700", border: "border-purple-300" },
      teal: { bg: "bg-teal-100", text: "text-teal-700", border: "border-teal-300" },
      red: { bg: "bg-red-100", text: "text-red-700", border: "border-red-300" },
      orange: { bg: "bg-orange-100", text: "text-orange-700", border: "border-orange-300" },
      green: { bg: "bg-green-100", text: "text-green-700", border: "border-green-300" },
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-teal-500 pt-12 pb-8 px-6 rounded-b-[2rem] shadow-lg">
        <button onClick={() => navigate("/dashboard")} className="mb-4 text-white">
          <ChevronLeft className="w-6 h-6" />
        </button>
        <div className="flex justify-center mb-2">
          <img src={logoImage} alt="ShieldPay" className="h-12 w-auto" />
        </div>
        <h1 className="text-2xl font-bold text-white text-center mt-2">Security Architecture</h1>
        <p className="text-white/90 text-sm text-center">How ShieldPay prevents fraud</p>
      </div>

      <div className="px-6 py-8 space-y-6">
        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-br from-blue-50 to-teal-50 border-2 border-blue-200 rounded-2xl p-6"
        >
          <div className="flex items-start gap-3">
            <Shield className="w-8 h-8 text-blue-600 mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-bold text-gray-900 mb-2">Multi-Layer Fraud Prevention</h3>
              <p className="text-sm text-gray-700">
                ShieldPay uses AI-powered verification at every step to ensure payouts reach only genuine delivery workers, preventing GPS spoofing and coordinated fraud.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Architecture Flow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-2xl shadow-lg p-6"
        >
          <h3 className="font-bold text-gray-900 mb-6">System Architecture Flow</h3>

          <div className="space-y-3">
            {architectureSteps.map((step, index) => {
              const Icon = step.icon;
              const colors = getColorClasses(step.color);

              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                >
                  <div className={`${colors.bg} border-2 ${colors.border} rounded-xl p-4`}>
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`w-10 h-10 bg-white rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm`}>
                        <Icon className={`w-6 h-6 ${colors.text}`} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold text-gray-500">STEP {step.id}</span>
                        </div>
                        <p className={`font-bold ${colors.text}`}>{step.label}</p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-700 ml-13">{step.description}</p>
                  </div>
                  
                  {/* Arrow */}
                  {index < architectureSteps.length - 1 && (
                    <div className="flex justify-center my-2">
                      <ArrowRight className="w-5 h-5 text-gray-400 rotate-90" />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Security Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-white rounded-2xl shadow-lg p-6"
        >
          <h3 className="font-bold text-gray-900 mb-4">Security Features</h3>

          <div className="grid gap-3">
            {securityFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9 + index * 0.05 }}
                className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg"
              >
                <Shield className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-gray-700">{feature}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Key Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3 }}
          className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl p-6"
        >
          <h3 className="font-bold text-gray-900 mb-6 text-center">Protection Metrics</h3>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white rounded-xl p-4 text-center">
              <p className="text-3xl font-bold text-green-600 mb-1">99.7%</p>
              <p className="text-xs text-gray-600">Fraud Detection Rate</p>
            </div>
            <div className="bg-white rounded-xl p-4 text-center">
              <p className="text-3xl font-bold text-blue-600 mb-1">2 min</p>
              <p className="text-xs text-gray-600">Avg Verification Time</p>
            </div>
            <div className="bg-white rounded-xl p-4 text-center">
              <p className="text-3xl font-bold text-purple-600 mb-1">8 Layers</p>
              <p className="text-xs text-gray-600">Security Checks</p>
            </div>
            <div className="bg-white rounded-xl p-4 text-center">
              <p className="text-3xl font-bold text-orange-600 mb-1">&lt;0.1%</p>
              <p className="text-xs text-gray-600">False Positive Rate</p>
            </div>
          </div>
        </motion.div>

        {/* How It Protects Workers */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          className="bg-white rounded-2xl shadow-lg p-6"
        >
          <h3 className="font-bold text-gray-900 mb-4">How This Protects Genuine Workers</h3>

          <div className="space-y-3">
            <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
              <span className="text-2xl">🛡️</span>
              <div>
                <p className="font-semibold text-gray-900 text-sm mb-1">Prevents Premium Increase</p>
                <p className="text-xs text-gray-600">By blocking fraud, we keep premiums affordable for all workers</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
              <span className="text-2xl">⚡</span>
              <div>
                <p className="font-semibold text-gray-900 text-sm mb-1">Faster Payouts</p>
                <p className="text-xs text-gray-600">Verified workers get instant payouts without delays</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 bg-purple-50 rounded-lg">
              <span className="text-2xl">🎯</span>
              <div>
                <p className="font-semibold text-gray-900 text-sm mb-1">Fair for Everyone</p>
                <p className="text-xs text-gray-600">Ensures the system remains sustainable for genuine workers</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Demo Navigation */}
        <div className="grid grid-cols-2 gap-3">
          <Button
            onClick={() => navigate("/anti-spoofing")}
            variant="outline"
            className="h-14 border-2 border-blue-300 hover:bg-blue-50"
          >
            View Security Check
          </Button>
          <Button
            onClick={() => navigate("/ai-risk-score")}
            variant="outline"
            className="h-14 border-2 border-purple-300 hover:bg-purple-50"
          >
            View AI Analysis
          </Button>
        </div>

        {/* Back to Dashboard */}
        <Button
          onClick={() => navigate("/dashboard")}
          className="w-full h-14 bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 text-lg font-semibold"
        >
          Back to Dashboard
        </Button>
      </div>
    </div>
  );
}
