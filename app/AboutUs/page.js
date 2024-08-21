import Hero from "./Hero";
import Footer from "../_components/Footer";
import Features from "./Features";
import AboutTestimonies from "./Testimonials";
export default function ContactUs() {
    return (
        <>
            <Hero />
            <div className="border-t border-gray-400"></div>
            <Features />
            <AboutTestimonies />
            <Footer />
        </>
    );
}