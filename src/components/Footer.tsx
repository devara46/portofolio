export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="shell footer__inner">
        <span>© {year} Terry Devara. Built with React &amp; TypeScript.</span>
        <div className="footer__links">
          <a
            href="https://scholar.google.com/citations?user=BtBtAecAAAAJ"
            target="_blank"
            rel="noreferrer"
          >
            Google Scholar
          </a>
          <a href="mailto:name@example.com">Email</a>
        </div>
      </div>
    </footer>
  );
}
