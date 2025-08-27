import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([0]);

  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index)
        ? prev.filter((item) => item !== index)
        : [...prev, index]
    );
  };

  // 🔹 Format text with *bold* inline
  const formatBold = (text: string) => {
    const parts = text.split(/(\*[^*]+\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith("*") && part.endsWith("*")) {
        return <strong key={i}>{part.slice(1, -1)}</strong>;
      }
      return <span key={i}>{part}</span>;
    });
  };

  const faqs = [
    {
      question: "What are the therapeutic services we offer?",
      answer:
        "We provide services in the areas of psychotherapy, \nPsychotherapy \nIndividual counseling \nRelationship counselling \nQueer affirmative therapy \nTrauma informed therapy \npsychological first aid\ncareer counselling and guidance \ncareer guidance for class 10th to 12th",
    },
    {
      question: "Why should you take therapy?",
      answer:
        "Therapy is for everyone whether you‘re navigating everyday stressors or working through deeper emotional or psychological challenges. It helps in enhancing self awareness, emotional resilience and over all quality of life, supporting personal growth across all areas. The improvement and growth happens at its own pace.",
    },
    {
      question: "How would you know you need to take a session?",
      answer:
        "If you are feeling emotionally overwhelmed, emotionally stuck, experience changes in behavior or find it hard to cope with daily life situations, this may be a sign to seek support. Therapy will help you in gaining clarity, better coping mechanisms and emotional stability. ",
    },
    {
      question: "What happens during a session?",
      answer:
        "The sessions are conducted with utmost confidentiality and privacy. The client and therapist discuss the challenges that the client is facing currently and collaboratively work towards emotional and psychological wellbeing. Throughout the session the client and therapists set collaborative goals and trained therapists via therapeutic techniques help in achieving overall growth.",
    },
    {
      question: "How many sessions do I need for therapy?",
      answer:
        "The client and therapist collaboratively decide the number of sessions that are required by the client. There are no fixed numbers as therapy is tailored for everyone. ",
    },
    {
      question: "How do I book a session?",
      answer:
        "You can book sessions via the website or connect with a psychologist and book through QR code. You can also book sessions through our social media handles like LinkedIn and Instagram. ",
    },
    {
      question: "What all mode therapy can be provided?",
      answer:
        "We currently only provide therapy through online platforms - via video conferencing, telephonic sessions and chat sessions. You may choose the mode that best suits your comfort and accessibility.",
    },
    {
      question: "Is online therapy safe and confidential?",
      answer:
        "Yes, the therapy is both safe and confidential. All the information that you shared with your therapists will remain between both of you only. ",
    },
    {
      question: "Do I need to provide all my information to my therapist?",
      answer:
        "Clients are required to fill the intake form with utmost honesty but within their comfort level. During the sessions the same behaviour is expected. The information of clients will remain confidential and private and wouldn't be shared without their consent. Transparency is a crucial element for this therapeutic alliance which is mutually respected both by clients and therapists.",
    },
    {
      question: "How can I contact my therapist in case of an emergency? ",
      answer:
        "In case of emergency contact on official MindWeal number *9599618238*. Your therapist will connect with you as early as possible. In case of critical situations please contact a national helpline number like Telemanas *(1-800 891 14416)*, Mental Health Rehabilitation Helpline Kiran *(1800-599-0019)*, suicide helpline *(9152987821)*.",
    },
    {
      question: "Can I change my therapist  if I want to? ",
      answer:
        "Yes, you can. The protocol for changing therapists is to first  discuss the issue with your current therapist and then if needed getting a second opinion with a different therapist. The current therapist can also assist you in connecting with other practitioners within or outside of the mindweal organization.",
    },
    {
      question: "What is the cancellation policy?",
      answer:
        "The cancellation policy for pre-booked sessions entails reimbursement of only *50%* of the amount. There are no charges for complete termination of the sessions, However, clients are expected to inform their therapists the reasons for terminating. ",
    },
    {
      question: "What are the fees of therapists? ",
      answer:
        "The therapist's fees vary as per the age criteria (Minors and adults) and duration of session. The fees also differ for different psychologists as per their experience and expertise. Mindweal therapists also provide intervention at a sliding scale on the practitioner’s discretion. Please discuss with your therapist.",
    },
    {
      question: "Can I contact my therapist outside of the session too?",
      answer:
        "Direct contact with your therapist outside of scheduled sessions is not permitted. In case of emergency they can contact the number provided to them by the therapist. ",
    },
    {
      question:
        "Where can I access Internships, Bootcamps, Webinars and other programs MindWeal by Pihu Suri offers?",
      answer:
        "You can refer to the programs section in the navigation menu *(hyperlink to programs section)* or view any upcoming programs on the *Homepage*.",
    },
    {
      question: "I want to be part of the team. How can I join?",
      answer:
        "If you are a psychology student looking to be part of the team, you can visit the internship section on the website and fill the form to apply for the same. If you are an early career psychologist  or even experienced psychologist you can join us by visiting the career section and apply for the same. You can also volunteer with us through our community outreach programs.\nCAREERS",
    },
  ];

  return (
    <section id="faqs" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <span className="inline-block px-4 py-2 bg-lavender-100 text-lavender-700 rounded-full text-sm font-medium mb-4">
            Frequently Asked Questions
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Common Questions About Therapy
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Find answers to the most common questions about our services,
            therapy process, and what to expect at MindWeal.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4 mb-16">
          {faqs.map((faq, index) => {
            const isOpen = openItems.includes(index);

            return (
              <div
                key={index}
                className={`bg-white rounded-2xl shadow-sm border transition-all duration-300 animate-slide-up ${
                  isOpen
                    ? "shadow-lg border-mint-200"
                    : "border-gray-200 hover:border-mint-200"
                }`}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full text-left p-6 focus:outline-none focus:ring-4 focus:ring-mint-100 rounded-2xl"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-gray-900 pr-8 leading-relaxed">
                      {faq.question}
                    </h3>
                    <div
                      className={`flex-shrink-0 transition-all duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    >
                      {isOpen ? (
                        <Minus className="h-5 w-5 text-mint-600" />
                      ) : (
                        <Plus className="h-5 w-5 text-gray-400" />
                      )}
                    </div>
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 animate-fade-in">
                    <div className="text-gray-800 leading-relaxed">
                      {faq.answer.split("\n").map((line, i) => {
                        const content = formatBold(line);

                        if (i === 0) {
                          return (
                            <p key={i} className="mb-2">
                              {content}
                            </p>
                          );
                        }

                        if (
                          line.toLowerCase().includes("psychotherapy") ||
                          line.toLowerCase().includes("career counselling") ||
                          line.toLowerCase().includes("careers")
                        ) {
                          return (
                            <p key={i} className="font-bold text-black-700 mt-2">
                              {content}
                            </p>
                          );
                        }

                        return (
                          <ul key={i} className="list-disc ml-6 text-gray-600">
                            <li>{content}</li>
                          </ul>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
