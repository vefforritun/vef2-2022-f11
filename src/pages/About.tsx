import { Link } from "react-router-dom";
import { PageContent } from "../components/PageContent/PageContent";

type PageContentItemText = {
  type: 'text';
  content: string;
}

export type PageContentItemAccordionItem = {
  q: string;
  a: string;
}

export type PageContentItemAccordion = {
  type: 'accordion';
  title: string;
  items: Array<PageContentItemAccordionItem>;
}
type PageContentItemImage = {
  type: 'image';
  src: string;
}

export type PageContentItem = (PageContentItemText | PageContentItemAccordion | PageContentItemImage);

type PageContentData = {
  title: string;
  intro: string;
  content?: Array<PageContentItem>;
}

const aboutData: PageContentData = {
  title: 'Um okkur',
  intro: 'Adipiscing tristique risus nec feugiat in fermentum posuere urna nec. Ultrices gravida dictum fusce ut placerat orci',
  content: [{
    type: 'text',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam vestibulum morbi blandit cursus risus at ultrices mi tempus. Sem integer vitae justo eget. Viverra nibh cras pulvinar mattis nunc sed blandit libero volutpat. Adipiscing vitae proin sagittis nisl rhoncus mattis. Ultrices sagittis orci a scelerisque purus semper eg',
  },
  {
    type: 'text',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam vestibulum morbi blandit cursus risus at ultrices mi tempus. Sem integer vitae justo eget. Viverra nibh cras pulvinar mattis nunc sed blandit libero volutpat. Adipiscing vitae proin sagittis nisl rhoncus mattis. Ultrices sagittis orci a scelerisque purus semper eg',
  },
  {
    type: 'accordion',
    title: 'Spurt og svarað',
    items: [
      {
        q: 'Hvað er 1 +1?',
        a: '2',
      },
      {
        q: 'Hvað er 1 +1?',
        a: '2',
      },
      {
        q: 'Hvað er 1 +1?',
        a: '2',
      },
      {
        q: 'Hvað er 1 +1?',
        a: '2',
      },
      {
        q: 'Hvað er 1 +1?',
        a: '2',
      },
      {
        q: 'Hvað er 1 +1?',
        a: '2',
      },
      {
        q: 'Hvað er 1 +1?',
        a: '2',
      },
      {
        q: 'Hvað er 1 +1?',
        a: '2',
      },
      {
        q: 'Hvað er 1 +1?',
        a: '2',
      },
      {
        q: 'Hvað er lorem',
        a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
      }
    ]
  },
  {
    type: 'image',
    src: 'https://images.unsplash.com/photo-1615744455875-7ad33653e8c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
  }
  ]
}

export function About() {
  return (
    <>
      <main>
        <PageContent content={aboutData.content ?? []} />
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </>
  );
}