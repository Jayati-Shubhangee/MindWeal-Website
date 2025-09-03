import React from "react";

const teamMembers = [
  {
    name: "Ms. PIHU SURI",
    role: "Founder & Lead Psychologist at MindWeal by Pihu Suri",
    image: "/pihusuri.png", // replace with correct image path
  },
  {
    name: "Ms. SHIVANGI SOBTI",
    role: "Counseling Psychologist Therapist at MindWeal by Pihu Suri",
    image: "/shivangisobti.png", // replace with correct image path
  },
  {
    name: "Ms. AVNI KOHLI",
    role: "Counseling Psychologist Therapist at MindWeal",
    image: "/avnikohli.png", // replace with correct image path
  },
];

const Team = () => {
  return (
    <section
      id="team"
      className="relative bg-gray-100 py-16"
      style={{
        backgroundImage: "url('/images/teambg.png')", // Replace with your background image
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-white/80"></div>

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-5xl font-extrabold text-center text-green-900 mb-16 tracking-wide drop-shadow-md">
          MEET THE TEAM
        </h2>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-xl overflow-hidden border border-green-800"
            >
              {/* Profile Top Arch */}
              <div className="bg-green-800 h-32 rounded-b-[50%] relative flex justify-center items-center">
                <div className="absolute -bottom-12 w-32 h-32">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full border-4 border-white shadow-md object-cover"
                  />
                </div>
              </div>

              {/* Details */}
              <div className="pt-16 pb-8 px-6 text-center">
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
