import React from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const reviews = [
    { id: 1, title: "[수시상담 후기] 만족도 200%, 상당히 전문적이고 객관적이었습니다.", content: "분석하는데만 6시간 소요, 상담 이전과 이후 수시원서 방향이 바뀌었어요." },
    { id: 2, title: "[자사고 학부모 후기] 정말 행운이라 생각하고 많은 도움이 되었습니다.", content: "흔하지 않은 IB 과정까지 면밀하게 분석해주셔서 감사합니다." },
    { id: 3, title: "[대구 학부모 후기] 타 컨설팅에서 볼 수 없었던 매칭과 근거에 놀랐습니다.", content: "객관적 데이터로 변환하여 결론을 내주셔서 신뢰할 수 있었어요." },
    { id: 4, title: "[재수생/반수생 학부모 후기] 한줄기 빛과 같았습니다.", content: "작년에 왜 불합격했는지 설명해주시고 합격 가능성이 높은 학교를 선택해주셨어요." },
    { id: 5, title: "[상담 후기] 최고의 선택이 될 예감!!", content: "70여 페이지 보고서만으로도 감동, 추천대학 리스트 산출 설명이 도움되었습니다." },
    { id: 6, title: "[상담 후기] 상담 후 정리가 되었습니다.", content: "생기부를 자세히 분석, 자체 점수로 비교해주시니 경쟁력 여부 판단이 되어 좋았습니다." },
    { id: 7, title: "[지인 추천 후기] 정확한 데이터를 바탕으로 꼼꼼하게 파악해주셨습니다.", content: "객관적인 생기부 분석이 필요했는데 세세히 분석해주셔서 아이가 도움이 많이 되었다고 합니다." },
    { id: 8, title: "[수시 상담 후기] 입사관의 시선으로 분석해주셨어요.", content: "유리한 전형과 학교를 꼼꼼하게 찾아주셔서 원서 방향을 잡는 데 큰 도움이 되었습니다." },
    { id: 9, title: "[상담 후기] 꼭 붙여주고 싶다는 마음이 느껴졌습니다.", content: "상담 시간이 예상보다 길어졌지만, 그만큼 열정적으로 임해주셔서 감사했습니다." }
];

const SocialProofSection: React.FC = () => {
    const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

    return (
        <section ref={ref} className={`py-20 sm:py-32 scroll-reveal ${isVisible ? 'visible' : ''}`}>
            <div className="bg-white rounded-2xl p-8 sm:p-12 border border-gray-200 shadow-xl">
                <div className="text-center mb-12">
                    <h2 className="text-4xl sm:text-5xl font-black text-gray-800 mb-4 break-keep">“왜 <span className="gradient-text">명불허전</span>인지<br className="sm:hidden" /> 알겠습니다.”</h2>
                    <p className="max-w-3xl mx-auto text-lg text-gray-600">
                        26 수시지원 상담 학생들의 생생한 후기
                        <br/>
                        당신의 이름이 다음 합격 후기의 주인공이 될 차례입니다.
                    </p>
                </div>
                
                <div className="max-w-2xl mx-auto bg-gray-50 p-6 rounded-xl border border-gray-200 shadow-inner">
                    <div className="flex items-center mb-4 pb-4 border-b border-gray-200">
                        <img src="https://i.ibb.co/6P8g40T/naver-cafe-logo.png" alt="Naver Cafe" className="h-6 mr-3"/>
                        <h4 className="font-bold text-lg text-gray-800">열정스토리 합격생 공식 카페</h4>
                    </div>
                    <div className="h-48 overflow-hidden relative">
                        <div className="animate-[scroll-up_25s_linear_infinite]">
                            {reviews.concat(reviews).map((review, index) => (
                                <div key={index} className="p-3 hover:bg-gray-100 rounded-md transition-colors">
                                    <p className="font-bold text-gray-800 truncate">{review.title}</p>
                                    <p className="text-sm text-gray-500 truncate">{review.content}</p>
                                </div>
                            ))}
                        </div>
                         <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-gray-50 to-transparent"></div>
                    </div>
                </div>

                <div className="text-center mt-12">
                    <a
                        href="https://cafe.naver.com/f-e/cafes/10650519/menus/1722?viewType=L"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-green-500 text-white font-bold py-3 px-8 rounded-lg hover:bg-green-600 transition-colors"
                    >
                        '합격생' 카페에서 후기 더보기
                    </a>
                </div>
            </div>
        </section>
    );
};

export default SocialProofSection;