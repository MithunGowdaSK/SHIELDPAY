import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { Clock, CloudRain, MapPin, CloudSnow, AlertTriangle } from "lucide-react";
import { Button } from "../components/ui/button";
import { motion } from "motion/react";
import logoImage from "figma:asset/73dac9f10cfea7ee55ffe158646a98a51236caef.png";

const verificationSteps = [
  { id: 1, label: "Checking platform data", icon: Clock, delay: 0.5 },
  { id: 2, label: "Checking location history", icon: MapPin, delay: 1.5 },
  { id: 3, label: "Checking weather data", icon: CloudSnow, delay: 2.5 },
  { id: 4, label: "Checking fraud signals", icon: AlertTriangle, delay: 3.5 },
];

export default function ClaimHoldScreen() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    verificationSteps.forEach((step, index) => {
      setTimeout(() => {
        setCurrentStep(index + 1);
      }, step.delay * 1000);
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-yellow-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-500 to-yellow-500 pt-12 pb-8 px-6 rounded-b-[2rem] shadow-lg">
        <div className="flex justify-center mb-2">
          <img src={logoImage} alt="ShieldPay" className="h-12 w-auto" />
        </div>
        <h1 className="text-2xl font-bold text-white text-center mt-2">Verification in Progress</h1>
        <p className="text-white/90 text-sm text-center">Please wait while we verify your claim</p>
      </div>

      <div className="px-6 py-8 space-y-6">
        {/* Main Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-lg p-6"
        >
          <div className="flex items-start gap-3 mb-4">
            <CloudRain className="w-8 h-8 text-orange-600 mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-bold text-gray-900 mb-2">We're on it!</h3>
              <p className="text-sm text-gray-700 mb-2">
                Bad weather may affect network connectivity. We are verifying your activity with our secure systems.
              </p>
              <p className="text-sm font-semibold text-orange-700">
                Your payout will not be lost.
              </p>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mt-4">
            <p className="text-xs text-blue-800">
              <span className="font-semibold">Note:</span> This verification protects all genuine workers from fraud. Legitimate claims are never rejected.
            </p>
          </div>
        </motion.div>

        {/* Verification Steps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-2xl shadow-lg p-6"
        >
          <h3 className="font-bold text-gray-900 mb-6">Verification Steps</h3>

          <div className="space-y-4">
            {verificationSteps.map((step, index) => {
              const Icon = step.icon;
              const isCompleted = currentStep > index;
              const isActive = currentStep === index + 1;

              return (
                <div
                  key={step.id}
                  className={`flex items-center gap-4 p-4 rounded-xl transition-all ${
                    isCompleted
                      ? "bg-green-50 border-2 border-green-200"
                      : isActive
                      ? "bg-orange-50 border-2 border-orange-200"
                      : "bg-gray-50 border-2 border-gray-200"
                  }`}
                >
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${
                    isCompleted
                      ? "bg-green-500"
                      : isActive
                      ? "bg-orange-500"
                      : "bg-gray-300"
                  }`}>
                    <Icon className={`w-6 h-6 ${
                      isCompleted || isActive ? "text-white" : "text-gray-500"
                    }`} />
                  </div>
                  <div className="flex-1">
                    <p className={`font-medium ${
                      isCompleted
                        ? "text-green-700"
                        : isActive
                        ? "text-orange-700"
                        : "text-gray-500"
                    }`}>
                      {step.label}
                    </p>
                    {isActive && (
                      <div className="flex items-center gap-2 mt-1">
                        <div className="flex gap-1">
                          {[0, 1, 2].map((i) => (
                            <motion.div
                              key={i}
                              className="w-1.5 h-1.5 bg-orange-600 rounded-full"
                              animate={{ opacity: [0.3, 1, 0.3] }}
                              transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                delay: i * 0.2,
                              }}
                            />
                          ))}
                        </div>
                        <span className="text-xs text-orange-600">In progress...</span>
                      </div>
                    )}
                    {isCompleted && (
                      <p className="text-xs text-green-600 mt-1">✓ Complete</p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Progress Animation */}
          <div className="mt-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-600">Overall Progress</span>
              <span className="text-sm font-bold text-gray-900">
                {currentStep}/{verificationSteps.length}
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <motion.div
                className="bg-gradient-to-r from-orange-500 to-yellow-500 h-3 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${(currentStep / verificationSteps.length) * 100}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </div>
        </motion.div>

        {/* Estimated Time */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-gradient-to-br from-orange-50 to-yellow-50 border-2 border-orange-200 rounded-2xl p-6"
        >
          <div className="flex items-center gap-3">
            <Clock className="w-8 h-8 text-orange-600 flex-shrink-0" />
            <div>
              <p className="font-bold text-gray-900 mb-1">Estimated Time</p>
              <p className="text-sm text-gray-700">
                This usually takes 5-10 minutes. We'll notify you once verification is complete.
              </p>
            </div>
          </div>
        </motion.div>

        {/* What Happens Next */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-2xl shadow-lg p-6"
        >
          <h3 className="font-bold text-gray-900 mb-4">What Happens Next?</h3>
          
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-xs font-bold text-blue-600">1</span>
              </div>
              <p className="text-sm text-gray-700">
                We cross-check your data with platform APIs and weather services
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-xs font-bold text-blue-600">2</span>
              </div>
              <p className="text-sm text-gray-700">
                AI analyzes your location and activity patterns
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-xs font-bold text-blue-600">3</span>
              </div>
              <p className="text-sm text-gray-700">
                Once verified, your payout is instantly approved
              </p>
            </div>
          </div>
        </motion.div>

        {/* Demo Button */}
        <Button
          onClick={() => navigate("/fraud-result")}
          className="w-full h-14 bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-lg font-semibold"
        >
          View Verification Result (Demo)
        </Button>

        {/* Support */}
        <div className="text-center">
          <p className="text-sm text-gray-600 mb-2">Taking too long?</p>
          <button className="text-sm text-blue-600 font-medium hover:underline">
            Contact Support
          </button>
        </div>
      </div>
    </div>
  );
}
