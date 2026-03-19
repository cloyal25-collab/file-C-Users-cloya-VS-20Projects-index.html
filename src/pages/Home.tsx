import { Link } from 'react-router-dom'

const stats = [
  { label: 'North Jersey Athletes', value: '2,400+' },
  { label: 'Meets This Season', value: '38' },
  { label: 'State Records', value: '12' },
  { label: 'Active Schools', value: '84' },
]

const featuredAthletes = [
  { name: 'Marcus Williams', school: 'Don Bosco Prep', event: '400m', mark: '47.82', grade: 'Sr' },
  { name: 'Aisha Thompson', school: 'Ridgewood', event: '1600m', mark: '4:48.61', grade: 'Jr' },
  { name: 'Devon Carter', school: 'Bergen Catholic', event: '110H', mark: '13.94', grade: 'Sr' },
]

const upcomingMeets = [
  { date: 'Mar 22', name: 'Bergen County Championships', location: 'Overpeck County Park', type: 'County' },
  { date: 'Mar 29', name: 'Spiked Shoe Invitational', location: 'Randolph HS', type: 'Invite' },
  { date: 'Apr 5',  name: 'NJSIAA Sectionals – North 1', location: 'Clifton Stadium', type: 'Sectional' },
]

const typeBadgeColor: Record<string, string> = {
  County:    'bg-gold-500 text-primary-900',
  Invite:    'bg-primary-600 text-white',
  Sectional: 'bg-primary-900 text-gold-400',
}

export default function Home() {
  return (
    <div className="space-y-12">

      {/* Hero */}
      <section className="relative bg-nj-gradient rounded-2xl overflow-hidden px-8 py-16 text-center shadow-2xl">
        <div className="absolute inset-0 opacity-5 pointer-events-none"
          style={{ backgroundImage: 'repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)', backgroundSize: '20px 20px' }} />
        <div className="relative z-10">
          <span className="inline-block bg-gold-500 text-primary-900 text-xs font-black tracking-[0.2em] uppercase px-3 py-1 rounded mb-4">
            North Jersey
          </span>
          <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-4">
            Track &amp; Field<br />
            <span className="text-gold-400">Hub</span>
          </h1>
          <p className="text-primary-200 text-lg md:text-xl max-w-xl mx-auto mb-8">
            Rankings, results, and news for North Jersey high school track &amp; field.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link to="/leaderboard"
              className="bg-gold-500 hover:bg-gold-400 text-primary-900 font-black px-6 py-3 rounded-lg transition shadow-lg">
              View Rankings
            </Link>
            <Link to="/calendar"
              className="border-2 border-primary-300 hover:border-gold-400 hover:text-gold-400 text-primary-100 font-bold px-6 py-3 rounded-lg transition">
              Upcoming Meets
            </Link>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((s) => (
          <div key={s.label} className="bg-white border border-gray-100 rounded-xl p-5 text-center shadow-sm">
            <div className="text-3xl font-black text-primary-800">{s.value}</div>
            <div className="text-xs text-gray-500 font-medium mt-1 uppercase tracking-wide">{s.label}</div>
          </div>
        ))}
      </section>

      {/* Featured athletes */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-black text-primary-900">Featured Athletes</h2>
          <Link to="/leaderboard" className="text-sm text-gold-600 hover:text-gold-700 font-semibold">
            Full Leaderboard →
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {featuredAthletes.map((a) => (
            <div key={a.name}
              className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm hover:shadow-md hover:border-gold-300 transition group">
              <div className="flex items-start justify-between mb-3">
                <div className="w-10 h-10 bg-primary-800 rounded-full flex items-center justify-center text-gold-400 font-black text-sm">
                  {a.name.split(' ').map(n => n[0]).join('')}
                </div>
                <span className="text-xs bg-primary-50 text-primary-700 font-semibold px-2 py-0.5 rounded">{a.grade}</span>
              </div>
              <div className="font-black text-primary-900 group-hover:text-primary-700 transition">{a.name}</div>
              <div className="text-sm text-gray-500 mb-2">{a.school}</div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-400 uppercase tracking-wide">{a.event}</span>
                <span className="font-mono font-black text-lg text-gold-600">{a.mark}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Upcoming meets */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-black text-primary-900">Upcoming Meets</h2>
          <Link to="/calendar" className="text-sm text-gold-600 hover:text-gold-700 font-semibold">
            Full Calendar →
          </Link>
        </div>
        <div className="space-y-3">
          {upcomingMeets.map((m) => (
            <div key={m.name}
              className="bg-white border border-gray-100 rounded-xl px-5 py-4 flex items-center gap-5 shadow-sm hover:shadow-md transition">
              <div className="text-center min-w-[48px]">
                <div className="text-xs text-gray-400 uppercase tracking-wide">{m.date.split(' ')[0]}</div>
                <div className="text-2xl font-black text-primary-800 leading-none">{m.date.split(' ')[1]}</div>
              </div>
              <div className="flex-1">
                <div className="font-bold text-gray-900">{m.name}</div>
                <div className="text-sm text-gray-500">{m.location}</div>
              </div>
              <span className={`text-xs font-black px-3 py-1 rounded-full ${typeBadgeColor[m.type]}`}>
                {m.type}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary-800 rounded-2xl p-10 text-center shadow-xl">
        <h2 className="text-3xl font-black text-white mb-2">North Jersey Running Community</h2>
        <p className="text-primary-300 mb-6 max-w-lg mx-auto">
          The go-to source for Bergen, Passaic, Essex, and Morris County track &amp; field.
        </p>
        <Link to="/news"
          className="inline-block bg-gold-500 hover:bg-gold-400 text-primary-900 font-black px-8 py-3 rounded-lg transition shadow-lg">
          Latest News
        </Link>
      </section>

    </div>
  )
}
