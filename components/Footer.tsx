import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-white border-t border-slate-200 text-slate-500">
            <div className="container mx-auto px-6 py-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="text-center md:text-left mb-4 md:mb-0">
                        <h2 className="text-xl font-bold text-slate-800">S-class</h2>
                        <p className="text-sm">대한민국 No.1 학생부 종합전형 AI 솔루션</p>
                    </div>
                    <div className="flex space-x-6">
                        <a href="#" className="hover:text-brand-500 transition-colors">이용약관</a>
                        <a href="#" className="hover:text-brand-500 transition-colors">개인정보처리방침</a>
                        <a href="#" className="hover:text-brand-500 transition-colors">고객센터</a>
                    </div>
                </div>
                <div className="mt-8 border-t border-slate-200 pt-6 text-center text-sm">
                    <p>&copy; {new Date().getFullYear()} S-class Inc. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;