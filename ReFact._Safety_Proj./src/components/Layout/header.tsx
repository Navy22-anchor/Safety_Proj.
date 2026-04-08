import logo from '../../assets/logo.gif'


const Header = () => {
    return (
        <>
        <header className="header">
        <a href="/" className="header__logo">
            <img src={logo} alt="AI 산업안전보건 로고"></img>
            안전보건 공단과 함께하는 AI
        </a>
        <nav className="header__nav">
            <ul className="header__nav-list">
                <li className="header__nav-item"><a href="#" className="header__nav-link">사업소개</a></li>
                <li className="header__nav-item"><a href="#" className="header__nav-link">핵심기능</a></li>
                <li className="header__nav-item"><a href="#" className="header__nav-link">자료실</a></li>
                <li className="header__nav-item"><a href="#" className="header__nav-link">고객지원</a></li>
            </ul>
        </nav>
        </header>
        </>
    
    )
}

export default Header