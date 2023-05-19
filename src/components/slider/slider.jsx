import React, { useState, useRef } from "react";
import { Container, Image, Slides, ButtonWrap, Button, Wrapper } from "./style";

import img1 from "./1.jpg";
import img2 from "./2.jpg";
import img3 from "./3.jpg";

function Slider() {
  const slides = [
    { id: 1, img: img1, title: "img1" },
    { id: 2, img: img2, title: "img1" },
    { id: 3, img: img3, title: "img1" },
  ];

  const [active, setActive] = useState(0);
  const img = useRef("");
  const next = () => {
    if (active === slides.length - 1) {
      setActive(0);
    } else {
      setActive(active + 1);
    }
  };
  const prev = () => {
    if (active === 0) {
      setActive(slides.length - 1);
    } else {
      setActive(active - 1);
    }
  };

  return (
    <Container>
      <Wrapper>
        <Slides>
          {slides.map((slide, i) => {
            return (
              <div ref={img} key={slide.id}>
                <Image
                  data={`translateX(${100 * (i - active)}%)`}
                  src={slide.img}
                />
              </div>
            );
          })}
        </Slides>
      </Wrapper>
      <ButtonWrap>
        <Button onClick={prev}>Prev</Button>
        <Button onClick={next}>Next</Button>
      </ButtonWrap>
    </Container>
  );
}

export default Slider;
