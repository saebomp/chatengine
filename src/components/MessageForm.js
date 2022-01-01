import {useState} from 'react';
import {sendMessage, isTyping} from 'react-chat-engine'
import {SendOutlined, PictureOutlined} from '@ant-design/icons'

const MessageForm = (props) => {
    const [value, setValue] = useState('')
    const {chatId, creds} = props;

    const handleSubmit = (event) => {
        event.preventDefault();
        const text = value.trim()
        //trim: string 의 white space 같은거 없앰

        if(text.length > 0) sendMessage(creds, chatId, {text});
        setValue('')
    }

    const handleChange = (event) => {
        setValue(event.target.value)
        isTyping(props.chatId)
            
    }

    const handleUpload = (event) => {
        sendMessage(creds, chatId, {files: event.target.files, text:''})
    }


    return (
        
        <div>
            <form className="message-form" onSubmit={handleSubmit}>
                <input 
                    className="message-input"
                    placeholder="Send a message"
                    value={value}
                    onChange={handleChange}
                    onSubmit={handleSubmit}
                />
                <label html for="upload-button">
                    <span className='image-button'>
                        <PictureOutlined className="picture-icon" />
                    </span>
                </label>
                <input 
                    type="file"
                    multiple={false}
                    id="upload-button"
                    style={{display:'none'}}
                    onChange={handleUpload}
                />
                <button type="submit" className='send-button'>
                    <SendOutlined className="send-icon" />
                </button>
            </form>
        </div>
    )
}

export default MessageForm