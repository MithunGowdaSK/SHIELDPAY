import { useNavigate } from "react-router";
import { Shield, CloudRain, TrendingUp, Bell, Wallet, ArrowRight, AlertTriangle, CheckCircle2, Calendar, Package, IndianRupee } from "lucide-react";
import { Button } from "../components/ui/button";
import { Progress } from "../components/ui/progress";
import { motion } from "motion/react";
import logoImage from "figma:asset/73dac9f10cfea7ee55ffe158646a98a51236caef.png";

export default function DashboardScreen() {
  const navigate = useNavigate();

  // Mock earnings data
  const todayEarnings = 300;
  const weeklyEarnings = 1850;
  const avgDailyEarnings = 264;

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-teal-500 pt-12 pb-16 px-6 rounded-b-[2rem] shadow-lg">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <img src={logoImage} alt="ShieldPay" className="h-10 w-auto" />
          </div>
          <button className="w-12 h-12 bg-white/20 backdrop-blur rounded-full flex items-center justify-center">
            <Bell className="w-6 h-6 text-white" />
          </button>
        </div>

        <div className="mb-4">
          <p className="text-white/90 text-sm mb-1">Good Morning</p>
          <h1 className="text-2xl font-bold text-white">Hello Ramesh 👋</h1>
          <p className="text-white/80 text-xs mt-1">📍 Mumbai, Maharashtra</p>
        </div>

        {/* Coverage Card */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="bg-white rounded-2xl p-5 shadow-lg"
        >
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-sm text-gray-600 mb-1">Active Coverage</p>
              <p className="text-3xl font-bold text-gray-900">₹2,000</p>
            </div>
            <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center">
              <Shield className="w-7 h-7 text-green-600" />
            </div>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <CheckCircle2 className="w-4 h-4 text-green-600" />
            <span className="text-green-700 font-medium">Standard Plan Active</span>
          </div>
        </motion.div>
      </div>

      {/* Content */}
      <div className="px-6 -mt-8 space-y-4">
        {/* Earnings Cards */}
        <div className="grid grid-cols-2 gap-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-4 text-white shadow-lg"
          >
            <div className="flex items-center gap-2 mb-2">
              <Calendar className="w-5 h-5 opacity-80" />
              <p className="text-sm opacity-90">Today's Earnings</p>
            </div>
            <p className="text-3xl font-bold mb-1">₹{todayEarnings}</p>
            <button 
              onClick={() => navigate("/orders")}
              className="text-xs opacity-80 hover:opacity-100 underline"
            >
              View orders →
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15 }}
            className="bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl p-4 text-white shadow-lg"
          >
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="w-5 h-5 opacity-80" />
              <p className="text-sm opacity-90">Weekly Earnings</p>
            </div>
            <p className="text-3xl font-bold mb-1">₹{weeklyEarnings}</p>
            <p className="text-xs opacity-80">Avg: ₹{avgDailyEarnings}/day</p>
          </motion.div>
        </div>

        {/* Weather Risk Indicator */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="bg-gradient-to-br from-orange-50 to-yellow-50 border-2 border-orange-200 rounded-2xl p-5 shadow-md"
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
              <AlertTriangle className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-gray-900 mb-1">Weather Alert</h3>
              <p className="text-sm text-gray-700 mb-2">
                Heavy rainfall expected in your area tomorrow
              </p>
              <div className="flex items-center gap-2">
                <CloudRain className="w-4 h-4 text-orange-600" />
                <span className="text-xs font-medium text-orange-700">Risk Level: Medium</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Weekly Premium Status */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-2xl p-5 shadow-md"
        >
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-bold text-gray-900">Weekly Premium</h3>
            <Wallet className="w-5 h-5 text-blue-600" />
          </div>
          <div className="space-y-2 mb-3">
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold text-gray-900">₹50</span>
              <span className="text-sm text-gray-600">/week</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">Next payment</span>
              <span className="font-medium text-gray-900">Mar 18, 2026</span>
            </div>
          </div>
          <Progress value={60} className="h-2" />
          <p className="text-xs text-gray-500 mt-2">4 days remaining in current cycle</p>
        </motion.div>

        {/* Recent Payout */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-2xl p-5 shadow-md"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-gray-900">Recent Payout</h3>
            <TrendingUp className="w-5 h-5 text-green-600" />
          </div>

          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-4 border border-green-200">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-700">Heavy Rainfall Trigger</span>
              <span className="text-xs text-gray-600">Mar 8, 2026</span>
            </div>
            <p className="text-2xl font-bold text-green-700 mb-1">₹800</p>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-xs text-gray-600">Credited to UPI</span>
            </div>
          </div>

          <button
            onClick={() => navigate("/alert")}
            className="w-full mt-3 flex items-center justify-center gap-2 text-sm text-blue-600 font-medium hover:underline"
          >
            View all payouts
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-2 gap-3"
        >
          <button 
            onClick={() => navigate("/security-architecture")}
            className="bg-white rounded-xl p-4 shadow-md border-2 border-gray-100 hover:border-blue-300 transition-colors"
          >
            <Shield className="w-8 h-8 text-blue-600 mb-2" />
            <p className="text-sm font-semibold text-gray-900">Security Info</p>
          </button>
          <button className="bg-white rounded-xl p-4 shadow-md border-2 border-gray-100 hover:border-blue-300 transition-colors">
            <CloudRain className="w-8 h-8 text-blue-600 mb-2" />
            <p className="text-sm font-semibold text-gray-900">Weather Info</p>
          </button>
        </motion.div>

        {/* Demo Alert Button */}
        <Button
          onClick={() => navigate("/alert")}
          className="w-full h-12 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600"
        >
          Simulate Disruption Alert
        </Button>
      </div>
    </div>
  );
}