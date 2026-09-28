export const PROJECT_META = [
  {
    id: 1,
    slug: "ai-conversation-prototype",
    title: "AI Conversation Prototype",
    category: "Client Project / AI Prototype",
    color: "bg-blue-500",
    img: "",
  },
  {
    id: 2,
    slug: "inquiry-workflow-automation",
    title: "Inquiry Workflow Automation",
    category: "Own Project / Automation",
    color: "bg-blue-500",
    img: "",
  },
  {
    id: 3,
    slug: "ai-journal-prototype",
    title: "AI Journal Prototype",
    category: "Own Project / AI App",
    color: "bg-blue-500",
    img: "",
  },
  {
    id: 4,
    slug: "app-management-pwa",
    title: "App Management PWA",
    category: "Own Project / Web App",
    color: "bg-blue-500",
    img: "",
  },
];  

export const PROJECT_META_BY_SLUG = PROJECT_META.reduce((accumulator, item) => {
  accumulator[item.slug] = item;
  return accumulator;
}, {});
