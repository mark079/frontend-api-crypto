import './style.css';
import { Spinner } from '../Spinner';
export const Button = ({ title = 'Title Button', onClick = () => console.log('Click'), isLoading = false, bgColor = '#000', color = '#fff', disabled = false }) => {

    return (
        <button
            className="button"
            onClick={() => onClick()}
            disabled={isLoading && true || disabled ? true : false}
            style={{
                backgroundColor: disabled ? '#9e9e9e' : bgColor,
                color,

            }}>
            {isLoading ? <Spinner /> : title}
        </button>
    );
};