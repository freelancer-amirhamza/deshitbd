import { marketingServices } from '../config';
import * as motion from "motion/react-client"

const Marketing = () => {

  return (
    <div className=" flex flex-col items-center relative gap-30 w-full h-full overflow-hidden z-10 md:min-h-[150vh] sm:min-h-[135vh] min-h-[90vh]  ">
      <div className=" z-10 flex flex-col gap-5 items-center max-w-2/4  justify-center mx-auto">
        <div className="text-4xl font-bold text-center ">
          <span className="text-primary "> Digital</span>
          <span className="text-blue-950 "> Marketing</span>
        </div>
        <p className="text-lg text-neutral-400 text-center font-medium">
          Strategic online campaigns that lift visibility, attract the right traffic, and boost conversions.
        </p>
      </div>
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 20
        }}
        className="relative flex items-center justify-center sm:w-84 w-52 h-52 sm:h-84 md:mt-20 md:w-115 md:h-115 rounded-full border-8 border-blue-950  ">

        <motion.h2
          animate={{ rotate: -360 }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 20
          }}
          className="md:text-5xl absolute text-2xl sm:text-4xl md:pt-30 sm:pt-12 pt-15 sm:w-50 h-50  md:w-90 md:h-90   w-45  text-blue-950 font-bold text-center">
          Digital Marketing </motion.h2>

        {marketingServices.map((item, index) => (
          < >
            <motion.div>
              <div key={item}
                className=" absolute"
                style={{
                  top: `${50 - 51 * Math.cos((index * 40 * Math.PI) / 180)}%`,
                  left: `${50 + 51 * Math.sin((index * 40 * Math.PI) / 180)}%`,
                  transform: 'translate(-50%, -50%)'
                }}
              >
                <motion.img
                  animate={{ rotate: -360 }}
                  transition={{
                    repeat: Infinity,
                    ease: "linear",
                    duration: 20
                  }}
                  src={item.icon}
                  className='h-full rounded-full object-cover md:min-h-18  md:min-w-18 sm:min-h-15 sm:min-w-15 min-h-11 min-w-11 max-sm:max-w-11  w-full' alt="" />
              </div>
            </motion.div>
            <div className="absolute"
              style={{
                top: `${50 - 85 * Math.cos((index * 40 * Math.PI) / 180)}%`,
                left: `${50 + 85 * Math.sin((index * 40 * Math.PI) / 180)}%`,
                transform: 'translate(-50%, -50%)'
              }}>
              <motion.div
                animate={{ rotate: -360 }}
                transition={{
                  repeat: Infinity,
                  ease: "linear",
                  duration: 20
                }}
                className=" lg:min-w-58 md:min-w-44 lg:max-w-58 md:max-w-44 text-start p-3 h-auto rounded-xl shadow-2xl z-20 bg-white "

              >
                <h1 className="text-sm font-semibold">{item.title} </h1>
                <p className="text-sm text-neutral-600 max-md:hidden  font-medium"> {item.description} </p>
              </motion.div>
            </div>

          </>
        ))}
      </motion.div>

    </div>
  );
}

export default Marketing