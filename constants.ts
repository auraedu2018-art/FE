import type { Product, ShopCategory, PromoPageContent, ProgramShowcaseItem, HeroSlide, SuccessStory, Stat, InterviewProduct } from './types';

import AcademicCapIcon from './components/icons/AcademicCapIcon';
import ChartBarIcon from './components/icons/ChartBarIcon';
import LightBulbIcon from './components/icons/LightBulbIcon';
import ShieldCheckIcon from './components/icons/ShieldCheckIcon';
import BookOpenIcon from './components/icons/BookOpenIcon';
import CpuChipIcon from './components/icons/CpuChipIcon';
import PuzzlePieceIcon from './components/icons/PuzzlePieceIcon';
import CodeBracketIcon from './components/icons/CodeBracketIcon';
import SquaresIcon from './components/icons/SquaresIcon';

import DocumentTextIcon from './components/icons/DocumentTextIcon';
import StarIcon from './components/icons/StarIcon';


export const HERO_SLIDES: HeroSlide[] = [
    {
        title: "AI 딥테크+SKY 로드맵",
        subtitle: "초특가 패키지 한정판매",
        description: "최고의 SKY 선배들의 학생부 로드맵",
        imageUrl: "https://picsum.photos/seed/slide1/1200/600",
        ctaText: "자세히 보기",
        ctaLink: "/roadmap",
        category: '로드맵'
    },
    {
        title: "크리에이티브 합격 전략",
        subtitle: "최대 77% 파격.할인",
        description: "이번 여름, 통장 잔고 싹- 불리고 싶다면? 최대 57만원 혜택 받고 시작하기",
        imageUrl: "https://picsum.photos/seed/slide2/1200/600",
        ctaText: "혜택 받기",
        ctaLink: "/events",
        category: 'All-in-One 패키지'
    },
    {
        title: "S-CLASS WEEK",
        subtitle: "SUPER SAVE",
        description: "~82% 역대급 할인 혜택",
        imageUrl: "https://picsum.photos/seed/slide3/1200/600",
        ctaText: "지금 확인하기",
        ctaLink: "/sale",
        category: '전체'
    },
];

export const SCLASS_STATS: Stat[] = [
    { value: '730,291+', label: '누적 생기부 분석 건수' },
    { value: '500+', label: 'SKY-의약대 멘토진' },
    { value: '5,000+', label: '탐구보고서 플랜 보유' },
    { value: '98.7%', label: '진단-처방 만족도' },
];

export const ALL_PRODUCTS: Product[] = [
    {
        id: 9,
        category: '온라인 강의',
        title: '한 입 크기로 잘라먹는 리액트(React.js)',
        author: '이정환 Winterlood',
        tags: ['#React', '#프론트엔드', '#웹개발'],
        price: 71500,
        originalPrice: 110000,
        rating: 5.0,
        reviewCount: 38,
        studentCount: 1300,
        imageUrl: 'https://picsum.photos/seed/reactjs/400/300',
        features: ['영상 강의', '실습 자료'],
        isNew: true,
    },
    {
        id: 1,
        category: 'All-in-One 패키지',
        title: '[All-in-One] 1학년을 위한 학생부 스타터 패키지',
        author: 'S-class 교육팀',
        tags: ['#고1', '#필수', '#종합패키지'],
        price: 299000,
        rating: 4.9,
        reviewCount: 152,
        studentCount: 500,
        imageUrl: 'https://picsum.photos/seed/starterpack/400/300',
        features: ['AI 진단', '포트폴리오', '핵심 강의'],
        isNew: true,
      },
      {
        id: 2,
        category: '진단 프로그램',
        title: '[진단] AI 학생부 정밀 진단 리포트',
        author: 'S-class AI Lab',
        tags: ['#AI분석', '#강점', '#약점'],
        price: 69000,
        originalPrice: 89000,
        rating: 4.8,
        reviewCount: 340,
        studentCount: 1250,
        imageUrl: 'https://picsum.photos/seed/aireport/400/300',
        features: ['탐구역량 분석', '대학별 평가'],
        isUpdate: true,
      },
      {
        id: 3,
        category: '탐구보고서 계획표',
        title: '서울대 선배 따라가기 세트 (컴퓨터공학)',
        author: '김민준 멘토 (서울대)',
        tags: ['#서울대', '#컴퓨터공학', '#심화탐구'],
        price: 159000,
        rating: 5.0,
        reviewCount: 98,
        studentCount: 380,
        imageUrl: 'https://picsum.photos/seed/snucom/400/300',
        features: ['탐구 계획표 5종', '배경지식', 'PPT'],
      },
    {
        id: 4,
        category: '탐구보고서 계획표',
        title: '[생명과학] CAR-T 치료제 기전 탐구 보고서 계획표',
        author: '박서연 멘토 (연세대)',
        tags: ['#의대', '#생명과학', '#탐구우수성'],
        price: 35000,
        originalPrice: 45000,
        rating: 4.9,
        reviewCount: 76,
        studentCount: 880,
        imageUrl: 'https://picsum.photos/seed/cart/400/300',
        features: ['계획표 PDF', '배경지식 요약'],
    },
    {
        id: 5,
        category: '온라인 강의',
        title: '탐구보고서 작성법 A to Z (입문)',
        author: 'S-class 교육팀',
        tags: ['#보고서', '#작성법', '#기초'],
        price: 59000,
        rating: 4.7,
        reviewCount: 215,
        studentCount: 1500,
        imageUrl: 'https://picsum.photos/seed/lecture/400/300',
        features: ['영상 강의', '실습 자료'],
        isUpdate: true,
    },
    {
        id: 6,
        category: '학생부 면접',
        title: '[면접] AI 기반 학생부 면접 완벽 대비',
        author: 'S-class AI Lab',
        tags: ['#면접', '#AI예상질문', '#답변설계'],
        price: 129000,
        rating: 4.8,
        reviewCount: 188,
        studentCount: 950,
        imageUrl: 'https://picsum.photos/seed/interview/400/300',
        features: ['개인별 질문 추출', '답변 가이드'],
    },
    {
        id: 7,
        category: '매거진/자료집',
        title: '월간 S-class 매거진 구독',
        author: 'S-class 입시전략연구소',
        tags: ['#대입정보', '#맞춤형', '#PUSH알림'],
        price: 10000,
        rating: 4.9,
        reviewCount: 550,
        studentCount: 2100,
        imageUrl: 'https://picsum.photos/seed/magazine/400/300',
        features: ['주 2-3회 발송', '최신 이슈 분석'],
    },
    {
        id: 8,
        category: 'S-class 서포터즈',
        title: 'SKY-의약대 멘토와 함께하는 6개월 서포터즈',
        author: 'S-class 멘토단',
        tags: ['#멘토링', '#SKY', '#의약대'],
        price: 599000,
        rating: 5.0,
        reviewCount: 45,
        studentCount: 120,
        imageUrl: 'https://picsum.photos/seed/supporters/400/300',
        features: ['1:1 멘토링', '수행평가 관리'],
    },
    {
        id: 10,
        category: '로드맵',
        title: '서울대 정치외교학과 선배의 3년 학생부 로드맵',
        author: '이수민 멘토 (서울대)',
        tags: ['#서울대', '#정치외교', '#로드맵', '#문과'],
        price: 189000,
        rating: 5.0,
        reviewCount: 72,
        studentCount: 250,
        imageUrl: 'https://picsum.photos/seed/snu-politics/400/300',
        features: ['3년간의 활동 계획', '과목별 탐구 주제', '독서 리스트'],
        isNew: true,
    },
    {
        id: 11,
        category: '로드맵',
        title: '연세대 컴퓨터과학과 선배의 합격 생기부 로드맵',
        author: '박준형 멘토 (연세대)',
        tags: ['#연세대', '#컴퓨터과학', '#로드맵', '#이과'],
        price: 189000,
        rating: 4.9,
        reviewCount: 65,
        studentCount: 310,
        imageUrl: 'https://picsum.photos/seed/yonsei-cs/400/300',
        features: ['프로젝트 아이디어', '대회 준비 전략', '심화 탐구 가이드'],
    },
    {
        id: 12,
        category: '로드맵',
        title: '카이스트 생명과학과 선배의 탐구활동 로드맵',
        author: '최지우 멘토 (KAIST)',
        tags: ['#카이스트', '#생명과학', '#로드맵', '#심화탐구'],
        price: 199000,
        originalPrice: 220000,
        rating: 5.0,
        reviewCount: 88,
        studentCount: 280,
        imageUrl: 'https://picsum.photos/seed/kaist-bio/400/300',
        features: ['R&E 주제 선정', '논문 분석 방법', '실험 계획서'],
        isUpdate: true,
    }
];

export const INTERVIEW_PRODUCTS: InterviewProduct[] = [
    {
        id: 1,
        title: '면접 프로그램 A',
        description: '모의전형 2회 (등원 2회, 각 4시간)으로 최종 합격을 위한 완벽 솔루션입니다.',
        price: 900000,
        type: 'purchase',
        icon: ShieldCheckIcon,
        features: [
            '1회차: 수업 + 연습 자습 + 모의 전형',
            '2회차: 연습 자습 + 모의 전형',
            '등원 시 모의전형 포함 4시간 자습 가능',
            '강의 포함',
            '배경자료집 포함',
        ],
    },
    {
        id: 2,
        title: '면접 프로그램 B',
        description: '모의전형 1회 (등원 1회, 4시간)으로 면접 자신감을 완성하는 핵심 솔루션입니다.',
        price: 600000,
        type: 'purchase',
        icon: AcademicCapIcon,
        features: [
            '강연 + 연습자습 + 모의전형',
            '등원 시 모의전형 포함 4시간',
            '개인별 면접 레포트 제공',
            '강의 포함',
            '배경자료집 포함',
        ],
    },
    {
        id: 3,
        title: '면접용 레포트 Only',
        description: '학생부 분석/복원/보강과 모의면접 질문 제공, 그리고 핵심 강의/자료집이 포함된 패키지입니다.',
        price: 300000,
        type: 'purchase',
        icon: DocumentTextIcon,
        features: [
            '학생부 철저 분석 및 복원/보강',
            '개인별 맞춤 모의면접 질문 제공',
            '강의 포함',
            '배경자료집 포함',
        ],
    },
    {
        id: 4,
        title: '프리미엄 면접반',
        description: '학생의 상황에 따른 1:1 맞춤 면접 프로그램입니다. 합격할 때까지 함께합니다.',
        type: 'inquiry',
        icon: StarIcon,
        features: [
            '1:1 맞춤 지도',
            '면접 자신 있을 때까지 지도',
            '기출/예상문제 및 최신이슈 자료집',
            '학생부기반 면접용 레포트 제공',
        ],
    },
    {
        id: 5,
        title: '강의 Only',
        description: 'MBC 기자 출신 원장의 면접 합격 전략 핵심 강의입니다.',
        price: 50000,
        type: 'purchase',
        icon: BookOpenIcon,
        features: [
            'MBC기자출신 원장 직강',
            '면접 합격 전략 핵심 포인트',
            '온라인 VOD 제공',
        ],
    },
    {
        id: 6,
        title: '배경자료집 Only',
        description: '최신 이슈와 기출문제가 포함된 면접 대비 필수 자료집입니다.',
        price: 50000,
        type: 'purchase',
        icon: PuzzlePieceIcon,
        features: [
            '25년 최신 국제/국내 이슈 정리',
            '기출/예상문제 데이터베이스',
            'PDF 파일 제공',
        ],
    },
];

export const INTERVIEW_QUESTIONS = [
    { id: 'university', label: '1. 지원하고자 하는 대학과 학과(계열)를 모두 적어주세요.', type: 'textarea' },
    { id: 'activities', label: '2. 학생부에서 가장 의미 있었던 활동 3가지를 적어주세요.', type: 'textarea' },
    { id: 'strengths', label: '3. 자신의 장점과 단점을 구체적인 경험을 바탕으로 서술해주세요.', type: 'textarea' },
    { id: 'career', label: '4. 장래희망과 그를 위해 어떤 노력을 해왔는지 알려주세요.', type: 'textarea' },
    { id: 'motive', label: '5. S-class 면접 프로그램을 신청하게 된 동기를 알려주세요.', type: 'textarea' },
];

export const SHOP_CATEGORIES: ShopCategory[] = [
    { name: 'All-in-One 패키지', subcategories: [] },
    { name: '진단 프로그램', subcategories: [] },
    { name: '차학기 포트폴리오', subcategories: [] },
    { name: '탐구보고서 계획표', subcategories: ['계열별', '과목별', '키워드별'] },
    { name: '로드맵', subcategories: [] },
    { name: '온라인 강의', subcategories: [] },
    { name: '학생부 면접', subcategories: [] },
    { name: '매거진/자료집', subcategories: [] },
    { name: 'S-class 서포터즈', subcategories: [] },
];

export const SHOP_ONLY_CATEGORIES = ['탐구보고서 계획표', '로드맵', '온라인 강의', '전체'];

export const PROMO_PAGE_DATA: PromoPageContent[] = [
    {
        category: 'All-in-One 패키지',
        title: '1학년을 위한 학생부 스타터 패키지',
        subtitle: '무엇부터 시작해야 할지 막막한 고1을 위한 완벽한 시작',
        description: 'AI 진단부터 학기별 포트폴리오 설계, 그리고 핵심 역량을 키우는 강의까지. S-class의 모든 노하우를 담은 All-in-One 패키지로 학생부 종합전형의 첫 단추를 가장 확실하게 꿰어보세요. 더 이상 방황하지 않고, 체계적인 관리로 격차를 만듭니다.',
        imageUrl: 'https://picsum.photos/seed/promo-allinone/1200/600',
        ctaText: '패키지 상담 신청하기',
    },
    {
        category: '진단 프로그램',
        title: 'AI 학생부 정밀 진단 리포트',
        subtitle: '나의 현재 위치와 합격 가능성을 정확하게 진단합니다',
        description: '수십만 건의 합격자 데이터를 학습한 S-class의 AI가 당신의 학생부를 대학 평가 기준에 맞춰 정밀 분석합니다. 강점은 무엇이고 약점은 무엇인지, 어떤 역량을 보완해야 하는지 명확한 데이터 기반의 리포트를 받아보세요. 이것이 바로 초개인화 입시 전략의 시작입니다.',
        imageUrl: 'https://picsum.photos/seed/promo-diag/1200/600',
        ctaText: 'AI 진단 신청하기',
    },
    {
        category: '차학기 포트폴리오',
        title: '다음 학기를 위한 합격 로드맵',
        subtitle: '진단 결과를 바탕으로 최적의 활동 계획을 처방합니다',
        description: 'AI 진단으로 약점을 찾았다면, 이제는 채워나갈 시간입니다. S-class는 학생 개개인의 진단 결과에 맞춰 다음 학기 학생부를 채워나갈 최적의 탐구 활동, 독서 활동, 교내 활동 포트폴리오를 설계해드립니다. 더 이상 무엇을 해야 할지 고민하지 마세요.',
        imageUrl: 'https://picsum.photos/seed/promo-portfolio/1200/600',
        ctaText: '포트폴리오 신청하기',
    },
    {
        category: '학생부 면접',
        title: 'AI 기반 학생부 면접 완벽 대비',
        subtitle: '교수의 시각으로 예측하는 면접 질문과 답변 설계',
        description: '단순한 예상 질문 나열이 아닙니다. 당신의 학생부에서 가장 중요한 핵심 활동을 추출하고, 평가자의 관점에서 나올 수 있는 모든 압박 질문과 꼬리 질문을 AI가 예측합니다. 여기에 SKY 멘토진의 노하우가 담긴 답변 가이드까지 더해져 면접을 완벽하게 지배할 수 있습니다.',
        imageUrl: 'https://picsum.photos/seed/promo-interview/1200/600',
        ctaText: '면접 프로그램 신청하기',
    },
    {
        category: '매거진/자료집',
        title: '월간 S-class 매거진 구독',
        subtitle: '가장 빠르고 정확한 대입 정보, 매주 당신의 폰으로',
        description: "잘못된 정보가 넘쳐나는 입시 시장에서 가장 중요한 것은 '진짜 정보'입니다. S-class 입시전략연구소가 직접 분석하고 정리한 최신 대입 뉴스, 학과별 트렌드, 시기별 학습 전략을 매주 2-3회 카카오톡으로 보내드립니다. 월 1만원으로 대치동 상위 1%의 정보력을 가지세요.",
        imageUrl: 'https://picsum.photos/seed/promo-magazine/1200/600',
        ctaText: '지금 바로 구독하기',
    },
    {
        category: 'S-class 서포터즈',
        title: 'SKY-의약대 멘토와 함께하는 6개월',
        subtitle: '최상위권 선배들의 밀착 관리로 수행평가-탐구보고서 완성',
        description: '혼자 하기 벅찬 수행평가와 탐구보고서, 이제 SKY-의약대 멘토와 함께 하세요. 6개월간 배정된 멘토가 비대면으로 당신의 모든 과정을 함께하며 최고의 결과물을 만들 수 있도록 돕습니다. 단순 과외를 넘어, 입시 성공의 경험을 전수받는 최고의 기회입니다.',
        imageUrl: 'https://picsum.photos/seed/promo-supporters/1200/600',
        ctaText: '서포터즈 지원하기',
    }
];

export const PROGRAM_SHOWCASE_DATA: ProgramShowcaseItem[] = [
    { category: '진단 프로그램', title: 'AI 진단', description: '데이터로 나의 위치 분석', icon: ChartBarIcon, color: 'blue' },
    { category: 'All-in-One 패키지', title: 'All-in-One', description: '종합전형 전체 과정 관리', icon: ShieldCheckIcon, color: 'purple' },
    { category: '로드맵', title: '선배 로드맵', description: '합격 선배의 길 따라가기', icon: AcademicCapIcon, color: 'green' },
    { category: '탐구보고서 계획표', title: '탐구보고서', description: '심화 탐구 주제 찾기', icon: BookOpenIcon, color: 'pink' },
    { category: '학생부 면접', title: '학생부 면접', description: 'AI 기반 면접 완벽 대비', icon: LightBulbIcon, color: 'blue' },
    { category: '차학기 포트폴리오', title: '차학기 플랜', description: '다음 학기 활동 설계', icon: CpuChipIcon, color: 'purple' },
    { category: '온라인 강의', title: '온라인 강의', description: '핵심 개념 & 작성법 강의', icon: CodeBracketIcon, color: 'pink' },
    { category: '전체', title: '강의 전체보기', description: '모든 강의 둘러보기', icon: SquaresIcon, color: 'green' }
];

export const SUCCESS_STORIES: SuccessStory[] = [
    {
      imageUrl: 'https://picsum.photos/seed/student1/100/100',
      studentInfo: '김OO 학생 (서울대 컴퓨터공학부)',
      quote: 'S-class 로드맵이 없었다면 불가능했을 거예요.',
      story: '일반고에서 내신 2점대였지만, S-class의 컴퓨터공학 로드맵을 따라 심화 탐구를 진행한 것이 합격의 결정적인 이유가 되었습니다.'
    },
    {
      imageUrl: 'https://picsum.photos/seed/student2/100/100',
      studentInfo: '이OO 학생 (연세대 의예과)',
      quote: 'AI 진단이 제 약점을 정확히 짚어줬어요.',
      story: 'AI 진단 리포트를 통해 부족했던 생명과학 탐구 역량을 확인하고, 추천받은 탐구보고서 계획표로 학생부를 보완할 수 있었습니다.'
    },
    {
      imageUrl: 'https://picsum.photos/seed/student3/100/100',
      studentInfo: '박OO 학생 (고려대 경영학과)',
      quote: '면접 준비, S-class 하나로 끝냈습니다.',
      story: '학생부 기반 AI 예상 질문과 답변 가이드 덕분에 어떤 질문에도 자신감 있게 대답할 수 있었고, 최종 합격까지 이어졌습니다.'
    }
];

export const BEST_SELLER_PRODUCTS: Product[] = [...ALL_PRODUCTS].sort((a, b) => (b.studentCount * b.rating) - (a.studentCount * a.rating));

export const ALL_TAGS = [...new Set(ALL_PRODUCTS.flatMap(p => p.tags))].sort();