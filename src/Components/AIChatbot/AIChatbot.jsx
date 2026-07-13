import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaRobot, FaTimes, FaPaperPlane, FaCommentDots } from 'react-icons/fa';

const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'bot',
      text: "Hi there! 👋 I'm Maryam's virtual AI assistant. How can I help you explore her portfolio today?",
    },
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const suggestionPrompts = [
    { label: 'Who is Maryam?', action: 'about' },
    { label: 'What are her skills?', action: 'skills' },
    { label: 'Show projects', action: 'projects' },
    { label: 'How to contact her?', action: 'contact' },
  ];

  // Auto scroll to bottom
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = (text, customAction = null) => {
    if (!text.trim()) return;

    // Add user message
    const userMsg = { id: Date.now(), sender: 'user', text };
    setMessages((prev) => [...prev, userMsg]);
    setInputText('');

    // Trigger bot typing
    setIsTyping(true);

    setTimeout(() => {
      let botResponseText = '';
      const action = customAction || detectAction(text);

      switch (action) {
        case 'about':
          botResponseText = "Maryam Zafar is a dedicated Computer Science Student & Tech Innovator. She specializes in AI Engineering, Full Stack Web Development, and Flutter Mobile Development. She loves building intelligent, self-correcting agent systems and polished user experiences.";
          break;
        case 'skills':
          botResponseText = "Maryam has a diverse skillset across key categories:\n\n🤖 **AI & Agents**: Agentic AI, Gemini & OpenAI APIs, LangChain, LangGraph, RAG architectures, Prompt Engineering, Vector DBs\n\n📱 **Frameworks**: Flutter, React, Next.js, Node.js, Express, Framer Motion, GSAP\n\n💻 **Programming**: Python, C++, JavaScript, TypeScript, Dart, C#\n\n🗄️ **Databases & Tools**: Firebase, SQLite, Hive, MongoDB, Git/GitHub, Docker, Figma";
          break;
        case 'projects':
          botResponseText = "Some of Maryam's notable builds include:\n\n📘 **AI Study Companion**: Study learning planner with semantic RAG lookup.\n\n📱 **Smart Mobile Dashboard**: Real-time productivity tracker app with Hive offline sync.\n\n⚙️ **Automation Assistant**: Natural language workflow execution engine.\n\n🧑‍💻 **Agentic AI Prototype**: Multi-agent software debugging simulation.\n\nYou can click on any card in the **Projects** section to read a complete case study!";
          break;
        case 'contact':
          botResponseText = "You can connect with Maryam directly:\n\n📧 **Email**: riameryem786@gmail.com\n\n💼 **LinkedIn**: [linkedin.com/in/maryam-zafar](https://linkedin.com/in/maryam-zafar)\n\n🐙 **GitHub**: [github.com/meryem-zafar](https://github.com/meryem-zafar)\n\n💬 **WhatsApp**: [wa.me/923024400688](https://wa.me/923024400688)\n\nFeel free to download her resume from the top of the page!";
          break;
        default:
          botResponseText = "That's an interesting question! Maryam is highly skilled in Python, Flutter, React, and building custom Agentic AI workflows. If you have a specific project or role in mind, I highly recommend contacting her at riameryem786@gmail.com!";
      }

      const botMsg = { id: Date.now() + 1, sender: 'bot', text: botResponseText };
      setIsTyping(false);
      setMessages((prev) => [...prev, botMsg]);
    }, 1000);
  };

  const detectAction = (text) => {
    const t = text.toLowerCase();
    if (t.includes('about') || t.includes('who is') || t.includes('maryam') || t.includes('background')) return 'about';
    if (t.includes('skill') || t.includes('technology') || t.includes('stack') || t.includes('tools') || t.includes('know')) return 'skills';
    if (t.includes('project') || t.includes('work') || t.includes('build') || t.includes('portfolio') || t.includes('do')) return 'projects';
    if (t.includes('contact') || t.includes('email') || t.includes('hire') || t.includes('reach') || t.includes('social')) return 'contact';
    return 'default';
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end">
      {/* Chat Popover Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="w-[320px] sm:w-[380px] h-[500px] mb-4 bg-gradient-to-b from-[#0e1227] to-[#070916] rounded-2xl border border-purple-500/25 shadow-2xl flex flex-col overflow-hidden backdrop-blur-xl"
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            transition={{ type: 'spring', stiffness: 260, damping: 22 }}
          >
            {/* Header */}
            <div className="p-4 bg-gradient-to-r from-purple-900/40 to-cyan-900/40 border-b border-purple-500/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center text-white text-sm shadow-md shadow-purple-500/30">
                  <FaRobot className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-white text-sm font-bold leading-none">Maryam's Agent</h4>
                  <span className="text-[10px] text-cyan-400 font-semibold flex items-center gap-1 mt-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" /> Online
                  </span>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-full text-gray-400 hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
              >
                <FaTimes className="w-4 h-4" />
              </button>
            </div>

            {/* Messages Scroll Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-purple-500/20">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[82%] px-4 py-2.5 rounded-2xl text-xs sm:text-sm leading-relaxed whitespace-pre-wrap ${
                      msg.sender === 'user'
                        ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white rounded-br-none'
                        : 'bg-[#151833] text-gray-200 border border-purple-500/5 rounded-bl-none'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}

              {/* Bot Typing Indicator */}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="max-w-[82%] px-4 py-2.5 rounded-2xl bg-[#151833] text-gray-400 border border-purple-500/5 rounded-bl-none flex items-center gap-1.5">
                    <FaCommentDots className="animate-pulse w-4 h-4 text-purple-400" />
                    <span className="text-xs">Thinking...</span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Suggestion Prompts */}
            {messages.length === 1 && !isTyping && (
              <div className="px-4 py-2 bg-black/10 border-t border-purple-500/5">
                <div className="text-[10px] text-gray-500 mb-1.5 uppercase tracking-wider font-semibold">Suggested Questions</div>
                <div className="flex flex-wrap gap-1.5">
                  {suggestionPrompts.map((prompt) => (
                    <button
                      key={prompt.action}
                      onClick={() => handleSend(prompt.label, prompt.action)}
                      className="px-2.5 py-1 text-[11px] font-medium rounded-full bg-purple-500/5 border border-purple-400/20 text-purple-300 hover:bg-purple-500/10 hover:border-purple-400/50 transition-all duration-200 cursor-pointer"
                    >
                      {prompt.label}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input Form */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend(inputText);
              }}
              className="p-3 bg-black/20 border-t border-purple-500/10 flex gap-2"
            >
              <input
                type="text"
                placeholder="Ask me something..."
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                disabled={isTyping}
                className="flex-1 px-4 py-2 rounded-lg bg-[#141733]/60 border border-purple-500/15 focus:border-purple-500/50 focus:outline-none text-white text-xs sm:text-sm disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={!inputText.trim() || isTyping}
                className="p-2.5 rounded-lg bg-gradient-to-r from-purple-600 to-cyan-600 text-white disabled:opacity-40 hover:shadow-md hover:shadow-purple-500/30 transition-all duration-200 cursor-pointer"
              >
                <FaPaperPlane className="w-3.5 h-3.5" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Action Button Trigger */}
      <motion.button
        onClick={() => setIsOpen((prev) => !prev)}
        className="w-14 h-14 rounded-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white flex items-center justify-center shadow-lg shadow-purple-500/40 cursor-pointer border border-white/10 hover:shadow-xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105"
        whileTap={{ scale: 0.95 }}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <FaTimes className="w-6 h-6" />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative"
            >
              <FaRobot className="w-6 h-6 animate-float" />
              {/* Pulse Notification dot */}
              <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-cyan-400 border-2 border-[#060816] animate-pulse" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
};

export default AIChatbot;
