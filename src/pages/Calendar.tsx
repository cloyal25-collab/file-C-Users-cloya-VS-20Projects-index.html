import { useState } from 'react'

type MeetType = 'Invite' | 'County' | 'Conference' | 'Sectional' | 'State'

interface Meet {
  date: string
  month: string
  day: string
  name: string
  location: string
  city: string
  type: MeetType
  gender: 'Boys & Girls' | 'Boys' | 'Girls'
  notes?: string
}

const meets: Meet[] = [
  {
    date: '2026-03-19', month: 'Mar', day: '19',
    name: 'Passaic County Championships',
    location: 'Clifton Stadium', city: 'Clifton',
    type: 'County', gender: 'Boys & Girls',
  },
  {
    date: '2026-03-21', month: 'Mar', day: '21',
    name: 'Morris County Championships',
    location: 'Morris Hills HS', city: 'Rockaway',
    type: 'County', gender: 'Boys & Girls',
  },
  {
    date: '2026-03-22', month: 'Mar', day: '22',
    name: 'Bergen County Championships',
    location: 'Overpeck County Park', city: 'Leonia',
    type: 'County', gender: 'Boys & Girls',
    notes: 'Top event of the spring for Bergen programs',
  },
  {
    date: '2026-03-26', month: 'Mar', day: '26',
    name: 'Essex County Championships',
    location: 'Livingston HS Track', city: 'Livingston',
    type: 'County', gender: 'Boys & Girls',
  },
  {
    date: '2026-03-28', month: 'Mar', day: '28',
    name: 'Russ Berrie Invitational',
    location: 'Ramapo College', city: 'Mahwah',
    type: 'Invite', gender: 'Boys & Girls',
  },
  {
    date: '2026-03-29', month: 'Mar', day: '29',
    name: 'Spiked Shoe Invitational',
    location: 'Randolph HS', city: 'Randolph',
    type: 'Invite', gender: 'Boys & Girls',
    notes: 'One of NJ\'s premier distance invitationals',
  },
  {
    date: '2026-04-04', month: 'Apr', day: '4',
    name: 'Big North Conference Championships',
    location: 'Wayne Hills HS', city: 'Wayne',
    type: 'Conference', gender: 'Boys & Girls',
  },
  {
    date: '2026-04-04', month: 'Apr', day: '4',
    name: 'Super Essex Conference Championships',
    location: 'Montclair HS', city: 'Montclair',
    type: 'Conference', gender: 'Boys & Girls',
  },
  {
    date: '2026-04-11', month: 'Apr', day: '11',
    name: 'Clifton Invitational',
    location: 'Clifton Stadium', city: 'Clifton',
    type: 'Invite', gender: 'Boys & Girls',
  },
  {
    date: '2026-04-18', month: 'Apr', day: '18',
    name: 'NJSIAA Sectionals – North Jersey Section 1',
    location: 'TBD – North Jersey', city: 'TBD',
    type: 'Sectional', gender: 'Boys & Girls',
    notes: 'Groups 1–4 + Non-Public; top 2 per event advance to states',
  },
  {
    date: '2026-04-25', month: 'Apr', day: '25',
    name: 'NJSIAA Sectionals – North Jersey Section 2',
    location: 'TBD – North Jersey', city: 'TBD',
    type: 'Sectional', gender: 'Boys & Girls',
  },
  {
    date: '2026-05-02', month: 'May', day: '2',
    name: 'NJSIAA Group Championships',
    location: 'Franklin HS', city: 'Somerset',
    type: 'State', gender: 'Boys & Girls',
    notes: 'Groups 1–4 all-comers',
  },
  {
    date: '2026-05-09', month: 'May', day: '9',
    name: 'NJSIAA Meet of Champions',
    location: 'Franklin HS', city: 'Somerset',
    type: 'State', gender: 'Boys & Girls',
    notes: 'NJ\'s biggest meet — top finishers from all groups compete',
  },
  {
    date: '2026-05-16', month: 'May', day: '16',
    name: 'Penn Relays',
    location: 'Franklin Field', city: 'Philadelphia, PA',
    type: 'Invite', gender: 'Boys & Girls',
    notes: 'World\'s oldest and largest track meet',
  },
]

const typeColors: Record<MeetType, string> = {
  County:     'bg-gold-500 text-primary-900',
  Invite:     'bg-primary-600 text-white',
  Conference: 'bg-green-600 text-white',
  Sectional:  'bg-primary-900 text-gold-400',
  State:      'bg-red-600 text-white',
}

const allTypes: MeetType[] = ['Invite', 'County', 'Conference', 'Sectional', 'State']

// Group by month
function groupByMonth(list: Meet[]) {
  return list.reduce<Record<string, Meet[]>>((acc, m) => {
    const key = `${m.month} 2026`
    if (!acc[key]) acc[key] = []
    acc[key].push(m)
    return acc
  }, {})
}

export default function Calendar() {
  const [filter, setFilter] = useState<MeetType | 'All'>('All')

  const filtered = meets.filter(m => filter === 'All' || m.type === filter)
  const grouped = groupByMonth(filtered)

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-4xl font-black text-primary-900">Meet Calendar</h1>
        <p className="text-gray-500 text-sm mt-1">North Jersey Track &amp; Field · Spring 2026</p>
      </div>

      {/* Filter */}
      <div className="flex flex-wrap gap-2">
        <button onClick={() => setFilter('All')}
          className={`px-4 py-2 rounded-lg text-sm font-bold border transition ${
            filter === 'All' ? 'bg-primary-800 border-primary-800 text-white' : 'border-gray-200 text-gray-500 hover:border-primary-300'
          }`}>
          All Meets
        </button>
        {allTypes.map(t => (
          <button key={t} onClick={() => setFilter(t)}
            className={`px-4 py-2 rounded-lg text-sm font-bold border transition ${
              filter === t ? `${typeColors[t]} border-transparent` : 'border-gray-200 text-gray-500 hover:border-gray-300'
            }`}>
            {t}
          </button>
        ))}
      </div>

      {/* Grouped meets */}
      {Object.entries(grouped).map(([month, monthMeets]) => (
        <div key={month}>
          <h2 className="text-xs font-black text-gray-400 uppercase tracking-[0.2em] mb-3 px-1">{month}</h2>
          <div className="space-y-3">
            {monthMeets.map((m, i) => (
              <div key={i}
                className="bg-white border border-gray-100 rounded-2xl px-5 py-4 flex gap-5 shadow-sm hover:shadow-md hover:border-gold-200 transition group">
                {/* Date block */}
                <div className="text-center min-w-[52px] bg-primary-800 rounded-xl px-3 py-2 flex flex-col items-center justify-center shrink-0">
                  <div className="text-[10px] text-primary-300 uppercase tracking-wider font-bold">{m.month}</div>
                  <div className="text-2xl font-black text-gold-400 leading-none">{m.day}</div>
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center flex-wrap gap-2 mb-1">
                    <span className={`text-[10px] font-black px-2 py-0.5 rounded-full uppercase tracking-wide ${typeColors[m.type]}`}>
                      {m.type}
                    </span>
                    <span className="text-[10px] text-gray-400 font-semibold uppercase">{m.gender}</span>
                  </div>
                  <h3 className="font-black text-gray-900 group-hover:text-primary-800 transition leading-tight">{m.name}</h3>
                  <p className="text-sm text-gray-500 mt-0.5">📍 {m.location}, {m.city}</p>
                  {m.notes && (
                    <p className="text-xs text-gold-700 bg-gold-50 rounded px-2 py-1 mt-2 border border-gold-100">
                      {m.notes}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      {filtered.length === 0 && (
        <div className="text-center py-16 text-gray-400">
          No meets found for this filter.
        </div>
      )}
    </div>
  )
}
