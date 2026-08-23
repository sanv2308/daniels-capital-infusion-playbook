"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { LEADS, LEAD_STATUSES } from "@/data/leads";
import type { LeadStatus } from "@/data/types";

const STORAGE_KEY = "capital-infusion-lead-desk-v1";

type LeadProgressMap = Record<string, { status: LeadStatus; notes?: string; updatedAt?: string }>;

function readProgress(): LeadProgressMap {
  try {
    return JSON.parse(window.localStorage.getItem(STORAGE_KEY) ?? "{}") as LeadProgressMap;
  } catch {
    return {};
  }
}

function phoneHref(phone?: string) {
  return phone ? `tel:+1${phone.replace(/\D/g, "")}` : undefined;
}

export function LeadDesk() {
  const [progress, setProgress] = useState<LeadProgressMap>({});
  const [query, setQuery] = useState("");
  const [priority, setPriority] = useState<"All" | "A" | "B">("All");
  const [status, setStatus] = useState<"All" | LeadStatus>("All");

  useEffect(() => setProgress(readProgress()), []);

  const setLeadStatus = (id: string, nextStatus: LeadStatus) => {
    const next = {
      ...progress,
      [id]: { ...progress[id], status: nextStatus, updatedAt: new Date().toISOString() },
    };
    setProgress(next);
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  };

  const filtered = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return LEADS.filter((lead) => {
      const current = progress[lead.id]?.status ?? "Not Contacted";
      return (
        (priority === "All" || lead.priority === priority) &&
        (status === "All" || current === status) &&
        (!needle || `${lead.businessName} ${lead.industry} ${lead.city} ${lead.id}`.toLowerCase().includes(needle))
      );
    });
  }, [priority, progress, query, status]);

  const counts = useMemo(() => {
    const current = LEADS.map((lead) => progress[lead.id]?.status ?? "Not Contacted");
    return {
      untouched: current.filter((s) => s === "Not Contacted").length,
      active: current.filter((s) => ["Attempted", "Connected", "Follow-Up"].includes(s)).length,
      applications: current.filter((s) => s === "Application").length,
      won: current.filter((s) => s === "Won").length,
    };
  }, [progress]);

  return (
    <div className="stack-lg">
      <section className="lead-kpis" aria-label="Lead queue totals">
        <div className="card lead-kpi"><span>Prospects</span><strong>{LEADS.length}</strong></div>
        <div className="card lead-kpi"><span>Not contacted</span><strong>{counts.untouched}</strong></div>
        <div className="card lead-kpi"><span>Active follow-up</span><strong>{counts.active}</strong></div>
        <div className="card lead-kpi"><span>Applications</span><strong>{counts.applications}</strong></div>
        <div className="card lead-kpi"><span>Won</span><strong>{counts.won}</strong></div>
      </section>

      <section className="panel lead-toolbar" aria-label="Lead filters">
        <label>
          <span>Search</span>
          <input
            className="lead-input"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Business, industry, city, or lead ID"
          />
        </label>
        <label>
          <span>Priority</span>
          <select className="lead-select" value={priority} onChange={(event) => setPriority(event.target.value as "All" | "A" | "B")}>
            <option>All</option><option>A</option><option>B</option>
          </select>
        </label>
        <label>
          <span>Status</span>
          <select className="lead-select" value={status} onChange={(event) => setStatus(event.target.value as "All" | LeadStatus)}>
            <option>All</option>
            {LEAD_STATUSES.map((item) => <option key={item}>{item}</option>)}
          </select>
        </label>
        <div className="lead-toolbar__count">Showing {filtered.length} of {LEADS.length}</div>
      </section>

      <section className="lead-list" aria-label="Prospect leads">
        {filtered.map((lead) => {
          const currentStatus = progress[lead.id]?.status ?? "Not Contacted";
          return (
            <article className="card lead-row" key={lead.id}>
              <div className="lead-row__rank">
                <span className={`lead-priority lead-priority--${lead.priority.toLowerCase()}`}>{lead.priority}</span>
                <span className="id-stamp">{lead.id}</span>
              </div>
              <div className="lead-row__main">
                <Link href={`/leads/${lead.id.toLowerCase()}`} className="lead-row__name">{lead.businessName}</Link>
                <p>{lead.industry} · {lead.city}, {lead.state}</p>
                <p className="lead-row__signal">{lead.signalSummary}</p>
              </div>
              <div className="lead-row__contact">
                {lead.publicBusinessPhone && <a href={phoneHref(lead.publicBusinessPhone)}><i className="ti ti-phone" /> {lead.publicBusinessPhone}</a>}
                {lead.publicBusinessEmail && <a href={`mailto:${lead.publicBusinessEmail}`}><i className="ti ti-mail" /> {lead.publicBusinessEmail}</a>}
                {!lead.publicBusinessPhone && !lead.publicBusinessEmail && <span>No direct public contact</span>}
              </div>
              <div className="lead-row__actions">
                <select
                  className="lead-select"
                  aria-label={`Status for ${lead.businessName}`}
                  value={currentStatus}
                  onChange={(event) => setLeadStatus(lead.id, event.target.value as LeadStatus)}
                >
                  {LEAD_STATUSES.map((item) => <option key={item}>{item}</option>)}
                </select>
                <Link href={`/leads/${lead.id.toLowerCase()}`} className="btn btn--primary">Open playbook →</Link>
              </div>
            </article>
          );
        })}
      </section>

      <p className="lead-local-note">
        Statuses and notes save only in this browser. Priority and score rank outreach opportunity—not funding eligibility, underwriting, or approval.
      </p>
    </div>
  );
}
