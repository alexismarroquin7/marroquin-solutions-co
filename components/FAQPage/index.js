"use client";
import { ExpandMore } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import styles from "./index.module.css";

const page = {
  title: "Frequently Asked Questions (FAQ)",
  list: [
    {
      id: uuid(),
      title: "What is a Service Audit?",
      description: "Lorem upsum."
    }
  ]
}

export const FAQPage = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    setQuestions(page.list.map(item => { return {...item, open: false} }))
  }, []);

  return (
  <section
    className={styles.section}
  >
    <h1>{page.title}</h1>

    <div>
      {questions.map(q => {
        return (
          <div
            key={q.id}
          >

            <h3
              onClick={() => {
                setQuestions(questions.map(item => {
                  if(item.id === q.id){
                    item.open = !item.open;
                  }
                  return item;
                }))
              }}
            >
              {q.title}
              <ExpandMore
                fontSize="inherit"
                className={`${q.open ? styles.icon_open : styles.icon_closed}`}
              />
            </h3>
            
            <p
              className={`${styles.description} ${q.open ? "" : styles.description_hidden}`}
            >
              {q.description}
            </p>

          </div>
        )
      })}
    </div>
  </section>
  )
}