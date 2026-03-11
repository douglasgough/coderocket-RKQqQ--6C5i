import { useEffect } from 'react';

const sermons = [
  {
    title: "The God Who Pursues",
    series: "Foundations of Faith",
    date: "March 9, 2025",
    speaker: "Pastor David Merritt",
    duration: "38 min",
    tags: ["Grace", "Redemption", "Gospel"],
    featured: true,
  },
  {
    title: "Salt and Light",
    series: "Sermon on the Mount",
    date: "March 2, 2025",
    speaker: "Pastor David Merritt",
    duration: "42 min",
    tags: ["Community", "Witness", "Faith"],
    featured: false,
  },
  {
    title: "Blessed Are the Merciful",
    series: "Sermon on the Mount",
    date: "February 23, 2025",
    speaker: "Rev. Susan Cole",
    duration: "35 min",
    tags: ["Mercy", "Beatitudes"],
    featured: false,
  },
  {
    title: "When Prayer Feels Dry",
    series: null,
    date: "February 16, 2025",
    speaker: "Pastor David Merritt",
    duration: "40 min",
    tags: ["Prayer", "Hope", "Perseverance"],
    featured: false,
  },
  {
    title: "The Prodigal and the Father",
    series: "Parables of Jesus",
    date: "February 9, 2025",
    speaker: "Rev. Susan Cole",
    duration: "44 min",
    tags: ["Grace", "Family", "Forgiveness"],
    featured: false,
  },
  {
    title: "Rooted in Community",
    series: "Foundations of Faith",
    date: "February 2, 2025",
    speaker: "Pastor David Merritt",
    duration: "37 min",
    tags: ["Community", "Church", "Belonging"],
    featured: false,
  },
];

const tagColors: Record<string, string> = {
  Grace: "bg-blue-50 text-blue-700",
  Redemption: "bg-purple-50 text-purple-700",
  Gospel: "bg-amber-50 text-amber-700",
  Community: "bg-green-50 text-green-700",
  Witness: "bg-teal-50 text-teal-700",
  Faith: "bg-indigo-50 text-indigo-700",
  Mercy: "bg-rose-50 text-rose-700",
  Beatitudes: "bg-amber-50 text-amber-700",
  Prayer: "bg-sky-50 text-sky-700",
  Hope: "bg-emerald-50 text-emerald-700",
  Perseverance: "bg-orange-50 text-orange-700",
  Family: "bg-pink-50 text-pink-700",
  Forgiveness: "bg-violet-50 text-violet-700",
  Church: "bg-cyan-50 text-cyan-700",
  Belonging: "bg-lime-50 text-lime-700",
};

function speakerInitials(name: string) {
  return name
    .split(" ")
    .filter((w) => !["Pastor", "Rev."].includes(w))
    .slice(0, 2)
    .map((w) => w[0])
    .join("");
}

function PlayIcon() {
  return (
    <svg
      className="w-5 h-5"
      fill="currentColor"
      viewBox="0 0 20 20"
      aria-hidden="true"
    >
      <path d="M6.3 2.84A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.27l9.34-5.89a1.5 1.5 0 000-2.54L6.3 2.84z" />
    </svg>
  );
}

export default function Sermons() {
  const featured = sermons.find((s) => s.featured)!;
  const rest = sermons.filter((s) => !s.featured);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://bob.test/kb-widget.js';
    script.async = true;
    document.body.appendChild(script);
    return () => { document.body.removeChild(script); };
  }, []);

  return (
    <section id="sermons" className="py-20 bg-[#F7FAFC]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Sermons
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore messages from our pastoral team — available to listen anytime
          </p>
        </div>

        {/* Featured sermon */}
        <div className="bg-[#4A5568] rounded-2xl overflow-hidden mb-8 shadow-sm">
          <div className="p-8 md:p-10 flex flex-col md:flex-row md:items-center gap-6">
            {/* Play button */}
            <button
              className="flex-shrink-0 w-16 h-16 rounded-full bg-white/15 hover:bg-white/25 transition-colors flex items-center justify-center text-white cursor-pointer"
              aria-label={`Play: ${featured.title}`}
            >
              <PlayIcon />
            </button>

            {/* Meta */}
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="text-xs font-semibold uppercase tracking-widest text-white/50">
                  Latest Sermon
                </span>
                {featured.series && (
                  <>
                    <span className="text-white/30">·</span>
                    <span className="text-xs text-white/50">{featured.series}</span>
                  </>
                )}
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 leading-snug">
                {featured.title}
              </h3>
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center text-white text-xs font-bold">
                    {speakerInitials(featured.speaker)}
                  </div>
                  <span className="text-white/80 text-sm">{featured.speaker}</span>
                </div>
                <span className="text-white/30">·</span>
                <span className="text-white/60 text-sm">{featured.date}</span>
                <span className="text-white/30">·</span>
                <span className="text-white/60 text-sm">{featured.duration}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {featured.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2.5 py-1 rounded-full bg-white/10 text-white/80 font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Sermon grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {rest.map((sermon) => (
            <div
              key={sermon.title}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col gap-4 cursor-pointer group"
            >
              {/* Top row */}
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1 min-w-0">
                  {sermon.series && (
                    <p className="text-xs font-semibold uppercase tracking-widest text-[#4A5568]/60 mb-1 truncate">
                      {sermon.series}
                    </p>
                  )}
                  <h3 className="text-lg font-bold text-gray-900 leading-snug group-hover:text-[#4A5568] transition-colors">
                    {sermon.title}
                  </h3>
                </div>
                <button
                  className="flex-shrink-0 w-9 h-9 rounded-full bg-[#4A5568]/8 hover:bg-[#4A5568] hover:text-white transition-colors flex items-center justify-center text-[#4A5568] cursor-pointer"
                  aria-label={`Play: ${sermon.title}`}
                >
                  <PlayIcon />
                </button>
              </div>

              {/* Speaker + meta */}
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-[#4A5568]/15 flex items-center justify-center text-[#4A5568] text-xs font-bold">
                  {speakerInitials(sermon.speaker)}
                </div>
                <span className="text-sm text-gray-600 truncate">{sermon.speaker}</span>
              </div>

              {/* Date + duration */}
              <div className="flex items-center gap-2 text-xs text-gray-400">
                <span>{sermon.date}</span>
                <span>·</span>
                <span>{sermon.duration}</span>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mt-auto">
                {sermon.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`text-xs px-2 py-0.5 rounded-full font-medium ${tagColors[tag] ?? "bg-gray-100 text-gray-600"}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 bg-white rounded-2xl border border-gray-100 shadow-sm p-8 md:p-10">
          <div
            data-kb-widget
            data-api-key="pub_cNty4Fucb6bHeXKSNxP5oPXOVz1iRwkY"
            data-api-base="https://bob.test/api/v1"
          />
        </div>

        {/* Footer link */}
        <div className="text-center mt-10">
          <a
            href="#sermons"
            className="text-[#4A5568] font-medium hover:underline text-sm"
          >
            View all sermons →
          </a>
        </div>
        
      </div>
    </section>
  );
}
