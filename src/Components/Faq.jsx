import Wrapper from "./Wrapper";
import Accordian, { AccordianItem } from "./Accordian";

const Faq = () => {
  return (
    <section className="py-8   relative mt-[12rem]">
      {/* IMAGE  =======> */}
      {/* <img
        src="./assets/Ellipse_26.png"
        className="absolute left-[0] top-[-60px] z-[-2] w-[100vw] h-full"
        alt=""
      /> */}
      <Wrapper styles={"px-2"}>
        <div className="flex gap-6">
          <div className="flex flex-1 flex-col space-y-8">
            {/* <h2 className="text-[32px] text-[#181A1F] font-semibold">
              Frequently asked questions
            </h2> */}
            <div>
              <Accordian className="flex flex-col space-y-4 font-poppins-extrabold">
                <AccordianItem value="1" trigger="WHO IS PENG?">
                  <div className="flex flex-col space-y-4">
                    <p className="text-[#19334a] rs4:text-[24px] text-[20px] font-bold pl-5">
                      $PENG is a cute little penguin born on the Solana
                      blockchain. People think he looks like PEPE the frog,
                      however he is just a penguin!
                    </p>
                    {/* <ol className="flex flex-col space-y-4">
                      <li className="text-[#64666b] text-[14px] font-normal">
                        1.Download our{" "}
                        <a
                          className="font-semibold underline text-[
#181A1F] hover:no-underline"
                        >
                          app
                        </a>{" "}
                        or visit{" "}
                        <a
                          className="font-semibold underline text-[
#181A1F] hover:no-underline"
                        >
                          blacklane.com
                        </a>
                      </li>
                      <li className="text-[#64666b] text-[14px] font-normal">
                        2.Enter your desired dates and locations as if you are
                        booking
                      </li>
                      <li className="text-[#64666b] text-[14px] font-normal">
                        3.On the next step you will see the rates for each
                        vehicle class
                      </li>
                    </ol> */}
                  </div>
                </AccordianItem>
                <AccordianItem value="2" trigger="What chain is PENG on?">
                  <div className="flex flex-col space-y-4">
                    <p className="text-[#19334a] rs4:text-[24px] text-[20px] font-bold pl-5">
                      $PENG is born on the Solana blockchain.
                    </p>
                  </div>
                </AccordianItem>
                <AccordianItem value="3" trigger="How can I buy $PENG?">
                  <div className="flex flex-col space-y-4">
                    <p className="text-[#19334a] rs4:text-[24px] text-[20px] font-bold pl-5">
                      Follow the instructions on our 'how you buy' section,
                      silly 😉
                    </p>
                  </div>
                </AccordianItem>
                <AccordianItem
                  value="4"
                  trigger="What is the predections of $PENG's price in the future?"
                >
                  <p className="text-[#19334a] rs4:text-[24px] text-[20px] font-bold pl-5 ">
                    We plan to go to the billions. However meme tokens have huge
                    risks so always DYOR (do your own research)!
                  </p>
                </AccordianItem>
                <AccordianItem
                  value="5"
                  trigger="Why does $PENG look like PEPE?"
                >
                  <div className="flex flex-col space-y-4">
                    <p className="text-[#19334a] rs4:text-[24px] text-[20px] font-bold pl-5">
                      Hey! I'm just a penguin!
                    </p>
                  </div>
                </AccordianItem>
              </Accordian>
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default Faq;
