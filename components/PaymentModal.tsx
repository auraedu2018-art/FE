
import React, { useState } from 'react';
import type { InterviewProduct } from '../types';
import Button from './Button';
import XMarkIcon from './icons/XMarkIcon';
import CreditCardIcon from './icons/CreditCardIcon';
import WalletIcon from './icons/WalletIcon';
import KakaoIcon from './icons/KakaoIcon';

interface PaymentModalProps {
    isOpen: boolean;
    onClose: () => void;
    onPaymentSuccess: () => void;
    product: InterviewProduct;
}

type PaymentMethod = 'credit-card' | 'kakao-pay' | 'simple';

const PaymentModal: React.FC<PaymentModalProps> = ({ isOpen, onClose, onPaymentSuccess, product }) => {
    const [selectedMethod, setSelectedMethod] = useState<PaymentMethod>('credit-card');

    if (!isOpen) {
        return null;
    }

    const handlePayment = () => {
        // In a real app, this would involve API calls.
        // For this demo, we'll just call the success handler.
        onPaymentSuccess();
    };

    return (
        <div
            className="fixed inset-0 bg-black/60 flex items-center justify-center z-[100]"
            aria-modal="true"
            role="dialog"
            onClick={onClose}
        >
            <div
                className="bg-white rounded-2xl shadow-xl w-full max-w-md m-4 transform transition-transform duration-300 scale-95 animate-modal-enter"
                onClick={e => e.stopPropagation()}
            >
                <div className="p-6 relative">
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 text-slate-400 hover:text-slate-600"
                        aria-label="Close modal"
                    >
                        <XMarkIcon className="w-6 h-6" />
                    </button>
                    <h2 className="text-2xl font-bold text-slate-800 text-center">결제하기</h2>
                </div>

                <div className="px-6 pb-6 border-b border-slate-200">
                    <div className="bg-slate-50 p-4 rounded-lg">
                        <h3 className="font-semibold text-slate-800">{product.title}</h3>
                        <p className="text-right text-xl font-bold text-brand mt-2">
                            {product.price ? `${product.price.toLocaleString()}원` : '가격 문의'}
                        </p>
                    </div>
                </div>

                <div className="p-6">
                    <h3 className="font-semibold text-slate-800 mb-4">결제 수단</h3>
                    <div className="space-y-3">
                        <button 
                            onClick={() => setSelectedMethod('credit-card')}
                            className={`w-full text-left p-4 border-2 rounded-lg flex items-center gap-4 transition-all ${selectedMethod === 'credit-card' ? 'border-brand bg-brand-light' : 'border-slate-200 hover:border-brand-light'}`}
                        >
                            <CreditCardIcon className={`w-6 h-6 ${selectedMethod === 'credit-card' ? 'text-brand' : 'text-slate-500'}`} />
                            <span className={`font-semibold ${selectedMethod === 'credit-card' ? 'text-brand' : 'text-slate-700'}`}>신용/체크카드</span>
                        </button>
                         <button 
                            onClick={() => setSelectedMethod('kakao-pay')}
                            className={`w-full text-left p-4 border-2 rounded-lg flex items-center gap-4 transition-all ${selectedMethod === 'kakao-pay' ? 'border-brand bg-brand-light' : 'border-slate-200 hover:border-brand-light'}`}
                        >
                            <KakaoIcon className="w-6 h-6" />
                            <span className={`font-semibold ${selectedMethod === 'kakao-pay' ? 'text-brand' : 'text-slate-700'}`}>카카오페이</span>
                        </button>
                        <button
                            onClick={() => setSelectedMethod('simple')}
                            className={`w-full text-left p-4 border-2 rounded-lg flex items-center gap-4 transition-all ${selectedMethod === 'simple' ? 'border-brand bg-brand-light' : 'border-slate-200 hover:border-brand-light'}`}
                        >
                            <WalletIcon className={`w-6 h-6 ${selectedMethod === 'simple' ? 'text-brand' : 'text-slate-500'}`} />
                            <span className={`font-semibold ${selectedMethod === 'simple' ? 'text-brand' : 'text-slate-700'}`}>기타 간편결제</span>
                        </button>
                    </div>
                </div>

                <div className="p-6 bg-slate-50 rounded-b-2xl">
                    <Button onClick={handlePayment} className="w-full">
                        {product.price ? `${product.price.toLocaleString()}원 결제하기` : '결제하기'}
                    </Button>
                </div>
            </div>
            <style>{`
                @keyframes modal-enter {
                    from { opacity: 0; transform: scale(0.95); }
                    to { opacity: 1; transform: scale(1); }
                }
                .animate-modal-enter {
                    animation: modal-enter 0.2s ease-out forwards;
                }
            `}</style>
        </div>
    );
};

export default PaymentModal;