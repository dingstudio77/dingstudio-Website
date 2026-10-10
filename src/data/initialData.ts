import {
  PortfolioItem,
  RealtimeInquiry,
  ReviewItem,
  FaqItem,
  MetricItem,
  PackagePlan,
} from '../types';

import heroImg from '../assets/images/hero_branding_showcase_1790579925619.jpg';
import cafeImg from '../assets/images/portfolio_cafe_branding_1790579943658.jpg';
import techImg from '../assets/images/portfolio_tech_website_1790579962466.jpg';
import beautyImg from '../assets/images/portfolio_beauty_detailpage_1790579976370.jpg';
import dingLogoWhite from '../assets/images/ding_logo_white.png';
import dingLogoDark from '../assets/images/ding_logo_primary_cropped.png';
import dingHeroDesk from '../assets/images/crystal_glass_hero_1790735933836.jpg';

// Visual assets matching the reference portfolio design
import lumeaCoffeeImg from '../assets/images/review_lumea_coffee_1790582373648.jpg';
import mindlightWebImg from '../assets/images/mindlight_counsel_web_1790592351078.jpg';
import tethysBrandImg from '../assets/images/tethys_space_brand_1790592367308.jpg';
import sailorKimbapImg from '../assets/images/sailor_kimbap_logo_1790592380151.jpg';
import gwangsuCafeImg from '../assets/images/gwangsu_cafe_web_1790592403235.jpg';
import arovelSkincareImg from '../assets/images/arovel_skincare_prod_1790592426527.jpg';

import gridaImg from '../assets/images/review_grida_web_1790582388998.jpg';
import bloomImg from '../assets/images/review_bloom_muse_1790582401756.jpg';
import livingImg from '../assets/images/review_living_mockup_1790582567352.jpg';
import dessertImg from '../assets/images/review_dessert_mockup_1790582595666.jpg';

export {
  heroImg,
  cafeImg,
  techImg,
  beautyImg,
  dingLogoWhite,
  dingLogoDark,
  dingHeroDesk,
  lumeaCoffeeImg,
  mindlightWebImg,
  tethysBrandImg,
  sailorKimbapImg,
  gwangsuCafeImg,
  arovelSkincareImg,
  gridaImg,
  bloomImg,
  livingImg,
  dessertImg,
};

export const INITIAL_METRICS: MetricItem[] = [
  {
    id: 'projects',
    number: '180',
    suffix: '+',
    label: '누적 완료 프로젝트',
    sublabel: '로고·홈페이지·상세페이지 올인원 진행'
  },
  {
    id: 'brands',
    number: '140',
    suffix: '+',
    label: '브랜드 디자인 런칭',
    sublabel: '예비창업자 및 소상공인 전문 브랜딩'
  },
  {
    id: 'satisfaction',
    number: '98.6',
    suffix: '%',
    label: '첫 시안 만족도',
    sublabel: '심층 사전 인터뷰 기반 높은 적중률'
  },
  {
    id: 'duration',
    number: '3~5',
    suffix: '일',
    label: '평균 첫 시안 소요기간',
    sublabel: '불필요한 대기 없이 신속한 1차 시안 제공'
  }
];

export const INITIAL_PORTFOLIO: PortfolioItem[] = [
  // Page 1 (Exact match with user's reference mockup image)
  {
    id: 'p-lumea-coffee',
    title: 'LUMEA COFFEE',
    client: '스페셜티 커피 브랜드',
    category: 'LOGO',
    categoryLabel: '로고디자인',
    summary: '감각적인 커피 브랜드의 아이덴티티 디자인',
    description: '은은하고 고급스러운 질감의 미니멀 심볼과 세련된 세리프 타이포그래피로 감각적인 커피 브랜드의 정체성을 완성했습니다. 컵, 슬리브, 원두 패키지에 일관된 톤앤매너를 부여했습니다.',
    image: lumeaCoffeeImg,
    deliverables: ['심볼 & 워드마크 로고', '브랜드 컬러 & 가이드북', '테이크아웃 컵 및 슬리브 시안', '명함 및 스탬프 키트'],
    duration: '4일',
    tags: ['카페 / F&B', '로고디자인', '브랜드 아이덴티티'],
    featured: true
  },
  {
    id: 'p-mindlight',
    title: '마음빛 심리상담센터',
    client: '전문 심리상담 클리닉',
    category: 'WEBSITE',
    categoryLabel: '홈페이지',
    summary: '따뜻하고 신뢰감 있는 상담센터 홈페이지',
    description: '심리적 안정감을 주는 부드러운 아치 곡선과 뉴트럴 베이지 톤을 활용한 반응형 공식 웹사이트입니다. 방문자가 편안하게 상담 예약을 신청할 수 있도록 동선을 설계했습니다.',
    image: mindlightWebImg,
    deliverables: ['반응형 PC & 모바일 웹 디자인', '상담 예약 신청 플로우', '전문가 소개 인터랙션', 'SEO 검색엔진 최적화'],
    duration: '10일',
    tags: ['전문직 / 힐링', '반응형 웹', 'UI/UX 디자인'],
    featured: true
  },
  {
    id: 'p-tethys-space',
    title: '테티스페이스',
    client: '프리미엄 웰니스 & 라이프스타일',
    category: 'BRAND',
    categoryLabel: '브랜딩 패키지',
    summary: '로고부터 홈페이지, 상세페이지까지 올인원 브랜딩',
    description: '여신의 우아한 실루엣을 모티프로 한 골드 포일 엠블럼과 딥 에메랄드 그린 컬러의 조화. 로고 심볼부터 고급 스테이셔너리 패키지, 반응형 쇼룸 웹사이트까지 원스톱으로 제작되었습니다.',
    image: tethysBrandImg,
    deliverables: ['올인원 브랜드 아이덴티티', '프리미엄 패키지 & 지류 키트', '공식 쇼룸 웹사이트', '상세페이지 템플릿'],
    duration: '14일',
    tags: ['올인원 패키지', '럭셔리 / 웰니스', '토탈 브랜딩'],
    featured: true
  },
  {
    id: 'p-sailor-kimbap',
    title: '뱃사람한끼',
    client: '제주 프리미엄 분식 브랜드',
    category: 'LOGO',
    categoryLabel: '로고디자인',
    summary: '제주 감성을 담은 분식 브랜드 로고',
    description: '바다의 신선함과 정겨운 손맛을 친근한 마린 소년 캐릭터와 랍스터 일러스트로 풀어낸 캐릭터 로고입니다. 간판, 포장 용기, 스티커 등 다양한 온·오프라인 매체에 유쾌하게 적용됩니다.',
    image: sailorKimbapImg,
    deliverables: ['캐릭터 일러스트 로고', '간판 및 사이니지 규격서', '포장 패키지 & 스티커', 'SNS 프로필 키트'],
    duration: '5일',
    tags: ['외식 / F&B', '캐릭터 로고', '제주 감성'],
    featured: true
  },
  {
    id: 'p-gwangsu-cafe',
    title: '광수생각 카페',
    client: '스페셜티 로스터리 카페',
    category: 'WEBSITE',
    categoryLabel: '홈페이지',
    summary: '편안한 분위기의 카페 홈페이지',
    description: '원목과 따스한 햇살이 머무는 매장의 아늑한 분위기를 그대로 온라인으로 재현한 감성 웹사이트입니다. 원두 정기구독과 오프라인 매장 안내를 직관적으로 제공합니다.',
    image: gwangsuCafeImg,
    deliverables: ['브랜드 스토리 웹사이트', '원두 구독 결제 연동 UI', '오프라인 매장 안내 지도', '인스타그램 피드 연동'],
    duration: '8일',
    tags: ['카페 / 베이커리', '반응형 웹', '브랜드 쇼케이스'],
    featured: true
  },
  {
    id: 'p-arovel-cosmetics',
    title: 'Arovel 화장품',
    client: '비건 더마 스킨케어 브랜드',
    category: 'DETAIL PAGE',
    categoryLabel: '상세페이지',
    summary: '브랜드 무드를 살린 제품 상세페이지 디자인',
    description: '고급스러운 제형감과 미니멀한 패키지의 감성을 극대화한 이커머스 상세페이지입니다. 원료 추출 공정부터 임상 데이터, 실사용 후기까지 스크롤을 내릴수록 설득되는 비주얼 아키텍처를 구축했습니다.',
    image: arovelSkincareImg,
    deliverables: ['롱폼 이커머스 상세페이지', '와디즈/스마트스토어 최적화', '제형 연출 그래픽 컷', '기획 카피라이팅'],
    duration: '6일',
    tags: ['코스메틱 / 뷰티', '상세페이지', '고전환 이커머스'],
    featured: true
  },

  // Page 2
  {
    id: 'p-werk-off',
    title: '베르크 오프 로스터스',
    client: '스페셜티 커피 브랜드',
    category: 'BRAND',
    categoryLabel: '브랜딩 패키지',
    summary: '심플한 워드마크부터 컵, 원두 패키지까지 일관된 톤앤매너 완성',
    description: '바리스타 대표님의 철학을 담아 군더더기 없는 미니멀리즘과 묵직한 타이포그래피를 결합한 브랜드 아이덴티티입니다.',
    image: cafeImg,
    deliverables: ['심볼 & 워드마크 로고', '브랜드 가이드북', '원두 패키지 3종', '명함 및 스티커 키트'],
    duration: '10일',
    tags: ['식음료 / F&B', '올인원 브랜딩', '패키지 디자인']
  },
  {
    id: 'p-nexus-datalab',
    title: '넥서스 데이터랩',
    client: 'B2B AI 물류 SaaS 스타트업',
    category: 'WEBSITE',
    categoryLabel: '홈페이지',
    summary: '복잡한 물류 솔루션을 3초 만에 이해시키는 직관적 웹사이트',
    description: '기술력은 뛰어나지만 고객에게 전달하기 어려웠던 B2B SaaS의 가치를 깔끔한 정보 구조와 신뢰감 있는 인터랙션으로 풀어냈습니다.',
    image: techImg,
    deliverables: ['홈페이지 기획 및 와이어프레임', '반응형 UI/UX 디자인', '인터랙션 모션 설계', 'SEO 메타데이터'],
    duration: '14일',
    tags: ['IT / 스타트업', '반응형 웹', '고객 전환 중심']
  },
  {
    id: 'p-foret-charlotte',
    title: '포레스트 드 샬롯',
    client: '비건 더마 스킨케어',
    category: 'DETAIL PAGE',
    categoryLabel: '상세페이지',
    summary: '와디즈 펀딩 1,200% 달성을 이끌어낸 스토리텔링 상세페이지',
    description: '스마트스토어와 자사몰에서 고객의 이탈을 막고 신뢰를 전달하는 롱폼 상세페이지입니다.',
    image: beautyImg,
    deliverables: ['상세페이지 기획 카피라이팅', '모바일 최적화 고해상도 그래픽', 'GIF 제형 모션 그래픽', '썸네일 배너 세트'],
    duration: '7일',
    tags: ['뷰티 / 이커머스', '스마트스토어/와디즈', '구매전환 최적화']
  },
  {
    id: 'p-bloom-muse',
    title: '블룸 뮤즈 플라워',
    client: '부티크 플라워 아틀리에',
    category: 'LOGO',
    categoryLabel: '로고디자인',
    summary: '자연의 유려한 선을 담아낸 감성 꽃집 로고',
    description: '꽃잎의 섬세한 유기적 라인과 현대적인 세리프 타이포를 결합하여 꽃집의 프리미엄 감성을 표현했습니다.',
    image: bloomImg,
    deliverables: ['라인 드로잉 로고', '포장지 & 리본 인쇄 규격', '쇼핑백 및 라벨 디자인', '스탬프 키트'],
    duration: '4일',
    tags: ['라이프스타일', '로고디자인', '감성 브랜딩']
  },
  {
    id: 'p-grida-arch',
    title: '그리다 건축사사무소',
    client: '모던 건축 & 인테리어 스튜디오',
    category: 'WEBSITE',
    categoryLabel: '홈페이지',
    summary: '공간의 미학을 담은 건축 포트폴리오 웹사이트',
    description: '군더더기 없는 그리드 시스템과 큼직한 건축 사진 연출로 건축주의 신뢰를 즉각 확보하는 아카이브 웹입니다.',
    image: gridaImg,
    deliverables: ['건축 포트폴리오 갤러리', '고해상도 이미지 최적화', '반응형 모바일 뷰', '견적 문의 시스템'],
    duration: '12일',
    tags: ['건축 / 인테리어', '반응형 웹', '포트폴리오']
  },
  {
    id: 'p-sweet-afternoon',
    title: '달콤한 오후 디저트',
    client: '수제 구움과자 전문점',
    category: 'DETAIL PAGE',
    categoryLabel: '상세페이지',
    summary: '선물용 프리미엄 구움과자 선물세트 상세페이지',
    description: '버터의 풍미와 바삭한 단면을 생생하게 담은 푸드 포토그래피와 패키지 구성 안내로 답례품 주문율을 극대화했습니다.',
    image: dessertImg,
    deliverables: ['푸드 스타일링 컷 기획', '상세페이지 그래픽 디자인', '네이버 스마트스토어 등록', '답례품 주문 폼'],
    duration: '5일',
    tags: ['디저트 / F&B', '상세페이지', '이커머스']
  },

  // Page 3
  {
    id: 'p-atelier-mignon',
    title: '아뜰리에 미뇽',
    client: '프리미엄 세라믹 & 리빙 공방',
    category: 'BRAND',
    categoryLabel: '브랜딩 패키지',
    summary: '흙의 온기를 전하는 세라믹 브랜드 올인원 브랜딩',
    description: '공방 오픈을 앞두고 로고, 택 디자인, 인스타그램 템플릿, 그리고 모바일 쇼룸까지 한 번에 해결한 프로젝트입니다.',
    image: heroImg,
    deliverables: ['한글/영문 로고 타입', '보증서 및 패키지 라벨', '온라인 쇼룸 디자인', '소셜미디어 가이드'],
    duration: '12일',
    tags: ['라이프스타일', '소상공인 올인원', '로고 & 웹 동시 진행']
  },
  {
    id: 'p-urban-living',
    title: '어반 리빙 홈데코',
    client: '북유럽 라이프스타일 셀렉트숍',
    category: 'DETAIL PAGE',
    categoryLabel: '상세페이지',
    summary: '원목 가구의 따뜻한 감성을 전하는 이커머스 상세페이지',
    description: '실제 주거 공간에 자연스럽게 녹아드는 인테리어 무드 컷과 세부 규격 안내로 반품률을 줄이고 만족도를 높였습니다.',
    image: livingImg,
    deliverables: ['제품 룩북 상세페이지', '사이즈 가이드 인포그래픽', '원자재 품질 보증서', '모바일 전용 레이아웃'],
    duration: '6일',
    tags: ['가구 / 인테리어', '상세페이지', '스마트스토어']
  },
  {
    id: 'p-more-design',
    title: '모어앤모어 디자인',
    client: '크리에이티브 디자인 에이전시',
    category: 'LOGO',
    categoryLabel: '로고디자인',
    summary: '볼드하고 트렌디한 타이포그래픽 심볼 로고',
    description: '젊고 감각적인 에너지를 담은 볼드 타이포그래피와 모던한 배색으로 에이전시의 전문성을 드러냈습니다.',
    image: dingHeroDesk,
    deliverables: ['타이포그래피 워드마크', '명함 및 사원증', '서식류 키트', '소셜 채널 브랜딩'],
    duration: '4일',
    tags: ['에이전시', '로고디자인', '타이포그래피']
  },
  {
    id: 'p-solution-labs',
    title: '솔루션랩스',
    client: '클라우드 보안 및 인프라',
    category: 'WEBSITE',
    categoryLabel: '홈페이지',
    summary: '보안 솔루션 전문 기업의 하이엔드 기업 웹사이트',
    description: '글로벌 엔터프라이즈 고객에게 안정감과 최첨단 보안 기술력을 각인시키는 다크 모던 테크 웹사이트입니다.',
    image: techImg,
    deliverables: ['기업 IR 웹사이트', '솔루션 아키텍처 다이어그램', '보안 인증서 쇼케이스', '다국어 지원 UI'],
    duration: '14일',
    tags: ['B2B / 보안', '홈페이지', '테크 웹사이트']
  },
  {
    id: 'p-lafeliz-salon',
    title: '라 펠리즈 살롱',
    client: '프리미엄 헤어 & 스파',
    category: 'LOGO',
    categoryLabel: '로고디자인',
    summary: '우아한 세리프와 미니멀 엠블럼의 뷰티 살롱 로고',
    description: '고객에게 힐링과 특별한 경험을 선사하는 프리미엄 살롱의 감성을 세련된 필기체 심볼과 샴페인 골드로 표현했습니다.',
    image: bloomImg,
    deliverables: ['엠블럼 & 워드마크', '매장 간판 디자인', '멤버십 카드 & 바우처', '시술 메뉴판'],
    duration: '5일',
    tags: ['뷰티 / 살롱', '로고디자인', '골드 엠블럼']
  },
  {
    id: 'p-hazelnut-bakery',
    title: '헤이즐넛 베이커리',
    client: '프렌치 베이커리 & 브런치 카페',
    category: 'BRAND',
    categoryLabel: '브랜딩 패키지',
    summary: '파리의 아침을 떠올리게 하는 베이커리 패키지 & 로고',
    description: '클래식한 유러피언 감성을 담은 베이커리 로고와 빵 포장지, 틴케이스 패키지, 브랜드 웹사이트를 패키지로 완성했습니다.',
    image: dessertImg,
    deliverables: ['클래식 베이커리 심볼', '빵 포장지 & 틴케이스', '모바일 웹 쇼케이스', '매장 스티커 키트'],
    duration: '11일',
    tags: ['F&B / 베이커리', '브랜딩 패키지', '패키지 디자인']
  }
];

export const INITIAL_INQUIRIES: RealtimeInquiry[] = [
  {
    id: 'inq-1',
    type: '견적문의 및 문의',
    message: '로고와 홈페이지 패키지 견적 문의가 접수되었습니다.',
    timeAgo: '방금 전',
    timestamp: '2026-09-28 15:21',
    isNew: true
  },
  {
    id: 'inq-2',
    type: '로고디자인 문의',
    message: '신규 카페 브랜드 로고 상담이 접수되었습니다.',
    timeAgo: '4분 전',
    timestamp: '2026-09-28 15:17'
  },
  {
    id: 'inq-3',
    type: '홈페이지 문의',
    message: '쇼핑몰 홈페이지 제작 문의가 접수되었습니다.',
    timeAgo: '12분 전',
    timestamp: '2026-09-28 15:09'
  },
  {
    id: 'inq-4',
    type: '상세페이지 문의',
    message: '건강기능식품 신제품 와디즈 상세페이지 견적 상담이 접수되었습니다.',
    timeAgo: '32분 전',
    timestamp: '2026-09-28 14:49'
  },
  {
    id: 'inq-5',
    type: '올인원 브랜딩 패키지',
    message: '패션 디자이너 브랜드 로고 + 룩북 웹사이트 올인원 상담이 접수되었습니다.',
    timeAgo: '1시간 전',
    timestamp: '2026-09-28 14:20'
  }
];

export const INITIAL_REVIEWS: ReviewItem[] = [
  {
    id: 'rev-1',
    author: '박*훈 대표',
    company: '더 센트 오아시스 (프래그런스)',
    industry: '향수 / 뷰티 1인 사업자',
    before: '처음 창업하는 거라 예산은 한정되어 있는데, 로고 업체 따로, 웹사이트 업체 따로, 상세페이지 업체 따로 알아보다가 견적만 800만원이 넘어가서 시작도 못하고 막막했습니다.',
    work: '딩스튜디오에서 브랜드 콘셉트부터 로고, 패키지 라벨, 그리고 스마트스토어 상세페이지까지 ‘올인원 패키지’로 한 번에 진행해주셨습니다. 16년차 경력의 대표님이 사업 배경을 꼼꼼히 들어주셔서 소통이 정말 수월했습니다.',
    after: '기존에 알아봤던 비용의 절반 수준으로 브랜드 전체 톤앤매너가 완성되었습니다. 오픈 첫 달 만에 1차 생산 물량이 완판되었고, 고객들이 패키지와 상세페이지가 너무 고급스럽다고 칭찬해주십니다.',
    rating: 5,
    highlight: '“처음에는 로고만 필요했는데 홈페이지와 상세페이지까지 한 번에 진행할 수 있어서 정말 편했어요.”',
    date: '2026-09-24'
  },
  {
    id: 'rev-2',
    author: '이*정 대표',
    company: '모던테이블 베이커리',
    industry: '베이커리 카페 창업',
    before: '다른 프리랜서 사이트에서 저렴한 로고를 맡겼다가 폰트만 대충 얹어놓은 성의 없는 시안을 받고 돈만 날린 뼈아픈 경험이 있었습니다.',
    work: '‘첫 시안 불만족 시 100% 환불’이라는 정책을 보고 믿고 상담을 신청했습니다. 놀랍게도 첫 시안부터 저희 매장의 시그니처 빵 모양과 따뜻한 우드 인테리어 분위기가 고스란히 반영된 3가지 콘셉트를 받아보았습니다.',
    after: '환불은커녕 시안 3개가 다 마음에 들어서 어떤 걸 고를지 가족들과 한참 고민했습니다. 매장 간판, 유니폼 자수, 컵 홀더, 그리고 네이버 플레이스 대표 이미지까지 완벽하게 자리 잡았습니다.',
    rating: 5,
    highlight: '“첫 시안이 마음에 안 들면 환불해준다는 약속 덕분에 부담 없이 시작했는데, 첫 시안에서 바로 끝났습니다.”',
    date: '2026-09-18'
  },
  {
    id: 'rev-3',
    author: '정*우 팀장',
    company: '클라우드웨이브 솔루션스',
    industry: 'B2B 클라우드 관리 SaaS',
    before: '전문 에이전시는 수천만 원 견적을 부르고, 크몽이나 개인 프리랜서는 B2B 서비스의 기술적 맥락을 전혀 이해하지 못해 중간에서 미팅만 수십 번 하느라 지쳐있었습니다.',
    work: '대기업 브랜드 디자인 출신 디자이너님답게, 서비스 아키텍처 문서를 한 번 보시더니 핵심 가치(보안, 가시성, 비용 절감)를 다이어그램과 직관적인 반응형 웹 UI로 단숨에 정리해주셨습니다.',
    after: '웹사이트 런칭 후 유입된 엔터프라이즈 데모 신청률이 이전 임시 페이지 대비 240% 증가했습니다. 투자자 IR 미팅에서도 브랜드가 매우 단단하고 신뢰감 있다는 피드백을 받았습니다.',
    rating: 5,
    highlight: '“디자인만 예쁜 게 아니라, 우리 사업의 본질을 먼저 이해하고 제안해주셔서 감동받았습니다.”',
    date: '2026-09-10'
  }
];

export const INITIAL_FAQS: FaqItem[] = [
  {
    id: 'faq-1',
    question: '시안이 마음에 안들면 어떡하죠?',
    answer: '첫 시안이 마음에 들지 않으시면 어떠한 위약금 없이 100% 전액 환불해드립니다.\n사전에 충분한 브랜드 분석과 레퍼런스 합의를 거친 후 제공해드린 1차 시안을 확인하신 후, 만족스럽지 않으시다면 즉시 전액 환불을 보장합니다. 디자인 퀄리티에 대한 자신감이자 고객님과의 확고한 약속입니다.'
  },
  {
    id: 'faq-2',
    question: '로고만 단독으로 제작할 수 있나요?',
    answer: '물론입니다. 단독 로고 디자인 프로젝트도 정성껏 진행합니다.\n심볼형, 워드마크형, 엠블럼형 등 비즈니스 성격에 최적화된 맞춤 시안을 제공하며, 인쇄용 원본 AI 벡터 파일과 매뉴얼 가이드까지 꼼꼼하게 전달해드립니다. 추후 홈페이지나 상세페이지가 필요하실 때 언제든 추가 연계도 가능합니다.'
  },
  {
    id: 'faq-3',
    question: '수정은 몇 번 가능한가요?',
    answer: '기본 수정 3회가 포함되어 있으며, 선택하신 시안 내에서의 컬러 변경, 폰트 비율 조절, 레이아웃 미세 교정 등은 완성도 높은 결과물이 나올 때까지 충분히 소통하며 유연하게 반영해드립니다. (단, 완전히 새로운 콘셉트로의 전면 재작업은 사전 협의가 필요합니다.)'
  },
  {
    id: 'faq-4',
    question: '사업을 처음 시작하는데 무엇부터 해야할지 모르겠습니다.',
    answer: '전혀 걱정하지 마세요. DING STUDIO를 찾아주시는 고객님의 70%가 첫 창업자이십니다.\n상담 신청서에 ‘아직 잘 모르겠어요’를 선택해주시면, 업종과 타깃 고객, 준비 상태에 맞춰 필요한 최소 필수 디자인 로드맵을 1:1로 맞춤 컨설팅해드립니다.'
  },
  {
    id: 'faq-5',
    question: '정말 기존 디자인 에이전시보다 저렴한가요?',
    answer: '네, 합리적인 비용을 보장합니다.\n일반 대형 에이전시는 대형 오피스 임대료, 영업 및 중간 관리자 인건비 등의 거품이 견적의 50% 이상을 차지합니다. DING STUDIO는 불필요한 중간 마진을 완전히 제거하고 16년차 디렉터가 실무 중심으로 직접 작업하여, 퀄리티는 유지하되 비용 부담은 기존 대비 약 절반 수준으로 낮췄습니다.'
  }
];

export const INITIAL_PACKAGES: PackagePlan[] = [
  {
    id: 'pkg-logo',
    name: '로고 디자인',
    label: 'LOGO DESIGN',
    number: '01',
    tagline: '브랜드의 시작을 만드는\n감각적인 로고 디자인',
    priceNote: '기존 업체 대비 약 50% 수준의 거품 없는 가격',
    originalPrice: '700,000원',
    price: '350,000원 ~',
    features: [
      '브랜드 맞춤 로고 시안',
      '수정 3회 포함',
      '원본 파일 제공'
    ],
    recommendedFor: '신규 창업, 개인 브랜드, 카페 및 소상공인'
  },
  {
    id: 'pkg-logo-web',
    name: '로고 + 홈페이지 제작',
    label: 'HOMEPAGE PACKAGE',
    number: '02',
    tagline: '브랜드 아이덴티티를 담은\n로고와 홈페이지를 한 번에',
    badge: '가장 많이 선택하는 패키지',
    priceNote: '로고와 웹사이트를 통합하여 오픈 기간 및 비용 대폭 절감',
    originalPrice: '3,600,000원',
    price: '1,800,000원 ~',
    features: [
      '로고 디자인 포함',
      '반응형 홈페이지 제작',
      '도메인 연결 기본 세팅'
    ],
    isPopular: true,
    recommendedFor: '온라인 브랜드 런칭, 스타트업, 전문직 클리닉'
  },
  {
    id: 'pkg-allinone',
    name: '브랜딩 패키지',
    label: 'BRANDING PACKAGE',
    number: '03',
    subTitle: '(로고 + 홈페이지 + 상세페이지)',
    tagline: '브랜드를 완성하는\n올인원 디자인 패키지',
    priceNote: '로고, 반응형 웹, 고전환 상세페이지까지 원스톱 완성',
    originalPrice: '6,000,000원',
    price: '3,000,000원 ~',
    features: [
      '로고 + 홈페이지 + 상세페이지',
      '브랜드 통일 디자인',
      '런칭까지 원스톱 진행'
    ],
    recommendedFor: '이커머스 쇼핑몰, 브랜드 리뉴얼, 풀스택 런칭'
  }
];

export const REFUND_POLICY_TERMS = {
  headline: '첫 시안이 마음에 들지 않는다면, 100% 전액 환불해드립니다.',
  subheadline: '일단 받아보세요. 마음에 들지 않으면 100% 환불.',
  highlight: '첫 시안 100% 만족 보장제',
  terms: [
    '사전 상담 및 인터뷰 완료 후 제공되는 1차 시안 단계에서 불만족 시, 어떠한 위약금이나 수수료 없이 결제 금액의 100%를 즉시 전액 환불해드립니다.',
    '고객님의 소중한 사업 자금을 보호하고 디자인 퀄리티에 대한 자신감을 증명하기 위한 딩스튜디오의 기본 원칙입니다.',
    '1차 시안 확정 후 세부 디테일 수정 단계로 진입하거나, 최종 원본 파일(AI, 소스 코드 등)이 납품된 이후에는 환불이 불가하며 무제한 디테일 수정 지원으로 전환됩니다.'
  ]
};
