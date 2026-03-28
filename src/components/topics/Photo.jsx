import React, { useMemo } from "react";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";

function Photo() {
  const photos = useMemo(() => {
    return Array.from(
      { length: 54 },
      (_, i) => `${process.env.PUBLIC_URL}/images/${i + 1}.png`
    ).sort(() => Math.random() - 0.5);
  }, []);

  return (
    <main className="photo-page">
      <Card className="custom-card photo-card">
        <Card.Body>
          <h1 className="photo-title">
            Medtek Students (Feb.2026)
          </h1>

          <div className="photo-carousel-wrapper">
            <Carousel interval={3000} pause="hover">
              {photos.map((photo, index) => (
                <Carousel.Item key={index}>
                  <div className="photo-slide">
                    <img
                      src={photo}
                      alt={`Slide ${index + 1}`}
                      className="photo-image"
                    />
                  </div>
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
        </Card.Body>
      </Card>
    </main>
  );
}

export default Photo;