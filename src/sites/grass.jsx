import React from 'react';
import Hero from '../components/hero';
import grass from '../assets/grass.jpg';
import Content from '../components/content';

function Grass() {
  return (

    <>
      <Hero image={grass} text="Gräsanläggning" />
      <Content image="https://picsum.photos/200" text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore molestias rem sint! Animi blanditiis ducimus eius fuga in inventore, odit quae ratione reprehenderit repudiandae sapiente, soluta sunt tempore veniam voluptas. lorem Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore molestias rem sint! Animi blanditiis ducimus eius fuga in inventore, odit quae ratione reprehenderit repudiandae sapiente, soluta sunt tempore veniam voluptas. lorem " />
    </>
  );
}

export default Grass;
