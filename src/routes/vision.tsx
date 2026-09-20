import { createFileRoute } from "@tanstack/react-router";
import { PageIntro, SectionNumber } from "@/components/editorial";

export const Route = createFileRoute("/vision")({
  head: () => ({ meta: [
    { title: "Our Vision — Annuitee" }, { name: "description", content: "Everyone should have access to good financial thinking." },
    { property: "og:title", content: "Our Vision — Annuitee" }, { property: "og:description", content: "Good financial thinking should make life clearer, not more confusing." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}), component: Vision,
});

function Vision() {
  const beliefs = [['Money is personal.','Advice should be personal too.'],['Complexity is not a virtue.','Good thinking can be sophisticated and still feel clear.'],['More information is not always better.','A useful answer should reduce uncertainty, not move it around.'],['Access should not depend on wealth.','Everyone deserves a considered way to think about their financial future.']];
  return <>
    <PageIntro eyebrow="Our vision" title={<>Everyone should have access to <em className="text-blue">good financial thinking.</em></>}><p>Not more noise. Not a longer list of choices. A clearer way to decide what your money should do next.</p></PageIntro>
    <section className="bg-ink text-porcelain"><div className="site-container py-section">
      <SectionNumber>WHAT WE BELIEVE</SectionNumber>
      <div className="manifesto-list mt-12">{beliefs.map(([title,copy],index) => <article key={title}><span>0{index+1}</span><h2>{title}</h2><p>{copy}</p></article>)}</div>
    </div></section>
    <section className="site-container py-section"><p className="max-w-4xl font-editorial text-display-lg leading-[0.98]">Your money deserves <span className="text-copper">better thinking.</span></p></section>
  </>;
}