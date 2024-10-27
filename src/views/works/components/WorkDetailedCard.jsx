import { MdArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";

const WorkDetailedCard = ({ work, className = "" }) => {
  const { name, url, imgUrl, githubUrl, description, techs } = work;
  return (
    <div className={`work-card w-96 ` + className}>
      <div className="work-card-1"></div>
      <div className="work-card-2"></div>
      {/* COntent div */}
      <div className="work-card-text text-center mt-8 absolute px-10 z-10 transition-opacity duration-700 ease-in-out opacity-0">
        <h4 className="text-lg">{name}</h4>
        <p className="text-xs my-2">{description}</p>
        {/* Tech Used */}
        <div className="flex items-center justify-center gap-4">
          {techs.map((tech) => (
            <div
              key={tech}
              className="badge badge-outline capitalize p-2 py-3 my-2 text-xs"
            >
              {tech}
            </div>
          ))}
        </div>
        {/* Action Buttons */}
        <div className="flex items-center gap-4 justify-center">
          <Link
            to={githubUrl}
            target="_blank"
            className="btn btn-warning btn-sm my-2"
          >
            View on Github
          </Link>
          <Link to={url} target="_blank" className="btn btn-info btn-sm my-2">
            {" "}
            Visit Site <MdArrowOutward />
          </Link>
        </div>
      </div>
      <img src={imgUrl} className="work-card-image" />
    </div>
    //   <div
    //     key={name}
    //     className={`card bg-base-100 group image-full before:!opacity-0 hover:before:!opacity-90 w-[31%] shadow-xl cursor-pointer  ${className}`}
    //   >
    //     <figure>
    //       <img src={imgUrl} alt="" />
    //     </figure>
    //     <div className="card-body opacity-0 group-hover:opacity-100">
    //       <h4 className="text-center">{name}</h4>
    //       {/* Tech Used */}
    //       <p className="">{description}</p>
    //       <div className="flex items-center justify-center gap-4">
    //         {techs.map((tech) => (
    //           <div className="badge badge-outline">{tech}</div>
    //         ))}
    //       </div>
    //       {/* Action Buttons */}
    //       <div className="flex items-center gap-4 justify-center">
    //         <Link
    //           to={githubUrl}
    //           target="_blank"
    //           className="btn btn-warning btn-sm"
    //         >
    //           View on Github
    //         </Link>
    //         <Link to={url} target="_blank" className="btn btn-info btn-sm">
    //           {" "}
    //           Visit Site <MdArrowOutward />
    //         </Link>
    //       </div>
    //     </div>
    //   </div>
  );
};
export default WorkDetailedCard;
// <div
//   key={name}
//   className={`border-4 border-neutral relative hover:border-neutral border-opacity-60 transition-all duration-300 group rounded cursor-pointer my-6 h-full `}
// >
//   <img src={imgUrl} alt="" className="" />
//   <div className="bg-neutral bg-opacity-80 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center flex flex-col justify-center gap-2 h-full">
//     <h4 className="">{name}</h4>
//     <p className="">{description}</p>
//     {/* Tech Used */}
//     <div className="flex items-center justify-center gap-4">
//       {techs.map((tech) => (
//         <div className="badge badge-outline p-3">{tech}</div>
//       ))}
//     </div>
//     {/* Action Buttons */}
//     <div className="flex items-center gap-4 justify-center">
//       <Link
//         to={githubUrl}
//         target="_blank"
//         className="btn btn-warning btn-sm"
//       >
//         View on Github
//       </Link>
//       <Link to={url} target="_blank" className="btn btn-info btn-sm">
//         {" "}
//         Visit Site <MdArrowOutward />
//       </Link>
//     </div>
//   </div>
// </div>
