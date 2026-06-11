import type { ReactNode } from "react";
import {
  House,
  Users,
  Code,
  BookAIcon,
  Component,
  PaletteIcon,
  ShieldCheckIcon,
  FormIcon,
  TableOfContentsIcon,
} from "lucide-react";

type Section = SectionItem & {
  items?: SectionItem[];
};

type SectionItem = {
  title: string;
  href?: string;
  icon?: ReactNode;
};

export const sections: Section[] = [
  {
    title: "Overview",
    href: "/",
    icon: <House />,
  },
  {
    title: "Target Audience",
    href: "/target-audience-of-accessibility",
    icon: <Users />,
  },
  {
    title: "Semantic HTML",
    icon: <Code />,
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
    icon: <FormIcon />,
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
    icon: <BookAIcon />,
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
    icon: <Component />,
    items: [
      { title: "Modal", href: "/components/modal" },
      { title: "Accordion", href: "/components/accordion" },
      { title: "Tabs", href: "/components/tabs" },
      { title: "Tooltips", href: "/components/tooltip" },
      { title: "Combobox", href: "/components/combobox" },
      { title: "Dropdown Menu", href: "/components/dropdown-menu" },
    ],
  },
  {
    title: "Design Accessibility",
    href: "/design-accessibility",
    icon: <PaletteIcon />,
  },
  {
    title: "Content Accessibility",
    href: "/content-accessibility",
    icon: <TableOfContentsIcon />,
  },
  {
    title: "How to test ?",
    href: "/how-to-test",
    icon: <ShieldCheckIcon />,
  },
];
