import Hero from "./Hero";
import Footer from "../_components/Footer";
import Features from "./Features";
import AboutTestimonies from "./Testimonials";
import ContactCards from "./ContactCards";
import GetInTouch from "./GetInTouch";
export default function ContactUs() {
    return (
        <>
            <Hero />
            <div className="border-t border-gray-400 hidden sm:block"></div>
            <Features />
            <AboutTestimonies />
            <ContactCards />
            <GetInTouch />
            <Footer />
        </>
    );
}