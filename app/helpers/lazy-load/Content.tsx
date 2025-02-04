"use client";

import React, { useState, useEffect, useRef } from "react";
import localData from "@/localData";
import { motion, useInView } from "framer-motion";

const { flowers, mountains, waterfall, trees, preloader } = localData.images;

type ItemProps = {
  item: { image: string };
  index?: number;
  inView?: boolean;
  variants?: "" | "fade" | "fade-up" | "fade-down" | "fade-left" | "fade-right";
  delay?: string;
};

function Item({ item, index = 0, inView = false, variants = "", delay }: ItemProps) {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = item.image;
    img.onload = () => setIsImageLoaded(true);
  }, [item.image]);

  return (
    <div
      // .v1-card {
      //     border-radius: 4px;
      //     cursor: pointer;
      //     border: 1px solid rgba(211, 218, 224, 0.5);
      //     transition: all 0.2s ease;
      //     &:hover {
      //         transform: scale(1.03);
      //         box-shadow: 14px 14px 25px 0 rgba(99, 101, 105, 0.7);
      //     }
      //     img {
      //         max-width: 300px;
      //         display: block;
      //         padding: 10px 10px 100px;
      //     }
      //     .card {
      //     }
      // }
      className={` ${inView ? "lazy-animate" : ""} `}
      data-lazy={variants}
      style={{ transitionDelay: (delay || index * 0.1) + "s" }}
    >
      <div
        className={`group card rounded-md cursor-pointer border  duration-200 ease hover:scale-[1.03] hover:shadow-[14px_14px_25px_0_rgba(99,101,105,0.7)]`}
      >
        {/* <img style={{ display: "none" }} src={item.image} onLoad={() => setIsImageLoaded(true)} /> */}
        <img
          src={isImageLoaded ? item.image : preloader}
          alt="flowers"
          className="block w-[300px] h-[300px] object-cover px-[10px] pt-[10px] pb-[100px]"
        />
      </div>
    </div>
  );
}

const Content = () => {
  const [items] = useState([
    { image: flowers },
    { image: mountains },
    { image: trees },
    { image: waterfall },
  ]);

  const [inView1, setIsInView1] = useState(false);
  const [inView2, setIsInView2] = useState(false);
  const [inView3, setIsInView3] = useState(false);
  const [inView4, setIsInView4] = useState(false);

  const group = useRef(null);
  const inViewV5 = useInView(group, { amount: 0.9, once: false });

  return (
    <section>
      <div className="container">
        <h2 className="text-4xl">Lazy Load</h2>
        <br />
        <br />

        <strong>Fade Up</strong>
        <motion.div
          className={`card-group flex gap-3 mb-[200px]`}
          viewport={{ amount: 0.3 }}
          //   whileInView={() => setIsInView1(true)}
          onViewportEnter={() => setIsInView1(true)}
        >
          {items.map((item, index) => (
            <Item
              key={index}
              {...{
                item,
                index,
                inView: inView1,
                variants: "fade-up",
              }}
            />
          ))}
        </motion.div>

        <strong>Fade Left</strong>
        <motion.div
          className={`card-group flex gap-3 mb-[200px]`}
          viewport={{ amount: 0.3 }}
          //   whileInView={() => setIsInView2(true)}
          onViewportEnter={() => setIsInView2(true)}
        >
          {items.map((item, index) => (
            <Item
              key={index}
              {...{
                item,
                index,
                inView: inView2,
                variants: "fade-left",
              }}
            />
          ))}
        </motion.div>

        <strong>Fade random</strong>
        <motion.div
          className={`card-group flex gap-3 mb-[200px]`}
          viewport={{ amount: 0.3 }}
          //   whileInView={() => setIsInView3(true)}
          onViewportEnter={() => setIsInView3(true)}
        >
          {items.map((item, index) => (
            <Item
              key={index}
              {...{
                item,
                index,
                inView: inView3,
                variants: "fade",
                delay: index === 0 ? "0" : index == 1 ? "0.6" : index == 2 ? "0.4" : "0.9",
              }}
            />
          ))}
        </motion.div>

        <strong>Fade All Up</strong>
        <motion.div
          className={`card-group flex gap-3 mb-[200px] ${inView4 ? "lazy-animate" : ""}`}
          viewport={{ amount: 0.1 }}
          //   whileInView={() => setIsInView4(true)}
          onViewportEnter={() => setIsInView4(true)}
          onViewportLeave={() => setIsInView4(false)}
          data-lazy="fade-up"
        >
          {items.map((item, index) => (
            <div key={index} className={``}>
              <div
                className={`group card rounded-md cursor-pointer border  duration-200 ease hover:scale-[1.03] hover:shadow-[14px_14px_25px_0_rgba(99,101,105,0.7)]`}
              >
                <img
                  src={item.image}
                  alt="flowers"
                  className="block w-[300px] h-[300px] object-cover px-[10px] pt-[10px] pb-[100px]"
                />
              </div>
            </div>
          ))}
        </motion.div>

        <strong>Fade All Up (useInView)</strong>
        <motion.div
          ref={group}
          className={`card-group flex gap-3 mb-[200px] ${inViewV5 ? "lazy-animate" : ""}`}
          viewport={{ amount: 0.1 }}
          data-lazy="fade-up"
        >
          {items.map((item, index) => (
            <div key={index} className={``}>
              <div
                className={`group card rounded-md cursor-pointer border  duration-200 ease hover:scale-[1.03] hover:shadow-[14px_14px_25px_0_rgba(99,101,105,0.7)]`}
              >
                <img
                  src={item.image}
                  alt="flowers"
                  className="block w-[300px] h-[300px] object-cover px-[10px] pt-[10px] pb-[100px]"
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Content;
