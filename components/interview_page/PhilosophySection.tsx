import React from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

// --- Custom Icons for the 5-Step Process ---

const Step1Icon = () => ( // Analysis & Restoration
    <svg className="w-16 h-16 text-blue-500" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M36 12h-20c-2.2 0-4 1.8-4 4v32c0 2.2 1.8 4 4 4h32c2.2 0 4-1.8 4-4v-20" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M48 12l-14 14" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M24 32h16" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M24 40h8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

const Step2Icon = () => ( // Storytelling & Enhancement
    <svg className="w-16 h-16 text-blue-500" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="32" cy="32" r="8" stroke="currentColor" strokeWidth="3"/>
        <path d="M32 24V16" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
        <circle cx="32" cy="12" r="4" stroke="currentColor" strokeWidth="3"/>
        <path d="M22.5 22.5 L17 17" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="3"/>
        <path d="M41.5 22.5 L47 17" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
        <circle cx="52" cy="12" r="4" stroke="currentColor" strokeWidth="3"/>
        <path d="M32 40V48" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
        <circle cx="32" cy="52" r="4" stroke="currentColor" strokeWidth="3"/>
    </svg>
);

const Step3Icon = () => ( // Answer Design
    <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="12" y="12" width="40" height="40" rx="4" stroke="#3B82F6" strokeWidth="3"/>
    <text x="21" y="42" fontFamily="Pretendard, sans-serif" fontSize="24" fontWeight="bold" fill="#3B82F6">Q</text>
    <text x="37" y="42" fontFamily="Pretendard, sans-serif" fontSize="24" fontWeight="bold" fill="#F97316">A</text>
    </svg>
);

const Step4Icon = () => ( // Lecture & Resources
    <svg className="w-16 h-16 text-blue-500" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="16" width="44" height="28" rx="4" stroke="currentColor" strokeWidth="3"/>
        <path d="M26 26 l10 6 l-10 6 V26z" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M24 52 h16" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
        <path d="M32 44 V52" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
    </svg>
);

const Step5Icon = () => ( // Mock Interview
    <svg className="w-16 h-16 text-blue-500" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="32" cy="22" r="6" stroke="currentColor" strokeWidth="3"/>
    <path d="M42 44s-2-8-10-8-10 8-10 8" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
    <circle cx="16" cy="28" r="4" stroke="currentColor" strokeWidth="3"/>
    <path d="M22 42s-1-6-6-6-6 6-6 6" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
    <circle cx="48" cy="28" r="4" stroke="currentColor" strokeWidth="3"/>
    <path d="M54 42s-1-6-6-6-6 6-6 6" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
    </svg>
);


const PhilosophySection: React.FC = () => {
    const { ref: sectionRef, isVisible: sectionIsVisible } = useScrollAnimation<HTMLDivElement>();

    const steps = [
        {
            icon: <Step1Icon />,
            title: "1단계: 심층 분석 & 학생부 복원",
            description: "3년간의 학생부를 세밀 분석하고\n기억나지 않는 활동까지 완벽 복원"
        },
        {
            icon: <Step2Icon />,
            title: "2단계: 스토리텔링 & 역량 보강",
            description: "활동들을 횡적/종적으로 연결하고\n부족한 역량은 독서/자료로 보강"
        },
        {
            icon: <Step3Icon />,
            title: "3단계: 논리적 답변 설계",
            description: "자기소개부터 마지막 할 말까지\n면접의 흐름을 지배하는 만능 답변 설계"
        },
        {
            icon: <Step4Icon />,
            title: "4단계: 전략 강의 & 자료 제공",
            description: "MBC 기자 출신 원장의 합격 전략 강의와\n최신 이슈 등 핵심 자료 제공"
        },
        {
            icon: <Step5Icon />,
            title: "5단계: 실전 모의면접 & 피드백",
            description: "서울대/의대 출신 전문가와 실전처럼\n모의면접을 진행하고 최종 피드백으로 완성"
        }
    ];

    return (
        <section ref={sectionRef} className={`py-20 sm:py-32 bg-sky-50 scroll-reveal ${sectionIsVisible ? 'visible' : ''}`}>
             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl font-black mb-2 text-gray-800">
                        비교 불가 프로세스
                    </h2>
                     <h2 className="text-4xl sm:text-5xl font-black mb-4 text-gray-800">
                        합격을 위한 <span className="text-blue-600">5단계</span> 맞춤 설계
                    </h2>
                    <div className="inline-block w-24 h-1 bg-blue-600 rounded mt-2"></div>
                </div>
                
                <div className="max-w-xl mx-auto">
                    <div className="relative space-y-12">
                        {steps.map((step, index) => (
                            <div key={index} className={`relative z-10 transition-transform duration-500 hover:scale-105 scroll-reveal ${sectionIsVisible ? 'visible' : ''}`} style={{ transitionDelay: `${index * 150}ms` }}>
                                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-blue-600 text-white font-extrabold px-10 py-2 rounded-t-xl text-lg shadow-lg z-10" style={{ clipPath: 'polygon(10% 0, 90% 0, 100% 100%, 0% 100%)' }}>
                                    {` ${index + 1}단계 `}
                                </div>
                                <div className="bg-[#0B2447] text-white rounded-2xl p-8 pt-12 text-center shadow-2xl">
                                    <div className="flex justify-center mb-4">
                                        {step.icon}
                                    </div>
                                    <h3 className="text-3xl font-black mb-3 text-white break-keep">{step.title}</h3>
                                    <p className="text-lg text-gray-300 whitespace-pre-line">{step.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PhilosophySection;