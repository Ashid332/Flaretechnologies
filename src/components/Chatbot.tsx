import React, { useState, useEffect, useRef } from 'react';

interface Message {
    id: string;
    type: 'bot' | 'user';
    content: string;
}

const Chatbot: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        {
            id: '1',
            type: 'bot',
            content: "Hello! I'm the Flare AI assistant. How can I help you scale your business today?"
        }
    ]);
    const [inputValue, setInputValue] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const [captureState, setCaptureState] = useState<'IDLE' | 'NAME' | 'EMAIL' | 'PROJECT' | 'GOAL'>('IDLE');
    // const [leadData, setLeadData] = useState<any>({});

    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping]);

    const addMessage = (type: 'bot' | 'user', content: string) => {
        setMessages(prev => [...prev, { id: Date.now().toString(), type, content }]);
    };

    const processRouting = async (input: string) => {
        const lowerInput = input.toLowerCase();

        // Lead capture logic
        /*
        if (captureState === 'NAME') {
            setLeadData((prev: any) => ({ ...prev, name: input }));
            setCaptureState('EMAIL');
            addMessage('bot', `Thanks, ${input}. What is your best email address?`);
            return;
        }
        */

        /*
        if (captureState === 'EMAIL') {
            setLeadData((prev: any) => ({ ...prev, email: input }));
            setCaptureState('PROJECT');
            addMessage('bot', `Perfect. What type of project or business are you running?`);
            return;
        }
        */

        /*
        if (captureState === 'PROJECT') {
            setLeadData((prev: any) => ({ ...prev, project: input }));
            setCaptureState('GOAL');
            addMessage('bot', `Got it. Finally, what is the main goal or challenge you want us to solve?`);
            return;
        }
        */

        if (captureState === 'GOAL') {
            setCaptureState('IDLE');
            addMessage('bot', `Thank you for sharing that context. Our team is ready to help!<br><br>Please select a time on our calendar to discuss your approach:<br><br><a href="#contact" style="display:inline-block; margin-top:10px; padding: 0.5rem 1rem; border-radius: 20px; text-decoration:none; background: var(--infinity-gradient); color: white; font-weight: bold;">Book Consultation</a>`);
            return;
        }

        // Keyword interception
        if (lowerInput.includes('pricing') || lowerInput.includes('project') || lowerInput.includes('build website') || lowerInput.includes('automation') || lowerInput.includes('marketing help')) {
            addMessage('bot', `Would you like to schedule a consultation with our team?<br><br><a href="#contact" style="display:inline-block; margin-top:10px; padding: 0.5rem 1rem; border-radius: 20px; text-decoration:none; background: var(--infinity-gradient); color: white; font-weight: bold; margin-right: 10px;">Book Consultation</a> <a href="#contact" style="display:inline-block; margin-top:10px; padding: 0.5rem 1rem; border-radius: 20px; text-decoration:none; border: 1px solid var(--border-subtle); color: white; font-weight: bold;">Request Strategy Audit</a>`);
            return;
        }

        // API Call
        setIsTyping(true);
        try {
            const response = await fetch("/api/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ message: input })
            });
            const data = await response.json();
            setIsTyping(false);
            if (data.reply) {
                addMessage('bot', data.reply);
            } else {
                addMessage('bot', "I'm currently unable to reach my AI servers, but we would love to connect with you. Please visit our <a href='#contact' style='color: #00D4FF;'>Contact page</a>.");
            }
        } catch (error) {
            setIsTyping(false);
            addMessage('bot', "Sorry, I'm experiencing technical difficulties. Our team would still love to help you!");
        }
    };

    const handleSubmit = (e?: React.FormEvent) => {
        e?.preventDefault();
        if (!inputValue.trim()) return;

        const text = inputValue.trim();
        setInputValue('');
        addMessage('user', text);
        processRouting(text);
    };

    return (
        <div className="chatbot-wrapper">
            <div className={`chatbot-window ${isOpen ? 'active' : ''}`}>
                <div className="chatbot-header">
                    <div className="chatbot-header-info">
                        <div className="chatbot-avatar pulse-dot"></div>
                        <div>
                            <h4 style={{ fontSize: '1rem', margin: 0, color: '#fff' }}>Flare Assistant</h4>
                            <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Online - Ready to help</span>
                        </div>
                    </div>
                    <button className="chatbot-close" aria-label="Close Chat" onClick={() => setIsOpen(false)}>×</button>
                </div>

                <div className="chatbot-body">
                    {messages.map(msg => (
                        <div
                            key={msg.id}
                            className={`chat-message ${msg.type === 'bot' ? 'bot-message' : 'user-message'}`}
                            style={msg.type === 'user' ? {
                                alignSelf: 'flex-end',
                                background: 'var(--infinity-gradient)',
                                color: '#fff',
                                borderRadius: '20px 20px 4px 20px',
                                border: 'none'
                            } : undefined}
                            dangerouslySetInnerHTML={{ __html: msg.content }}
                        />
                    ))}
                    {isTyping && (
                        <div className="typing-indicator">
                            <span className="typing-dot"></span>
                            <span className="typing-dot"></span>
                            <span className="typing-dot"></span>
                        </div>
                    )}
                    <div ref={messagesEndRef} />
                </div>

                <form className="chatbot-footer" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        className="chat-input"
                        placeholder="Type your message..."
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                    />
                    <button type="submit" className="chat-send">
                        <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="22" y1="2" x2="11" y2="13"></line>
                            <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                        </svg>
                    </button>
                </form>
            </div>

            <button className="chatbot-trigger" aria-label="Open AI Assistant" onClick={() => setIsOpen(true)}>
                <div className="chatbot-trigger-glow"></div>
                <div className="chatbot-trigger-inner">
                    <svg viewBox="0 0 24 24" width="28" height="28" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                    </svg>
                </div>
            </button>
        </div>
    );
};

export default Chatbot;
