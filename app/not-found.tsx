import Link from "next/link";

export default function NotFoundPage() {
  return (
    <main className="project-detail-page">
      <div className="wrap project-detail-wrap">
        <section className="project-hero">
          <div className="section-kicker">404</div>
          <h1>Seite nicht gefunden.</h1>
          <p>Die angefragte Route existiert nicht oder wurde verschoben.</p>
          <div className="cta-row">
            <Link className="button primary" href="/">
              Zur Startseite
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
