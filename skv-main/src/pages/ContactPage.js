import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import ContactMap from "../components/contact/ContactMap";
import ContactForm from "../components/contact/ContactForm";
import FooterOne from "../common/footer/FooterOne";
import Header from '../common/header/Header';

const ContactPage = () => {
    return (
        <>
        <Header/>
            <Breadcrumb
                heading="Contact Us"
                currentPage="Contact Us"
                Img = "contact.png"
            />
            <ContactForm />
            <ContactMap />
            <FooterOne />
        </>
    )
}

export default ContactPage;