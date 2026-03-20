import { useState } from "react";
import { useNavigate } from "react-router";
import { ChevronLeft, Smartphone, CreditCard, Wallet, Check, Shield } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { motion } from "motion/react";
import logoImage from "figma:asset/73dac9f10cfea7ee55ffe158646a98a51236caef.png";

const paymentMethods = [
  { id: "upi", name: "UPI", icon: Smartphone, description: "PhonePe, Google Pay, Paytm" },
  { id: "card", name: "Card", icon: CreditCard, description: "Credit or Debit Card" },
  { id: "wallet", name: "Wallet", icon: Wallet, description: "Paytm, PhonePe Wallet" },
];

export default function PaymentScreen() {
  const navigate = useNavigate();
  const [selectedMethod, setSelectedMethod] = useState("upi");
  const [upiId, setUpiId] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [processing, setProcessing] = useState(false);

  const planPrice = 50; // Standard plan
  const planName = "Standard Plan";

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    setProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setProcessing(false);
      navigate("/dashboard");
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-teal-500 pt-12 pb-8 px-6 rounded-b-[2rem] shadow-lg">
        <button onClick={() => navigate("/plans")} className="mb-4 text-white">
          <ChevronLeft className="w-6 h-6" />
        </button>
        <div className="flex justify-center mb-2">
          <img src={logoImage} alt="ShieldPay" className="h-12 w-auto" />
        </div>
        <h1 className="text-2xl font-bold text-white text-center mt-2">Payment</h1>
        <p className="text-white/90 text-sm text-center">Secure your coverage now</p>
      </div>

      <div className="px-6 py-6 space-y-6">
        {/* Plan Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-br from-blue-500 to-teal-500 rounded-2xl p-6 text-white shadow-lg"
        >
          <div className="flex items-center gap-3 mb-4">
            <Shield className="w-8 h-8" />
            <div>
              <p className="text-sm opacity-90">You're purchasing</p>
              <p className="text-xl font-bold">{planName}</p>
            </div>
          </div>
          <div className="flex items-baseline justify-between border-t border-white/20 pt-4">
            <span className="text-white/90">Weekly Premium</span>
            <div className="flex items-baseline gap-1">
              <span className="text-4xl font-bold">₹{planPrice}</span>
              <span className="text-sm opacity-80">/week</span>
            </div>
          </div>
        </motion.div>

        {/* Payment Methods */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-2xl shadow-lg p-6"
        >
          <h2 className="font-bold text-gray-900 mb-4">Select Payment Method</h2>
          
          <div className="space-y-3 mb-6">
            {paymentMethods.map((method) => {
              const Icon = method.icon;
              return (
                <button
                  key={method.id}
                  type="button"
                  onClick={() => setSelectedMethod(method.id)}
                  className={`w-full flex items-center justify-between p-4 rounded-xl border-2 transition-all ${
                    selectedMethod === method.id
                      ? "border-blue-500 bg-blue-50"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                      selectedMethod === method.id ? "bg-blue-500" : "bg-gray-100"
                    }`}>
                      <Icon className={`w-6 h-6 ${
                        selectedMethod === method.id ? "text-white" : "text-gray-600"
                      }`} />
                    </div>
                    <div className="text-left">
                      <p className="font-semibold text-gray-900">{method.name}</p>
                      <p className="text-xs text-gray-500">{method.description}</p>
                    </div>
                  </div>
                  {selectedMethod === method.id && (
                    <Check className="w-5 h-5 text-blue-600" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Payment Form */}
          <form onSubmit={handlePayment} className="space-y-4">
            {selectedMethod === "upi" && (
              <div className="space-y-2">
                <Label htmlFor="upiId">UPI ID</Label>
                <Input
                  id="upiId"
                  type="text"
                  placeholder="yourname@paytm"
                  value={upiId}
                  onChange={(e) => setUpiId(e.target.value)}
                  className="h-12"
                  required
                />
                <p className="text-xs text-gray-500">Enter your UPI ID to complete payment</p>
              </div>
            )}

            {selectedMethod === "card" && (
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="cardNumber">Card Number</Label>
                  <Input
                    id="cardNumber"
                    type="text"
                    placeholder="1234 5678 9012 3456"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                    className="h-12"
                    maxLength={19}
                    required
                  />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-2">
                    <Label htmlFor="expiry">Expiry Date</Label>
                    <Input
                      id="expiry"
                      type="text"
                      placeholder="MM/YY"
                      className="h-12"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cvv">CVV</Label>
                    <Input
                      id="cvv"
                      type="text"
                      placeholder="123"
                      className="h-12"
                      maxLength={3}
                      required
                    />
                  </div>
                </div>
              </div>
            )}

            {selectedMethod === "wallet" && (
              <div className="space-y-2">
                <Label htmlFor="walletPhone">Mobile Number</Label>
                <Input
                  id="walletPhone"
                  type="tel"
                  placeholder="Enter mobile number"
                  className="h-12"
                  required
                />
                <p className="text-xs text-gray-500">Linked with Paytm or PhonePe wallet</p>
              </div>
            )}

            {/* Payment Info */}
            <div className="bg-green-50 border border-green-200 rounded-xl p-4">
              <div className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-green-800 mb-1">Auto-renewal enabled</p>
                  <p className="text-xs text-green-700">
                    Your coverage will auto-renew weekly. Cancel anytime from settings.
                  </p>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full h-14 bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 text-lg font-semibold"
              disabled={processing}
            >
              {processing ? (
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Processing...
                </div>
              ) : (
                `Pay ₹${planPrice} Now`
              )}
            </Button>
          </form>
        </motion.div>

        {/* Security Note */}
        <div className="bg-gray-50 rounded-xl p-4">
          <p className="text-xs text-gray-600 text-center">
            🔒 All transactions are secured with 256-bit encryption
          </p>
        </div>
      </div>
    </div>
  );
}
