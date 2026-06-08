import type { NavNode } from "./nav-item";

const pages = import.meta.glob("../../pages/**/*.mdx", {
  eager: true,
});

export function getNavigationTree(): NavNode[] {
  const root: NavNode[] = [];

  Object.entries(pages).forEach(([path, module]: any) => {
    const relative = path.replace("../pages/", "").replace(".mdx", "");

    const segments = relative.split("/") as string[];

    let current = root;

    segments.forEach((segment, index) => {
      const isLeaf = index === segments.length - 1;

      let node = current.find((n) => n.title === segment);

      if (!node) {
        node = {
          title: isLeaf ? module.frontmatter?.title ?? segment : segment,
          children: [],
        };

        current.push(node);
      }

      if (isLeaf) {
        node.href = "/" + relative;
      }

      current = node.children!;
    });
  });

  return root;
}
