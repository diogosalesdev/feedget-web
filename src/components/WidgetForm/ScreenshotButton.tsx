import html2canvas from "html2canvas";
import { Camera, Trash } from "phosphor-react";
import { useState } from "react";
import { Loading } from "../Loading";

interface ScreenshotButtonProps {
    onScreenshotTook: (screenshot: string | null) => void
    screenshot: string | null
}

export function ScreenshotButton({
    screenshot, 
    onScreenshotTook
}: ScreenshotButtonProps) {
    const [isTakingScheenshot, setIsTakingScreenshot] = useState(false);

    async function handleTakeScreenshot() {
        setIsTakingScreenshot(true);

        const canvas = await html2canvas(document.querySelector('html')!);
        const base64image = canvas.toDataURL('image/png');

        onScreenshotTook(base64image);

        setIsTakingScreenshot(false);
    } 

    if (screenshot) {
        return (
            <button
                type="button"
                className="p-1 w-10 h-10 rounded-md border-transparent flex justify-end items-end text-zinc-500 hover:text-zinc-800  dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors"
                onClick={() => onScreenshotTook(null)}
                style={{
                    backgroundImage: `url(${screenshot})`,
                    backgroundPosition: 'right bottom',
                    backgroundSize: 180,
                }}
            >
                <Trash weight="fill" />
            </button>
        )
    }

    return (
        <button
            type="button"
            onClick={handleTakeScreenshot}
            className="p-2 bg-[#F4F4F5] dark:bg-zinc-800 rounded-md text-zinc-500 hover:text-zinc-800 border-transparent hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-100 dark:focus:ring-offset-zinc-900 focus:ring-brand-500"
        >
            { isTakingScheenshot ? <Loading /> : <Camera weight="bold" className="w-4 h-4" /> }
        </button>
    )
}