import imgBurgerMenu1 from "figma:asset/544f87baa899af9d231c1a0815f170497f5760b6.png";

function Group() {
  return (
    <div className="absolute contents left-[499px] top-[705px]">
      <div className="absolute bg-[#ff001b] h-[48px] left-[499px] rounded-[11px] top-[705px] w-[442px]">
        <div aria-hidden="true" className="absolute border-2 border-[magenta] border-solid inset-0 pointer-events-none rounded-[11px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" />
      </div>
      <div className="absolute flex flex-col font-['Archivo_Narrow:Bold',_sans-serif] font-bold justify-center leading-[0] left-[724.5px] text-[#401b01] text-[20px] text-center top-[728.5px] tracking-[2px] translate-x-[-50%] translate-y-[-50%] w-[391px]">
        <p className="leading-[normal]">CLICK HERE TO ADD PROTECTION</p>
      </div>
    </div>
  );
}

export default function Desktop() {
  return (
    <div className="bg-[#291a01] relative size-full" data-name="Desktop - 45">
      <div className="absolute h-[73px] left-[51px] top-[48px] w-[1357px]" data-name="burger menu 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-full left-[0.05%] max-w-none top-0 w-[99.82%]" src={imgBurgerMenu1} />
        </div>
      </div>
      <div className="absolute flex flex-col font-['Archivo_Narrow:Bold',_sans-serif] font-bold h-[47px] justify-center leading-[0] left-[395px] text-[#401b01] text-[32px] text-center top-[84.5px] translate-x-[-50%] translate-y-[-50%] w-[240px]">
        <p className="leading-[normal]">Use</p>
      </div>
      <div className="absolute flex flex-col font-['Archivo_Narrow:Bold',_sans-serif] font-bold h-[47px] justify-center leading-[0] left-[741px] text-[#401b01] text-[32px] text-center top-[84.5px] translate-x-[-50%] translate-y-[-50%] w-[240px]">
        <p className="leading-[normal]">Merch</p>
      </div>
      <div className="absolute flex flex-col font-['Archivo_Narrow:Bold',_sans-serif] font-bold h-[47px] justify-center leading-[0] left-[1087px] text-[#401b01] text-[32px] text-center top-[84.5px] translate-x-[-50%] translate-y-[-50%] w-[240px]">
        <p className="leading-[normal]">Info</p>
      </div>
      <div className="absolute flex flex-col font-['Archivo_Narrow:Bold',_sans-serif] font-bold h-[420px] justify-center leading-[normal] left-[calc(50%-0.5px)] text-[#ffe7e0] text-[0px] text-[24px] text-center top-[calc(50%-25px)] tracking-[0.96px] translate-x-[-50%] translate-y-[-50%] w-[657px]">
        <p className="mb-0">
          <span className="text-[magenta] tracking-[0.96px]">{`Meet Cockblock. `}</span>
          <span>
            <br aria-hidden="true" />
            {`The watermark that protects your art from AI learning. Cockblock is not only a tool that sticks a spanner in the works, it’s a badge that shows we stand on the side of humanity. `}
          </span>
        </p>
        <p className="mb-0"> </p>
        <p className="mb-0">
          <span className="text-[magenta] tracking-[0.96px]">{`How does it work? `}</span>AI rejects nudity, so we’ve created the first ever penis watermark to paste across your art.
        </p>
        <p className="mb-0"> </p>
        <p className="mb-0">
          <span className="text-[magenta] tracking-[0.96px]">Who are we?</span>
          <span>{` We’re a collection of creative people who are pro-artist, pro regulation, pro fair-use. `}</span>
        </p>
        <p className="mb-0"> </p>
        <p>{`That’s why Cockblock is, and will always be a free tool. `}</p>
      </div>
      <Group />
    </div>
  );
}