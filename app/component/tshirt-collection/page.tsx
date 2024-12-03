import ArrowButton from "../animata/button/button";
import "./style.css";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

export default function TshirtCollection() {
  return (
    <div className="tshirt-container">
      <h1>T-Shirts</h1>
      <ScrollArea className="w-full scroll">
        <div className="card-container">
          <div className="tshirt-card relative">
            <a href="#">
              <img
                className="w-full"
                src="https://radstore.pk/cdn/shop/files/bundle_80e2cf19-d72d-42ef-805a-66497be60de6_360x.jpg?v=1726824029"
                alt="product image"
              />
            </a>

            <h5 className=" card-title ">
              Bundle Pack of Any 3 T-Shirts (Flat 50% Off)
            </h5>

            <div className="card-prices flex items-center mt-2.5 mb-5">
              <div className="flex items-center space-x-1 rtl:space-x-reverse">
                <span className="text-[14px]">Rs.3,660</span>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-3xl font-bold text-gray-900 dark:text-white"></span>
            </div>
          </div>

          <div className="tshirt-card ">
            <div>
              <a href="#" className="sale-image">
                <img
                  className="w-full"
                  src="https://radstore.pk/cdn/shop/files/DSC00778_360x.jpg?v=1732960569"
                  alt="product image"
                />
                {/* <div
                className="bg-[red] text-[white] relative px-3 py-1 "
                style={{
                  width: "fit-content",
                  left: "82%",
                  top: "-70%",
                }}
              >
                Sale
              </div> */}
              </a>

              <div>
                <h5 className=" card-title ">
                  White Realistic Oversize Hoodie
                </h5>

                <div className="card-prices flex items-center mt-2.5 mb-5">
                  <div className="flex items-center space-x-1 rtl:space-x-reverse">
                    <span className="text-[14px]">
                      <del>Rs.3,800</del>
                    </span>
                    <span className="text-[14px]">Rs.2,660</span>
                  </div>
                  <span className="save-price bg-blue-100 text-[red] text-xs  px-2.5 py-1.5 rounded  ms-3">
                    Save Rs. 1,140
                  </span>
                </div>

                <div
                  className="flex gap-2 sizes-tag-container"
                  style={{
                    fontSize: "12px",
                    fontWeight: "bold",
                  }}
                >
                  <button className=" bg-[#f3f3f3] px-2 py-1 " disabled>
                    S
                  </button>
                  <button className="bg-[#f3f3f3] px-2 text-[#e9e9e3]">
                    M
                  </button>
                  <button className="bg-[#f3f3f3] px-2 ">L</button>
                  <button className="bg-[#f3f3f3] px-2 ">XL</button>
                </div>
              </div>
            </div>
          </div>

          <div className="tshirt-card ">
            <a href="#">
              <img
                className="w-full"
                src="https://radstore.pk/cdn/shop/files/DSC00744_360x.jpg?v=1732960422"
                alt="product image"
              />
            </a>
            <div>
              <h5 className=" card-title ">Spider-M Oversize Sweatshirt</h5>

              <div className="card-prices flex items-center mt-2.5 mb-5">
                <div className="flex items-center space-x-1 rtl:space-x-reverse">
                  <span className="text-[14px]">
                    <del>Rs.3,300</del>
                  </span>
                  <span className="text-[14px]">Rs.2,290</span>
                </div>
                <span className="save-price bg-blue-100 text-[red] text-xs  px-2.5 py-1.5 rounded  ms-3">
                  Save Rs. 1,010
                </span>
              </div>

              <div
                className="flex gap-2 sizes-tag-container"
                style={{
                  fontSize: "12px",
                  fontWeight: "bold",
                }}
              >
                <button className=" bg-[#f3f3f3] px-2 py-1 " disabled>
                  S
                </button>
                <button className="bg-[#f3f3f3] px-2 text-[#e9e9e3]">M</button>
                <button className="bg-[#f3f3f3] px-2 ">L</button>
                <button className="bg-[#f3f3f3] px-2 ">XL</button>
              </div>
            </div>
          </div>

          <div className="tshirt-card ">
            <a href="#">
              <img
                className="w-full"
                src="https://radstore.pk/cdn/shop/files/DSC00766_360x.jpg?v=1732960128"
                alt="product image"
              />
            </a>
            <div>
              <h5 className=" card-title ">Bat-Signal Oversize Sweatshirt</h5>

              <div className="card-prices flex items-center mt-2.5 mb-5">
                <div className="flex items-center space-x-1 rtl:space-x-reverse">
                  <span className="text-[14px]">
                    <del>Rs.3,300</del>
                  </span>
                  <span className="text-[14px]">Rs.2,900</span>
                </div>
                <span className="save-price bg-blue-100 text-[red] text-xs  px-2.5 py-1.5 rounded  ms-3">
                  Save Rs. 1,010
                </span>
              </div>

              <div
                className="flex gap-2 sizes-tag-container"
                style={{
                  fontSize: "12px",
                  fontWeight: "bold",
                }}
              >
                <button className=" bg-[#f3f3f3] px-2 py-1 " disabled>
                  S
                </button>
                <button className="bg-[#f3f3f3] px-2 text-[#e9e9e3]">M</button>
                <button className="bg-[#f3f3f3] px-2 ">L</button>
                <button className="bg-[#f3f3f3] px-2 ">XL</button>
              </div>
            </div>
          </div>

          <div className="tshirt-card ">
            <a href="#">
              <img
                className="w-full"
                src="https://radstore.pk/cdn/shop/files/DSC00506-alt_360x.jpg?v=1731923858"
                alt="product image"
              />
            </a>
            <div>
              <h5 className=" card-title ">Bat-Signal Oversize Sweatshirt</h5>

              <div className="card-prices flex items-center mt-2.5 mb-5">
                <div className="flex items-center space-x-1 rtl:space-x-reverse">
                  <span className="text-[14px]">
                    <del>Rs.3,300</del>
                  </span>
                  <span className="text-[14px]">Rs.2,900</span>
                </div>
                <span className="save-price bg-blue-100 text-[red] text-xs  px-2.5 py-1.5 rounded  ms-3">
                  Save Rs. 1,010
                </span>
              </div>

              <div
                className="flex gap-2 sizes-tag-container"
                style={{
                  fontSize: "12px",
                  fontWeight: "bold",
                }}
              >
                <button className=" bg-[#f3f3f3] px-2 py-1 " disabled>
                  S
                </button>
                <button className="bg-[#f3f3f3] px-2 text-[#e9e9e3]">M</button>
                <button className="bg-[#f3f3f3] px-2 ">L</button>
                <button className="bg-[#f3f3f3] px-2 ">XL</button>
              </div>
            </div>
          </div>

          <div className="tshirt-card ">
            <a href="#">
              <img
                className="w-full"
                src="https://radstore.pk/cdn/shop/files/1C1A4596_360x.jpg?v=1715766751"
                alt="product image"
              />
            </a>
            <div>
              <h5 className=" card-title ">Bat-Signal Oversize Sweatshirt</h5>

              <div className="card-prices flex items-center mt-2.5 mb-5">
                <div className="flex items-center space-x-1 rtl:space-x-reverse">
                  <span className="text-[14px]">
                    <del>Rs.3,300</del>
                  </span>
                  <span className="text-[14px]">Rs.2,900</span>
                </div>
                <span className="save-price bg-blue-100 text-[red] text-xs  px-2.5 py-1.5 rounded  ms-3">
                  Save Rs. 1,010
                </span>
              </div>

              <div
                className="flex gap-2 sizes-tag-container"
                style={{
                  fontSize: "12px",
                  fontWeight: "bold",
                }}
              >
                <button className=" bg-[#f3f3f3] px-2 py-1 " disabled>
                  S
                </button>
                <button className="bg-[#f3f3f3] px-2 text-[#e9e9e3]">M</button>
                <button className="bg-[#f3f3f3] px-2 ">L</button>
                <button className="bg-[#f3f3f3] px-2 ">XL</button>
              </div>
            </div>
          </div>

          <div className="tshirt-card ">
            <a href="#">
              <img
                className="w-full"
                src="https://radstore.pk/cdn/shop/files/1C1A3403-half_360x.jpg?v=1704188417"
                alt="product image"
              />
            </a>
            <div>
              <h5 className=" card-title ">Bat-Signal Oversize Sweatshirt</h5>

              <div className="card-prices flex items-center mt-2.5 mb-5">
                <div className="flex items-center space-x-1 rtl:space-x-reverse">
                  <span className="text-[14px]">
                    <del>Rs.3,300</del>
                  </span>
                  <span className="text-[14px]">Rs.2,900</span>
                </div>
                <span className="save-price bg-blue-100 text-[red] text-xs  px-2.5 py-1.5 rounded  ms-3">
                  Save Rs. 1,010
                </span>
              </div>

              <div
                className="flex gap-2 sizes-tag-container"
                style={{
                  fontSize: "12px",
                  fontWeight: "bold",
                }}
              >
                <button className=" bg-[#f3f3f3] px-2 py-1 " disabled>
                  S
                </button>
                <button className="bg-[#f3f3f3] px-2 text-[#e9e9e3]">M</button>
                <button className="bg-[#f3f3f3] px-2 ">L</button>
                <button className="bg-[#f3f3f3] px-2 ">XL</button>
              </div>
            </div>
          </div>

          <div className="tshirt-card ">
            <a href="#">
              <img
                className="w-full"
                src="https://radstore.pk/cdn/shop/files/1C1A3015_360x.jpg?v=1707402951"
                alt="product image"
              />
            </a>
            <div>
              <h5 className=" card-title ">Bat-Signal Oversize Sweatshirt</h5>

              <div className="card-prices flex items-center mt-2.5 mb-5">
                <div className="flex items-center space-x-1 rtl:space-x-reverse">
                  <span className="text-[14px]">
                    <del>Rs.3,300</del>
                  </span>
                  <span className="text-[14px]">Rs.2,900</span>
                </div>
                <span className="save-price bg-blue-100 text-[red] text-xs  px-2.5 py-1.5 rounded  ms-3">
                  Save Rs. 1,010
                </span>
              </div>

              <div
                className="flex gap-2 sizes-tag-container"
                style={{
                  fontSize: "12px",
                  fontWeight: "bold",
                }}
              >
                <button className=" bg-[#f3f3f3] px-2 py-1 " disabled>
                  S
                </button>
                <button className="bg-[#f3f3f3] px-2 text-[#e9e9e3]">M</button>
                <button className="bg-[#f3f3f3] px-2 ">L</button>
                <button className="bg-[#f3f3f3] px-2 ">XL</button>
              </div>
            </div>
          </div>
          
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
      <div className="tshirt-section-footer">
        <ArrowButton text={"View all"}/>
        {/* <button>View all</button> */}
      </div>
    </div>
  );
}
