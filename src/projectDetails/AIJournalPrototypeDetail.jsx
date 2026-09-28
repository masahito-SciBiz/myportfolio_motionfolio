import ProjectCaseLayout from "../components/projects/ProjectCaseLayout";

export const project = {
  title: "AI Journal Prototype",
  category: "Own Project / AI App",
  heroImg: "",
  tagline:
    "日々の出来事や気づきを記録し、AIを使って振り返りや整理につなげるための小規模なアプリプロトタイプ。",
  year: "2026",
  stack: [
    "FlutterFlow",
    "Supabase",
    "Firestore",
    "OpenAI API",
  ],
  features: [
    "日記やメモを入力・保存できる基本画面を構築。",
    "入力内容をAIへ渡し、振り返りや整理を支援する処理を試作。",
    "ユーザーごとの記録を保存できるデータ構成を検討。",
    "FlutterFlowを使って画面と処理を短期間で組み立て。",
    "AI連携を含む小規模アプリの実装フローを検証。",
  ],
  impact: [
    "アイデア段階だったサービスを、実際に操作できるアプリとして具体化。",
    "AIを単体で使うのではなく、記録・保存・振り返りの流れに組み込む方法を検証。",
    "小さく作って試し、必要な機能を見極めるプロトタイプとして活用。",
  ],
  links: {},
};

export default function AIJournalPrototypeDetail({ onClose, mode }) {
  return (
    <ProjectCaseLayout
      project={project}
      onClose={onClose}
      closeLabel={mode === "modal" ? "Close" : "Back to Home"}
      mode={mode}
    />
  );
}