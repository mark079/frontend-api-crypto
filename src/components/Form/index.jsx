import { useState } from "react";
import { Button } from "../Button";
import { Input } from "../Input";

export const Form = ({ buttonTitle, text, setText, fetchAction, setOtherField }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const handleFetch = () => {
        setIsLoading(true);
        fetchAction()
            .then(reponse => reponse.json())
            .then(data => {
                const chaves = Object.keys(data);
                setOtherField(data[chaves[0]]);
                setIsLoading(false);
            })
            .catch(() => {
                setIsLoading(false);
                setError('Algo deu errado!');
                setTimeout(() => setError(null), 3000)
            });
    };
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <Input text={text} setText={setText} />
            <Button title={error || buttonTitle} onClick={handleFetch} isLoading={isLoading} disabled={text.length < 1} />
        </div>
    );
};