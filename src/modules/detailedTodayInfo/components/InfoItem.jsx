
const InfoItem = ({ title, value, isLast }) => {
	return (
		<div className={`h-16 flex flex-row justify-between items-center border-b-[1px] border-gray-500 ${isLast ? 'border-b-0' : ''}`}>
			<div className="flex flex-row items-center gap-2">
				<img src="/infoIcons/Thermal.svg" alt={title} />
				<span className="text-gray-200">{title}</span>
			</div>
			<div>
				<span>{value}</span>
			</div>
		</div>
	);
};

export default InfoItem