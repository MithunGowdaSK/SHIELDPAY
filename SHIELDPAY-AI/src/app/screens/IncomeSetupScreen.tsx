import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { ChevronLeft, TrendingUp, IndianRupee, Brain } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { motion } from "motion/react";
import logoImage from "figma:asset/73dac9f10cfea7ee55ffe158646a98a51236caef.png";

export default function IncomeSetupScreen() {
  const navigate = useNavigate();
  const [dailyEarnings, setDailyEarnings] = useState("");
  const [weeklyEarnings, setWeeklyEarnings] = useState("");
  const [riskScore, setRiskScore] = useState(0);
  const [suggestedPremium, setSuggestedPremium] = useState(0);

  // Calculate AI risk score and premium
  useEffect(() => {
    const daily = parseFloat(dailyEarnings) || 0;
    const weekly = parseFloat(weeklyEarnings) || 0;

    if (daily > 0 && weekly > 0) {
      // AI risk score based on earnings pattern (mock calculation)
      const avgDaily = weekly / 7;
      const variability = Math.abs(daily - avgDaily) / avgDaily;
      const score = Math.min(100, Math.max(0, 100 - variability * 100));
      setRiskScore(Math.round(score));

      // Suggested premium: 1.5-2% of weekly earnings
      const premium = Math.round((weekly * 0.017) / 10) * 10; // Round to nearest 10
      setSuggestedPremium(premium);
    }
  }, [dailyEarnings, weeklyEarnings]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/plans");
  };

  const getRiskColor = (score: number) => {
    if (score >= 75) return "text-green-600";
    if (score >= 50) return "text-yellow-600";
    return "text-red-600";
  };

  const getRiskLabel = (score: number) => {
    if (score >= 75) return "Low Risk";
    if (score >= 50) return "Medium Risk";
    return "High Risk";
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-teal-500 pt-12 pb-8 px-6 rounded-b-[2rem] shadow-lg">
        <button onClick={() => navigate("/location-permission")} className="mb-4 text-white">
          <ChevronLeft className="w-6 h-6" />
        </button>
        <div className="flex justify-center mb-2">
          <img src={logoImage} alt="ShieldPay" className="h-12 w-auto" />
        </div>
        <h1 className="text-2xl font-bold text-white text-center mt-2">Income Setup</h1>
        <p className="text-white/90 text-sm text-center">Help us calculate your coverage</p>
      </div>

      {/* Form */}
      <div className="px-6 py-8">
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          {/* Earnings Inputs */}
          <div className="bg-white rounded-2xl shadow-lg p-6 space-y-6">
            <div className="space-y-2">
              <Label htmlFor="dailyEarnings">Average Daily Earnings</Label>
              <div className="relative">
                <IndianRupee className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  id="dailyEarnings"
                  type="number"
                  placeholder="Enter daily income"
                  value={dailyEarnings}
                  onChange={(e) => setDailyEarnings(e.target.value)}
                  className="pl-11 h-12"
                  required
                />
              </div>
              <p className="text-xs text-gray-500">Your average earnings per working day</p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="weeklyEarnings">Average Weekly Earnings</Label>
              <div className="relative">
                <IndianRupee className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  id="weeklyEarnings"
                  type="number"
                  placeholder="Enter weekly income"
                  value={weeklyEarnings}
                  onChange={(e) => setWeeklyEarnings(e.target.value)}
                  className="pl-11 h-12"
                  required
                />
              </div>
              <p className="text-xs text-gray-500">Your total earnings in a typical week</p>
            </div>
          </div>

          {/* AI Risk Score */}
          {riskScore > 0 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-gradient-to-br from-blue-50 to-teal-50 border-2 border-blue-200 rounded-2xl p-6"
            >
              <div className="flex items-center gap-2 mb-4">
                <Brain className="w-6 h-6 text-blue-600" />
                <h3 className="font-bold text-gray-900">AI Risk Assessment</h3>
              </div>

              <div className="space-y-4">
                {/* Risk Score */}
                <div className="bg-white rounded-xl p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-600">Risk Score</span>
                    <span className={`text-2xl font-bold ${getRiskColor(riskScore)}`}>
                      {riskScore}/100
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-blue-600 to-teal-500 h-2 rounded-full transition-all"
                      style={{ width: `${riskScore}%` }}
                    />
                  </div>
                  <p className={`text-xs mt-2 ${getRiskColor(riskScore)} font-medium`}>
                    {getRiskLabel(riskScore)}
                  </p>
                </div>

                {/* Suggested Premium */}
                <div className="bg-white rounded-xl p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Suggested Weekly Premium</p>
                      <p className="text-xs text-gray-500">Based on your income pattern</p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-blue-600">₹{suggestedPremium}</p>
                      <p className="text-xs text-gray-500">/week</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Info Box */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
            <div className="flex items-start gap-3">
              <TrendingUp className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
              <p className="text-xs text-blue-800">
                Our AI analyzes your income pattern, weather data, and historical claims to calculate personalized coverage and premium.
              </p>
            </div>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full h-12 bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600"
            disabled={!dailyEarnings || !weeklyEarnings}
          >
            Continue to Plans
          </Button>
        </motion.form>
      </div>
    </div>
  );
}
