import { ChatEngine } from "react-chat-engine";
import ChatFeed from "./chatApplication/ChatFeed";
const ChatComponent = () => {
    return (
        <div className="chat">

            <ChatEngine
                height="100vh"
                projectID="db61d0a3-f651-4cba-b5f8-91b7b1f549b1"
                userName="test2"
                userSecret="VeerAnku@2022"
                renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
            />
        </div>
    );
}

export default ChatComponent;