
const chat_header = () => {
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

export default {chat_header}