import FAQQuestion from './FAQQuestion';
import { data } from '../data';


const FAQAccordion = () => {
    return (
        <div>
            <h1>FAQ</h1>
            {data.map((qa, i) => {
                return <FAQQuestion key={i} data={qa}/>
            })}
        </div>
    );
}

export default FAQAccordion;