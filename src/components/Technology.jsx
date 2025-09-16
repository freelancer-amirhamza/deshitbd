import { developmentSkills } from "../config";


const Technology = () => {


  return (
    <div className="flex  items-start justify-center min-h-screen  p-4">
      <div className="container flex flex-col items-center justify-center  mx-auto">
        <h2 className="md:text-5xl text-4xl text-blue-950 font-bold  w-full text-center border-neutral-300 ">Technology We Use</h2>
        {developmentSkills.map((items,id)=>(
          <div key={id} className="flex flex-col w-full h-full items-center mt-10 justify-center">
          <h3 className="text-xl font-semibold not-last:border-t-2 w-full text-center border-neutral-300 py-4 text-slate-600">{items.category} </h3>
          <div className="flex flex-wrap gap-5 items-center justify-between w-full">
            {items.icons.map((item,index)=>(
            <div key={index} className=" max-w-16 ">
              <img src={item} alt="" />
            </div>
          ))}
          </div>

        </div>
        ))}

      </div>
    </div>
  );
};


export default Technology
