function GuestDetails({ values, onChange }) {
  return (
    <div className="bg-gray-50 shadow-md rounded-lg p-8">
      <h2 className="text-2xl font-bold text-red-600 mb-6">Guest Details</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-lg mb-2">First Name*</label>
          <input
            value={values.firstName}
            onChange={e => onChange('firstName', e.target.value)}
            className="w-full bg-white shadow rounded-lg p-2"
          />
        </div>

        <div>
          <label className="block text-lg mb-2">Last Name</label>
          <input
            value={values.lastName}
            onChange={e => onChange('lastName', e.target.value)}
            className="w-full bg-white shadow rounded-lg p-2"
          />
        </div>

        <div>
          <label className="block text-lg mb-2">Email*</label>
          <input
            type="email"
            value={values.email}
            onChange={e => onChange('email', e.target.value)}
            className="w-full bg-white shadow rounded-lg p-2"
          />
        </div>

        <div>
          <label className="block text-lg mb-2">Phone*</label>
          <input
            value={values.phone}
            onChange={e => onChange('phone', e.target.value)}
            className="w-full bg-white shadow rounded-lg p-2"
          />
        </div>

       

        <div>
          <label className="block text-lg mb-2">ID Proof</label>
          <input
            type="text"
            value={values.idProof}
            onChange={e => onChange('idProof', e.target.value)}
            className="w-full bg-white shadow rounded-lg p-2"
          />
        </div>

        <div>
          <label className="block text-lg mb-2">Special Requests</label>
          <select
            value={values.specialRequests}
            onChange={e => onChange('specialRequests', e.target.value)}
            className="w-full bg-white shadow rounded-lg p-2"
          >
            <option value="">None</option>
            <option>Smoking Room</option>
            <option>Late Check-in</option>
            <option>Early Check-in</option>
            <option>High Floor Room</option>
            <option>Double Bed</option>
            <option>Twin/Single Bed</option>
            <option>Pick-up & Drop</option>
          </select>
        </div>
      </div>
    </div>
  )
}

export default GuestDetails;
