import React from 'react'
import CustomInputs from '../common/fields/CustomInput'

const CreateCommunity = () => {
    return (
        <div className="flex flex-col w-full">
            <div className="h-[80px] w-full bg-white border-b-2">
            </div>
            <div className="w-full  min-h-[calc(100vh-80px)] p-5 md:p-6">
                <div className="border-[1px] rounded-2xl bg-whitesmoke  p-[22px]">
                    <h2 className='text-black ff_satoshi_black leading-[100%] text-2xl md:text-[28px]'>Create New Community</h2>
                    <form action="">
                        <div className='mt-5'>
                            <label htmlFor="" >Community Name</label>
                            <div className='pt-[10px]'>
                                <CustomInputs
                                    type="number"
                                    placeholder="UI/UX"
                                />
                                <p>This is your community’s display name</p>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CreateCommunity