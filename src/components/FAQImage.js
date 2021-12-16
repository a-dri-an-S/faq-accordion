import bg_mobile_img from '../assets/bg-pattern-mobile.svg';
import bg_desktop_img from '../assets/bg-pattern-desktop.svg';
import mobile_img from '../assets/illustration-woman-online-mobile.svg';
import desktop_img from '../assets/illustration-woman-online-desktop.svg';
import desktop_box_img from '../assets/illustration-box-desktop.svg';


const FAQImage = () => {
    return (
        <div>
            <img src={mobile_img} alt="mobile-img"/>
            <img src={bg_mobile_img} alt="bg-mobile-img"/>
        </div>
    );
}

export default FAQImage;