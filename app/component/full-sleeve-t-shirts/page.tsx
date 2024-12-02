import "./style.css";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

export default function FullSleeveTshirt() {
  return (
    <div className="tshirt-container">
      <h1>Full Sleeve T-Shirts</h1>
      <ScrollArea className="w-full ">
        <div className="card-container">

        <div className="tshirt-card ">
            <div>
              <a href="#" className="sale-image">
                <img
                  className="w-full"
                  src="https://radstore.pk/cdn/shop/files/DSC00506-alt_360x.jpg?v=1731923858"
                  alt="product image"
                />
              
              </a>

              <div>
                <h5 className=" card-title ">
                Navy Thermal Full Sleeves Waffle-Knit
                </h5>

                <div className="card-prices flex items-center mt-2.5 mb-5">
                  <div className="flex items-center space-x-1 rtl:space-x-reverse">
                    <span className="text-[14px]">
                      <del>Rs.2,500</del>
                    </span>
                    <span className="text-[14px]">Rs.1,750</span>
                  </div>
                  <span className="save-price bg-blue-100 text-[red] text-xs  px-2.5 py-1.5 rounded  ms-3">
                    Save Rs.750
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
            <div>
              <a href="#" className="sale-image">
                <img
                  className="w-full"
                  src="https://radstore.pk/cdn/shop/files/1C1A3403-half_360x.jpg?v=1704188417"
                  alt="product image"
                />
            
              </a>

              <div>
                <h5 className=" card-title ">
                Striped Sleeves Black & Olive Baseball Raglan
                </h5>

                <div className="card-prices flex items-center mt-2.5 mb-5">
                  <div className="flex items-center space-x-1 rtl:space-x-reverse">
                    <span className="text-[14px]">
                      <del>Rs.2,300</del>
                    </span>
                    <span className="text-[14px]">Rs.1,900</span>
                  </div>
                  <span className="save-price bg-blue-100 text-[red] text-xs  px-2.5 py-1.5 rounded  ms-3">
                    Save Rs. 710
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
                src="https://radstore.pk/cdn/shop/files/1C1A3015_360x.jpg?v=1707402951"
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
                src="https://radstore.pk/cdn/shop/products/1C1A9106-cropped_360x.jpg?v=1674643913"
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
                src="https://radstore.pk/cdn/shop/products/1C1A8583_360x.jpg?v=1667489372"
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
                src="https://radstore.pk/cdn/shop/products/1C1A9074_360x.jpg?v=1676539370"
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
                src="https://radstore.pk/cdn/shop/products/1C1A8604_360x.jpg?v=1667489244"
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
                src="https://radstore.pk/cdn/shop/files/IMG_1301-noface_360x.jpg?v=1729754130"
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
        <button>View all</button>
      </div>
    </div>
  );
}
