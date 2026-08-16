export function About() {
  return (
    <div className="prose">
      <p className="eyebrow">About</p>
      <h1>About</h1>
      <p style={{ fontSize: "1.1rem" }}>
        <strong>Terry Devara</strong>
        <br />
        Statistician, BPS-Statistics Indonesia
      </p>

      <h2>Background</h2>
      <div className="edu-card">
        <p className="edu-card__school">Polytechnic of Statistics STIS</p>
        <p className="edu-card__degree">Bachelor of Applied Statistics (Sarjana Sains Terapan)</p>
        <p className="edu-card__dates">August 2017 – August 2021</p>
      </div>

      <p>
        <strong>Target program:</strong> MEXT University-to-University, Master's level,
        Department of Computer Science
      </p>

      <h2>Contact</h2>
      <ul className="contact-list">
        <li>
          <span className="contact-label">Email</span>
          <span className="text-muted">terry.devara@bps.go.id</span>
        </li>
        <li>
          <span className="contact-label">Google Scholar</span>
          <a
            href="https://scholar.google.com/citations?user=BtBtAecAAAAJ"
            target="_blank"
            rel="noreferrer"
          >
            Terry Devara
          </a>
        </li>
        <li>
          <span className="contact-label">LinkedIn</span>
          <span className="text-muted">[PLACEHOLDER, optional]</span>
        </li>
      </ul>
    </div>
  );
}
