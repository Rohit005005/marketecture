import Hero from "./Hero";
import Footer from "../_components/Footer";
import Features from "./Features";
import AboutTestimonies from "./Testimonials";
import ContactCards from "./ContactCards";
import GetInTouch from "./GetInTouch";
export default function ContactUs() {
    return (
        <div className="overflow-x-hidden">
            <Hero />
            <Features />
            <AboutTestimonies />
            <ContactCards />
            <GetInTouch />
            <Footer />
        </div>
    );
}