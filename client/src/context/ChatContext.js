import { createContext, useState } from "react";

const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
  const [messages, setMessages] = useState([]);
  const value = {
    messages,
    setMessages,
  };
  return <ChatContext.Provider>{children}</ChatContext.Provider>;
};

export default ChatContext;
