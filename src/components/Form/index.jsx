import { Button } from "../Button";
import { Input } from "../Input";

export const Form = ({ buttonTitle, text, setText, onCLick }) => {

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <Input text={text} setText={setText} />
            <Button title={buttonTitle} onClick={onCLick} />
        </div>
    );
};