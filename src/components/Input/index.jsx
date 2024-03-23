import './style.css';
import clipboardSVG from '../../assets/clipboard.svg';
import { useRef } from 'react';
export const Input = ({ text, setText, placeholder }) => {
    const inputRef = useRef(null);
    return (
        <div className="input-container">
            <input
                ref={inputRef}
                type="text"
                className="input"
                placeholder={placeholder || 'Digite aqui...'}
                value={text}
                onChange={(txt) => setText(txt.target.value)}
            />
            <button
                className="input-button"
                title="Copiar"
                onClick={() => {
                    inputRef.current.select();
                    navigator.clipboard.writeText(text)
                }}
            >
                <img
                    src={clipboardSVG}
                    style={{ width: 15 }}
                    alt="Clipboard icon"
                />
            </button>
        </div>
    );
};