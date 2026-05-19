21:34:06.808 Running build in Washington, D.C., USA (East) – iad1
21:34:06.809 Build machine configuration: 2 cores, 8 GB
21:34:07.163 Cloning github.com/carolynllobue-alt/primrose-path-website (Branch: main, Commit: 0fdea2a)
21:34:08.188 Cloning completed: 1.025s
21:34:08.279 Restored build cache from previous deployment (Cqv2qfErWDs6Dhh7TD7gcXiHE8N1)
21:34:08.483 Running "vercel build"
21:34:08.502 Vercel CLI 53.3.2
21:34:08.966 Installing dependencies...
21:34:12.194 
21:34:12.195 up to date in 3s
21:34:12.196 
21:34:12.196 9 packages are looking for funding
21:34:12.196   run `npm fund` for details
21:34:12.253 Running "npm run build"
21:34:12.358 
21:34:12.358 > build
21:34:12.359 > vite build
21:34:12.359 
21:34:12.817 vite v8.0.13 building client environment for production...
21:34:13.093 
transforming...✓ 15 modules transformed.
21:34:13.098 ✗ Build failed in 274ms
21:34:13.099 error during build:
21:34:13.099 Build failed with 1 error:
21:34:13.099 
21:34:13.100 [builtin:vite-transform] Unexpected token
21:34:13.100      ╭─[ src/App.jsx:499:3 ]
21:34:13.100      │
21:34:13.101  499 │   const base = "inline-flex items-center justify-center font-medium transition focus:outline-none focus:ring-4 focus:ring-[#6f8f8b]/20";
21:34:13.101      │   ──┬──  
21:34:13.102      │     ╰──── 
21:34:13.102 ─────╯
21:34:13.102 
21:34:13.102     at aggregateBindingErrorsIntoJsError (file:///vercel/path0/node_modules/rolldown/dist/shared/error-CkdMJ9ps.mjs:48:18)
21:34:13.103     at unwrapBindingResult (file:///vercel/path0/node_modules/rolldown/dist/shared/error-CkdMJ9ps.mjs:18:128)
21:34:13.103     at #build (file:///vercel/path0/node_modules/rolldown/dist/shared/rolldown-build-BVD3dIdE.mjs:3275:34)
21:34:13.103     at async buildEnvironment (file:///vercel/path0/node_modules/vite/dist/node/chunks/node.js:33133:64)
21:34:13.104     at async Object.build (file:///vercel/path0/node_modules/vite/dist/node/chunks/node.js:33555:19)
21:34:13.104     at async Object.buildApp (file:///vercel/path0/node_modules/vite/dist/node/chunks/node.js:33552:153)
21:34:13.104     at async CAC.<anonymous> (file:///vercel/path0/node_modules/vite/dist/node/cli.js:777:3) {
21:34:13.105   errors: [Getter/Setter]
21:34:13.105 }
21:34:13.126 Error: Command "npm run build" exited with 1
