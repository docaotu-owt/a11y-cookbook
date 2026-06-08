import{j as t}from"./jsx-runtime.u17CrQMm.js";import{a as f}from"./index.BzTowqF9.js";const h=[{title:"Overview",href:"/"},{title:"How to test ?",href:"/how-to-test"},{title:"Semantic HTML",items:[{title:"Button",href:"/html/button"},{title:"Link",href:"/html/link"},{title:"Heading",href:"/html/heading"},{title:"Image",href:"/html/image"},{title:"Table",href:"/html/table"},{title:"List",href:"/html/list"},{title:"Playground",href:"/html/playground"}]},{title:"Forms",items:[{title:"Label",href:"/forms/label"},{title:"Input",href:"/forms/input"},{title:"Textarea",href:"/forms/textarea"},{title:"Content Editable",href:"/forms/content-editable"},{title:"Checkbox",href:"/forms/checkbox"},{title:"Radio Group",href:"/forms/radio-group"},{title:"Switch",href:"/forms/switch"}]},{title:"ARIA",items:[{title:"aria-label",href:"/aria/aria-label"},{title:"aria-labelledby",href:"/aria/aria-labelledby"},{title:"aria-describedby",href:"/aria/aria-describedby"},{title:"aria-expanded",href:"/aria/aria-expanded"},{title:"aria-current",href:"/aria/aria-current"},{title:"aria-live",href:"/aria/aria-live"}]},{title:"Components",items:[{title:"Modal",href:"/components/modal"},{title:"Accordion",href:"/components/accordion"},{title:"Tabs",href:"/components/tabs"}]}];function x({pathname:r}){const c=f.useMemo(()=>Object.fromEntries(h.map(e=>[e.title,e?.items?.some(i=>i.href===r)])),[r]),[d,m]=f.useState(c),b=e=>{m(i=>({...i,[e]:!i[e]}))};return t.jsxs("aside",{className:`
        h-screen
        w-72
        shrink-0
        overflow-y-auto
        border-r
        bg-white
        p-6
      `,children:[t.jsx("h1",{className:"p-4 text-3xl",children:"A11y Cookbook"}),t.jsx("nav",{"aria-label":"Accessibility Cookbook Navigation",children:t.jsx("ul",{className:"space-y-4",children:h.map(e=>{const i=d[e.title],a=`section-panel-${e.title}`,n=`section-button-${e.title}`,s=r===e.href;return t.jsxs("li",{children:[e?.href?t.jsx("a",{href:e.href,"aria-current":s?"page":void 0,className:`
                      block
                      rounded-md
                      px-3
                      py-2
                      text-sm
                      transition-colors
                      focus-visible:outline
                      focus-visible:outline-offset-2
                      ${s?"bg-blue-50 font-medium text-blue-700":"hover:bg-slate-100"}
                    `,children:e.title}):t.jsxs("button",{id:n,type:"button","aria-expanded":i,"aria-controls":a,onClick:()=>b(e.title),className:`
                    flex
                    w-full
                    items-center
                    justify-between
                    rounded-md
                    px-2
                    py-2
                    text-left
                    text-sm
                    font-semibold
                    hover:bg-slate-100
                    focus-visible:outline
                    focus-visible:outline-offset-2
                  `,children:[t.jsx("span",{children:e.title}),t.jsx("span",{"aria-hidden":"true",className:`transition-transform ${i?"rotate-90":""}`,children:"▶"})]}),t.jsx("ul",{id:a,"aria-labelledby":n,hidden:!i,className:`
                    mt-1
                    ml-2
                    space-y-1
                    border-l
                    pl-3
                  `,children:e?.items?.map(l=>{const o=r===l.href;return t.jsx("li",{children:t.jsx("a",{href:l.href,"aria-current":o?"page":void 0,className:`
                              block
                              rounded-md
                              px-3
                              py-2
                              text-sm
                              transition-colors
                              focus-visible:outline
                              focus-visible:outline-offset-2
                              ${o?"bg-blue-50 font-medium text-blue-700":"hover:bg-slate-100"}
                            `,children:l.title})},l.href)})})]},e.title)})})})]})}export{x as Sidebar};
