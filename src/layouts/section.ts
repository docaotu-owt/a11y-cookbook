type Section = SectionItem & {
  items?: SectionItem[];
};

type SectionItem = {
  title: string;
  href?: string;
};

export const sections: Section[] = [
  {
    title: "Overview",
    href: "/",
  },
  {
    title: "How to test ?",
    href: "/how-to-test",
  },
  {
    title: "Semantic HTML",
    items: [
      { title: "Button", href: "/html/button" },
      { title: "Link", href: "/html/link" },
      { title: "Heading", href: "/html/heading" },
      { title: "Image", href: "/html/image" },
      { title: "Table", href: "/html/table" },
      { title: "List", href: "/html/list" },
      { title: "Playground", href: "/html/playground" },
    ],
  },
  {
    title: "Forms",
    items: [
      { title: "Label", href: "/forms/label" },
      { title: "Input", href: "/forms/input" },
      { title: "Textarea", href: "/forms/textarea" },
      { title: "Content Editable", href: "/forms/content-editable" },
      { title: "Checkbox", href: "/forms/checkbox" },
      { title: "Radio Group", href: "/forms/radio-group" },
      { title: "Switch", href: "/forms/switch" },
    ],
  },
  {
    title: "ARIA",
    items: [
      { title: "aria-label", href: "/aria/aria-label" },
      { title: "aria-labelledby", href: "/aria/aria-labelledby" },
      { title: "aria-describedby", href: "/aria/aria-describedby" },
      { title: "aria-expanded", href: "/aria/aria-expanded" },
      { title: "aria-current", href: "/aria/aria-current" },
      { title: "aria-live", href: "/aria/aria-live" },
    ],
  },
  {
    title: "Components",
    items: [
      { title: "Modal", href: "/components/modal" },
      { title: "Accordion", href: "/components/accordion" },
      { title: "Tabs", href: "/components/tabs" },
      { title: "Tooltips", href: "/components/tooltip" },
      { title: "Combobox", href: "/components/combobox" },
      { title: "Dropdown Menu", href: "/components/dropdown-menu" },
      // { title: "Data Table", href: "/components/data-table" },
    ],
  },
];
