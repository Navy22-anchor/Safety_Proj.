import {Chat_header,Chat_messages,Chat_footer} from '../../components/ChatBot/ChatBot'
import './ChatPage.css'
const ChatPage = () => {
    return (
        <div id="chat-container" className="visible">
            <Chat_header/>
            <Chat_messages/>
            <Chat_footer/>
        </div>
    )
}
export default ChatPage