import { useState } from "react";


const Description = () => {

    const [activeTab, setActiveTab] = useState('description');
    return (
        <div className="mt-16 mb-16 ">
            <div className="mb-4 space-x-4">
                <button onClick={() => setActiveTab('description')} className={`btn dark:border-none rounded ${activeTab === 'description'
                    ? 'bg-[#D42C7C] text-white'
                    : 'bg-gray-200 text-gray-700'
                    }`}>Description</button>

                <button onClick={() => setActiveTab('review')} className={`btn dark:border-none rounded ${activeTab === 'review'
                    ? 'bg-[#D42C7C] text-white'
                    : 'bg-gray-200 text-gray-700'
                    }`}>Reviews</button>
            </div>

            <div>
                {activeTab === 'description' && (
                    <p className="text-[#333333] leading-7">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose
                    </p>
                )}
                {activeTab === 'review' && (
                    <ul>
                        <li>Very good quality highly recommend</li>
                        <li>Satisfied, but delivery was late.</li>
                    </ul>
                )}
            </div>
        </div>
    );
};

export default Description;