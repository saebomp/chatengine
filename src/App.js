import {ChatEngine} from 'react-chat-engine';
import ChatFeed from './components/ChatFeed'
import LoginForm from './components/LoginForm'
import './App.css';

const App = () => {
  if(!localStorage.getItem('username')) return <LoginForm />

  return (
    <ChatEngine
      height='100vh'
      projectID='591ccf26-c647-4212-8fd3-42cb8860afbd'
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) =><ChatFeed {...chatAppProps}/>}
    />
  );
}

export default App;



// https://www.youtube.com/watch?v=jcOKU9f86XE   1:05:36

// https://chatengine.io/projects/591ccf26-c647-4212-8fd3-42cb8860afbd
// https://chatengine.io/docs
// https://rest.chatengine.io/#6775ec07-601e-4730-ba08-d87bc81d019a

//버튼 누르면 로그아웃 되는거