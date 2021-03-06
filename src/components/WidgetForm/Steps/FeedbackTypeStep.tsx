import { FeedbackType, feedbackTypes } from "..";
import { CloseButton } from "../../CloseButton";

interface FeedbackTypeProps {
    onFeedbackTypeChanged: (type: FeedbackType) => void;
}

export function FeedbackTypeStep({ onFeedbackTypeChanged }: FeedbackTypeProps) {
    return (
        <>
            <header>
                <span className="text-xl leading-6 text-[#27272A] dark:text-[#F4F4F5]">Deixe seu feedback</span>
                <CloseButton />
            </header>
            <div className="flex py-8 gap-2 w-full">
                {Object.entries(feedbackTypes).map(([key, value]) => {
                    return (
                        <button
                            key={key}
                            className='bg-[#F4F4F5] dark:bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none'
                            type='button'
                            onClick={() => onFeedbackTypeChanged(key as FeedbackType)}
                        >
                            <img src={value.image.source} alt={value.image.alt} className="h-12 w-12" />
                            <span className="text-[#27272A] dark:text-[#F4F4F5] ">{value.title}</span>
                        </button>
                    );
                })}
            </div>
        </>
    )
}