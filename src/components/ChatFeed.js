import MessageForm from "./MessageForm";
import MyMessage from "./MyMessage";
import TheirMessage from "./TheirMessage";

const ChatFeed = (props) => {
    const {chats, activeChat, userName, messages } = props;
    const chat = chats && chats[activeChat]
    //chats이 있을때 chats[activeChat] 찾음

    const renderMessage = () => {
        const keys = Object.keys(messages)
        // keys 는 message의 specific message임

        return keys.map((key,index) => {
            const message = messages[key];
            const lastMessageKey = index === 0 ? null : keys[index - 1]
            //만약 거기 message가 있으면 맨 마지막것을 찾아라
            const isMyMessage = userName === message.sender.username

            return (
                <div key={`msg_${index}`} style={{width:'100%'}}>
                    <div className="message-block">
                        {
                            isMyMessage
                            ?
                            <MyMessage />
                            :
                            <TheirMessage />
                        }
                    </div>
                    <div className="read-receipts" style={{marginRight: isMyMessage ? '18px' : '0px', marginLeft: isMyMessage ? '0px' : '68px'}}>read-receipts</div>
                </div>
            )
        })
    }
    renderMessage();

    return (
        <div>
            ChatFeed
        </div>
    )
}

export default ChatFeed;