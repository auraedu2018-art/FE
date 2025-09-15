import React, { useState } from 'react';
import XMarkIcon from './icons/XMarkIcon';
import Button from './Button';
import KakaoIcon from './icons/KakaoIcon';
import CheckCircleIcon from './icons/CheckCircleIcon';
import UserIcon from './icons/UserIcon';
import UsersIcon from './icons/UsersIcon';
import BriefcaseIcon from './icons/BriefcaseIcon';
import BuildingLibraryIcon from './icons/BuildingLibraryIcon';
import PencilIcon from './icons/PencilIcon';
import GiftIcon from './icons/GiftIcon';
import ChevronLeftIcon from './icons/ChevronLeftIcon';

interface LoginModalProps {
    isOpen: boolean;
    onClose: () => void;
    onLogin: (isNewUser: boolean) => void;
}

type Step = 'initial' | 'consent' | 'welcome' | 'userType' | 'school' | 'grade' | 'referral';
type UserType = 'student' | 'parent' | 'teacher' | null;

const ProgressBar: React.FC<{ currentStep: number; totalSteps: number }> = ({ currentStep, totalSteps }) => {
    const progressPercentage = (currentStep / totalSteps) * 100;
    return (
        <div className="w-full bg-slate-200 rounded-full h-1.5">
            <div
                className="bg-brand h-1.5 rounded-full transition-all duration-300 ease-out"
                style={{ width: `${progressPercentage}%` }}
            ></div>
        </div>
    );
};


const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose, onLogin }) => {
    const [step, setStep] = useState<Step>('initial');
    const [userType, setUserType] = useState<UserType>(null);
    const [schoolName, setSchoolName] = useState('');
    const [grade, setGrade] = useState('');
    
    const [consent, setConsent] = useState({
        terms: false,
        privacy: false,
        marketing: false,
    });
    
    const allRequiredConsented = consent.terms && consent.privacy;
    
    const handleAllConsentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { checked } = e.target;
        setConsent({
            terms: checked,
            privacy: checked,
            marketing: checked,
        });
    };
    
    const handleConsentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, checked } = e.target;
        setConsent(prev => ({ ...prev, [name]: checked }));
    };
    
    const handleKakaoAuth = () => {
        // In a real application, you would authenticate with Kakao and then
        // check your database to see if the user is new.
        // For this demonstration, we will always show the new user sign-up flow.
        const isNewUser = true; 

        if (isNewUser) {
            setStep('consent');
        } else {
            // If the user already exists, complete the login and close the modal.
            onLogin(false);
        }
    };


    if (!isOpen) {
        return null;
    }

    const handleBack = () => {
        switch (step) {
            case 'consent': setStep('initial'); break;
            case 'welcome': setStep('consent'); break;
            case 'userType': setStep('welcome'); break;
            case 'school': setStep('userType'); break;
            case 'grade': setStep('school'); break;
            case 'referral': setStep('grade'); break;
        }
    };
    
    const renderContent = () => {
        switch (step) {
            case 'initial':
                return (
                    <div className="p-8 text-center">
                        <h2 className="text-2xl font-bold text-slate-800">로그인</h2>
                        <p className="mt-2 text-slate-500">S-class에 다시 오신 것을 환영합니다.</p>
                        <div className="mt-8">
                            <button 
                                onClick={() => onLogin(false)}
                                className="w-full flex items-center justify-center gap-2 bg-[#FEE500] text-black/85 font-semibold py-3 rounded-md hover:bg-yellow-400 transition-colors"
                            >
                                <KakaoIcon className="w-6 h-6" />
                                카카오로 로그인 하기
                            </button>
                        </div>
                        <div className="mt-6 text-sm">
                            <span className="text-slate-500">아직 회원이 아니신가요? </span>
                            <button onClick={handleKakaoAuth} className="font-semibold text-brand hover:underline">
                                회원가입하기
                            </button>
                        </div>
                    </div>
                );
            case 'consent':
                return (
                    <div className="p-8">
                        <button onClick={handleBack} className="flex items-center text-sm font-semibold text-slate-600 hover:text-slate-800">
                             <ChevronLeftIcon className="w-5 h-5 mr-1" /> 뒤로
                        </button>
                        <h2 className="text-2xl font-bold text-slate-800 text-center mt-4">서비스 이용 동의</h2>
                        <div className="mt-8 space-y-3">
                            <div className="border border-slate-300 rounded-md p-3">
                                <label className="flex items-center cursor-pointer">
                                    <input type="checkbox" onChange={handleAllConsentChange} checked={allRequiredConsented && consent.marketing} className="h-5 w-5 rounded border-slate-400 text-brand focus:ring-brand" />
                                    <span className="ml-3 font-bold text-slate-800">전체 동의하기</span>
                                </label>
                            </div>
                            <div className="pt-2">
                                <label className="flex items-center cursor-pointer">
                                    <input type="checkbox" name="terms" checked={consent.terms} onChange={handleConsentChange} className="h-5 w-5 rounded border-slate-400 text-brand focus:ring-brand" />
                                    <span className="ml-3 text-sm text-slate-700">[필수] 서비스 이용약관</span>
                                </label>
                            </div>
                             <div>
                                <label className="flex items-center cursor-pointer">
                                    <input type="checkbox" name="privacy" checked={consent.privacy} onChange={handleConsentChange} className="h-5 w-5 rounded border-slate-400 text-brand focus:ring-brand" />
                                    <span className="ml-3 text-sm text-slate-700">[필수] 개인 정보 수집 및 이용</span>
                                </label>
                            </div>
                            <div>
                                <label className="flex items-center cursor-pointer">
                                    <input type="checkbox" name="marketing" checked={consent.marketing} onChange={handleConsentChange} className="h-5 w-5 rounded border-slate-400 text-brand focus:ring-brand" />
                                    <span className="ml-3 text-sm text-slate-700">[선택] 마케팅 및 프로모션 동의</span>
                                </label>
                            </div>
                        </div>
                        <div className="mt-8">
                            <Button className="w-full" disabled={!allRequiredConsented} onClick={() => setStep('welcome')}>
                                동의하고 계속하기
                            </Button>
                        </div>
                    </div>
                );
            case 'welcome':
                return (
                    <div className="text-center">
                        <div className="bg-gradient-to-br from-brand to-purple-500 py-10 rounded-t-2xl">
                           <h1 className="text-4xl font-bold text-white tracking-widest">S-class</h1>
                        </div>
                         <div className="p-8">
                             <h2 className="text-2xl font-bold text-slate-800">S-class에 오신 것을 환영해요! 👋</h2>
                             <p className="mt-2 text-slate-500">간단한 프로필을 작성하고<br/> S-class의 모든 기능을 이용해보세요.</p>
                             <div className="mt-8">
                                <Button onClick={() => setStep('userType')} className="w-full">
                                    프로필 입력하기
                                </Button>
                             </div>
                         </div>
                    </div>
                );
             case 'userType':
                 const userTypes = [
                     { id: 'student', label: '학생', icon: UserIcon },
                     { id: 'parent', label: '학부모', icon: UsersIcon },
                     { id: 'teacher', label: '교사', icon: BriefcaseIcon },
                 ];
                return (
                    <div className="p-8">
                        <ProgressBar currentStep={1} totalSteps={4} />
                        <h2 className="text-2xl font-bold text-slate-800 text-center mt-8">가입 유형을 선택해주세요!</h2>
                        <div className="mt-8 space-y-3">
                            {userTypes.map(type => (
                                <button key={type.id} onClick={() => setUserType(type.id as UserType)} className={`w-full text-left p-4 border-2 rounded-lg flex items-center gap-4 transition-all ${userType === type.id ? 'border-brand bg-brand-light' : 'border-slate-200 hover:border-brand-light'}`}>
                                    <type.icon className={`w-6 h-6 ${userType === type.id ? 'text-brand' : 'text-slate-500'}`} />
                                    <span className={`font-semibold ${userType === type.id ? 'text-brand' : 'text-slate-700'}`}>{type.label}</span>
                                </button>
                            ))}
                        </div>
                        <div className="mt-8 flex items-center gap-3">
                             <Button onClick={handleBack} variant="secondary" className="w-full">뒤로</Button>
                             <Button onClick={() => setStep('school')} className="w-full" disabled={!userType}>다음</Button>
                        </div>
                    </div>
                );
            case 'school':
                const schoolQuestion = userType === 'parent' ? '자녀가 다니는 학교 이름을 알려주세요!' : '소속 학교 이름을 알려주세요!';
                return (
                     <div className="p-8">
                        <ProgressBar currentStep={2} totalSteps={4} />
                        <h2 className="text-2xl font-bold text-slate-800 text-center mt-8">{schoolQuestion}</h2>
                        <div className="mt-8 relative">
                             <BuildingLibraryIcon className="w-5 h-5 text-slate-400 absolute top-1/2 left-4 -translate-y-1/2" />
                             <input 
                                type="text" 
                                placeholder="학교명" 
                                value={schoolName}
                                onChange={(e) => setSchoolName(e.target.value)}
                                className="w-full bg-slate-100 border border-slate-200 rounded-md py-3 pl-12 pr-4 text-md focus:outline-none focus:ring-2 focus:ring-brand" 
                             />
                        </div>
                        <div className="mt-8 flex items-center gap-3">
                             <Button onClick={handleBack} variant="secondary" className="w-full">뒤로</Button>
                             <Button onClick={() => setStep('grade')} className="w-full" disabled={!schoolName}>다음</Button>
                        </div>
                    </div>
                );
            case 'grade':
                 const gradeQuestion = userType === 'parent' ? '자녀가 몇 학년인가요?' : (userType === 'teacher' ? '몇 학년을 맡고 계시나요?' : '현재 몇 학년이세요?');
                 const gradeOptions = ['고1', '고2', '고3', '기타'];
                 return (
                     <div className="p-8">
                        <ProgressBar currentStep={3} totalSteps={4} />
                        <h2 className="text-2xl font-bold text-slate-800 text-center mt-8">{gradeQuestion}</h2>
                        <div className="mt-8 relative">
                            <PencilIcon className="w-5 h-5 text-slate-400 absolute top-1/2 left-4 -translate-y-1/2" />
                            <select 
                                value={grade} 
                                onChange={(e) => setGrade(e.target.value)} 
                                className="w-full appearance-none bg-slate-100 border border-slate-200 rounded-md py-3 pl-12 pr-4 text-md focus:outline-none focus:ring-2 focus:ring-brand"
                            >
                                <option value="" disabled>학년</option>
                                {gradeOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                            </select>
                        </div>
                        <div className="mt-8 flex items-center gap-3">
                             <Button onClick={handleBack} variant="secondary" className="w-full">뒤로</Button>
                             <Button onClick={() => setStep('referral')} className="w-full" disabled={!grade}>다음</Button>
                        </div>
                    </div>
                );
            case 'referral':
                 return (
                     <div className="p-8">
                        <ProgressBar currentStep={4} totalSteps={4} />
                        <h2 className="text-2xl font-bold text-slate-800 text-center mt-8">추천 코드가 있으신가요? (선택)</h2>
                         <div className="mt-8 relative">
                             <GiftIcon className="w-5 h-5 text-slate-400 absolute top-1/2 left-4 -translate-y-1/2" />
                             <input 
                                type="text" 
                                placeholder="추천인 코드를 입력해주세요!" 
                                className="w-full bg-slate-100 border border-slate-200 rounded-md py-3 pl-12 pr-4 text-md focus:outline-none focus:ring-2 focus:ring-brand" 
                             />
                        </div>
                        <div className="mt-8 flex items-center gap-3">
                             <Button onClick={handleBack} variant="secondary" className="w-full">뒤로</Button>
                             <Button onClick={() => onLogin(true)} className="w-full">가입하기</Button>
                        </div>
                    </div>
                );
        }
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
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 z-10"
                    aria-label="Close modal"
                >
                    <XMarkIcon className="w-6 h-6" />
                </button>
                {renderContent()}
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

export default LoginModal;