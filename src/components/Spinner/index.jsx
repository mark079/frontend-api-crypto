import './style.css';
export const Spinner = ({ size, color }) => {
    return <div className="spinner" style={{
        height: size || 15,
        width: size || 15,
        borderTopColor: color || 'white',
        borderBottomColor: color || 'white'
    }} />
};