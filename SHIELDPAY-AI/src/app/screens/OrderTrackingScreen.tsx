import { useState } from "react";
import { useNavigate } from "react-router";
import { ChevronLeft, Plus, Package, TrendingUp, Calendar, IndianRupee } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { motion } from "motion/react";
import logoImage from "figma:asset/73dac9f10cfea7ee55ffe158646a98a51236caef.png";

interface Order {
  id: string;
  orderId: string;
  amount: number;
  platform: string;
  timestamp: Date;
}

export default function OrderTrackingScreen() {
  const navigate = useNavigate();
  const [orderId, setOrderId] = useState("");
  const [orderAmount, setOrderAmount] = useState("");
  const [orders, setOrders] = useState<Order[]>([
    { id: "1", orderId: "ZOM-12345", amount: 85, platform: "Zomato", timestamp: new Date("2026-03-17T10:30:00") },
    { id: "2", orderId: "ZOM-12346", amount: 120, platform: "Zomato", timestamp: new Date("2026-03-17T12:15:00") },
    { id: "3", orderId: "ZOM-12347", amount: 95, platform: "Zomato", timestamp: new Date("2026-03-17T14:45:00") },
    { id: "4", orderId: "ZOM-12340", amount: 110, platform: "Zomato", timestamp: new Date("2026-03-16T09:20:00") },
    { id: "5", orderId: "ZOM-12341", amount: 75, platform: "Zomato", timestamp: new Date("2026-03-16T11:00:00") },
    { id: "6", orderId: "ZOM-12342", amount: 130, platform: "Zomato", timestamp: new Date("2026-03-16T15:30:00") },
  ]);

  const handleAddOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (orderId && orderAmount) {
      const newOrder: Order = {
        id: Date.now().toString(),
        orderId: orderId,
        amount: parseFloat(orderAmount),
        platform: "Zomato",
        timestamp: new Date(),
      };
      setOrders([newOrder, ...orders]);
      setOrderId("");
      setOrderAmount("");
    }
  };

  // Calculate today's earnings
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const todayOrders = orders.filter(order => {
    const orderDate = new Date(order.timestamp);
    orderDate.setHours(0, 0, 0, 0);
    return orderDate.getTime() === today.getTime();
  });
  const todayEarnings = todayOrders.reduce((sum, order) => sum + order.amount, 0);

  // Calculate weekly earnings (last 7 days)
  const weekAgo = new Date();
  weekAgo.setDate(weekAgo.getDate() - 7);
  const weeklyOrders = orders.filter(order => new Date(order.timestamp) >= weekAgo);
  const weeklyEarnings = weeklyOrders.reduce((sum, order) => sum + order.amount, 0);

  // Group orders by date
  const groupedOrders = orders.reduce((groups, order) => {
    const date = new Date(order.timestamp).toLocaleDateString('en-IN', { 
      day: 'numeric', 
      month: 'short',
      year: 'numeric'
    });
    if (!groups[date]) {
      groups[date] = [];
    }
    groups[date].push(order);
    return groups;
  }, {} as Record<string, Order[]>);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-teal-500 pt-12 pb-8 px-6 rounded-b-[2rem] shadow-lg">
        <button onClick={() => navigate("/dashboard")} className="mb-4 text-white">
          <ChevronLeft className="w-6 h-6" />
        </button>
        <div className="flex justify-center mb-2">
          <img src={logoImage} alt="ShieldPay" className="h-12 w-auto" />
        </div>
        <h1 className="text-2xl font-bold text-white text-center mt-2">Order Tracking</h1>
        <p className="text-white/90 text-sm text-center">Track your deliveries & earnings</p>
      </div>

      <div className="px-6 py-6 space-y-6">
        {/* Earnings Summary */}
        <div className="grid grid-cols-2 gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-5 text-white shadow-lg"
          >
            <div className="flex items-center gap-2 mb-2">
              <Calendar className="w-5 h-5 opacity-80" />
              <p className="text-sm opacity-90">Today</p>
            </div>
            <p className="text-3xl font-bold">₹{todayEarnings}</p>
            <p className="text-xs opacity-80 mt-1">{todayOrders.length} orders</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl p-5 text-white shadow-lg"
          >
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="w-5 h-5 opacity-80" />
              <p className="text-sm opacity-90">This Week</p>
            </div>
            <p className="text-3xl font-bold">₹{weeklyEarnings}</p>
            <p className="text-xs opacity-80 mt-1">{weeklyOrders.length} orders</p>
          </motion.div>
        </div>

        {/* Add Order Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-2xl shadow-lg p-6"
        >
          <div className="flex items-center gap-2 mb-4">
            <Plus className="w-5 h-5 text-blue-600" />
            <h2 className="font-bold text-gray-900">Add New Order</h2>
          </div>

          <form onSubmit={handleAddOrder} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="orderId">Order ID</Label>
              <Input
                id="orderId"
                type="text"
                placeholder="e.g., ZOM-12345"
                value={orderId}
                onChange={(e) => setOrderId(e.target.value)}
                className="h-12"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="orderAmount">Order Amount</Label>
              <div className="relative">
                <IndianRupee className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  id="orderAmount"
                  type="number"
                  step="0.01"
                  placeholder="Enter earning from this order"
                  value={orderAmount}
                  onChange={(e) => setOrderAmount(e.target.value)}
                  className="pl-11 h-12"
                  required
                />
              </div>
            </div>

            <Button
              type="submit"
              className="w-full h-12 bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600"
            >
              <Plus className="w-5 h-5 mr-2" />
              Add Order
            </Button>
          </form>
        </motion.div>

        {/* Order History */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-2xl shadow-lg p-6"
        >
          <div className="flex items-center gap-2 mb-4">
            <Package className="w-5 h-5 text-blue-600" />
            <h2 className="font-bold text-gray-900">Order History</h2>
          </div>

          <div className="space-y-4">
            {Object.entries(groupedOrders).map(([date, dateOrders]) => (
              <div key={date}>
                <p className="text-xs font-semibold text-gray-500 mb-2">{date}</p>
                <div className="space-y-2">
                  {dateOrders.map((order) => (
                    <div
                      key={order.id}
                      className="flex items-center justify-between p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                          <Package className="w-5 h-5 text-blue-600" />
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">{order.orderId}</p>
                          <p className="text-xs text-gray-500">
                            {new Date(order.timestamp).toLocaleTimeString('en-IN', {
                              hour: '2-digit',
                              minute: '2-digit'
                            })}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-green-600">+₹{order.amount}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
