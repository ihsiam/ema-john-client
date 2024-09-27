import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { faqItems } from "../static/data";

export default function FAQ() {
  const [activeTab, setActiveTab] = useState(0);

  const toggleTab = (tab) => {
    if (activeTab === tab) {
      setActiveTab(0);
    } else {
      setActiveTab(tab);
    }
  };

  return (
    <div className="mx-auto w-11/12 my-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">FAQ</h2>
      <div className="mx-auto space-y-4">
        {/* single Faq */}
        {faqItems &&
          faqItems.map((item) => (
            <div className="border-b border-gray-200 pb-4" key={item.id}>
              <button
                className="w-full text-start flex items-center justify-between"
                onClick={() => toggleTab(item.id)}
              >
                <span className="text-lg font-medium text-gray-900 w-full">
                  {item.qs}
                </span>
                <div>
                  {activeTab === item.id ? (
                    <IoIosArrowUp />
                  ) : (
                    <IoIosArrowDown />
                  )}
                </div>
              </button>
              {activeTab === item.id && (
                <div className="mt-4">
                  <p className="text-base text-gray-500">{item.ans}</p>
                </div>
              )}
            </div>
          ))}
      </div>
    </div>
  );
}
