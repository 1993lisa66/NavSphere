# NavSphere 部署指南

## Vercel 部署步骤

### 1. 准备工作
- 确保项目已推送到GitHub仓库
- 创建GitHub OAuth应用
- 准备环境变量

### 2. GitHub OAuth 应用配置
1. 访问 [GitHub Developer Settings](https://github.com/settings/developers)
2. 点击 "New OAuth App"
3. 填写信息：
   - Application name: NavSphere
   - Homepage URL: `https://your-app-name.vercel.app`
   - Authorization callback URL: `https://your-app-name.vercel.app/api/auth/callback/github`

### 3. Vercel 部署
1. 访问 [Vercel Dashboard](https://vercel.com/dashboard)
2. 点击 "New Project"
3. 导入GitHub仓库
4. 配置环境变量：
   ```
   GITHUB_CLIENT_ID=your_github_client_id
   GITHUB_SECRET=your_github_client_secret
   NEXTAUTH_SECRET=your_nextauth_secret
   NEXTAUTH_URL=https://your-app-name.vercel.app
   GITHUB_OWNER=your_github_username
   GITHUB_REPO=NavSphere
   GITHUB_BRANCH=main
   NEXT_PUBLIC_API_URL=https://your-app-name.vercel.app
   ```
5. 点击 "Deploy"

### 4. 验证部署
- 访问部署的URL
- 测试GitHub登录功能
- 验证API路由是否正常工作

## 其他部署选项

### Cloudflare Pages
项目已配置Cloudflare Pages，但需要修改配置：
- 移除server-side功能
- 使用Cloudflare Workers处理API

### Netlify
需要配置Netlify Functions来处理API路由

## 注意事项
- GitHub Pages不支持服务器端功能，无法直接部署
- 确保所有环境变量正确配置
- 测试OAuth回调URL是否正确
