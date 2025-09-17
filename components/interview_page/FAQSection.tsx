import React from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const faqs = [
    {
        question: "열정스토리 면접 프로그램은 어떤 학생에게 필요한가요?",
        answer: "학생부 비중 축소로 면접의 중요성이 커지고 있습니다. 3년간의 활동을 논리적인 스토리로 연결하기 어렵거나, 기억나지 않는 내용을 설명해야 하는 학생, 압박/꼬리 질문에 자신 없는 학생 등 면접에 어려움을 느끼는 모든 수험생에게 최적의 솔루션을 제공합니다."
    },
    {
        question: "다른 면접 학원 프로그램과 무엇이 다른가요?",
        answer: "저희는 당일 30분 학생부를 보고 피드백하는 단기 프로그램이 아닙니다. 학생 개인마다 평균 5시간 이상을 투입하여, 기억나지 않는 내용까지 100% 복원하고 부족한 부분은 독서, 통계 자료 등으로 보강하여 이상적인 학생부로 재탄생시킵니다. 대치동 11년의 노하우와 전문가 그룹이 차원이 다른 깊이를 제공합니다."
    },
    {
        question: "프로그램은 어떻게 진행되고, 어떤 자료를 받게 되나요?",
        answer: "학생부 분석, 복원/보강을 거쳐 개인별 맞춤 레포트와 예상 질문/답변 스크립트를 제공합니다. 이를 바탕으로 MBC 기자 출신 원장님의 전략 강의를 수강하고, 서울대/의대 출신 팀장들과 실전처럼 연습 및 모의 면접을 진행합니다. 최신 이슈 자료집 등 면접에 필요한 모든 자료를 받으실 수 있습니다."
    },
    {
        question: "컨설턴트(모의 면접관)는 어떻게 배정되나요?",
        answer: "지원자의 대학/학과/전형과 학생부 특성을 고려하여 적합한 서울대 및 의대 출신 팀장과 모의 면접관이 함께합니다. MBC 기자 출신 조근주 원장님이 전체적인 전략을 총괄하며 최고의 전문가 그룹이 합격을 위해 함께합니다."
    },
    {
        question: "프로그램 신청은 어떻게 하나요?",
        answer: "본 프로그램은 소수 인원만 모집하여 재원생 및 지원상담자에게 우선적으로 기회가 제공됩니다. 지원 및 입금 순서에 따라 최종 인원이 확정되며, 조기 마감될 수 있습니다. 마감 전 신청을 서둘러주세요."
    }
];

const FaqItem: React.FC<{ question: string; answer: React.ReactNode | string }> = ({ question, answer }) => {
    return (
        <details className="group border-b border-gray-200 py-6 last:border-none">
            <summary className="flex items-center justify-between cursor-pointer">
                <div className="flex items-center">
                    <div className="flex-shrink-0 mr-4 flex items-center justify-center w-8 h-8 rounded-full bg-green-500">
                        <span className="text-white font-bold text-lg">Q</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">{question}</h3>
                </div>
                <div className="transform transition-transform duration-300 group-open:rotate-45">
                    <svg className="w-6 h-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v12m6-6H6" />
                    </svg>
                </div>
            </summary>
            <div className="mt-4 pl-12 text-gray-600 leading-relaxed bg-gray-50 p-4 rounded-lg">
                {answer}
            </div>
        </details>
    );
};

const FAQSection: React.FC = () => {
    const { ref: sectionRef, isVisible: sectionIsVisible } = useScrollAnimation<HTMLDivElement>();

    return (
        <section ref={sectionRef} className={`py-20 sm:py-32 scroll-reveal ${sectionIsVisible ? 'visible' : ''}`}>
             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl font-black text-gray-800 mb-4">
                        자주 묻는 <span className="gradient-text">질문</span>
                    </h2>
                </div>
                <div className="max-w-4xl mx-auto bg-white rounded-2xl p-4 sm:p-8 border border-gray-200 shadow-lg">
                    {faqs.map((faq, index) => (
                        <FaqItem key={index} question={faq.question} answer={faq.answer} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQSection;