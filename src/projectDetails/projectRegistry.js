import { lazy } from "react";
import { PROJECT_META_BY_SLUG } from "../data/projectMeta";

const PROJECT_DETAIL_COMPONENTS = {
  "ai-conversation-prototype": lazy(() => import("./AIConversationPrototypeDetail")),
  "inquiry-workflow-automation": lazy(() => import("./InquiryWorkflowAutomationDetail")),
  "ai-journal-prototype": lazy(() => import("./AIJournalPrototypeDetail")),
  "app-management-pwa": lazy(() => import("./AppManagementPWADetail")),
};

export function getProjectRouteConfig(slug) {
  const metadata = PROJECT_META_BY_SLUG[slug];
  if (!metadata) return null;

  return {
    ...metadata,
    Component: PROJECT_DETAIL_COMPONENTS[slug],
  };
}
