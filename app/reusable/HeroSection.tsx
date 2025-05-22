// components/HeroSection.tsx
import Image from "next/image";
import Link from "next/link";

interface HeroSectionProps {
  title?: string;
  description?: string;
  imageSrc?: string;
  iconSrc?: string;
  ImageWrapper?:string;
  buttonText?: string;
  buttonLink?: string;
  className?: string;
}

export default function HeroSection({
  title,
  description,
  imageSrc,
  ImageWrapper,
  iconSrc,
  buttonText,
  buttonLink,
  className = "", 
}: HeroSectionProps) {
  return (
    <div className={`bg-[#5f6fff] rounded-md ${className}`}>
      <div className="flex mt-10">
        <div className="flex-1 pl-18 pt-25 flex flex-col space-y-2">
          {title && (
            <h2 className="text-[48px] font-semibold leading-tight text-white">
              {title}
            </h2>
          )}
          {description && iconSrc && (
            <div className="flex items-center pt-6 gap-2">
              <Image src={iconSrc} alt="icon" width={120} height={40} />
              <p className="text-[18px] text-white">{description}</p>
            </div>
          )}
          {buttonText && buttonLink && (
            <div className="flex pt-6">
              <Link
                href={buttonLink}
                className="px-8 py-3 bg-[#ffffff] text-[#595959] rounded-full flex items-center space-x-2"
              >
                <span>{buttonText}</span>
                <Image
                  src="/arrow.svg"
                  alt="arrow-icon"
                  width={14}
                  height={10}
                />
              </Link>
            </div>
          )}
        </div>
        {imageSrc && (
          <div className="flex-1 bg-center  max-w-full">
            <Image
              src={imageSrc}
              alt="header-img"
              width={882}
              height={596}
            className={ImageWrapper}
            />
          </div>
        )}
      </div>
    </div>
  );
}
