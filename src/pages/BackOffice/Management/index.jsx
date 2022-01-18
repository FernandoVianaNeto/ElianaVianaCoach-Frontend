import React, { useState, useEffect } from 'react';
import {
  Container, Aside, Section, Filter, Texts,
} from './styles';
import url from '../../../baseURL.json';
import { TextBlogComponent } from '../../../components/TextBlogComponent';

export function Management() {
  const [texts, setTexts] = useState([]);
  console.log(texts);

  useEffect(() => {
    fetch(`${url.baseURL}/blogtexts`)
      .then(async (response) => {
        const json = await response.json();
        setTexts(json);
      });
  }, []);

  return (
    <Container>
      <Aside>
        <h1>Gerenciamento</h1>
      </Aside>
      <Section>
        <Filter>
          <button type="button">Textos</button>
          <button type="button">Depoimentos</button>
          <button type="button">Pedidos de orçamento</button>
        </Filter>
        <Texts>
          {
            texts.map((text) => (
              <TextBlogComponent
                key={text.id}
                title={text.title}
                description={text.description}
                date={text.date}
                tags={text.tags}
              />
            ))
          }
        </Texts>
      </Section>
    </Container>
  );
}
