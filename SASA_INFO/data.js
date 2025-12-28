const subjects = [
  {
    id: 1,
    name: '국어Ⅰ',
    grade: 1,
    semester: 1,
    dept: 'korean',
    credits: 3,
    necessary: '필수',
    history: [
      {
        year: 2025,
        semester: 1,
        periods: [
          { part: '전체', time: '1시간', teacher: '이0혜T', textbook: '자체 프린트', scope: '문법' },
          { part: '전체', time: '1시간', teacher: '전0성T', textbook: '자체 프린트', scope: '논증, 비평, 요약' },
          { part: '전체', time: '1시간', teacher: '진0영T', textbook: '자체 프린트', scope: '문학, 발표'}
        ]
      }
    ]
  },
  {
    id: 2,
    name: '한국사Ⅰ',
    grade: 1,
    semester: 1,
    dept: 'society',
    credits: 2,
    necessary: '필수',
    history: [
      {
        year: 2025,
        semester: 1,
        periods: [
          { part: '전체', time: '1시간 2회', teacher: '김0리T', textbook: '자체 프린트, 한국사1(㈜미래엔/강승호)', scope: '흥선대원군 ~ 민족유일당 운동' }
        ]
      }
    ]
  },
  {
    id: 3,
    name: '영어Ⅰ',
    grade: 1,
    semester: 1,
    dept: 'foreign',
    credits: 3,
    necessary: '필수',
    history: [
      {
        year: 2025,
        semester: 1,
        periods: [
          { part: '전체', time: '1시간', teacher: '박0T', textbook: '자체 프린트, 참고 도서', scope: 'Vocabulary, Reading' },
          { part: '전체', time: '2시간 1회', teacher: '신0정T', textbook: '자체 프린트', scope: '논증, 비평, 요약' },
          { part: '전체', time: '1시간', teacher: '진0영T', textbook: '자체 프린트', scope: '문학, 발표'}
        ]
      }
    ]
  },
  {
    id: 4,
    name: '음악',
    grade: 1,
    semester: 1,
    dept: 'artpe',
    credits: 2,
    necessary: '필수',
    history: []
  },
  {
    id: 5,
    name: '체육Ⅰ',
    grade: 1,
    semester: 1,
    dept: 'artpe',
    credits: 1,
    necessary: '필수',
    history: []
  },
  {
    id: 6,
    name: '수학Ⅰ',
    grade: 1,
    semester: 1,
    dept: 'math',
    credits: 2,
    necessary: '필수',
    history: []
  },
  {
    id: 7,
    name: '수학Ⅱ',
    grade: 1,
    semester: 1,
    dept: 'math',
    credits: 3,
    necessary: '필수',
    history: []
  },
  {
    id: 8,
    name: '물리학 및 실험Ⅰ',
    grade: 1,
    semester: 1,
    dept: 'physics',
    credits: 3,
    necessary: '필수',
    history: []
  },
  {
    id: 9,
    name: '화학 및 실험Ⅰ',
    grade: 1,
    semester: 1,
    dept: 'chemistry',
    credits: 3,
    necessary: '필수',
    history: []
  },
  {
    id: 10,
    name: '생명과학 및 실험Ⅰ',
    grade: 1,
    semester: 1,
    dept: 'biology',
    credits: 3,
    necessary: '필수',
    history: []
  },
  {
    id: 11,
    name: '지구과학 및 실험Ⅰ',
    grade: 1,
    semester: 1,
    dept: 'earth',
    credits: 3,
    necessary: '필수',
    history: []
  },
  {
    id: 12,
    name: '정보과학개론',
    grade: 1,
    semester: 1,
    dept: 'information',
    credits: 3,
    necessary: '필수',
    history: []
  },
  {
    id: 13,
    name: '국어Ⅱ',
    grade: 1,
    semester: 2,
    dept: 'korean',
    credits: 3,
    necessary: '필수',
    history: []
  },
  {
    id: 14,
    name: '한국사Ⅱ',
    grade: 1,
    semester: 2,
    dept: 'society',
    credits: 1,
    necessary: '필수',
    history: []
  },
  {
    id: 15,
    name: '영어Ⅱ',
    grade: 1,
    semester: 2,
    dept: 'foreign',
    credits: 3,
    necessary: '필수',
    history: []
  },
  {
    id: 16,
    name: '미술',
    grade: 1,
    semester: 2,
    dept: 'artpe',
    credits: 2,
    necessary: '필수',
    history: []
  },
  {
    id: 17,
    name: '체육Ⅱ',
    grade: 1,
    semester: 2,
    dept: 'artpe',
    credits: 1,
    necessary: '필수',
    history: []
  },
  {
    id: 18,
    name: '수학Ⅲ',
    grade: 1,
    semester: 2,
    dept: 'math',
    credits: 2,
    necessary: '필수',
    history: []
  },
  {
    id: 19,
    name: '수학Ⅳ',
    grade: 1,
    semester: 2,
    dept: 'math',
    credits: 3,
    necessary: '필수',
    history: []
  },
  {
    id: 20,
    name: '물리학 및 실험Ⅱ',
    grade: 1,
    semester: 2,
    dept: 'physics',
    credits: 3,
    necessary: '필수',
    history: []
  },
  {
    id: 21,
    name: '화학 및 실험Ⅱ',
    grade: 1,
    semester: 2,
    dept: 'chemistry',
    credits: 3,
    necessary: '필수',
    history: []
  },
  {
    id: 22,
    name: '생명과학 및 실험Ⅱ',
    grade: 1,
    semester: 2,
    dept: 'biology',
    credits: 3,
    necessary: '필수',
    history: []
  },
  {
    id: 23,
    name: '지구과학 및 실험Ⅱ',
    grade: 1,
    semester: 2,
    dept: 'earth',
    credits: 3,
    necessary: '필수',
    history: []
  },
  {
    id: 24,
    name: '*프로그래밍Ⅰ',
    grade: 1,
    semester: 2,
    dept: 'information',
    credits: 3,
    necessary: '필수',
    history: []
  },
  {
    id: 25,
    name: '문학',
    grade: 2,
    semester: 1,
    dept: 'korean',
    credits: 3,
    necessary: '기본선택',
    history: []
  },
  {
    id: 26,
    name: '세계문화지리',
    grade: 2,
    semester: 1,
    dept: 'society',
    credits: 3,
    necessary: '필수',
    history: []
  },
  {
    id: 26,
    name: '세계문화지리',
    grade: 2,
    semester: 2,
    dept: 'society',
    credits: 3,
    necessary: '필수',
    history: []
  },
  {
    id: 27,
    name: '시민사회와 정치경제',
    grade: 2,
    semester: 1,
    dept: 'society',
    credits: 3,
    necessary: '필수',
    history: []
  },
  {
    id: 27,
    name: '시민사회와 정치경제',
    grade: 2,
    semester: 2,
    dept: 'society',
    credits: 3,
    necessary: '필수',
    history: []
  },
  {
    id: 29,
    name: '영어회화',
    grade: 2,
    semester: 1,
    dept: 'foreign',
    credits: 3,
    necessary: '기본선택',
    history: []
  },
  {
    id: 30,
    name: '중국어Ⅰ',
    grade: 2,
    semester: 1,
    dept: 'foreign',
    credits: 2,
    necessary: '자율선택',
    history: []
  },
  {
    id: 30,
    name: '중국어Ⅰ',
    grade: 3,
    semester: 1,
    dept: 'foreign',
    credits: 2,
    necessary: '자율선택',
    history: []
  },
  {
    id: 31,
    name: '일본어Ⅰ',
    grade: 2,
    semester: 1,
    dept: 'foreign',
    credits: 2,
    necessary: '자율선택',
    history: []
  },
  {
    id: 31,
    name: '일본어Ⅰ',
    grade: 3,
    semester: 1,
    dept: 'foreign',
    credits: 2,
    necessary: '자율선택',
    history: []
  },
  {
    id: 32,
    name: '스페인어Ⅰ',
    grade: 2,
    semester: 1,
    dept: 'foreign',
    credits: 2,
    necessary: '자율선택',
    history: []
  },
  {
    id: 32,
    name: '스페인어Ⅰ',
    grade: 3,
    semester: 1,
    dept: 'foreign',
    credits: 2,
    necessary: '자율선택',
    history: []
  },
  {
    id: 33,
    name: '음악실기',
    grade: 2,
    semester: 1,
    dept: 'foreign',
    credits: 2,
    necessary: '자율선택',
    history: []
  },
  {
    id: 33,
    name: '음악실기',
    grade: 3,
    semester: 1,
    dept: 'foreign',
    credits: 2,
    necessary: '자율선택',
    history: []
  },
  {
    id: 34,
    name: '체육Ⅲ',
    grade: 2,
    semester: 1,
    dept: 'artpe',
    credits: 1,
    necessary: '필수',
    history: []
  },
  {
    id: 36,
    name: '확률과 통계',
    grade: 2,
    semester: 1,
    dept: 'math',
    credits: 3,
    necessary: '필수',
    history: []
  },
  {
    id: 37,
    name: '미적분과 해석기하',
    grade: 2,
    semester: 1,
    dept: 'math',
    credits: 4,
    necessary: '필수',
    history: []
  },
  {
    id: 38,
    name: '물리학 및 실험Ⅲ',
    grade: 2,
    semester: 1,
    dept: 'physics',
    credits: 3,
    necessary: '기본선택',
    history: []
  },
  {
    id: 39,
    name: '화학 및 실험Ⅲ',
    grade: 2,
    semester: 1,
    dept: 'chemistry',
    credits: 3,
    necessary: '기본선택',
    history: []
  },
  {
    id: 40,
    name: '생명과학 및 실험Ⅲ',
    grade: 2,
    semester: 1,
    dept: 'biology',
    credits: 3,
    necessary: '기본선택',
    history: []
  },
  {
    id: 40,
    name: '생명과학 및 실험Ⅲ',
    grade: 3,
    semester: 1,
    dept: 'biology',
    credits: 3,
    necessary: '기본선택',
    history: []
  },
  {
    id: 41,
    name: '고급지구과학Ⅰ',
    grade: 2,
    semester: 1,
    dept: 'earth',
    credits: 3,
    necessary: '기본선택',
    history: []
  },
  {
    id: 42,
    name: '객체지향프로그래밍',
    grade: 2,
    semester: 1,
    dept: 'information',
    credits: 3,
    necessary: '기본선택',
    history: []
  },
  {
    id: 43,
    name: '프로그래밍Ⅱ',
    grade: 2,
    semester: 1,
    dept: 'information',
    credits: 3,
    necessary: '자율선택',
    history: []
  },
  {
    id: 43,
    name: '프로그래밍Ⅱ',
    grade: 3,
    semester: 1,
    dept: 'information',
    credits: 3,
    necessary: '자율선택',
    history: []
  },
  {
    id: 44,
    name: '공학개론',
    grade: 2,
    semester: 1,
    dept: 'engineering',
    credits: 2,
    necessary: '필수',
    history: []
  },
  {
    id: 45,
    name: '창의적 디자인',
    grade: 2,
    semester: 1,
    dept: 'artpe',
    credits: 2,
    necessary: '기본선택',
    history: []
  },
  {
    id: 46,
    name: '생활 속의 공학',
    grade: 2,
    semester: 1,
    dept: 'engineering',
    credits: 2,
    necessary: '기본선택',
    history: []
  },
  {
    id: 47,
    name: '융합독서',
    grade: 2,
    semester: 2,
    dept: 'fusion',
    credits: 2,
    necessary: '자율선택',
    history: []
  },
  {
    id: 47,
    name: '융합독서',
    grade: 3,
    semester: 2,
    dept: 'fusion',
    credits: 2,
    necessary: '자율선택',
    history: []
  },
  {
    id: 48,
    name: '매체 기반 상호작용',
    grade: 2,
    semester: 2,
    dept: 'fusion',
    credits: 2,
    necessary: '자율선택',
    history: []
  },
  {
    id: 48,
    name: '매체 기반 상호작용',
    grade: 3,
    semester: 2,
    dept: 'fusion',
    credits: 2,
    necessary: '자율선택',
    history: []
  },
  {
    id: 49,
    name: '도시 환경과 도시 계획',
    grade: 2,
    semester: 1,
    dept: 'fusion',
    credits: 2,
    necessary: '자율선택',
    history: []
  },
  {
    id: 49,
    name: '도시 환경과 도시 계획',
    grade: 3,
    semester: 1,
    dept: 'fusion',
    credits: 2,
    necessary: '자율선택',
    history: []
  },
  {
    id: 50,
    name: '세계문제와 역사',
    grade: 2,
    semester: 2,
    dept: 'fusion',
    credits: 2,
    necessary: '자율선택',
    history: []
  },
  {
    id: 50,
    name: '세계문제와 역사',
    grade: 3,
    semester: 2,
    dept: 'fusion',
    credits: 2,
    necessary: '자율선택',
    history: []
  },
  {
    id: 51,
    name: '세계 환경 문제 세미나',
    grade: 2,
    semester: 2,
    dept: 'fusion',
    credits: 2,
    necessary: '자율선택',
    history: []
  },
  {
    id: 51,
    name: '세계 환경 문제 세미나',
    grade: 3,
    semester: 2,
    dept: 'fusion',
    credits: 2,
    necessary: '자율선택',
    history: []
  },
  {
    id: 52,
    name: '개인과 사회',
    grade: 2,
    semester: 2,
    dept: 'fusion',
    credits: 2,
    necessary: '자율선택',
    history: []
  },
  {
    id: 52,
    name: '개인과 사회',
    grade: 3,
    semester: 2,
    dept: 'fusion',
    credits: 2,
    necessary: '자율선택',
    history: []
  },
  {
    id: 53,
    name: '영어로 상상하는 미래과학',
    grade: 2,
    semester: 1,
    dept: 'fusion',
    credits: 2,
    necessary: '자율선택',
    history: []
  },
  {
    id: 54,
    name: '영어로 읽는 과학 텍스트',
    grade: 2,
    semester: 2,
    dept: 'fusion',
    credits: 2,
    necessary: '자율선택',
    history: []
  },
  {
    id: 55,
    name: '과학기술 시사영어',
    grade: 3,
    semester: 1,
    dept: 'fusion',
    credits: 2,
    necessary: '자율선택',
    history: []
  },
  {
    id: 56,
    name: '영어기반 융합세미나',
    grade: 3,
    semester: 2,
    dept: 'fusion',
    credits: 2,
    necessary: '자율선택',
    history: []
  },
  {
    id: 57,
    name: '음악과 테크놀로지',
    grade: 3,
    semester: 2,
    dept: 'fusion',
    credits: 2,
    necessary: '자율선택',
    history: []
  },
  {
    id: 58,
    name: '비주얼 커뮤니케이션',
    grade: 3,
    semester: 1,
    dept: 'fusion',
    credits: 2,
    necessary: '자율선택',
    history: []
  },
  {
    id: 59,
    name: '건축디자인',
    grade: 2,
    semester: 2,
    dept: 'fusion',
    credits: 2,
    necessary: '자율선택',
    history: []
  },
  {
    id: 59,
    name: '건축디자인',
    grade: 3,
    semester: 2,
    dept: 'fusion',
    credits: 2,
    necessary: '자율선택',
    history: []
  },
  {
    id: 60,
    name: '3D 아이데이션',
    grade: 2,
    semester: 2,
    dept: 'fusion',
    credits: 2,
    necessary: '자율선택',
    history: []
  },
  {
    id: 60,
    name: '3D 아이데이션',
    grade: 3,
    semester: 2,
    dept: 'fusion',
    credits: 2,
    necessary: '자율선택',
    history: []
  },
  {
    id: 61,
    name: '수학사 및 수학실험',
    grade: 2,
    semester: 1,
    dept: 'fusion',
    credits: 2,
    necessary: '자율선택',
    history: []
  },
  {
    id: 61,
    name: '수학사 및 수학실험',
    grade: 3,
    semester: 1,
    dept: 'fusion',
    credits: 2,
    necessary: '자율선택',
    history: []
  },
  {
    id: 62,
    name: '융합@수학',
    grade: 2,
    semester: 2,
    dept: 'fusion',
    credits: 2,
    necessary: '자율선택',
    history: []
  },
  {
    id: 62,
    name: '융합@수학',
    grade: 3,
    semester: 2,
    dept: 'fusion',
    credits: 2,
    necessary: '자율선택',
    history: []
  },
  {
    id: 63,
    name: '수학적 문제해결과 의사소통Ⅰ',
    grade: 3,
    semester: 1,
    dept: 'fusion',
    credits: 3,
    necessary: '기본선택',
    history: []
  },
  {
    id: 64,
    name: '수학적 문제해결과 의사소통Ⅱ',
    grade: 3,
    semester: 2,
    dept: 'fusion',
    credits: 3,
    necessary: '기본선택',
    history: []
  },
  {
    id: 65,
    name: '과학문명사',
    grade: 2,
    semester: 1,
    dept: 'fusion',
    credits: 2,
    necessary: '자율선택',
    history: []
  },
  {
    id: 65,
    name: '과학문명사',
    grade: 3,
    semester: 1,
    dept: 'fusion',
    credits: 2,
    necessary: '자율선택',
    history: []
  },
  {
    id: 66,
    name: '물리 첨단기기활용법',
    grade: 2,
    semester: 1,
    dept: 'fusion',
    credits: 2,
    necessary: '자율선택',
    history: []
  },
  {
    id: 66,
    name: '물리 첨단기기활용법',
    grade: 3,
    semester: 1,
    dept: 'fusion',
    credits: 2,
    necessary: '자율선택',
    history: []
  },
  {
    id: 67,
    name: '생활속의 물리',
    grade: 2,
    semester: 2,
    dept: 'fusion',
    credits: 2,
    necessary: '자율선택',
    history: []
  },
  {
    id: 67,
    name: '생활속의 물리',
    grade: 3,
    semester: 2,
    dept: 'fusion',
    credits: 2,
    necessary: '자율선택',
    history: []
  },
  {
    id: 68,
    name: '인터랙티브 피직스',
    grade: 2,
    semester: 2,
    dept: 'fusion',
    credits: 2,
    necessary: '자율선택',
    history: []
  },
  {
    id: 68,
    name: '인터랙티브 피직스',
    grade: 3,
    semester: 2,
    dept: 'fusion',
    credits: 2,
    necessary: '자율선택',
    history: []
  },
  {
    id: 69,
    name: '물리기반 융합세미나Ⅰ',
    grade: 3,
    semester: 1,
    dept: 'fusion',
    credits: 3,
    necessary: '기본선택',
    history: []
  },
  {
    id: 70,
    name: '물리기반 융합세미나Ⅱ',
    grade: 3,
    semester: 2,
    dept: 'fusion',
    credits: 3,
    necessary: '기본선택',
    history: []
  },
  {
    id: 71,
    name: '아름다운 바이오 화학',
    grade: 2,
    semester: 1,
    dept: 'fusion',
    credits: 2,
    necessary: '자율선택',
    history: []
  },
  {
    id: 71,
    name: '아름다운 바이오 화학',
    grade: 3,
    semester: 1,
    dept: 'fusion',
    credits: 2,
    necessary: '자율선택',
    history: []
  },
  {
    id: 72,
    name: '화학으로 이루어진 세상',
    grade: 2,
    semester: 2,
    dept: 'fusion',
    credits: 2,
    necessary: '자율선택',
    history: []
  },
  {
    id: 72,
    name: '화학으로 이루어진 세상',
    grade: 3,
    semester: 2,
    dept: 'fusion',
    credits: 2,
    necessary: '자율선택',
    history: []
  },
  {
    id: 73,
    name: '화학 첨단기기활용법Ⅰ',
    grade: 2,
    semester: 1,
    dept: 'fusion',
    credits: 2,
    necessary: '자율선택',
    history: []
  },
  {
    id: 73,
    name: '화학 첨단기기활용법Ⅰ',
    grade: 3,
    semester: 1,
    dept: 'fusion',
    credits: 2,
    necessary: '자율선택',
    history: []
  },
  {
    id: 74,
    name: '화학 첨단기기활용법Ⅱ',
    grade: 2,
    semester: 2,
    dept: 'fusion',
    credits: 2,
    necessary: '자율선택',
    history: []
  },
  {
    id: 74,
    name: '화학 첨단기기활용법Ⅱ',
    grade: 3,
    semester: 2,
    dept: 'fusion',
    credits: 2,
    necessary: '자율선택',
    history: []
  },
  {
    id: 75,
    name: '화학이슈와 토론Ⅰ',
    grade: 3,
    semester: 1,
    dept: 'fusion',
    credits: 3,
    necessary: '기본선택',
    history: []
  },
  {
    id: 76,
    name: '화학이슈와 토론Ⅱ',
    grade: 3,
    semester: 2,
    dept: 'fusion',
    credits: 3,
    necessary: '기본선택',
    history: []
  },
  {
    id: 77,
    name: '생명정보학',
    grade: 2,
    semester: 1,
    dept: 'fusion',
    credits: 2,
    necessary: '자율선택',
    history: []
  },
  {
    id: 77,
    name: '생명정보학',
    grade: 3,
    semester: 1,
    dept: 'fusion',
    credits: 2,
    necessary: '자율선택',
    history: []
  },
  {
    id: 78,
    name: '생명과학 첨단기기활용법',
    grade: 2,
    semester: 1,
    dept: 'fusion',
    credits: 2,
    necessary: '자율선택',
    history: []
  },
  {
    id: 78,
    name: '생명과학 첨단기기활용법',
    grade: 2,
    semester: 2,
    dept: 'fusion',
    credits: 2,
    necessary: '자율선택',
    history: []
  },
  {
    id: 78,
    name: '생명과학 첨단기기활용법',
    grade: 3,
    semester: 1,
    dept: 'fusion',
    credits: 2,
    necessary: '자율선택',
    history: []
  },
  {
    id: 78,
    name: '생명과학 첨단기기활용법',
    grade: 3,
    semester: 2,
    dept: 'fusion',
    credits: 2,
    necessary: '자율선택',
    history: []
  },
  {
    id: 79,
    name: '뇌와 행동',
    grade: 2,
    semester: 2,
    dept: 'fusion',
    credits: 2,
    necessary: '자율선택',
    history: []
  },
  {
    id: 79,
    name: '뇌와 행동',
    grade: 3,
    semester: 2,
    dept: 'fusion',
    credits: 2,
    necessary: '자율선택',
    history: []
  },
  {
    id: 80,
    name: '창발적 사고와 문제해결Ⅰ',
    grade: 3,
    semester: 1,
    dept: 'fusion',
    credits: 3,
    necessary: '기본선택',
    history: []
  },
  {
    id: 81,
    name: '창발적 사고와 문제해결Ⅱ',
    grade: 3,
    semester: 2,
    dept: 'fusion',
    credits: 3,
    necessary: '기본선택',
    history: []
  },
  {
    id: 82,
    name: '자연재해와 인간의 삶',
    grade: 2,
    semester: 2,
    dept: 'fusion',
    credits: 2,
    necessary: '자율선택',
    history: []
  },
  {
    id: 82,
    name: '자연재해와 인간의 삶',
    grade: 3,
    semester: 2,
    dept: 'fusion',
    credits: 2,
    necessary: '자율선택',
    history: []
  },
  {
    id: 83,
    name: '지구시스템 탐사',
    grade: 2,
    semester: 2,
    dept: 'fusion',
    credits: 2,
    necessary: '자율선택',
    history: []
  },
  {
    id: 84,
    name: '지구와 우주의 영상탐사',
    grade: 3,
    semester: 1,
    dept: 'fusion',
    credits: 2,
    necessary: '자율선택',
    history: []
  },
  {
    id: 85,
    name: '인공지능',
    grade: 2,
    semester: 2,
    dept: 'fusion',
    credits: 3,
    necessary: '기본선택',
    history: []
  },
  {
    id: 85,
    name: '인공지능',
    grade: 3,
    semester: 2,
    dept: 'fusion',
    credits: 3,
    necessary: '기본선택',
    history: []
  },
  {
    id: 86,
    name: '정보과학프로젝트Ⅰ',
    grade: 2,
    semester: 1,
    dept: 'fusion',
    credits: 2,
    necessary: '자율선택',
    history: []
  },
  {
    id: 86,
    name: '정보과학프로젝트Ⅰ',
    grade: 3,
    semester: 1,
    dept: 'fusion',
    credits: 2,
    necessary: '자율선택',
    history: []
  },
  {
    id: 87,
    name: '정보과학프로젝트Ⅱ',
    grade: 2,
    semester: 2,
    dept: 'fusion',
    credits: 2,
    necessary: '자율선택',
    history: []
  },
  {
    id: 87,
    name: '정보과학프로젝트Ⅱ',
    grade: 3,
    semester: 2,
    dept: 'fusion',
    credits: 2,
    necessary: '자율선택',
    history: []
  },
  {
    id: 88,
    name: '인공지능 프로젝트',
    grade: 2,
    semester: 1,
    dept: 'fusion',
    credits: 2,
    necessary: '자율선택',
    history: []
  },
  {
    id: 88,
    name: '인공지능 프로젝트',
    grade: 3,
    semester: 1,
    dept: 'fusion',
    credits: 2,
    necessary: '자율선택',
    history: []
  },
  {
    id: 89,
    name: '인터랙티브 디자인과 테크놀로지',
    grade: 2,
    semester: 1,
    dept: 'fusion',
    credits: 2,
    necessary: '자율선택',
    history: []
  },
  {
    id: 89,
    name: '인터랙티브 디자인과 테크놀로지',
    grade: 3,
    semester: 1,
    dept: 'fusion',
    credits: 2,
    necessary: '자율선택',
    history: []
  },
  {
    id: 90,
    name: 'ESD와 적정기술',
    grade: 2,
    semester: 2,
    dept: 'fusion',
    credits: 2,
    necessary: '자율선택',
    history: []
  },
  {
    id: 90,
    name: 'ESD와 적정기술',
    grade: 3,
    semester: 2,
    dept: 'fusion',
    credits: 2,
    necessary: '자율선택',
    history: []
  },
  {
    id: 91,
    name: '창의경영',
    grade: 2,
    semester: 2,
    dept: 'fusion',
    credits: 2,
    necessary: '자율선택',
    history: []
  },
  {
    id: 91,
    name: '창의경영',
    grade: 3,
    semester: 2,
    dept: 'fusion',
    credits: 2,
    necessary: '자율선택',
    history: []
  },
  {
    id: 92,
    name: '논리적 글쓰기',
    grade: 2,
    semester: 2,
    dept: 'korean',
    credits: 3,
    necessary: '기본선택',
    history: []
  },
  {
    id: 93,
    name: '발표와 토론',
    grade: 3,
    semester: 1,
    dept: 'korean',
    credits: 2,
    necessary: '자율선택',
    history: []
  },
  {
    id: 93,
    name: '발표와 토론',
    grade: 3,
    semester: 2,
    dept: 'korean',
    credits: 2,
    necessary: '자율선택',
    history: []
  },
  {
    id: 94,
    name: '창의적 글쓰기',
    grade: 2,
    semester: 1,
    dept: 'korean',
    credits: 2,
    necessary: '자율선택',
    history: []
  },
  {
    id: 95,
    name: '문학감상과 인문학적 상상력',
    grade: 2,
    semester: 2,
    dept: 'korean',
    credits: 2,
    necessary: '자율선택',
    history: []
  },
  {
    id: 95,
    name: '문학감상과 인문학적 상상력',
    grade: 3,
    semester: 2,
    dept: 'korean',
    credits: 2,
    necessary: '자율선택',
    history: []
  },
  {
    id: 96,
    name: '철학',
    grade: 2,
    semester: 2,
    dept: 'society',
    credits: 2,
    necessary: '자율선택',
    history: []
  },
  {
    id: 96,
    name: '철학',
    grade: 3,
    semester: 2,
    dept: 'society',
    credits: 2,
    necessary: '자율선택',
    history: []
  },
  {
    id: 97,
    name: '영어독해와 작문',
    grade: 2,
    semester: 2,
    dept: 'foreign',
    credits: 3,
    necessary: '기본선택',
    history: []
  },
  {
    id: 98,
    name: '영어권 문화의 이해',
    grade: 3,
    semester: 1,
    dept: 'foreign',
    credits: 2,
    necessary: '자율선택',
    history: []
  },
  {
    id: 99,
    name: '영어 스피치와 커뮤니케이션',
    grade: 3,
    semester: 2,
    dept: 'foreign',
    credits: 2,
    necessary: '자율선택',
    history: []
  },
  {
    id: 100,
    name: '중국어Ⅱ',
    grade: 2,
    semester: 2,
    dept: 'foreign',
    credits: 2,
    necessary: '자율선택',
    history: []
  },
  {
    id: 100,
    name: '중국어Ⅱ',
    grade: 3,
    semester: 2,
    dept: 'foreign',
    credits: 2,
    necessary: '자율선택',
    history: []
  },
  {
    id: 101,
    name: '일본어Ⅱ',
    grade: 2,
    semester: 2,
    dept: 'foreign',
    credits: 2,
    necessary: '자율선택',
    history: []
  },
  {
    id: 101,
    name: '일본어Ⅱ',
    grade: 3,
    semester: 2,
    dept: 'foreign',
    credits: 2,
    necessary: '자율선택',
    history: []
  },
  {
    id: 102,
    name: '스페인어Ⅱ',
    grade: 2,
    semester: 2,
    dept: 'foreign',
    credits: 2,
    necessary: '자율선택',
    history: []
  },
  {
    id: 102,
    name: '스페인어Ⅱ',
    grade: 3,
    semester: 2,
    dept: 'foreign',
    credits: 2,
    necessary: '자율선택',
    history: []
  },
  {
    id: 103,
    name: '합주',
    grade: 2,
    semester: 2,
    dept: 'artpe',
    credits: 2,
    necessary: '자율선택',
    history: []
  },
  {
    id: 103,
    name: '합주',
    grade: 3,
    semester: 2,
    dept: 'artpe',
    credits: 2,
    necessary: '자율선택',
    history: []
  },
  {
    id: 104,
    name: '체육 Ⅳ',
    grade: 2,
    semester: 2,
    dept: 'artpe',
    credits: 1,
    necessary: '필수',
    history: []
  },
  {
    id: 105,
    name: '인성체육',
    grade: 3,
    semester: 1,
    dept: 'artpe',
    credits: 1,
    necessary: '자율선택',
    history: []
  },
  {
    id: 106,
    name: '생활체육',
    grade: 3,
    semester: 2,
    dept: 'artpe',
    credits: 1,
    necessary: '자율선택',
    history: []
  },
  {
    id: 107,
    name: '*(+1)미적분학Ⅰ',
    grade: 2,
    semester: 2,
    dept: 'math',
    credits: 3,
    necessary: '기본선택',
    history: []
  },
  {
    id: 107,
    name: '*(+1)미적분학Ⅰ',
    grade: 3,
    semester: 2,
    dept: 'math',
    credits: 3,
    necessary: '기본선택',
    history: []
  },
  {
    id: 108,
    name: '이산수학',
    grade: 2,
    semester: 2,
    dept: 'math',
    credits: 3,
    necessary: '자율선택',
    history: []
  },
  {
    id: 108,
    name: '이산수학',
    grade: 3,
    semester: 2,
    dept: 'math',
    credits: 3,
    necessary: '자율선택',
    history: []
  },
  {
    id: 109,
    name: '정수론',
    grade: 2,
    semester: 2,
    dept: 'math',
    credits: 3,
    necessary: '자율선택',
    history: []
  },
  {
    id: 109,
    name: '정수론',
    grade: 3,
    semester: 2,
    dept: 'math',
    credits: 3,
    necessary: '자율선택',
    history: []
  },
  {
    id: 110,
    name: '*(+1)선형대수학',
    grade: 3,
    semester: 1,
    dept: 'math',
    credits: 3,
    necessary: '자율선택',
    history: []
  },
  {
    id: 111,
    name: '*(+1)미적분학Ⅱ',
    grade: 3,
    semester: 1,
    dept: 'math',
    credits: 3,
    necessary: '자율선택',
    history: []
  },
  {
    id: 111,
    name: '*(+1)미적분학Ⅱ',
    grade: 3,
    semester: 2,
    dept: 'math',
    credits: 3,
    necessary: '자율선택',
    history: []
  },
  {
    id: 112,
    name: '고급물리학Ⅰ',
    grade: 2,
    semester: 2,
    dept: 'physics',
    credits: 3,
    necessary: '기본선택',
    history: []
  },
  {
    id: 113,
    name: '*(+1)일반물리학Ⅰ',
    grade: 2,
    semester: 2,
    dept: 'physics',
    credits: 3,
    necessary: '기본선택',
    history: []
  },
  {
    id: 114,
    name: '*일반물리학실험Ⅰ',
    grade: 2,
    semester: 2,
    dept: 'physics',
    credits: 2,
    necessary: '기본선택',
    history: []
  },
  {
    id: 115,
    name: '고급물리학Ⅱ',
    grade: 3,
    semester: 1,
    dept: 'physics',
    credits: 3,
    necessary: '자율선택',
    history: []
  },
  {
    id: 116,
    name: '*(+1)일반물리학Ⅱ',
    grade: 3,
    semester: 1,
    dept: 'physics',
    credits: 3,
    necessary: '자율선택',
    history: []
  },
  {
    id: 117,
    name: '*일반물리학실험Ⅱ',
    grade: 3,
    semester: 1,
    dept: 'physics',
    credits: 2,
    necessary: '자율선택',
    history: []
  },
  {
    id: 118,
    name: '고급화학Ⅰ',
    grade: 2,
    semester: 2,
    dept: 'chemistry',
    credits: 3,
    necessary: '기본선택',
    history: []
  },
  {
    id: 119,
    name: '*(+1)일반화학Ⅰ',
    grade: 2,
    semester: 2,
    dept: 'chemistry',
    credits: 3,
    necessary: '기본선택',
    history: []
  },
  {
    id: 120,
    name: '*일반화학실험Ⅰ',
    grade: 2,
    semester: 2,
    dept: 'chemistry',
    credits: 2,
    necessary: '기본선택',
    history: []
  },
  {
    id: 121,
    name: '고급화학Ⅱ',
    grade: 3,
    semester: 1,
    dept: 'chemistry',
    credits: 3,
    necessary: '자율선택',
    history: []
  },
  {
    id: 122,
    name: '*(+1)일반화학Ⅱ',
    grade: 3,
    semester: 1,
    dept: 'chemistry',
    credits: 3,
    necessary: '자율선택',
    history: []
  },
  {
    id: 123,
    name: '*일반화학실험Ⅱ',
    grade: 3,
    semester: 1,
    dept: 'chemistry',
    credits: 2,
    necessary: '자율선택',
    history: []
  },
  {
    id: 124,
    name: '고급생명과학',
    grade: 2,
    semester: 2,
    dept: 'biology',
    credits: 3,
    necessary: '기본선택',
    history: []
  },
  {
    id: 124,
    name: '고급생명과학',
    grade: 3,
    semester: 2,
    dept: 'biology',
    credits: 3,
    necessary: '기본선택',
    history: []
  },
  {
    id: 125,
    name: '*(+1)일반생명과학',
    grade: 2,
    semester: 2,
    dept: 'biology',
    credits: 3,
    necessary: '기본선택',
    history: []
  },
  {
    id: 125,
    name: '*(+1)일반생명과학',
    grade: 3,
    semester: 2,
    dept: 'biology',
    credits: 3,
    necessary: '기본선택',
    history: []
  },
  {
    id: 126,
    name: '일반생명과학실험',
    grade: 2,
    semester: 2,
    dept: 'biology',
    credits: 2,
    necessary: '기본선택',
    history: []
  },
  {
    id: 126,
    name: '일반생명과학실험',
    grade: 3,
    semester: 2,
    dept: 'biology',
    credits: 2,
    necessary: '기본선택',
    history: []
  },
  {
    id: 127,
    name: '생물다양성의 이해',
    grade: 3,
    semester: 1,
    dept: 'biology',
    credits: 3,
    necessary: '자율선택',
    history: []
  },
  {
    id: 128,
    name: '생물다양성의 실제',
    grade: 2,
    semester: 2,
    dept: 'biology',
    credits: 3,
    necessary: '자율선택',
    history: []
  },
  {
    id: 128,
    name: '생물다양성의 실제',
    grade: 3,
    semester: 2,
    dept: 'biology',
    credits: 3,
    necessary: '자율선택',
    history: []
  },
  {
    id: 129,
    name: '생명과학탐구실습',
    grade: 3,
    semester: 1,
    dept: 'biology',
    credits: 2,
    necessary: '자율선택',
    history: []
  },
  {
    id: 130,
    name: '고급지구과학Ⅱ',
    grade: 2,
    semester: 2,
    dept: 'earth',
    credits: 3,
    necessary: '기본선택',
    history: []
  },
  {
    id: 131,
    name: '천체관측',
    grade: 2,
    semester: 2,
    dept: 'earth',
    credits: 3,
    necessary: '자율선택',
    history: []
  },
  {
    id: 132,
    name: '대기해양실습',
    grade: 3,
    semester: 1,
    dept: 'earth',
    credits: 2,
    necessary: '자율선택',
    history: []
  },
  {
    id: 133,
    name: '지질학실습',
    grade: 3,
    semester: 2,
    dept: 'earth',
    credits: 2,
    necessary: '자율선택',
    history: []
  },
  {
    id: 134,
    name: '알고리즘',
    grade: 2,
    semester: 2,
    dept: 'information',
    credits: 3,
    necessary: '기본선택',
    history: []
  },
  {
    id: 134,
    name: '알고리즘',
    grade: 3,
    semester: 2,
    dept: 'information',
    credits: 3,
    necessary: '기본선택',
    history: []
  },
  {
    id: 135,
    name: '고급알고리즘',
    grade: 3,
    semester: 1,
    dept: 'information',
    credits: 3,
    necessary: '자율선택',
    history: []
  },
];