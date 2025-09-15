import React, { useState, useCallback } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ShopPage from './pages/ShopPage';
import PromoPage from './pages/PromoPage';
import HomePage from './pages/HomePage';
import InterviewPage from './pages/InterviewPage';
import InterviewApplicationPage from './pages/InterviewApplicationPage';
import MySclassPage from './pages/MySclassPage';
import LoginModal from './components/LoginModal';
import Toast from './components/Toast';
import PaymentSuccessModal from './components/PaymentSuccessModal';
import SignupSuccessModal from './components/SignupSuccessModal';
import { SHOP_ONLY_CATEGORIES, PROMO_PAGE_DATA } from './constants';
import type { InterviewApplicationStatus, InterviewProduct } from './types';

const App: React.FC = () => {
    const [isHome, setIsHome] = useState(true);
    const [activeCategory, setActiveCategory] = useState<string | null>(null);
    const [pageType, setPageType] = useState<'shop' | 'promo' | 'interview' | 'my-sclass' | 'interview-application' | null>(null);
    
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

    const [applicationStatus, setApplicationStatus] = useState<Record<number, InterviewApplicationStatus>>({});
    const [applyingForProduct, setApplyingForProduct] = useState<InterviewProduct | null>(null);
    const [toast, setToast] = useState({ show: false, message: '' });
    const [showPaymentSuccess, setShowPaymentSuccess] = useState(false);
    const [showSignupSuccess, setShowSignupSuccess] = useState(false);

    const showToast = (message: string) => setToast({ show: true, message });
    const hideToast = () => setToast(prev => ({ ...prev, show: false }));

    const handleLogin = (isNewUser: boolean) => {
        setIsLoggedIn(true);
        setIsLoginModalOpen(false);
        if (isNewUser) {
            setShowSignupSuccess(true);
        } else {
            showToast("로그인 되었습니다.");
        }
    };
    const handleLogout = () => setIsLoggedIn(false);
    const handleOpenLoginModal = () => setIsLoginModalOpen(true);

    const handleNavigateHome = useCallback(() => {
        setIsHome(true);
        setActiveCategory(null);
        setPageType(null);
        window.scrollTo(0, 0);
    }, []);
    
    const handleMySclass = useCallback(() => {
        if(isLoggedIn){
            setPageType('my-sclass');
            setIsHome(false);
            setActiveCategory(null);
            window.scrollTo(0, 0);
        } else {
            handleOpenLoginModal();
        }
    }, [isLoggedIn]);

    const handlePaymentComplete = useCallback((product: InterviewProduct) => {
        // IDs 5 ('강의 Only') and 6 ('배경자료집 Only') don't require an application form.
        if (product.id === 5 || product.id === 6) {
            setApplicationStatus(prev => ({ ...prev, [product.id]: 'submitted' }));
            showToast(`${product.title} 구매가 완료되었습니다.`);
            handleMySclass();
        } else {
            setApplicationStatus(prev => ({ ...prev, [product.id]: 'paid' }));
            setApplyingForProduct(product);
            setPageType(null);
            setIsHome(false);
            setShowPaymentSuccess(true);
            window.scrollTo(0, 0);
        }
    }, [handleMySclass]);
    
    const handleProceedToApplication = useCallback(() => {
        setShowPaymentSuccess(false);
        setPageType('interview-application');
        window.scrollTo(0, 0);
    }, []);

    const handleResumeApplication = useCallback((product: InterviewProduct) => {
        setApplyingForProduct(product);
        setPageType('interview-application');
        window.scrollTo(0, 0);
    }, []);

    const handleApplicationSubmit = useCallback(() => {
        if (applyingForProduct) {
            setApplicationStatus(prev => ({ ...prev, [applyingForProduct.id]: 'submitted' }));
        }
        setApplyingForProduct(null);
        showToast("신청서가 성공적으로 제출되었습니다.");
        handleMySclass();
    }, [applyingForProduct, handleMySclass]);

    const handleSelectCategory = useCallback((category: string) => {
        setActiveCategory(category);
        if (category === '학생부 면접') {
            setPageType('interview');
        } else if (SHOP_ONLY_CATEGORIES.includes(category)) {
            setPageType('shop');
        } else {
            const promoContent = PROMO_PAGE_DATA.find(p => p.category === category);
            if (promoContent) {
                 setPageType('promo');
            } else {
                setPageType('shop');
            }
        }
        setIsHome(false);
        window.scrollTo(0, 0);
    }, []);

    const handleProceedFromSignup = useCallback(() => {
        setShowSignupSuccess(false);
        handleSelectCategory('학생부 면접');
    }, [handleSelectCategory]);

    const renderContent = () => {
        if (isHome || (!pageType && !activeCategory && !showPaymentSuccess && !showSignupSuccess)) {
            return <HomePage onSelectCategory={handleSelectCategory} />;
        }
        
        if (showPaymentSuccess || showSignupSuccess) {
            return null; // The modal is outside the main content flow
        }
        
        if (pageType === 'shop' && activeCategory) {
            return <ShopPage activeCategory={activeCategory} />;
        }

        if (pageType === 'promo' && activeCategory) {
            const promoContent = PROMO_PAGE_DATA.find(p => p.category === activeCategory);
            return promoContent ? <PromoPage content={promoContent} /> : <HomePage onSelectCategory={handleSelectCategory} />;
        }
        
        if (pageType === 'interview') {
            return <InterviewPage 
                        isLoggedIn={isLoggedIn} 
                        onLoginRequest={handleOpenLoginModal}
                        onPaymentComplete={handlePaymentComplete}
                   />;
        }

        if (pageType === 'interview-application' && applyingForProduct) {
            return <InterviewApplicationPage 
                        product={applyingForProduct} 
                        onSubmit={handleApplicationSubmit}
                   />;
        }

        if (pageType === 'my-sclass') {
            return <MySclassPage 
                        applicationStatus={applicationStatus}
                        onNavigateToApplication={handleResumeApplication}
                    />;
        }

        return <HomePage onSelectCategory={handleSelectCategory} />;
    };

    return (
        <div className="bg-white min-h-screen flex flex-col font-sans text-slate-800">
            <Header 
                isLoggedIn={isLoggedIn}
                onLoginClick={handleOpenLoginModal}
                onLogout={handleLogout}
                onNavigateHome={handleNavigateHome} 
                onSelectCategory={handleSelectCategory} 
                onMySclassClick={handleMySclass}
            />
            <main className="flex-grow">
                {renderContent()}
            </main>
            <Footer />
            <LoginModal 
                isOpen={isLoginModalOpen}
                onClose={() => setIsLoginModalOpen(false)}
                onLogin={handleLogin}
            />
            {showPaymentSuccess && applyingForProduct && (
                <PaymentSuccessModal 
                    productName={applyingForProduct.title}
                    onProceed={handleProceedToApplication}
                />
            )}
            {showSignupSuccess && (
                <SignupSuccessModal onProceed={handleProceedFromSignup} />
            )}
            <Toast 
                message={toast.message}
                show={toast.show}
                onClose={hideToast}
            />
        </div>
    );
};

export default App;