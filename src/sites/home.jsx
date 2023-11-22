import React from 'react';
import './sites-styles.scss';
import header from '../assets/header.jpg';
import Hero from '../components/hero';
import Card from '../components/card';
import flower from '../assets/flower.jpg';
import grass from '../assets/grass.jpg';
import pruning from '../assets/pruning.jpg';
import stones from '../assets/stones.jpg';

function Home() {
  return (
    <>

      <Hero image={header} />
      <div className="container">

        <div className="sub-info">
          <h2>lorem ipsum dolet emit</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Adipisci animi cumque dolore dolorem doloribus eius, enim et fuga fugiat
            fugit laboriosam, magnam neque nobis perspiciatis quasi quo recusandae similique vitae?
          </p>
        </div>

        <div className="cards">
          <Card image={flower} title="Blommor" link="pruning" />
          <Card image={grass} title="Gräs" link="grass" />
          <Card image={stones} title="Stenanläggning" link="stenanlaggning" />
          <Card image={pruning} title="Övrigt" />
        </div>
      </div>
    </>
  );
}

export default Home;
