export const PROJECT_META = [
  {
    id: 1,
    slug: "ai-conversation-prototype",
    title: "AI Conversation Prototype",
    category: "Client Project / AI Prototype",
    color: "bg-lime-400",
    img: "",
  },
];  

export const PROJECT_META_BY_SLUG = PROJECT_META.reduce((accumulator, item) => {
  accumulator[item.slug] = item;
  return accumulator;
}, {});
