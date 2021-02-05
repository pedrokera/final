import React, { useEffect, useState } from 'react';
import LottiePlayer from 'lottie-web';
import styled from 'styled-components'

type Props = {
    loop: boolean,
    autoplay: boolean,
    animation: any,
    onComplete?: () => void,
    onLoopComplete?: () => void,
    width?: string | number,
    height?: string | number
}

type LottiePlayerContainerProps = {
    sizes: {
        width: string | number,
        height: string | number
    }
}

const LottiePlayerContainer = styled.div<LottiePlayerContainerProps>`
    width: ${({ sizes }) => sizes.width};
    height: ${({ sizes }) => sizes.height};

    @media(max-width: 884px){
        width: 50%;
    }

    @media(max-width: 400px){
        width: 60%;
    }
`;

function Lottie({ loop, autoplay, animation, onComplete, onLoopComplete, width = "20%", height = "20%" }: Props) {
    const [lottiePlayer, setLottiePlayer] = useState<HTMLDivElement>();

    useEffect(() => {
        const player = LottiePlayer.loadAnimation({
            container: lottiePlayer,
            renderer: 'svg',
            loop,
            autoplay,
            animationData: animation
        });

        onComplete && player.addEventListener('complete', onComplete);
        onLoopComplete && player.addEventListener("loopComplete", onLoopComplete);
    }, [lottiePlayer])

    return (
        <LottiePlayerContainer sizes={{ width, height }} ref={(ref: HTMLDivElement) => setLottiePlayer(ref)} />
    )
}

export default Lottie;