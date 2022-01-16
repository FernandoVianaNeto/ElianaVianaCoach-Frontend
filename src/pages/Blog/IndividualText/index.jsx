import React from 'react';
import { Container, Content, ContentGrid } from './styles';

import { Menu } from '../../../components/Menu';
import { MenuContainer } from '../../../components/Base';
import { MenuLink } from '../../../components/MenuLink';
import { TextCard } from '../../../components/TextCard';

export function IndividualText() {
  return (
    <Container>
      <MenuContainer>
        <Menu>
          <MenuLink local="HOME" link="/" />
          <MenuLink local="SOBRE MIM" link="/" />
          <MenuLink local="ESPECIALIDADES" link="/especialidades" />
        </Menu>
      </MenuContainer>
      <Content>
        <h1 className="text-title">Title</h1>
        <ContentGrid>
          <div className="text-side">
            <p>
              Lorem ipsum dolor sit amet. Et doloribus laborum id facere debitis est unde harum! Et delectus maxime est dolore obcaecati 33 soluta error non quod voluptatibus eos voluptatem corporis sed quibusdam obcaecati sit iure minus? Aut voluptas alias sed rerum repellat et molestiae dolore sit ipsum iste quo obcaecati veritatis illum laboriosam. Sed voluptate vitae quo omnis sint et dolores corporis ut voluptas tempore et dolorem nemo. Qui natus dolores in aperiam magnam sit sunt molestiae. Est laudantium nihil sit velit velit qui temporibus saepe ea commodi quas ut molestiae explicabo sed voluptas voluptas a nobis quia. Aut omnis recusandae ut recusandae quos ex error repudiandae eum nihil internos ut dicta unde est architecto perferendis non consequuntur cumque. Qui maxime consequatur est totam beatae ut voluptas atque et consequuntur rerum ad libero repellendus ut commodi distinctio ab odio deleniti.
              <br />
              <br />
              Quo doloribus maiores et voluptas perspiciatis est dolores soluta in dolorem voluptatum. Et quam dolore ut aliquid qui distinctio ratione ex quia alias non corrupti explicabo. Est ducimus voluptatem nam nihil omnis At itaque laboriosam quo ipsum laboriosam. Non facere quam ut omnis quisquam et dolorem amet ut saepe recusandae ut illum architecto non quia modi. Qui voluptatem cumque non quod eius et cumque eveniet ex consequatur tempore id deleniti quia eos optio adipisci sed voluptatum excepturi. Ex neque fugiat rem velit quaerat ea repellendus harum eum repudiandae voluptatem et iste quisquam qui asperiores repudiandae. A facere suscipit eum ipsam fuga et officiis pariatur 33 eaque rerum. Id quae iure aut maxime quisquam sit accusantium nemo!
              <br />
              <br />
              Nam unde corrupti sed aperiam quo minus dignissimos et quam nulla. Qui officiis sit tempora omnis sed molestiae neque aut labore illo et magnam inventore qui similique excepturi. Qui unde cumque vel autem itaque et quasi inventore et fugit minima. Ea autem nostrum sed veritatis dolore qui adipisci pariatur sit eius repudiandae ut adipisci repellat. Non ipsam possimus non illo architecto in dolorum iste. Ex cupiditate galisum et quae nulla At modi rerum. Ea quod animi et iusto illo non voluptas facere! Non perspiciatis ipsum culpa quibusdam sit modi Quis sed fugit galisum ea iusto esse ut voluptatem totam vel iure magni. Qui quibusdam esse ea sequi quos ad fugit excepturi eos odit odit. Eos omnis iusto hic rerum voluptatem qui temporibus dolor eligendi voluptas est dicta ullam. Hic atque laborum ut accusantium porro et impedit tenetur?
            </p>
          </div>
          <div className="left-column">
            <img src="https://res.cloudinary.com/dh84pxwgu/image/upload/v1641778571/home-office_umo8ut.jpg" alt="fundo" className="img-text" />
            <h2>Veja meus outros textos:</h2>
            <TextCard title="Title" subtitle="Nam unde corrupti sed aperiam quo minus dignissimos et quam nulla. Qui officiis sit tempora omnis sed molestiae neque aut labore illo et magnam inventore qui similique excepturi" />
          </div>
        </ContentGrid>
      </Content>
    </Container>
  );
}
