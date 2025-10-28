import './Tarifs.css'
import SEO from '../components/SEO'

const monthsFR = ['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Décembre']

function getMonthMatrix(year, monthIndex) {
  // monthIndex: 0-11
  const first = new Date(year, monthIndex, 1)
  // get day of week with Monday = 0 ... Sunday = 6
  const firstDay = (first.getDay() + 6) % 7
  const daysInMonth = new Date(year, monthIndex + 1, 0).getDate()

  const weeks = []
  let week = new Array(7).fill(null)
  let day = 1

  // fill first week
  for (let i = firstDay; i < 7; i++) {
    week[i] = day++
  }
  weeks.push(week)

  while (day <= daysInMonth) {
    week = new Array(7).fill(null)
    for (let i = 0; i < 7 && day <= daysInMonth; i++) {
      week[i] = day++
    }
    weeks.push(week)
  }

  return weeks
}

const Tarifs = () => {
  const year = 2025

  return (
    <>
      <SEO title="Tarifs — Ar Ty Nevez" description="Tarifs par saison et calendrier 2025" />

      <div className="tarifs-page container">
        <header className="tarifs-header">
          <h1>Tarifs & Disponibilités — 2025</h1>
          <p>Consultez les tarifs par saison et le calendrier de l'année 2025.</p>
        </header>

        <div className="tarifs-content">
          <aside className="calendars">
            <div className="calendars-grid">
              {monthsFR.map((m, idx) => (
                <div key={m} className="month-card">
                  <div className="month-header">
                    <strong>{m}</strong>
                    <span className="month-year">{year}</span>
                  </div>
                  <div className="weekdays"> 
                    <div>L</div><div>M</div><div>M</div><div>J</div><div>V</div><div>S</div><div>D</div>
                  </div>
                  <div className="month-grid">
                    {getMonthMatrix(year, idx).map((week, w) => (
                      <div className="week" key={w}>
                        {week.map((d, i) => (
                          <div key={i} className={`day ${d ? '' : 'empty'}`}>
                            {d || ''}
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </aside>

          <section className="pricing-panel">
            <h2>Tarifs</h2>
            <p className="pricing-intro">Prix par semaine. Taxe de séjour et frais éventuels non inclus.</p>

            <div className="pricing-cards">
              <div className="price-card low">
                <h3>Basse saison</h3>
                <div className="price">600€ / semaine</div>
              </div>

              <div className="price-card mid">
                <h3>Moyenne saison</h3>
                <div className="price">800€ / semaine</div>
              </div>

              <div className="price-card high">
                <h3>Haute saison</h3>
                <div className="price">1200€ / semaine</div>
              </div>
            </div>

          </section>
        </div>
      </div>
    </>
  )
}

export default Tarifs

