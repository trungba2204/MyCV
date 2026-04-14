import Image from "next/image";

const personalInfo = [
  "0356 921 765",
  "ngkhanhmy26@gmail.com",
  "facebook.com/ngkhanhmy26",
  "Trần Vĩ, Mai Dịch, Cầu Giấy, Hà Nội"
];

const skillBlocks = [
  {
    title: "Kỹ năng chuyên môn",
    body: "Soạn thảo hợp đồng, hồ sơ pháp lý, tư vấn doanh nghiệp."
  },
  {
    title: "Phân tích và nghiên cứu",
    body: "Phân tích và tổng hợp thông tin, nghiên cứu quy định pháp luật."
  },
  {
    title: "Kỹ năng mềm và công cụ",
    body: "Giao tiếp, làm việc nhóm, quản lý thời gian, Microsoft Office."
  }
];

const experiences = [
  {
    role: "Nhân viên hành chính - nhân sự",
    company: "Công ty CP Đầu tư và Phát triển Nhân lực Quốc tế DC",
    period: "2025 - Đến nay",
    details:
      "Quản lý vận hành hành chính, hồ sơ nội bộ, chấm công, lương, BHXH/BHYT/BHTN và phối hợp đối tác."
  },
  {
    role: "Thực tập sinh pháp lý",
    company: "Vạn Luật",
    period: "2024 - 2025",
    details:
      "Hỗ trợ tư vấn khách hàng, làm thủ tục doanh nghiệp, soạn thảo - kiểm tra hợp đồng và cập nhật quy định pháp luật."
  },
  {
    role: "Thực tập sinh pháp lý",
    company: "Công ty TNHH Luật Việt và Toàn cầu",
    period: "2023 - 2024",
    details:
      "Hỗ trợ chuẩn bị hồ sơ vụ việc, nghiên cứu thông tin pháp lý và soạn văn bản hành chính/pháp lý cơ bản."
  },
  {
    role: "Nhân viên kinh doanh",
    company: "UNI English Center",
    period: "2022 - 2023",
    details:
      "Tư vấn đăng ký khóa học, chăm sóc khách hàng và hỗ trợ quản lý hoạt động trung tâm."
  }
];

export default function HomePage() {
  return (
    <main className="page">
      <header className="header section-wrap">
        <p className="logo">Hồ sơ pháp lý của tôi</p>
        <nav className="nav">
          <a href="#about">Giới thiệu</a>
          <a href="#skills">Kỹ năng</a>
          <a href="#experience">Kinh nghiệm</a>
          <a href="#contact">Liên hệ</a>
        </nav>
        <a className="cta secondary" href="/khanh-my-cv.pdf" download>
          Tải CV
        </a>
      </header>

      <section className="hero section-wrap" id="about">
        <div className="hero-content">
          <p className="tag">Hồ sơ thực tập sinh pháp lý</p>
          <h1>Nguyễn Tường Khánh My</h1>
          <p className="sub">
            Thực tập sinh pháp lý định hướng trở thành chuyên viên pháp lý và luật sư,
            tập trung tư vấn doanh nghiệp và bảo vệ quyền lợi khách hàng.
          </p>
          <div className="hero-actions">
            <button className="cta">Bắt đầu ngay</button>
            <button className="cta ghost">Liên hệ ngay</button>
          </div>
          <ul className="personal-list">
            {personalInfo.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="hero-images">
          <div className="photo-card large">
            <Image
              src="/images/profile-main.jpeg"
              alt="Ảnh chân dung chính"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="photo"
            />
          </div>
          <div className="photo-card small">
            <Image
              src="/images/profile-side.jpeg"
              alt="Ảnh chân dung phụ"
              fill
              sizes="(max-width: 1024px) 50vw, 24vw"
              className="photo photo-face"
            />
          </div>
        </div>
      </section>

      <section className="stats section-wrap">
        <article>
          <h3>04+</h3>
          <p>Năm kinh nghiệm tích lũy</p>
        </article>
        <article>
          <h3>90%</h3>
          <p>Mức hài lòng từ khách hàng nội bộ</p>
        </article>
        <article>
          <h3>120+</h3>
          <p>Hồ sơ - tài liệu đã xử lý</p>
        </article>
        <article>
          <h3>01</h3>
          <p>Mục tiêu nghề nghiệp dài hạn rõ ràng</p>
        </article>
      </section>

      <section className="section-wrap section" id="skills">
        <p className="tag">Điểm mạnh chuyên môn</p>
        <h2>Giải pháp pháp lý phù hợp để đồng hành cùng sự phát triển doanh nghiệp</h2>
        <div className="cards three">
          {skillBlocks.map((item) => (
            <article key={item.title} className="card">
              <h3>{item.title}</h3>
              <p>{item.body}</p>
              <a href="#contact">Xem chi tiết</a>
            </article>
          ))}
        </div>
      </section>

      <section className="section-wrap section" id="experience">
        <p className="tag">Hồ sơ kinh nghiệm</p>
        <h2>Kinh nghiệm làm việc nổi bật</h2>
        <div className="cards two">
          {experiences.map((exp) => (
            <article key={`${exp.company}-${exp.period}`} className="portfolio">
              <h3>{exp.role}</h3>
              <p className="muted">
                {exp.company} | {exp.period}
              </p>
              <p>{exp.details}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="testimonial section-wrap">
        <div className="testimonial-box">
          <p className="tag">Định hướng phát triển</p>
          <h2>Mục tiêu nghề nghiệp</h2>
          <p>
            Ngắn hạn: Trở thành chuyên viên pháp lý, phát triển kỹ năng tư vấn và xử lý
            thủ tục doanh nghiệp.
          </p>
          <p>
            Dài hạn: Trở thành luật sư chuyên sâu, cung cấp giải pháp pháp lý toàn diện
            cho doanh nghiệp và cá nhân.
          </p>
          <span className="author">Khánh My - Thực tập sinh pháp lý</span>
        </div>
      </section>

      <section className="subscribe section-wrap" id="contact">
        <p className="tag">ĐĂNG KÝ NHẬN THÔNG TIN</p>
        <h2>Đăng ký để nhận các cập nhật mới nhất về hồ sơ của tôi</h2>
        <p>Vui lòng để lại email bên dưới để nhận thông tin cập nhật hằng ngày</p>
        <div className="subscribe-form">
          <input placeholder="Nhập địa chỉ email của bạn" />
          <button className="cta">Đăng ký</button>
        </div>
      </section>

      <footer className="footer section-wrap">
        <div>
          <p className="logo">Hồ sơ pháp lý của tôi</p>
          <p>Hồ sơ cá nhân được dựng theo bố cục thiết kế Figma.</p>
        </div>
        <div>
          <h4>Liên kết nhanh</h4>
          <p>Dịch vụ</p>
          <p>Hồ sơ</p>
          <p>Giới thiệu</p>
          <p>Liên hệ</p>
        </div>
        <div>
          <h4>Địa chỉ</h4>
          <p>Trần Vĩ, Mai Dịch, Cầu Giấy, Hà Nội</p>
          <p>ngkhanhmy26@gmail.com</p>
          <p>0356 921 765</p>
        </div>
      </footer>
    </main>
  );
}
