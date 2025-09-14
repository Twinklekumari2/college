"use client"
import React, { useState } from "react"

const data = [
  {
    name: "PKT sir",
    evaluation:
      "Jaisa notes/copy/pdf mei likha rehta hai vaisa hi same paper mei likhna hota hai. Like sir theroem bhi puchte hai as it is. Kisi bhi ques mei direct answer nhi likhna hai. pehle theory se hi start krna hai",
    source: "notes/pdf/pyq",
  },
  { name: "Purnendu sir", evaluation: "notes  aur questions ko dhyan se padh lena hota h . Aur uske baad pyqs must h", source: "tikle academy" },
  { name: "Sateesh sir", evaluation: "jo class mein likhwate h aur drawings banwate h , wo sab important h and again pyqs important h", source: "tikle academy" },
  {
    name: "Uday sir",
    evaluation:
      "Padhate acha hai. jo copy mei likhwate hia usi mei se paper mei aata hai. inke paper mei mcq and ans/ques honge equal weightage ka hota hai",
    source: "class notes",
  },
  { name: "Sunil sir", evaluation: "pyqs , derivations and wo jo book suggest karte h , uske questions especially examples jaroori h", source: "tikle academy" },
]

const Page = () => {
  const [search, setSearch] = useState("")

  // 🔹 Filter + Sort data
  const filteredData = data
    .filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => a.name.localeCompare(b.name))

  return (
    <div className="p-6">
      {/* Search Field */}
      <div className="mb-6">
        <input
          type="search"
          placeholder="Search by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-1/3 px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* Cards */}
      {filteredData.map((item, index) => (
        <div
          key={index}
          className="border rounded-xl shadow-md p-4 mb-4 bg-white"
        >
          <h2 className="text-xl font-bold text-blue-600">{item.name}</h2>
          <p className="mt-2 text-gray-700">{item.evaluation}</p>
          <p className="mt-1 text-sm text-gray-500">
            <span className="font-semibold">Source:</span> {item.source}
          </p>
        </div>
      ))}

      {/* No Results */}
      {filteredData.length === 0 && (
        <p className="text-gray-500">No results found.</p>
      )}
    </div>
  )
}

export default Page
