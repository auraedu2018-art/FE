
import React from 'react';
import SearchIcon from './icons/SearchIcon';
import Bars3Icon from './icons/Bars3Icon';

interface HeaderProps {
    isLoggedIn: boolean;
    onLoginClick: () => void;
    onLogout: () => void;
    onNavigateHome: () => void;
    onSelectCategory: (category: string) => void;
    onMySclassClick: () => void;
}

const NAV_CATEGORIES = [
    'All-in-One 패키지',
    '진단 프로그램',
    '차학기 포트폴리오',
    '탐구보고서 계획표',
    '로드맵',
    '온라인 강의',
    '학생부 면접',
    '매거진/자료집',
    'S-class 서포터즈',
];

const Header: React.FC<HeaderProps> = ({ isLoggedIn, onLoginClick, onLogout, onNavigateHome, onSelectCategory, onMySclassClick }) => {
    return (
        <header className="bg-white/90 backdrop-blur-sm sticky top-0 z-50 border-b border-slate-200">
            {/* Top Bar */}
            <div className="container mx-auto px-6 h-16 flex justify-between items-center">
                <div className="flex items-center space-x-8">
                    <button onClick={onNavigateHome} className="flex items-center">
                        <span className="text-2xl font-bold text-brand">S-class</span>
                    </button>
                </div>
                
                <div className="flex-1 max-w-xl mx-8 hidden lg:flex">
                     <div className="w-full relative">
                        <input
                            type="text"
                            placeholder="찾고 싶은 강의를 검색해보세요!"
                            className="w-full bg-slate-100 border border-transparent rounded-full py-2 pl-5 pr-12 text-sm focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent"
                        />
                        <button className="absolute inset-y-0 right-0 px-4 flex items-center text-slate-500 hover:text-brand">
                            <SearchIcon className="h-5 w-5" />
                        </button>
                    </div>
                </div>

                <div className="flex items-center space-x-4">
                    {isLoggedIn ? (
                        <>
                            <button onClick={onMySclassClick} className="text-sm text-slate-600 hover:text-brand font-medium">마이 S-class</button>
                            <span className="text-sm font-medium text-slate-700">김OO님</span>
                            <button onClick={onLogout} className="text-sm text-slate-600 hover:text-brand font-medium">로그아웃</button>
                        </>
                    ) : (
                        <>
                            <button onClick={onLoginClick} className="text-sm text-slate-600 hover:text-brand font-medium">로그인</button>
                            <button onClick={onLoginClick} className="text-sm text-white bg-brand px-4 py-2 rounded-md font-semibold hover:bg-brand-600 transition-colors">회원가입</button>
                        </>
                    )}
                </div>
            </div>
            
            {/* Bottom Bar */}
            <div className="border-t border-slate-200">
                <div className="container mx-auto px-6 h-12 flex items-center space-x-6 overflow-x-auto">
                    <button className="flex items-center space-x-2 flex-shrink-0 pr-4 border-r border-slate-200">
                        <Bars3Icon className="w-5 h-5 text-slate-700"/>
                        <span className="font-bold text-slate-800 text-sm">카테고리</span>
                    </button>
                    <nav className="flex items-center space-x-5 whitespace-nowrap">
                        {NAV_CATEGORIES.map(cat => (
                            <button 
                                key={cat}
                                onClick={() => onSelectCategory(cat)}
                                className="text-sm font-medium text-slate-600 hover:text-brand transition-colors"
                            >
                                {cat}
                            </button>
                        ))}
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;