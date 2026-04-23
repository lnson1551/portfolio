import svgPaths from "./svg-ywc6wmxydb";
import imgImageOnlyOnePointerOnTheTimeScrubber from "../../Supership/Other projects/fm-h1.png";
import imgSummaryImage from "../../Supership/Other projects/fm-h1.png";
import imgImageOnlyOnePointerOnTheTimeScrubber1 from "../../Supership/Other projects/fm-c1.png";
import imgImageOnlyOnePointerOnTheTimeScrubber2 from "../../Supership/Other projects/fm-f1.png";
import imgImageOnlyOnePointerOnTheTimeScrubber3 from "../../Supership/Other projects/fm-f2.png";
import imgImageOnlyOnePointerOnTheTimeScrubber4 from "../../Supership/Other projects/fm-f3.png";
import imgImageOnlyOnePointerOnTheTimeScrubber5 from "../../Supership/Other projects/fm-f4.png";
import imgImageFigmaDesignPreview from "../../Supership/Other projects/fm-r1.png";
import imgImage3ATransparentPriceStructure from "../assets/figma-home/card-univini.png";
import imgImage3ATransparentPriceStructure1 from "../assets/figma-home/card-supership.png";
import imgImage3ATransparentPriceStructure2 from "../assets/figma-home/card-fishmap.png";
import { DetailQuoteBlock } from "../app/components/detail-page/molecules/DetailQuoteBlock";
import { DetailHighlightsGrid } from "../app/components/detail-page/organisms/DetailHighlightsGrid";
import { DetailMoreWorksGrid } from "../app/components/detail-page/organisms/DetailMoreWorksGrid";
import { DetailResultsShowcase } from "../app/components/detail-page/organisms/DetailResultsShowcase";

function Header() {
  return (
    <div className="relative shrink-0 w-full" data-name="Header">
      <div aria-hidden="true" className="absolute border-[#f6f6f6] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[12px] relative size-full">
          <div className="flex flex-[1_0_0] flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[32px] justify-center leading-[0] min-w-px not-italic relative text-[#fefcfc] text-[20px] text-center">
            <p className="leading-[28px]">← Back</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function NavItem() {
  return (
    <div className="mb-[-1px] relative shrink-0 w-full" data-name="Nav Item">
      <div aria-hidden="true" className="absolute border-[#f6f6f6] border-b border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[16px] relative size-full">
          <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[24px] min-w-px not-italic relative text-[#fefcfc] text-[16px]">Context</p>
        </div>
      </div>
    </div>
  );
}

function NavItem1() {
  return (
    <div className="mb-[-1px] relative shrink-0 w-full" data-name="Nav Item">
      <div aria-hidden="true" className="absolute border-[#f6f6f6] border-b border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[16px] relative size-full">
          <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[24px] min-w-px not-italic relative text-[#fefcfc] text-[16px]">Results</p>
        </div>
      </div>
    </div>
  );
}

function NavItem2() {
  return (
    <div className="mb-[-1px] relative shrink-0 w-full" data-name="Nav Item">
      <div aria-hidden="true" className="absolute border-[#f6f6f6] border-b border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[16px] relative size-full">
          <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[24px] min-w-px not-italic relative text-[#fefcfc] text-[16px]">Learned</p>
        </div>
      </div>
    </div>
  );
}

function Navigation() {
  return (
    <div className="content-stretch flex flex-col items-start pb-px relative shrink-0 w-full" data-name="Navigation">
      <NavItem />
      <NavItem1 />
      <NavItem2 />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px relative w-full" data-name="Container">
      <Navigation />
    </div>
  );
}

function NavItem3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Nav Item">
      <div aria-hidden="true" className="absolute border-[#f6f6f6] border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[4px] items-center justify-center p-[16px] relative size-full">
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#fefcfc] text-[16px] whitespace-nowrap">Contact</p>
          <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Contact Arrow">
            <div className="absolute inset-[20.83%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 11.6667">
                <path d={svgPaths.p221d400} fill="var(--fill-0, #FEFCFC)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectDetailsContainer() {
  return (
    <div className="content-stretch flex gap-[12px] items-center opacity-60 relative shrink-0" data-name="Project Details Container">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[#fefcfc] text-[16px] whitespace-nowrap">[ Social app for anglers ]</p>
    </div>
  );
}

function ProjectInfo() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center max-w-[612px] relative shrink-0 w-full" data-name="Project Info">
      <p className="font-['PP_NeueBit:Semi_Bold',sans-serif] leading-[72px] not-italic relative shrink-0 text-[#fefcfc] text-[80px] whitespace-nowrap">Fishmap</p>
      <ProjectDetailsContainer />
    </div>
  );
}

function ProjectDivider() {
  return (
    <div className="content-stretch flex items-center justify-between mb-[-2px] relative shrink-0 w-full" data-name="Project Divider">
      <div className="bg-[#fefcfc] shrink-0 size-[8px]" data-name="Project Divider Left" />
      <div className="bg-[#fefcfc] shrink-0 size-[8px]" data-name="Project Divider Right" />
    </div>
  );
}

function ImageOnlyOnePointerOnTheTimeScrubber() {
  return (
    <div className="aspect-[612/400] relative shrink-0 w-full" data-name="Image (Only one pointer on the time scrubber)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageOnlyOnePointerOnTheTimeScrubber} />
    </div>
  );
}

function ProjectImage() {
  return (
    <div className="relative shrink-0 w-full" data-name="Project Image">
      <div aria-hidden="true" className="absolute border border-[#fefcfc] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[20px] relative size-full">
          <ImageOnlyOnePointerOnTheTimeScrubber />
        </div>
      </div>
    </div>
  );
}

function ProjectImageContainer() {
  return (
    <div className="mb-[-2px] relative shrink-0 w-full" data-name="Project Image Container">
      <div className="content-stretch flex flex-col items-start px-[7px] relative size-full">
        <ProjectImage />
      </div>
    </div>
  );
}

function LowerProjectDivider() {
  return (
    <div className="content-stretch flex items-center justify-between relative w-full" data-name="Lower Project Divider">
      <div className="bg-[#fefcfc] shrink-0 size-[8px]" data-name="Lower Project Divider Left" />
      <div className="bg-[#fefcfc] shrink-0 size-[8px]" data-name="Lower Project Divider Right" />
    </div>
  );
}

function ProjectContentContainer() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[2px] relative shrink-0 w-[480px]" data-name="Project Content Container">
      <ProjectDivider />
      <ProjectImageContainer />
      <div className="flex items-center justify-center mb-[-2px] relative shrink-0 w-full">
        <div className="-scale-y-100 flex-none w-full">
          <LowerProjectDivider />
        </div>
      </div>
    </div>
  );
}

function ContentBlock() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-center justify-center relative shrink-0" data-name="Content Block">
      <ProjectInfo />
      <ProjectContentContainer />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <ContentBlock />
    </div>
  );
}

function SummaryTextContainer() {
  return (
    <div className="absolute bg-white content-stretch flex gap-[10px] h-[46px] items-center justify-center left-[131px] pl-[33px] pr-[28px] py-[11px] top-[57px]" data-name="Summary Text Container">
      <div aria-hidden="true" className="absolute border border-[#0015b7] border-solid inset-0 pointer-events-none shadow-[-6px_9px_0px_0px_black]" />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] not-italic relative shrink-0 text-[#1e1c1c] text-[18px] whitespace-nowrap">Duma!</p>
      <div className="absolute bottom-[-12px] h-[14px] left-[14px] w-[10.5px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 14">
          <path d="M0 0H10.5L0 14V0Z" fill="var(--fill-0, white)" id="Rectangle 6435" />
        </svg>
      </div>
    </div>
  );
}

function SummaryDetails() {
  return (
    <div className="absolute contents left-0 top-[57px]" data-name="Summary Details">
      <SummaryTextContainer />
    </div>
  );
}

function SummaryContainer() {
  return null;
}

function Group() {
  return (
    <div className="absolute inset-[23.84%_0_9.32%_34.1%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 128.576 32.0853">
        <g id="Group">
          <path d={svgPaths.p1b54fa00} fill="var(--fill-0, #FEFCFC)" id="Vector" />
          <path d={svgPaths.pa14d600} fill="var(--fill-0, #FEFCFC)" id="Vector_2" />
          <path d={svgPaths.p7171740} fill="var(--fill-0, #FEFCFC)" id="Vector_3" />
          <path d={svgPaths.p2c481400} fill="var(--fill-0, #FEFCFC)" id="Vector_4" />
          <path d={svgPaths.p39a99680} fill="var(--fill-0, #FEFCFC)" id="Vector_5" />
          <path d={svgPaths.p3b7251f0} fill="var(--fill-0, #FEFCFC)" id="Vector_6" />
          <path d={svgPaths.p258eb380} fill="var(--fill-0, #FEFCFC)" id="Vector_7" />
          <path d={svgPaths.p381b400} fill="var(--fill-0, #FEFCFC)" id="Vector_8" />
        </g>
      </svg>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[0_73.4%_0_0]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 51.904 48">
        <g id="Group">
          <path d={svgPaths.p25194ff2} fill="var(--fill-0, #FEFCFC)" id="Vector" opacity="0.5" />
          <path d={svgPaths.p1627e800} fill="var(--fill-0, #FEFCFC)" id="Vector_2" />
          <path d={svgPaths.pa5be400} fill="var(--fill-0, #FEFCFC)" id="Vector_3" />
          <path d={svgPaths.p200b2a00} fill="var(--fill-0, #FEFCFC)" id="Vector_4" />
        </g>
      </svg>
    </div>
  );
}

function Logo() {
  return (
    <div className="absolute bottom-[48px] content-stretch flex flex-col items-start right-[60px]" data-name="Logo">
      <div className="h-[48px] relative shrink-0 w-[195.099px]">
        <Group />
        <Group1 />
      </div>
    </div>
  );
}

function ContactInfoContainer() {
  return (
    <div className="content-stretch flex font-['Inter:Regular',sans-serif] font-normal gap-[24px] items-center leading-[0] not-italic relative shrink-0 text-[#1e1c1c] text-[0px] whitespace-nowrap" data-name="Contact Info Container">
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="text-[#fefcfc] text-[12px]">
          <span className="leading-[16px]">{`Email: `}</span>
          <a className="cursor-pointer leading-[16px]" href="mailto:lnson1551@gmail.com" target="_blank">
            <span href="mailto:lnson1551@gmail.com" target="_blank">
              lnson1551@gmail.com
            </span>
          </a>
        </p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="text-[#fefcfc] text-[12px]">
          <span className="leading-[16px]">{`LinkedIn: `}</span>
          <a className="cursor-pointer leading-[16px]" href="https://www.linkedin.com/in/seav/" target="_blank">
            <span href="https://www.linkedin.com/in/seav/" target="_blank">{`linkedin.com/in/seav/`}</span>
          </a>
        </p>
      </div>
    </div>
  );
}

function ContactContainer() {
  return (
    <div className="absolute content-stretch flex items-center left-0 px-[60px] py-[20px] top-0" data-name="Contact Container">
      <ContactInfoContainer />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full" data-name="Container">
      <ul className="block font-['Inter:Regular',sans-serif] font-normal leading-[0] list-disc not-italic relative shrink-0 text-[#1e1c1c] text-[18px] w-full">
        <li className="mb-0 ms-[27px]">
          <span className="leading-[28px]">1 Project manager</span>
        </li>
        <li className="mb-0 ms-[27px]">
          <span className="leading-[28px]">2 Product Designers</span>
        </li>
        <li className="mb-0 ms-[27px]">
          <span className="leading-[28px]">1 Mobile Devs</span>
        </li>
        <li className="mb-0 ms-[27px]">
          <span className="leading-[28px]">1 Backend Devs</span>
        </li>
        <li className="ms-[27px]">
          <span className="leading-[28px]">1 QA Engineers</span>
        </li>
      </ul>
    </div>
  );
}

function Container2() {
  return (
    <div className="flex-[1_0_0] h-[220px] min-w-px mr-[-1px] relative" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#1e1c1c] border-b border-r border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[8px] items-start px-[20px] py-[40px] relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#1e1c1c] text-[12px] whitespace-nowrap">Team</p>
        <Container3 />
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="flex-[1_0_0] min-w-px mr-[-1px] relative self-stretch" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#1e1c1c] border-b border-r border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[8px] items-start not-italic px-[20px] py-[40px] relative size-full text-[#1e1c1c]">
        <p className="leading-[16px] relative shrink-0 text-[12px] whitespace-nowrap">Scope</p>
        <ul className="block leading-[0] list-disc min-w-full relative shrink-0 text-[18px] w-[min-content]">
          <li className="mb-0 ms-[27px]">
            <span className="leading-[28px]">UX/UI mobile app design</span>
          </li>
          <li className="ms-[27px]">
            <span className="leading-[28px]">Design system</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="flex-[1_0_0] min-w-px mr-[-1px] relative self-stretch" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#1e1c1c] border-b border-r border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[8px] items-start not-italic px-[20px] py-[40px] relative size-full text-[#1e1c1c]">
        <p className="leading-[16px] relative shrink-0 text-[12px] whitespace-nowrap">Methods</p>
        <ul className="block leading-[0] list-disc min-w-full relative shrink-0 text-[18px] w-[min-content]">
          <li className="mb-0 ms-[27px]">
            <span className="leading-[28px]">User research</span>
          </li>
          <li className="mb-0 ms-[27px]">
            <span className="leading-[28px]">{`Wireframing `}</span>
          </li>
          <li className="ms-[27px]">
            <span className="leading-[28px]">Prototyping</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="flex-[1_0_0] min-w-px mr-[-1px] relative self-stretch" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#1e1c1c] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[8px] items-start not-italic px-[20px] py-[40px] relative size-full text-[#1e1c1c]">
        <p className="leading-[16px] relative shrink-0 text-[12px] whitespace-nowrap">Timeline</p>
        <ul className="block leading-[0] min-w-full relative shrink-0 text-[18px] w-[min-content]">
          <li className="list-disc ms-[27px]">
            <span className="leading-[28px]">4 Months</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[16px] items-start leading-[28px] not-italic relative size-full text-[#1e1c1c] text-[18px]">
        <p className="relative shrink-0 w-full">{`Fishmap is a social mobile app for people who enjoy fishing. Users can share catches, explore fishing spots, and view community data. `}</p>
        <p className="relative shrink-0 w-full">My responsibilties was to build the product experience and make it easier to use.</p>
      </div>
    </div>
  );
}

function ImageOnlyOnePointerOnTheTimeScrubber1() {
  return (
    <div className="aspect-video relative shrink-0 w-full" data-name="Image (Only one pointer on the time scrubber)">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageOnlyOnePointerOnTheTimeScrubber1} />
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[32px] items-start min-w-px relative" data-name="Container">
      <Text />
      <ImageOnlyOnePointerOnTheTimeScrubber1 />
    </div>
  );
}

function ItemDescription() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start justify-center leading-[28px] min-w-px not-italic relative text-[#1e1c1c] text-[18px]" data-name="Item Description">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 w-full">User context</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 w-full">Users often go fishing far from shore, where the internet connection is weak or unstable.</p>
    </div>
  );
}

function Item() {
  return (
    <div className="relative shrink-0 w-full" data-name="Item">
      <div className="content-stretch flex gap-[16px] items-start p-[8px] relative size-full">
        <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Complete">
          <div className="absolute inset-[16.67%_8.33%_12.5%_8.33%]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 17">
              <path d={svgPaths.pfd20a00} fill="var(--fill-0, #FF4800)" id="Vector" />
            </svg>
          </div>
        </div>
        <ItemDescription />
      </div>
    </div>
  );
}

function ItemDescription1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start leading-[28px] min-w-px not-italic relative text-[#1e1c1c] text-[18px]" data-name="Item Description">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 w-full">Time and weather understanding</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 w-full">Fishing depends on time, tides, and weather. These factors affect the real experience and require clear understanding.</p>
    </div>
  );
}

function Item1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Item">
      <div className="content-stretch flex gap-[16px] items-start p-[8px] relative size-full">
        <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Complete">
          <div className="absolute inset-[16.67%_8.33%_12.5%_8.33%]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 17">
              <path d={svgPaths.pfd20a00} fill="var(--fill-0, #FF4800)" id="Vector" />
            </svg>
          </div>
        </div>
        <ItemDescription1 />
      </div>
    </div>
  );
}

function ItemDescription2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start leading-[28px] min-w-px not-italic relative text-[#1e1c1c] text-[18px]" data-name="Item Description">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 w-full">Deep dive research before design</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 w-full">Handled UX/UI design, including user behavior research and competitor analysis to define the right features and solve user pain points.</p>
    </div>
  );
}

function Item2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Item">
      <div className="content-stretch flex gap-[16px] items-start p-[8px] relative size-full">
        <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Complete">
          <div className="absolute inset-[16.67%_8.33%_12.5%_8.33%]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 17">
              <path d={svgPaths.pfd20a00} fill="var(--fill-0, #FF4800)" id="Vector" />
            </svg>
          </div>
        </div>
        <ItemDescription2 />
      </div>
    </div>
  );
}

function List() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="List">
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[20px] relative size-full">
        <Item />
        <Item1 />
        <Item2 />
      </div>
    </div>
  );
}

function ItemList() {
  return (
    <div className="relative shrink-0 w-full" data-name="Item List">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[28px] not-italic relative shrink-0 text-[#1e1c1c] text-[18px] w-full">The app is a place where users can share achievements, discover and save fishing spots. It also tracks maps and weather conditions to help plan ideal fishing trips.</p>
        <List />
      </div>
    </div>
  );
}

function Competitor() {
  return (
    <div className="content-stretch flex items-center justify-center px-[32px] py-[12px] relative rounded-none shrink-0" data-name="Competitor">
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[28px] not-italic relative shrink-0 text-[#1e1c1c] text-[18px] whitespace-nowrap">Fishing Points</p>
    </div>
  );
}

function Competitor1() {
  return (
    <div className="content-stretch flex items-center justify-center px-[32px] py-[12px] relative rounded-none shrink-0" data-name="Competitor">
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[28px] not-italic relative shrink-0 text-[#1e1c1c] text-[18px] whitespace-nowrap">Fishsurfing</p>
    </div>
  );
}

function Competitor2() {
  return (
    <div className="content-stretch flex items-center justify-center px-[32px] py-[12px] relative rounded-none shrink-0" data-name="Competitor">
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[28px] not-italic relative shrink-0 text-[#1e1c1c] text-[18px] whitespace-nowrap">Fishbox</p>
    </div>
  );
}

function CompetitorList() {
  return (
    <div className="content-stretch flex flex-wrap gap-[12px] items-start relative shrink-0 w-full" data-name="Competitor List">
      <Competitor />
      <Competitor1 />
      <Competitor2 />
    </div>
  );
}

function CompetitorSection() {
  return (
    <div className="relative shrink-0 w-full" data-name="Competitor Section">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[28px] min-w-full not-italic relative shrink-0 text-[#1e1c1c] text-[18px] w-[min-content]">Similar apps and solutions already exist in the market.</p>
        <CompetitorList />
      </div>
    </div>
  );
}

function Background() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[40px] items-start min-w-px relative" data-name="Background">
      <ItemList />
      <CompetitorSection />
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start max-w-[400px] min-w-px relative" data-name="Container">
      <p className="font-['PP_NeueBit:Semi_Bold',sans-serif] leading-[56px] min-w-[343px] not-italic relative shrink-0 text-[#1e1c1c] text-[48px] w-full">I wondered that</p>
    </div>
  );
}

function QuestionsContainer() {
  return (
    <div className="relative shrink-0 w-full" data-name="Questions Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start relative size-full">
        <div className="bg-white relative shrink-0 w-full" data-name="Container">
          <div aria-hidden="true" className="absolute border-[#1e1c1c] border-l-3 border-solid inset-0 pointer-events-none shadow-[0px_1px_4px_0px_rgba(0,0,0,0.04)]" />
          <div className="content-stretch flex flex-col gap-[8px] items-start not-italic px-[32px] py-[20px] relative size-full">
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] relative shrink-0 text-[#1e1c1c] text-[18px] w-full">How can users post when they don’t have internet?</p>
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#626060] text-[16px] w-full">Save draft, post later, set reminder</p>
          </div>
        </div>
        <div className="bg-white relative shrink-0 w-full" data-name="Container">
          <div aria-hidden="true" className="absolute border-[#1e1c1c] border-l-3 border-solid inset-0 pointer-events-none shadow-[0px_1px_4px_0px_rgba(0,0,0,0.04)]" />
          <div className="content-stretch flex flex-col gap-[8px] items-start not-italic px-[32px] py-[20px] relative size-full">
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] relative shrink-0 text-[#1e1c1c] text-[18px] w-full">How can the product make money?</p>
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#626060] text-[16px] w-full">Users don’t like ads. When they search near fishing gear, we can suggest related products from partner shops.</p>
          </div>
        </div>
        <div className="bg-white relative shrink-0 w-full" data-name="Container">
          <div aria-hidden="true" className="absolute border-[#1e1c1c] border-l-3 border-solid inset-0 pointer-events-none shadow-[0px_1px_4px_0px_rgba(0,0,0,0.04)]" />
          <div className="content-stretch flex flex-col gap-[8px] items-start not-italic px-[32px] py-[20px] relative size-full">
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] relative shrink-0 text-[#1e1c1c] text-[18px] w-full">What makes this app different from other social apps?</p>
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#626060] text-[16px] w-full">Focus on features that help the app grow naturally and keep users coming back.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[32px] items-start min-w-px relative" data-name="Container">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[28px] not-italic relative shrink-0 text-[#626060] text-[18px] w-full">We anchored our decisions around a few key questions. Each design choice connects back to one of them.</p>
      <QuestionsContainer />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex items-center justify-between mb-[-2px] relative shrink-0 w-full">
      <div className="bg-[#1e1c1c] shrink-0 size-[8px]" />
      <div className="bg-[#1e1c1c] shrink-0 size-[8px]" />
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 w-full" data-name="Container">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] relative shrink-0 text-[#1e1c1c] text-[20px] w-full">1. Put the solution on the first screen</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#626060] text-[16px] w-full">Make the main action visible from the start so users can access it quickly.</p>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 w-full" data-name="Container">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] relative shrink-0 text-[#1e1c1c] text-[20px] w-full">2. Design is not decoration</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#626060] text-[16px] w-full">Form and function should work together.</p>
    </div>
  );
}

function RedesignContainer() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full" data-name="Redesign Container">
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[20px] items-start min-w-px overflow-clip relative" data-name="ScreenCard">
        <Container12 />
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[20px] items-start min-w-px overflow-clip relative" data-name="ScreenCard">
        <Container13 />
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 w-full" data-name="Container">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] relative shrink-0 text-[#1e1c1c] text-[20px] w-full">3. Reduce user cognitive load</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#626060] text-[16px] w-full">Make it easy to use by following familiar patterns.</p>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 w-full" data-name="Container">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] relative shrink-0 text-[#1e1c1c] text-[20px] w-full">4. Stay open to change</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#626060] text-[16px] w-full">Be ready to test, discuss, and improve the solution over time.</p>
    </div>
  );
}

function RedesignContainer1() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full" data-name="Redesign Container">
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[20px] items-start min-w-px overflow-clip relative" data-name="ScreenCard">
        <Container14 />
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[20px] items-start min-w-px overflow-clip relative" data-name="ScreenCard">
        <Container15 />
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-full" data-name="Container">
      <RedesignContainer />
      <RedesignContainer1 />
    </div>
  );
}

function Container10() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#1e1c1c] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start p-[40px] relative size-full">
        <Container11 />
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="mb-[-2px] relative shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start px-[7px] relative size-full">
        <Container10 />
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex items-center justify-between relative w-full">
      <div className="bg-[#1e1c1c] shrink-0 size-[8px]" />
      <div className="bg-[#1e1c1c] shrink-0 size-[8px]" />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[2px] relative shrink-0 w-full">
      <Frame />
      <Frame3 />
      <div className="flex items-center justify-center mb-[-2px] relative shrink-0 w-full">
        <div className="-scale-y-100 flex-none w-full">
          <Frame4 />
        </div>
      </div>
    </div>
  );
}

function ImageOnlyOnePointerOnTheTimeScrubber2() {
  return (
    <div className="aspect-[612/400] relative shrink-0 w-full" data-name="Image (Only one pointer on the time scrubber)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageOnlyOnePointerOnTheTimeScrubber2} />
    </div>
  );
}

function Container16() {
  return (
    <DetailHighlightsGrid
      items={[
        {
          title: "Find good fishing spots before the trip",
          description: "Users can explore different locations and choose the best place to catch.",
          imageSrc: imgImageOnlyOnePointerOnTheTimeScrubber2,
        },
        {
          title: "Make tracking simple and clear",
          description: "Informagraphics help users track their fishing time easily without guessing.",
          imageSrc: imgImageOnlyOnePointerOnTheTimeScrubber3,
        },
        {
          title: "Connect with nearby anglers",
          description: "Users get updates about people fishing nearby. They can see recent catches and join the local activity.",
          imageSrc: imgImageOnlyOnePointerOnTheTimeScrubber4,
        },
        {
          title: "Save catches without internet",
          description: "Users can log their catch even when there is no signal. The app will upload it later when they are online.",
          imageSrc: imgImageOnlyOnePointerOnTheTimeScrubber5,
        },
      ]}
    />
  );
}

function Container21() {
  return (
    <DetailResultsShowcase
      items={[
        {
          value: "100K+ users",
          description: "The app reached over 100,000 users from launch until now.",
        },
        {
          value: "↓",
          description: "Users can find fishing spots faster based on weather and nearby areas.",
        },
        {
          value: "14M+ catches",
          description: "Users logged over 14 million catches in the system.",
        },
      ]}
      previewSrc={imgImageFigmaDesignPreview}
    />
  );
}

function ImpactContainer() {
  return <Container21 />;
}

function Container22() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-w-px relative" data-name="Container">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#626060] text-[16px] w-full">To build a useful product that can survive in the market, we must understand both the product, the users, and the context they are in.</p>
      <DetailQuoteBlock>Understand users — each person has a different context</DetailQuoteBlock>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#626060] text-[16px] w-full">By observing both real-life fishing journeys and in-app experiences, I can see where users face difficulties.</p>
    </div>
  );
}

function MoreWorkContainer() {
  return (
    <DetailMoreWorksGrid
      items={[
        {
          title: "UniVini",
          description: "Social application for expats & locals",
          imageSrc: imgImage3ATransparentPriceStructure,
          href: "/work/univini",
        },
        {
          title: "Supership",
          description: "Logistics platform",
          imageSrc: imgImage3ATransparentPriceStructure1,
          href: "/work/supership",
        },
        {
          title: "Fishmap",
          description: "Social app for anglers",
          imageSrc: imgImage3ATransparentPriceStructure2,
          href: "/work/fishmap",
        },
      ]}
    />
  );
}

function Link() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.59px] relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#fefcfc] text-[28px] whitespace-nowrap">
        <p className="leading-[40px]">lnson1551@gmail.com</p>
      </div>
    </div>
  );
}

function Svg() {
  return (
    <div className="relative shrink-0 size-[30px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
        <g id="SVG">
          <path d={svgPaths.p27a4ec00} fill="var(--fill-0, #FEFCFC)" id="Vector" />
          <path d={svgPaths.p30a3c2f0} fill="var(--fill-0, #FEFCFC)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function LinkedIn() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] content-stretch flex items-center justify-center relative shrink-0 size-[60px]" data-name="LinkedIn">
      <Svg />
    </div>
  );
}

function Svg1() {
  return (
    <div className="relative shrink-0 size-[30px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
        <g id="SVG">
          <path clipRule="evenodd" d={svgPaths.p231cb220} fill="var(--fill-0, #FEFCFC)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function LinkDribbble() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] content-stretch flex items-center justify-center relative shrink-0 size-[60px]" data-name="Link - Dribbble">
      <Svg1 />
    </div>
  );
}

function Svg2() {
  return (
    <div className="relative shrink-0 size-[30px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
        <g id="SVG">
          <path d={svgPaths.pe366f00} fill="var(--fill-0, #FEFCFC)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function LinkXTwitter() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] content-stretch flex items-center justify-center relative shrink-0 size-[60px]" data-name="Link - X (Twitter)">
      <Svg2 />
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex gap-[22px] items-center relative shrink-0" data-name="Container">
      <LinkedIn />
      <LinkDribbble />
      <LinkXTwitter />
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Link />
      <Container27 />
    </div>
  );
}

function ProjectPageFishmap() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px pb-px relative" data-name="Project page /Fishmap">
      <div className="bg-[#0015b7] h-[800px] mb-[-1px] relative shrink-0 w-full" data-name="Hero/Variant2">
        <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col items-center justify-center px-[60px] py-[96px] relative size-full">
            <Container1 />
            <SummaryContainer />
            <Logo />
            <ContactContainer />
          </div>
        </div>
      </div>
      <div className="mb-[-1px] relative shrink-0 w-full" data-name="TeamBar">
        <div className="content-stretch flex items-start overflow-clip pr-px relative rounded-[inherit] size-full">
          <Container2 />
          <Container4 />
          <Container5 />
          <Container6 />
        </div>
        <div aria-hidden="true" className="absolute border-[#1e1c1c] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="mb-[-1px] relative shrink-0 w-full" data-name="ContextSection">
        <div className="content-start flex flex-wrap gap-[80px] items-start px-[60px] py-[96px] relative size-full">
          <p className="flex-[1_0_0] font-['PP_NeueBit:Semi_Bold',sans-serif] leading-[56px] max-w-[400px] min-w-[343px] not-italic relative text-[#1e1c1c] text-[48px]">A little context</p>
          <Container7 />
        </div>
      </div>
      <div className="mb-[-1px] relative shrink-0 w-full" data-name="ContextSection">
        <div className="content-start flex flex-wrap gap-[80px] items-start px-[60px] py-[96px] relative size-full">
          <p className="flex-[1_0_0] font-['PP_NeueBit:Semi_Bold',sans-serif] leading-[56px] max-w-[400px] min-w-[343px] not-italic relative text-[#1e1c1c] text-[48px]">My challenges</p>
          <Background />
        </div>
      </div>
      <div className="mb-[-1px] relative shrink-0 w-full" data-name="QuestionsSection">
        <div className="content-start flex flex-wrap gap-[80px] items-start px-[60px] py-[96px] relative size-full">
          <Container8 />
          <Container9 />
        </div>
      </div>
      <div className="mb-[-1px] relative shrink-0 w-full" data-name="DesignPlanSection">
        <div className="content-stretch flex flex-col gap-[40px] items-start px-[60px] py-[96px] relative size-full">
          <p className="font-['PP_NeueBit:Semi_Bold',sans-serif] leading-[56px] min-w-[343px] not-italic relative shrink-0 text-[#1e1c1c] text-[48px] w-full">The redesign, built on four key principles</p>
          <Frame2 />
        </div>
      </div>
      <div className="mb-[-1px] relative shrink-0 w-full" data-name="DiagnosisSection">
        <div className="content-stretch flex flex-col gap-[40px] items-start px-[60px] py-[96px] relative size-full">
          <p className="font-['PP_NeueBit:Semi_Bold',sans-serif] leading-[56px] min-w-[343px] not-italic relative shrink-0 text-[#1e1c1c] text-[48px] w-full">Some hightlights features</p>
          <Container16 />
        </div>
      </div>
      <div className="bg-[#0015b7] mb-[-1px] relative shrink-0 w-full" data-name="ImpactSection">
        <div className="overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[40px] items-start px-[60px] py-[96px] relative size-full">
            <p className="font-['PP_NeueBit:Semi_Bold',sans-serif] leading-[56px] not-italic relative shrink-0 text-[#fefcfc] text-[48px] w-full">Results</p>
            <ImpactContainer />
          </div>
        </div>
      </div>
      <div className="bg-[#f6f6f6] mb-[-1px] relative shrink-0 w-full" data-name="ReflectionSection">
        <div className="content-start flex flex-wrap gap-[80px] items-start px-[60px] py-[96px] relative size-full">
          <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[44px] max-w-[400px] min-w-[343px] not-italic relative text-[#1e1c1c] text-[32px]">What this taught me</p>
          <Container22 />
        </div>
      </div>
      <div className="bg-[#f6f6f6] mb-[-1px] relative shrink-0 w-full" data-name="ReflectionSection">
        <div className="content-stretch flex flex-col gap-[40px] items-start px-[60px] py-[96px] relative size-full">
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[44px] max-w-[400px] min-w-[343px] not-italic relative shrink-0 text-[#1e1c1c] text-[32px] w-full">More works</p>
          <MoreWorkContainer />
        </div>
      </div>
      <div className="bg-[#1e1c1c] mb-[-1px] relative shrink-0 w-full" data-name="Footer">
        <div className="flex flex-col items-center justify-center size-full">
          <div className="content-stretch flex flex-col gap-[20px] items-center justify-center px-[60px] py-[40px] relative size-full">
            <Container26 />
            <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#d6d6d6] text-[14px] w-full">
              <p className="leading-[21px]">© 2026 All Rights Reserved – by Name</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function FishmapSocialAppForFishers() {
  return (
    <div className="bg-[#f6f6f6] content-stretch flex items-start relative size-full" data-name="Fishmap - Social app for fishers">
      <div className="bg-[#0015b7] content-stretch flex flex-col h-[800px] items-start justify-between shrink-0 sticky top-0 w-[160px]" data-name="Menu">
        <div aria-hidden="true" className="absolute border-[#fefcfc] border-r border-solid inset-0 pointer-events-none" />
        <Header />
        <Container />
        <NavItem3 />
      </div>
      <ProjectPageFishmap />
    </div>
  );
}
