# Cloudflare-Jetpack-X

A high-performance Cloudflare Worker that acts as a smart proxy for WordPress Jetpack CDN, optimizing image delivery with advanced caching and SEO enhancements.

---

## 🌐 English

### 📖 Overview

**Cloudflare-WP-Img** is a lightweight, production-ready Cloudflare Worker that:

- 🔀 **Smart Redirects**: Automatically redirects root domain requests to your main WordPress site
- 🖼️ **Image Proxy**: Proxies and optimizes image requests through WordPress Jetpack CDN (`i0.wp.com`)
- ⚡ **Performance**: Implements intelligent caching with 1-year cache headers for static assets
- 🎯 **SEO Ready**: Optimized for search engines with proper status code handling
- 🔧 **Configurable**: Uses environment variables for easy deployment across environments

### 🔧 Features

- ✅ **301 Redirects** for clean root URLs (`/`, `/favicon.ico`, `/robots.txt`)
- ✅ **Intelligent Caching** with status-based TTL configuration
- ✅ **Error Handling** with no-cache headers for failed requests
- ✅ **Security Headers** including `X-Frame-Options: SAMEORIGIN`
- ✅ **WordPress/Jetpack Compatible** with seamless CDN integration
- ✅ **Environment Variable Support** for flexible configuration
- ✅ **Production Optimized** with efficient request processing

### 🚀 Quick Start

1. **Deploy to Cloudflare Workers**:
   ```bash
   # Clone the repository
   git clone https://github.com/yourusername/cloudflare-wp-img.git
   cd cloudflare-wp-img
   
   # Deploy using Wrangler CLI
   npx wrangler deploy
   ```

2. **Configure Environment Variables**:
   - Go to Cloudflare Dashboard → Workers & Pages → Your Worker → Settings → Variables
   - Add environment variable:
     - **Name**: `TARGET_DOMAIN`
     - **Value**: `yourdomain.com` (without https://)
     - **Name**: `STRIP_METADATA`
     - **Value**: `none` (or `all` or optional for default)

3. **Point Your Domain**:
   - Add a CNAME record pointing your subdomain to your worker
   - Or configure route patterns in Cloudflare

4. **Done!** Your images will now be served through the optimized proxy

### ⚙️ Configuration

The worker uses the following environment variables:

| Variable | Required | Default | Description |
|----------|----------|---------|-------------|
| `TARGET_DOMAIN` | No | `kudoshirt.com` | Your WordPress domain (without protocol) |
| `STRIP_METADATA` | No | `none` |  Strip metadata option (none or default) |
### 📊 Cache Strategy

- **Success Responses (2xx)**: Cached for 1 year with `immutable` directive
- **404 Errors**: Cached for 30 seconds to prevent excessive retries
- **Server Errors (5xx)**: No caching to ensure fresh error recovery
- **Other Errors**: No caching with `no-store` directive

### 🛠️ Development

#### Prerequisites
- Node.js 16+
- Cloudflare account
- Wrangler CLI: `npm install -g wrangler`

#### Local Development
```bash
# Install dependencies
npm install

# Start local development server
npx wrangler dev

# Test the worker locally
curl http://localhost:8787/test-image.jpg
```

#### Testing
```bash
# Test redirects
curl -I https://your-worker.your-subdomain.workers.dev/

# Test image proxy
curl -I https://your-worker.your-subdomain.workers.dev/wp-content/uploads/image.jpg

```
### Using
Change the image domain to your worker link by manual edit functions.php or use plugin that has image CDN options

### 📈 Performance

- **Response Time**: ~10-50ms additional latency
- **Cache Hit Rate**: 90%+ for static assets
- **Bandwidth Savings**: Up to 60% reduction with Jetpack optimization
- **Global Edge**: Leverages Cloudflare's 200+ edge locations

### 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### 📄 License

MIT License – Free for personal and commercial use.

See [LICENSE](LICENSE) file for details.

### 🔗 Links

- [Cloudflare Workers Documentation](https://developers.cloudflare.com/workers/)
- [WordPress Jetpack CDN](https://jetpack.com/support/photon/)
- [Wrangler CLI](https://developers.cloudflare.com/workers/cli-wrangler/)

---

## 🇻🇳 Tiếng Việt

### 📖 Tổng Quan

**Cloudflare-Jetpack-X** là một Cloudflare Worker nhẹ, sẵn sàng cho production với các tính năng:

- 🔀 **Chuyển Hướng Thông Minh**: Tự động chuyển hướng các yêu cầu domain gốc về trang WordPress chính
- 🖼️ **Proxy Hình Ảnh**: Proxy và tối ưu hóa yêu cầu hình ảnh qua WordPress Jetpack CDN (`i0.wp.com`)
- ⚡ **Hiệu Suất Cao**: Triển khai bộ nhớ đệm thông minh với cache headers 1 năm cho tài nguyên tĩnh
- 🎯 **SEO Tối Ưu**: Được tối ưu hóa cho công cụ tìm kiếm với xử lý status code phù hợp
- 🔧 **Có Thể Cấu Hình**: Sử dụng biến môi trường để dễ dàng triển khai qua các môi trường khác nhau

### 🔧 Tính Năng

- ✅ **301 Redirects** cho các URL gốc sạch (`/`, `/favicon.ico`, `/robots.txt`)
- ✅ **Cache Thông Minh** với cấu hình TTL dựa trên status
- ✅ **Xử Lý Lỗi** với no-cache headers cho các yêu cầu thất bại
- ✅ **Security Headers** bao gồm `X-Frame-Options: SAMEORIGIN`
- ✅ **Tương Thích WordPress/Jetpack** với tích hợp CDN liền mạch
- ✅ **Hỗ Trợ Biến Môi Trường** cho cấu hình linh hoạt
- ✅ **Tối Ưu Production** với xử lý request hiệu quả

### 🚀 Bắt Đầu Nhanh

1. **Deploy lên Cloudflare Workers**:
   ```bash
   # Clone repository
   git clone https://github.com/yourusername/cloudflare-wp-img.git
   cd cloudflare-wp-img
   
   # Deploy bằng Wrangler CLI
   npx wrangler deploy
   ```

2. **Cấu Hình Biến Môi Trường**:
   - Vào Cloudflare Dashboard → Workers & Pages → Worker của bạn → Settings → Variables
   - Thêm biến môi trường:
     - **Tên**: `TARGET_DOMAIN`
     - **Giá trị**: `yourdomain.com` (không có https://)


3. **Trỏ Domain**:
   - Thêm CNAME record trỏ subdomain về worker của bạn
   - Hoặc cấu hình route patterns trong Cloudflare

4. **Hoàn tất!** Hình ảnh của bạn sẽ được phục vụ qua proxy được tối ưu hóa

### ⚙️ Cấu Hình

Worker sử dụng các biến môi trường sau:

| Biến | Bắt buộc | Mặc định | Mô tả |
|------|----------|----------|-------|
| `TARGET_DOMAIN` | Không | `kudoshirt.com` | Domain WordPress của bạn (không có protocol) |

### 📊 Chiến Lược Cache

- **Phản Hồi Thành Công (2xx)**: Cache 1 năm với directive `immutable`
- **Lỗi 404**: Cache 30 giây để ngăn retry quá mức
- **Lỗi Server (5xx)**: Không cache để đảm bảo recovery lỗi fresh
- **Lỗi Khác**: Không cache với directive `no-store`

### 🔗 Cấu Trúc URL

Các yêu cầu gốc được chuyển đổi như sau:
```
https://your-worker-domain.com/path/to/image.jpg
↓
https://i0.wp.com/yourdomain.com/path/to/image.jpg?strip=none&ssl=true
```

### 🛠️ Phát Triển

#### Yêu Cầu
- Node.js 16+
- Tài khoản Cloudflare
- Wrangler CLI: `npm install -g wrangler`

#### Phát Triển Local
```bash
# Cài đặt dependencies
npm install

# Khởi động development server local
npx wrangler dev

# Test worker locally
curl http://localhost:8787/test-image.jpg
```

#### Kiểm Thử
```bash
# Test redirects
curl -I https://your-worker.your-subdomain.workers.dev/

# Test image proxy
curl -I https://your-worker.your-subdomain.workers.dev/wp-content/uploads/image.jpg

```

### 📈 Hiệu Suất

- **Thời Gian Phản Hồi**: ~10-50ms
- **Tỷ Lệ Cache Hit**: 90%+ cho tài nguyên tĩnh
- **Tiết Kiệm Băng Thông**: Giảm đến 60% với tối ưu hóa Jetpack
- **Global Edge**: Tận dụng 200+ edge locations của Cloudflare

### 🤝 Đóng Góp

1. Fork repository
2. Tạo feature branch (`git checkout -b feature/TinhNangTuyetVoi`)
3. Commit các thay đổi (`git commit -m 'Thêm TinhNangTuyetVoi'`)
4. Push lên branch (`git push origin feature/TinhNangTuyetVoi`)
5. Mở Pull Request

### 📄 Giấy Phép

MIT License – Miễn phí cho sử dụng cá nhân và thương mại.

Xem file [LICENSE](LICENSE) để biết thêm chi tiết.

### 🔗 Liên Kết

- [Tài liệu Cloudflare Workers](https://developers.cloudflare.com/workers/)
- [WordPress Jetpack CDN](https://jetpack.com/support/photon/)
- [Wrangler CLI](https://developers.cloudflare.com/workers/cli-wrangler/)

---

**Made with ❤️ for the WordPress community**
