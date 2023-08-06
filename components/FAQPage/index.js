"use client";
import { ExpandMore } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import styles from "./index.module.css";

const page = {
  title: "Frequently Asked Questions (FAQ)",
  list: [
    { id: uuid(),
      title: "What is the Service Audit?",
      description: "The Service Audit is a comprehensive program designed to collect and analyze customer feedback to identify areas for improvement in your local business, ultimately enhancing sales and customer satisfaction." 
    },
    { id: uuid(),
      title: "How does the Service Audit work?",
      description: "The Service Audit involves conducting surveys with customers using QR codes over a 1-month period. The collected data is then analyzed to identify common themes and generate actionable insights for your business." 
    },
    { id: uuid(),
      title: "What packages do you offer?",
      description: "We offer three tiers of packages: 'Insights Starter,' 'Experience Enhancer,' and 'Performance Booster.' Each package includes a range of services tailored to meet your business needs and budget." 
    },
    { id: uuid(),
      title: "How much does the Service Audit cost?",
      description: "The price for the Service Audit varies depending on the package you choose. The 'Insights Starter' package is priced at $500, the 'Experience Enhancer' package at $750, and the 'Performance Booster' package at $1000." 
    },
    { id: uuid(),
      title: "What are the benefits of the Service Audit?",
      description: "The Service Audit can help you uncover valuable insights, improve customer experience, boost sales, and enhance your business's reputation, leading to increased customer loyalty and positive reviews."
    }
  ]
}

export const FAQPage = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    setQuestions(page.list.map(item => { return {...item, open: false} }))
  }, []);

  const handleToggleOpen = (question_id) => {
    setQuestions(questions.map(question => {
      if(question.id === question_id){
        question.open = !question.open;
      }
      return question;
    }))
  }

  return (
  <section
    className={styles.section}
    id="faq"
  >
    <h1>{page.title}</h1>

    <div
      className={styles.question_list}
    >
      {questions.map(q => {
        return (
          <div
            key={q.id}
            className={styles.question_item}
          >

            <button
              className={styles.question_item_top}
              onClick={() => {
                handleToggleOpen(q.id);
              }}
            >
              <h3
                className={styles.question_item_title}
              >
                {q.title}
              </h3>
              
              <ExpandMore
                fontSize="inherit"
                className={`${q.open ? styles.icon_open : styles.icon_closed}`}
                onClick={() => {
                  handleToggleOpen(q.id);
                }}
              />
            </button>
            
            <div
              className={`${styles.question_item_bottom} ${q.open ? "" : styles.question_item_bottom_hidden}`}
            >
              <p
                className={`${styles.question_item_bottom_text}`}
              >
                {q.description}
              </p>
            </div>

          </div>
        )
      })}
    </div>
  </section>
  )
}