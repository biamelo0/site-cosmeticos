This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy no GitHub Pages

Este projeto está 100% configurado para o **GitHub Pages** utilizando **GitHub Actions**.

### Como ativar:
1. Acesse o seu repositório no GitHub: `https://github.com/biamelo0/site-cosmeticos`.
2. Vá em **Settings** > **Pages** (no menu lateral esquerdo).
3. Na seção **Build and deployment**:
   - Em **Source**, selecione **GitHub Actions**.
4. Faça um commit e push das alterações para a branch `main`:
   ```bash
   git add .
   git commit -m "Configura deploy automático para o GitHub Pages"
   git push origin main
   ```
5. O GitHub Actions iniciará o deploy automaticamente na aba **Actions**. Assim que concluir, o site estará online em:
   **https://biamelo0.github.io/site-cosmeticos/**

