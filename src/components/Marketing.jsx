import { marketingServices } from '../config';

const Marketing = () => {

  return (
       <div className=" flex items-center justify-center w-full h-full overflow-hidden z-30  sm:min-h-[125vh] min-h-[80vh]  ">
        <div className="relative sm:w-84 w-52 h-52 sm:h-84 w- md:w-115 md:h-115 rounded-full border-8 border-blue-950  ">
          <h2  className="md:text-5xl text-2xl sm:text-4xl md:top-44 w-45  sm:left-16 sm:top-28 left-2.5 top-14 sm:w-50 h-50  md:w-90 md:h-90 md:left-15  absolute  text-blue-950 font-bold text-center">Digital Marketing </h2>

          {marketingServices.map((item,index)=>(
            <>
            <div key={item}
             className=" absolute"
             style={{
              top: `${50 - 51 * Math.cos((index * 40 * Math.PI) / 180)}%`,
              left: `${50 + 51 * Math.sin((index * 40 * Math.PI) / 180)}%`,
              transform: 'translate(-50%, -50%)'
            }}
             >
              <img src={item.icon}
               className='h-full rounded-full object-cover md:min-h-18  md:min-w-18 sm:min-h-15 sm:min-w-15 min-h-11 min-w-11 max-sm:max-w-11  w-full' alt="" />
            </div>

            <div className="absolute lg:min-w-58 md:min-w-44 lg:max-w-58 md:max-w-44 text-start p-3 h-auto rounded-xl shadow-2xl z-20 bg-white "
            style={{
              top: `${50 - 85 * Math.cos((index * 40 * Math.PI) / 180)}%`,
              left: `${50 + 85 * Math.sin((index * 40 * Math.PI) / 180)}%`,
              transform: 'translate(-50%, -50%)'
            }}
            >
              <h1 className="text-sm font-semibold">{item.title} </h1>
              <p className="text-sm text-neutral-600 max-md:hidden  font-medium"> {item.description} </p>
            </div>
             </>
          ))}
        </div>
    </div>
  );
}

export default Marketing