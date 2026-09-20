import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ArrowLink } from "@/components/brand";
import { ClarityLines, Eyebrow, SectionNumber } from "@/components/editorial";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Annuitee — Your money deserves better thinking" },
      { name: "description", content: "Annuitee turns the facts of your financial life into a clear investment strategy." },
      { property: "og:title", content: "Annuitee — Your money deserves better thinking" },
      { property: "og:description", content: "Tell us about your money. Get a plan built around your life." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border">
        <div className="site-container grid min-h-[calc(100vh-4.5rem)] items-center gap-12 py-16 lg:grid-cols-[1.25fr_0.75fr] lg:py-20">
          <div className="relative z-10">
            <Eyebrow>Your money deserves better thinking.</Eyebrow>
            <h1 className="mt-8 max-w-5xl font-editorial text-hero leading-[0.94] text-balance">Knowing what to do with your money <em className="text-blue">shouldn’t be this hard.</em></h1>
            <p className="mt-8 max-w-xl text-lg leading-8 text-muted-foreground">Income. Goals. Risk. Investments. Liabilities. Annuitee brings the pieces together and tells you what to do next.</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button asChild variant="brand" size="lg"><a href="#plan-preview">Build My Plan <ArrowRight /></a></Button>
              <Button asChild variant="editorial" size="lg"><a href="#how-it-works">See how it works <ArrowDown /></a></Button>
            </div>
          </div>
          <div className="relative min-h-72 self-stretch lg:min-h-[36rem]">
            <ClarityLines className="absolute inset-0" />
            <p className="absolute bottom-8 right-0 max-w-52 border-t border-copper pt-4 text-sm leading-6 text-muted-foreground">Many facts. One considered direction.</p>
          </div>
        </div>
      </section>

      <section className="site-container py-section">
        <div className="grid gap-16 lg:grid-cols-[0.55fr_1.45fr]">
          <div><SectionNumber>01 / THE PROBLEM</SectionNumber></div>
          <div>
            <h2 className="font-editorial text-display leading-[1.02] text-balance">Most people don’t have a money problem. <span className="text-blue">They have a decision problem.</span></h2>
            <div className="mt-14 grid gap-10 border-t border-border pt-8 sm:grid-cols-2">
              <p className="text-lg leading-8 text-muted-foreground">There are thousands of ways to invest. Mutual funds. Stocks. Bonds. Gold. Fixed income. ETFs. Insurance. Real estate.</p>
              <p className="text-lg leading-8 text-foreground">And thousands of opinions. But very little tells you: given <em className="font-editorial text-2xl">your</em> life, income, goals and risk—this is what you should do.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ink text-porcelain">
        <div className="site-container py-section">
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <SectionNumber>02 / THE SHIFT</SectionNumber>
              <h2 className="mt-8 font-editorial text-display leading-none">Less noise.<br /><span className="text-copper">More direction.</span></h2>
              <p className="mt-8 max-w-md text-lg leading-8 text-periwinkle">Annuitee starts with you—not with an investment product.</p>
            </div>
            <div className="flow-list">
              {['Your income', 'Your goals', 'Your age', 'Your liabilities', 'Your existing investments', 'Your risk tolerance'].map((item, index) => <div key={item}><span>0{index + 1}</span>{item}</div>)}
              <div className="flow-result"><span>→</span>Your financial plan</div>
            </div>
          </div>
        </div>
      </section>

      <section id="plan-preview" className="scroll-mt-24 bg-soft">
        <div className="site-container grid gap-14 py-section lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <SectionNumber>03 / THE PRODUCT</SectionNumber>
            <h2 className="mt-8 font-editorial text-display leading-[1.02]">Tell us where you are. <span className="text-blue">We’ll help you decide where to go.</span></h2>
            <p className="mt-7 max-w-md leading-7 text-muted-foreground">A plan built around your whole financial picture—not a product someone wants to sell you.</p>
          </div>
          <div className="plan-sheet">
            <div className="flex items-start justify-between border-b border-border pb-6">
              <div><p className="eyebrow">Your monthly plan</p><p className="mt-3 text-sm text-muted-foreground">September · illustrative preview</p></div>
              <span className="plan-mark">A</span>
            </div>
            <div className="py-8"><p className="text-sm text-muted-foreground">Invest this month</p><p className="mt-2 font-editorial text-6xl sm:text-7xl">₹35,000</p></div>
            {[['Equity','₹21,000','60%'],['Debt','₹9,000','26%'],['Gold','₹5,000','14%']].map(([name,value,percent]) => <div key={name} className="allocation-row"><span>{name}</span><span className="text-muted-foreground">{percent}</span><strong>{value}</strong></div>)}
            <p className="mt-8 border-t border-border pt-5 text-xs leading-5 text-muted-foreground">Illustrative placeholder values only. Not financial advice or a recommendation. A future plan would reflect your stated goals, risk profile, investments and financial position.</p>
          </div>
        </div>
      </section>

      <section className="site-container py-section">
        <p className="eyebrow">The Annuitee difference</p>
        <div className="mt-8 grid gap-12 lg:grid-cols-2">
          <h2 className="font-editorial text-display leading-[1.02]">Financial advice shouldn’t leave you with <span className="text-blue">more questions.</span></h2>
          <div className="difference-copy"><p className="text-muted-foreground line-through decoration-copper">Here are 17 things you could consider.</p><p>Do this.</p></div>
        </div>
        <div className="decision-line mt-20">
          {['Understand','Think','Decide','Act'].map((item) => <div key={item} className={item === 'Decide' ? 'is-decision' : ''}><span>{item}</span></div>)}
        </div>
      </section>

      <section id="how-it-works" className="scroll-mt-24 border-y border-border">
        <div className="site-container py-section">
          <div className="flex items-end justify-between gap-8"><div><Eyebrow>How it works</Eyebrow><h2 className="mt-7 font-editorial text-display">From your life to your next move.</h2></div></div>
          <div className="steps-grid mt-16">
            {['Tell us about you.','Tell us what you’re trying to achieve.','We build your strategy.','Know what to do next.'].map((item,index) => <div key={item}><SectionNumber>0{index + 1}</SectionNumber><p>{item}</p></div>)}
          </div>
        </div>
      </section>

      <section className="site-container grid gap-16 py-section lg:grid-cols-2 lg:items-end">
        <div><Eyebrow>Built to evolve</Eyebrow><h2 className="mt-8 max-w-2xl font-editorial text-display leading-[1.02]">Your life changes. <span className="text-blue">Your money should change with it.</span></h2></div>
        <p className="max-w-md text-lg leading-8 text-muted-foreground">Your financial plan shouldn’t be a one-time decision. Annuitee is being imagined as an ongoing service that keeps thinking alongside you.</p>
      </section>

      <section className="bg-blue text-porcelain">
        <div className="site-container py-section">
          <Eyebrow inverse>Our vision</Eyebrow>
          <h2 className="mt-8 max-w-5xl font-editorial text-display-lg leading-[0.98]">We believe money should create clarity, not anxiety.</h2>
          <p className="mt-10 max-w-xl text-lg leading-8 text-periwinkle">Financial products have become easier to access. Financial decisions haven’t. Annuitee exists to close that gap.</p>
          <div className="mt-10"><ArrowLink to="/vision">Read our vision</ArrowLink></div>
        </div>
      </section>

      <section className="site-container py-section text-center">
        <p className="eyebrow">Start with where you are.</p>
        <h2 className="mx-auto mt-8 max-w-5xl font-editorial text-display-lg leading-[0.96]">Your money deserves <span className="text-copper">better thinking.</span></h2>
        <Button asChild variant="brand" size="lg" className="mt-10"><a href="#plan-preview">Build My Plan <ArrowRight /></a></Button>
      </section>
    </>
  );
}
