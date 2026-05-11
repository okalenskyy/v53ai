 Template/
  ├── CLAUDE.md                  ← full build instructions for Claude Code
  ├── .gitignore
  ├── package.json
  ├── tsconfig.json
  ├── next.config.ts
  ├── postcss.config.js
  ├── tailwind.config.ts
  ├── lib/utils.ts
  ├── app/
  │   ├── layout.tsx             ← metadata placeholders + Inter + JetBrains Mono
  │   ├── globals.css            ← full design system + all section CSS
  │   └── page.tsx               ← all 12 sections with [PLACEHOLDER] copy
  └── public/brand_assets/
      └── ok_transparent.png     ← About photo (copied from Altenture)

  To start a new site from this template:
  1. Copy the Template/ folder, rename it
  2. npm install
  3. Drop logo files into public/brand_assets/
  4. Update --brand colour in globals.css
  5. Work through every [PLACEHOLDER] in page.tsx top to bottom
  6. Run npm run dev and take screenshots to verify