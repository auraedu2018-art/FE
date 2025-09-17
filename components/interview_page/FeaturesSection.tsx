import React from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { ArrowRightIcon } from './Icons';

const RestoreInfographic = () => (
    <div className="bg-blue-50 p-6 rounded-2xl border-2 border-blue-200">
        <svg viewBox="0 0 200 125" xmlns="http://www.w3.org/2000/svg">
            <rect x="10" y="10" width="80" height="100" rx="5" fill="#E0E7FF"/>
            <path d="M15 25h60 M15 35h50 M15 45h60 M15 55h40 M15 65h60 M15 75h50" stroke="#A5B4FC" strokeWidth="2" strokeDasharray="3 3" />
            <path d="M100 60 L115 60" stroke="#9CA3AF" strokeWidth="2" strokeDasharray="4 2"/>
            <path d="M110 55 L115 60 L110 65" fill="none" stroke="#9CA3AF" strokeWidth="2"/>
            <g transform="translate(120, 0)">
                <rect y="10" width="80" height="100" rx="5" fill="#FFFFFF" stroke="#6366F1" strokeWidth="1"/>
                <path d="M125 25h60 M125 35h50 M125 45h60 M125 55h40 M125 65h60 M125 75h50" stroke="#4F46E5" strokeWidth="2" />
                <circle cx="170" cy="90" r="12" fill="#F59E0B"/>
                <path d="M167 90 l3 3 l6 -6" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round"/>
            </g>
            <text x="50" y="122" textAnchor="middle" fontSize="10" fill="#A5B4FC">Before</text>
            <text x="160" y="122" textAnchor="middle" fontSize="10" fill="#6366F1" fontWeight="bold">After</text>
        </svg>
    </div>
);

const MindmapInfographic = () => (
    <div className="bg-indigo-50 p-6 rounded-2xl border-2 border-indigo-200">
        <svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg">
            <circle cx="100" cy="60" r="25" fill="#818CF8"/>
            <text x="100" y="63" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">나의 스토리</text>
            <line x1="100" y1="60" x2="40" y2="30" stroke="#C7D2FE" strokeWidth="2"/>
            <circle cx="30" cy="25" r="15" fill="#C7D2FE"/>
            <text x="30" y="28" textAnchor="middle" fill="#4338CA" fontSize="8">화학실험</text>
            <line x1="100" y1="60" x2="40" y2="90" stroke="#C7D2FE" strokeWidth="2"/>
            <circle cx="30" cy="95" r="15" fill="#C7D2FE"/>
            <text x="30" y="98" textAnchor="middle" fill="#4338CA" fontSize="8">의료봉사</text>
            <line x1="100" y1="60" x2="160" y2="30" stroke="#C7D2FE" strokeWidth="2"/>
            <circle cx="170" cy="25" r="15" fill="#C7D2FE"/>
            <text x="170" y="28" textAnchor="middle" fill="#4338CA" fontSize="8">환경보고서</text>
            <line x1="100" y1="60" x2="160" y2="90" stroke="#C7D2FE" strokeWidth="2"/>
            <circle cx="170" cy="95" r="15" fill="#C7D2FE"/>
            <text x="170" y="98" textAnchor="middle" fill="#4338CA" fontSize="8">독서토론</text>
        </svg>
    </div>
);

const RebirthInfographic = () => (
    <div className="bg-purple-50 p-6 rounded-2xl border-2 border-purple-200">
        <svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg">
            <rect x="10" y="20" width="70" height="80" rx="5" fill="#E9D5FF"/>
            <text x="45" y="65" textAnchor="middle" fontSize="10" fill="#7E22CE">탐구함.</text>
            <path d="M90 60 L110 60" stroke="#A855F7" strokeWidth="2" strokeDasharray="4 2"/>
            <path d="M105 55 L110 60 L105 65" fill="none" stroke="#A855F7" strokeWidth="2"/>
            <g transform="translate(120, 0)">
                <rect y="10" width="80" height="100" rx="5" fill="#F3E8FF" stroke="#A855F7" strokeWidth="1"/>
                <text x="160" y="30" textAnchor="middle" fontSize="9" fill="#9333EA" fontWeight="bold">쇼스타코비치...</text>
                <text x="160" y="50" textAnchor="middle" fontSize="9" fill="#9333EA" fontWeight="bold">한나 아렌트...</text>
                <text x="160" y="70" textAnchor="middle" fontSize="9" fill="#9333EA" fontWeight="bold">악의 평범성 고찰.</text>
                <path d="M150 90 L170 90 M160 80 V 100" stroke="#F59E0B" strokeWidth="2" />
            </g>
        </svg>
    </div>
);

const AnswerInfographic = () => (
    <div className="bg-orange-50 p-6 rounded-2xl border-2 border-orange-200">
        <svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 20 C20 10, 30 10, 40 20 L160 20 C170 20, 180 10, 180 20 L180 80 C180 90, 170 90, 160 90 L60 90 L40 110 L40 90 L30 90 C20 90, 20 80, 20 70 Z" fill="#FFEDD5"/>
            <path d="M65 40 h70" stroke="#FB923C" strokeWidth="3" strokeLinecap="round"/>
            <path d="M65 55 h50" stroke="#FB923C" strokeWidth="3" strokeLinecap="round"/>
            <path d="M65 70 h30" stroke="#FB923C" strokeWidth="3" strokeLinecap="round"/>
            <circle cx="40" cy="55" r="15" fill="#F97316"/>
            <path d="M35 55 l4 4 l8 -8" stroke="white" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
        </svg>
    </div>
);

const ExpertInfographic = () => (
    <div className="bg-teal-50 p-6 rounded-2xl border-2 border-teal-200">
        <svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg">
            <circle cx="100" cy="45" r="20" fill="#5EEAD4"/>
            <circle cx="100" cy="38" r="8" fill="#14B8A6"/>
            <path d="M88 60 a12 12 0 0 1 24 0 z" fill="#14B8A6"/>
            <text x="100" y="80" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#0D9488">조근주 원장</text>
            <circle cx="45" cy="65" r="15" fill="#A7F3D0"/>
            <circle cx="45" cy="60" r="6" fill="#10B981"/>
            <path d="M35 78 a10 10 0 0 1 20 0 z" fill="#10B981"/>
            <text x="45" y="95" textAnchor="middle" fontSize="9" fill="#059669">서울대팀</text>
            <circle cx="155" cy="65" r="15" fill="#A7F3D0"/>
            <circle cx="155" cy="60" r="6" fill="#10B981"/>
            <path d="M145 78 a10 10 0 0 1 20 0 z" fill="#10B981"/>
            <text x="155" y="95" textAnchor="middle" fontSize="9" fill="#059669">의대팀</text>
            <path d="M115 55 Q 130 60, 140 60" stroke="#14B8A6" strokeWidth="2" fill="none" strokeDasharray="3 3"/>
            <path d="M85 55 Q 70 60, 60 60" stroke="#14B8A6" strokeWidth="2" fill="none" strokeDasharray="3 3"/>
        </svg>
    </div>
);

const FeatureCard: React.FC<{
    title: React.ReactNode;
    description: React.ReactNode;
    children: React.ReactNode;
    reverse?: boolean;
}> = ({ title, description, children, reverse = false }) => {
    const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();
    return (
        <div ref={ref} className={`scroll-reveal ${isVisible ? 'visible' : ''} grid lg:grid-cols-2 gap-12 items-center py-12`}>
            <div className={`lg:pr-8 ${reverse ? 'lg:order-2' : ''}`}>
                <h3 className="text-3xl font-black text-gray-800 mb-4 break-keep">{title}</h3>
                <div className="text-gray-600 leading-relaxed space-y-2">{description}</div>
            </div>
            <div className={`p-4 ${reverse ? 'lg:order-1' : ''}`}>
                {children}
            </div>
        </div>
    );
};

const FeaturesSection: React.FC = () => {
    const { ref: sectionRef, isVisible: sectionIsVisible } = useScrollAnimation<HTMLDivElement>();

    return (
        <section ref={sectionRef} className={`py-20 sm:py-32 bg-white scroll-reveal ${sectionIsVisible ? 'visible' : ''}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl font-black mb-4 text-gray-800">
                        ‘명불허전’ 열정 프리미엄 면접 프로그램
                    </h2>
                     <p className="max-w-3xl mx-auto text-lg text-gray-600">
                        최근 학생부 비중 축소로 면접이 강화되었습니다. 열정스토리는 기억나지 않는 내용까지 복원하고, 부족한 부분은 독서/통계 자료로 보강하여 3년간의 활동을 합격의 스토리로 연결합니다. 서울대, 의대 출신 전문가들이 모의 면접까지 실시하여 완벽한 실전을 대비합니다.
                    </p>
                </div>

                <div className="space-y-16">
                    <FeatureCard
                        title="“뭐였더라?” - 기억나지 않는 생기부 활동 100% 복원"
                        description={
                            <p>기재된 책, 보고서의 세부 데이터 등 기억나지 않는 내용까지 자세히 복원합니다. 지난 3년간의 학생부 세특·창체·행특 각 항목을 세밀하게 분석하여 지원자만의 강점을 찾아냅니다.</p>
                        }
                    >
                         <RestoreInfographic />
                    </FeatureCard>

                    <FeatureCard
                        title="흩어진 3년의 점들을 합격의 스토리로 연결"
                        description={
                            <p>3년간의 활동을 횡적·종적으로 연결하는 마인드맵 분석으로 활동의 연계성을 찾아냅니다. 행특에 나타난 특성을 세특/창체와 연결하여 일관된 스토리를 만듭니다.</p>
                        }
                        reverse={true}
                    >
                        <MindmapInfographic />
                    </FeatureCard>
                    
                    <FeatureCard
                        title={<>“내 활동이 이랬더라면...”<br className="hidden lg:block" /> - 이상적인 학생부 재탄생</>}
                        description={
                           <p>평범한 활동을 동기-과정-성취-발전의 우수한 탐구 활동으로 바꾸어 드립니다. 면접관이 주목할 수밖에 없는 깊이 있는 학생부로 답변할 수 있도록 재구성합니다.</p>
                        }
                    >
                         <RebirthInfographic />
                    </FeatureCard>
                    
                    <FeatureCard
                        title="어떤 질문에도 답하는 '만능 답변' 제공"
                        description={
                            <p>자기소개부터 마지막 할 말까지, 면접의 흐름을 지배하는 답변 스토리를 제공합니다. 동기와 논거가 확실한 두괄식 답변 훈련으로 어떤 꼬리 질문에도 유려하게 답할 수 있도록 만듭니다.</p>
                        }
                        reverse={true}
                    >
                         <AnswerInfographic />
                    </FeatureCard>

                    <FeatureCard
                        title="결과로 증명된 대치동 최고의 전문가 그룹"
                        description={
                            <p>MBC 기자 출신 조근주 원장의 합격 전략과 서울대·의대 출신 팀장들이 꼼꼼하고 자세하게 지도하며 실전 모의 면접까지 완벽하게 실시합니다. 대치동 11년의 노하우는 모방할 수 없습니다.</p>
                        }
                    >
                        <ExpertInfographic />
                    </FeatureCard>
                </div>

                <div className="text-center mt-20">
                    <a
                        href="https://blog.naver.com/auraedu/223612477837?trackingCode=blog_bloghome_searchlist"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center bg-blue-600 text-white font-bold py-4 px-10 rounded-lg hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 text-lg shadow-md hover:shadow-lg"
                    >
                        더 자세히 알아보기 - 열정스토리 블로그 바로가기
                        <ArrowRightIcon className="w-6 h-6 ml-3" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;