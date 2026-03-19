import { useState } from 'react'

interface Result {
  date: string
  meet: string
  location: string
  type: 'Invite' | 'County' | 'Dual' | 'Sectional'
  results: { event: string; place: number; athlete: string; school: string; mark: string }[]
}

const meets: Result[] = [
  {
    date: 'Mar 15, 2026',
    meet: 'Bergen County Championships',
    location: 'Overpeck County Park, Leonia',
    type: 'County',
    results: [
      { event: '1600m Boys',   place: 1, athlete: 'Marcus Williams',  school: 'Don Bosco Prep',   mark: '4:08.34' },
      { event: '1600m Girls',  place: 1, athlete: 'Aisha Thompson',   school: 'Ridgewood',         mark: '4:48.61' },
      { event: '800m Boys',    place: 1, athlete: 'Tyler Osei',        school: 'Bergen Catholic',   mark: '1:52.44' },
      { event: '4x400 Boys',   place: 1, athlete: 'Don Bosco Relay',   school: 'Don Bosco Prep',   mark: '3:17.88' },
      { event: '110H Boys',    place: 1, athlete: 'Devon Carter',      school: 'Bergen Catholic',   mark: '13.94'   },
    ],
  },
  {
    date: 'Mar 8, 2026',
    meet: 'Spiked Shoe Invitational',
    location: 'Randolph HS, Randolph',
    type: 'Invite',
    results: [
      { event: '3200m Boys',   place: 1, athlete: 'Liam Coughlin',    school: 'Ridgewood',         mark: '8:54.11' },
      { event: '3200m Girls',  place: 1, athlete: 'Sofia Reyes',      school: 'Montclair',         mark: '10:22.44' },
      { event: '400m Boys',    place: 1, athlete: 'Devon Carter',     school: 'Bergen Catholic',   mark: '47.22'  },
      { event: '100m Boys',    place: 1, athlete: 'Elijah Ross',      school: 'Don Bosco Prep',   mark: '10.54'  },
    ],
  },
  {
    date: 'Mar 1, 2026',
    meet: 'Essex County Championships',
    location: 'Livingston HS, Livingston',
    type: 'County',
    results: [
      { event: '800m Boys',    place: 1, athlete: 'Jordan Bell',      school: 'Seton Hall Prep',   mark: '1:51.44' },
      { event: '400m Girls',   place: 1, athlete: 'Tiana Brooks',     school: 'Montclair',         mark: '54.88'  },
      { event: '100m Girls',   place: 1, athlete: 'Aaliyah Jenkins',  school: 'Montclair',         mark: '11.72'  },
      { event: '1600m Boys',   place: 1, athlete: 'Amir Johnson',     school: 'Montclair',         mark: '4:12.03' },
    ],
  },
  {
    date: 'Feb 22, 2026',
    meet: 'Clifton Invitational',
    location: 'Clifton Stadium, Clifton',
    type: 'Invite',
    results: [
      { event: '800m Boys',    place: 1, athlete: 'Jordan Bell',      school: 'Seton Hall Prep',   mark: '1:52.01' },
      { event: '1600m Girls',  place: 1, athlete: 'Hannah Kim',       school: 'Northern Valley Dem.', mark: '4:51.88' },
      { event: '4x800 Girls',  place: 1, athlete: 'Ridgewood Relay',  school: 'Ridgewood',         mark: '9:14.55' },
    ],
  },
  {
    date: 'Feb 14, 2026',
    meet: 'Russ Berrie Invitational',
    location: 'Ramapo College, Mahwah',
    type: 'Invite',
    results: [
      { event: '1600m Boys',   place: 1, athlete: 'Marcus Williams',  school: 'Don Bosco Prep',   mark: '4:09.77' },
      { event: '3200m Boys',   place: 1, athlete: 'Marcus Williams',  school: 'Don Bosco Prep',   mark: '8:58.20' },
      { event: '100H Girls',   place: 1, athlete: 'Camille Dubois',   school: 'Ridgewood',         mark: '14.02'  },
    ],
  },
]

const typeColors: Record<string, string> = {
  County:   'bg-gold-500 text-primary-900',
  Invite:   'bg-primary-700 text-white',
  Dual:     'bg-gray-200 text-gray-700',
  Sectional:'bg-primary-900 text-gold-400',
}

const placeIcon = (p: number) => {
  if (p === 1) return <span className="text-gold-500 font-black">1st</span>
  if (p === 2) return <span className="text-gray-400 font-black">2nd</span>
  if (p === 3) return <span className="text-amber-600 font-black">3rd</span>
  return <span className="text-gray-500 font-bold">{p}th</span>
}

export default function Results() {
  const [expanded, setExpanded] = useState<number | null>(0)

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-4xl font-black text-primary-900">Race Results</h1>
        <p className="text-gray-500 text-sm mt-1">North Jersey meets · Spring 2026</p>
      </div>

      <div className="space-y-4">
        {meets.map((meet, idx) => (
          <div key={idx} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            {/* Meet header */}
            <button
              onClick={() => setExpanded(expanded === idx ? null : idx)}
              className="w-full text-left px-6 py-5 flex items-center gap-4 hover:bg-gray-50 transition">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-1">
                  <span className={`text-xs font-black px-2.5 py-0.5 rounded-full ${typeColors[meet.type]}`}>
                    {meet.type}
                  </span>
                  <span className="text-xs text-gray-400">{meet.date}</span>
                </div>
                <h3 className="text-lg font-black text-primary-900">{meet.meet}</h3>
                <p className="text-sm text-gray-500 mt-0.5">📍 {meet.location}</p>
              </div>
              <div className="text-primary-400 text-xl font-bold">
                {expanded === idx ? '↑' : '↓'}
              </div>
            </button>

            {/* Results table */}
            {expanded === idx && (
              <div className="border-t border-gray-100">
                <table className="w-full">
                  <thead>
                    <tr className="bg-primary-50 text-xs text-gray-400 uppercase tracking-wide">
                      <th className="px-6 py-2 text-left">Event</th>
                      <th className="px-6 py-2 text-left">Place</th>
                      <th className="px-6 py-2 text-left">Athlete / Team</th>
                      <th className="px-6 py-2 text-left">School</th>
                      <th className="px-6 py-2 text-right">Mark</th>
                    </tr>
                  </thead>
                  <tbody>
                    {meet.results.map((r, i) => (
                      <tr key={i} className="border-t border-gray-50 hover:bg-gold-50 transition">
                        <td className="px-6 py-3 text-sm font-semibold text-gray-700">{r.event}</td>
                        <td className="px-6 py-3 text-sm">{placeIcon(r.place)}</td>
                        <td className="px-6 py-3 font-bold text-gray-900">{r.athlete}</td>
                        <td className="px-6 py-3 text-sm text-gray-500">{r.school}</td>
                        <td className="px-6 py-3 text-right font-mono font-black text-primary-800">{r.mark}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
