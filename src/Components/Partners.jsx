import React from 'react'

export const Partners = () => {
  return (
    <div className='w-full overflow-hidden '>
        <div className="banner__bottom relative w-full h-[280px] mt-[340px]">
          {/* <img className="snow_bg_partner" src="./assets//banner_elipse.svg" />
          <img className="snow_partner" src="./assets//snow.svg" /> */}
          <img className="ping_partner" src="./assets/cobra-man.png" />
          {/* <img className="pinghand_partner" src="./assets/pinghand.png" /> */}
        </div>
        <div class="_partners container">
          <article class="partners">
            <h2 className='font-poppins-extrabold'>Our partners</h2>
          </article>
          <ul class="partners__list">
            <li>
              <a href="https://coinmarketcap.com/" target="_blank">
                <img src="./assets/partner1.svg" alt="" />
              </a>
            </li>
            <li>
              <a href="https://dexscreener.com/" target="_blank">
                <img src="./assets/partner2.svg" alt="" />
              </a>
            </li>
            <li>
              <a href="https://gotbit.io/" target="_blank">
                <img src="./assets/partner3.svg" alt="" />
              </a>
            </li>
            <li>
              <a href="https://www.dextools.io/" target="_blank">
                <img src="./assets/partner4.svg" alt="" />
              </a>
            </li>
          </ul>
        </div>
    </div>
  )
}
