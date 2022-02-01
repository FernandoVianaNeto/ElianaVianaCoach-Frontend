import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
import {
  Container, Section, Filter, Texts,
} from './styles';
import url from '../../../baseURL.json';
import { TextBlogComponent } from '../../../components/TextBlogComponent';

export function Management() {
  const [texts, setTexts] = useState([]);
  // const { token } = useParams();
  // console.log(token);

  useEffect(() => {
    fetch(`${url.baseURL}/blogtexts`)
      .then(async (response) => {
        const json = await response.json();
        setTexts(json);
      });
  }, []);

  return (
    <Container>
      <Section>
        <Filter>
          <button type="button">Textos</button>
          <button type="button">Depoimentos</button>
          <button type="button">Pedidos de orçamento</button>
        </Filter>
        <Texts>
          <h1>Todos os textos:</h1>
          {
            texts.map((text) => (
              <TextBlogComponent
                key={text.id}
                title={text.title}
                description={text.description}
                date={text.date}
                tags={text.tags}
                id={text.id}
              />
            ))
          }
        </Texts>
      </Section>
    </Container>
  );
}
