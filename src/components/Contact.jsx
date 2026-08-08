import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ type: null, text: '' });
  const [sending, setSending] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setStatus({ type: null, text: '' });
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: 'fcf40e7e-8549-49a3-bc31-b065ee897acc',
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus({
          type: 'success',
          text: 'Message sent! I\u2019ll get back to you soon.',
        });
        setForm({ name: '', email: '', message: '' });
      } else {
        setStatus({
          type: 'error',
          text: data.message || 'Something went wrong. Please try again.',
        });
      }
    } catch {
      setStatus({
        type: 'error',
        text: 'Network error. Please email me directly at sy268134@gmail.com',
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact">
      <div className="container">
        <div className="contact-banner">
          <h2>
            Got a project?
            <br />
            Let&apos;s <span className="highlight">talk.</span>
          </h2>
          <p>
            I&apos;m currently available for freelance work and full-time roles.
            Drop me a message and I&apos;ll get back to you within 24 hours.
          </p>

          <div className="contact-grid">
            <form className="contact-form" onSubmit={handleSubmit}>
              <h3>Send a message</h3>
              {status.text && (
                <div className={`form-status ${status.type}`}>{status.text}</div>
              )}
              <div className="field">
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                />
              </div>
              <div className="field">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                />
              </div>
              <div className="field">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={form.message}
                  onChange={handleChange}
                />
              </div>
              <button className="btn primary" type="submit" disabled={sending}>
              {sending ? 'Opening email…' : 'Send message'}
              </button>
            </form>

            <div className="contact-side">
              <p>
                Prefer email or socials? Reach out directly — no forms required.
              </p>
              <ul className="facts">
                <li>
                  <span>Email</span> <span>sy268134@gmail.com</span>
                </li>
                <li>
                  <span>Phone</span> <span>8168448429</span>
                </li>
                <li>
                  <span>Response time</span> <span>&lt; 24 hours</span>
                </li>
                <li>
                  <span>Timezone</span> <span>IST (UTC+5:30)</span>
                </li>
              </ul>
              <div className="contact-links">
                <a href="mailto:sy268134@gmail.com">Email ↗</a>
                <a href="https://github.com/Sandeepjatav78" target="_blank" rel="noreferrer">
                  GitHub ↗
                </a>
                <a
                  href="https://www.linkedin.com/in/letsconnectsandeep/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}