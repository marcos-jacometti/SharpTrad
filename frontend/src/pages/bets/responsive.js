import { css } from "styled-components"
import { device } from "../../assets/styles/mediaQueries"

export const betsContainerMediaStyles = css`
    @media ${device.mobile}{
        flex-direction: column;
    }
`;

export const gamesContentMediaStyles = css`
    @media ${device.mobile}{
        margin-left: 0;
        width: 100vw;
        height: 100vh;
    }
`;

export const containerMediaStyles = css`
    @media ${device.mobile}{
        width: 90vw;
        height: auto;
    }
`;

export const titleMediaStyles = css`
    @media ${device.mobile}{
        width: 80vw;
        gap: 0.5rem;
    }
`;

export const svgMediaStyles = css`
    @media ${device.mobile}{
        font-size: 8vw;
    }
`;

export const betsSignalsMediaStyles = css`
    @media ${device.mobile}{
        width: 90vw;
        height: auto;
    }
`;