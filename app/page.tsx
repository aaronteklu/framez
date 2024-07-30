import { getFrameMetadata } from '@coinbase/onchainkit/frame';
import type { Metadata } from 'next';
const HARDCODED_URL = 'https://framez-pearl.vercel.app/';

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      action: 'link',
      label: 'Download Extension',
      target: 'https://chromewebstore.google.com/detail/uniswap-extension/nnpmfplkfogfpmcngplhnbdnnilmcdcg'
    },
    {
      action: 'link',
      label: 'Learn More',
      target: 'https://blog.uniswap.org/uniswap-extension-is-now-available-for-everyone'
    },
  ],
  image: HARDCODED_URL + 'screenshot.png',
});

export const metadata: Metadata = {
  title: 'Uniswap Extension',
  description: 'Download the Uniswap Extension and Learn More',
  openGraph: {
    title: 'Uniswap Extension',
    description: 'Download the Uniswap Extension and Learn More',
    images: [HARDCODED_URL + 'screenshot.png']
  },
  other: {
    ...frameMetadata
  }
};

export default function Page() {
  return (
    <>
      <head>
        <meta name="fc:frame:button:1" content="Download Extension" />
        <meta name="fc:frame:button:1:action" content="link" />
        <meta name="fc:frame:button:1:target" content="https://chromewebstore.google.com/detail/uniswap-extension/nnpmfplkfogfpmcngplhnbdnnilmcdcg" />
        <meta name="fc:frame:button:2" content="Learn More" />
        <meta name="fc:frame:button:2:action" content="link" />
        <meta name="fc:frame:button:2:target" content="https://blog.uniswap.org/uniswap-extension-is-now-available-for-everyone" />
      </head>
      <h1>Uniswap Extension</h1>
      <img 
        src={`${HARDCODED_URL}screenshot.png`} 
        alt="Uniswap Extension" 
        style={{ width: '100%', height: 'auto', aspectRatio: '1.91/1' }} 
      />
    </>
  );
}