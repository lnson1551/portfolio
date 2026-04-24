import svgPaths from "./svg-huoidrh0vm";
// Hero + design screenshots → Supership card image (verified working)
import imgSupershipCard from "../assets/figma-home/card-supership.png";
import imgSummaryImage from "../assets/figma-home/card-supership.png";
import imgSupershipLogo from "../../Supership/Logo Supership.png";
import imgContextHighlight from "../../Supership/sps-c1.png";
import imgHighlightScan from "../../Supership/sps-f4.png";
import imgHighlightPersonalized from "../../Supership/sps-f3.png";
import imgHighlightTemplates from "../../Supership/sps-f1.png";
import imgHighlightCOD from "../../Supership/sps-f2.png";
import imgImageFigmaDesignPreview from "../../Supership/sps-r1.png";
import imgImage3ATransparentPriceStructure from "../assets/figma-home/card-univini.png";
import imgImage3ATransparentPriceStructure1 from "../../Supership/sps-r1.png";
import imgImage3ATransparentPriceStructure2 from "../assets/figma-home/card-fishmap.png";
import { DetailQuoteBlock } from "../app/components/detail-page/molecules/DetailQuoteBlock";
import { DetailScreenCard } from "../app/components/detail-page/molecules/DetailScreenCard";
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
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[#fefcfc] text-[16px] whitespace-nowrap">[ Logistics platform ]</p>
    </div>
  );
}

function ProjectInfo() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center max-w-[612px] relative shrink-0 w-full" data-name="Project Info">
      <p className="font-['PP_NeueBit:Semi_Bold',sans-serif] leading-[72px] not-italic relative shrink-0 text-[#fefcfc] text-[80px] whitespace-nowrap">Supership</p>
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
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgSupershipCard} />
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
      <div className="absolute bottom-[4px] flex h-[80px] items-center justify-center left-0 w-[145px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="h-[80px] relative w-[145px]" data-name="Summary Image">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[180.85%] left-0 max-w-none top-[-36.7%] w-full" src={imgSummaryImage} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SummaryContainer() {
  return (
    <div className="absolute h-[180px] left-[63px] top-[588px] w-[400px]" data-name="Summary Container">
      <SummaryDetails />
    </div>
  );
}

function Logo() {
  return (
    <div className="absolute bottom-[48px] content-stretch flex flex-col items-start right-[60px]" data-name="Logo">
      <div className="h-[48px] relative shrink-0 w-[157px]" data-name="Supership Logo">
        <img alt="Supership logo" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgSupershipLogo} />
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
          <a className="cursor-pointer leading-[16px]" href="https://www.linkedin.com/in/seav" target="_blank">
            <span href="https://www.linkedin.com/in/seav" target="_blank">{`linkedin.com/in/seav`}</span>
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
          <span className="leading-[28px]">Concept direction based on branding</span>
        </li>
        <li className="ms-[27px]">
          <span className="leading-[28px]">Consult UX enhancement</span>
        </li>
      </ul>
    </div>
  );
}

function Container2() {
  return (
    <div className="flex-[1_0_0] min-w-px mr-[-1px] relative self-stretch" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#1e1c1c] border-b border-r border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[8px] items-start px-[16px] py-[40px] relative size-full">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#1e1c1c] text-[14px] whitespace-nowrap">Target</p>
        <Container3 />
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="flex-[1_0_0] min-w-px mr-[-1px] relative self-stretch" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#1e1c1c] border-b border-r border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[8px] items-start not-italic px-[16px] py-[40px] relative size-full text-[#1e1c1c]">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[14px] whitespace-nowrap">Scope</p>
        <ul className="block font-['Inter:Regular',sans-serif] font-normal leading-[0] list-disc min-w-full relative shrink-0 text-[18px] w-[min-content]">
          <li className="mb-0 ms-[27px]">
            <span className="leading-[28px]">Redesign all platforms included: Mobile app, Website</span>
          </li>
          <li className="mb-0 ms-[27px]">
            <span className="leading-[28px]">Landing page</span>
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
      <div className="content-stretch flex flex-col gap-[8px] items-start not-italic px-[16px] py-[40px] relative size-full text-[#1e1c1c]">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[14px] whitespace-nowrap">Methods</p>
        <ul className="block font-['Inter:Regular',sans-serif] font-normal leading-[0] list-disc min-w-full relative shrink-0 text-[18px] w-[min-content]">
          <li className="mb-0 ms-[27px]">
            <span className="leading-[28px]">User research</span>
          </li>
          <li className="mb-0 ms-[27px]">
            <span className="leading-[28px]">{`System design `}</span>
          </li>
          <li className="mb-0 ms-[27px]">
            <span className="leading-[28px]">UI Design</span>
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
      <div className="content-stretch flex flex-col gap-[8px] items-start not-italic px-[16px] py-[40px] relative size-full text-[#1e1c1c]">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[14px] whitespace-nowrap">Timeline</p>
        <ul className="block font-['Inter:Regular',sans-serif] font-normal leading-[0] min-w-full relative shrink-0 text-[18px] w-[min-content]">
          <li className="list-disc ms-[27px]">
            <span className="leading-[28px]">2 Months</span>
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
        <p className="relative shrink-0 w-full">SuperShip is a delivery service built for e-commerce sellers. It focuses on fast delivery, reliable cash-on-delivery (COD), and strong customer support.</p>
        <p className="relative shrink-0 w-full">The system is designed to help sellers manage orders more efficiently, reduce delivery issues, and meet real business needs at scale.</p>
      </div>
    </div>
  );
}

function ImageContextHighlight() {
  return (
    <div className="aspect-video relative shrink-0 w-full" data-name="Image (Only one pointer on the time scrubber)">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgContextHighlight} />
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[32px] items-start min-w-px relative" data-name="Container">
      <Text />
      <ImageContextHighlight />
    </div>
  );
}

function ItemDescription() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start justify-center leading-[28px] min-w-px not-italic relative text-[#1e1c1c] text-[18px]" data-name="Item Description">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 w-full">Platform consistency</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 w-full">Keep content and experience aligned across different platforms.</p>
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
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 w-full">Consistent branding style</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 w-full">Control how often the brand color appears to avoid overuse and keep a balanced interface.</p>
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
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 w-full">Improve user experience based on behavior</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 w-full">Users often enter repeated information and create many orders per day, which can lead to errors and slow workflows.</p>
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
      <div className="content-stretch flex flex-col gap-[8px] items-start p-[20px] relative size-full">
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
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[28px] not-italic relative shrink-0 text-[#1e1c1c] text-[18px] w-full">The app needs to stay with branding while keeping a simple and user-friendly style to keep a consistent experience across platforms to maintain trust and professionalism.</p>
        <List />
      </div>
    </div>
  );
}

function Competitor() {
  return (
    <div className="content-stretch flex items-center justify-center px-[32px] py-[12px] relative rounded-none shrink-0" data-name="Competitor">
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[28px] not-italic relative shrink-0 text-[#1e1c1c] text-[18px] whitespace-nowrap">Viettel post</p>
    </div>
  );
}

function Competitor1() {
  return (
    <div className="content-stretch flex items-center justify-center px-[32px] py-[12px] relative rounded-none shrink-0" data-name="Competitor">
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[28px] not-italic relative shrink-0 text-[#1e1c1c] text-[18px] whitespace-nowrap">Lalamove</p>
    </div>
  );
}

function Competitor2() {
  return (
    <div className="content-stretch flex items-center justify-center px-[32px] py-[12px] relative rounded-none shrink-0" data-name="Competitor">
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[28px] not-italic relative shrink-0 text-[#1e1c1c] text-[18px] whitespace-nowrap">Fishbran</p>
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
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] relative shrink-0 text-[#1e1c1c] text-[18px] w-full">Can we improve without confusing users?</p>
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#626060] text-[16px] w-full">Changes should make the product better, but still feel familiar.</p>
          </div>
        </div>
        <div className="bg-white relative shrink-0 w-full" data-name="Container">
          <div aria-hidden="true" className="absolute border-[#1e1c1c] border-l-3 border-solid inset-0 pointer-events-none shadow-[0px_1px_4px_0px_rgba(0,0,0,0.04)]" />
          <div className="content-stretch flex flex-col gap-[8px] items-start not-italic px-[32px] py-[20px] relative size-full">
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] relative shrink-0 text-[#1e1c1c] text-[18px] w-full">How can we reduce repeated input?</p>
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#626060] text-[16px] w-full">Repeated tasks slow users down and increase mistakes.</p>
          </div>
        </div>
        <div className="bg-white relative shrink-0 w-full" data-name="Container">
          <div aria-hidden="true" className="absolute border-[#1e1c1c] border-l-3 border-solid inset-0 pointer-events-none shadow-[0px_1px_4px_0px_rgba(0,0,0,0.04)]" />
          <div className="content-stretch flex flex-col gap-[8px] items-start not-italic px-[32px] py-[20px] relative size-full">
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] relative shrink-0 text-[#1e1c1c] text-[18px] w-full">Are we solving a real problem?</p>
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#626060] text-[16px] w-full">Not every feature adds value - some only add noise.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[32px] items-start min-w-px relative" data-name="Container">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[28px] not-italic relative shrink-0 text-[#626060] text-[18px] w-full">{`We anchored every decision to four honest design questions. These weren't rhetorical — every design choice had to trace back to at least one of them.`}</p>
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

function ImageHighlightScan() {
  return (
    <div className="aspect-[612/400] relative shrink-0 w-full" data-name="Image (Only one pointer on the time scrubber)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgHighlightScan} />
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 w-full" data-name="Container">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] relative shrink-0 text-[#1e1c1c] text-[20px] w-full">Make information easy to scan</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#626060] text-[16px] w-full">Show key order details clearly so users can check and manage orders quickly.</p>
    </div>
  );
}

function ScreenCard() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[20px] items-start min-w-px overflow-clip relative" data-name="ScreenCard">
      <ImageHighlightScan />
      <Container17 />
    </div>
  );
}

function ImageHighlightPersonalized() {
  return (
    <div className="aspect-[612/400] relative shrink-0 w-full" data-name="Image (Only one pointer on the time scrubber)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgHighlightPersonalized} />
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 w-full" data-name="Container">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] relative shrink-0 text-[#1e1c1c] text-[20px] w-full">Personalized app experience</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#626060] text-[16px] w-full">Let users tailor the interface and content to their workflow, increasing engagement and sense of ownership.</p>
    </div>
  );
}

function ScreenCard1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[20px] items-start min-w-px overflow-clip relative" data-name="ScreenCard">
      <ImageHighlightPersonalized />
      <Container18 />
    </div>
  );
}

function FindingsContainer() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full" data-name="Findings Container">
      <ScreenCard />
      <ScreenCard1 />
    </div>
  );
}

function ImageHighlightTemplates() {
  return (
    <div className="aspect-[612/400] relative shrink-0 w-full" data-name="Image (Only one pointer on the time scrubber)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgHighlightTemplates} />
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 w-full" data-name="Container">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] relative shrink-0 text-[#1e1c1c] text-[20px] w-full">Reduce repeated input with templates</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#626060] text-[16px] w-full">Users can save common information and reuse it to create orders faster.</p>
    </div>
  );
}

function ScreenCard2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[20px] items-start min-w-px overflow-clip relative" data-name="ScreenCard">
      <ImageHighlightTemplates />
      <Container19 />
    </div>
  );
}

function ImageHighlightCOD() {
  return (
    <div className="aspect-[612/400] relative shrink-0 w-full" data-name="Image (Only one pointer on the time scrubber)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgHighlightCOD} />
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 w-full" data-name="Container">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] relative shrink-0 text-[#1e1c1c] text-[20px] w-full">Clear and transparent COD tracking</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#626060] text-[16px] w-full">Display payment status and COD clearly to help users track their money with confidence.</p>
    </div>
  );
}

function ScreenCard3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[20px] items-start min-w-px overflow-clip relative" data-name="ScreenCard">
      <ImageHighlightCOD />
      <Container20 />
    </div>
  );
}

function FindingsContainer1() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full" data-name="Findings Container">
      <ScreenCard2 />
      <ScreenCard3 />
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-full" data-name="Container">
      <FindingsContainer />
      <FindingsContainer1 />
    </div>
  );
}

function Container21() {
  return (
    <DetailResultsShowcase
      items={[
        {
          value: "100% adoption",
          description: "All screens use the components and styles.",
        },
        {
          value: "↓",
          description: "Buid one design system for app and web helps reduce development time.",
        },
        {
          value: "Consistency",
          description: "All platforms follow the same brand guidelines, making it easy for users to switch between them.",
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
      <div className="font-['Inter:Regular',sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#626060] text-[16px] w-full">
        <p className="leading-[24px] mb-0">This was my first time redesigning a full system with a large user base and strong business impact.</p>
        <p className="leading-[24px]">Every decision had to be carefully considered, especially those related to users’ money.</p>
      </div>
      <DetailQuoteBlock>Improving a product is important, but changes must make users feel comfortable, bring real value, and support business growth.</DetailQuoteBlock>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#626060] text-[16px] w-full">Building a product should focus on sustainability — reusable, scalable, and reducing the need for full redesigns in the future.</p>
    </div>
  );
}

function Image3ATransparentPriceStructure() {
  return (
    <div className="aspect-[612/400] relative shrink-0 w-full" data-name="Image (3. A Transparent Price Structure)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage3ATransparentPriceStructure} />
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 w-full" data-name="Container">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] relative shrink-0 text-[#1e1c1c] text-[20px] w-full">UniVini</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#626060] text-[16px] w-full">Social application for expats &amp; locals</p>
    </div>
  );
}

function Image3ATransparentPriceStructure1() {
  return (
    <div className="aspect-[612/400] relative shrink-0 w-full" data-name="Image (3. A Transparent Price Structure)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage3ATransparentPriceStructure1} />
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 w-full" data-name="Container">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] relative shrink-0 text-[#1e1c1c] text-[20px] w-full">Supership</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#626060] text-[16px] w-full">Logistics platform</p>
    </div>
  );
}

function Image3ATransparentPriceStructure2() {
  return (
    <div className="aspect-[612/400] relative shrink-0 w-full" data-name="Image (3. A Transparent Price Structure)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage3ATransparentPriceStructure2} />
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 w-full" data-name="Container">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] relative shrink-0 text-[#1e1c1c] text-[20px] w-full">Fishmap</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#626060] text-[16px] w-full">Social app for anglers</p>
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

function ProjectPageSupership() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px pb-px relative" data-name="Project page / Supership">
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
        <div className="grid grid-cols-1 lg:grid-cols-4 relative w-full">
          <div className="relative">
            <div aria-hidden="true" className="absolute border-[#1e1c1c] border-b lg:border-r border-solid inset-0 pointer-events-none" />
            <div className="content-stretch flex flex-col gap-[8px] items-start px-[16px] py-[40px] relative size-full">
              <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#1e1c1c] text-[14px] whitespace-nowrap">Target</p>
              <ul className="block font-['Inter:Regular',sans-serif] font-normal leading-[0] list-disc not-italic relative shrink-0 text-[#1e1c1c] text-[18px] w-full">
                <li className="mb-0 ms-[27px]">
                  <span className="leading-[28px]">Concept direction based on branding</span>
                </li>
                <li className="ms-[27px]">
                  <span className="leading-[28px]">Consult UX enhancement</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="relative">
            <div aria-hidden="true" className="absolute border-[#1e1c1c] border-b lg:border-r border-solid inset-0 pointer-events-none" />
            <div className="content-stretch flex flex-col gap-[8px] items-start px-[16px] py-[40px] relative size-full">
              <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#1e1c1c] text-[14px] whitespace-nowrap">Scope</p>
              <ul className="block font-['Inter:Regular',sans-serif] font-normal leading-[0] list-disc not-italic relative shrink-0 text-[#1e1c1c] text-[18px] w-full">
                <li className="mb-0 ms-[27px]">
                  <span className="leading-[28px]">Redesign all platforms included: Mobile app, Website</span>
                </li>
                <li className="mb-0 ms-[27px]">
                  <span className="leading-[28px]">Landing page</span>
                </li>
                <li className="ms-[27px]">
                  <span className="leading-[28px]">Design system</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="relative">
            <div aria-hidden="true" className="absolute border-[#1e1c1c] border-b lg:border-r border-solid inset-0 pointer-events-none" />
            <div className="content-stretch flex flex-col gap-[8px] items-start px-[16px] py-[40px] relative size-full">
              <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#1e1c1c] text-[14px] whitespace-nowrap">Methods</p>
              <ul className="block font-['Inter:Regular',sans-serif] font-normal leading-[0] list-disc not-italic relative shrink-0 text-[#1e1c1c] text-[18px] w-full">
                <li className="mb-0 ms-[27px]">
                  <span className="leading-[28px]">User research</span>
                </li>
                <li className="mb-0 ms-[27px]">
                  <span className="leading-[28px]">System design</span>
                </li>
                <li className="mb-0 ms-[27px]">
                  <span className="leading-[28px]">UI Design</span>
                </li>
                <li className="ms-[27px]">
                  <span className="leading-[28px]">Prototyping</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="relative">
            <div aria-hidden="true" className="absolute border-[#1e1c1c] border-b border-solid inset-0 pointer-events-none" />
            <div className="content-stretch flex flex-col gap-[8px] items-start px-[16px] py-[40px] relative size-full">
              <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#1e1c1c] text-[14px] whitespace-nowrap">Timeline</p>
              <ul className="block font-['Inter:Regular',sans-serif] font-normal leading-[0] list-disc not-italic relative shrink-0 text-[#1e1c1c] text-[18px] w-full">
                <li className="list-disc ms-[27px]">
                  <span className="leading-[28px]">2 Months</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-[-1px] relative shrink-0 w-full" data-name="ContextSection">
        <div className="content-start flex flex-wrap gap-[80px] items-start px-[60px] py-[96px] relative size-full">
          <p className="flex-[1_0_0] font-['PP_NeueBit:Semi_Bold',sans-serif] leading-[56px] max-w-[400px] min-w-[343px] not-italic relative text-[#1e1c1c] text-[48px]">A little context</p>
          <Container7 />
        </div>
      </div>
      <div className="mb-[-1px] relative shrink-0 w-full" data-name="ContextSection">
        <div className="content-start flex flex-wrap gap-[80px] items-start px-[60px] py-[96px] relative size-full">
          <p className="flex-[1_0_0] font-['PP_NeueBit:Semi_Bold',sans-serif] leading-[56px] max-w-[400px] min-w-[343px] not-italic relative text-[#1e1c1c] text-[48px]">Challenges</p>
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

export default function SupershipLogisticsPlatform() {
  return (
    <div className="bg-[#f6f6f6] content-stretch flex items-start relative size-full" data-name="Supership - Logistics platform">
      <div className="bg-[#0015b7] content-stretch flex flex-col h-[800px] items-start justify-between shrink-0 sticky top-0 w-[160px]" data-name="Menu">
        <div aria-hidden="true" className="absolute border-[#fefcfc] border-r border-solid inset-0 pointer-events-none" />
        <Header />
        <Container />
        <NavItem3 />
      </div>
      <ProjectPageSupership />
    </div>
  );
}
