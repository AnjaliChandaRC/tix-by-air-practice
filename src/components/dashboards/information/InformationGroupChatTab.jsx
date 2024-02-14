import React, { useState } from 'react';
import CustomInputs from '@/components/common/fields/CustomInput';
import { myMessagesList, senderMessagesList } from '@/utils/CreatorsHelper';
import Image from 'next/image';
import { SendMessage } from '../common/icons/InformationIcos';

const InformationGroupChatTab = () => {
    const [inputText, setInputText] = useState('');

    const handleInputChange = (e) => {
        setInputText(e.target.value);
    };

    const handleSendMessage = () => {
        if (inputText.trim() !== '') {
            const newMessage = {
                image: '', // Set image source if available
                title: 'Your Name', // Set the sender's name
                description: inputText,
                time: new Date().toLocaleTimeString(), // Set the current time
            };
            myMessagesList.push(newMessage); // Add the new message to the list
            setInputText(''); // Clear the input field
        }
    };
const KeyPressHandler =(e)=>{
    if(e.key === "Enter"){
        handleSendMessage()
    }
}
    return (
        <>
            <div className='mt-8 pb-12 h-[calc(100vh-315px)] overflow-y-auto scroll_bar_none px-[23px]'>
                {/* Rendering received messages */}
                {senderMessagesList.map((obj, index) => (
                    <div key={index} className='bg-albescentwhite rounded-[0px_16px_16px_16px] w-full max-w-[401px] pt-[15px] px-[9px] pb-[9px] ms-14 relative mt-4'>
                        <Image src={obj.image} width={39} height={39} sizes='100vw' alt='Kristin Watson' className='absolute -left-14 -top-3' />
                        <h2 className='text-black ff_inter text-xs font-medium leading-[100%] pb-[2px]'>{obj.title}</h2>
                        <p className='text-black/70 text-sm leading-[150%] ff_inter'>{obj.description}</p>
                        <p className='text-xs text-black leading-[100%] ff_inter text-end'>{obj.time}</p>
                    </div>
                ))}
                {/* Rendering sent messages */}
                <div className='flex flex-col items-end'>
                    {myMessagesList.map((obj, index) => (
                        <div key={index} className='bg-ultrayellow rounded-[16px_0px_16px_16px] w-full max-w-[401px] p-[10px] me-14 relative mt-4'>
                            <Image src={obj.image} width={39} height={39} sizes='100vw' alt='Kristin Watson' className='absolute -right-14 -top-3' />
                            <h2 className='text-black ff_inter text-xs font-medium leading-[100%] pb-[2px] text-end'>{obj.title}</h2>
                            <p className='text-black/70 text-sm leading-[150%] ff_inter text-end'>{obj.description}</p>
                            <p className='text-xs text-black leading-[100%] ff_inter text-start'>{obj.time}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className='relative'>
                {/* Input field for typing messages */}
                <CustomInputs
                    placeholder="Type your message..."
                    className="absolute border-t -bottom-14 border-0 !outline-none focus-visible:!border-black h-[74px] rounded-bl-2xl rounded-br-2xl rounded-none bg-whitesmoke ps-10"
                    value={inputText}
                    onChange={handleInputChange}
                    onKeyPress={KeyPressHandler}
                />
                {/* Button to send messages */}
                <div className='absolute z-10 right-6 top-[5px] cursor-pointer' onClick={handleSendMessage}>
                    <SendMessage />
                </div>
            </div>
        </>
    );
};

export default InformationGroupChatTab;
