import { PageContentItem } from "../../pages/About";
import { Accordion } from "../Accordion/Accordion";

export function PageContent({ content }: { content: Array<PageContentItem> }) {
  return (
    <>
      {content.map((item, i) => {
        switch (item.type) {
          case 'accordion':
            return <Accordion type="accordion" key={i} title={item.title} items={item.items} />
          case 'image':
            return <img key={i} src={item.src} alt="" />
          case 'text':
            return (<p key={i}>{item.content}</p>)
          default:
            return null;
        }
      })}
    </>);
}