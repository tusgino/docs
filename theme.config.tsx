import { useRouter } from "next/router";
import { DocsThemeConfig, useConfig } from "nextra-theme-docs";
import Clap from "./components/clap/clap";

const config: DocsThemeConfig = {
  logo: () => {
    return (
      <div className="flex justify-between gap-2 items-center">
        <img src="/logo.png" alt="Logo" className="h-8 w-8" />
        <span className="mr-2 font-extrabold hidden md:inline">Tusgino</span>
      </div>
    );
  },
  footer: {
    text: "Blog by Tugino",
  },
  primaryHue: { dark: 273, light: 255 },
  primarySaturation: 100,
  i18n: [
    { locale: "vi", text: "Tiếng Việt" },
    { locale: "en", text: "English" },
  ],
  head: () => {
    const { asPath, defaultLocale, locale } = useRouter();
    const { frontMatter } = useConfig();
    const url = "https://tusgino.tech" + (defaultLocale === locale ? asPath : `/${locale}${asPath}`);
    return (
      <>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:url" content={url} />
        <meta property="og:title" content={frontMatter.title || "Tusgino Blog"} />
        <meta property="og:description" content={frontMatter.description || ""} />

        <meta property="description" content={frontMatter.description || ""} />
        <meta property="keywords" content={frontMatter.keywords || ""} />
        <link rel="icon" href="/logo.png" type="image/png" />
        {/* <script src="https://messenger.svc.chative.io/static/v1.0/channels/s3bdde97e-894d-4092-a021-d7c04cc2602f/messenger.js?mode=livechat"></script> */}
        <script src="https://messenger.svc.chative.io/static/v1.0/channels/s1c2bb646-dee1-4f05-a372-78a8dc70275a/messenger.js?mode=livechat"></script>
      </>
    );
  },
  useNextSeoProps() {
    return {
      titleTemplate: "%s | Tusgino",
    };
  },
  search: {
    placeholder: () => {
      const { locale } = useRouter();
      return locale === "vi" ? "Tìm kiếm" : "Search";
    },
  },
  editLink: {
    component: null,
  },
  feedback: {
    content: null,
  },
  toc: {
    title: () => {
      const { locale } = useRouter();
      return <>{locale === "vi" ? "Nội dung" : "Content"}</>;
    },
    backToTop: true,
  },
  gitTimestamp: ({ timestamp }) => {
    const { locale } = useRouter();
    const date = new Date(timestamp).toLocaleString(locale);
    return <>{locale === "vi" ? `Cập nhật lần cuối: ${date}` : `Last updated: ${date}`}</>;
  },
  themeSwitch: {
    useOptions: () => {
      const { locale } = useRouter();
      return {
        dark: locale === "vi" ? "Tối" : "Dark",
        light: locale === "vi" ? "Sáng" : "Light",
        system: locale === "vi" ? "Hệ thống" : "System",
      };
    }
  },
  components: {
    Clap: () => {
      return (
        <Clap />
      )
    }
  }
};

export default config;
