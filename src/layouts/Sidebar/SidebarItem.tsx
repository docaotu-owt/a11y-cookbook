import type { NavNode } from "./nav-item";

type Props = {
  node: NavNode;
  level?: number;
};

export function SidebarItem({ node, level = 0 }: Readonly<Props>) {
  const hasChildren = node.children && node.children.length > 0;

  return (
    <li>
      {node.href ? (
        <a
          href={node.href}
          className="
              block
              rounded
              px-3
              py-2
              hover:bg-slate-100
            "
          style={{
            paddingLeft: `${level * 16 + 12}px`,
          }}
        >
          {node.title}
        </a>
      ) : (
        <details open>
          <summary
            className="
                cursor-pointer
                rounded
                px-3
                py-2
                font-medium
              "
            style={{
              paddingLeft: `${level * 16 + 12}px`,
            }}
          >
            {node.title}
          </summary>

          <ul>
            {node.children?.map((child) => (
              <SidebarItem key={child.title} node={child} level={level + 1} />
            ))}
          </ul>
        </details>
      )}
    </li>
  );
}
