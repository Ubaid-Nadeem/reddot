import ArrowButton from "../animata/button/button";
import "./style.css";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

export default function TrouserCollection() {
  return (
    <div className="trouser-container">
      <h1>Trousers</h1>
      <ScrollArea className="w-full ">
        <div className="card-container">
          <div className="tshirt-card ">
            <a href="#">
              <img
                className="w-full"
                src="https://radstore.pk/cdn/shop/files/bundle_329d86f2-3ec5-4284-983f-e822a0875340_360x.jpg?v=1717490353"
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
            <a href="#">
              <img
                className="w-full"
                src="https://radstore.pk/cdn/shop/files/DSC00794_da7bc2d1-5151-4db6-8d44-05369a38c3a6_360x.jpg?v=1732961254"
                alt="product image"
              />
            </a>
            <div>
              <h5 className=" card-title ">White Realistic Oversize Hoodie</h5>

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
                src="https://radstore.pk/cdn/shop/files/DSC00876_ce25d59e-d6ab-47c6-94f1-a31c807ab9c3_360x.jpg?v=1732961100"
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
                src="https://radstore.pk/cdn/shop/files/DSC00868_570d93b3-f5c6-40e3-8b9d-b019734b652f_360x.jpg?v=1732961035"
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
                src="https://radstore.pk/cdn/shop/files/DSC00853_360x.jpg?v=1732960962"
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
                src="https://radstore.pk/cdn/shop/files/DSC00836_360x.jpg?v=1732960869"
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
                src="https://radstore.pk/cdn/shop/files/DSC00449_360x.jpg?v=1731062950"
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
                src="https://radstore.pk/cdn/shop/files/DSC00743_360x.jpg?v=1728035709"
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
        <ArrowButton text={"View all"} />
      </div>
    </div>
  );
}
