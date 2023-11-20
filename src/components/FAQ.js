import React, { useRef } from "react";
import "../assets/ComponentDesign/FAQ.css"
import data from '../assets/cms/faqs.json'

export default function FAQ() {
    return (
        <div className='container'>
            <h1 className="headings">FAQs</h1>
            <div className="q-container">
                {data.map(item => (
                    <FAQCard question={item.question} answer={item.answer} />
                ))}
            </div>
        </div >
    )
}

function FAQCard({ question, answer }) {
    const answerRef = useRef(null);
    const iconRef = useRef(null);

    return (
        <div onClick={toggleDropdown} className="question">
            <div className="q-heading">
                <h2>{question}</h2>
                <svg ref={iconRef} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" className="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>

            </div>
            <p ref={answerRef} className="answer">{answer}</p>
        </div>
    )

    function toggleDropdown() {
        const answer = answerRef.current;
        const icon = iconRef.current;
        console.log(question)
        console.log(answer)
        console.log(icon)
        if (answer.style.maxHeight) {
            answer.style.maxHeight = null
            icon.setAttribute("transform", "rotate(0)")
        } else {
            answer.setAttribute("style", `max-height: ${answer.scrollHeight}px`)
            icon.setAttribute("transform", "rotate(-90)")
        }
    }
}