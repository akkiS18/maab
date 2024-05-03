import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Feature } from "./feature";
import { SectionTwo } from "./section-two";
import { SectionThird } from "./section-third";
import { SectionFourth } from "./section-fourth";
import { SectionFive } from "./section-five";
import { Footer } from "./footer";

export const HomePage = () => {
  return (
    <div>
      <div className="mt-6 px-8">
        <Image src="/main.png" alt="video" width={1300} height={800} className="rounded-lg" />
      </div>
      <div className="mt-24">
      <Feature />
      <SectionTwo />
      <SectionThird />

      <div className="mx-10">
        <div className="bg-grant my-12 rounded-3xl flex flex-col items-start justify-center">
          <h1 className="ml-16 mb-2 text-5xl font-semibold text-white">Grantni qolga kiriting!</h1>
          <p className="ml-16 mb-4 text-white max-w-[500px]">MAAB Academyda biz eng yaxshi iqtidor egalariga oyiga 3+3 gacha grantlar taqdim etamiz. Agar siz ozingizni iqtidorli deb hisoblasangiz va ingliz tilini mukammal bilsangiz, kirish imtihonida qatnashing! BI sayohatingizni biz bilan boshlash imkoniyatidan foydalaning!</p>
          <Button className="ml-16 bg-transparent text-white rounded-3xl px-12" variant={"outline"}>Ro’yhatdan o’ting</Button>
        </div>
      </div>

      <SectionFourth />
      <SectionFive />

<section className="text-gray-600 body-font bg-gray-100 rounded-3xl my-12 mx-10">
  <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
    <div className="xl:w-2/6 w-full md:pr-16 lg:pr-0 pr-0 text-center">
      <h1 className="title-font font-medium text-3xl text-gray-900">MAAB Academy bilan BI kelajagingizni oching! Hozir royxatdan oting!</h1>
      <p className="leading-relaxed mt-4">Kirish imtihonimizni topshiring va Grant yutib olish imkoniyatiga ega boling</p>
    </div>
    <div className="flex md:w-2/6 w-full flex-col mx-auto px-8 space-y-4 items-end">
<div className="relative flex-grow w-full">
  <label className="leading-7 text-sm text-gray-600">Ismingiz</label>
  <input type="text" id="full-name" name="full-name" placeholder="Abbos" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
</div>
<div className="relative flex-grow w-full"> 
  <label className="leading-7 text-sm text-gray-600">Ingliz tili darajangiz</label>
            <Select>
                <SelectTrigger className="w-full border-none text-gray-500 py-1">
                    <SelectValue placeholder="Darajangiz" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectItem value="a">Beginner</SelectItem>
                        <SelectItem value="b">Elementary</SelectItem>
                        <SelectItem value="c">Intermediate</SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>
</div>
<div className="flex flex-row gap-x-2"> 
  <input type="checkbox" />
  <p className="text-xs"> Arizani topshirish orqali siz shaxsiy malumotlaringizni Maxfiylik siyosatga muvofiq qayta ishlashga rozilik bildirasiz</p>
</div>
</div>
    <div className="flex md:w-2/6 w-full flex-col mx-auto px-8 space-y-4 items-end">
<div className="relative flex-grow w-full">
  <label className="leading-7 text-sm text-gray-600">Telefon raqamingiz</label>
  <input type="phone" id="phone" name="phone" placeholder="+998" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
</div>
<div className="relative flex-grow w-full">
  <label className="leading-7 text-sm text-gray-600">Mantiqiy bilim darajangiz</label>
            <Select>
                <SelectTrigger className="w-full border-none text-gray-500 py-1">
                    <SelectValue placeholder="Bilim darajangiz" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectItem value="junior">Junior</SelectItem>
                        <SelectItem value="middle">Middle</SelectItem>
                        <SelectItem value="senior">Senior</SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>
</div>
<Button className="rounded-3xl bg-blue-700 hover:bg-blue-500" variant={"default"}>
  Arizani jonatish
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right ml-2" color="white" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
  </svg>
</Button>
</div>
  </div>
</section>

<Footer />

      </div>
    </div>
  )
};
