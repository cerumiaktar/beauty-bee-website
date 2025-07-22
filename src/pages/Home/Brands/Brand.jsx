

const Brand = ({ brand }) => {
    const { img } = brand;
    return (
        <div>
            <div className="border border-[#666666] rounded-lg p-10 mx-6">
                <img src={img} alt="" />
            </div>
        </div>
    );
};

export default Brand;