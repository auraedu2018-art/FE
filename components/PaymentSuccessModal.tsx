import React from 'react';
import Button from './Button';
import CheckCircleIcon from './icons/CheckCircleIcon';

interface PaymentSuccessModalProps {
    productName: string;
    onProceed: () => void;
}

const PaymentSuccessModal: React.FC<PaymentSuccessModalProps> = ({ productName, onProceed }) => {
    return (
        <div
            className="fixed inset-0 bg-black/60 flex items-center justify-center z-[100]"
            aria-modal="true"
            role="dialog"
        >
            <div
                className="bg-white rounded-2xl shadow-xl w-full max-w-md m-4 transform transition-transform duration-300 scale-95 animate-modal-enter text-center"
                onClick={e => e.stopPropagation()}
            >
                <div className="p-8">
                    <CheckCircleIcon className="w-20 h-20 text-green-500 mx-auto" />
                    <h2 className="text-2xl font-bold text-slate-800 mt-6">
                        결제가 완료되었습니다!
                    </h2>
                    <p className="mt-4 text-slate-600">
                        <strong>{productName}</strong> 프로그램 결제가 성공적으로 완료되었습니다.
                        <br />
                        이제 마지막 단계인 신청서 작성을 진행해주세요.
                    </p>
                     <div className="mt-8">
                        <Button onClick={onProceed} className="w-full">
                           신청서 작성하기 &rarr;
                        </Button>
                    </div>
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

export default PaymentSuccessModal;