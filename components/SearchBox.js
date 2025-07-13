import { useState } from 'react';

export default function SearchBox({ 
  from, 
  to, 
  onFromChange, 
  onToChange, 
  onSearch, 
  suggestionsFrom, 
  suggestionsTo, 
  loading 
}) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="relative">
          <label className="block text-sm font-medium text-gray-700 mb-1">From</label>
          <input
            type="text"
            value={from}
            onChange={(e) => onFromChange(e.target.value)}
            placeholder="City or Airport"
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          />
          {suggestionsFrom.length > 0 && (
            <ul className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto">
              {suggestionsFrom.map((airport, index) => (
                <li
                  key={index}
                  className="p-2 hover:bg-blue-50 cursor-pointer"
                  onClick={() => {
                    onFromChange(airport.city);
                  }}
                >
                  {airport.city} ({airport.code}) - {airport.name}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="relative">
          <label className="block text-sm font-medium text-gray-700 mb-1">To</label>
          <input
            type="text"
            value={to}
            onChange={(e) => onToChange(e.target.value)}
            placeholder="City or Airport"
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          />
          {suggestionsTo.length > 0 && (
            <ul className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto">
              {suggestionsTo.map((airport, index) => (
                <li
                  key={index}
                  className="p-2 hover:bg-blue-50 cursor-pointer"
                  onClick={() => {
                    onToChange(airport.city);
                  }}
                >
                  {airport.city} ({airport.code}) - {airport.name}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="flex items-end">
          <button
            onClick={onSearch}
            disabled={loading || !from || !to}
            className={`w-full py-2 px-4 rounded-md text-white font-medium ${
              loading || !from || !to
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-blue-600 hover:bg-blue-700'
            }`}
          >
            {loading ? 'Searching...' : 'Find Cheapest Flight'}
          </button>
        </div>
      </div>
    </div>
  );
}