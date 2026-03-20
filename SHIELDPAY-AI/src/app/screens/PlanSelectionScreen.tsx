import { useState } from "react";
import { useNavigate } from "react-router";
import { Shield, Check, ChevronLeft } from "lucide-react";
import { Button } from "../components/ui/button";
import { motion } from "motion/react";
import logoImage from "figma:asset/73dac9f10cfea7ee55ffe158646a98a51236caef.png";

const plans = [
  {
    id: "basic",
    name: "Basic Plan",
    price: 30,
    coverage: 1000,
    features: ["Rain protection", "Basic support", "Weekly payout"],
    color: "from-blue-100 to-blue-50",
    borderColor: "border-blue-200",
    iconBg: "bg-blue-500",
  },
  {
    id: "standard",
    name: "Standard Plan",
    price: 50,
    coverage: 2000,
    features: ["Rain & heat protection", "Priority support", "Instant payout", "Weather alerts"],
    color: "from-teal-100 to-teal-50",
    borderColor: "border-teal-300",
    iconBg: "bg-teal-500",
    recommended: true,
  },
  {
    id: "pro",
    name: "Pro Plan",
    price: 80,
    coverage: 3500,
    features: ["Full weather coverage", "24/7 support", "Instant payout", "AI predictions", "Pollution alerts"],
    color: "from-purple-100 to-purple-50",
    borderColor: "border-purple-200",
    iconBg: "bg-purple-500",
  },
];

export default function PlanSelectionScreen() {
  const navigate = useNavigate();
  const [selectedPlan, setSelectedPlan] = useState("standard");

  const handleContinue = () => {
    navigate("/payment");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-teal-500 pt-12 pb-8 px-6 rounded-b-[2rem] shadow-lg">
        <button onClick={() => navigate("/income-setup")} className="mb-4 text-white">
          <ChevronLeft className="w-6 h-6" />
        </button>
        <div className="flex justify-center mb-2">
          <img src={logoImage} alt="ShieldPay" className="h-12 w-auto" />
        </div>
        <h1 className="text-2xl font-bold text-white text-center mt-2">Choose Your Plan</h1>
        <p className="text-white/90 text-sm text-center">Select weekly insurance coverage</p>
      </div>

      {/* Plans */}
      <div className="px-6 py-8 space-y-4">
        {plans.map((plan, index) => (
          <motion.div
            key={plan.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <button
              onClick={() => setSelectedPlan(plan.id)}
              className={`w-full relative bg-gradient-to-br ${plan.color} border-2 ${
                selectedPlan === plan.id ? plan.borderColor : "border-gray-200"
              } rounded-2xl p-5 transition-all ${
                selectedPlan === plan.id ? "shadow-lg scale-[1.02]" : "shadow-md"
              }`}
            >
              {plan.recommended && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-green-500 text-white px-4 py-1 rounded-full text-xs font-semibold">
                  Recommended
                </div>
              )}

              <div className="flex items-start justify-between mb-3">
                <div className="text-left">
                  <h3 className="text-xl font-bold text-gray-900">{plan.name}</h3>
                  <div className="flex items-baseline gap-1 mt-1">
                    <span className="text-3xl font-bold text-gray-900">₹{plan.price}</span>
                    <span className="text-gray-600 text-sm">/week</span>
                  </div>
                </div>
                <div
                  className={`w-12 h-12 ${plan.iconBg} rounded-full flex items-center justify-center ${
                    selectedPlan === plan.id ? "ring-4 ring-offset-2 ring-blue-400" : ""
                  }`}
                >
                  {selectedPlan === plan.id ? (
                    <Check className="w-6 h-6 text-white" />
                  ) : (
                    <Shield className="w-6 h-6 text-white" />
                  )}
                </div>
              </div>

              <div className="bg-white/60 backdrop-blur rounded-lg p-3 mb-3">
                <p className="text-sm text-gray-600 mb-1">Coverage Amount</p>
                <p className="text-2xl font-bold text-gray-900">₹{plan.coverage.toLocaleString()}</p>
              </div>

              <div className="space-y-2">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </button>
          </motion.div>
        ))}
      </div>

      {/* Continue Button */}
      <div className="fixed bottom-0 left-0 right-0 p-6 bg-white border-t border-gray-200">
        <Button
          onClick={handleContinue}
          className="w-full h-14 bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 text-lg font-semibold"
        >
          Continue with {plans.find(p => p.id === selectedPlan)?.name}
        </Button>
      </div>
    </div>
  );
}