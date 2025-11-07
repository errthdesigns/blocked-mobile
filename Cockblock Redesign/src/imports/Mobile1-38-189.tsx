import imgGroup2331 from "figma:asset/e2fa7924faadaab3b607786dd00b91529258b98e.png";

function Group() {
  return (
    <div className="absolute contents left-[63px] top-[668.28px]">
      <div className="absolute bg-[#ff001b] h-[29.722px] left-[63px] rounded-[8px] top-[668.28px] w-[276px]">
        <div aria-hidden="true" className="absolute border-2 border-[magenta] border-solid inset-0 pointer-events-none rounded-[8px]" />
      </div>
      <div className="absolute flex flex-col font-['Archivo_Narrow:Bold',sans-serif] font-bold h-[16.718px] justify-center leading-[0] left-[203.81px] text-[#401b01] text-[14px] text-center top-[682.83px] tracking-[1.4px] translate-x-[-50%] translate-y-[-50%] w-[244.154px]">
        <p className="leading-[normal]">CLICK HERE TO ADD PROTECTION</p>
      </div>
    </div>
  );
}

export default function Mobile() {
  return (
    <div className="bg-[#291a01] relative size-full" data-name="mobile-1">
      <div className="absolute flex flex-col font-['Archivo_Narrow:Bold',sans-serif] font-bold h-[452px] justify-center leading-[normal] left-1/2 text-[#ffe7e0] text-[20px] text-center top-[calc(50%-34px)] tracking-[0.8px] translate-x-[-50%] translate-y-[-50%] w-[328px]">
        <p className="mb-0">
          <span className="font-['Archivo_Narrow:Bold',sans-serif] font-bold text-[magenta] tracking-[0.64px]">{`Meet Cockblock. `}</span>
          <span>
            <br aria-hidden="true" />
            {`The watermark that protects your art from AI learning. Cockblock is not only a tool that sticks a spanner in the works, it’s a badge that shows we stand on the side of humanity. `}
          </span>
        </p>
        <p className="mb-0"> </p>
        <p className="mb-0">
          <span className="font-['Archivo_Narrow:Bold',sans-serif] font-bold text-[magenta] tracking-[0.64px]">{`How does it work? `}</span>AI rejects nudity, so we’ve created the first ever penis watermark to paste across your art.
        </p>
        <p className="mb-0"> </p>
        <p className="mb-0">
          <span className="font-['Archivo_Narrow:Bold',sans-serif] font-bold text-[magenta] tracking-[0.64px]">Who are we?</span>
          <span>{` We’re a collection of creative people who are pro-artist, pro regulation, pro fair-use. `}</span>
        </p>
        <p className="mb-0"> </p>
        <p>
          {`That’s why Cockblock is, `}
          <br aria-hidden="true" />
          {`and will always be a free tool. `}
        </p>
      </div>
      <div className="absolute h-[50px] left-[37px] top-[32px] w-[115px]" data-name="Group 233 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgGroup2331} />
      </div>
      <Group />
    </div>
  );
}