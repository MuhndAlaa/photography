import { useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Typical from 'react-typical';
import "./header.css"
export function Header() {

    let currentSlide = 0;

    function nextSlide() {
        var slides = document.querySelectorAll("#slides .slide");
        slides[currentSlide].classList.remove("showing");
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add("showing");
    }

    function prevSlide() {
        var slides = document.querySelectorAll("#slides .slide");
        if (currentSlide > 0) {
            slides[currentSlide].classList.remove("showing");
            currentSlide = (currentSlide - 1) % slides.length;
            slides[currentSlide].classList.add("showing");
        } else {
            slides[0].classList.remove("showing");
            currentSlide = 2;
            slides[currentSlide].classList.add("showing");
        }
    }

    useEffect(() => {
        let slideInterval = setInterval(prevSlide, 20000);
        return () => {
            clearInterval(slideInterval);
        }
    })
    return (
        <>
            <div className="wrapper">
                <header>
                    <div className="headline">
                        <h1><Typical
                            steps={['Hello There', 1000, 'I\'m Elsawy photography', 1000]}
                            loop={Infinity}
                            wrapper="p"
                        /></h1>
                    </div>
                    <ul id="slides" className="slides">
                        <li className="slide slide1 showing"></li>
                        <li className="slide slide2"></li>
                        <li className="slide slide3"></li>
                        <div className="buttons">
                            <button className="arrow arrow-next" onClick={nextSlide}><FaArrowLeft /></button>
                            <button className="arrow arrow-prev" onClick={prevSlide}><FaArrowRight /></button>
                        </div>
                    </ul>
                </header>
            </div>
        </>
    )
}