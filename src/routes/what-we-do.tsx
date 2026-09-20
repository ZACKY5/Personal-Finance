import { createFileRoute } from "@tanstack/react-router";
import { ArrowLink } from "@/components/brand";
import { PageIntro, SectionNumber } from "@/components/editorial";

export const Route = createFileRoute("/what-we-do")({
  head: () => ({ meta: [
    { title: "What We Do — Annuitee" }, { name: "description", content: "Annuitee turns your financial situation into a clear investment strategy." },
    { property: "og:title", content: "Financial thinking, made personal — Annuitee" }, { property: "og:description", content: "From your financial life to a strategy built around it." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: WhatWeDo,
});

function WhatWeDo() {
  const journey = ['Your life','Your financial picture','Your goals','Your risk','Your strategy','Your action'];
  return <>
    <PageIntro eyebrow="What we do" title={<>Financial thinking, <em className="text-blue">made personal.</em></>}>
      <p>Tell us about your money. Annuitee brings the pieces together and turns them into a strategy built around your circumstances.</p>
    </PageIntro>
    <section className="border-y border-border bg-soft"><div className="site-container py-section">
      <SectionNumber>FROM CONTEXT TO ACTION</SectionNumber>
      <div className="journey-list mt-12">{journey.map((item,index) => <div key={item}><span>0{index+1}</span><p>{item}</p>{index < journey.length - 1 && <b>↓</b>}</div>)}</div>
    </div></section>
    <section className="site-container grid gap-14 py-section lg:grid-cols-2">
      <h2 className="font-editorial text-display leading-[1.02]">We don’t start with a fund, a product or a trend. <span className="text-blue">We start with you.</span></h2>
      <div className="space-y-7 text-lg leading-8 text-muted-foreground"><p>Your income matters. So do your responsibilities, time horizon, goals, existing investments and comfort with risk.</p><p>The point is not to give you more information. It is to think through the information that matters, explain the reasoning, and make the next step clearer.</p><ArrowLink to="/">See the product idea</ArrowLink></div>
    </section>
  </>;
}