import imgGroup2331 from "figma:asset/e2fa7924faadaab3b607786dd00b91529258b98e.png";

/**
 * @figmaAssetKey b65da62e5cc8b91d48a0d901929226f86a341f6a
 */
function Group({ className }: { className?: string }) {
  return (
    <div className={className}>
      <div className="absolute bg-[#ff001b] inset-0 rounded-[11px]">
        <div aria-hidden="true" className="absolute border-2 border-[magenta] border-solid inset-0 pointer-events-none rounded-[11px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" />
      </div>
      <div className="absolute flex flex-col font-['Archivo_Narrow:Bold',sans-serif] font-bold inset-[20.83%_4.75%_22.92%_6.79%] justify-center leading-[0] text-[#401b01] text-[20px] text-center tracking-[2px]">
        <p className="leading-[normal]">CLICK HERE TO ADD PROTECTION</p>
      </div>
    </div>
  );
}

/**
 * @figmaAssetKey ab8ddbd1a572fbda3e05cbf45a7f53c71fb0c06c
 */
function Group1({ className, onClick }: { className?: string; onClick?: () => void }) {
  return (
    <div className={className} data-name="Group 233 1" onClick={onClick}>
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgGroup2331} />
    </div>
  );
}

/**
 * @figmaAssetKey c2d153c42c54dc74a04f4bc727c9a513fdd98f9a
 */
function MeetCockblockTheWatermarkThatProtectsYourArtFromAiLearningCockblockIsNotOnlyAToolThatSticksASpannerInTheWorksItsABadgeThatShowsWeStandOnTheSideOfHumanityHowDoesItWorkAiRejectsNuditySoWeveCreatedTheFirstEverPenisWatermarkToPasteAcrossYourArtWhoAreWeWereACollectionOfCreativePeopleWhoAreProArtistProRegulationProFairUseThatsWhyCockblockIsAndWillAlwaysBeAFreeTool({ className }: { className?: string }) {
  return (
    <div className={className} data-name="Meet Cockblock.  The watermark that protects your art from AI learning. Cockblock is not only a tool that sticks a spanner in the works, it's a badge that shows we stand on the side of humanity. How does it work? AI rejects nudity, so we've created the first ever penis watermark to paste across your art. Who are we? We're a collection of creative people who are pro-artist, pro regulation, pro fair-use. That's why Cockblock is, and will always be a free tool.">
      <div className="absolute flex flex-col font-['Archivo_Narrow:Bold',sans-serif] font-bold inset-0 justify-center leading-[normal] text-[#ffe7e0] text-[0px] text-[24px] text-center tracking-[0.96px]">
        <p className="mb-0">
          <span className="text-[magenta] tracking-[0.96px]">Meet Cockblock. </span>
          <span>
            <br aria-hidden="true" />
            The watermark that protects your art from AI learning. Cockblock is not only a tool that sticks a spanner in the works, it's a badge that shows we stand on the side of humanity.{" "}
          </span>
        </p>
        <p className="mb-0"> </p>
        <p className="mb-0">
          <span className="text-[magenta] tracking-[0.96px]">How does it work? </span>AI rejects nudity, so we've created the first ever penis watermark to paste across your art.
        </p>
        <p className="mb-0"> </p>
        <p className="mb-0">
          <span className="text-[magenta] tracking-[0.96px]">Who are we?</span> We're a collection of creative people who are pro-artist, pro regulation, pro fair-use.{" "}
        </p>
        <p className="mb-0"> </p>
        <p>That's why Cockblock is, and will always be a free tool. </p>
      </div>
    </div>
  );
}

interface DesktopProps {
  onNavigate: (page: 'use' | 'merch' | 'info') => void;
  onToggleMenu: () => void;
}

export default function Desktop({ onNavigate, onToggleMenu }: DesktopProps) {
  return (
    <div className="bg-[#291a01] relative size-full" data-name="Desktop - 51">
      <MeetCockblockTheWatermarkThatProtectsYourArtFromAiLearningCockblockIsNotOnlyAToolThatSticksASpannerInTheWorksItsABadgeThatShowsWeStandOnTheSideOfHumanityHowDoesItWorkAiRejectsNuditySoWeveCreatedTheFirstEverPenisWatermarkToPasteAcrossYourArtWhoAreWeWereACollectionOfCreativePeopleWhoAreProArtistProRegulationProFairUseThatsWhyCockblockIsAndWillAlwaysBeAFreeTool className="absolute h-[420px] left-[391px] top-[215px] w-[657px]" />
      <Group1 className="absolute h-[75px] left-[51px] top-[47px] w-[173px] cursor-pointer" onClick={onToggleMenu} />
      <Group className="absolute h-[48px] left-[499px] top-[705px] w-[442px]" />
    </div>
  );
}
