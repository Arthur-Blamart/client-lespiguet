
import { useState } from 'react'
import './Tarifs.css'
import SEO from '../components/SEO'
import seasonsData from '../data/seasonPeriods.json'

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

const FIRST_YEAR = 2026
const LAST_YEAR = 2027

// "2027-01-03" -> Date locale du 3 janvier 2027.
// new Date("2027-01-03") est interprété en UTC : en France le jour de début
// d'une période tombait alors hors de l'intervalle et n'était pas colorié.
function parseLocalDate(iso) {
  const [y, m, d] = iso.split('-').map(Number)
  return new Date(y, m - 1, d)
}

const Tarifs = () => {
  const [year, setYear] = useState(FIRST_YEAR)

  // Helper: find season for a given Date object by checking periods from JSON
  const findSeasonForDate = (dateObj) => {
    // normalize to local date midnight (Y/M/D)
    let d = new Date(dateObj.getFullYear(), dateObj.getMonth(), dateObj.getDate())

    // If it's Sunday, use the previous day (Saturday) so Sundays inherit the same season
    // (user requested: "chaque dimanche soit dans la meme catégorie que le jour d'avant")
    if (d.getDay() === 0) {
      const prev = new Date(d)
      prev.setDate(prev.getDate() - 1)
      d = prev
    }

    for (const p of seasonsData.periods) {
      const start = parseLocalDate(p.start)
      const end = parseLocalDate(p.end)
      if (d >= start && d <= end) return p.season
    }
    return null
  }

  const prevYear = () => setYear((y) => Math.max(FIRST_YEAR, y - 1))
  const nextYear = () => setYear((y) => Math.min(LAST_YEAR, y + 1))

  return (
    <>
      <SEO title={`Tarifs — Ar Ty Nevez (${year})`} description={`Tarifs par saison et calendrier ${year}`} />

      <div className="tarifs-page container">
        <header className="tarifs-header">
          <div className="tarifs-header-top">
            <div className="year-switch" aria-label="Sélecteur d'année">
              <button className="year-btn prev" onClick={prevYear} aria-label="Année précédente" disabled={year === FIRST_YEAR}>‹</button>
              <h1>Tarifs & Disponibilités — {year}</h1>
              <button className="year-btn next" onClick={nextYear} aria-label="Année suivante" disabled={year === LAST_YEAR}>›</button>
            </div>
          </div>

          {/* Compact legend moved to top: reduced size and simpler layout (uses same classes) */}
          <div className="season-legend season-legend--compact" aria-hidden="true">
            <div className="legend-item"><span className="dot dot-basse" /> Basse saison : 680€/semaine</div>
            <div className="legend-item"><span className="dot dot-moyenne" /> Moyenne saison : 780€/semaine</div>
            <div className="legend-item"><span className="dot dot-haute" /> Haute saison : 1000€/semaine</div>
          </div>
          <p>Taxe de séjour et frais éventuels non inclus.</p>
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
                        {week.map((d, i) => {
                          if (!d) return <div key={i} className="day empty">{''}</div>
                          const dayDate = new Date(year, idx, d)
                          const season = findSeasonForDate(dayDate)
                          const seasonClass = season ? `season-${season}` : ''
                          return (
                            <div key={i} className={`day ${seasonClass}`}>
                              {d}
                            </div>
                          )
                        })}
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
                <div className="price">680€ / semaine</div>
              </div>

              <div className="price-card mid">
                <h3>Moyenne saison</h3>
                <div className="price">780€ / semaine</div>
              </div>

              <div className="price-card high">
                <h3>Haute saison</h3>
                <div className="price">1000€ / semaine</div>
              </div>
            </div>
          </section>

        </div>
      </div>
    </>
  )
}

export default Tarifs

