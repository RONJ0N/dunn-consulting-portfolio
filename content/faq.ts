export type FaqItem = {
  question: string;
  answer: string;
};

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "We already have a chatbot. Why would we need this?",
    answer:
      "Most chatbots just answer FAQs. What we build is a connected system: when someone calls after hours and you miss it, they get a text back within 60 seconds. Appointments book directly into your calendar without anyone touching them. Your phone, text, chat, calendar, and CRM all talk to each other so nothing falls through the cracks. The chatbot is one piece of a revenue machine.",
  },
  {
    question: "How fast can we be up and running?",
    answer:
      "Missed-call text-back can be live on your phone line within days. A full Growth package — voice receptionist, booking, CRM automation — typically launches within 2–4 weeks of kickoff.",
  },
  {
    question: "Are we locked into a long contract?",
    answer:
      "No. You pay a one-time setup fee that covers the build, then a month-to-month retainer for hosting, monitoring, and improvements. If the system isn't paying for itself, you can walk away — though in practice, that's not what happens.",
  },
  {
    question: "Do we need to buy or learn new software?",
    answer:
      "No. We connect to the phone system, calendar, and CRM you already use, and we manage the automation stack entirely on our side. Your team keeps working the way they always have — just with fewer dropped balls.",
  },
  {
    question: "What exactly does the free pilot include?",
    answer:
      "We set up missed-call text-back on your business line and run it for two weeks at no charge. At the end you get a plain-English report: how many calls were missed, how many leads were recovered, and what they were worth. Then you decide.",
  },
  {
    question: "Who runs the systems after launch?",
    answer:
      "We do. Every package is fully managed — monitoring, tuning, content updates, and a monthly report showing calls answered, leads captured, and appointments booked. You focus on the work; we keep the machine running.",
  },
];
