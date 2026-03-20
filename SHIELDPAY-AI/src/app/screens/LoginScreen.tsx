import { useState } from "react";
import { useNavigate } from "react-router";
import { Phone, User, MapPin } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "../components/ui/input-otp";
import { motion } from "motion/react";
import logoImage from "figma:asset/73dac9f10cfea7ee55ffe158646a98a51236caef.png";

const cities = [
  "Mumbai", "Delhi", "Bangalore", "Hyderabad", "Chennai", "Kolkata", "Pune", "Ahmedabad", "Jaipur", "Lucknow"
];

export default function LoginScreen() {
  const navigate = useNavigate();
  const [step, setStep] = useState<"phone" | "otp" | "details">("phone");
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [name, setName] = useState("");
  const [city, setCity] = useState("");

  const handlePhoneSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep("otp");
  };

  const handleOtpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep("details");
  };

  const handleDetailsSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/platform-verification");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex flex-col">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-teal-500 pt-12 pb-20 px-6 rounded-b-[2rem] shadow-lg">
        <div className="flex justify-center mb-4">
          <img src={logoImage} alt="ShieldPay" className="h-16 w-auto" />
        </div>
      </div>

      {/* Form Container */}
      <div className="flex-1 -mt-10 px-6">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="bg-white rounded-2xl shadow-xl p-6"
        >
          {step === "phone" && (
            <form onSubmit={handlePhoneSubmit} className="space-y-6">
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-2">Welcome Back!</h2>
                <p className="text-gray-600 text-sm">Enter your phone number to continue</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="Enter 10-digit mobile number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="pl-11 h-12"
                    required
                  />
                </div>
              </div>

              <Button type="submit" className="w-full h-12 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600">
                Send OTP
              </Button>

              <p className="text-center text-sm text-gray-500">
                By continuing, you agree to our Terms & Privacy Policy
              </p>
            </form>
          )}

          {step === "otp" && (
            <form onSubmit={handleOtpSubmit} className="space-y-6">
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-2">Verify OTP</h2>
                <p className="text-gray-600 text-sm">
                  Enter the 6-digit code sent to {phone}
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="otp">Enter OTP</Label>
                <div className="flex justify-center">
                  <InputOTP maxLength={6} value={otp} onChange={setOtp}>
                    <InputOTPGroup>
                      <InputOTPSlot index={0} />
                      <InputOTPSlot index={1} />
                      <InputOTPSlot index={2} />
                      <InputOTPSlot index={3} />
                      <InputOTPSlot index={4} />
                      <InputOTPSlot index={5} />
                    </InputOTPGroup>
                  </InputOTP>
                </div>
              </div>

              <Button type="submit" className="w-full h-12 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600">
                Verify OTP
              </Button>

              <button type="button" className="w-full text-center text-sm text-blue-600 hover:underline">
                Resend OTP
              </button>
            </form>
          )}

          {step === "details" && (
            <form onSubmit={handleDetailsSubmit} className="space-y-6">
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-2">Complete Profile</h2>
                <p className="text-gray-600 text-sm">Tell us a bit about yourself</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    id="name"
                    type="text"
                    placeholder="Enter your full name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="pl-11 h-12"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="city">City</Label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 z-10" />
                  <Select value={city} onValueChange={setCity}>
                    <SelectTrigger className="h-12 pl-11">
                      <SelectValue placeholder="Select your city" />
                    </SelectTrigger>
                    <SelectContent>
                      {cities.map((cityName) => (
                        <SelectItem key={cityName} value={cityName.toLowerCase()}>
                          {cityName}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Button
                type="submit"
                className="w-full h-12 bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600"
              >
                Continue to Verification
              </Button>
            </form>
          )}
        </motion.div>
      </div>
    </div>
  );
}