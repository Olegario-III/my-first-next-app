import styles from "./contact.module.css";

export default function Contact() {
  return (
    <main className={styles.contact}>
      <div className={styles.card}>
        <h1 className={styles.title}>Contact Me</h1>
        <p className={styles.subtitle}>
          Have a question or want to work together? Send me a message.
        </p>

        <form
          action="mailto:your-email@example.com"
          method="POST"
          encType="text/plain"
        >
          <div className={styles.formGroup}>
            <label htmlFor="name" className={styles.label}>
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your name"
              required
              className={styles.input}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.label}>
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="your.email@example.com"
              required
              className={styles.input}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="message" className={styles.label}>
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder="Write your message here..."
              required
              className={styles.textarea}
            />
          </div>

          <button type="submit" className={styles.button}>
            Send Message
          </button>
        </form>

        <div className={styles.info}>
          <p>
            Or email me directly at{" "}
            <a href="mailto:your-email@example.com">
              your-email@example.com
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}