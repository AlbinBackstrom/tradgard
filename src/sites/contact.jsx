import React from 'react';
import { useForm } from 'react-hook-form';
import flower from '../assets/flower.jpg';
import Hero from '../components/hero';

function Contact() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // todo handle this. Add node-mail
    console.log(data);
  };

  return (
    <>
      <Hero image={flower} text="Kontakta oss" />
      <div className="contact-container">
        <h3>Kontakta oss om du har frågor eller funderingar</h3>
        <div className="contact" />

        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="name">Namn</label>
          <input className={errors} id="name" placeholder="Ditt namn" {...register('name', { required: true })} />
          <label htmlFor="name">Email</label>
          <input placeholder="Din email" type="email" id="email" {...register('email', { required: true })} />

          <label htmlFor="name">Meddelande</label>
          <textarea placeholder="Ett meddelande" rows={10} id="message" {...register('message', { required: true })} />

          {errors.exampleRequired && <span>This field is required</span>}

          <input className="button" type="submit" />
        </form>
      </div>
    </>
  );
}

export default Contact;
