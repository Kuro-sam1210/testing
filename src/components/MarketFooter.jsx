import React from 'react'

const MarketFooter = () => {
  return (
    <footer className="bg-white border-t mt-12">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 grid grid-cols-1 md:grid-cols-4 gap-6 text-sm">
        <div>
          <div className="text-lg font-bold">Market</div>
          <div className="text-gray-500 mt-2">© {new Date().getFullYear()} Market. All rights reserved.</div>
        </div>

        <div>
          <div className="font-semibold mb-2">Customer Service</div>
          <div className="text-gray-600">Shipping</div>
          <div className="text-gray-600">Returns</div>
          <div className="text-gray-600">Help Center</div>
        </div>

        <div>
          <div className="font-semibold mb-2">About</div>
          <div className="text-gray-600">Company</div>
          <div className="text-gray-600">Careers</div>
          <div className="text-gray-600">Press</div>
        </div>

        <div>
          <div className="font-semibold mb-2">More</div>
          <div className="text-gray-600">Sell on Market</div>
          <div className="text-gray-600">Affiliate</div>
        </div>
      </div>
    </footer>
  )
}

export default MarketFooter
