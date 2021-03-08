import Container from "../Container";
import Faq from "react-faq-component";
const data = {
  title: "Frequently Asked Questions",
  rows: [
    {
      title:
        "How long does it take to set up a webstore? How long does it run?",
      content:
        "Our goal is to be able to launch webstores for users within 2 business days of the completion and approval of their shirt's graphic preview. This will depend on the volume of requests received, but we will do our best to ensure it is a quick and smooth process! Webstores can be live for your choice of 7 or 14 days, in which your supporters can purchase your t-shirt. At the end of the campaign, your store will be closed and we will print all of the shirts that have been ordered in one production run. Orders are printed within 5-7 business days after the fundraiser close date, and shipped directly to your supporters after production is complete.",
    },
    {
      title: "How will I get paid for the shirts that I sell?",
      content:
        "Upon the campaign's completion and the closure of the store, we will print and ship the shirts that have been ordered. As soon as the production run is complete, you will receive a check by mail/pickup for $10 per shirt sold.",
    },
    {
      title: "How will my supporters receive their shirts?",
      content:
        "All individual shirts will be shipped directly to your supporters. We are able to ship products across the United States, however we presently do not offer international shipments for our webstores.",
    },
    {
      title: "How do I send you my logo? What format is best suited?",
      content:
        "Logos and designs can be sent to us via email at orders@thinkpro.net. Vector files (.AI or .EPS) are preferred but high resolution .JPEG's, .PNG's, and .PDF's are also acceptable. Please note that shirts for fundraising campaigns are being printed in one ink color.",
    },
    {
      title: "I don't have a design, can you help me design one?",
      content:
        "Yes we can! Let our team know in the questions and comments section of your submission and we can create a custom design for your fundraiser.",
    },
    {
      title:
        "May we keep the custom design that THINK created for our fundraiser once it ends?",
      content:
        "YES! We will have this design available should you want to print more shirts with us. Or you can outright purchase the design files at $65 per placement to use on your own.",
    },
    {
      title: "How should I promote my webstore?",
      content:
        "Social media sites like Facebook, Twitter and Instagram are a great start. Reaching out to your clients, friends and supporters directly via email or phone can also be a help. We have a handy flyer that outlines ways to have a successful campaign.",
    },
    {
      title: "What payment methods are accepted on the online webstores?",
      content:
        "Our webstores accept Paypal, Visa and Mastercard for payment options. All payments are accepted securely through Paypal's payment processing system.",
    },
    {
      title: "How does your sizing run?",
      content:
        "Our t-shirts do run true to normal market sizing, however we ask that customers be sure to check the sizing chart list on the shirts product page to be sure. As these shirts are cotton based, some shrinkage when washed in hot water is normal. For best results and minimal shrinkage, wash in cold water and air dry.",
    },
    {
      title: "Do you have ladies or youth sizes available?",
      content:
        "Our t-shirts for fundraising stores are available in adult unisex sizing and youth sizing in most colours. You can verify availability of a colour in youth sizing with our team before the launch of your store.",
    },
    {
      title: "What is your return policy?",
      content:
        "Returns are not accepted on custom printed garments unless an item is defective (error in print or garment construction). Customers must notify TH!NK PRO of any defects or misprints requiring a return within 5 business days of receiving their order.",
    },
    {
      title:
        "What are you doing to ensure this process is safe and to avoid the spread of COVID-19?",
      content:
        "We have split our departments and shifts to insure that there is plenty of physical distancing between work stations. We have reduced our hours and have made our office available for pick up and drop off only. Additionally, shared surfaces are being sanitized several times daily during production and remaining team members are putting a strong emphasis on hand washing.",
    },
    {
      title: "How can I get in touch with you if I have more questions?",
      content:
        "We can be reached for questions and inquiries through the contact page on our website or via email at orders@thinkpro.net",
    },
  ],
};

const styles = {
    titleTextColor: "#3e3e3e",
    bgColor: "#f0f0f0",
    rowTitleColor: "#20a9af",
    rowContentColor: '#3e3e3e'
}

// const config = {
//     animate: true
// }

const Faqs = (props) => {
  return (
    <Container>
      <div className="faqs">

        <section className="faqs--list">
            <img src="/girl-thinking.png" alt="A girl contemplating Think frequently asked questions."/>
          {/* {faqs.map((faq, i) => (
            <div className="faqs--item__wrapper" key={i}>
              <FaqItem faq={faq} />
            </div>
          ))} */}
          <Faq 
            data={data}
            styles={styles}
          />
        </section>
      </div>
    </Container>
  );
};

export default Faqs;
