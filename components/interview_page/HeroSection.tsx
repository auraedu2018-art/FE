import React from 'react';

interface HeroSectionProps {
    onScrollToPricing: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onScrollToPricing }) => {
    return (
        <div className="bg-[#0B2447] text-white pt-20 pb-10 md:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="mb-8">
                    <span className="inline-block bg-white text-[#0B2447] font-bold text-xl px-5 py-2 rounded-full">
                        열정스토리 입시컨설팅
                    </span>
                </div>
                <div className="text-xl md:text-2xl font-medium text-gray-300 mb-6 space-y-2">
                    <p>정확한 분석 / 학생부 내용 복원</p>
                    <p>모의면접까지 한번에</p>
                </div>
                <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black text-white leading-tight mb-8">
                    열정 프리미엄<br />
                    <span className="text-cyan-300">학생부 면접</span>
                </h1>
                <div className="flex justify-center mb-10">
                    <img src="https://i.ibb.co/6g04CjN/folder-icon.png" alt="서류 폴더 아이콘" className="w-40 h-40" />
                </div>
                <button
                    onClick={onScrollToPricing}
                    className="inline-block bg-white text-[#0B2447] font-bold text-lg py-4 px-12 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
                >
                    프로그램 신청하기
                </button>
            </div>
        </div>
    );
};

export default HeroSection;