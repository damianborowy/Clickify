/** @jsxRuntime classic */
/** @jsx jsx */
import { useRef, memo, useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import javascriptScripts from "../../../scripts/javascriptScripts";
import styles from "./style.module.scss";
import { keyframes, css, jsx } from "@emotion/react";
import useInterval from "../../../hooks/useInterval";
import { Keyframes } from "@emotion/serialize";

type CodeMarqueeProps = {
    language: "javascript";
};

const CodeMarquee = ({ language }: CodeMarqueeProps) => {
    const codeContainerRef = useRef<HTMLDivElement>(null);
    const [currentKeyframes, setCurrentKeyframes] = useState<Keyframes>();
    const [currentDelay, setCurrentDelay] = useState(1);
    const [marqueeItems, setMarqueeItems] = useState(javascriptScripts);

    function getFirstElementHeight(element: HTMLDivElement) {
        const firstChild: any = element.firstChild;

        if (firstChild) {
            return firstChild.offsetHeight;
        }

        return 0;
    }

    useInterval(() => {
        if (codeContainerRef.current) {
            const firstElementHeight = getFirstElementHeight(
                codeContainerRef.current
            );

            const newKeyframes = keyframes`
                from {
                    top: 0
                }

                to {
                    top: -${firstElementHeight}px
                }
            `;

            const newMarqueeItems = [...marqueeItems];
            newMarqueeItems.push(newMarqueeItems.shift() as string);

            setMarqueeItems(newMarqueeItems);
            setCurrentKeyframes(newKeyframes);
            setCurrentDelay(firstElementHeight / 50);
        }
    }, currentDelay * 1000);

    return (
        <div className={styles.codeWrapper}>
            <div
                css={css`
                    animation: ${currentKeyframes} ${currentDelay}s linear
                        infinite;
                `}
                ref={codeContainerRef}
                className={styles.codeContainer}
            >
                {marqueeItems.map((code) => (
                    <SyntaxHighlighter
                        key={code}
                        language="javascript"
                        style={docco}
                    >
                        {code}
                    </SyntaxHighlighter>
                ))}
            </div>
        </div>
    );
};

export default memo(CodeMarquee);
