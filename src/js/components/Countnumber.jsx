const SixDigit = ({num}) => {
const formatNumber= num.toString().padStart(6, '0');
return (<div>{formatNumber}</div>)
};


export default SixDigit;