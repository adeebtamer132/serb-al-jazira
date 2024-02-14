import { PagesContent } from "../../../utils/DB";
import { useParams } from "react-router-dom";
export default function CyberSecurity() {
  const { slug } = useParams();

  const { name, img, description, features } = PagesContent.find(
    (ele) => ele.slug === slug
  );
  return (
    <div>
      <div className="">
        <img
          src={img}
          alt="cyber security"
          className=" w-[100vw] transition-all opacity-60 h-96 object-cover"
        />
      </div>

      <div className=" text-center my-10 text-white">
        <h2 className="text-3xl md:text-6xl my-10 font-bold">{name}</h2>
        <p className="leading-10 max-w-[96ch] px-5 mx-auto text-xl font-semibold">
          {description}
        </p>

        <div className=" mx-auto w-[90%] ">
          <div className="grid my-10 grid-rows-1 sm:grid-rows-2 md:grid-rows-3 gap-4">
            {features.map((feature) => (
              <div className=" p-4" key={feature.title}>
                <h2 className="text-2xl mb-5 font-bold mt-8">
                  {feature.title}
                </h2>

                <p className="leading-10 text-base text-gray-200">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
