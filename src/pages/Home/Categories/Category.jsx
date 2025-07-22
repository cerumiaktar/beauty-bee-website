

const Category = ({ category }) => {
    const { img, title } = category;
    return (
        <div>
            <div className="card bg-base-100 border-1 border-[#D42C7C] hover:bg-[#D42C7C] shadow-sm">
                <figure className="px-10 pt-10">
                    <img
                        src={img}
                        alt="Shoes"
                        className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-[#D42C7C] hover:text-white">{title}</h2>
                </div>
            </div>
        </div>
    );
};

export default Category;