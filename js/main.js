// DOM이 로드된 후 실행
// 한글 슬러그를 영문으로 변환하는 함수
function getEnglishSlug(koreanSlug) {
  const slugMap = {
    '김동연': 'kim-dong-yeon',
    '이재명': 'lee-jae-myung',
    '김경수': 'kim-kyung-soo',
    '이준석': 'lee-jun-seok',
    '안철수': 'ahn-cheol-soo',
    '김문수': 'kim-moon-soo',
    '한동훈': 'han-dong-hoon',
    '나경원': 'na-kyung-won',
    '홍준표': 'hong-joon-pyo',
    '유정복': 'yoo-jeong-bok',
    '이철우': 'lee-cheol-woo',
    '양향자': 'yang-hyang-ja',
    '김재연': 'kim-jae-yeon',
    '강성희': 'kang-sung-hee',
    '권영국': 'kwon-young-gook',
    '한상균': 'han-sang-gyun',
    '황교안': 'hwang-kyo-ahn',
    '전광훈': 'jeon-kwang-hoon'
  };
  
  return slugMap[koreanSlug] || koreanSlug; // 매핑이 없으면 원래 슬러그 반환
}

document.addEventListener("DOMContentLoaded", () => {
  const candidatesGrid = document.getElementById("candidatesGrid");
  const modal = document.getElementById("promiseModal");
  const closeModalBtn = document.getElementById("closeModal");
  const trustButton = document.getElementById("trustButton");
  const trustModal = document.getElementById("trustModal");
  const closeTrustModalBtn = document.getElementById("closeTrustModal");
  const trustCloseBtn = document.querySelector(".trust-close-btn");

  // URL에서 후보자 슬러그 추출 함수
  function getCandidateSlugFromUrl() {
    const path = window.location.pathname;
    const match = path.match(/\/candidates\/([^\/]+)/);
    return match ? match[1] : null;
  }

  // 초기 로드 시 URL을 기반으로 후보자 모달 표시
  function handleInitialUrl() {
    const urlSlug = getCandidateSlugFromUrl();
    if (urlSlug) {
      // 영문 slug에서 한글 slug 찾기
      // 1. 정확히 매칭되는 후보자가 있는지 확인
      let candidate = candidates.find(c => getEnglishSlug(c.slug) === urlSlug);
      if (candidate) {
        displayCandidatePromises(candidate);
      }
    }
  }

  // 뒤로 가기/앞으로 가기 버튼 처리
  window.addEventListener('popstate', (event) => {
    if (event.state && event.state.slug) {
      const candidate = candidates.find(c => c.slug === event.state.slug);
      if (candidate) {
        displayCandidatePromises(candidate);
      }
    } else {
      modal.style.display = "none";
    }
  });

  // 모달 닫기 시 URL 변경
  function closeModal() {
    modal.style.display = "none";
    window.history.pushState({}, "", "/");
  }

  // 공약 모달 닫기 버튼 이벤트
  closeModalBtn.addEventListener("click", closeModal);

  // 공약 모달 외부 클릭 시 닫기
  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      closeModal();
    }
    if (event.target === trustModal) {
      trustModal.style.display = "none";
    }
  });

  // 신뢰성 정보 버튼 클릭 이벤트
  trustButton.addEventListener("click", () => {
    trustModal.style.display = "block";
  });

  // 신뢰성 모달 닫기 버튼 이벤트
  closeTrustModalBtn.addEventListener("click", () => {
    trustModal.style.display = "none";
  });

  // 신뢰성 모달 확인 버튼 이벤트
  trustCloseBtn.addEventListener("click", () => {
    trustModal.style.display = "none";
  });

  // 전체 후보 다시 로드하는 함수
  function resetCandidatesDisplay() {
    candidatesGrid.innerHTML = "";
    const shuffledCandidates = shuffleArray([...candidates]);
    shuffledCandidates.forEach((candidate) => {
      const card = createCandidateCard(candidate);
      candidatesGrid.appendChild(card);

      // 카드 클릭 이벤트 - URL 변경 및 모달 표시
      card.addEventListener("click", () => {
        const slug = candidate.slug;
        const englishSlug = getEnglishSlug(slug);
        // URL 변경
        window.history.pushState({ slug: slug, candidateId: candidate.id }, "", `/candidates/${englishSlug}`);
        // 모달 표시
        displayCandidatePromises(candidate);
      });
    });
  }
  
  // 후보자 카드 초기 로드 및 표시
  resetCandidatesDisplay();
  
  // 초기 URL 처리
  handleInitialUrl();

  // 검색 기능 구현
  const candidateSearch = document.getElementById("candidateSearch");
  const searchButton = document.getElementById("searchButton");

  // 검색 버튼 클릭 이벤트
  searchButton.addEventListener("click", () => {
    performSearch();
  });

  // 엔터키 검색 이벤트
  candidateSearch.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      performSearch();
    }
  });

  // 실시간 검색(input 이벤트) 적용
  candidateSearch.addEventListener("input", () => {
    performSearch();
  });

  // 검색 실행 함수
  function performSearch() {
    const searchTerm = candidateSearch.value.trim().toLowerCase();

    // 검색어가 비어 있으면 전체 후보 표시
    if (searchTerm === "") {
      candidatesGrid.innerHTML = "";
      const resetCandidates = shuffleArray([...candidates]);
      resetCandidates.forEach((candidate) => {
        const card = createCandidateCard(candidate);
        candidatesGrid.appendChild(card);
        card.addEventListener("click", () => {
          displayCandidatePromises(candidate);
        });
      });
      return;
    }

    // 검색어와 일치하는 후보자 찾기
    const foundCandidates = candidates.filter(
      (candidate) =>
        candidate.name.toLowerCase().includes(searchTerm) ||
        candidate.party.toLowerCase().includes(searchTerm) ||
        (candidate.position &&
          candidate.position.toLowerCase().includes(searchTerm))
    );

    // 검색 결과 표시
    displaySearchResults(foundCandidates);
  }

  // 검색 결과 표시 함수
  function displaySearchResults(results) {
    // 검색 결과 순서를 랜덤화
    const shuffledResults = shuffleArray([...results]);
    // 기존 그리드 비우기
    candidatesGrid.innerHTML = "";

    if (shuffledResults.length === 0) {
      const noResults = document.createElement("div");
      noResults.className = "no-results";
      noResults.innerHTML = `
                <p>검색 결과가 없습니다. 다른 검색어를 입력해 보세요.</p>
                <button class="reset-search" id="resetSearch">전체 후보 보기</button>
            `;
      candidatesGrid.appendChild(noResults);

      // 검색 초기화 버튼 이벤트
      document.getElementById("resetSearch").addEventListener("click", () => {
        // 검색창 초기화
        candidateSearch.value = "";

        // 전체 후보 다시 표시
        resetCandidatesDisplay();
      });

      return;
    }

    // 검색 결과 카드 생성 및 표시 (랜덤 순서)
    shuffledResults.forEach((candidate) => {
      const card = createCandidateCard(candidate);
      candidatesGrid.appendChild(card);

      // 카드 클릭 이벤트 - URL 변경 및 모달 표시
      card.addEventListener("click", () => {
        const slug = candidate.slug;
        const englishSlug = getEnglishSlug(slug);
        // URL 변경
        window.history.pushState({ slug: slug, candidateId: candidate.id }, "", `/candidates/${englishSlug}`);
        // 모달 표시
        displayCandidatePromises(candidate);
      });
    });

    // 검색 초기화 버튼 추가
    const resetContainer = document.createElement("div");
    resetContainer.style.gridColumn = "1 / -1";
    resetContainer.style.textAlign = "center";
    resetContainer.style.marginTop = "2rem";

    const resetButton = document.createElement("button");
    resetButton.className = "reset-search";
    resetButton.textContent = "전체 후보 보기";
    resetButton.id = "resetSearchBtn";

    resetContainer.appendChild(resetButton);
    candidatesGrid.appendChild(resetContainer);

    // 검색 초기화 버튼 이벤트
    document.getElementById("resetSearchBtn").addEventListener("click", () => {
      // 검색창 초기화
      candidateSearch.value = "";

      // 전체 후보 다시 표시
      resetCandidatesDisplay();
    });
  }
});

// 배열 랜덤 섞기 함수
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// 후보자 카드 HTML 생성 함수
function createCandidateCard(candidate) {
  const card = document.createElement("div");
  card.className = "candidate-card";
  card.dataset.slug = candidate.slug; // slug 데이터 속성 추가

  card.innerHTML = `
        <img class="candidate-img" src="${candidate.image}" alt="${candidate.name}">
        <div class="candidate-info">
            <h3 class="candidate-name">${candidate.name}</h3>
            <p class="candidate-party">${candidate.party}</p>
        </div>
    `;

  return card;
}

// 후보자 공약 모달 표시 함수
function displayCandidatePromises(candidate) {
  const modal = document.getElementById("promiseModal");
  // 모달 먼저 표시
  modal.style.display = "block";
  const modalCandidateImg = document.getElementById("modalCandidateImg");
  const modalCandidateName = document.getElementById("modalCandidateName");
  const modalCandidateParty = document.getElementById("modalCandidateParty");
  const promiseContent = document.getElementById("promiseContent");

  try {
    // 모달 후보자 정보 설정
    modalCandidateImg.src = candidate.image;
    modalCandidateImg.alt = candidate.name;
    modalCandidateName.textContent = `${candidate.name} 공약`;
    modalCandidateParty.textContent = `${candidate.party}${
      candidate.position ? " | " + candidate.position : ""
    }`;

    // 공약 내용 초기화
    promiseContent.innerHTML = "";

    // 데이터 타입에 따라 처리
    if (Array.isArray(candidate.promises)) {
      // flat list 형태
      const categoryDiv = document.createElement("div");
      categoryDiv.className = "promise-category";
      categoryDiv.innerHTML = `
        <h4>주요 공약</h4>
        <ul class="promise-list">
          ${candidate.promises
            .map((p) => `<li class="promise-item">${p.title || p}</li>`)
            .join("")}
        </ul>
      `;
      promiseContent.appendChild(categoryDiv);
    } else if (typeof candidate.promises === "object") {
      // 그룹별 카테고리
      for (const [category, promises] of Object.entries(candidate.promises)) {
        const categoryDiv = document.createElement("div");
        categoryDiv.className = "promise-category";
        categoryDiv.innerHTML = `
          <h4>${category}</h4>
          <ul class="promise-list">
            ${promises
              .map((item) => `<li class="promise-item">${item}</li>`)
              .join("")}
          </ul>
        `;
        promiseContent.appendChild(categoryDiv);
      }
    } else {
      console.warn("Unknown promises format", candidate.promises);
    }
    
    // URL에 후보자 정보가 포함되도록 설정
    const englishSlug = getEnglishSlug(candidate.slug);
    if (window.location.pathname !== `/candidates/${englishSlug}`) {
      window.history.pushState(
        { slug: candidate.slug, candidateId: candidate.id },
        "",
        `/candidates/${englishSlug}`
      );
    }
  } catch (err) {
    console.error("Error in displayCandidatePromises:", err);
  }
}
