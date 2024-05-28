import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
    slidesToSlide: 1 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};
function MyCarousel() {
  return (
    <Carousel responsive={responsive}>
      <div className="bg-service-1 w-[295px] h-[366px]" >
        <p className="text-[16px] text-white pl-6 pt-12">Read more customers</p>
        <h5 className="font-bold text-[25px] text-white pl-6">Social Media</h5>
      </div>
      <div className="bg-service-2 w-[295px] h-[366px]" >
        <p className="text-[16px] text-white pl-6 pt-12">Care for your Home</p>
        <h5 className="font-bold text-[25px] text-white pl-6">Cleaner</h5>
      </div>
      <div className="bg-service-3 w-[295px] h-[366px]" >
        <p className="text-[16px] text-white pl-6 pt-12">Hire for your Kids</p>
        <h5 className="font-bold text-[25px] text-white pl-6">Nanny</h5>
      </div>
      <div className="bg-service-4 w-[295px] h-[366px]" >
        <p className="text-[16px] text-white pl-6 pt-12">Design Stunning Websites</p>
        <h5 className="font-bold text-[25px] text-white pl-6">Web Development</h5>
      </div>
      <div className="bg-service-5 w-[295px] h-[366px]" >
        <p className="text-[16px] text-white pl-6 pt-12">Repair your Cars</p>
        <h5 className="font-bold text-[25px] text-white pl-6">Mechanic</h5>
      </div><div className="bg-service-1 w-[295px] h-[366px]" >
        <p className="text-[16px] text-white pl-6 pt-12">Read more customers</p>
        <h5 className="font-bold text-[25px] text-white pl-6">Social Media</h5>
      </div>
      <div className="bg-service-2 w-[295px] h-[366px]" >
        <p className="text-[16px] text-white pl-6 pt-12">Care for your Home</p>
        <h5 className="font-bold text-[25px] text-white pl-6">Cleaner</h5>
      </div>
      <div className="bg-service-3 w-[295px] h-[366px]" >
        <p className="text-[16px] text-white pl-6 pt-12">Hire for your Kids</p>
        <h5 className="font-bold text-[25px] text-white pl-6">Nanny</h5>
      </div>
      <div className="bg-service-4 w-[295px] h-[366px]" >
        <p className="text-[16px] text-white pl-6 pt-12">Design Stunning Websites</p>
        <h5 className="font-bold text-[25px] text-white pl-6">Web Development</h5>
      </div>
      <div className="bg-service-5 w-[295px] h-[366px]" >
        <p className="text-[16px] text-white pl-6 pt-12">Repair your Cars</p>
        <h5 className="font-bold text-[25px] text-white pl-6">Mechanic</h5>
      </div>
    </Carousel>
  );
};

export default MyCarousel; // Ensure to export the component
