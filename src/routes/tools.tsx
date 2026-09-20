import { createFileRoute } from "@tanstack/react-router";
import { PageIntro, SectionNumber } from "@/components/editorial";

export const Route = createFileRoute("/tools")({
  head: () => ({ meta: [
    { title: "Tools — Annuitee" }, { name: "description", content: "A future collection of tools for better financial decisions." },
    { property: "og:title", content: "Tools for better financial decisions — Annuitee" }, { property: "og:description", content: "Focused tools designed to turn financial questions into clearer next steps." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}), component: Tools,
});

function Tools() {
  const tools = [['NPV Calculator','Understand the value of future cash flows today.'],['SIP Calculator','See how consistent investing can build over time.'],['Goal Planner','Turn a future goal into a practical monthly path.'],['Retirement Planner','Connect the life you want with the plan it needs.'],['Portfolio Check','See whether your investments still fit your life.'],['Risk Profiler','Understand the level of uncertainty you can truly carry.']];
  return <>
    <PageIntro eyebrow="Tools" title={<>Tools for better <em className="text-blue">financial decisions.</em></>}><p>A focused collection is taking shape. Each tool will answer a real question, clearly and without unnecessary complexity.</p></PageIntro>
    <section className="border-t border-border"><div className="site-container py-section">
      <SectionNumber>FUTURE TOOLKIT</SectionNumber>
      <div className="tools-list mt-12">{tools.map(([name,copy],index) => <article key={name}><span className="tool-number">0{index+1}</span><div><h2>{name}</h2><p>{copy}</p></div><span className="coming-soon">Coming soon</span></article>)}</div>
    </div></section>
  </>;
}