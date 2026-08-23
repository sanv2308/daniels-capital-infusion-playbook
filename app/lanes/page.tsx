import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { LANES } from "@/data/lanes";

export const metadata = { title: "Lanes · Capital Infusion Playbook" };

export default function LanesIndex() {
  return (
    <div className="container page-pad">
      <Reveal>
        <p className="kicker">layer 4 · actions</p>
        <h1 className="h-display" style={{ fontSize: "clamp(2rem,4vw,3rem)" }}>Product lanes</h1>
        <p className="lede" style={{ marginTop: "1rem" }}>
          Six ways money moves. The LANE router picks one from the gate results —
          you never pitch a menu, you deliver a diagnosis. Know all six cold so
          the routed one sounds inevitable.
        </p>
      </Reveal>

      <div className="grid-2" style={{ marginTop: "2.5rem", alignItems: "stretch" }}>
        {LANES.map((lane, i) => (
          <Reveal key={lane.id} i={i % 2}>
            <Link href={`/lanes/${lane.id}`} className="card card--interactive" style={{ display: "block", height: "100%" }}>
              <div style={{ display: "flex", gap: 10, alignItems: "baseline", marginBottom: 8 }}>
                <span className="id-stamp" style={{ color: "var(--mint)" }}>{lane.code}</span>
                <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontSize: "1.4rem", margin: 0 }}>{lane.name}</h2>
              </div>
              <p style={{ fontSize: "0.8rem", color: "var(--bone-faint)", fontFamily: "var(--font-mono)", margin: "0 0 8px" }}>{lane.aka}</p>
              <p style={{ fontSize: "0.92rem", color: "var(--bone-dim)", lineHeight: 1.55, margin: 0 }}>{lane.oneLiner}</p>
              <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginTop: 12 }}>
                <span className="chip">{lane.ranges.amount}</span>
                <span className="chip">{lane.ranges.term}</span>
                <span className="chip chip--brass">{lane.ranges.cost}</span>
                <span className="chip chip--pass">{lane.ranges.speed}</span>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
