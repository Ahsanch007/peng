import React from "react";

const Community = () => {
  return (
    <section className="community">
      <div className="container cm">
        <div className="community_div">
          <div className="xuy">
            <img className="com_bg" src="./assets/com_bg.png" />
            <img className="com_photo" src="./assets/com_photo.png" />
            <div>
              <h2 className="rs1:text-[40px] rs2:text-[32px] rs3:text-[26px] rs4:text-[20px] font-poppins-bold">
                Slide into our community!
              </h2>
              <p className="rs1:text-[26px] rs2:text-[24px] rs3:text-[18px] rs4:text-[17px] text-[17px] font-poppins-bold">
                Join our Telegram and follow us on X for the latest updates and
                a warm welcome from our friendly community. Let's glide towards
                millionaires together and enjoy the meme's and artwork in the
                process!
              </p>
              <div>
                <a
                  href="https://t.me/pengonsol"
                  target="_blank"
                  className="bg-[url('./assets/promolink.svg')]"

                  //   style={{ backgroundImage: url("./assets/promolink.svg") }}
                >
                  <img src="./assets/tg_2.svg" />
                </a>
                <a
                  href="https://twitter.com/pengonsolana"
                  target="_blank"
                  className="bg-[url('./assets/promolink.svg')]"
                  //   style={{ backgroundImage: url("./assets/promolink.svg") }}
                >
                  <img src="./assets/twitter_2.svg" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
