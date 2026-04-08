const Main_searching = () => {
    return (
        <>
        <section className="hero">
            <div className="hero__content">
                <h1 className="hero__title">AI로 만드는 안전한 산업 현장</h1>
                <p className="hero__subtitle">데이터 기반 위험성 평가로 산업 재해를 예방하는 종합 솔루션</p>
                <form className="hero__search-form">
                    <input type="text" className="hero__search-input" placeholder="궁금한 안전 규정을 검색해보세요"></input>
                    <button type="submit" className="hero__search-button">검색</button>
                </form>
            </div>
        </section>
    </>
    )
}

const Main_mainFunctions = () => {
    return (
        <>
            <section className="features">
            <h2 className="features__title">주요 기능 안내</h2>
            <div className="features__grid">
                <a href="http://127.0.0.1:5501/web/web.html">
                    <article className="feature-card" >
                        <div className="feature-card__icon">📈</div>
                        <h3 className="feature-card__title">실시간 위험 분석</h3>
                        <p className="feature-card__description">AI가 현장 데이터를 실시간으로 분석하여 잠재적 위험 요소를 즉시 알려줍니다.</p>
                    </article>
                </a>
                
                <article className="feature-card">
                    <div className="feature-card__icon">📋</div>
                    <h3 className="feature-card__title">자동 안전 보고서</h3>
                    <p className="feature-card__description">일일, 주간, 월간 안전 점검 보고서를 자동으로 생성하여 관리 효율을 높입니다.</p>
                </article>
                <article className="feature-card">
                    <div className="feature-card__icon">🛡️</div>
                    <h3 className="feature-card__title">맞춤형 안전 교육</h3>
                    <p className="feature-card__description">작업자별 맞춤형 안전 교육 콘텐츠를 제공하여 안전 의식을 강화합니다.</p>
                </article>
                <article className="feature-card">
                    <div className="feature-card__icon">⚖️</div>
                    <h3 className="feature-card__title">법규 준수 관리</h3>
                    <p className="feature-card__description">최신 산업안전보건법규를 기반으로 현장의 규정 준수 여부를 점검합니다.</p>
                </article>
            </div>
        </section>      
        </>
    )
}

const Main_News = () => {
    return (
        <>
            <section className="news">
            <h2 className="news__title">최신 소식 및 자료</h2>
            <ul className="news__list">
                <li className="news__item">
                    <a href="#" className="news__link">[보도자료] AI 기술, 건설 현장 중대재해 예방 효과 입증</a>
                    <span className="news__date">2025.09.29</span>
                </li>
                <li className="news__item">
                    <a href="#" className="news__link">[자료] 2025년 하반기 개정 산업안전보건법규 안내</a>
                    <span className="news__date">2025.09.25</span>
                </li>
                <li className="news__item">
                    <a href="#" className="news__link">[공지] 서버 점검으로 인한 서비스 일시 중단 안내 (10/05)</a>
                    <span className="news__date">2025.09.23</span>
                </li>
            </ul>
        </section>  
        </>
    )
}

export {Main_searching, Main_mainFunctions, Main_News}