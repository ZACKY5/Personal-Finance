import { createFileRoute } from "@tanstack/react-router";
import { PageIntro, SectionNumber } from "@/components/editorial";

export const Route = createFileRoute("/people")({
  head: () => ({ meta: [
    { title: "People — Annuitee" }, { name: "description", content: "Annuitee is being built by people who think money should make more sense." },
    { property: "og:title", content: "People — Annuitee" }, { property: "og:description", content: "Built by people who think money should make more sense." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}), component: People,
});

function People() {
  const roles = ['Founder','Product','Investment / Finance','Technology'];
  return <>
    <PageIntro eyebrow="People" title={<>Built by people who think money should <em className="text-blue">make more sense.</em></>}><p>The right financial product needs different kinds of judgment at the same table. This page will grow as the team does.</p></PageIntro>
    <section className="border-t border-border bg-soft"><div className="site-container py-section">
      <SectionNumber>THE TEAM, IN FORMATION</SectionNumber>
      <div className="people-grid mt-12">{roles.map((role,index) => <article key={role}><div className={`portrait-placeholder portrait-${index+1}`} aria-label={`${role} portrait placeholder`}><span>Portrait forthcoming</span></div><h2>{role}</h2><p>Details to be added.</p></article>)}</div>
    </div></section>
  </>;
}