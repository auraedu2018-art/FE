import React, { useState, useEffect, useCallback, useRef } from 'react';
import { HERO_SLIDES } from '../constants';
import ChevronLeftIcon from './icons/ChevronLeftIcon';
import ChevronRightIcon from './icons/ChevronRightIcon';
import PlayIcon from './icons/PlayIcon';
import PauseIcon from './icons/PauseIcon';

interface HeroCarouselProps {
    onSelectCategory: (category: string) => void;
}

const DURATION = 7000;

const HeroCarousel: React.FC<HeroCarouselProps> = ({ onSelectCategory }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true);
    const [progress, setProgress] = useState(0);
    const timerRef = useRef<number | null>(null);
    const progressRef = useRef<number | null>(null);

    const totalSlides = HERO_SLIDES.length;

    const startTimer = useCallback(() => {
        stopTimer();
        timerRef.current = window.setTimeout(() => {
            setCurrentIndex((prev) => (prev + 1) % totalSlides);
        }, DURATION);
        
        setProgress(0);
        const startTime = Date.now();
        progressRef.current = window.setInterval(() => {
            const elapsedTime = Date.now() - startTime;
            const newProgress = (elapsedTime / DURATION) * 100;
            if (newProgress >= 100) {
                setProgress(100);
                if(progressRef.current) clearInterval(progressRef.current);
            } else {
                setProgress(newProgress);
            }
        }, 50);

    }, [totalSlides]);
    
    const stopTimer = () => {
        if (timerRef.current) clearTimeout(timerRef.current);
        if (progressRef.current) clearInterval(progressRef.current);
    };

    useEffect(() => {
        if (isPlaying) {
            startTimer();
        } else {
            stopTimer();
        }
        return stopTimer;
    }, [currentIndex, isPlaying, startTimer]);
    
    useEffect(() => {
        setProgress(0);
    }, [currentIndex]);

    const handlePrev = useCallback(() => {
        setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
    }, [totalSlides]);

    const handleNext = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % totalSlides);
    }, [totalSlides]);

    const handleSlideClick = (index: number) => {
        if (index !== currentIndex) {
            setCurrentIndex(index);
        }
    };

    const handlePlayPause = () => {
        setIsPlaying(!isPlaying);
    };

    const radius = 16;
    const circumference = 2 * Math.PI * radius;
    const progressOffset = circumference - (progress / 100) * circumference;

    return (
        <section className="py-8" aria-label="메인 배너">
            <div className="relative group">
                <div className="overflow-hidden">
                    <div
                        className="flex items-center transition-transform duration-700 ease-in-out"
                        style={{
                            // Centers the active slide (w-6/12) and accounts for the gap (1.5rem)
                            transform: `translateX(calc((100% * 1 / 4) - ${currentIndex} * (100% * 6 / 12 + 1.5rem)))`
                        }}
                    >
                        {HERO_SLIDES.map((slide, index) => (
                            <div
                                key={slide.title + index}
                                className="w-6/12 flex-shrink-0 px-3"
                                onClick={() => handleSlideClick(index)}
                            >
                                <div
                                    className={`relative h-[400px] w-full overflow-hidden rounded-2xl shadow-lg transition-all duration-500 ${
                                        currentIndex === index ? 'opacity-100 scale-100' : 'opacity-60 scale-90'
                                    } ${currentIndex !== index ? 'cursor-pointer' : ''}`}
                                    aria-hidden={index !== currentIndex}
                                >
                                    <img src={slide.imageUrl} alt={slide.title} className="w-full h-full object-cover" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                                    <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end text-white text-left">
                                       <div className="max-w-xl">
                                            <span className="text-sm font-bold bg-black/30 px-3 py-1 rounded-full">{slide.subtitle}</span>
                                            <h2 className="text-3xl md:text-4xl font-extrabold mt-3 leading-tight">{slide.title}</h2>
                                            <p className="mt-2 text-slate-200">{slide.description}</p>
                                            <button
                                                onClick={() => onSelectCategory(slide.category)}
                                                className="mt-6 text-sm font-semibold bg-white text-slate-800 px-5 py-2.5 rounded-md hover:bg-slate-200 transition-colors"
                                            >
                                                {slide.ctaText}
                                            </button>
                                       </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Left/Right Controls on Hover */}
                <button onClick={handlePrev} className="absolute top-1/2 left-4 -translate-y-1/2 p-2 rounded-full bg-black/40 text-white hover:bg-black/50 transition-opacity opacity-0 group-hover:opacity-100 z-20" aria-label="이전 슬라이드">
                    <ChevronLeftIcon className="w-6 h-6" />
                </button>
                <button onClick={handleNext} className="absolute top-1/2 right-4 -translate-y-1/2 p-2 rounded-full bg-black/40 text-white hover:bg-black/50 transition-opacity opacity-0 group-hover:opacity-100 z-20" aria-label="다음 슬라이드">
                    <ChevronRightIcon className="w-6 h-6" />
                </button>

                {/* Bottom Controls */}
                <div className="absolute bottom-6 left-12 z-20 flex items-center space-x-3">
                    <div className="text-white text-sm font-mono bg-black/40 px-2 py-1.5 rounded-full flex items-center">
                        <button onClick={handlePlayPause} className="mr-2" aria-label={isPlaying ? "슬라이드 정지" : "슬라이드 재생"}>
                           <div className="relative w-5 h-5 flex items-center justify-center">
                               {/* Progress Circle SVG */}
                               <svg className="absolute w-full h-full -rotate-90" viewBox="0 0 36 36">
                                  <circle cx="18" cy="18" r={radius} className="stroke-white/30" strokeWidth="2" fill="transparent" />
                                  {isPlaying && (
                                    <circle
                                      cx="18"
                                      cy="18"
                                      r={radius}
                                      className="stroke-white"
                                      strokeWidth="2"
                                      fill="transparent"
                                      strokeDasharray={circumference}
                                      strokeDashoffset={progressOffset}
                                      strokeLinecap="round"
                                      style={{ transition: progress === 0 ? 'none' : 'stroke-dashoffset 0.1s linear' }}
                                    />
                                  )}
                                </svg>
                                {/* Play/Pause Icon */}
                                {isPlaying ? <PauseIcon className="w-3.5 h-3.5" /> : <PlayIcon className="w-3.5 h-3.5" />}
                           </div>
                        </button>
                        <span>{String(currentIndex + 1).padStart(2, '0')}</span>
                        <span className="opacity-50 mx-1">/</span>
                        <span className="opacity-50">{String(totalSlides).padStart(2, '0')}</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroCarousel;