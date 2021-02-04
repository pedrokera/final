import React, { useEffect, useState } from 'react';
import LottiePlayer from 'lottie-web';

type Props = {
    loop: boolean,
    autoplay: boolean,
    animation: any,
    onComplete?: () => void,
    width?: string | number,
    height?: string | number
}

function Lottie({ loop, autoplay, animation, onComplete, width = "100%", height = "100%" }: Props) {
    const [lottiePlayer, setLottiePlayer] = useState<HTMLDivElement>();

    useEffect(() => {
        const player = LottiePlayer.loadAnimation({
            container: lottiePlayer,
            renderer: 'svg',
            loop,
            autoplay,
            animationData: animation
        });

        player.addEventListener('complete', onComplete);

    }, [lottiePlayer])

    return (
        <div style={{ width, height }} ref={(ref: HTMLDivElement) => setLottiePlayer(ref)}></div>
    )
}

export default Lottie;