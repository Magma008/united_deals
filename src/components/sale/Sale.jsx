import { Link } from "react-router-dom";
import { data } from "../../mock/behruz/sale/Sale.js";

const Sale = () => {
  return (
    <div className="main my-[50px]">
      <section className="w-full px-[60px]">

        <div className="top w-[1320px] h-12 flex items-center gap-[500px]">
          <div className="title">
            <h1 className="w-[420px] font-extrabold text-[34px] lato text-[#232321]">
              Today's Deals of the day
            </h1>
          </div>

          <div className="time flex items-center gap-4">
            <span className="w-[100px] font-semibold">Deals ends in</span>
            <div className="day w-60 h-11 rounded-[9px] bg-[#FCBD01] flex items-center justify-center text-[#191C1F] text-[20.65px]">
              16d : 21h : 57m : 23s
            </div>
            <div className="view">
              <button className="w-[129px] h-11 bg-[#FCBD01] rounded-[9px] text-[#191C1F] text-[14px]">
                VIEW ALL
              </button>
            </div>
          </div>
        </div>


        <div className="cards w-[1420px] flex gap-6 items-center justify-center mt-14 flex-wrap">
          {data.map((item) => (
            <div key={item.id} className="card w-[318px] h-[468px]">
           
              <Link to={`/singlePage/${item.id}`}>
                <div className="img bg-[#ECEDEF] w-[302px] h-[335px] rounded-[26px] flex items-center justify-center">
                  <img src={item.thumbnail} alt={item.title} />
                </div>
                <b
                  className={`block w-[200px] text-[15px] mt-[5px] ${
                    item.id % 2 === 0 ? "text-[#FF0000]" : "text-[#397CFF]"
                  }`}
                >
                  {item.qoshimcha}
                </b>
                <img src={item.qoshimg} alt="line" className="mt-[5px]" />
                <p className="w-[318px] h-14 text-[23px] text-[#232321] font-bold">
                  {item.title}
                </p>
                <button className="w-[318px] h-12 text-[white] bg-[black] rounded-2xl mt-[22px]">
                  BUY NOW - <span className="text-[#FCBD01]"> ₹125</span>
                </button>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Sale;
