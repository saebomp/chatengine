import MessageForm from "./MessageForm";
import MyMessage from "./MyMessage";
import TheirMessage from "./TheirMessage";

const ChatFeed = (props) => {
    const {chats, activeChat, userName, messages } = props;
    const chat = chats && chats[activeChat]
    //chats이 있을때 
    console.log('here', chat,userName, messages )
    return (
        <div>
            ChatFeed
        </div>
    )
}

export default ChatFeed;