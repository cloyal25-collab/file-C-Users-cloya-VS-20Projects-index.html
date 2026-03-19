import { useState } from 'react'

type Gender = 'Boys' | 'Girls'
type Event = '1600m' | '800m' | '3200m' | '400m' | '100m' | '110H/100H'

interface Athlete {
  rank: number
  name: string
  school: string
  county: string
  grade: string
  event: Event
  gender: Gender
  time: string
  pr?: boolean
}

const athletes: Athlete[] = [
  // Boys 1600m
  { rank: 1, name: 'Marcus Williams',   school: 'Don Bosco Prep',         county: 'Bergen',  grade: 'Sr', event: '1600m',    gender: 'Boys',  time: '4:08.34', pr: true  },
  { rank: 2, name: 'Tyler Osei',        school: 'Bergen Catholic',         county: 'Bergen',  grade: 'Jr', event: '1600m',    gender: 'Boys',  time: '4:09.77'            },
  { rank: 3, name: 'Liam Coughlin',     school: 'Ridgewood',               county: 'Bergen',  grade: 'Sr', event: '1600m',    gender: 'Boys',  time: '4:10.21'            },
  { rank: 4, name: 'Devon Nguyen',      school: 'Northern Valley OT',      county: 'Bergen',  grade: 'Jr', event: '1600m',    gender: 'Boys',  time: '4:11.58'            },
  { rank: 5, name: 'Amir Johnson',      school: 'Montclair',               county: 'Essex',   grade: 'Sr', event: '1600m',    gender: 'Boys',  time: '4:12.03'            },
  { rank: 6, name: 'Evan Schultz',      school: 'Wayne Hills',             county: 'Passaic', grade: 'Jr', event: '1600m',    gender: 'Boys',  time: '4:13.40'            },
  { rank: 7, name: 'Chris Park',        school: 'Ramapo',                  county: 'Bergen',  grade: 'So', event: '1600m',    gender: 'Boys',  time: '4:14.99'            },
  { rank: 8, name: 'Noah Diaz',         school: 'Livingston',              county: 'Essex',   grade: 'Sr', event: '1600m',    gender: 'Boys',  time: '4:15.22'            },
  // Girls 1600m
  { rank: 1, name: 'Aisha Thompson',    school: 'Ridgewood',               county: 'Bergen',  grade: 'Jr', event: '1600m',    gender: 'Girls', time: '4:48.61', pr: true  },
  { rank: 2, name: 'Sofia Reyes',       school: 'Montclair',               county: 'Essex',   grade: 'Sr', event: '1600m',    gender: 'Girls', time: '4:50.14'            },
  { rank: 3, name: 'Hannah Kim',        school: 'Northern Valley Dem.',    county: 'Bergen',  grade: 'Jr', event: '1600m',    gender: 'Girls', time: '4:51.88'            },
  { rank: 4, name: 'Olivia Grant',      school: 'Indian Hills',            county: 'Bergen',  grade: 'Sr', event: '1600m',    gender: 'Girls', time: '4:53.30'            },
  { rank: 5, name: 'Mia Carrillo',      school: 'Pascack Valley',          county: 'Bergen',  grade: 'So', event: '1600m',    gender: 'Girls', time: '4:54.77'            },
  { rank: 6, name: 'Grace Obinna',      school: 'Wayne Valley',            county: 'Passaic', grade: 'Jr', event: '1600m',    gender: 'Girls', time: '4:56.02'            },
  // Boys 800m
  { rank: 1, name: 'Jordan Bell',       school: 'Seton Hall Prep',         county: 'Essex',   grade: 'Sr', event: '800m',     gender: 'Boys',  time: '1:51.44', pr: true  },
  { rank: 2, name: 'Marcus Williams',   school: 'Don Bosco Prep',         county: 'Bergen',  grade: 'Sr', event: '800m',     gender: 'Boys',  time: '1:52.10'            },
  { rank: 3, name: 'Caleb Torres',      school: 'Fair Lawn',               county: 'Bergen',  grade: 'Jr', event: '800m',     gender: 'Boys',  time: '1:52.88'            },
  { rank: 4, name: 'Ryan Mack',         school: 'Paramus',                 county: 'Bergen',  grade: 'Sr', event: '800m',     gender: 'Boys',  time: '1:53.77'            },
  // Girls 800m
  { rank: 1, name: 'Aisha Thompson',    school: 'Ridgewood',               county: 'Bergen',  grade: 'Jr', event: '800m',     gender: 'Girls', time: '2:07.33', pr: true  },
  { rank: 2, name: 'Zoe Adams',         school: 'Pascack Hills',           county: 'Bergen',  grade: 'Jr', event: '800m',     gender: 'Girls', time: '2:08.90'            },
  { rank: 3, name: 'Emma Suarez',       school: 'Livingston',              county: 'Essex',   grade: 'Sr', event: '800m',     gender: 'Girls', time: '2:09.54'            },
  // Boys 400m
  { rank: 1, name: 'Devon Carter',      school: 'Bergen Catholic',         county: 'Bergen',  grade: 'Sr', event: '400m',     gender: 'Boys',  time: '47.22', pr: true   },
  { rank: 2, name: 'Isaiah Moore',      school: 'Montclair',               county: 'Essex',   grade: 'Jr', event: '400m',     gender: 'Boys',  time: '47.80'             },
  { rank: 3, name: 'Kyle Ferreira',     school: 'Wayne Hills',             county: 'Passaic', grade: 'Sr', event: '400m',     gender: 'Boys',  time: '48.14'             },
  // Girls 400m
  { rank: 1, name: 'Tiana Brooks',      school: 'Montclair',               county: 'Essex',   grade: 'Sr', event: '400m',     gender: 'Girls', time: '54.88', pr: true   },
  { rank: 2, name: 'Jade Okonkwo',      school: 'Seton Hall Prep',         county: 'Essex',   grade: 'Jr', event: '400m',     gender: 'Girls', time: '55.44'             },
  // Boys 100m
  { rank: 1, name: 'Elijah Ross',       school: 'Don Bosco Prep',         county: 'Bergen',  grade: 'Sr', event: '100m',     gender: 'Boys',  time: '10.54', pr: true   },
  { rank: 2, name: 'Darius King',       school: 'Bergen Catholic',         county: 'Bergen',  grade: 'Sr', event: '100m',     gender: 'Boys',  time: '10.61'             },
  { rank: 3, name: 'Marco Alvarez',     school: 'Clifton',                 county: 'Passaic', grade: 'Jr', event: '100m',     gender: 'Boys',  time: '10.74'             },
  // Girls 100m
  { rank: 1, name: 'Aaliyah Jenkins',   school: 'Montclair',               county: 'Essex',   grade: 'Sr', event: '100m',     gender: 'Girls', time: '11.72', pr: true   },
  { rank: 2, name: 'Nia Patterson',     school: 'Fair Lawn',               county: 'Bergen',  grade: 'Jr', event: '100m',     gender: 'Girls', time: '11.88'             },
  // Boys hurdles
  { rank: 1, name: 'Devon Carter',      school: 'Bergen Catholic',         county: 'Bergen',  grade: 'Sr', event: '110H/100H', gender: 'Boys', time: '13.94', pr: true  },
  { rank: 2, name: 'Malik Howard',      school: 'Seton Hall Prep',         county: 'Essex',   grade: 'Jr', event: '110H/100H', gender: 'Boys', time: '14.10'            },
  // Girls hurdles
  { rank: 1, name: 'Camille Dubois',    school: 'Ridgewood',               county: 'Bergen',  grade: 'Sr', event: '110H/100H', gender: 'Girls', time: '14.02', pr: true },
  { rank: 2, name: 'Priya Shah',        school: 'Indian Hills',            county: 'Bergen',  grade: 'Jr', event: '110H/100H', gender: 'Girls', time: '14.33'           },
  // Boys 3200m
  { rank: 1, name: 'Liam Coughlin',     school: 'Ridgewood',               county: 'Bergen',  grade: 'Sr', event: '3200m',    gender: 'Boys',  time: '8:54.11', pr: true },
  { rank: 2, name: 'Marcus Williams',   school: 'Don Bosco Prep',         county: 'Bergen',  grade: 'Sr', event: '3200m',    gender: 'Boys',  time: '8:56.33'           },
  // Girls 3200m
  { rank: 1, name: 'Sofia Reyes',       school: 'Montclair',               county: 'Essex',   grade: 'Sr', event: '3200m',    gender: 'Girls', time: '10:22.44', pr: true },
  { rank: 2, name: 'Olivia Grant',      school: 'Indian Hills',            county: 'Bergen',  grade: 'Jr', event: '3200m',    gender: 'Girls', time: '10:25.01'          },
]

const events: Event[] = ['1600m', '800m', '3200m', '400m', '100m', '110H/100H']

const medalColors = ['text-gold-500', 'text-gray-400', 'text-amber-600']
const medalLabels = ['1st', '2nd', '3rd']

const countyColor: Record<string, string> = {
  Bergen:  'bg-primary-50 text-primary-700',
  Essex:   'bg-green-50 text-green-700',
  Passaic: 'bg-purple-50 text-purple-700',
}

export default function Leaderboard() {
  const [gender, setGender]  = useState<Gender>('Boys')
  const [event, setEvent]    = useState<Event>('1600m')

  const filtered = athletes
    .filter(a => a.gender === gender && a.event === event)
    .sort((a, b) => a.rank - b.rank)

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-black text-primary-900">Leaderboard</h1>
          <p className="text-gray-500 text-sm mt-1">North Jersey Season Best Times · Spring 2026</p>
        </div>
        {/* Gender toggle */}
        <div className="flex bg-gray-100 rounded-lg p-1">
          {(['Boys', 'Girls'] as Gender[]).map(g => (
            <button key={g} onClick={() => setGender(g)}
              className={`px-4 py-1.5 rounded-md text-sm font-bold transition ${
                gender === g ? 'bg-primary-800 text-white shadow' : 'text-gray-500 hover:text-gray-700'
              }`}>
              {g}
            </button>
          ))}
        </div>
      </div>

      {/* Event tabs */}
      <div className="flex flex-wrap gap-2">
        {events.map(e => (
          <button key={e} onClick={() => setEvent(e)}
            className={`px-4 py-2 rounded-lg text-sm font-bold border transition ${
              event === e
                ? 'bg-gold-500 border-gold-500 text-primary-900'
                : 'border-gray-200 text-gray-600 hover:border-gold-400 hover:text-primary-800'
            }`}>
            {e}
          </button>
        ))}
      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="bg-primary-800 px-6 py-3 flex items-center gap-2">
          <span className="text-gold-400 font-black text-sm uppercase tracking-wide">
            {gender} · {event}
          </span>
        </div>
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-100 text-xs text-gray-400 uppercase tracking-wide">
              <th className="px-6 py-3 text-left w-12">#</th>
              <th className="px-6 py-3 text-left">Athlete</th>
              <th className="px-6 py-3 text-left">School</th>
              <th className="px-6 py-3 text-left">County</th>
              <th className="px-6 py-3 text-left">Gr.</th>
              <th className="px-6 py-3 text-right">Time</th>
            </tr>
          </thead>
          <tbody>
            {filtered.length === 0 ? (
              <tr>
                <td colSpan={6} className="px-6 py-12 text-center text-gray-400">
                  No results for {gender} {event} yet this season.
                </td>
              </tr>
            ) : (
              filtered.map((a) => (
                <tr key={`${a.name}-${a.event}-${a.gender}`}
                  className="border-b border-gray-50 hover:bg-gold-50 transition">
                  <td className="px-6 py-4">
                    {a.rank <= 3 ? (
                      <span className={`font-black text-lg ${medalColors[a.rank - 1]}`}>
                        {medalLabels[a.rank - 1]}
                      </span>
                    ) : (
                      <span className="text-gray-400 font-bold">{a.rank}</span>
                    )}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-gray-900">{a.name}</span>
                      {a.pr && (
                        <span className="text-[10px] bg-gold-100 text-gold-700 font-black px-1.5 py-0.5 rounded uppercase tracking-wide">
                          PR
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-600 text-sm">{a.school}</td>
                  <td className="px-6 py-4">
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded ${countyColor[a.county] ?? 'bg-gray-50 text-gray-600'}`}>
                      {a.county}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-500 text-sm">{a.grade}</td>
                  <td className="px-6 py-4 text-right font-mono font-black text-primary-800 text-lg">
                    {a.time}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
