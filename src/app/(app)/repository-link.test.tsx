import { render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";

import { RepositoryLink } from "./repository-link";
import { SidebarFrame } from "./sidebar-frame";

afterEach(() => {
  document.cookie = "dossier_sidebar=; max-age=0; path=/";
});

function renderLinks(initialCollapsed = false) {
  render(
    <SidebarFrame initialCollapsed={initialCollapsed} brand={<span>Casefile Jobs</span>}>
      <RepositoryLink />
    </SidebarFrame>,
  );
  return {
    repository: screen.getByRole("link", { name: "Star on GitHub (opens in a new tab)" }),
  };
}

describe("RepositoryLink", () => {
  it("opens the Casefile Jobs repository in a new tab", () => {
    const { repository } = renderLinks();
    expect(repository).toHaveAttribute("href", "https://github.com/AlienBTw/casefile-jobs");
    expect(repository).toHaveAttribute("target", "_blank");
    expect(repository).toHaveAttribute("rel", "noopener noreferrer");
    expect(repository).not.toHaveAttribute("title");
  });

  it("keeps its name and gets a tooltip while the sidebar is collapsed", () => {
    const { repository } = renderLinks(true);
    expect(repository).toHaveAttribute("title", "Star on GitHub");
  });
});
