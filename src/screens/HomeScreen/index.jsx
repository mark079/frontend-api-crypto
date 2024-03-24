import { Form } from '../../components/Form';
import { useState } from 'react';
import { encrypt, decrypt } from '../../services/api';
export const HomeScreen = () => {
    const [text, setText] = useState('');
    const [encryptedText, setEncryptedText] = useState('');
    return (
        <div style={{ width: '100vw', height: '100vh', backgroundColor: '#282A36', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ width: '85%', maxWidth: 400 }}>
                <Form buttonTitle={'Criptografar'} text={text} setText={setText} fetchAction={() => encrypt(text)} setOtherField={setEncryptedText} />
                <div style={{ width: '100%', height: 1, backgroundColor: '#9E9E9E', marginTop: 10, marginBottom: 10 }} />
                <Form buttonTitle={'Descriptografar'} text={encryptedText} setText={setEncryptedText} fetchAction={() => decrypt(encryptedText)} setOtherField={setText} />
            </div>
        </div>
    );
};