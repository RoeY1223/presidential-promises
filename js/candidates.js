const candidates = [
  {
    id: 1,
    name: "김동연",
    slug: "김동연",
    party: "더불어민주당",
    position: "경기도지사",
    image: "images/kimdongyeon.jpg",
    promises: [
      {
        title: "중소기업 세금 감면 확대",
        slug: "중소기업-세금-감면-확대",
        description: "",
        source: "",
      },
      {
        title: "청년 일자리 100만개 창출",
        slug: "청년-일자리-100만개-창출",
        description: "",
        source: "",
      },
      {
        title: "디지털 경제 전환 지원금 도입",
        slug: "디지털-경제-전환-지원금-도입",
        description: "",
        source: "",
      },
      {
        title: "대학 등록금 50% 감면",
        slug: "대학-등록금-50-감면",
        description: "",
        source: "",
      },
      {
        title: "초중고 AI 교육 의무화",
        slug: "초중고-ai-교육-의무화",
        description: "",
        source: "",
      },
      {
        title: "농어촌 지역 교육 인프라 확충",
        slug: "농어촌-지역-교육-인프라-확충",
        description: "",
        source: "",
      },
      {
        title: "기초연금 인상",
        slug: "기초연금-인상",
        description: "",
        source: "",
      },
      {
        title: "영유아 무상 의료 서비스 확대",
        slug: "영유아-무상-의료-서비스-확대",
        description: "",
        source: "",
      },
      {
        title: "장애인 일자리 확대 및 지원금 인상",
        slug: "장애인-일자리-확대-및-지원금-인상",
        description: "",
        source: "",
      },
    ],
  },
  {
    id: 2,
    name: "이재명",
    slug: "이재명",
    party: "더불어민주당",
    position: "국회의원",
    image: "images/leejaeming.jpg",
    promises: [
      {
        title: "기본소득 제도 도입",
        slug: "기본소득-제도-도입",
        description: "",
        source: "",
      },
      {
        title: "지역화폐 확대",
        slug: "지역화폐-확대",
        description: "",
        source: "",
      },
      {
        title: "공정경제 생태계 조성",
        slug: "공정경제-생태계-조성",
        description: "",
        source: "",
      },
      {
        title: "공공주택 100만호 공급",
        slug: "공공주택-100만호-공급",
        description: "",
        source: "",
      },
      {
        title: "1인 가구 주거지원 확대",
        slug: "1인-가구-주거지원-확대",
        description: "",
        source: "",
      },
      {
        title: "부동산 투기 근절",
        slug: "부동산-투기-근절",
        description: "",
        source: "",
      },
      {
        title: "전국민 고용보험 도입",
        slug: "전국민-고용보험-도입",
        description: "",
        source: "",
      },
      {
        title: "의료 공공성 강화",
        slug: "의료-공공성-강화",
        description: "",
        source: "",
      },
      {
        title: "돌봄 국가책임제 도입",
        slug: "돌봄-국가책임제-도입",
        description: "",
        source: "",
      },
    ],
  },
  {
    id: 3,
    name: "김경수",
    slug: "김경수",
    party: "더불어민주당",
    position: "전 경남도지사",
    image: "images/kimkyungsu.jpg",
    promises: [
      {
        title: "디지털 혁신 일자리 창출",
        slug: "디지털-혁신-일자리-창출",
        description: "",
        source: "",
      },
      {
        title: "스마트 산업단지 조성",
        slug: "스마트-산업단지-조성",
        description: "",
        source: "",
      },
      {
        title: "미래산업 육성",
        slug: "미래산업-육성",
        description: "",
        source: "",
      },
      {
        title: "지역 맞춤형 복지정책 확대",
        slug: "지역-맞춤형-복지정책-확대",
        description: "",
        source: "",
      },
      {
        title: "고령화 사회 대응 시스템 구축",
        slug: "고령화-사회-대응-시스템-구축",
        description: "",
        source: "",
      },
      {
        title: "돌봄 서비스 강화",
        slug: "돌봄-서비스-강화",
        description: "",
        source: "",
      },
      {
        title: "지역 교육격차 해소",
        slug: "지역-교육격차-해소",
        description: "",
        source: "",
      },
      {
        title: "평생학습 체계 구축",
        slug: "평생학습-체계-구축",
        description: "",
        source: "",
      },
      {
        title: "청년 취업 지원 프로그램 확대",
        slug: "청년-취업-지원-프로그램-확대",
        description: "",
        source: "",
      },
    ],
  },
  {
    id: 4,
    name: "이준석",
    slug: "이준석",
    party: "개혁신당",
    position: "국회의원",
    image: "images/leejunseok.jpg",
    promises: [
      {
        title: "청년 주거지원 확대",
        slug: "청년-주거지원-확대",
        description: "",
        source: "",
      },
      {
        title: "청년 창업 지원 강화",
        slug: "청년-창업-지원-강화",
        description: "",
        source: "",
      },
      {
        title: "디지털 인재 양성",
        slug: "디지털-인재-양성",
        description: "",
        source: "",
      },
      {
        title: "교육 자율성 확대",
        slug: "교육-자율성-확대",
        description: "",
        source: "",
      },
      {
        title: "대학 서열화 해소",
        slug: "대학-서열화-해소",
        description: "",
        source: "",
      },
      {
        title: "직업교육 강화",
        slug: "직업교육-강화",
        description: "",
        source: "",
      },
      {
        title: "정치개혁 로드맵 실행",
        slug: "정치개혁-로드맵-실행",
        description: "",
        source: "",
      },
      {
        title: "디지털 정부 구현",
        slug: "디지털-정부-구현",
        description: "",
        source: "",
      },
      {
        title: "정치 세대교체 촉진",
        slug: "정치-세대교체-촉진",
        description: "",
        source: "",
      },
    ],
  },
  {
    id: 5,
    name: "안철수",
    slug: "안철수",
    party: "국민의힘",
    position: "국회의원",
    image: "images/anchulsu.jpg",
    promises: [
      {
        title: "AI 기반 신산업 육성",
        slug: "ai-기반-신산업-육성",
        description: "",
        source: "",
      },
      {
        title: "바이오헬스 산업 지원 확대",
        slug: "바이오헬스-산업-지원-확대",
        description: "",
        source: "",
      },
      {
        title: "디지털 전환 가속화",
        slug: "디지털-전환-가속화",
        description: "",
        source: "",
      },
      {
        title: "벤처 창업 생태계 강화",
        slug: "벤처-창업-생태계-강화",
        description: "",
        source: "",
      },
      {
        title: "규제 샌드박스 확대",
        slug: "규제-샌드박스-확대",
        description: "",
        source: "",
      },
      {
        title: "중소기업 혁신 지원",
        slug: "중소기업-혁신-지원",
        description: "",
        source: "",
      },
      {
        title: "교육 플랫폼 혁신",
        slug: "교육-플랫폼-혁신",
        description: "",
        source: "",
      },
      {
        title: "STEM 교육 강화",
        slug: "stem-교육-강화",
        description: "",
        source: "",
      },
      {
        title: "평생교육 시스템 구축",
        slug: "평생교육-시스템-구축",
        description: "",
        source: "",
      },
    ],
  },
  {
    id: 6,
    name: "김문수",
    slug: "김문수",
    party: "국민의힘",
    position: "전 고용노동부 장관",
    image: "images/kimmunsu.jpg",
    promises: [
      {
        title: "노동시장 유연안정성 강화",
        slug: "노동시장-유연안정성-강화",
        description: "",
        source: "",
      },
      {
        title: "중소기업 고용 지원 확대",
        slug: "중소기업-고용-지원-확대",
        description: "",
        source: "",
      },
      {
        title: "청년 일자리 미스매치 해소",
        slug: "청년-일자리-미스매치-해소",
        description: "",
        source: "",
      },
      {
        title: "기업 친화적 환경 조성",
        slug: "기업-친화적-환경-조성",
        description: "",
        source: "",
      },
      {
        title: "규제 혁파 및 경제 활성화",
        slug: "규제-혁파-및-경제-활성화",
        description: "",
        source: "",
      },
      {
        title: "세금 부담 완화",
        slug: "세금-부담-완화",
        description: "",
        source: "",
      },
      {
        title: "북한 인권 개선 압박",
        slug: "북한-인권-개선-압박",
        description: "",
        source: "",
      },
      {
        title: "강력한 안보 태세 구축",
        slug: "강력한-안보-태세-구축",
        description: "",
        source: "",
      },
      {
        title: "실용적 대북 정책 추진",
        slug: "실용적-대북-정책-추진",
        description: "",
        source: "",
      },
    ],
  },
  {
    id: 7,
    name: "한동훈",
    slug: "한동훈",
    party: "국민의힘",
    position: "전 법무장관",
    image: "images/handonghun.jpg",
    promises: [
      {
        title: "사법제도 개혁",
        slug: "사법제도-개혁",
        description: "",
        source: "",
      },
      {
        title: "검찰 독립성 강화",
        slug: "검찰-독립성-강화",
        description: "",
        source: "",
      },
      {
        title: "부패 척결 시스템 구축",
        slug: "부패-척결-시스템-구축",
        description: "",
        source: "",
      },
      {
        title: "범죄 예방 시스템 강화",
        slug: "범죄-예방-시스템-강화",
        description: "",
        source: "",
      },
      {
        title: "사이버 범죄 대응 역량 강화",
        slug: "사이버-범죄-대응-역량-강화",
        description: "",
        source: "",
      },
      {
        title: "아동·여성 보호 강화",
        slug: "아동여성-보호-강화",
        description: "",
        source: "",
      },
      {
        title: "법무행정 디지털화",
        slug: "법무행정-디지털화",
        description: "",
        source: "",
      },
      {
        title: "출입국 관리 시스템 개선",
        slug: "출입국-관리-시스템-개선",
        description: "",
        source: "",
      },
      {
        title: "교정시설 현대화",
        slug: "교정시설-현대화",
        description: "",
        source: "",
      },
    ],
  },
  {
    id: 8,
    name: "나경원",
    slug: "나경원",
    party: "국민의힘",
    position: "국회의원",
    image: "images/nakyungwon.jpg",
    promises: [
      {
        title: "육아휴직 급여 인상",
        slug: "육아휴직-급여-인상",
        description: "",
        source: "",
      },
      {
        title: "돌봄 인프라 확충",
        slug: "돌봄-인프라-확충",
        description: "",
        source: "",
      },
      {
        title: "경력단절 여성 지원 강화",
        slug: "경력단절-여성-지원-강화",
        description: "",
        source: "",
      },
      {
        title: "공교육 경쟁력 강화",
        slug: "공교육-경쟁력-강화",
        description: "",
        source: "",
      },
      {
        title: "사교육비 경감 대책 마련",
        slug: "사교육비-경감-대책-마련",
        description: "",
        source: "",
      },
      {
        title: "특수교육 지원 확대",
        slug: "특수교육-지원-확대",
        description: "",
        source: "",
      },
      {
        title: "한미동맹 강화",
        slug: "한미동맹-강화",
        description: "",
        source: "",
      },
      {
        title: "능동적 경제외교 추진",
        slug: "능동적-경제외교-추진",
        description: "",
        source: "",
      },
      {
        title: "국제 협력 네트워크 확대",
        slug: "국제-협력-네트워크-확대",
        description: "",
        source: "",
      },
    ],
  },
  {
    id: 9,
    name: "홍준표",
    slug: "홍준표",
    party: "국민의힘",
    position: "전 대구시장",
    image: "images/hongjunpyo.jpg",
    promises: [
      {
        title: "기업 규제 철폐",
        slug: "기업-규제-철폐",
        description: "",
        source: "",
      },
      {
        title: "세금 감면 정책 추진",
        slug: "세금-감면-정책-추진",
        description: "",
        source: "",
      },
      {
        title: "지역경제 활성화",
        slug: "지역경제-활성화",
        description: "",
        source: "",
      },
      {
        title: "강력한 국방력 증진",
        slug: "강력한-국방력-증진",
        description: "",
        source: "",
      },
      {
        title: "핵무장 검토",
        slug: "핵무장-검토",
        description: "",
        source: "",
      },
      {
        title: "북한 비핵화 압박",
        slug: "북한-비핵화-압박",
        description: "",
        source: "",
      },
      {
        title: "공무원 개혁",
        slug: "공무원-개혁",
        description: "",
        source: "",
      },
      {
        title: "정부 조직 효율화",
        slug: "정부-조직-효율화",
        description: "",
        source: "",
      },
      {
        title: "지방분권 강화",
        slug: "지방분권-강화",
        description: "",
        source: "",
      },
    ],
  },
  {
    id: 10,
    name: "유정복",
    slug: "유정복",
    party: "국민의힘",
    position: "인천광역시장",
    image: "images/yoojungbok.jpg",
    promises: [
      {
        title: "수도권-지방 상생 발전",
        slug: "수도권-지방-상생-발전",
        description: "",
        source: "",
      },
      {
        title: "지역 특화 산업 육성",
        slug: "지역-특화-산업-육성",
        description: "",
        source: "",
      },
      {
        title: "지역 인프라 확충",
        slug: "지역-인프라-확충",
        description: "",
        source: "",
      },
      {
        title: "중소기업 지원 정책 강화",
        slug: "중소기업-지원-정책-강화",
        description: "",
        source: "",
      },
      {
        title: "일자리 창출 기반 구축",
        slug: "일자리-창출-기반-구축",
        description: "",
        source: "",
      },
      {
        title: "관광 산업 육성",
        slug: "관광-산업-육성",
        description: "",
        source: "",
      },
      {
        title: "친환경 도시 개발",
        slug: "친환경-도시-개발",
        description: "",
        source: "",
      },
      {
        title: "미세먼지 저감 대책",
        slug: "미세먼지-저감-대책",
        description: "",
        source: "",
      },
      {
        title: "수질 보전 정책 강화",
        slug: "수질-보전-정책-강화",
        description: "",
        source: "",
      },
    ],
  },
  {
    id: 11,
    name: "이철우",
    slug: "이철우",
    party: "국민의힘",
    position: "전 경북도지사",
    image: "images/leechulwoo.jpg",
    promises: [
      {
        title: "지방소멸 대응 정책 강화",
        slug: "지방소멸-대응-정책-강화",
        description: "",
        source: "",
      },
      {
        title: "농어촌 활성화 방안",
        slug: "농어촌-활성화-방안",
        description: "",
        source: "",
      },
      {
        title: "지역 SOC 투자 확대",
        slug: "지역-soc-투자-확대",
        description: "",
        source: "",
      },
      {
        title: "전통산업 고도화",
        slug: "전통산업-고도화",
        description: "",
        source: "",
      },
      {
        title: "첨단산업 유치",
        slug: "첨단산업-유치",
        description: "",
        source: "",
      },
      {
        title: "중소기업 경쟁력 강화",
        slug: "중소기업-경쟁력-강화",
        description: "",
        source: "",
      },
      {
        title: "지방 청년 일자리 창출",
        slug: "지방-청년-일자리-창출",
        description: "",
        source: "",
      },
      {
        title: "청년 창업 지원 확대",
        slug: "청년-창업-지원-확대",
        description: "",
        source: "",
      },
      {
        title: "청년 귀농귀촌 지원",
        slug: "청년-귀농귀촌-지원",
        description: "",
        source: "",
      },
    ],
  },
  {
    id: 12,
    name: "양향자",
    slug: "양향자",
    party: "국민의힘",
    position: "국회의원",
    image: "images/yanghyangja.jpg",
    promises: [
      {
        title: "반도체 산업 경쟁력 강화",
        slug: "반도체-산업-경쟁력-강화",
        description: "",
        source: "",
      },
      {
        title: "ICT 융합 신산업 육성",
        slug: "ict-융합-신산업-육성",
        description: "",
        source: "",
      },
      {
        title: "제조업 디지털 전환 지원",
        slug: "제조업-디지털-전환-지원",
        description: "",
        source: "",
      },
      {
        title: "여성 일자리 확대",
        slug: "여성-일자리-확대",
        description: "",
        source: "",
      },
      {
        title: "유리천장 해소 정책",
        slug: "유리천장-해소-정책",
        description: "",
        source: "",
      },
      {
        title: "여성 리더십 강화",
        slug: "여성-리더십-강화",
        description: "",
        source: "",
      },
      {
        title: "산업 맞춤형 인재 양성",
        slug: "산업-맞춤형-인재-양성",
        description: "",
        source: "",
      },
      {
        title: "고용 안전망 강화",
        slug: "고용-안전망-강화",
        description: "",
        source: "",
      },
      {
        title: "좋은 일자리 창출",
        slug: "좋은-일자리-창출",
        description: "",
        source: "",
      },
    ],
  },
  {
    id: 13,
    name: "김재연",
    slug: "김재연",
    party: "진보당",
    position: "전 국회의원",
    image: "images/kimjaeyeon.jpg",
    promises: [
      {
        title: "비정규직 정규직화",
        slug: "비정규직-정규직화",
        description: "",
        source: "",
      },
      {
        title: "노동시간 단축",
        slug: "노동시간-단축",
        description: "",
        source: "",
      },
      {
        title: "최저임금 인상",
        slug: "최저임금-인상",
        description: "",
        source: "",
      },
      {
        title: "무상의료 실현",
        slug: "무상의료-실현",
        description: "",
        source: "",
      },
      {
        title: "기본소득 도입",
        slug: "기본소득-도입",
        description: "",
        source: "",
      },
      {
        title: "공공주택 확대",
        slug: "공공주택-확대",
        description: "",
        source: "",
      },
      {
        title: "부의 재분배 정책",
        slug: "부의-재분배-정책",
        description: "",
        source: "",
      },
      {
        title: "공정과세 강화",
        slug: "공정과세-강화",
        description: "",
        source: "",
      },
      {
        title: "대기업 개혁",
        slug: "대기업-개혁",
        description: "",
        source: "",
      },
    ],
  },
  {
    id: 14,
    name: "강성희",
    slug: "강성희",
    party: "진보당",
    position: "전 국회의원",
    image: "images/kangseonghi.jpg",
    promises: [
      {
        title: "기후위기 대응 정책",
        slug: "기후위기-대응-정책",
        description: "",
        source: "",
      },
      {
        title: "탄소중립 달성",
        slug: "탄소중립-달성",
        description: "",
        source: "",
      },
      {
        title: "에너지 전환 가속화",
        slug: "에너지-전환-가속화",
        description: "",
        source: "",
      },
      {
        title: "노동권 보장 강화",
        slug: "노동권-보장-강화",
        description: "",
        source: "",
      },
      {
        title: "산업안전 개선",
        slug: "산업안전-개선",
        description: "",
        source: "",
      },
      {
        title: "플랫폼 노동자 보호",
        slug: "플랫폼-노동자-보호",
        description: "",
        source: "",
      },
      {
        title: "교육 공공성 강화",
        slug: "교육-공공성-강화",
        description: "",
        source: "",
      },
      {
        title: "입시 경쟁 완화",
        slug: "입시-경쟁-완화",
        description: "",
        source: "",
      },
      {
        title: "학교 민주주의 확대",
        slug: "학교-민주주의-확대",
        description: "",
        source: "",
      },
    ],
  },
  {
    id: 15,
    name: "권영국",
    slug: "권영국",
    party: "사회대전환연대회의",
    position: "정의당 대표",
    image: "images/kwonyoungguk.jpg",
    promises: [
      {
        title: "생태적 전환",
        slug: "생태적-전환",
        description: "",
        source: "",
      },
      {
        title: "사회 불평등 해소",
        slug: "사회-불평등-해소",
        description: "",
        source: "",
      },
      {
        title: "참여 민주주의 확대",
        slug: "참여-민주주의-확대",
        description: "",
        source: "",
      },
      {
        title: "주 4일제 도입",
        slug: "주-4일제-도입",
        description: "",
        source: "",
      },
      {
        title: "노동자 경영참여 확대",
        slug: "노동자-경영참여-확대",
        description: "",
        source: "",
      },
      {
        title: "산업재해 예방 시스템 구축",
        slug: "산업재해-예방-시스템-구축",
        description: "",
        source: "",
      },
      {
        title: "권력구조 개편",
        slug: "권력구조-개편",
        description: "",
        source: "",
      },
      {
        title: "선거제도 개혁",
        slug: "선거제도-개혁",
        description: "",
        source: "",
      },
      {
        title: "시민 참여 확대",
        slug: "시민-참여-확대",
        description: "",
        source: "",
      },
    ],
  },
  {
    id: 16,
    name: "한상균",
    slug: "한상균",
    party: "사회대전환연대회의",
    position: "전 민주노총 위원장",
    image: "images/hansanggyun.jpg",
    promises: [
      {
        title: "노동기본권 강화",
        slug: "노동기본권-강화",
        description: "",
        source: "",
      },
      {
        title: "비정규직 철폐",
        slug: "비정규직-철폐",
        description: "",
        source: "",
      },
      {
        title: "노동자 건강권 보장",
        slug: "노동자-건강권-보장",
        description: "",
        source: "",
      },
      {
        title: "재벌 개혁",
        slug: "재벌-개혁",
        description: "",
        source: "",
      },
      {
        title: "경제력 집중 완화",
        slug: "경제력-집중-완화",
        description: "",
        source: "",
      },
      {
        title: "노동자 대표성 강화",
        slug: "노동자-대표성-강화",
        description: "",
        source: "",
      },
      {
        title: "전국민 고용보험",
        slug: "전국민-고용보험",
        description: "",
        source: "",
      },
      {
        title: "산재보험 확대",
        slug: "산재보험-확대",
        description: "",
        source: "",
      },
      {
        title: "사회서비스 공공성 강화",
        slug: "사회서비스-공공성-강화",
        description: "",
        source: "",
      },
    ],
  },
  {
    id: 17,
    name: "황교안",
    slug: "황교안",
    party: "무소속",
    position: "전 대통령 권한대행·전 국무총리",
    image: "images/hwangkyoan.jpg",
    promises: [
      {
        title: "헌법 가치 수호",
        slug: "헌법-가치-수호",
        description: "",
        source: "",
      },
      {
        title: "법치 시스템 강화",
        slug: "법치-시스템-강화",
        description: "",
        source: "",
      },
      {
        title: "부정부패 척결",
        slug: "부정부패-척결",
        description: "",
        source: "",
      },
      {
        title: "한미동맹 강화",
        slug: "한미동맹-강화",
        description: "",
        source: "",
      },
      {
        title: "국방력 증진",
        slug: "국방력-증진",
        description: "",
        source: "",
      },
      {
        title: "대북 억제력 확보",
        slug: "대북-억제력-확보",
        description: "",
        source: "",
      },
      {
        title: "시장경제 활성화",
        slug: "시장경제-활성화",
        description: "",
        source: "",
      },
      {
        title: "규제 개혁",
        slug: "규제-개혁",
        description: "",
        source: "",
      },
      {
        title: "세금 부담 완화",
        slug: "세금-부담-완화",
        description: "",
        source: "",
      },
    ],
  },
  {
    id: 18,
    name: "전광훈",
    slug: "전광훈",
    party: "무소속",
    position: "기독교연합 대표",
    image: "images/jeonkwanghun.jpg",
    promises: [
      {
        title: "기독교 가치 확산",
        slug: "기독교-가치-확산",
        description: "",
        source: "",
      },
      {
        title: "전통 가족 가치 수호",
        slug: "전통-가족-가치-수호",
        description: "",
        source: "",
      },
      {
        title: "종교 자유 보장",
        slug: "종교-자유-보장",
        description: "",
        source: "",
      },
      {
        title: "정교분리 원칙 재정립",
        slug: "정교분리-원칙-재정립",
        description: "",
        source: "",
      },
      {
        title: "보수 가치 회복",
        slug: "보수-가치-회복",
        description: "",
        source: "",
      },
      {
        title: "애국심 고취",
        slug: "애국심-고취",
        description: "",
        source: "",
      },
      {
        title: "북한 인권 개선",
        slug: "북한-인권-개선",
        description: "",
        source: "",
      },
      {
        title: "국가 안보 강화",
        slug: "국가-안보-강화",
        description: "",
        source: "",
      },
      {
        title: "한미동맹 공고화",
        slug: "한미동맹-공고화",
        description: "",
        source: "",
      },
    ],
  },
];

// 브라우저에서 전역 변수로 사용하기 위해 window에 할당
if (typeof window !== "undefined") {
  window.candidates = candidates;
}
// Node.js에서 require로 불러오기 위해 module.exports에 할당
if (typeof module !== "undefined" && module.exports) {
  module.exports = candidates;
}
