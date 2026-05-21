"use client";
import React from "react";
import { Radar, IconContainer } from "./ui/radar-effect";
import { HiShieldCheck, HiLockClosed } from "react-icons/hi";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { BsShieldLockFill, BsFingerprint } from "react-icons/bs";
import { RiServerFill, RiKey2Fill } from "react-icons/ri";

export default function RadarEffectDemo() {
  return (
    <div className="flex min-h-[500px] w-full items-center justify-center bg-black">
      <div className="relative flex h-96 w-full max-w-3xl flex-col items-center justify-center space-y-4 overflow-hidden px-4">
        {/* Row 1 */}
        <div className="mx-auto w-full max-w-3xl">
          <div className="flex w-full items-center justify-center space-x-10 md:justify-between md:space-x-0">
            <IconContainer
              text="Threat Detection"
              delay={0.2}
              icon={<HiShieldCheck className="h-8 w-8 text-slate-600" />}
            />
            <IconContainer
              delay={0.4}
              text="Access Control"
              icon={<BsFingerprint className="h-8 w-8 text-slate-600" />}
            />
            <IconContainer
              text="Data Encryption"
              delay={0.3}
              icon={<BsShieldLockFill className="h-8 w-8 text-slate-600" />}
            />
          </div>
        </div>
        {/* Row 2 */}
        <div className="mx-auto w-full max-w-md">
          <div className="flex w-full items-center justify-center space-x-10 md:justify-between md:space-x-0">
            <IconContainer
              text="Server Hardening"
              delay={0.5}
              icon={<RiServerFill className="h-8 w-8 text-slate-600" />}
            />
            <IconContainer
              text="Vulnerability Scans"
              delay={0.8}
              icon={<AiFillSafetyCertificate className="h-8 w-8 text-slate-600" />}
            />
          </div>
        </div>
        {/* Row 3 */}
        <div className="mx-auto w-full max-w-3xl">
          <div className="flex w-full items-center justify-center space-x-10 md:justify-between md:space-x-0">
            <IconContainer
              delay={0.6}
              text="Zero Trust"
              icon={<HiLockClosed className="h-8 w-8 text-slate-600" />}
            />
            <IconContainer
              delay={0.7}
              text="Key Management"
              icon={<RiKey2Fill className="h-8 w-8 text-slate-600" />}
            />
          </div>
        </div>

        <Radar className="absolute -bottom-12" />
        <div className="absolute bottom-0 z-[41] h-px w-full bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
      </div>
    </div>
  );
}
