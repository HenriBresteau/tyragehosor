const LocalisationCard = ({ title, text }) => {
    return (
        <div className="size-full max-w-sm rounded-2xl border border-green bg-greenlight/10 px-6 py-8 ">
            <div className="flex flex-col gap-6">
                <h2 className="font-fanwood text-3xl font-bold text-green border-b border-primary/75">
                    {title}
                </h2>
                <p>{text}</p>
            </div>
        </div>
    );
};

export default LocalisationCard;
