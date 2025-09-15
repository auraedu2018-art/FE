import React from 'react';
import ChevronLeftIcon from './icons/ChevronLeftIcon';
import ChevronRightIcon from './icons/ChevronRightIcon';

const PauseIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 9v6m4-6v6" />
    </svg>
);


const MainBanner: React.FC = () => {
    return (
        <section className="container mx-auto px-6 py-8">
            <div className="grid grid-cols-1 lg:grid-cols-[2fr_5fr_2.5fr] gap-6">
                {/* Left Image */}
                <div className="hidden lg:block rounded-2xl overflow-hidden shadow-lg">
                    <img src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=1856&auto=format&fit=crop" alt="University library" className="w-full h-full object-cover" />
                </div>

                {/* Center Banner */}
                <div className="bg-slate-800 text-white rounded-2xl p-8 flex flex-col justify-between relative overflow-hidden min-h-[350px]">
                    <div className="z-10">
                        <h2 className="text-4xl font-extrabold leading-tight">
                            AI 진단으로 찾는 나의 합격 로드맵, <br />
                            S-class 여름방학 특별 혜택!
                        </h2>
                        <p className="mt-3 text-slate-300">
                           지금 시작하면, 명문대 선배들의 시크릿 플랜과<br/>
                           50% 할인 쿠폰까지! (~8/31) &rarr;
                        </p>
                    </div>

                    <div className="absolute -right-16 -bottom-10 opacity-20">
                         <img src="https://storage.googleapis.com/maker-studio-project-3-asset/s-class-card.png" alt="Voucher" className="w-80" />
                    </div>

                    <div className="flex items-center justify-between mt-auto z-10">
                        <span className="text-sm font-mono">01 / 03</span>
                        <div className="flex items-center space-x-2">
                             <button className="p-1 rounded-full bg-black/30 hover:bg-black/50 transition-colors">
                                <ChevronLeftIcon className="w-5 h-5 text-white" />
                            </button>
                             <button className="p-1 rounded-full bg-black/30 hover:bg-black/50 transition-colors">
                                <PauseIcon className="w-5 h-5 text-white" />
                            </button>
                             <button className="p-1 rounded-full bg-black/30 hover:bg-black/50 transition-colors">
                                <ChevronRightIcon className="w-5 h-5 text-white" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Right Banner */}
                <div className="bg-accent-light text-slate-800 rounded-2xl p-8 flex flex-col justify-center">
                    <h3 className="text-xl font-bold">
                        SKY 선배들은<br/>
                        무엇을 준비했을까?
                    </h3>
                    <p className="mt-4 text-sm text-slate-600">
                        최신 입시 트렌드와 합격 노하우가 담긴
                        아티클을 지금 확인하세요! &rarr;
                    </p>
                </div>
            </div>
        </section>
    );
};

export default MainBanner;