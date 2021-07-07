import React from "react";
import { Card, Image, Carousel } from "antd";

const { Meta } = Card;
const contentStyle = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};
const About = () => {
  return (
    <div>
      <Card
        style={{
          backgroundColor: "transparent",
          maxWidth: 240,
          textAlign: "center",
          margin: "auto",
          fontFamily: "cursive",
        }}
      >
        <Image
          alt="example"
          width={200}
          src="https://scontent.fmnl6-2.fna.fbcdn.net/v/t1.6435-9/204780490_4642830249080174_7722611896591124854_n.jpg?_nc_cat=106&_nc_rgb565=1&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeHNxjwAcA5JdhBAZpqmTbExtIlb3DsnvAa0iVvcOye8Bg6kyBvu48EP67r1HmG3x46M62-XBVy5dn8qw9-l9jAk&_nc_ohc=AghqJkkM3DkAX9hZECt&_nc_ht=scontent.fmnl6-2.fna&oh=21ca85e404f862b3090fc89d29b75981&oe=60E50340"
        />
        <Meta title="Charles Kenneth C. Labit" description="Programmer" />
      </Card>

      <Card
        style={{
          backgroundColor: "transparent",
          maxWidth: 600,
          textAlign: "center",
          margin: "auto",
        }}
      >
        <h3 style={{ fontFamily: "cursive" }}>
          I'm Charles Kenneth C. Labit, 22 years old from Pagsanjan, Laguna. I
          have 3 years of experience as a programmer in HRD Singapore Pte. Ltd.
          using Vue.js, Vuetify, Vuex, Node.js, Express, REST API, MySQL, MSSQL
          and CouchDB. In some of my spare time, I study firebase and React.js
          and I also love to play online pc and mobile games.
        </h3>
        <Carousel autoplay>
          <div>
            <Image
              preview={false}
              alt="example"
              width={200}
              src="https://scontent.fmnl6-2.fna.fbcdn.net/v/t1.6435-9/204780490_4642830249080174_7722611896591124854_n.jpg?_nc_cat=106&_nc_rgb565=1&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeHNxjwAcA5JdhBAZpqmTbExtIlb3DsnvAa0iVvcOye8Bg6kyBvu48EP67r1HmG3x46M62-XBVy5dn8qw9-l9jAk&_nc_ohc=AghqJkkM3DkAX9hZECt&_nc_ht=scontent.fmnl6-2.fna&oh=21ca85e404f862b3090fc89d29b75981&oe=60E50340"
            />
          </div>
          <div>
            <Image
              preview={false}
              alt="example"
              width={200}
              src="https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5c76b7d331358e35dd2773a9%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D0%26cropX2%3D4401%26cropY1%3D0%26cropY2%3D4401"
            />
          </div>
          <div>
            <Image
              preview={false}
              alt="example"
              width={200}
              src="data:image/jpeg;base64,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"
            />
          </div>
          <div>
            <Image
              preview={false}
              alt="example"
              width={200}
              src="https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5ed66ef9d1db3e000665f5da%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D0%26cropX2%3D1080%26cropY1%3D0%26cropY2%3D1080"
            />
          </div>
        </Carousel>
        ,
      </Card>
    </div>
  );
};

export default About;
