import React from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

interface FinalCTASectionProps {
    onScrollToPricing: () => void;
}

const FinalCTASection: React.FC<FinalCTASectionProps> = ({ onScrollToPricing }) => {
    const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();
    return (
        <section id="final-cta" ref={ref} className={`w-full py-20 sm:py-24 bg-gradient-to-r from-blue-400 to-indigo-500 scroll-reveal ${isVisible ? 'visible' : ''}`}>
            <div className="max-w-4xl mx-auto text-center px-4">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-6 break-keep">
                    당신의 3년은 합격할 자격이 충분합니다.
                    <br />
                    열정스토리가 그 가치를 증명하겠습니다.
                </h2>
                <button
                    onClick={onScrollToPricing}
                    className="inline-block bg-orange-400 text-white font-bold text-xl py-5 px-12 rounded-full shadow-2xl shadow-black/20 hover:bg-orange-500 hover:scale-110 transform transition-all duration-300 ease-in-out"
                >
                    <span className="break-keep">[마감 임박] 지금 바로 내 자리 확보하기</span>
                </button>
            </div>
        </section>
    );
};

export default FinalCTASection;