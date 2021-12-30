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
                            <MyMessage message={message} />
                            :
                            <TheirMessage message={message} lastMessage={message[lastMessageKey]} />
                        }
                    </div>
                    <div className="read-receipts" style={{marginRight: isMyMessage ? '18px' : '0px', marginLeft: isMyMessage ? '0px' : '68px'}}>read-receipts</div>
                </div>
            )
        })
    }

    if(!chat) return 'Loading...';

    return (
        <div className="chat-feed">
            <div className="chat-title-container">
                <div className="chat-title">{chat?.title}</div>
                {/* chat 이 있으면 title variable 에 access한다 */}
                <div className="chat-subtitle">
                    {chat.people.map((person) => `${person.person.username}`)}
                </div>
            </div>
            {renderMessage()}
            <div style={{height:'100px'}}>
                <div className="message-form-container">
                    <MessageForm {...props} chatId={activeChat} />
                </div>
            </div>

        </div>
    )
}

export default ChatFeed;