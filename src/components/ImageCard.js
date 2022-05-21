import { useState } from "react";

const URL =
  "https://images.unsplash.com/photo-1650573038286-250fa8e1b49e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNzkzOTh8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTMxMTYyNjU&ixlib=rb-1.2.1&q=80&w=1080";

const ImageCard = ({
  el = { description: "Hello", urls: { small: URL, regular: URL } },
}) => {
  const [objPropCover, setObjPropCover] = useState(true);
  const toggleObjPropCover = () => setObjPropCover((prev) => !prev);

  return (
    <div className="h-[400px] relative min-w-full md:min-w-max rounded-md  my-6 overflow-hidden snap-center  md:snap-none">
      <img
        onClick={toggleObjPropCover}
        className={`${
          objPropCover ? "object-cover" : "object-contain"
        } md:object-cover w-full h-full mx-auto rounded-md md:w-auto bg-gradient-to-br md:mx-0 from-slate-300 to-slate-200`}
        src={el.urls.regular}
        srcSet={`${el.urls.small} 1x, ${el.urls.regular} 2x, ${el.urls.full} 3x`}
        alt={el.description}
      />
    </div>
  );
};

export default ImageCard;
