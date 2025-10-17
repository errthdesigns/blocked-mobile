export default function Mobile1() {
  return (
    <div className="bg-[#291a01] relative size-full" data-name="mobile-1" style={{ minHeight: "100vh", width: "100%" }}>
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*0.27512326836586)+(var(--transform-inner-height)*0.9614089727401733)))] items-center justify-center left-0 top-[579px] w-[calc(1px*((var(--transform-inner-height)*0.27512326836586)+(var(--transform-inner-width)*0.9614089727401733)))]" style={{ "--transform-inner-width": "334", "--transform-inner-height": "144" } as React.CSSProperties}>
        <div className="flex-none rotate-[344.031deg]">
          <div className="h-[144px] relative w-[334px]" data-name="image 15">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src="/sticker.png" />
          </div>
        </div>
      </div>
      <div className="absolute flex flex-col font-sans font-bold h-[452px] justify-center leading-[normal] left-1/2 text-[#ffe7e0] text-[20px] text-center top-[calc(50%-88px)] tracking-[0.8px] translate-x-[-50%] translate-y-[-50%] w-[328px]">
        <p className="mb-0">
          <span className="font-sans font-bold text-[magenta] tracking-[0.64px] mx-[0px] my-[16px]">{`Meet Cockblock. `}</span>
          <span className="mx-[0px] my-[12px]">
            <br aria-hidden="true" />
            {`The watermark that protects your art from AI learning. Cockblock is not only a tool that sticks a spanner in the works, it’s a badge that shows we stand on the side of humanity. `}
          </span>
        </p>
        <p className="mb-0"> </p>
        <p className="my-[16px] mx-[0px]">
          <span className="font-sans font-bold text-[magenta] tracking-[0.64px]">{`How does it work? `}</span>AI rejects nudity, so we’ve created the first ever penis watermark to paste across your art.
        </p>
        <p className="mb-0"> </p>
        <p className="mb-0">
          <span className="font-sans font-bold text-[magenta] tracking-[0.64px]">Who are we?</span>
          <span>{` We’re a collection of creative people who are pro-artist, pro regulation, pro fair-use. `}</span>
        </p>
        <p className="mb-0"> </p>
        <p className="mx-[0px] my-[16px]">
          {`That’s why Cockblock is, `}
          <br aria-hidden="true" />
          {`and will always be a free tool. `}
        </p>
      </div>
      <div className="absolute flex flex-col font-sans font-bold justify-center leading-[0] left-[281px] text-[20px] text-[magenta] text-center text-nowrap top-[768.5px] tracking-[2px] translate-x-[-50%] translate-y-[-50%]">
        <p className="leading-[normal] whitespace-pre">COMING SOON...</p>
      </div>
    </div>
  );
}