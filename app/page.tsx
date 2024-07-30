import { getFrameMetadata } from '@coinbase/onchainkit/frame';
import type { Metadata } from 'next';
const HARDCODED_URL = 'https://pls-lgtx.vercel.app/'

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
      target: 'https://uniswap.org'
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
      <h1>Uniswap Extension</h1>
    </>
  );
}