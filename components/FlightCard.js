export default function FlightCard({ flight, isCheapest = false }) {
  const departureTime = new Date(flight.departure.time);
  const arrivalTime = new Date(flight.arrival.time);
  
  return (
    <div className={`border rounded-lg p-4 mb-4 ${isCheapest ? 'border-blue-500 bg-blue-50' : 'border-gray-200'}`}>
      <div className="flex justify-between items-center mb-2">
        <span className="font-medium">{flight.airline}</span>
        <span className="text-sm text-gray-600">{flight.flightNumber}</span>
      </div>
      
      <div className="flex items-center justify-between my-4">
        <div>
          <div className="text-lg font-semibold">
            {departureTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </div>
          <div className="text-sm text-gray-600">
            {flight.departure.airport} ({flight.departureAirportCode})
          </div>
        </div>
        
        <div className="text-center mx-2">
          <div className="text-xs text-gray-500">
            {Math.floor(flight.duration / 60)}h {flight.duration % 60}m
          </div>
          <div className="border-t border-gray-300 w-16 my-1"></div>
          <div className="text-xs">
            {flight.stops === 0 ? 'Non-stop' : `${flight.stops} stop${flight.stops > 1 ? 's' : ''}`}
          </div>
        </div>
        
        <div className="text-right">
          <div className="text-lg font-semibold">
            {arrivalTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </div>
          <div className="text-sm text-gray-600">
            {flight.arrival.airport} ({flight.arrivalAirportCode})
          </div>
        </div>
      </div>
      
      <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-200">
        <span className="text-sm text-gray-600">Price</span>
        <span className={`text-2xl font-bold ${isCheapest ? 'text-blue-600' : 'text-gray-800'}`}>
          ${flight.price.toLocaleString()}
        </span>
      </div>
    </div>
  );
}