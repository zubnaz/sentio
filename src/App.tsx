import { useEffect } from 'react';
import './App.css'
import { useAppDispatch } from './redux/hook'
import { sendMessageAsync } from './redux/actions/geminiActions';
import { GeminiRequestFactory } from './heplers/geminiRequestFactory';
import { GeminiPromptFactory } from './heplers/geminiPromptFactory';

function App() {

  const dispatch = useAppDispatch();

  const sendTestMessage = async (str : string) => {

    await dispatch(sendMessageAsync(GeminiRequestFactory.CreateRequest(str)))
  }
  useEffect(()=>{
    sendTestMessage(GeminiPromptFactory.CreatePrompt(`Imagine that you are Sentio chatbot friend; I will respond to subsequent requests accordingly.`));
  })
  return (
    <>
     <button onClick={()=>{
      sendTestMessage("Hey! I broke my dad car it cost 300.000$. He don't know yet");
     }}>Click</button>
    </>
  )
}

export default App
