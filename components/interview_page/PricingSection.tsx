import React from 'react';
import type { InterviewProduct } from '../../types';
import { INTERVIEW_PRODUCTS } from '../../constants';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { DocumentTextIcon, CheckCircleIcon, GraduationCapIcon, BookIcon, ChartBarIcon, StarInCircleIcon } from './Icons';

interface PricingSectionProps {
    selectedProduct: InterviewProduct | null;
    onSelectProduct: (product: InterviewProduct) => void;
    onPurchase: () => void;
}

const Stepper = () => {
    const steps = [
        { number: 1, title: '프로그램 선택', active: true },
        { number: 2, title: '결제', active: false },
        { number: 3, title: '신청서 작성', active: false },
        { number: 4, title: '신청 완료', active: false },
    ];
    return (
        <div className="flex items-center justify-center w-full max-w-2xl mx-auto mb-12">
            {steps.map((step, index) => (
                <React.Fragment key={step.number}>
                    <div className="flex flex-col items-center text-center">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl ${step.active ? 'bg-purple-600 text-white' : 'bg-gray-200 text-gray-500'}`}>
                            {step.number}
                        </div>
                        <p className={`mt-2 font-semibold text-sm ${step.active ? 'text-purple-600' : 'text-gray-500'}`}>{step.title}</p>
                    </div>
                    {index < steps.length - 1 && (
                        <div className="flex-auto border-t-2 border-dashed border-gray-300 mx-4"></div>
                    )}
                </React.Fragment>
            ))}
        </div>
    );
};

const PricingCard: React.FC<{
    icon: React.ReactNode;
    title: string;
    description: string;
    price: number | undefined;
    priceText: string;
    features: string[];
    isSelected: boolean;
    onSelect: () => void;
    type: 'purchase' | 'inquiry';
}> = ({ icon, title, description, priceText, features, isSelected, onSelect, type }) => {
    const iconContainerClasses = type === 'inquiry' 
        ? "bg-slate-100 p-3 rounded-xl text-slate-500 inline-block" 
        : "bg-purple-100 p-3 rounded-xl text-purple-600 inline-block";

    return (
        <div
            onClick={onSelect}
            className={`bg-white p-6 rounded-2xl border ${isSelected ? 'border-purple-600 border-2' : 'border-gray-200'} shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col relative cursor-pointer`}
        >
            {isSelected && (
                <div className="absolute top-4 right-4 bg-purple-600 text-white rounded-full p-0.5 w-6 h-6 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                </div>
            )}
            <div className="flex items-start space-x-4 mb-4">
                <div className={iconContainerClasses}>{icon}</div>
                <div>
                    <h3 className="text-xl font-bold text-gray-800">{title}</h3>
                    <p className="text-sm text-gray-500 mt-1">{description}</p>
                </div>
            </div>
            <div className="my-2">
                <span className={`font-semibold text-gray-900 ${priceText === "별도 문의" ? 'text-lg' : 'text-2xl'}`}>{priceText}</span>
            </div>
            <ul className="space-y-2.5 text-gray-600 text-sm flex-grow">
                {features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                        <CheckCircleIcon className="w-5 h-5 mr-2 text-purple-500 flex-shrink-0 mt-0.5" />
                        <span className={(feature === '강의 포함' || feature === '배경자료집 포함') ? 'font-bold text-purple-600' : ''}>
                            {feature}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

const PricingSection: React.FC<PricingSectionProps> = ({ selectedProduct, onSelectProduct, onPurchase }) => {
    const { ref: sectionRef, isVisible: sectionIsVisible } = useScrollAnimation<HTMLDivElement>();

    const iconMap: { [key: number]: React.ReactNode } = {
        1: <StarInCircleIcon className="w-8 h-8"/>,
        2: <GraduationCapIcon className="w-8 h-8"/>,
        3: <DocumentTextIcon className="w-8 h-8"/>,
        4: <StarInCircleIcon className="w-8 h-8"/>,
        5: <BookIcon className="w-8 h-8"/>,
        6: <ChartBarIcon className="w-8 h-8"/>,
    };

    const isProgramSelected = !!selectedProduct;

    return (
        <section id="pricing" ref={sectionRef} className={`py-20 sm:py-32 scroll-reveal ${sectionIsVisible ? 'visible' : ''}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl font-black text-gray-800 mb-4">
                        나에게 맞는 <span className="gradient-text">면접 프로그램</span>을 선택하세요
                    </h2>
                    <p className="max-w-3xl mx-auto text-lg text-gray-600">
                        면접 프로그램 A/B, 면접용 레포트에는 강의 및 배경지식 자료집이 포함되어 있습니다.
                    </p>
                </div>

                <Stepper />
                
                <p className="text-center text-sm text-gray-500 mb-12">
                  * 결제 후, 학생부 제출 및 사전 설문지 작성을 모두 완료해야 최종 신청 처리됩니다.
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {INTERVIEW_PRODUCTS.map((prog) => (
                        <PricingCard 
                            key={prog.id}
                            icon={iconMap[prog.id] || <StarInCircleIcon className="w-8 h-8"/>}
                            title={prog.title}
                            description={prog.description}
                            price={prog.price}
                            priceText={prog.price ? `${prog.price.toLocaleString()}원` : "별도 문의"}
                            features={prog.features}
                            isSelected={selectedProduct?.id === prog.id}
                            onSelect={() => onSelectProduct(prog)}
                            type={prog.type}
                        />
                    ))}
                </div>

                <div className="text-center mt-16">
                     <button
                        onClick={onPurchase}
                        disabled={!isProgramSelected}
                        aria-disabled={!isProgramSelected}
                        role="button"
                        className={`inline-block font-bold py-4 px-16 rounded-lg transition-all duration-300 text-lg ${
                            isProgramSelected
                            ? 'bg-purple-600 text-white hover:bg-purple-700 shadow-lg shadow-purple-500/20 transform hover:scale-105'
                            : 'bg-slate-300 text-slate-500 cursor-not-allowed'
                        }`}
                    >
                        {isProgramSelected ? `${selectedProduct.title} 신청하기` : '프로그램을 선택해주세요'}
                    </button>
                </div>
            </div>
        </section>
    );
};

export default PricingSection;