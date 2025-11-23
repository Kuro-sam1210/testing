import React from 'react'

const MarketFooter = () => {
  return (
    <footer className="bg-[var(--surface)] border-t border-[var(--border)] mt-12">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 grid grid-cols-1 md:grid-cols-4 gap-6 text-sm">
        <div>
          <div className="text-lg font-bold text-[var(--text-dark)]">Market</div>
          <div className="text-[var(--text-mid)] mt-2">© {new Date().getFullYear()} Market. All rights reserved.</div>
        </div>

        <div>
          <div className="font-semibold mb-2 text-[var(--text-dark)]">Customer Service</div>
          <div className="text-[var(--text-light)]">Shipping</div>
          <div className="text-[var(--text-light)]">Returns</div>
          <div className="text-[var(--text-light)]">Help Center</div>
        </div>

        <div>
          <div className="font-semibold mb-2 text-[var(--text-dark)]">About</div>
          <div className="text-[var(--text-light)]">Company</div>
          <div className="text-[var(--text-light)]">Careers</div>
          <div className="text-[var(--text-light)]">Press</div>
        </div>

        <div>
          <div className="font-semibold mb-2 text-[var(--text-dark)]">More</div>
          <div className="text-[var(--text-light)]">Sell on Market</div>
          <div className="text-[var(--text-light)]">Affiliate</div>
        </div>
      </div>
    </footer>
  )
}

export default MarketFooter
