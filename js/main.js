// DOM이 로드된 후 실행
document.addEventListener("DOMContentLoaded", () => {
  const candidatesGrid = document.getElementById("candidatesGrid");
  const modal = document.getElementById("promiseModal");
  const closeModalBtn = document.getElementById("closeModal");
  const trustButton = document.getElementById("trustButton");
  const trustModal = document.getElementById("trustModal");
  const closeTrustModalBtn = document.getElementById("closeTrustModal");
  const trustCloseBtn = document.querySelector(".trust-close-btn");

  // 공약 모달 닫기 버튼 이벤트
  closeModalBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // 공약 모달 외부 클릭 시 닫기
  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
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

  // 정당 필터 옵션 채우기
  // 정당 필터가 제거되어 주석 처리
  /*
  const parties = [...new Set(candidates.map(candidate => candidate.party))];
  parties.sort().forEach(party => {
    const option = document.createElement("option");
    option.value = party;
    option.textContent = party;
    partyFilter.appendChild(option);
  });

  // 정책 분야 필터 옵션 채우기
  const policyCategories = [...new Set(candidates.flatMap(candidate => Object.keys(candidate.promises)))];
  policyCategories.sort().forEach(category => {
    const option = document.createElement("option");
    option.value = category;
    option.textContent = category;
    policyFilter.appendChild(option);
  });
  */

  // 후보자 순서 랜덤화
  const shuffledCandidates = shuffleArray([...candidates]);

  // 후보자 카드 생성 및 표시
  shuffledCandidates.forEach((candidate) => {
    const card = createCandidateCard(candidate);
    candidatesGrid.appendChild(card);
    card.addEventListener("click", () => {
      console.log("Clicked candidate:", candidate.name);
      displayCandidatePromises(candidate);
    });
  });

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
        candidatesGrid.innerHTML = "";
        const shuffledCandidates = shuffleArray([...candidates]);
        shuffledCandidates.forEach((candidate) => {
          const card = createCandidateCard(candidate);
          candidatesGrid.appendChild(card);

          // 카드 클릭 이벤트 - 모달 표시
          card.addEventListener("click", () => {
            displayCandidatePromises(candidate);
          });
        });
      });

      return;
    }

    // 검색 결과 카드 생성 및 표시 (랜덤 순서)
    shuffledResults.forEach((candidate) => {
      const card = createCandidateCard(candidate);
      candidatesGrid.appendChild(card);

      // 카드 클릭 이벤트 - 모달 표시
      card.addEventListener("click", () => {
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
      candidatesGrid.innerHTML = "";
      const shuffledCandidates = shuffleArray([...candidates]);
      shuffledCandidates.forEach((candidate) => {
        const card = createCandidateCard(candidate);
        candidatesGrid.appendChild(card);

        // 카드 클릭 이벤트 - 모달 표시
        card.addEventListener("click", () => {
          displayCandidatePromises(candidate);
        });
      });
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
  console.log("displayCandidatePromises called for:", candidate.name);
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
  } catch (err) {
    console.error("Error in displayCandidatePromises:", err);
  }
  // 모달 표시 로직는 위 try 전에 실행됨
}
