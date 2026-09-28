import ProjectCaseLayout from "../components/projects/ProjectCaseLayout";

export const project = {
  title: "App Management PWA",
  category: "Own Project / Web App",
  heroImg: "",
  tagline:
    "複数のアプリやツール情報を一元管理するため、認証・CRUD・PWA対応まで含めて構築したWebアプリ。",
  year: "2026",
  stack: [
    "JavaScript",
    "Supabase",
    "GitHub",
    "Netlify",
    "PWA",
  ],
  features: [
    "アプリ情報を登録・編集・削除できるCRUD機能を実装。",
    "Supabase Authを使ったユーザー認証を設定。",
    "RLSを使い、ユーザーごとにデータアクセスを制御。",
    "Netlifyへデプロイし、ブラウザから利用できる構成に整理。",
    "PWA対応を行い、スマートフォンでも使いやすい形に調整。",
  ],
  impact: [
    "複数のアプリやツール情報を一か所で管理できるようにした。",
    "認証・データベース・公開まで含む小規模Webアプリの一連の構築を実践。",
    "単なる試作ではなく、継続利用を想定した管理ツールとして形にした。",
  ],
  links: {},
};

export default function AppManagementPWADetail({ onClose, mode }) {
  return (
    <ProjectCaseLayout
      project={project}
      onClose={onClose}
      closeLabel={mode === "modal" ? "Close" : "Back to Home"}
      mode={mode}
    />
  );
}