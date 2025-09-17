import React, { useState, useRef } from 'react';
import type { InterviewProduct } from '../types';
import PaymentModal from '../components/PaymentModal';

import HeroSection from '../components/interview_page/HeroSection';
import RealitySection from '../components/interview_page/RealitySection';
import PhilosophySection from '../components/interview_page/PhilosophySection';
import FeaturesSection from '../components/interview_page/FeaturesSection';
import PricingSection from '../components/interview_page/PricingSection';
import SocialProofSection from '../components/interview_page/SocialProofSection';
import FAQSection from '../components/interview_page/FAQSection';
import ApplicationProcessSection from '../components/interview_page/ApplicationProcessSection';
import FinalCTASection from '../components/interview_page/FinalCTASection';
import InterviewFooter from '../components/interview_page/InterviewFooter';

interface InterviewPageProps {
    isLoggedIn: boolean;
    onLoginRequest: () => void;
    onPaymentComplete: (product: InterviewProduct) => void;
}

const InterviewPage: React.FC<InterviewPageProps> = ({ isLoggedIn, onLoginRequest, onPaymentComplete }) => {
    const [selectedProduct, setSelectedProduct] = useState<InterviewProduct | null>(null);
    const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
    const pricingSectionRef = useRef<HTMLDivElement>(null);

    const handleSelectProduct = (product: InterviewProduct) => {
        if (product.type === 'inquiry') {
            alert('해당 상품은 별도 문의가 필요합니다. 고객센터로 연락주세요.');
            setSelectedProduct(null);
            return;
        }
        // Toggle selection
        setSelectedProduct(prev => (prev?.id === product.id ? null : product));
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

    const scrollToPricing = () => {
        pricingSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="bg-[#F0F9FF] text-gray-800 overflow-x-hidden">
            <HeroSection onScrollToPricing={scrollToPricing} />
            <main>
                <RealitySection />
                <PhilosophySection />
                <FeaturesSection />
                <div ref={pricingSectionRef}>
                    <PricingSection 
                        selectedProduct={selectedProduct}
                        onSelectProduct={handleSelectProduct}
                        onPurchase={handlePurchase}
                    />
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <SocialProofSection />
                </div>
                <FAQSection />
                <ApplicationProcessSection />
            </main>
            <FinalCTASection onScrollToPricing={scrollToPricing} />
            <InterviewFooter />

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
