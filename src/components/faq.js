// FAQ Component
import React from 'react';
import './faq.css';

function FAQ() {
  const faqs = [
    { question: "How do I get matched?", answer: "Our platform uses AI-driven algorithms to match buyers and sellers based on compatibility metrics like industry, budget, and goals." },
    { question: "What happens after a match?", answer: "Once matched, both parties can use our platform tools to communicate, review documents, and finalize the deal." },
    { question: "How does AI assist me in the acquisition process?", answer: "AI provides document analysis, deal insights, and personalized recommendations to streamline the process." }
  ];

  const toggleFAQ = (index) => {
    const answer = document.getElementById(`faq-${index}`);
    if (answer.style.display === "none" || !answer.style.display) {
      answer.style.display = "block";
    } else {
      answer.style.display = "none";
    }
  };

  return (
    <section className="faq">
      <div className="faq-content">
        <div className='box'>
          <h1>FAQ</h1>
          <p>Find answers to common questions about our platform and process.</p>
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item">
                <div className="faq-question" onClick={() => toggleFAQ(index)}>
                  {faq.question}
                </div>
                <div className="faq-answer" id={`faq-${index}`} style={{ display: 'none' }}>
                  {faq.answer}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQ;
