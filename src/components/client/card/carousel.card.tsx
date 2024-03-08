import { Carousel } from "antd";




const CarouselCard = () => {
  return (
    <div style={{ marginTop: 30, borderRadius: 10, overflow: "hidden" }}>
      <Carousel autoplay>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <img style={{ display: "block", width: "100%", height: "auto" }} src="/images/1.jpg" />
        </div>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <img style={{ display: "block", width: "100%", height: "auto" }} src="/images/2.jpg" />
        </div>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <img style={{ display: "block", width: "100%", height: "auto" }} src="/images/3.jpg" />
        </div>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <img style={{ display: "block", width: "100%", height: "auto" }} src="/images/4.jpg" />
        </div>
      </Carousel>
    </div>
  )
}

export default CarouselCard