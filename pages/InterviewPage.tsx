import React, { useState, useRef } from 'react';
import type { InterviewProduct } from '../types';
import { INTERVIEW_PRODUCTS } from '../constants';
import Button from '../components/Button';
import PaymentModal from '../components/PaymentModal';
import CheckCircleIcon from '../components/icons/CheckCircleIcon';
import BrainIcon from '../components/icons/BrainIcon';
import DocumentTextIcon from '../components/icons/DocumentTextIcon';
import AcademicCapIcon from '../components/icons/AcademicCapIcon';
import VideoCameraIcon from '../components/icons/VideoCameraIcon';
import UserGroupIcon from '../components/icons/UserGroupIcon';

interface InterviewPageProps {
    isLoggedIn: boolean;
    onLoginRequest: () => void;
    onPaymentComplete: (product: InterviewProduct) => void;
}

const InterviewProductCard: React.FC<{
    product: InterviewProduct,
    isSelected: boolean,
    onSelect: () => void,
}> = ({ product, isSelected, onSelect }) => {
    return (
        <button
            onClick={onSelect}
            className={`bg-white p-6 rounded-xl border-2 text-left transition-all duration-300 w-full h-full flex flex-col ${
                isSelected ? 'border-brand shadow-lg scale-105' : 'border-slate-200 hover:border-brand-light hover:shadow-md'
            } ${product.type === 'inquiry' ? 'bg-slate-50' : ''}`}
        >
            <div className="flex items-start justify-between">
                <div className={`p-3 rounded-lg ${product.type === 'inquiry' ? 'bg-slate-200' : 'bg-brand-light'}`}>
                    <product.icon className={`w-8 h-8 ${product.type === 'inquiry' ? 'text-slate-600' : 'text-brand'}`} />
                </div>
                {isSelected && <CheckCircleIcon className="w-7 h-7 text-brand" />}
            </div>
            <div className="mt-4 flex-grow">
                <h3 className="font-bold text-xl text-slate-800">{product.title}</h3>
                <p className="text-sm text-slate-500 mt-2 flex-grow">{product.description}</p>
                 {product.price && (
                    <p className="text-2xl font-bold text-slate-900 mt-4">{product.price.toLocaleString()}원</p>
                 )}
                 {product.type === 'inquiry' && (
                     <p className="text-lg font-bold text-slate-700 mt-4">별도 문의</p>
                 )}
            </div>
             <ul className="mt-4 space-y-2 text-sm text-slate-600">
                {product.features.map(feature => {
                    const isHighlighted = feature === '강의 포함' || feature === '배경자료집 포함';
                    return (
                        <li key={feature} className="flex items-start gap-2">
                            <CheckCircleIcon className={`w-4 h-4 mt-0.5 flex-shrink-0 ${product.type === 'inquiry' ? 'text-slate-400' : 'text-brand'}`} />
                            <span className={isHighlighted ? 'font-bold text-brand' : ''}>{feature}</span>
                        </li>
                    );
                })}
            </ul>
        </button>
    );
};

const FeatureCard: React.FC<{icon: React.ElementType, title: string, description: string}> = ({icon: Icon, title, description}) => (
    <div className="bg-white p-6 rounded-lg border border-slate-200">
        <div className="bg-brand-light p-3 rounded-full w-fit">
            <Icon className="h-7 w-7 text-brand-600" />
        </div>
        <h3 className="text-lg font-bold text-slate-800 mt-4">{title}</h3>
        <p className="text-sm text-slate-600 mt-2 leading-relaxed">{description}</p>
    </div>
);

const InterviewPage: React.FC<InterviewPageProps> = ({ isLoggedIn, onLoginRequest, onPaymentComplete }) => {
    const [selectedProduct, setSelectedProduct] = useState<InterviewProduct | null>(null);
    const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
    const productSectionRef = useRef<HTMLDivElement>(null);

    const handleSelectProduct = (product: InterviewProduct) => {
        if (product.type === 'inquiry') {
            alert('해당 상품은 별도 문의가 필요합니다. 고객센터로 연락주세요.');
            setSelectedProduct(null);
            return;
        }
        setSelectedProduct(product);
    };

    const handlePurchase = () => {
        if (!selectedProduct) {
            alert('먼저 프로그램을 선택해주세요.');
            return;
        }
        if (!isLoggedIn) {
            onLoginRequest();
        } else {
            setIsPaymentModalOpen(true);
        }
    };
    
    const handlePaymentSuccess = () => {
        if (!selectedProduct) return;
        setIsPaymentModalOpen(false);
        onPaymentComplete(selectedProduct);
    };

    const scrollToProducts = () => {
        productSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <div className="bg-brand-light py-20">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
                        ‘명불허전’ 열정 프리미엄 면접 프로그램
                    </h1>
                    <p className="mt-6 text-lg text-slate-600 max-w-3xl mx-auto">
                        최근 학생부 축소 등으로 면접 비중이 강화되고 있습니다. S-class는 3년간의 활동을 횡적, 종적으로 연결하여 어떤 질문이든지 유려하게 답변할 수 있도록, 합격을 위한 가장 확실한 길을 제시합니다.
                    </p>
                    <div className="mt-10">
                        <Button onClick={scrollToProducts}>
                            프로그램 확인하기
                        </Button>
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <div className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-12">
                         <h2 className="text-3xl font-bold text-slate-800">
                            비교를 거부하는 S-class만의 압도적 차이
                         </h2>
                         <p className="mt-4 text-slate-500 max-w-2xl mx-auto leading-relaxed">
                           단순히 30분 보고 지도하는 면접 프로그램이 아닙니다. <br /> 대치동 11년의 노하우와 데이터로 당신의 합격 스토리를 만듭니다.
                         </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <FeatureCard 
                            icon={DocumentTextIcon}
                            title="학생부 내용 복원+보강"
                            description="기억나지 않는 책, 보고서 내용까지 자세히 복원하고, 부족한 독서/선행연구/통계 자료까지 보강하여 완벽한 논리를 만듭니다."
                        />
                         <FeatureCard 
                            icon={BrainIcon}
                            title="횡적·종적 마인드맵 분석"
                            description="3년간의 학생부 세특·창체·행특을 철저히 분석하고, 모든 활동을 횡적·종적으로 연결하여 활동의 연계성을 정리해드립니다."
                        />
                         <FeatureCard 
                            icon={AcademicCapIcon}
                            title="SKY-의대 출신 모의 면접관"
                            description="서울대, 의대 출신 팀장과 모의 면접관이 동기와 논거를 확실하게 답변하는 법을 꼼꼼하고 자세하게 가르치고 연습시킵니다."
                        />
                         <FeatureCard 
                            icon={VideoCameraIcon}
                            title="합격 스토리 설계"
                            description="자기소개부터 동기, 과정, 성취, 심화발전의 스토리로 답변을 구성하여 대학이 원하는 우수성을 200% 어필할 수 있도록 만듭니다."
                        />
                    </div>
                </div>
            </div>

            {/* Product Selection Section */}
            <div ref={productSectionRef} className="py-24 bg-slate-50">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-slate-800">
                            나에게 맞는 면접 프로그램을 선택하세요
                        </h2>
                        <p className="mt-4 text-slate-500">
                            모든 프로그램에는 강의 및 배경지식 자료집이 포함되어 있습니다.
                        </p>
                        
                        <div className="mt-16 max-w-4xl mx-auto">
                            {/* Desktop View */}
                            <div className="hidden md:flex items-center">
                                {/* Step 1 */}
                                <div className="flex-shrink-0 text-center w-28">
                                    <div className="w-16 h-16 mx-auto bg-brand text-white rounded-full flex items-center justify-center font-bold text-2xl shadow-lg">1</div>
                                    <p className="mt-3 text-base font-semibold text-brand">프로그램 선택</p>
                                </div>

                                {/* Connector */}
                                <div className="flex-auto border-t-2 border-dashed border-slate-300"></div>

                                {/* Step 2 */}
                                <div className="flex-shrink-0 text-center w-28">
                                    <div className="w-16 h-16 mx-auto bg-slate-200 text-slate-500 rounded-full flex items-center justify-center font-bold text-2xl">2</div>
                                    <p className="mt-3 text-base font-semibold text-slate-500">결제</p>
                                </div>

                                {/* Connector */}
                                <div className="flex-auto border-t-2 border-dashed border-slate-300"></div>

                                {/* Step 3 */}
                                <div className="flex-shrink-0 text-center w-28">
                                    <div className="w-16 h-16 mx-auto bg-slate-200 text-slate-500 rounded-full flex items-center justify-center font-bold text-2xl">3</div>
                                    <p className="mt-3 text-base font-semibold text-slate-500">신청서 작성</p>
                                </div>
                                
                                {/* Connector */}
                                <div className="flex-auto border-t-2 border-dashed border-slate-300"></div>

                                {/* Step 4 */}
                                <div className="flex-shrink-0 text-center w-28">
                                    <div className="w-16 h-16 mx-auto bg-slate-200 text-slate-500 rounded-full flex items-center justify-center font-bold text-2xl">4</div>
                                    <p className="mt-3 text-base font-semibold text-slate-500">신청 완료</p>
                                </div>
                            </div>
                            {/* Mobile View */}
                            <div className="md:hidden grid grid-cols-2 gap-x-4 gap-y-8">
                                {/* Step 1 */}
                                <div className="flex items-center justify-center">
                                    <div className="text-center w-28">
                                        <div className="w-16 h-16 mx-auto bg-brand text-white rounded-full flex items-center justify-center font-bold text-2xl shadow-lg">1</div>
                                        <p className="mt-3 text-sm font-semibold text-brand">프로그램 선택</p>
                                    </div>
                                </div>
                                {/* Step 2 */}
                                <div className="flex items-center justify-center">
                                    <div className="text-center w-28">
                                        <div className="w-16 h-16 mx-auto bg-slate-200 text-slate-500 rounded-full flex items-center justify-center font-bold text-2xl">2</div>
                                        <p className="mt-3 text-sm font-semibold text-slate-500">결제</p>
                                    </div>
                                </div>
                                {/* Step 3 */}
                                <div className="flex items-center justify-center">
                                    <div className="text-center w-28">
                                        <div className="w-16 h-16 mx-auto bg-slate-200 text-slate-500 rounded-full flex items-center justify-center font-bold text-2xl">3</div>
                                        <p className="mt-3 text-sm font-semibold text-slate-500">신청서 작성</p>
                                    </div>
                                </div>
                                {/* Step 4 */}
                                <div className="flex items-center justify-center">
                                    <div className="text-center w-28">
                                        <div className="w-16 h-16 mx-auto bg-slate-200 text-slate-500 rounded-full flex items-center justify-center font-bold text-2xl">4</div>
                                        <p className="mt-3 text-sm font-semibold text-slate-500">신청 완료</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                         <p className="mt-8 text-slate-600 font-semibold">
                           ※ 결제 후, 학생부 제출 및 사전 설문지 작성을 모두 완료해야 최종 신청 처리됩니다.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto items-stretch">
                        {INTERVIEW_PRODUCTS.map(product => (
                            <InterviewProductCard
                                key={product.id}
                                product={product}
                                isSelected={selectedProduct?.id === product.id}
                                onSelect={() => handleSelectProduct(product)}
                            />
                        ))}
                    </div>
                    
                    <div className="mt-16 text-center">
                        <Button 
                            onClick={handlePurchase}
                            disabled={!selectedProduct}
                            className="w-full max-w-sm disabled:bg-slate-300 disabled:cursor-not-allowed disabled:transform-none"
                        >
                            {selectedProduct ? `${selectedProduct.title} 신청하기` : '프로그램을 선택해주세요'}
                        </Button>
                    </div>
                </div>
            </div>
            
            {/* New Guide Section */}
            <div className="py-24 bg-white">
                <div className="container mx-auto px-6 text-center max-w-5xl">
                     <h2 className="text-3xl font-bold text-slate-800">
                        모의면접 프로그램 안내
                     </h2>
                     <p className="mt-4 text-slate-500 max-w-2xl mx-auto mb-12">
                        더 자세한 정보와 후기는 아래 링크에서 확인하실 수 있습니다.
                     </p>
                     <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-left">
                        <a 
                            href="https://blog.naver.com/auraedu/223612477837?trackingCode=blog_bloghome_searchlist" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="block bg-white rounded-xl border border-slate-200 overflow-hidden group hover:shadow-xl hover:border-brand-light transition-all duration-300 transform hover:-translate-y-1"
                        >
                            <div className="aspect-video">
                                <img src="https://picsum.photos/seed/interview-blog/600/337" alt="Blog post preview" className="w-full h-full object-cover"/>
                            </div>
                            <div className="p-6">
                                <h3 className="font-bold text-xl text-slate-800 group-hover:text-brand">열정스토리 모의면접 프로그램 상세 안내</h3>
                                <p className="text-sm text-slate-500 mt-2">프로그램 진행 방식, 특징, 강사진 등 자세한 내용을 블로그에서 확인하세요.</p>
                                <div className="mt-4 text-sm font-semibold text-slate-600 group-hover:text-brand flex items-center">
                                    <span>자세히 보기 &rarr;</span>
                                </div>
                            </div>
                        </a>
                        <a 
                            href="https://cafe.naver.com/f-e/cafes/10650519/menus/1717?viewType=L" 
                            target="_blank" 
                            rel="noopener noreferrer"
                             className="block bg-slate-50 rounded-xl border border-slate-200 group hover:shadow-xl hover:border-brand-light transition-all duration-300 transform hover:-translate-y-1 flex flex-col items-center justify-center text-center p-8"
                        >
                            <div className="bg-brand-light p-4 rounded-full">
                                <UserGroupIcon className="w-12 h-12 text-brand"/>
                            </div>
                            <h3 className="font-bold text-xl text-slate-800 group-hover:text-brand mt-6">공식 카페 바로가기</h3>
                            <p className="text-sm text-slate-500 mt-2">더 많은 후기와 Q&A는 '합격생' 공식 카페에서 확인하실 수 있습니다.</p>
                        </a>
                     </div>
                </div>
            </div>

            {selectedProduct && isPaymentModalOpen && (
                <PaymentModal 
                    isOpen={isPaymentModalOpen}
                    onClose={() => setIsPaymentModalOpen(false)}
                    onPaymentSuccess={handlePaymentSuccess}
                    product={selectedProduct}
                />
            )}
        </div>
    );
};

export default InterviewPage;