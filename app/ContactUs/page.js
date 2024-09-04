import Hero from "./Hero";
import Form from "./Form";
import Location from "./Location";
import Footer from "../_components/Footer";
export default function ContactUs() {
    return (
        <div className="overflow-x-hidden">
            <Hero />
            <Form />
            <Location />
            <Footer />
        </div>
    );
}