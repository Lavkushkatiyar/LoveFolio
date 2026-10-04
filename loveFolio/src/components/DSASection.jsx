import React from 'react';
import { DSA_STATS } from '../data/portfolioData';
import { Code, CheckCircle, Flame, Trophy, Cpu } from 'lucide-react';

export default function DSASection() {
  return (
    <section id="dsa" className="py-16 px-4 md:px-8 max-w-6xl mx-auto">
      <div className="neu-flat-lg p-8 md:p-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Summary */}
          <div className="lg:col-span-5 space-y-4">
            <div className="neu-badge text-emerald-600 dark:text-emerald-400 font-bold text-xs">
              <Trophy className="w-3.5 h-3.5 mr-1 text-amber-500 inline" />
              Verified Problem Solving
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 dark:text-slate-100">
              Data Structures & Algorithms
            </h2>

            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
              Demonstrated problem-solving proficiency across algorithmic domains including Dynamic Programming, Trees, Graphs, and Hash Tables.
            </p>

            <div className="neu-flat p-6 rounded-2xl flex items-center gap-6 mt-4">
              <div className="w-16 h-16 neu-inset rounded-2xl flex items-center justify-center text-emerald-600 dark:text-emerald-400 font-black text-2xl">
                {DSA_STATS.totalSolved}+
              </div>
              <div>
                <div className="text-xl font-extrabold text-slate-800 dark:text-slate-100">
                  Problems Solved
                </div>
                <div className="text-xs text-slate-500 font-semibold">
                  Platform Benchmark: {DSA_STATS.platform}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Topic Progress Meters */}
          <div className="lg:col-span-7 space-y-5">
            <h3 className="text-lg font-extrabold text-slate-800 dark:text-slate-200 mb-2 flex items-center gap-2">
              <Cpu className="w-5 h-5 text-blue-500" />
              <span>Algorithmic Domain Competency</span>
            </h3>

            {DSA_STATS.topics.map((t) => (
              <div key={t.topic} className="space-y-1.5">
                <div className="flex justify-between text-xs font-bold text-slate-700 dark:text-slate-300">
                  <span>{t.topic}</span>
                  <span className="text-blue-600 dark:text-blue-400">{t.count} Problems Solved</span>
                </div>
                <div className="w-full h-3 neu-inset rounded-full overflow-hidden p-0.5">
                  <div
                    className="h-full bg-gradient-to-r from-blue-500 via-indigo-500 to-emerald-500 rounded-full transition-all duration-1000"
                    style={{ width: `${t.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
