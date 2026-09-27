import ProjectCaseLayout from "../components/projects/ProjectCaseLayout";

export const project = {
  title: "AI Conversation Prototype",
  category: "Client Project / AI Prototype",
  heroImg: "",
  tagline:
    "会話を通じた継続的なユーザー体験を検証するため、ルールベースの技術検討からAI API連携まで段階的に実装したWebプロトタイプ。",
  year: "2026",
  stack: [
    "HTML / CSS / JavaScript",
    "OpenAI API",
    "Cloudflare",
    "Netlify",
    "Google Sheets",
    "LocalStorage",
  ],
  features: [
    "ルールベース、AI API、ハイブリッド方式を比較しながら会話体験の構成を検討。",
    "ユーザーが選択した状態に応じて会話内容や挙動を切り替える仕組みを実装。",
    "AI APIを利用した応答生成と、利用回数・上限管理の仕組みを実装。",
    "匿名ID、行動ログ、利用状況を記録できる構成を設計。",
    "設定値やプロンプトを分離し、依頼者側でも調整しやすい構成に整理。",
  ],
  impact: [
    "アイデア段階だった会話体験を、実際に操作して検証できるWebプロトタイプとして具体化。",
    "ルールベースからAI連携へ段階的に発展できる構成にすることで、検証コストを抑えながら機能を拡張可能にした。",
    "利用状況を記録できるようにし、今後の改善判断に使えるデータ取得の土台を整備。",
  ],
  links: {},
};

export default function AIConversationPrototypeDetail({ onClose, mode }) {
  return (
    <ProjectCaseLayout
      project={project}
      onClose={onClose}
      closeLabel={mode === "modal" ? "Close" : "Back to Home"}
      mode={mode}
    />
  );
}