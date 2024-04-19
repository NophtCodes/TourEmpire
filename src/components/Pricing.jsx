
import { pricingOptions } from "../constants";

const Pricing = () => {
  return (
    <div className="mt-20">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wide">
        Our Tours
      </h2>
      <div className="flex flex-wrap">
        {pricingOptions.map((option, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2">
            <div className="p-10 border border-neutral-700 rounded-xl">
              <p className="text-4xl mb-8"></p>
              <p className="mb-8"></p>
              <ul>
                {option.features.map((feature, index) => (
                  <li key={index} className="mt-8 flex items-center"></li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
