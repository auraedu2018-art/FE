import React from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const questions = [
    "내 생기부에서 어떤 질문이 나올까?",
    "기억도 안나는 1학년 때 활동, 어떻게 설명하지?",
    "내 활동을 어떻게 전공과 연결해야 할까?",
    "꼬리 질문까지 완벽하게 답변할 자신이 없어요...",
    "내향적이라 면접이 겁나요...",
    "수능최저 준비로 학생부 복기할 시간이 없어요.."
];

const RealitySection: React.FC = () => {
    const { ref: sectionRef, isVisible: sectionIsVisible } = useScrollAnimation<HTMLDivElement>();

    return (
        <section ref={sectionRef} className={`py-20 sm:py-28 bg-white scroll-reveal ${sectionIsVisible ? 'visible' : ''}`}>
             <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-4xl sm:text-5xl font-black text-gray-800 mb-4 break-keep">
                    혹시, 이런 고민 하고 있나요?
                </h2>
                <p className="text-xl text-gray-600 mb-16 break-keep">
                    매년 수많은 수험생들이 겪는 면접의 어려움입니다.
                </p>
                <div className="space-y-6">
                    {questions.map((q, index) => (
                        <div key={index} className={`bg-white p-6 rounded-2xl shadow-lg border border-gray-100 scroll-reveal ${sectionIsVisible ? 'visible' : ''}`} style={{ transitionDelay: `${index * 100}ms` }}>
                            <p className="text-xl md:text-2xl font-bold text-gray-700 break-keep">{q}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-20 bg-blue-50 p-8 sm:p-12 rounded-2xl border-2 border-blue-400 shadow-lg relative">
                    <div className="absolute -top-3 -left-3 w-10 h-10 border-t-4 border-l-4 border-blue-400 rounded-tl-xl"></div>
                    <div className="absolute -bottom-3 -right-3 w-10 h-10 border-b-4 border-r-4 border-blue-400 rounded-br-xl"></div>
                    
                    <h3 className="text-3xl sm:text-4xl font-black text-gray-800 mb-6 break-keep">
                        그래서 준비했습니다.
                    </h3>
                    <p className="text-lg sm:text-xl text-gray-700 leading-relaxed break-keep">
                        열정스토리의 <span className="font-extrabold text-blue-600">11년 전통 노하우</span>로
                        <br/>
                        생기부 내용 복기부터 질문-답변까지 <span className="font-extrabold text-blue-600">All-In-One</span>으로 해결해 드립니다.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default RealitySection;