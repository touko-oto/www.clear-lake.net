import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import { PageHeader } from './layouts/PageHeader';
import { PageFooter } from './layouts/PageFooter';
const noto_sans_jp = Noto_Sans_JP({ subsets: ["latin"]});

export const metadata: Metadata = {
  title: "clear-lake.net",
  description: "透湖の詳細プロフィール, SNSアカウントまとめ",
  keywords: "透湖, プロフィール, リンク集, アニメ, Blog, SNS, Twitter, Misskey, GitHub, Bluesky, Thread, YouTube, PixAI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="ja">
      <body className={noto_sans_jp.className}>
        <div>
          <PageHeader />
          <div className="min-h-screen">
            {children}
          </div>
          <PageFooter />
        </div>
      </body>
    </html>
  );
}
