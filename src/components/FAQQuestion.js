import arrow_img from '../assets/icon-arrow-down.svg';

const FAQAccordion = ({ data }) => {
    console.log(data);

    return (
        <div>
            <div>
                <p>{data.question}</p>
                <button><img src={arrow_img} alt="down-arrow"/></button>
            </div>
            <p>{data.answer}</p>
        </div>
    );
}

export default FAQAccordion;