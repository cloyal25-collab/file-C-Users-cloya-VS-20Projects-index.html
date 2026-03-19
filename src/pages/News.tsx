import { useState } from 'react'

type Tag = 'Bergen' | 'Essex' | 'Passaic' | 'Records' | 'Rankings' | 'Recruiting' | 'Meet Recap'

interface Article {
  title: string
  author: string
  date: string
  excerpt: string
  tags: Tag[]
  featured?: boolean
}

const articles: Article[] = [
  {
    title: 'Marcus Williams Runs 4:08 at Bergen County Champs, Eyes State Record',
    author: 'Staff Reporter',
    date: 'Mar 16, 2026',
    excerpt: 'Don Bosco Prep senior Marcus Williams delivered the performance of the spring season Saturday at Overpeck County Park, clocking a stunning 4:08.34 in the 1600m to win the Bergen County title and move to No. 2 all-time in NJ indoor history.',
    tags: ['Bergen', 'Records'],
    featured: true,
  },
  {
    title: 'Ridgewood Girls Dominate Bergen County Distance Events',
    author: 'Alyssa Chen',
    date: 'Mar 16, 2026',
    excerpt: 'Junior Aisha Thompson led the Ridgewood girls to a commanding performance at Overpeck, sweeping the 800m and 1600m titles while anchor leg of the 4x800 relay that broke the county record by over four seconds.',
    tags: ['Bergen', 'Meet Recap'],
  },
  {
    title: 'Devon Carter Commits to Penn State After 47.22 at Spiked Shoe',
    author: 'Recruiting Desk',
    date: 'Mar 11, 2026',
    excerpt: 'Bergen Catholic sprinter/hurdler Devon Carter announced his commitment to Penn State Thursday, two days after running a 47.22 in the 400m at Randolph — the fastest time in New Jersey this spring season.',
    tags: ['Bergen', 'Recruiting'],
  },
  {
    title: 'Jordan Bell, Seton Hall Prep Set for Big Spring After 1:51 Indoor',
    author: 'Staff Reporter',
    date: 'Mar 9, 2026',
    excerpt: 'Essex County\'s Jordan Bell opened outdoor season with a 1:51.44 800m at the Essex County Championships, posting the No. 1 time in North Jersey. Coach Ray Torino says the team is "locked in" ahead of sectionals.',
    tags: ['Essex', 'Rankings'],
  },
  {
    title: 'North Jersey Spring Rankings: Updated After Week 3 Competition',
    author: 'Rankings Desk',
    date: 'Mar 8, 2026',
    excerpt: 'After three weekends of competition, the NJ MileSplit North Jersey rankings have been updated across all events. Don Bosco holds the top spot in the boys team standings, while Ridgewood leads the girls. Several upsets in Passaic County shifted the lower half of the board.',
    tags: ['Rankings'],
  },
  {
    title: 'Montclair Sprinters Rolling: Aaliyah Jenkins Runs 11.72 to Lead Essex',
    author: 'Alyssa Chen',
    date: 'Mar 6, 2026',
    excerpt: 'Montclair senior Aaliyah Jenkins has been one of the stories of the North Jersey spring, running 11.72 in the 100m — a new personal best — while also anchoring the Mounties\' 4x400 to a county record. Her teammate Tiana Brooks isn\'t far behind at 54.88 in the 400m.',
    tags: ['Essex', 'Meet Recap'],
  },
  {
    title: 'Wayne Hills, Clifton Battle for Passaic County Supremacy',
    author: 'Staff Reporter',
    date: 'Mar 3, 2026',
    excerpt: 'With Passaic County Championships three weeks out, Wayne Hills and Clifton are shaping up as the county\'s top programs. Evan Schultz (4:13 mile) leads Wayne, while Clifton\'s Marco Alvarez (10.74 in the 100m) gives the Mustangs a major weapon in the sprints.',
    tags: ['Passaic', 'Rankings'],
  },
]

const allTags: Tag[] = ['Bergen', 'Essex', 'Passaic', 'Records', 'Rankings', 'Recruiting', 'Meet Recap']

const tagColors: Record<Tag, string> = {
  Bergen:      'bg-primary-100 text-primary-800',
  Essex:       'bg-green-100 text-green-800',
  Passaic:     'bg-purple-100 text-purple-800',
  Records:     'bg-gold-100 text-gold-800',
  Rankings:    'bg-gray-100 text-gray-700',
  Recruiting:  'bg-red-100 text-red-800',
  'Meet Recap':'bg-orange-100 text-orange-800',
}

export default function News() {
  const [activeTag, setActiveTag] = useState<Tag | 'All'>('All')

  const filtered = articles.filter(a => activeTag === 'All' || a.tags.includes(activeTag as Tag))
  const featured = filtered.find(a => a.featured)
  const rest = filtered.filter(a => !a.featured)

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-4xl font-black text-primary-900">News &amp; Updates</h1>
        <p className="text-gray-500 text-sm mt-1">North Jersey Track &amp; Field Coverage</p>
      </div>

      {/* Tag filter */}
      <div className="flex flex-wrap gap-2">
        <button onClick={() => setActiveTag('All')}
          className={`px-3 py-1.5 rounded-full text-sm font-bold border transition ${
            activeTag === 'All' ? 'bg-primary-800 border-primary-800 text-white' : 'border-gray-200 text-gray-500 hover:border-gray-300'
          }`}>
          All
        </button>
        {allTags.map(t => (
          <button key={t} onClick={() => setActiveTag(t)}
            className={`px-3 py-1.5 rounded-full text-sm font-bold border transition ${
              activeTag === t ? `${tagColors[t]} border-transparent` : 'border-gray-200 text-gray-500 hover:border-gray-300'
            }`}>
            {t}
          </button>
        ))}
      </div>

      {/* Featured article */}
      {featured && (
        <article className="bg-primary-800 rounded-2xl p-8 shadow-xl">
          <div className="flex flex-wrap gap-2 mb-3">
            {featured.tags.map(tag => (
              <span key={tag} className="text-[10px] font-black px-2 py-0.5 rounded-full bg-primary-700 text-gold-400 uppercase tracking-wide">
                {tag}
              </span>
            ))}
            <span className="text-[10px] font-semibold text-primary-300 uppercase tracking-wide ml-auto">{featured.date}</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-black text-white leading-tight mb-3">
            {featured.title}
          </h2>
          <p className="text-primary-200 leading-relaxed mb-4">{featured.excerpt}</p>
          <div className="flex items-center justify-between">
            <span className="text-primary-400 text-sm">By {featured.author}</span>
            <button className="bg-gold-500 hover:bg-gold-400 text-primary-900 font-black px-5 py-2 rounded-lg transition text-sm">
              Read More
            </button>
          </div>
        </article>
      )}

      {/* Article list */}
      <div className="grid md:grid-cols-2 gap-4">
        {rest.map((article, idx) => (
          <article key={idx}
            className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-gold-200 transition flex flex-col">
            <div className="flex flex-wrap gap-1.5 mb-3">
              {article.tags.map(tag => (
                <span key={tag} className={`text-[10px] font-black px-2 py-0.5 rounded-full uppercase tracking-wide ${tagColors[tag]}`}>
                  {tag}
                </span>
              ))}
            </div>
            <h2 className="text-lg font-black text-gray-900 leading-tight mb-2 flex-1">
              {article.title}
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
              {article.excerpt}
            </p>
            <div className="flex items-center justify-between mt-auto pt-3 border-t border-gray-50">
              <span className="text-xs text-gray-400">{article.date} · {article.author}</span>
              <button className="text-primary-600 hover:text-gold-600 font-bold text-sm transition">
                Read →
              </button>
            </div>
          </article>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-16 text-gray-400">No articles found for this tag.</div>
      )}
    </div>
  )
}
