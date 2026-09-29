export const PROJECT_META = [
  {
    id: 1,
    slug: "ai-conversation-prototype",
    titleJa: "AI会話プロトタイプ",
    titleEn: "AI Conversation Prototype",
    category: "Client Project / AI Prototype",
    color: "bg-blue-500",
    img: "",
  },
  {
    id: 2,
    slug: "inquiry-workflow-automation",
    titleJa: "問い合わせ対応自動化",
    titleEn: "Inquiry Workflow Automation",
    category: "Own Project / Automation",
    color: "bg-blue-500",
    img: "",
  },
  {
    id: 3,
    slug: "ai-journal-prototype",
    titleJa: "AI日記アプリ試作",
    titleEn: "AI Journal Prototype",
    category: "Own Project / AI App",
    color: "bg-blue-500",
    img: "",
  },
  {
    id: 4,
    slug: "app-management-pwa",
    titleJa: "アプリ管理PWA",
    titleEn: "App Management PWA",
    category: "Own Project / Web App",
    color: "bg-blue-500",
    img: "",
  },
];  

export const PROJECT_META_BY_SLUG = PROJECT_META.reduce((accumulator, item) => {
  accumulator[item.slug] = item;
  return accumulator;
}, {});
