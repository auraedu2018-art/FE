
import React from 'react';

const StepCard: React.FC<{
    step: string;
    title: string;
    subtitle: string;
    description: string;
    imageUrl: string;
    imageFirst?: boolean;
}> = ({ step, title, subtitle, description, imageUrl, imageFirst = false }) => {
    return (
        <div className={`flex flex-col ${imageFirst ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12`}>
            <div className="md:w-1/2">
                <p className="text-brand-500 font-bold tracking-widest">{step}</p>
                <h3 className="text-3xl md:text-4xl font-bold text-dark-900 mt-2">{title}</h3>
                <h4 className="text-xl text-slate-600 mt-2">{subtitle}</h4>
                <p className="mt-6 text-slate-700 leading-relaxed">{description}</p>
            </div>
            <div className="md:w-1/2">
                <img src={imageUrl} alt={title} className="rounded-lg shadow-2xl w-full object-cover aspect-video" />
            </div>
        </div>
    );
};

const OurSystemPage: React.FC = () => {
    return (
        <div className="bg-white py-20">
            <div className="container mx-auto px-6 space-y-24">
                <div className="text-center">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-dark-900">
                        S-class의 독보적인
                        <span className="text-brand-500"> 3단계 솔루션</span>
                    </h2>
                    <p className="mt-6 text-lg text-slate-600 max-w-3xl mx-auto">
                        고객을 '설득'하는 가장 중요한 공간입니다. S-class는 단순한 정보 제공을 넘어, 학생 개개인의 성공적인 입시를 위한 체계적인 시스템을 구축했습니다.
                    </p>
                </div>

                <StepCard
                    step="STEP 1"
                    title="진단 (Diagnosis)"
                    subtitle="당신의 현재 위치를 정확하게 파악합니다."
                    description="대학 평가 기준과 S-class의 탐구 역량 평가 로직에 기반한 AI가 학생부의 강점과 약점을 낱낱이 분석합니다. 어떤 키워드가 강점이고, 어떤 역량을 보충해야 하는지 명확한 데이터를 통해 보여드립니다. 고1 학생들을 위한 '탐구 역량 진단' 설문도 제공하여, 학생부가 없어도 시작할 수 있습니다."
                    imageUrl="https://picsum.photos/seed/diagnosis/600/400"
                />

                <StepCard
                    step="STEP 2"
                    title="처방 (Prescription)"
                    subtitle="합격을 위한 최적의 로드맵을 설계합니다."
                    description="진단 결과를 바탕으로 다음 학기, 어떤 활동으로 부족한 역량을 채우고 강점을 어필할지 마인드맵 형태의 포트폴리오로 제시합니다. 전공적합성, 학업역량, 발전가능성 등 각 평가요소에 맞춰 어떤 탐구 활동을 해야 하는지, 어떤 책을 읽어야 하는지 구체적인 계획을 제공하여 막연함을 없애줍니다."
                    imageUrl="https://picsum.photos/seed/prescription/600/400"
                    imageFirst={true}
                />

                <StepCard
                    step="STEP 3"
                    title="치료 (Treatment)"
                    subtitle="실행에 필요한 모든 콘텐츠를 제공합니다."
                    description="로드맵을 현실로 만들 5,000개 이상의 탐구보고서 계획표, 심화 개념 강의, 배경지식 자료, 발표용 PPT, 면접 가이드까지. S-class가 끝까지 함께합니다. 학생이 필요로 하는 모든 자료를 한 곳에서 찾아볼 수 있어, 시간 낭비 없이 탐구 활동에만 집중할 수 있습니다."
                    imageUrl="https://picsum.photos/seed/treatment/600/400"
                />
            </div>
        </div>
    );
};

export default OurSystemPage;