import Image from "next/image";

function Carousel() {

  return (
    <div className="carousel w-11/12">
      <div id="slide1" className="carousel-item relative w-full">
        <Image alt="Salon 1" src="/salon1.jpg" width={700} height={300} className="object-cover"/>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y- transform justify-between">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <Image alt="Salon 2" src="/salon2.jpg" width={700} height={300} className="object-cover"/>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <Image alt="Salon 3" src="/salon3.jpg" width={700} height={300} className="object-cover"/>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <Image alt="Salon 4" src="/salon4.jpg" width={700} height={300} className="object-cover"/>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
