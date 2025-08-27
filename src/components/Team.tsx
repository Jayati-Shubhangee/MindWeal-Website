import React from "react";

const teamMembers = [
  {
    name: "Ms. PIHU SURI",
    role: "Founder & Lead Psychologist at MindWeal by Pihu Suri",
    image: "/images/pihusuri.png", // replace with correct image path
  },
  {
    name: "Ms. SHIVANGI SOBTI",
    role: "Counseling Psychologist Therapist at MindWeal by Pihu Suri",
    image: "/images/shivangisobti.png", // replace with correct image path
  },
  {
    name: "Ms. AVNI KOHLI",
    role: "Counseling Psychologist Therapist at MindWeal",
    image: "/images/avnikohli.png", // replace with correct image path
  },
];

const Team = () => {
  return (
    <section id="team" className="bg-gray-100 py-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center text-green-900 mb-12">
          MEET THE TEAM
        </h2>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-t-[80px] rounded-b-lg shadow-lg overflow-hidden text-center border-t-8 border-green-700"
            >
              {/* Image */}
              <div className="flex justify-center -mt-16">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-40 h-40 rounded-full border-4 border-white shadow-md object-cover"
                />
              </div>

              {/* Details */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900">{member.name}</h3>
                <p className="mt-2 text-sm text-gray-700 italic">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
