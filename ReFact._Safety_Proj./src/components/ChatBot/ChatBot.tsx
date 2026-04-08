const Chat_header = () => {
    return (
        <>
        <header className="chat-header">
            <img src="/mark-image.gif" alt="안전보건공단 로고" className="header-logo"></img>
            <div className="header-title">
                <h1>안전보건 챗봇</h1>
                <span>KOSHA Easy</span>
            </div>
            <div className="font-controls">
                <button id="decrease-font" title="글자 작게">-</button>
                <button id="increase-font" title="글자 크게">+</button>
            </div>
        </header>
        </>
    )
}
const Chat_messages = () => {
    return (
        <>
            <main id="chat-messages" className="chat-messages"></main>
        </>
    )
}
const Chat_footer = () => {
    return (
        <>
            <footer className="chat-input-area">
            <div className="input-wrapper">
                <div className="suggestion-btn-area">
                    <button id="suggestion-guide-btn" className="suggestion-btn">위험성 질문 가이드</button>
                    </div>
                <div className="input-field-wrapper">
                    <input type="text" id="chat-input" placeholder="궁금한 내용을 입력하세요."></input>
                    <button id="send-btn" className="send-btn">
                        <svg viewBox="0 0 24 24" width="24" height="24">
                            <path fill="currentColor" d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </footer>
        </>
    )
}
export {Chat_header,Chat_messages,Chat_footer}