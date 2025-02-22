"use client";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const Sidebar = ({ user }: SiderbarProps) => {
  const pathName = usePathname();
  return (
    <section className="sidebar">
      <nav className="flex flex-col gap-4">
        <Link
          href="/"
          className="mb-12 flex cursor-pointer items-center gap-2 pr-5"
        >
          <Image
            src="/icons/logo.svg"
            width={34}
            height={34}
            alt="Quick Send Logo"
            className="size-[24px] max-xl:size-14 "
          />
          <h1 className="sidebar-logo">QuickSend</h1>
        </Link>
        {sidebarLinks.map((item) => {
          const isActive =
            pathName === item.route || pathName.startsWith(`${item.route}/`);
          return (
            <Link
              href={item.route}
              key={item.label}
              className={cn("sidebar-link", { "bg-bank-gradient": isActive })}
            >
              <div className="relative size-6">
                <Image
                  alt={item.label}
                  src={item.imgURL}
                  fill
                  className={cn({ "brightness-[3] invert-0": isActive })}
                />
              </div>
              <p className={cn("sidebar-label", { "!text-white": isActive })}>
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 right-0 ml-2 text-xs text-white bg-indigo-500 p-1 rounded-full">
                    Active
                  </span>
                )}
              </p>
            </Link>
          );
        })}
        USER
      </nav>
      FOOTER
    </section>
  );
};

export default Sidebar;
