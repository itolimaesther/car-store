'use client'

import { useState, Fragment } from 'react'
import { ShowMoreProps } from '@/types'
import { useRouter } from 'next/navigation'
import CustomButton from './CustomButton'
import { updateSearchParams } from '@/utils'

const ShowMore = ({ pageNumber, isNext, setLimit }: ShowMoreProps) => {
    // const router = useRouter();

    const handleNavigation = () => {
        const newLimit = (pageNumber + 1) * 10
        setLimit(newLimit)
    }

  return (
      <div className='w-full flex-center gap-5 mt-10'>
          {!isNext && (
              <CustomButton
                  title="Show more"
                  btnType='button'
                  containerStyle='bg-primary-blue rounded-full text-white'
                  handleClick={handleNavigation}

              />
          )}
    </div>
  )
}

export default ShowMore