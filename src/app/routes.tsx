import { createBrowserRouter } from "react-router";
import PortfolioHomePage from "./components/PortfolioHomePage";
import { DetailPageLayout } from "./components/DetailPageLayout";
import { LockedProjectPage } from "./components/LockedProjectPage";
import FishmapSocialAppForFishers from "../imports/FishmapSocialAppForFishers";
import SupershipLogisticsPlatform from "../imports/SupershipLogisticsPlatform";
import AccionaDesignSystem from "../imports/AccionaDesignSystem";
import WinXMembership from "../imports/WinXMembership";
import UniVini from "../imports/UniVini";
import Signify from "../imports/Signify";
import { ACCIONA_ENABLED, ACCIONA_SECTIONS, CASE_STUDY_SECTIONS, SUPERSHIP_ENABLED, WINX_ENABLED } from "./config/site";

function FishmapPage() {
  return (
    <DetailPageLayout navSections={CASE_STUDY_SECTIONS}>
      <FishmapSocialAppForFishers />
    </DetailPageLayout>
  );
}

function SupershipPage() {
  if (!SUPERSHIP_ENABLED) {
    return (
      <LockedProjectPage
        title="Supership"
        category="Logistics platform"
        description="This project is temporarily hidden. It will be available again later."
      />
    );
  }

  return (
    <DetailPageLayout navSections={CASE_STUDY_SECTIONS}>
      <SupershipLogisticsPlatform />
    </DetailPageLayout>
  );
}

function AccionaPage() {
  if (!ACCIONA_ENABLED) {
    return (
      <LockedProjectPage
        title="Acciona"
        category="Design system"
        description="This project is temporarily hidden. It will be available again later."
      />
    );
  }

  return (
    <DetailPageLayout navSections={ACCIONA_SECTIONS}>
      <AccionaDesignSystem />
    </DetailPageLayout>
  );
}

function WinXPage() {
  if (!WINX_ENABLED) {
    return (
      <LockedProjectPage
        title="WinX Membership"
        category="Loyalty app"
        description="This project is temporarily hidden. It will be available again later."
      />
    );
  }

  return (
    <DetailPageLayout navSections={CASE_STUDY_SECTIONS}>
      <WinXMembership />
    </DetailPageLayout>
  );
}

function UniViniPage() {
  return (
    <DetailPageLayout navSections={CASE_STUDY_SECTIONS}>
      <UniVini />
    </DetailPageLayout>
  );
}

function SignifyPage() {
  return (
    <DetailPageLayout navSections={CASE_STUDY_SECTIONS}>
      <Signify />
    </DetailPageLayout>
  );
}

export const router = createBrowserRouter([
  { path: "/",               Component: PortfolioHomePage },
  { path: "/work/fishmap",   Component: FishmapPage },
  { path: "/work/supership", Component: SupershipPage },
  { path: "/work/acciona",   Component: AccionaPage },
  { path: "/work/winx",      Component: WinXPage },
  { path: "/work/univini",   Component: UniViniPage },
  { path: "/work/signify",   Component: SignifyPage },
]);
