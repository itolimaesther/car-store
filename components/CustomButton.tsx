"use client"

import { CustomButtonProps } from "@/types"
import Image from "next/image"

const CustomButton = ({title, containerStyle, textStyles, rightIcon, isDisabled, handleClick, btnType}: CustomButtonProps) => {
  return (
        <button disabled={false} type={btnType 
        || "button"} className = {`custom-btn ${containerStyle}`}
        onClick={handleClick}
        >
          <span className={`flex-1 ${textStyles}`}>
              {title}
      </span>
      {rightIcon && (
        <div className="relative w-6 h-6">
          <Image
            src={rightIcon}
            fill
            className="object-contain"
            alt="right Icon"
          />
        </div>
      )}
    </button>
  )
}

export default CustomButton