import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container } from './styles';
import urlConfig from '../../../baseURL.json';
import api from '../../../api/api';

import { Form } from '../../../components/Form';
import { Input } from '../../../components/Input';
import { TextArea } from '../../../components/TextArea';

export function EditText() {
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [tags, setTags] = useState('');

  useEffect(() => {
    const tokenHash = JSON.parse(localStorage.getItem('token'));
    api.defaults.headers.authorization = `Bearer ${tokenHash}`;

    if (!tokenHash) {
      window.location.href = `${urlConfig.frontendURL}/blog/login`;
    }

    api.get(`${urlConfig.baseURL}/showtext/${id}`)
      .then(async (response) => {
        setTitle(response.data.title);
        setDate(response.data.date);
        setTags(response.data.tags);
        setDescription(response.data.description);
      });
  }, []);

  function handleEditText() {
    api.post(`${urlConfig.baseURL}/blog/edittext/${id}`, {
      title, description, date, tags,
    })
      .then(() => {
        window.location.href = `${urlConfig.frontendURL}/blog/gerenciamento`;
      });
  }

  return (
    <Container>
      <Form key={id}>
        <h1>
          Edição do
          {' '}
          {title}
        </h1>
        <div>
          <small>Título do texto</small>
          <Input
            placeholder="Título do texto"
            defaultValue={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </div>
        <div>
          <small>Descrição do texto</small>
          <TextArea
            placeholder="Descrição do texto"
            defaultValue={description}
            onChange={(event) => setDescription(event.target.value)}
          />
        </div>
        <div>
          <small>Tags do texto</small>
          <Input
            placeholder="Tags"
            defaultValue={tags}
            onChange={(event) => setTags(event.target.value)}
          />
        </div>
        <div>
          <small>Data de publicação</small>
          <Input
            placeholder="Data"
            defaultValue={date}
            onChange={(event) => setDate(event.target.value)}
          />
        </div>

        <button type="button" onClick={handleEditText}>
          Editar
        </button>
      </Form>
    </Container>
  );
}
