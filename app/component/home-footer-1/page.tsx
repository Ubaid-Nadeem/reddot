import "./style.css"
import ArrowButton from "../animata/button/button";

export default function HomeFooter2() {
  return (
    <div className="flex HomeFooter2-container" style={{}}>
      <div className="HomeFooter2-child1">
        <img
          src="https://radstore.pk/cdn/shop/files/File0702_square_d9d6de80-9230-4ff1-ba12-5761f2a716c0_750x.jpg?v=1613737436"
          alt=""
        />
      </div>
      <div className="HomeFooter2-child2">
        <div>

        <p>A good change</p>
        <h2>WHY SHOP WITH US</h2>

        <p>
          Along with hundreds of online stores, you might think as to what makes
          Rad any different? <br/> And the difference is how we treat our customers.
          Developing a long-term relationship demands that we give our best. The
          quality of our products speaks for itself!
        </p>
        <ArrowButton
          text={"Shop Now"}
          style={{
            backgroundColor: "black",
            color: "white",
            padding : "15px 35px"
          }}
          />
          </div>
      </div>
    </div>
  );
}
