import React, { useState } from 'react';

const Faq = () => {
  const faqData = [
    {
      question: "How do I join the gaming community website?",
      answer: "To join our community, simply click on the 'Sign Up' or 'Register' button on the homepage and follow the registration process."
    },
    {
      question: "What types of games are discussed in the community?",
      answer: "Our community covers a wide range of games, from various genres and platforms. You'll find discussions about PC, console, mobile, and tabletop games."
    },
    {
      question: "Can I create my own gaming groups or clans on the website?",
      answer: "Yes, you can create your own gaming groups or clans on our website. We offer tools and features to help you organize and manage your community."
    },
    {
      question: "How can I find other gamers to play with?",
      answer: "You can find other gamers to play with by browsing our member directory, joining gaming events, or posting in our 'Looking for Group' section."
    },
    {
      question: "Is there a forum for discussing game strategies and tips?",
      answer: "Yes, we have a dedicated forum section where members can discuss game strategies, share tips, and seek advice from experienced players."
    },
    {
      question: "How can I report inappropriate behavior or content on the website?",
      answer: "If you encounter any inappropriate behavior or content, you can report it to our moderation team through the 'Report' feature on the website."
    },
    {
      question: "Are there any contests or giveaways on the website?",
      answer: "Yes, we frequently host gaming contests, giveaways, and events. Keep an eye on our announcements and event section for updates."
    },
    {
      question: "Can I share my gaming achievements and progress on my profile?",
      answer: "Absolutely! You can customize your profile to display your gaming achievements, progress, and favorite games."
    },
    {
      question: "How do I get involved in the community and contribute to discussions?",
      answer: "To get involved, simply participate in discussions, share your experiences, and interact with other members. You can also write blogs, guides, or reviews to contribute to the community content."
    },
  ];

  return (
    <div style={{paddingLeft : 50 , color:"white" , background: 'linear-gradient(270deg, #2a0a0b, rgb(64, 20, 20))' }}>
      <h1 className="faq-heading">FAQ'S</h1>
      {faqData.map((item, index) => (
        <FaqItem key={index} question={item.question} answer={item.answer}  />
      ))}
    </div>
  );
};

const FaqItem = ({ question, answer }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleAnswer = () => {
    setIsExpanded(!isExpanded);
  };

  return (
     
    <div className="faq-container" >
      <div className="faq-one">
        <div className="faq-header" onClick={toggleAnswer}>
       
        <span  className={`faq-toggle-icon ${isExpanded ? 'expanded' : ''}`} onClick={toggleAnswer}>
        <h6 className="faq-page">{question}</h6>
            {isExpanded ? '-' : '+'}
          </span>
        </div>
        {isExpanded && (
          <div className="faq-body">
            <p>{answer}</p>
          </div>
        )}
      </div>
      <hr className="hr-line" />
    </div>
  
  );
};

export default Faq;
