import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { Shield, MapPin, Smartphone, CloudRain, Brain, CheckCircle2 } from "lucide-react";
import { Button } from "../components/ui/button";
import { motion } from "motion/react";
import logoImage from "figma:asset/73dac9f10cfea7ee55ffe158646a98a51236caef.png";

const verificationSteps = [
  { id: 1, label: "Location consistency check", icon: MapPin, delay: 0.5 },
  { id: 2, label: "Platform activity check", icon: Shield, delay: 1.0 },
  { id: 3, label: "Device authenticity check", icon: Smartphone, delay: 1.5 },
  { id: 4, label: "Weather zone verification", icon: CloudRain, delay: 2.0 },
  { id: 5, label: "AI fraud detection", icon: Brain, delay: 2.5 },
];

export default function AntiSpoofingScreen() {
  const navigate = useNavigate();
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [isVerifying, setIsVerifying] = useState(true);

  useEffect(() => {
    // Simulate verification process
    verificationSteps.forEach((step) => {
      setTimeout(() => {
        setCompletedSteps((prev) => [...prev, step.id]);
      }, step.delay * 1000);
    });

    // Complete verification after all steps
    setTimeout(() => {
      setIsVerifying(false);
    }, 3500);
  }, []);

  const handleContinue = () => {
    navigate("/fraud-result");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-teal-500 pt-12 pb-8 px-6 rounded-b-[2rem] shadow-lg">
        <div className="flex justify-center mb-2">
          <img src={logoImage} alt="ShieldPay" className="h-12 w-auto" />
        </div>
        <h1 className="text-2xl font-bold text-white text-center mt-2">Security Check</h1>
        <p className="text-white/90 text-sm text-center">Verifying your activity</p>
      </div>

      <div className="px-6 py-8 space-y-6">
        {/* Info Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-6"
        >
          <div className="flex items-start gap-3">
            <Shield className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-bold text-gray-900 mb-2">Protecting Genuine Workers</h3>
              <p className="text-sm text-gray-700">
                We are verifying your activity to prevent fraud and ensure payouts go to real delivery workers.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Verification Steps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-2xl shadow-lg p-6"
        >
          <h3 className="font-bold text-gray-900 mb-6">Verification Process</h3>

          <div className="space-y-4">
            {verificationSteps.map((step) => {
              const Icon = step.icon;
              const isCompleted = completedSteps.includes(step.id);
              const isActive = completedSteps.length + 1 === step.id;

              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0.5 }}
                  animate={{ 
                    opacity: isCompleted ? 1 : isActive ? 0.8 : 0.5,
                  }}
                  className={`flex items-center gap-4 p-4 rounded-xl transition-all ${
                    isCompleted 
                      ? "bg-green-50 border-2 border-green-200" 
                      : isActive
                      ? "bg-blue-50 border-2 border-blue-200"
                      : "bg-gray-50 border-2 border-gray-200"
                  }`}
                >
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${
                    isCompleted 
                      ? "bg-green-500" 
                      : isActive
                      ? "bg-blue-500"
                      : "bg-gray-300"
                  }`}>
                    {isCompleted ? (
                      <CheckCircle2 className="w-6 h-6 text-white" />
                    ) : (
                      <Icon className={`w-6 h-6 ${isActive ? "text-white" : "text-gray-500"}`} />
                    )}
                  </div>
                  <div className="flex-1">
                    <p className={`font-medium ${
                      isCompleted ? "text-green-700" : isActive ? "text-blue-700" : "text-gray-500"
                    }`}>
                      {step.label}
                    </p>
                    {isActive && !isCompleted && (
                      <div className="flex items-center gap-2 mt-1">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-pulse" />
                        <span className="text-xs text-blue-600">Checking...</span>
                      </div>
                    )}
                    {isCompleted && (
                      <p className="text-xs text-green-600 mt-1">✓ Verified</p>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Progress Bar */}
          <div className="mt-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-600">Progress</span>
              <span className="text-sm font-bold text-gray-900">
                {completedSteps.length}/{verificationSteps.length}
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <motion.div
                className="bg-gradient-to-r from-blue-600 to-teal-500 h-3 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${(completedSteps.length / verificationSteps.length) * 100}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>
        </motion.div>

        {/* Action Button */}
        <Button
          onClick={handleContinue}
          disabled={isVerifying}
          className="w-full h-14 bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isVerifying ? (
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              Verifying...
            </div>
          ) : (
            "Continue"
          )}
        </Button>

        {/* Security Note */}
        <div className="bg-gray-50 rounded-xl p-4">
          <p className="text-xs text-gray-600 text-center">
            🔒 All verification happens in real-time using encrypted data
          </p>
        </div>
      </div>
    </div>
  );
}
