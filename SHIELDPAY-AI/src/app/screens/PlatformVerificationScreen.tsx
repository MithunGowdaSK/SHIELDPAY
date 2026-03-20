import { useState } from "react";
import { useNavigate } from "react-router";
import { ChevronLeft, Check, Upload } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { motion } from "motion/react";
import logoImage from "figma:asset/73dac9f10cfea7ee55ffe158646a98a51236caef.png";

const platforms = [
  { id: "zomato", name: "Zomato", color: "bg-red-50 border-red-300" },
  { id: "swiggy", name: "Swiggy", color: "bg-orange-50 border-orange-300" },
  { id: "zepto", name: "Zepto", color: "bg-purple-50 border-purple-300" },
  { id: "amazon", name: "Amazon", color: "bg-yellow-50 border-yellow-300" },
  { id: "dunzo", name: "Dunzo", color: "bg-blue-50 border-blue-300" },
];

export default function PlatformVerificationScreen() {
  const navigate = useNavigate();
  const [selectedPlatform, setSelectedPlatform] = useState("");
  const [workerId, setWorkerId] = useState("");
  const [idProof, setIdProof] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setIdProof(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/location-permission");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-teal-500 pt-12 pb-8 px-6 rounded-b-[2rem] shadow-lg">
        <button onClick={() => navigate("/login")} className="mb-4 text-white">
          <ChevronLeft className="w-6 h-6" />
        </button>
        <div className="flex justify-center mb-2">
          <img src={logoImage} alt="ShieldPay" className="h-12 w-auto" />
        </div>
        <h1 className="text-2xl font-bold text-white text-center mt-2">Platform Verification</h1>
        <p className="text-white/90 text-sm text-center">Select your delivery platform</p>
      </div>

      {/* Form */}
      <div className="px-6 py-8">
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-lg p-6 space-y-6"
        >
          {/* Platform Selection */}
          <div className="space-y-3">
            <Label>Select Platform</Label>
            <div className="grid grid-cols-2 gap-3">
              {platforms.map((p) => (
                <button
                  key={p.id}
                  type="button"
                  className={`h-16 border-2 rounded-xl transition-all ${
                    selectedPlatform === p.id
                      ? "border-blue-500 bg-blue-50 shadow-md"
                      : `${p.color} hover:shadow-md`
                  }`}
                  onClick={() => setSelectedPlatform(p.id)}
                >
                  <div className="flex items-center justify-center gap-2">
                    {selectedPlatform === p.id && <Check className="w-5 h-5 text-blue-600" />}
                    <span className="font-medium text-gray-900">{p.name}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Worker ID */}
          <div className="space-y-2">
            <Label htmlFor="workerId">Worker ID</Label>
            <Input
              id="workerId"
              type="text"
              placeholder="Enter your worker ID"
              value={workerId}
              onChange={(e) => setWorkerId(e.target.value)}
              className="h-12"
              required
            />
            <p className="text-xs text-gray-500">Enter your platform worker/partner ID</p>
          </div>

          {/* ID Proof Upload */}
          <div className="space-y-2">
            <Label htmlFor="idProof">Upload ID Proof</Label>
            <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-blue-400 transition-colors">
              <input
                id="idProof"
                type="file"
                accept="image/*,.pdf"
                onChange={handleFileChange}
                className="hidden"
              />
              <label htmlFor="idProof" className="cursor-pointer">
                <Upload className="w-10 h-10 mx-auto mb-2 text-gray-400" />
                {idProof ? (
                  <p className="text-sm text-green-600 font-medium">{idProof.name}</p>
                ) : (
                  <>
                    <p className="text-sm text-gray-600 font-medium">Click to upload</p>
                    <p className="text-xs text-gray-500 mt-1">Upload Aadhaar, PAN, or Driver License</p>
                  </>
                )}
              </label>
            </div>
          </div>

          {/* Info Box */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
            <p className="text-xs text-blue-800">
              <span className="font-semibold">Note:</span> Your data is encrypted and used only for verification purposes. We comply with RBI and IRDAI guidelines.
            </p>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full h-12 bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600"
            disabled={!selectedPlatform || !workerId || !idProof}
          >
            Verify Platform
          </Button>
        </motion.form>
      </div>
    </div>
  );
}
