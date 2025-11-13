import { Link } from "react-router-dom";
import { data } from "../../mock/behruz/sale/Sale.js";

const Sale = () => {
  return (
    <div className="main my-[50px]">
      <section className="w-full px-[60px] h-[650px] ">
        <div className="top w-full max-w-[1320px] h-12 flex items-center justify-between mx-auto">
          <div className="title">
            <h1 className="font-extrabold text-[34px] lato text-[#232321]">
              Today's Deals of the Day
            </h1>
          </div>

          <div className="time flex items-center gap-4">
            <span className="font-semibold">Deals ends in</span>
            <div className="day w-60 h-11 rounded-[9px] bg-[#FCBD01] flex items-center justify-center text-[#191C1F] text-[20.65px] font-semibold">
              16d : 21h : 57m : 23s
            </div>
            <div className="view">
              <button className="w-[129px] h-11 bg-[#FCBD01] rounded-[9px] text-[#191C1F] text-[14px] font-semibold">
                VIEW ALL
              </button>
            </div>
          </div>
        </div>

        {/* tepa qismidi muammo yoq va tugadi */}

        <div className="cards w-full  h-[100px] flex  gap-35  items-center justify-center mt-14 ">
          {data.map((item) => (
            <div
              key={item.id}
              className="card w-[318px] h-[468px] flex flex-col"
            >
              <Link to={`/singlePage/${item.id}`}>
                <div className="allcard flex flex-col">
                  <div className=" bg-[#ECEDEF] w-[302px] h-[335px] rounded-[26px] flex  items-center justify-center  mx-auto">
                    <img src={item.thumbnail} alt={item.title} />
                  </div>
                  <b
                    className={` w-[205px] text-[15px] mt-[5px] ${
                      item.id % 2 === 0 ? "text-[#FF0000]" : "text-[#397CFF]"
                    }`}
                  >
                    {item.qoshimcha}
                  </b>

                  <img src={item.qoshimg} alt="line" className="mt-[5px]" />

                  <p className="w-[318px] h-14 text-[23px] text-[#232321] font-bold  mt-[5px]">
                    {item.title}
                  </p>

                  <button className="w-[318px] h-12 text-white bg-black rounded-2xl mt-[22px]  font-semibold">
                    BUY NOW - <span className="text-[#FCBD01]">₹125</span>
                  </button>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Sale;
