import React from 'react';
import Hero from '../components/hero';
import pruning from '../assets/pruning.jpg';

function Pruning() {
  const subText = 'Man kan ha text här också';
  return (
    <Hero image={pruning} text="trädbeskärning" subText={subText} />
  );
}

export default Pruning;
