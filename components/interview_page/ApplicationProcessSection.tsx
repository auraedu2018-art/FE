import React from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { DocumentTextIcon, KakaoTalkIcon, KeyboardIcon, CreditCardIcon, CheckCircleIcon, MagnifyingGlassIcon } from './Icons';

const ProcessStep: React.FC<{ icon: React.ReactNode; title: string; description: string; delay: string; }> = ({ icon, title, description, delay }) => {
    const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();
    return (
        <div ref={ref} className={`text-center p-6 bg-white rounded-xl border border-gray-200 shadow-lg scroll-reveal ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: delay }}>
            <div className="mx-auto w-16 h-16 mb-4 flex items-center justify-center bg-blue-100 rounded-full border-2 border-blue-200">
                {icon}
            </div>
            <h4 className="text-xl font-bold text-gray-800 mb-2">{title}</h4>
            <p className="text-gray-500">{description}</p>
        </div>
    );
};

const ApplicationProcessSection: React.FC = () => {
    const { ref: sectionRef, isVisible: sectionIsVisible } = useScrollAnimation<HTMLDivElement>();

    return (
        <section ref={sectionRef} className={`py-20 sm:py-32 scroll-reveal ${sectionIsVisible ? 'visible' : ''}`}>
             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl font-black text-gray-800 mb-4 break-keep">합격을 위한 마지막 기회, <span className="gradient-text">지금 신청하세요</span></h2>
                    <p className="max-w-3xl mx-auto text-lg text-gray-600">
                        아래 절차에 따라 신청해주세요.
                    </p>
                </div>
                
                <div className="grid md:grid-cols-3 gap-8">
                    <ProcessStep 
                        icon={<DocumentTextIcon className="w-8 h-8 text-blue-500" />}
                        title="1. 프로그램 선택"
                        description="자신에게 맞는 최적의 프로그램을 선택하고 신청합니다."
                        delay="0ms"
                    />
                    <ProcessStep 
                        icon={<CreditCardIcon className="w-8 h-8 text-blue-500" />}
                        title="2. 결제"
                        description="안내에 따라 결제를 진행하여 수강권을 확보합니다."
                        delay="150ms"
                    />
                    <ProcessStep 
                        icon={<KeyboardIcon className="w-8 h-8 text-blue-500" />}
                        title="3. 신청서 작성"
                        description="결제 후, 학생부 제출 및 사전 설문지를 작성합니다."
                        delay="300ms"
                    />
                     <ProcessStep 
                        icon={<CheckCircleIcon className="w-8 h-8 text-blue-500" />}
                        title="4. 신청완료"
                        description="모든 서류 제출이 확인되면 최종 신청 처리됩니다."
                        delay="450ms"
                    />
                    <ProcessStep 
                        icon={<MagnifyingGlassIcon className="w-8 h-8 text-blue-500" />}
                        title="5. 분석"
                        description="제출된 자료를 바탕으로 분석을 시작합니다."
                        delay="600ms"
                    />
                    <ProcessStep 
                        icon={<KakaoTalkIcon className="w-8 h-8 text-blue-500" />}
                        title="6. 자료 발송"
                        description="담당자가 수업 자료 및 일정을 안내합니다."
                        delay="750ms"
                    />
                </div>
            </div>
        </section>
    );
};

export default ApplicationProcessSection;