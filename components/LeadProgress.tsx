"use client";

import { useEffect, useState } from "react";
import { LEAD_STATUSES } from "@/data/leads";
import type { LeadStatus } from "@/data/types";

const STORAGE_KEY = "capital-infusion-lead-desk-v1";

type ProgressRecord = { status: LeadStatus; notes?: string; updatedAt?: string };
type ProgressMap = Record<string, ProgressRecord>;

function loadAll(): ProgressMap {
  try {
    return JSON.parse(window.localStorage.getItem(STORAGE_KEY) ?? "{}") as ProgressMap;
  } catch {
    return {};
  }
}

export function LeadProgress({ leadId }: { leadId: string }) {
  const [status, setStatus] = useState<LeadStatus>("Not Contacted");
  const [notes, setNotes] = useState("");
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const record = loadAll()[leadId];
    if (record) {
      setStatus(record.status ?? "Not Contacted");
      setNotes(record.notes ?? "");
    }
  }, [leadId]);

  const save = () => {
    const all = loadAll();
    all[leadId] = { status, notes, updatedAt: new Date().toISOString() };
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(all));
    setSaved(true);
    window.setTimeout(() => setSaved(false), 1800);
  };

  return (
    <section className="panel lead-progress">
      <div className="module-kicker">
        <div><p>Rep workspace</p><h2>Disposition &amp; safe notes</h2></div>
        {saved && <span className="chip chip--pass">Saved locally</span>}
      </div>
      <label>
        <span>Status</span>
        <select className="lead-select" value={status} onChange={(event) => setStatus(event.target.value as LeadStatus)}>
          {LEAD_STATUSES.map((item) => <option key={item}>{item}</option>)}
        </select>
      </label>
      <label>
        <span>Notes — business need, timing, amount range, next action only</span>
        <textarea
          className="lead-notes"
          value={notes}
          onChange={(event) => setNotes(event.target.value)}
          placeholder="Example: Owner said equipment purchase is planned for October. Call back Sept. 10. Do not record SSNs, bank data, IDs, or account numbers here."
          rows={6}
        />
      </label>
      <button className="btn btn--primary" onClick={save}>Save progress</button>
      <p className="lead-local-note">Saved to this browser only. Use Capital Infusion&apos;s approved secure process for applications and financial documents.</p>
    </section>
  );
}
