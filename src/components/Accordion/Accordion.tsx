import { useState } from 'react';
import { PageContentItemAccordion, PageContentItemAccordionItem } from '../../pages/About';
import s from './Accordion.module.scss';

function AccordionItem({ q, a }: PageContentItemAccordionItem) {
  const [hidden, setHidden] = useState<boolean>(true);
  console.log('hidden :>> ', hidden);
  const onClick = () => {
    console.log('onclick :>> ');
    setHidden((h) => !h);
  }

  return (
    <>
      <h3><button onClick={onClick}>{q}</button></h3>
      <p style={{ display: hidden ? 'none' : 'block' }}>{a}</p>
    </>
  )
} 

export function Accordion({ title, items }: PageContentItemAccordion) {
  return (
    <section className={s.accordion}>
      <h2>{title}</h2>
      <ul>
      {items.map((item, i) => {
        return (
          <li key={i}>
            <AccordionItem key={i} q={item.q} a={item.a} />
          </li>
        )
      })}
      </ul>
    </section>
  )
}