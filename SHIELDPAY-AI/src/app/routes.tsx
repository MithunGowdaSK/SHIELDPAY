import { createBrowserRouter } from "react-router";
import RootLayout from "./layouts/RootLayout";
import SplashScreen from "./screens/SplashScreen";
import LoginScreen from "./screens/LoginScreen";
import PlatformVerificationScreen from "./screens/PlatformVerificationScreen";
import LocationPermissionScreen from "./screens/LocationPermissionScreen";
import IncomeSetupScreen from "./screens/IncomeSetupScreen";
import PlanSelectionScreen from "./screens/PlanSelectionScreen";
import PaymentScreen from "./screens/PaymentScreen";
import DashboardScreen from "./screens/DashboardScreen";
import OrderTrackingScreen from "./screens/OrderTrackingScreen";
import DisruptionAlertScreen from "./screens/DisruptionAlertScreen";
import AntiSpoofingScreen from "./screens/AntiSpoofingScreen";
import FraudResultScreen from "./screens/FraudResultScreen";
import AIRiskScoreScreen from "./screens/AIRiskScoreScreen";
import FraudClusterScreen from "./screens/FraudClusterScreen";
import PayoutApprovalScreen from "./screens/PayoutApprovalScreen";
import ClaimHoldScreen from "./screens/ClaimHoldScreen";
import SecurityArchitectureScreen from "./screens/SecurityArchitectureScreen";
import PayoutConfirmationScreen from "./screens/PayoutConfirmationScreen";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: SplashScreen,
      },
      {
        path: "login",
        Component: LoginScreen,
      },
      {
        path: "platform-verification",
        Component: PlatformVerificationScreen,
      },
      {
        path: "location-permission",
        Component: LocationPermissionScreen,
      },
      {
        path: "income-setup",
        Component: IncomeSetupScreen,
      },
      {
        path: "plans",
        Component: PlanSelectionScreen,
      },
      {
        path: "payment",
        Component: PaymentScreen,
      },
      {
        path: "dashboard",
        Component: DashboardScreen,
      },
      {
        path: "orders",
        Component: OrderTrackingScreen,
      },
      {
        path: "alert",
        Component: DisruptionAlertScreen,
      },
      {
        path: "anti-spoofing",
        Component: AntiSpoofingScreen,
      },
      {
        path: "fraud-result",
        Component: FraudResultScreen,
      },
      {
        path: "ai-risk-score",
        Component: AIRiskScoreScreen,
      },
      {
        path: "fraud-cluster",
        Component: FraudClusterScreen,
      },
      {
        path: "payout-approval",
        Component: PayoutApprovalScreen,
      },
      {
        path: "claim-hold",
        Component: ClaimHoldScreen,
      },
      {
        path: "security-architecture",
        Component: SecurityArchitectureScreen,
      },
      {
        path: "payout",
        Component: PayoutConfirmationScreen,
      },
    ],
  },
]);