"use client"
import React, { useState } from "react"

const Page = () => {
  const [showPdf, setShowPdf] = useState(false)

  return (
    <div className="p-6 flex flex-col items-center">
      {/* Big Box */}

      <h1 className="text-red-600 mb-3">This is the sample lab file. Do not copy the exact data</h1>
      <div className="border rounded-xl shadow-md p-6 bg-white w-full max-w-2xl">
        <h2 className="text-xl font-bold text-blue-600 mb-2">Basic electrical lab</h2>
        <p className="text-gray-700 mb-4">
          Click the button below to view the PDF.
        </p>
        <button
          onClick={() => setShowPdf(!showPdf)}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          {showPdf ? "Hide PDF" : "Open PDF"}
        </button>
      </div>

      {/* PDF Viewer shown below */}
      {showPdf && (
        <div className="mt-6 w-full max-w-4xl h-[600px]">
          <iframe
            src="/lab_sem1.pdf"
            className="w-full h-full border rounded-lg shadow-lg"
          ></iframe>
        </div>
      )}
    </div>
  )
}

export default Page
