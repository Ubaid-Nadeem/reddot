import "./style.css";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

export default function TshirtCollection() {
  return (
    <div className="tshirt-container">
      <h1>T-Shirts</h1>
      <ScrollArea className="w-full ">
        <div className="card-container">

          <div className="tshirt-card ">
            <a href="#">
              <img
                className="w-full"
                src="https://radstore.pk/cdn/shop/files/DSC00778_360x.jpg?v=1732960569"
                alt="product image"
              />
            </a>

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

            <div className="flex items-center justify-between">
              <span className="text-3xl font-bold text-gray-900 dark:text-white"></span>
            </div>
          </div>

          <div className="tshirt-card ">
            <a href="#">
              <img
                className="w-full"
                src="https://radstore.pk/cdn/shop/files/DSC00778_360x.jpg?v=1732960569"
                alt="product image"
              />
            </a>

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

            <div className="flex items-center justify-between">
              <span className="text-3xl font-bold text-gray-900 dark:text-white"></span>
            </div>
          </div>
          <div className="tshirt-card ">
            <a href="#">
              <img
                className="w-full"
                src="https://radstore.pk/cdn/shop/files/DSC00778_360x.jpg?v=1732960569"
                alt="product image"
              />
            </a>

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

            <div className="flex items-center justify-between">
              <span className="text-3xl font-bold text-gray-900 dark:text-white"></span>
            </div>
          </div>
          <div className="tshirt-card ">
            <a href="#">
              <img
                className="w-full"
                src="https://radstore.pk/cdn/shop/files/DSC00778_360x.jpg?v=1732960569"
                alt="product image"
              />
            </a>

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

            <div className="flex items-center justify-between">
              <span className="text-3xl font-bold text-gray-900 dark:text-white"></span>
            </div>
          </div>

        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
}
