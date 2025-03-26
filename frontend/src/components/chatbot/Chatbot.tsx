
import React, { useState, useRef, useEffect } from "react";
import { Send, MessageSquare, X, Loader2 } from "lucide-react";

type Message = {
  id: number;
  text: string;
  sender: "bot" | "user";
  timestamp: Date;
};

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Bonjour ! Je suis votre assistant d'orientation virtuel. Comment puis-je vous aider dans votre orientation post-bac ?",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() === "") return;

    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      text: input,
      sender: "user",
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    simulateBotResponse(input);
  };

  const simulateBotResponse = (userInput: string) => {
    setIsTyping(true);
    
    // Simulate AI processing time
    setTimeout(() => {
      let botResponse = "";
      
      const lowerCaseInput = userInput.toLowerCase();
      
      if (lowerCaseInput.includes("orientation") || lowerCaseInput.includes("études") || lowerCaseInput.includes("filière")) {
        botResponse = "Pour vous aider dans votre orientation, j'aurais besoin de quelques informations. Quelle section avez-vous choisie au baccalauréat ? Quelles sont vos matières préférées ?";
      } else if (lowerCaseInput.includes("ingénieur") || lowerCaseInput.includes("ingénierie")) {
        botResponse = "Les filières d'ingénierie sont très demandées ! Il existe plusieurs spécialités : génie informatique, génie civil, génie électrique, etc. Avez-vous une préférence parmi ces domaines ?";
      } else if (lowerCaseInput.includes("médecine") || lowerCaseInput.includes("santé")) {
        botResponse = "Les études de médecine sont longues mais gratifiantes. En Tunisie, la faculté de médecine de Tunis, Sousse et Monastir sont très réputées. Souhaitez-vous en savoir plus sur les conditions d'admission ?";
      } else if (lowerCaseInput.includes("informatique") || lowerCaseInput.includes("programmation")) {
        botResponse = "L'informatique offre d'excellentes perspectives d'emploi ! Préférez-vous le développement web, l'intelligence artificielle, la cybersécurité ou un autre domaine spécifique ?";
      } else if (lowerCaseInput.includes("université") || lowerCaseInput.includes("école")) {
        botResponse = "Je peux vous recommander des universités en fonction de vos préférences. Dans quelle région souhaitez-vous étudier ? Et quel domaine vous intéresse ?";
      } else if (lowerCaseInput.includes("salaire") || lowerCaseInput.includes("emploi") || lowerCaseInput.includes("travail")) {
        botResponse = "Les perspectives d'emploi et les salaires varient selon les secteurs. Les métiers liés à l'ingénierie, l'informatique et la finance offrent généralement de bons revenus en Tunisie. Quel secteur vous intéresse ?";
      } else if (lowerCaseInput.includes("merci") || lowerCaseInput.includes("thanks")) {
        botResponse = "Je vous en prie ! N'hésitez pas si vous avez d'autres questions. Je suis là pour vous aider dans votre parcours d'orientation.";
      } else {
        botResponse = "Merci pour votre message. Pour mieux vous orienter, pourriez-vous me préciser votre section au baccalauréat et les domaines qui vous intéressent ?";
      }
      
      const newBotMessage: Message = {
        id: messages.length + 2,
        text: botResponse,
        sender: "bot",
        timestamp: new Date(),
      };
      
      setMessages((prev) => [...prev, newBotMessage]);
      setIsTyping(false);
    }, 1500);
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat button */}
      <button
        onClick={toggleChat}
        className={`${
          isOpen ? "bg-burgundy" : "bg-burgundy hover:bg-burgundy-light"
        } w-16 h-16 rounded-full flex items-center justify-center shadow-lg transition-all duration-300`}
        aria-label="Open chat assistant"
      >
        {isOpen ? (
          <X className="h-6 w-6 text-white" />
        ) : (
          <MessageSquare className="h-6 w-6 text-white" />
        )}
      </button>

      {/* Chat window */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-80 sm:w-96 h-[500px] bg-white rounded-2xl shadow-xl overflow-hidden animate-slide-in-right">
          {/* Chat header */}
          <div className="bg-burgundy text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <MessageSquare className="h-5 w-5" />
              <h3 className="font-medium">Assistant d'orientation</h3>
            </div>
            <button
              onClick={toggleChat}
              className="text-white/80 hover:text-white transition-colors"
              aria-label="Close chat"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Chat messages */}
          <div className="p-4 h-[360px] overflow-y-auto">
            <div className="space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${
                    message.sender === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                      message.sender === "user"
                        ? "bg-burgundy text-white rounded-tr-none"
                        : "bg-gray-100 text-gray-800 rounded-tl-none"
                    }`}
                  >
                    <p>{message.text}</p>
                    <p
                      className={`text-xs mt-1 ${
                        message.sender === "user"
                          ? "text-white/70"
                          : "text-gray-500"
                      }`}
                    >
                      {formatTime(message.timestamp)}
                    </p>
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start">
                  <div className="max-w-[80%] rounded-2xl px-4 py-3 bg-gray-100 text-gray-800 rounded-tl-none">
                    <div className="flex items-center gap-1">
                      <div className="bg-burgundy/40 w-2 h-2 rounded-full animate-pulse"></div>
                      <div className="bg-burgundy/60 w-2 h-2 rounded-full animate-pulse" style={{ animationDelay: "300ms" }}></div>
                      <div className="bg-burgundy/80 w-2 h-2 rounded-full animate-pulse" style={{ animationDelay: "600ms" }}></div>
                    </div>
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef}></div>
            </div>
          </div>

          {/* Chat input */}
          <form onSubmit={handleSubmit} className="p-4 border-t">
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={input}
                onChange={handleInputChange}
                placeholder="Posez votre question..."
                className="flex-1 px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-burgundy"
                disabled={isTyping}
              />
              <button
                type="submit"
                className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  isTyping || input.trim() === ""
                    ? "bg-gray-300 cursor-not-allowed"
                    : "bg-burgundy hover:bg-burgundy-light"
                } transition-colors`}
                disabled={isTyping || input.trim() === ""}
              >
                {isTyping ? (
                  <Loader2 className="h-5 w-5 text-white animate-spin" />
                ) : (
                  <Send className="h-5 w-5 text-white" />
                )}
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
