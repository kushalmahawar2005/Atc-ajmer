import { Fragment } from "react";
import { aboutSections } from "@/lib/about-content";

function Emphasis({ text }: { text: string }) {
  return text.split(/(\*\*.*?\*\*)/g).map((part, index) =>
    part.startsWith("**") ? <strong key={index}>{part.slice(2, -2)}</strong> : <Fragment key={index}>{part}</Fragment>,
  );
}

export default function AboutContent({ founderOnly = false }: { founderOnly?: boolean }) {
  const sections = founderOnly ? aboutSections.filter((section) => section.title === "Our Founding Vision") : aboutSections;
  return (
    <div className="content">
      <p><strong>Knowledge is Growth... Growth is Life</strong></p>
      {sections.map((section) => (
        <section key={section.title} style={{ marginTop: 28 }}>
          <h2 style={{ fontSize: "1.3em", marginBottom: 14 }}>{section.title}</h2>
          {section.blocks.map((block, index) =>
            block.type === "list" ? (
              <ul key={index} style={{ paddingLeft: 24, marginBottom: 18 }}>
                {block.items.map((item) => <li key={item} style={{ marginBottom: 10 }}><Emphasis text={item} /></li>)}
              </ul>
            ) : <p key={index} style={{ marginBottom: 18 }}><Emphasis text={block.text} /></p>,
          )}
        </section>
      ))}
    </div>
  );
}
