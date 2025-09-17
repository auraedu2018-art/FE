import React from 'react';

const InterviewFooter: React.FC = () => {
    return (
        <footer className="bg-white py-12 border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-500 text-sm">
                <p className="font-bold text-lg text-gray-800 mb-4">'명불허전' 열정스토리</p>
                <div className="flex justify-center space-x-6 mb-6">
                    <a href="https://blog.naver.com/auraedu" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">블로그</a>
                    <a href="https://cafe.naver.com/f-e" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">공식 카페</a>
                    <a href="https://pf.kakao.com/_xgEMNb" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">상담 문의</a>
                </div>
                <p>열정스토리 | 대표: 조근주</p>
                <p>서울특별시 강남구 대치동 | 사업자등록번호: 123-45-67890</p>
                <p className="mt-6 text-gray-400">© {new Date().getFullYear()} PassionStory. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default InterviewFooter;
