"use client";
import { cn } from "../utils/cn";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import React from 'react';


export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    link: string;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-2 md:grid-cols-3  lg:grid-cols-4  py-10 items-center",
        className
      )}
    >
      {items.map((item, idx) => (
        <div
          key={item?.link}
          className="relative group  block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-slate-500/[0.8] block  rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            <CardDescription><img src={item.link} alt=""  height={100} width={100}/></CardDescription>
            <CardTitle>{item.title}</CardTitle>
          </Card>
        </div>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-1 sm:p-4 overflow-hidden  border  border-white/[0.2] group-hover:border-slate-700 relative z-20",
        className
      )}
      style={{"background":"rgba(255, 255, 255, 0.05)","backdropFilter":"blur(20px)"}}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};
export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-2 sm:mt-4 text-center", className)}>
      {children}
    </h4>
  );
};
export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "sm:mt-4 mt-2 text-zinc-400 tracking-wide h-32 leading-relaxed text-sm flex items-center justify-center",
        className
      )}
    >
      {children}
    </div>
  );
};
