import React from 'react';
import Button from './Button';
import CheckCircleIcon from './icons/CheckCircleIcon';

interface SignupSuccessModalProps {
    onProceed: () => void;
}

const SignupSuccessModal: React.FC<SignupSuccessModalProps> = ({ onProceed }) => {
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
                        회원가입이 완료되었습니다!
                    </h2>
                    <p className="mt-4 text-slate-600">
                        이제 S-class의 모든 프로그램을 이용하실 수 있습니다.
                        <br />
                        바로 프로그램을 둘러보고 신청해보세요.
                    </p>
                     <div className="mt-8">
                        <Button onClick={onProceed} className="w-full">
                           프로그램 신청하기 &rarr;
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

export default SignupSuccessModal;