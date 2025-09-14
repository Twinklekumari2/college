import React from "react";

const data = [
  { name: "Computer Programming [CS101]     {{----for all----}}", link1: "/c-prog.pdf", link2: "" },
  { name: "Basic Electrical Engg. [EC102]   {{---- for MAE, ECE ----}}", link1: "/basic-electrical.pdf", link2: "" },
  { name: "Professional Communication [HS101]     {{----for all----}}", link1: "", link2: "" },
  { name: "Engg. Maths-I [MA101] {{---Except MNC---}}", link1: "/maths.pdf", link2: "" },
  { name: "Engg. Graphics [ME02] {{---for CSE, MAE---}}", text: "isme sirf lab hoti hai" },
  { name: "Engg. Materials [ME103]  {{---- for MAE -----}}", link1: "", link2: "" },
];

const Page = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">
        Subjects & Resources <span className="text-amber-400">[PYQ & Quiz]</span>
      </h1>
      <ul className="space-y-4">
        {data.map((item, index) => (
          <li
            key={index}
            className="p-4 border rounded-lg shadow-sm flex flex-col md:flex-row gap-4 justify-between items-start"
          >
            {/* Subject name */}
            <span className="font-semibold">{item.name}</span>

            {/* Links ya Text */}
            <div className="space-x-3">
              {item.text ? (
                <p className="text-red-700 font-medium">{item.text}</p>
              ) : (
                <>
                  {item.link1 && (
                    <a
                      href={item.link1}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                    >
                      PDF 1
                    </a>
                  )}
                  {item.link2 && (
                    <a
                      href={item.link2}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1 bg-green-600 text-white rounded-md hover:bg-green-700"
                    >
                      PDF 2
                    </a>
                  )}
                </>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Page;
