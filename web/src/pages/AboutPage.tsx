import { useState } from 'react'
import { FaqAccordionItem } from '../components/ui/FaqAccordionItem'

const FAQ_IDS = ['faq-1', 'faq-2', 'faq-3', 'faq-4', 'faq-5'] as const

export function AboutPage() {
  const [openFaq, setOpenFaq] = useState<string | null>(null)
  const toggleFaq = (id: string) => {
    setOpenFaq((cur) => (cur === id ? null : id))
  }

  return (
    <>
      <div className="container-small align-left hero">
        <div className="hero-block">
          <h1 data-animate="font-weight" className="hero-heading">
            Every new site is another
            <br />
            chance to learn and to deliver.
          </h1>
          <div className="content-block">
            <div>
              With a background in QA, my work starts with requirement analysis to prevent missing or unclear essentials.
              <br />
              <br />
              Every website deserves a unique solution, whether it&apos;s advanced custom functionalities, a need for
              adequately set design systems for the simple creation of landing pages, or special custom animated
              projects.
              <br />
              <br />
              Already got a design made with Figma, Sketch, or Adobe XD? Great! I&apos;ll implement it for you with
              Webflow.
            </div>
          </div>
        </div>
      </div>
      <div className="section-block">
        <div className="image-wrap">
          <img
            src="https://cdn.prod.website-files.com/66e2e525ff88cd2d1a4c79ce/66e2e525ff88cd2d1a4c7a5d_FireShot%20Capture%20020%20-%20Webflow%20-%20Compass%20-%20compasstech.design.webflow.com.png"
            loading="eager"
            sizes="(max-width: 479px) 93vw, (max-width: 991px) 94vw, 67vw"
            srcSet="https://cdn.prod.website-files.com/66e2e525ff88cd2d1a4c79ce/66e2e525ff88cd2d1a4c7a5d_FireShot%2520Capture%2520020%2520-%2520Webflow%2520-%2520Compass%2520-%2520compasstech.design.webflow.com-p-500.png 500w, https://cdn.prod.website-files.com/66e2e525ff88cd2d1a4c79ce/66e2e525ff88cd2d1a4c7a5d_FireShot%2520Capture%2520020%2520-%2520Webflow%2520-%2520Compass%2520-%2520compasstech.design.webflow.com-p-800.png 800w, https://cdn.prod.website-files.com/66e2e525ff88cd2d1a4c79ce/66e2e525ff88cd2d1a4c7a5d_FireShot%2520Capture%2520020%2520-%2520Webflow%2520-%2520Compass%2520-%2520compasstech.design.webflow.com-p-1080.png 1080w, https://cdn.prod.website-files.com/66e2e525ff88cd2d1a4c79ce/66e2e525ff88cd2d1a4c7a5d_FireShot%2520Capture%2520020%2520-%2520Webflow%2520-%2520Compass%2520-%2520compasstech.design.webflow.com-p-1600.png 1600w, https://cdn.prod.website-files.com/66e2e525ff88cd2d1a4c79ce/66e2e525ff88cd2d1a4c7a5d_FireShot%2520Capture%2520020%2520-%2520Webflow%2520-%2520Compass%2520-%2520compasstech.design.webflow.com-p-2000.png 2000w, https://cdn.prod.website-files.com/66e2e525ff88cd2d1a4c79ce/66e2e525ff88cd2d1a4c7a5d_FireShot%20Capture%20020%20-%20Webflow%20-%20Compass%20-%20compasstech.design.webflow.com.png 2560w"
            alt=""
            className="image-background _2"
          />
          <div className="image-outline"></div>
        </div>
      </div>
      <div className="block-divider"></div>
      <div className="section-block">
        <div className="content-title-wrap">
          <div className="content-title-dot"></div>
          <h2 className="content-title">FAQ</h2>
        </div>
        <div className="accordion-list">
          <FaqAccordionItem
            open={openFaq === FAQ_IDS[0]}
            onToggle={() => toggleFaq(FAQ_IDS[0])}
            title={<strong>Do you provide both design and development?</strong>}
          >
            No. If you already have a design I can implement the development.
          </FaqAccordionItem>
          <FaqAccordionItem
            open={openFaq === FAQ_IDS[1]}
            onToggle={() => toggleFaq(FAQ_IDS[1])}
            title={<strong>Do you provide services, post launch?</strong>}
          >
            Of course. For a flat monthly fee I will update your site for you with any changes you&apos;d like to see.
          </FaqAccordionItem>
          <FaqAccordionItem
            open={openFaq === FAQ_IDS[2]}
            onToggle={() => toggleFaq(FAQ_IDS[2])}
            title={<strong>How long does a site take to develop?</strong>}
          >
            This one varies. It could take as little as 1 week or as many as 90 days. All depends on how complex and
            large the site it.
          </FaqAccordionItem>
          <FaqAccordionItem
            open={openFaq === FAQ_IDS[3]}
            onToggle={() => toggleFaq(FAQ_IDS[3])}
            title={<strong>Load time is important to me. Will the website load quickly?</strong>}
          >
            Yes! Webflow is great at building fast loading websites. Checkout my site on GTMetrix to see for yourself.
          </FaqAccordionItem>
          <FaqAccordionItem
            open={openFaq === FAQ_IDS[4]}
            onToggle={() => toggleFaq(FAQ_IDS[4])}
            title={<strong>Will my site look great on mobile too?</strong>}
          >
            Totally! It&apos;s important to me to have a cohesive experience across all screen sizes. I tend to design
            mobile first.
          </FaqAccordionItem>
        </div>
      </div>
      <div className="block-divider hiden"></div>
      <div className="section-block hiden">
        <div className="w-layout-grid content-grid">
          <div className="content-title-wrap">
            <div className="content-title-dot"></div>
            <h2 className="content-title">Pricing</h2>
          </div>
          <div>
            <div className="pricing-heading">30$/h</div>
            <div>
              This price reflects the time, effort, and expertise I put into creating and designing websites using
              Webflow. I ensure that your website not only looks great but also functions smoothly. <br />
              <br />
              With this rate, you&apos;re not just paying for the hours I work, but also for the knowledge and skills I
              bring to make your website stand out and work seamlessly. <br />
              <br />
              It&apos;s an investment in a quality, customized web solution tailored to your needs.
              <br />
              <br />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
