import ProjectCaseLayout from "../components/projects/ProjectCaseLayout";

export const project = {
  title: "Inquiry Workflow Automation",
  category: "Own Project / Automation",
  heroImg: "",
  tagline:
    "問い合わせや申込の対応漏れを防ぐため、メール受信から記録・通知までを自動化した業務フロー。",
  year: "2026",
  stack: [
    "Make",
    "Gmail",
    "Google Sheets",
    "Slack",
    "Webhook",
  ],
  features: [
    "Gmailで受信した問い合わせ情報を自動で取得。",
    "問い合わせ内容をGoogle Sheetsへ記録し、対応状況を一覧化。",
    "Slackへ通知を送り、対応漏れを防ぐ運用フローを構築。",
    "Webhookを使って複数サービス間のデータ連携を実装。",
    "業務内容に応じて通知先や記録項目を調整できる構成に整理。",
  ],
  impact: [
    "問い合わせ確認を手作業で行う負担を減らし、見落としリスクを低減。",
    "問い合わせ情報と対応状況を一か所で確認できるようにした。",
    "小規模な業務でも導入しやすい、シンプルな自動化構成として設計。",
  ],
  links: {},
};

export default function InquiryWorkflowAutomationDetail({ onClose, mode }) {
  return (
    <ProjectCaseLayout
      project={project}
      onClose={onClose}
      closeLabel={mode === "modal" ? "Close" : "Back to Home"}
      mode={mode}
    />
  );
}