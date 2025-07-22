

const Review = ({ review }) => {
    const { img, name, designation, reviewText } = review;
    return (
        <div>
            <div className="card bg-base-100 card-md shadow-sm border border-[#B7B7B7]">
                <div className="card-body">
                    <div className="flex items-center gap-4">
                        <img src={img} alt="" />
                        <div>
                            <h2 className="card-title">{name}</h2>
                            <p className="text-[#333333]">{designation}</p>
                        </div>
                    </div>
                    <p className="text-[#333333] leading-7">{reviewText}</p>
                </div>
            </div>
        </div>
    );
};

export default Review;