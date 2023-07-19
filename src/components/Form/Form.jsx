import React, { useRef, useState } from "react";
import '../Form/form.css'
import Formimage from "../../assets/Mainform.jpg"
import emailjs from "@emailjs/browser";

const Form = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_ovgdr2t","template_ungf5wc",
        {
          from_name: form.name,
          to_name: "IT HOUSE GROUP",
          from_email: form.email,
          to_email: "mikeanrews@gmail.com",
          message: form.message,
        },
        "HZ1RgAudv7TL9j3VN"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. We will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            phone: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <section className="form-section">
    <div
      className= 'form-container'
    >
      <div className="Contend">
        <p className="contend-p">Book a consultation</p>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='form'
        >
          <label className='lab'>
            <span className='form-span'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className='form-input'
            />
          </label>
          <label className='lab'>
            <span className='form-span'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className='form-input'
            />
          </label>
          <label className='lab'>
            <span className='form-span'>Your Phone</span>
            <input
              type='number'
              name='phone'
              value={form.phone}
              onChange={handleChange}
              placeholder="What's your Phone?"
              className='form-input'
            />
          </label>
          <label className='lab'>
            <span className='form-span'>Discribe what services you need</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className='form-span'
            />
          </label>

          <button
            type='submit'
            className='btn-form'
          >
            {loading ? "Sending..." : "Send"}
          </button>
          <label className='checkbox-lab'>
            <input
              type='checkbox'
              name='agreed'
              onChange={handleChange}
              className='form-checkbox'
            />
                <span className="span-leb">By clicking "Send," you agree to receive calls or text messages from us.</span>
          </label>
        </form>
        </div>
    </div>
    <img className="form-img" alt="image" src={Formimage}/>
    </section>
  );
};

export default  Form;