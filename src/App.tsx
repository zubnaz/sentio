import { useEffect } from 'react';
import './App.css'
import { useAppDispatch } from './redux/hook'
import { sendMessageAsync } from './redux/actions/geminiActions';
import { GeminiRequestFactory } from './heplers/geminiRequestFactory';
import { SentioPage } from './pages/SentioPage';

function App() {

  const dispatch = useAppDispatch();

  const sendTestMessage = async (str : string) => {

    await dispatch(sendMessageAsync(GeminiRequestFactory.CreateRequest(str)))
  }
  useEffect(()=>{
    sendTestMessage("Imagine that you are Sentio's chatbot assistant; I will respond to subsequent requests accordingly. Please send your response in JSON format{ message: string emotion: “smile” | “happy” | “sad” | ‘angry’ | “friendly”}");
  })
  return (
    <>
     <button onClick={()=>{
      sendTestMessage("Hey! I am sad today :(");
     }}>Click</button>
     return <SentioPage />;
    </>
  )
}

export default App
