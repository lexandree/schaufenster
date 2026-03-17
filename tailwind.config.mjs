/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "gray-bg": "#2E2E2E",
      },
      textColor: {
        skin: {
          base: "var(--color-text-base)",
          muted: "var(--color-text-muted)",
          inverted: "var(--color-text-inverted)",
        }
      },
      backgroundColor: {
        skin: {
          fill: "var(--color-bg-fill)",
          card: "var(--color-bg-card)",
          muted: "var(--color-bg-muted)",
          inverted: "var(--color-bg-inverted)",
        }
      },
      borderColor: {
        skin: {
          line: "var(--color-border-line)",
        }
      },
      typography: {
        DEFAULT: {
          css: {
            "--tw-prose-body": "var(--color-text-base)",
            "--tw-prose-headings": "var(--color-text-base)",
            "--tw-prose-lead": "var(--color-text-muted)",
            "--tw-prose-links": "var(--color-text-base)",
            "--tw-prose-bold": "var(--color-text-base)",
            "--tw-prose-counters": "var(--color-text-muted)",
            "--tw-prose-bullets": "var(--color-text-muted)",
            "--tw-prose-hr": "var(--color-border-line)",
            "--tw-prose-quotes": "var(--color-text-muted)",
            "--tw-prose-quote-borders": "var(--color-border-line)",
            "--tw-prose-captions": "var(--color-text-muted)",
            "--tw-prose-code": "var(--color-text-base)",
            "--tw-prose-pre-code": "var(--color-text-base)",
            "--tw-prose-pre-bg": "var(--color-bg-card)",
            "--tw-prose-th-borders": "var(--color-border-line)",
            "--tw-prose-td-borders": "var(--color-border-line)",
            "a:hover": {
              color: "var(--color-text-muted)",
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
