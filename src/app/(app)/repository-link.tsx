"use client";

import { ArrowUpRight, Star, type LucideIcon } from "lucide-react";

import { cn } from "@/lib/cn";
import { REPOSITORY_URL } from "@/lib/releases";

import { useSidebarCollapsed } from "./sidebar-frame";

/** A sidebar link that opens outside Casefile Jobs, in a new tab; icon-only with a tooltip while collapsed. */
function ExternalSidebarLink({ href, label, icon: Icon }: { href: string; label: string; icon: LucideIcon }) {
  const collapsed = useSidebarCollapsed();
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      title={collapsed ? label : undefined}
      className={cn(
        "flex w-full items-center gap-1.5 rounded-control px-3 py-1.5 text-sm font-medium text-muted hover:bg-hover hover:text-ink motion-safe:transition-colors",
        collapsed && "justify-center px-1.5",
      )}
    >
      <Icon size={16} aria-hidden="true" className="shrink-0" />
      <span className={cn(collapsed && "sr-only")}>{label}</span>{" "}
      <span className="sr-only">(opens in a new tab)</span>
      {!collapsed && <ArrowUpRight size={14} aria-hidden="true" className="ml-auto shrink-0" />}
    </a>
  );
}

/** The sidebar's link to Casefile Jobs' repository, for credits, source code (AGPL-3.0), and support. */
export function RepositoryLink() {
  return <ExternalSidebarLink href={REPOSITORY_URL} label="Star on GitHub" icon={Star} />;
}
