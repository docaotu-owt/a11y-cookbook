import { getNavigationTree } from "./navigation";

import { SidebarItem } from "./SidebarItem";

const nav = getNavigationTree();

export function Sidebar() {
  return (
    <aside className="w-72 border-r overflow-auto">
      <nav aria-label="Documentation Navigation">
        <ul>
          {nav.map((node) => (
            <SidebarItem key={node.title} node={node} />
          ))}
        </ul>
      </nav>
    </aside>
  );
}
