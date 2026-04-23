export const SITE_NAME = "Sea.V";

export const CONTACT_EMAIL = "lnson1551@gmail.com";
export const MAILTO_HREF = `mailto:${CONTACT_EMAIL}`;

export const LINKEDIN_URL = "https://www.linkedin.com/in/seav/";
export const LINKEDIN_LABEL = "linkedin.com/in/seav/";

export const HOME_NAV_ITEMS = ["Home", "Works", "About me"] as const;
export const LOCKED_PROJECT_NAV_ITEMS = ["Overview", "Details", "NDA"] as const;

export const CASE_STUDY_SECTIONS = [
  { label: "Context", target: "ContextSection" },
  { label: "Results", target: "ImpactSection" },
  { label: "Learned", target: "ReflectionSection" },
] as const;

export const ACCIONA_SECTIONS = [
  { label: "Context", target: "ContextSection" },
  { label: "System", target: "DesignPlanSection" },
  { label: "Results", target: "ImpactSection" },
] as const;
