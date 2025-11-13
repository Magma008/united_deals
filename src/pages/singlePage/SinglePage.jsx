import { useState } from "react";
import star from "../../assets/star.png";
import { data } from "../../mock/behruz/sale/Sale";
import { useParams, Link } from "react-router-dom";
import { MdLocalOffer } from "react-icons/md";
import { FiShoppingCart } from "react-icons/fi";
import Pay from "../../assets/payment.svg";
import { Alldata } from "../../mock/behruz/View";

const SinglePage = () => {
  const [count, setCount] = useState(0);
  const { id } = useParams();

  const item = data.find((item) => item.id === id);

  if (!item) {
    return (
      <div className="w-full h-screen flex justify-center items-center text-2xl text-gray-600">
        Product not found
      </div>
    );
  }

  return (
    <section className="w-[1202px] mx-20">
      <div className="flex gap-[60px]">
        <div className="w-[561px] h-[531px] border-2 rounded border-[#E4E7E9] flex items-center justify-center mt-4.5">
          <img
            src={item.thumbnail}
            alt="product"
            className="w-[300px] h-[400px]"
          />
        </div>

        <div className="w-[591px] h-[600px] mt-4.5">
          <div className="top flex items-center gap-1.5">
            <img src={star} alt="rating" />
            <span className="font-semibold text-[15.75px]">
              4.7 Star Rating
            </span>
            <span className="text-[#5F6C72]">(21,671 User feedback)</span>
          </div>

          <div className="flex flex-col gap-3 w-[590px]">
            <p className="text-[32px] text-[#191C1F] font-bold">{item.title}</p>

            <div className="information flex items-center gap-5 flex-wrap">
              <div className="info flex flex-col gap-1">
                <span className="w-[284px] text-[18px] text-[#5F6C72]">
                  Sku:{" "}
                  <span className="text-[#000000] font-bold">
                    {item.number}
                  </span>
                </span>
                <span className="text-[18px] text-[#5F6C72]">
                  Brand:{" "}
                  <span className="text-[#000000] font-bold">{item.brand}</span>
                </span>
              </div>

              <div className="flex flex-col gap-1">
                <span className="w-[284px] text-[18px] text-[#5F6C72]">
                  Availability:{" "}
                  <span className="text-[#2DB224] font-bold">In Stock</span>
                </span>
                <span className="w-[284px] text-[18px] text-[#5F6C72]">
                  Category:{" "}
                  <span className="text-[#000000] font-bold">
                    Electronics Devices
                  </span>
                </span>
              </div>
            </div>
          </div>

          <div className="center_bottom">
            <div className="rs mt-5 flex items-center gap-2 flex-wrap">
              <span className="text-[#2EB100] text-[32px] font-extrabold">
                Rs 125000
              </span>
              <span className="font-normal text-[22px] text-[#77878F] line-through">
                ₹156000
              </span>
              <button className="w-[70px] h-8 bg-[#EFD33D] text-[#191C1F] font-semibold ml-3 rounded">
                21% OFF
              </button>
            </div>
            <p className="text-[#9A9A9A] text-[17px] mt-2">or</p>
            <div className="get">
              <p className="text-[22px] font-bold text-[#191C1F]">
                Get it for <span className="text-[#2EB100]">Rs 90,0000</span>
              </p>
            </div>
          </div>

          <hr className="text-[#E4E7E9] mt-5" />

          <div className="input w-[590px] mt-2.5 gap-6 flex">
            <div className="part1">
              <span className="font-bold text-[18px] text-[#191C1F]">
                Color
              </span>
              <div className="colors flex items-center gap-5 mt-3">
                <div className="w-8 h-8 rounded-full bg-[#C5C5C5]"></div>
                <div className="w-8 h-8 rounded-full bg-[#003171]"></div>
              </div>

              <span className="font-bold text-[18px] text-[#191C1F] flex flex-col mt-7">
                Memory
              </span>
              <select className="w-[284px] h-10 border-2 border-[#E4E7E9] text-[black]">
                <option>16GB unified memory</option>
                <option>32GB unified memory</option>
                <option>64GB unified memory</option>
              </select>
            </div>

            <div className="part2">
              <span className="font-bold text-[18px] text-[#191C1F] flex flex-col">
                Size
              </span>
              <select className="w-[284px] h-10 border-2 border-[#E4E7E9] mt-4 text-[black]">
                <option>14-inch Liquid Retina XDR display</option>
                <option>16-inch Liquid Retina XDR display</option>
                <option>18-inch Liquid Retina XDR display</option>
              </select>

              <span className="font-bold text-[18px] text-[#191C1F] flex flex-col mt-4">
                Storage
              </span>
              <select className="w-[284px] h-10 border-2 border-[#E4E7E9] text-[black]">
                <option>1TB SSD Storage</option>
                <option>2TB SSD Storage</option>
                <option>3TB SSD Storage</option>
              </select>
            </div>
          </div>

          <div className="count flex items-center mt-9 gap-4 flex-wrap">
            <div className="w-[150px] rounded-[33px] border-2 border-[#E4E7E9] flex items-center justify-around text-[29px]">
              <button onClick={() => setCount(count > 0 ? count - 1 : 0)} className="text-[black]">
                -
              </button>
              <span className="text-[black]">{count}</span>
              <button onClick={() => setCount(count + 1)} className="text-[black]">+</button>
            </div>

            <button className="flex items-center w-[282px] bg-[#313131] text-[#FFFFFF] rounded-[33px] justify-center text-[18px] font-semibold gap-2">
              <MdLocalOffer />
              Get DEAL ( ₹90k )
            </button>

            <button className="w-[121px] border-2 border-[#1877F2] text-[#1877F2] rounded-[33px] text-[18px] flex items-center justify-center gap-1">
              <FiShoppingCart /> ADD
            </button>
          </div>

          <div className="payment w-[590px] border-2 border-[#E4E7E9] h-[82px] mt-7 p-4">
            <span className="font-medium text-[16px] text-[black]">
              100% Guarantee Safe Checkout
            </span>
            <img src={Pay} alt="cards" className="mt-2"/>
          </div>
        </div>
      </div>

      <div className="cardlar mt-[200px]">
        <div className="w-[1365px] flex justify-between items-center mb-6">
          <h1 className="text-[40px] font-semibold capitalize text-[black]">
            Frequently bought together
          </h1>
          <button className="w-[129px] h-11 bg-[#FCBD01] rounded-[9px] text-[#191C1F] text-[14px] font-medium">
            VIEW ALL
          </button>
        </div>

        <div className="w-[1340px] grid grid-cols-4 gap-20">
          {Alldata.map((item) => (
            <div key={item.id} className="">
              <Link to={`/singlePage/${item.id}`}>
                <div className="bg-[#ECEDEF] w-[302px] h-[335px] rounded-[26px] flex items-center justify-center">
                  <img src={item.thumbnail} alt={item.title} />
                </div>
                <p className="w-[318px] h-14 text-[23px] text-[#232321] font-bold">
                  {item.text}
                </p>
                <button className="w-[318px] h-12 text-white bg-black rounded-2xl mt-[22px]">
                  BUY NOW - <span className="text-[#FCBD01]"> ₹125</span>
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SinglePage;
