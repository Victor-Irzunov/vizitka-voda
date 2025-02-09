import phoneNumbers from "@/config/config";

const RunningText = () => {
	return (
		<div className="overflow-hidden relative w-full text-black">
			<div className="inline-block whitespace-nowrap animate-marquee">
				<div className="font-light sd:text-xs xz:text-[11px] uppercase">
					<span className="sd:mx-16 xz:mx-6">Для консультации и заказа звоните по телефону: {phoneNumbers.secondaryPhone}</span>
					<span className="sd:mx-16 xz:mx-6">Для консультации и заказа звоните по телефону: {phoneNumbers.secondaryPhone}</span>
					<span className="sd:mx-16 xz:mx-6">Для консультации и заказа звоните по телефону: {phoneNumbers.secondaryPhone}</span>
					<span className="sd:mx-16 xz:mx-6">Для консультации и заказа звоните по телефону: {phoneNumbers.secondaryPhone}</span>
					<span className="sd:mx-16 xz:mx-6">Для консультации и заказа звоните по телефону: {phoneNumbers.secondaryPhone}</span>
					<span className="sd:mx-16 xz:mx-6">Для консультации и заказа звоните по телефону: {phoneNumbers.secondaryPhone}</span>
					<span className="sd:mx-16 xz:mx-6">Для консультации и заказа звоните по телефону: {phoneNumbers.secondaryPhone}</span>
					<span className="sd:mx-16 xz:mx-6">Для консультации и заказа звоните по телефону: {phoneNumbers.secondaryPhone}</span>
					<span className="sd:mx-16 xz:mx-6">Для консультации и заказа звоните по телефону: {phoneNumbers.secondaryPhone}</span>
				</div>
			</div>
		</div>
	);
};

export default RunningText;