import { useState } from 'react'

interface Team {
  rank: number
  name: string
  county: string
  conference: string
  group: string
  athletes: number
  points: number
  wins: number
  losses: number
  topAthlete: string
}

const teams: Team[] = [
  { rank: 1, name: 'Don Bosco Prep',         county: 'Bergen',  conference: 'Non-Public A',     group: 'NP-A', athletes: 48, points: 312, wins: 9, losses: 1, topAthlete: 'Marcus Williams' },
  { rank: 2, name: 'Bergen Catholic',        county: 'Bergen',  conference: 'Non-Public A',     group: 'NP-A', athletes: 44, points: 288, wins: 8, losses: 2, topAthlete: 'Devon Carter' },
  { rank: 3, name: 'Ridgewood',              county: 'Bergen',  conference: 'Big North Liberty', group: 'Grp 4', athletes: 52, points: 271, wins: 8, losses: 2, topAthlete: 'Aisha Thompson' },
  { rank: 4, name: 'Seton Hall Prep',        county: 'Essex',   conference: 'Non-Public A',     group: 'NP-A', athletes: 40, points: 255, wins: 7, losses: 3, topAthlete: 'Jordan Bell' },
  { rank: 5, name: 'Montclair',              county: 'Essex',   conference: 'Super Essex Conf.', group: 'Grp 4', athletes: 55, points: 244, wins: 7, losses: 3, topAthlete: 'Aaliyah Jenkins' },
  { rank: 6, name: 'Northern Valley OT',    county: 'Bergen',  conference: 'Big North Freedom', group: 'Grp 3', athletes: 38, points: 220, wins: 6, losses: 4, topAthlete: 'Devon Nguyen' },
  { rank: 7, name: 'Wayne Hills',            county: 'Passaic', conference: 'Big North Liberty', group: 'Grp 4', athletes: 42, points: 198, wins: 6, losses: 4, topAthlete: 'Evan Schultz' },
  { rank: 8, name: 'Indian Hills',           county: 'Bergen',  conference: 'Big North National', group: 'Grp 3', athletes: 36, points: 185, wins: 5, losses: 5, topAthlete: 'Olivia Grant' },
  { rank: 9, name: 'Livingston',             county: 'Essex',   conference: 'Super Essex Conf.', group: 'Grp 4', athletes: 39, points: 172, wins: 5, losses: 5, topAthlete: 'Noah Diaz' },
  { rank: 10, name: 'Ramapo',               county: 'Bergen',  conference: 'Big North National', group: 'Grp 3', athletes: 33, points: 161, wins: 4, losses: 6, topAthlete: 'Chris Park' },
  { rank: 11, name: 'Pascack Valley',        county: 'Bergen',  conference: 'Big North National', group: 'Grp 3', athletes: 30, points: 148, wins: 4, losses: 6, topAthlete: 'Mia Carrillo' },
  { rank: 12, name: 'Fair Lawn',             county: 'Bergen',  conference: 'Big North American', group: 'Grp 4', athletes: 35, points: 140, wins: 4, losses: 6, topAthlete: 'Caleb Torres' },
]

const counties = ['All', 'Bergen', 'Essex', 'Passaic']
const countyBadge: Record<string, string> = {
  Bergen:  'bg-primary-50 text-primary-700',
  Essex:   'bg-green-50 text-green-700',
  Passaic: 'bg-purple-50 text-purple-700',
}

export default function Teams() {
  const [county, setCounty] = useState('All')

  const filtered = teams.filter(t => county === 'All' || t.county === county)

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-4xl font-black text-primary-900">Team Rankings</h1>
        <p className="text-gray-500 text-sm mt-1">North Jersey · Spring 2026 Season Standings</p>
      </div>

      {/* County filter */}
      <div className="flex gap-2 flex-wrap">
        {counties.map(c => (
          <button key={c} onClick={() => setCounty(c)}
            className={`px-4 py-2 rounded-lg text-sm font-bold border transition ${
              county === c
                ? 'bg-primary-800 border-primary-800 text-white'
                : 'border-gray-200 text-gray-600 hover:border-primary-300 hover:text-primary-800'
            }`}>
            {c}
          </button>
        ))}
      </div>

      {/* Rankings */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="bg-primary-800 px-6 py-3">
          <span className="text-gold-400 font-black text-sm uppercase tracking-wide">
            {county === 'All' ? 'All North Jersey' : county + ' County'} — Season Rankings
          </span>
        </div>
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-100 text-xs text-gray-400 uppercase tracking-wide">
              <th className="px-6 py-3 text-left w-12">#</th>
              <th className="px-6 py-3 text-left">School</th>
              <th className="px-6 py-3 text-left hidden md:table-cell">Conference</th>
              <th className="px-6 py-3 text-left hidden sm:table-cell">Group</th>
              <th className="px-6 py-3 text-left hidden lg:table-cell">Top Athlete</th>
              <th className="px-6 py-3 text-center">W-L</th>
              <th className="px-6 py-3 text-right">Pts</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((team) => {
              const isTop3 = team.rank <= 3
              return (
                <tr key={team.name}
                  className={`border-b border-gray-50 hover:bg-gold-50 transition ${isTop3 ? 'bg-primary-50/30' : ''}`}>
                  <td className="px-6 py-4">
                    {isTop3 ? (
                      <span className={`font-black text-lg ${
                        team.rank === 1 ? 'text-gold-500' :
                        team.rank === 2 ? 'text-gray-400' : 'text-amber-600'
                      }`}>
                        {team.rank === 1 ? '1st' : team.rank === 2 ? '2nd' : '3rd'}
                      </span>
                    ) : (
                      <span className="text-gray-400 font-bold">{team.rank}</span>
                    )}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-primary-800 rounded flex items-center justify-center text-gold-400 font-black text-xs shrink-0">
                        {team.name.split(' ').map(w => w[0]).join('').slice(0, 2)}
                      </div>
                      <div>
                        <div className="font-bold text-gray-900 leading-tight">{team.name}</div>
                        <span className={`text-xs font-semibold px-1.5 py-0.5 rounded ${countyBadge[team.county]}`}>
                          {team.county}
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 hidden md:table-cell text-sm text-gray-500">{team.conference}</td>
                  <td className="px-6 py-4 hidden sm:table-cell">
                    <span className="text-xs border border-gray-200 text-gray-500 px-2 py-0.5 rounded font-semibold">
                      {team.group}
                    </span>
                  </td>
                  <td className="px-6 py-4 hidden lg:table-cell text-sm text-gray-600 italic">{team.topAthlete}</td>
                  <td className="px-6 py-4 text-center">
                    <span className="font-semibold text-green-600">{team.wins}</span>
                    <span className="text-gray-300 mx-1">-</span>
                    <span className="font-semibold text-red-500">{team.losses}</span>
                  </td>
                  <td className="px-6 py-4 text-right font-black text-primary-800 text-lg">{team.points}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}
