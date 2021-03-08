

const FaqItem = ({ faq }) => {
    return (
        <div className="faqs--item">
            <div className="faqs--item__top">
                <h6 className="faqs--item--question">{faq.question}</h6>
            </div>
            <div className="faqs--item__bot">
                <p className="faqs--item--answer">{faq.answer}</p>
            </div>
        </div>
    )
}

export default FaqItem