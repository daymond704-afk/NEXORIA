
import React, { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Link,
  useNavigate,
  useLocation,
  useParams,
} from "react-router-dom";

const projects = [
  {
    id: "web",
    title: "طراحی وب‌سایت",
    category: "طراحی وب",
    description: "طراحی وب‌سایت‌های مدرن، واکنش‌گرا و کاربردی.",
    icon: "🌐",
    color: "#00e676",
  },
  {
    id: "python",
    title: "برنامه‌نویسی پایتون",
    category: "برنامه‌نویسی",
    description: "ساخت برنامه‌ها و ابزارهای کاربردی با پایتون.",
    icon: "🐍",
    color: "#00c9d8",
  },
  {
    id: "design",
    title: "طراحی گرافیکی",
    category: "گرافیک",
    description: "طراحی پوستر، کارت ویزیت و محتوای تبلیغاتی.",
    icon: "🎨",
    color: "#a78bfa",
  },
];

const technologies = [
  { name: "HTML", icon: "🌐", text: "ساختار صفحات وب" },
  { name: "CSS", icon: "🎨", text: "طراحی و زیباسازی وب" },
  { name: "JavaScript", icon: "⚡", text: "ایجاد تعامل در سایت" },
  { name: "React", icon: "⚛️", text: "ساخت رابط کاربری" },
  { name: "Python", icon: "🐍", text: "برنامه‌نویسی و توسعه" },
  { name: "Photoshop", icon: "🖼️", text: "طراحی و ویرایش تصاویر" },
];

function getUser() {
  try {
    return JSON.parse(localStorage.getItem("nexoraUser"));
  } catch {
    return null;
  }
}

function ProtectedRoute({ children }) {
  const user = getUser();
  const location = useLocation();

  if (!user) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  return children;
}

function Navbar({ user }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  function logout() {
    localStorage.removeItem("nexoraUser");
    navigate("/login");
  }

  const links = [
    ["/home", "خانه"],
    ["/technologies", "تکنولوژی‌ها"],
    ["/projects", "پروژه‌ها"],
    ["/developer", "درباره من"],
    ["/contact", "تماس با ما"],
    ["/dashboard", "داشبورد"],
  ];

  return (
    <header className="navbar">
      <div className="nav-inner">
        <Link to="/home" className="logo" onClick={() => setMenuOpen(false)}>
          NEX<span>ORA</span>
          <small>TECHNOLOGY & FUTURE</small>
        </Link>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="باز و بسته کردن منو"
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          {links.map(([path, title]) => (
            <Link
              key={path}
              to={path}
              onClick={() => setMenuOpen(false)}
              className="nav-link"
            >
              {title}
            </Link>
          ))}
        </nav>

        <div className="nav-user">
          <span className="user-name">
            {user?.name || "کاربر NEXORA"}
          </span>
          <button className="logout-btn" onClick={logout}>
            خروج
          </button>
        </div>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-logo">
        NEX<span>ORA</span>
      </div>
      <p>نگاهی به آینده، با قدرت فناوری</p>
      <small>© 2026 NEXORA - تمامی حقوق محفوظ است.</small>
    </footer>
  );
}

function PageLayout({ children, user }) {
  return (
    <div className="site">
      <Navbar user={user} />
      <main className="main-content">{children}</main>
      <Footer />
    </div>
  );
}

function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <span className="eyebrow">
            ✦ به دنیای فناوری خوش آمدید
          </span>

          <h1>
            آینده را
            <br />
            <span>متفاوت بسازیم</span>
          </h1>

          <p>
            به NEXORA خوش آمدید؛ جایی برای کشف دنیای برنامه‌نویسی،
            تکنولوژی و ایده‌های خلاقانه.
          </p>

          <div className="hero-buttons">
            <Link to="/projects" className="primary-btn">
              مشاهده پروژه‌ها
            </Link>
            <Link to="/developer" className="secondary-btn">
              درباره توسعه‌دهنده
            </Link>
          </div>
        </div>

        <div className="hero-visual">
          <div className="orbit orbit-one"></div>
          <div className="orbit orbit-two"></div>
          <div className="hero-center">
            <span>NX</span>
            <small>FUTURE</small>
          </div>
          <div className="floating-code code-one">{"<code />"}</div>
          <div className="floating-code code-two">01 / 10</div>
          <div className="floating-code code-three">AI + WEB</div>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <span className="eyebrow">DISCOVER NEXORA</span>
          <h2>به دنیای <span>فناوری</span> خوش آمدید</h2>
          <p>
            فناوری فقط ابزار نیست؛ راهی برای ساختن آینده‌ای بهتر است.
          </p>
        </div>

        <div className="feature-grid">
          <div className="feature-card">
            <span>💻</span>
            <h3>برنامه‌نویسی</h3>
            <p>یادگیری و ساخت ایده‌های دیجیتال با کدنویسی.</p>
          </div>
          <div className="feature-card">
            <span>🚀</span>
            <h3>نوآوری</h3>
            <p>تبدیل ایده‌های خلاقانه به پروژه‌های کاربردی.</p>
          </div>
          <div className="feature-card">
            <span>✨</span>
            <h3>طراحی مدرن</h3>
            <p>ترکیب زیبایی، سادگی و تجربه کاربری مناسب.</p>
          </div>
        </div>
      </section>

      <section className="section about-section">
        <div className="section-heading">
          <span className="eyebrow">ABOUT NEXORA</span>
          <h2>درباره <span>NEXORA</span></h2>
        </div>
        <p className="about-text">
          NEXORA یک فضای دیجیتال با محوریت فناوری، طراحی و برنامه‌نویسی
          است که با هدف نمایش ایده‌ها، پروژه‌ها و مسیر یادگیری در دنیای
          تکنولوژی طراحی شده است.
        </p>
      </section>
    </>
  );
}

function Technologies() {
  return (
    <section className="section page-section">
      <PageTitle
        eyebrow="TECHNOLOGIES"
        title="دنیای تکنولوژی‌ها"
        description="ابزارها و فناوری‌هایی که دنیای دیجیتال را شکل می‌دهند."
      />

      <div className="technology-grid">
        {technologies.map((tech) => (
          <div className="technology-card" key={tech.name}>
            <span className="tech-icon">{tech.icon}</span>
            <h3>{tech.name}</h3>
            <p>{tech.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  const [search, setSearch] = useState("");

  const filtered = projects.filter((project) =>
    project.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="section page-section">
      <PageTitle
        eyebrow="MY PROJECTS"
        title="پروژه‌های NEXORA"
        description="نمونه‌هایی از ایده‌ها و زمینه‌های فعالیت در دنیای فناوری."
      />

      <input
        className="search-input"
        placeholder="جستجوی پروژه..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="project-grid">
        {filtered.map((project) => (
          <div className="project-card" key={project.id}>
            <div
              className="project-icon"
              style={{ color: project.color }}
            >
              {project.icon}
            </div>
            <span className="project-category">{project.category}</span>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <Link to={`/projects/${project.id}`} className="project-link">
              مشاهده جزئیات ←
            </Link>
          </div>
        ))}

        {filtered.length === 0 && (
          <p className="empty-message">پروژه‌ای پیدا نشد.</p>
        )}
      </div>
    </section>
  );
}

function ProjectDetails() {
  const { id } = useParams();
  const project = projects.find((item) => item.id === id);

  if (!project) {
    return (
      <section className="section page-section">
        <h2>پروژه موردنظر پیدا نشد.</h2>
        <Link to="/projects" className="primary-btn">
          بازگشت به پروژه‌ها
        </Link>
      </section>
    );
  }

  return (
    <section className="section page-section">
      <div className="detail-card">
        <div className="detail-icon">{project.icon}</div>
        <span className="eyebrow">{project.category}</span>
        <h1>{project.title}</h1>
        <p>{project.description}</p>
        <p>
          این بخش برای معرفی جزئیات پروژه، امکانات، مراحل طراحی و
          فناوری‌های استفاده‌شده در آن در نظر گرفته شده است.
        </p>
        <Link to="/projects" className="secondary-btn">
          بازگشت به پروژه‌ها
        </Link>
      </div>
    </section>
  );
}

function Developer() {
  return (
    <section className="section page-section">
      <PageTitle
        eyebrow="ABOUT DEVELOPER"
        title="درباره توسعه‌دهنده"
        description="آشنایی با سازنده و ایده‌پرداز NEXORA."
      />

      <div className="developer-card">
        <div className="developer-avatar">MH</div>
        <div>
          <h2>محمد مهدی حبیبی</h2>
          <span className="developer-role">علاقه‌مند به برنامه‌نویسی و فناوری</span>
          <p>
            علاقه‌مند به طراحی وب، برنامه‌نویسی، گرافیک و یادگیری
            فناوری‌های جدید. هدف من توسعه مهارت‌ها و تبدیل ایده‌ها
            به پروژه‌های کاربردی است.
          </p>
          <div className="skill-tags">
            <span>Web Design</span>
            <span>Programming</span>
            <span>Python</span>
            <span>Photoshop</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section className="section page-section">
      <PageTitle
        eyebrow="CONTACT US"
        title="ارتباط با ما"
        description="برای ارسال پیام یا پیشنهاد خود از فرم زیر استفاده کنید."
      />

      <form className="contact-form" onSubmit={handleSubmit}>
        <label>نام و نام خانوادگی</label>
        <input required placeholder="نام خود را وارد کنید" />

        <label>ایمیل</label>
        <input type="email" required placeholder="example@gmail.com" />

        <label>موضوع پیام</label>
        <input required placeholder="موضوع پیام" />

        <label>متن پیام</label>
        <textarea required rows="5" placeholder="پیام خود را بنویسید..." />

        <button className="primary-btn" type="submit">
          ارسال پیام
        </button>

        {sent && (
          <p className="success-message">
            پیام شما به‌صورت نمایشی ثبت شد.
          </p>
        )}
      </form>
    </section>
  );
}

function Dashboard({ user }) {
  return (
    <section className="section page-section">
      <PageTitle
        eyebrow="USER DASHBOARD"
        title="داشبورد کاربری"
        description="به فضای کاربری NEXORA خوش آمدید."
      />

      <div className="dashboard-card">
        <div className="developer-avatar">
          {(user?.name || "N").charAt(0)}
        </div>
        <div>
          <h2>سلام، {user?.name || "کاربر عزیز"}!</h2>
          <p>خوشحالیم که در NEXORA همراه ما هستید.</p>
          <span className="developer-role">
            شماره موبایل: {user?.phone || "ثبت نشده"}
          </span>
        </div>
      </div>

      <div className="feature-grid dashboard-features">
        <div className="feature-card">
          <span>👤</span>
          <h3>حساب کاربری</h3>
          <p>مشاهده اطلاعات حساب شما</p>
        </div>
        <div className="feature-card">
          <span>📁</span>
          <h3>پروژه‌ها</h3>
          <p>مشاهده پروژه‌های NEXORA</p>
          <Link to="/projects" className="project-link">
            مشاهده پروژه‌ها ←
          </Link>
        </div>
      </div>
    </section>
  );
}

function PageTitle({ eyebrow, title, description }) {
  return (
    <div className="section-heading">
      <span className="eyebrow">{eyebrow}</span>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
}

function Login() {
  const navigate = useNavigate();
  const location = useLocation();

  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleLogin(e) {
    e.preventDefault();
    setError("");

    const savedUser = getUser();

    if (
      savedUser &&
      savedUser.phone === phone.trim() &&
      savedUser.password === password
    ) {
      const destination = location.state?.from?.pathname || "/home";
      navigate(destination, { replace: true });
    } else {
      setError("شماره موبایل یا رمز عبور صحیح نیست. ابتدا ثبت‌نام کنید.");
    }
  }

  return (
    <div className="auth-page">
      <div className="auth-decoration">
        <div className="auth-orbit"></div>
        <div className="auth-brand">
          NEX<span>ORA</span>
          <p>TECHNOLOGY & FUTURE</p>
        </div>
      </div>

      <div className="auth-card">
        <div className="auth-logo">
          NEX<span>ORA</span>
        </div>

        <span className="eyebrow">WELCOME BACK</span>
        <h1>ورود به حساب کاربری</h1>
        <p className="auth-description">
          برای ورود به دنیای NEXORA اطلاعات خود را وارد کنید.
        </p>

        <form onSubmit={handleLogin}>
          <label>شماره موبایل</label>
          <input
            type="tel"
            required
            placeholder="09123456789"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            dir="ltr"
          />

          <label>رمز عبور</label>
          <input
            type="password"
            required
            placeholder="رمز عبور خود را وارد کنید"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {error && <p className="error-message">{error}</p>}

          <button className="primary-btn auth-submit" type="submit">
            ورود به سایت
          </button>
        </form>

        <p className="auth-bottom">
          حساب کاربری ندارید؟
          <Link to="/register"> ثبت‌نام کنید</Link>
        </p>
      </div>
    </div>
  );
}

function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  function handleRegister(e) {
    e.preventDefault();
    setError("");

    if (password.length < 6) {
      setError("رمز عبور باید حداقل ۶ کاراکتر باشد.");
      return;
    }

    if (password !== confirmPassword) {
      setError("تکرار رمز عبور با رمز اصلی مطابقت ندارد.");
      return;
    }

    if (!/^09\d{9}$/.test(phone.trim())) {
      setError("شماره موبایل معتبر ایران را وارد کنید.");
      return;
    }

    const user = {
      name: name.trim(),
      phone: phone.trim(),
      password,
    };

    localStorage.setItem("nexoraUser", JSON.stringify(user));
    navigate("/home", { replace: true });
  }

  return (
    <div className="auth-page">
      <div className="auth-decoration">
        <div className="auth-orbit"></div>
        <div className="auth-brand">
          NEX<span>ORA</span>
          <p>BUILD YOUR FUTURE</p>
        </div>
      </div>

      <div className="auth-card register-card">
        <div className="auth-logo">
          NEX<span>ORA</span>
        </div>

        <span className="eyebrow">JOIN NEXORA</span>
        <h1>ساخت حساب کاربری</h1>
        <p className="auth-description">
          برای ورود به NEXORA حساب خود را بسازید.
        </p>

        <form onSubmit={handleRegister}>
          <label>نام و نام خانوادگی</label>
          <input
            required
            placeholder="نام خود را وارد کنید"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label>شماره موبایل</label>
          <input
            required
            type="tel"
            placeholder="09123456789"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            dir="ltr"
          />

          <label>رمز عبور</label>
          <input
            required
            type="password"
            placeholder="حداقل ۶ کاراکتر"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <label>تکرار رمز عبور</label>
          <input
            required
            type="password"
            placeholder="رمز عبور را دوباره وارد کنید"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          {error && <p className="error-message">{error}</p>}

          <button className="primary-btn auth-submit" type="submit">
            ثبت‌نام و ورود
          </button>
        </form>

        <p className="auth-bottom">
          قبلاً ثبت‌نام کرده‌اید؟
          <Link to="/login"> وارد شوید</Link>
        </p>
      </div>
    </div>
  );
}

function AppContent() {
  const user = getUser();

  return (
    <Routes>
      <Route
        path="/login"
        element={
          user ? <Navigate to="/home" replace /> : <Login />
        }
      />

      <Route
        path="/register"
        element={
          user ? <Navigate to="/home" replace /> : <Register />
        }
      />

      <Route
        path="/"
        element={
          <Navigate to={user ? "/home" : "/login"} replace />
        }
      />

      <Route
        path="/*"
        element={
          <ProtectedRoute>
            <PageLayout user={user}>
              <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/technologies" element={<Technologies />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/projects/:id" element={<ProjectDetails />} />
                <Route path="/developer" element={<Developer />} />
                <Route path="/contact" element={<Contact />} />
                <Route
                  path="/dashboard"
                  element={<Dashboard user={user} />}
                />
                <Route path="*" element={<Navigate to="/home" replace />} />
              </Routes>
            </PageLayout>
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div dir="rtl">
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Vazirmatn:wght@300;400;500;600;700;800;900&display=swap');

          :root {
            --bg: #080b0a;
            --panel: #101613;
            --panel-light: #151e19;
            --green: #00e676;
            --cyan: #00c9d8;
            --white: #f4f7f5;
            --muted: #a0aaa4;
            --border: rgba(0,230,118,.16);
          }

          * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
          }

          html {
            scroll-behavior: smooth;
          }

          body {
            background: var(--bg);
            color: var(--white);
            font-family: 'Vazirmatn', Tahoma, sans-serif;
            overflow-x: hidden;
          }

          button, input, textarea {
            font: inherit;
          }

          button, a {
            -webkit-tap-highlight-color: transparent;
          }

          a {
            text-decoration: none;
            color: inherit;
          }

          .site {
            min-height: 100vh;
            display: flex;
            flex-direction: column;
          }

          .main-content {
            flex: 1;
            width: 100%;
          }

          .navbar {
            width: 100%;
            background: rgba(8,11,10,.94);
            border-bottom: 1px solid var(--border);
            position: sticky;
            top: 0;
            z-index: 100;
            backdrop-filter: blur(15px);
          }

          .nav-inner {
            max-width: 1250px;
            min-height: 82px;
            padding: 12px 28px;
            margin: auto;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 20px;
          }

          .logo {
            font-size: 27px;
            font-weight: 900;
            letter-spacing: 1px;
            color: white;
            line-height: 1.2;
            flex-shrink: 0;
          }

          .logo span, .footer-logo span, .auth-logo span,
          .auth-brand span {
            color: var(--green);
          }

          .logo small {
            display: block;
            color: var(--muted);
            font-size: 8px;
            letter-spacing: 2px;
            direction: ltr;
          }

          .nav-links {
            display: flex;
            align-items: center;
            gap: 22px;
          }

          .nav-link {
            color: #c7d0ca;
            font-size: 13px;
            transition: .25s;
          }

          .nav-link:hover {
            color: var(--green);
          }

          .nav-user {
            display: flex;
            align-items: center;
            gap: 12px;
          }

          .user-name {
            font-size: 12px;
            color: var(--muted);
          }

          .logout-btn {
            border: 1px solid rgba(255,90,90,.4);
            color: #ff8a8a;
            background: transparent;
            padding: 8px 13px;
            border-radius: 8px;
            cursor: pointer;
          }

          .logout-btn:hover {
            background: rgba(255,90,90,.1);
          }

          .menu-toggle {
            display: none;
            color: var(--green);
            background: transparent;
            border: 1px solid var(--border);
            border-radius: 8px;
            padding: 8px 12px;
            font-size: 23px;
            cursor: pointer;
          }

          .hero {
            max-width: 1250px;
            min-height: 570px;
            padding: 80px 35px;
            margin: auto;
            display: grid;
            grid-template-columns: 1.1fr .9fr;
            align-items: center;
            gap: 35px;
          }

          .hero-content {
            max-width: 620px;
          }

          .eyebrow {
            display: inline-block;
            color: var(--green);
            font-size: 11px;
            font-weight: 700;
            letter-spacing: 2px;
            margin-bottom: 17px;
          }

          .hero h1 {
            font-size: clamp(42px, 6vw, 76px);
            line-height: 1.5;
            font-weight: 900;
            margin-bottom: 15px;
          }

          .hero h1 span, .section-heading h1 span,
          .section-heading h2 span {
            color: var(--green);
          }

          .hero-content > p {
            color: var(--muted);
            line-height: 2.2;
            max-width: 550px;
            font-size: 15px;
          }

          .hero-buttons {
            display: flex;
            flex-wrap: wrap;
            gap: 12px;
            margin-top: 30px;
          }

          .primary-btn, .secondary-btn {
            min-height: 45px;
            padding: 12px 23px;
            display: inline-flex;
            justify-content: center;
            align-items: center;
            border-radius: 9px;
            font-size: 13px;
            font-weight: 700;
            cursor: pointer;
            transition: .25s;
          }

          .primary-btn {
            border: 1px solid var(--green);
            background: var(--green);
            color: #07110b;
          }

          .primary-btn:hover {
            background: transparent;
            color: var(--green);
            box-shadow: 0 0 22px rgba(0,230,118,.15);
          }

          .secondary-btn {
            border: 1px solid var(--border);
            color: var(--white);
            background: transparent;
          }

          .secondary-btn:hover {
            border-color: var(--green);
            color: var(--green);
          }

          .hero-visual {
            position: relative;
            min-height: 380px;
            display: grid;
            place-items: center;
          }

          .hero-center {
            width: 190px;
            height: 190px;
            border-radius: 50%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            background: radial-gradient(circle, #163322, #09110c 70%);
            border: 2px solid var(--green);
            box-shadow: 0 0 45px rgba(0,230,118,.2), inset 0 0 35px rgba(0,230,118,.12);
            z-index: 2;
          }

          .hero-center span {
            color: var(--green);
            font-size: 65px;
            font-weight: 900;
          }

          .hero-center small {
            letter-spacing: 5px;
            color: var(--muted);
          }

          .orbit {
            position: absolute;
            width: 310px;
            height: 310px;
            border: 1px solid rgba(0,230,118,.25);
            border-radius: 50%;
          }

          .orbit-two {
            width: 380px;
            height: 380px;
            border-color: rgba(0,201,216,.18);
          }

          .floating-code {
            position: absolute;
            padding: 11px 16px;
            border: 1px solid var(--border);
            border-radius: 9px;
            background: #111a14;
            color: var(--green);
            direction: ltr;
            font-size: 12px;
            z-index: 3;
          }

          .code-one { top: 38px; right: 0; }
          .code-two { bottom: 55px; left: 0; color: var(--cyan); }
          .code-three { top: 45%; left: -15px; color: #b5a0ff; }

          .section {
            max-width: 1250px;
            padding: 75px 30px;
            margin: auto;
            width: 100%;
          }

          .section-heading {
            text-align: center;
            max-width: 720px;
            margin: 0 auto 42px;
          }

          .section-heading h1, .section-heading h2 {
            font-size: clamp(27px, 4vw, 39px);
            margin-bottom: 12px;
            font-weight: 800;
          }

          .section-heading p {
            color: var(--muted);
            line-height: 2;
            font-size: 14px;
          }

          .feature-grid, .technology-grid, .project-grid {
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 20px;
          }

          .feature-card, .technology-card, .project-card {
            background: linear-gradient(145deg, #121a15, #0c110e);
            border: 1px solid var(--border);
            border-radius: 16px;
            padding: 27px;
            transition: .3s;
            min-width: 0;
          }

          .feature-card:hover, .technology-card:hover,
          .project-card:hover {
            transform: translateY(-5px);
            border-color: var(--green);
            box-shadow: 0 10px 35px rgba(0,230,118,.07);
          }

          .feature-card > span {
            font-size: 34px;
          }

          .feature-card h3, .technology-card h3,
          .project-card h3 {
            font-size: 18px;
            margin: 15px 0 8px;
          }

          .feature-card p, .technology-card p,
          .project-card p {
            color: var(--muted);
            font-size: 13px;
            line-height: 2;
          }

          .about-section {
            border-top: 1px solid var(--border);
          }

          .about-text {
            max-width: 850px;
            margin: auto;
            color: var(--muted);
            text-align: center;
            line-height: 2.5;
            font-size: 15px;
          }

          .page-section {
            min-height: 65vh;
            padding-top: 65px;
          }

          .tech-icon {
            font-size: 38px;
          }

          .technology-card {
            text-align: center;
          }

          .project-icon {
            font-size: 43px;
            margin-bottom: 15px;
          }

          .project-category {
            color: var(--green);
            font-size: 11px;
          }

          .project-link {
            display: inline-block;
            margin-top: 18px;
            color: var(--green);
            font-size: 13px;
          }

          .project-link:hover {
            color: var(--cyan);
          }

          .search-input {
            display: block;
            width: min(100%, 430px);
            margin: 0 auto 30px;
            background: var(--panel);
            border: 1px solid var(--border);
            border-radius: 10px;
            color: white;
            padding: 14px;
            outline: none;
          }

          .search-input:focus, .contact-form input:focus,
          .contact-form textarea:focus, .auth-card input:focus {
            border-color: var(--green);
          }

          .empty-message {
            color: var(--muted);
            text-align: center;
            grid-column: 1 / -1;
          }

          .detail-card {
            max-width: 760px;
            margin: 35px auto;
            padding: 45px;
            border: 1px solid var(--border);
            border-radius: 20px;
            background: var(--panel);
            text-align: center;
          }

          .detail-icon {
            font-size: 65px;
            margin-bottom: 20px;
          }

          .detail-card h1 {
            font-size: 32px;
            margin-bottom: 18px;
          }

          .detail-card p {
            color: var(--muted);
            line-height: 2.3;
            margin-bottom: 20px;
          }

          .developer-card, .dashboard-card {
            max-width: 850px;
            margin: auto;
            display: flex;
            align-items: center;
            gap: 30px;
            padding: 35px;
            border-radius: 18px;
            border: 1px solid var(--border);
            background: var(--panel);
          }

          .developer-avatar {
            flex-shrink: 0;
            width: 125px;
            height: 125px;
            border-radius: 50%;
            display: grid;
            place-items: center;
            background: #10271a;
            border: 2px solid var(--green);
            color: var(--green);
            font-size: 38px;
            font-weight: 900;
          }

          .developer-card h2, .dashboard-card h2 {
            font-size: 24px;
            margin-bottom: 8px;
          }

          .developer-role {
            display: inline-block;
            color: var(--green);
            font-size: 12px;
            margin-bottom: 14px;
          }

          .developer-card p, .dashboard-card p {
            color: var(--muted);
            line-height: 2.2;
            font-size: 14px;
          }

          .skill-tags {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            margin-top: 18px;
            direction: ltr;
          }

          .skill-tags span {
            border: 1px solid var(--border);
            color: var(--green);
            padding: 6px 10px;
            border-radius: 7px;
            font-size: 11px;
          }

          .contact-form {
            max-width: 650px;
            margin: auto;
            padding: 30px;
            border: 1px solid var(--border);
            border-radius: 17px;
            background: var(--panel);
            display: flex;
            flex-direction: column;
            gap: 12px;
          }

          .contact-form label, .auth-card label {
            color: #d7e0da;
            font-size: 13px;
            margin-top: 8px;
          }

          .contact-form input, .contact-form textarea {
            width: 100%;
            padding: 13px;
            border-radius: 8px;
            border: 1px solid var(--border);
            background: #080e0a;
            color: white;
            outline: none;
            resize: vertical;
          }

          .success-message {
            color: var(--green);
            font-size: 13px;
          }

          .dashboard-card {
            margin-bottom: 30px;
          }

          .dashboard-features {
            margin-top: 25px;
          }

          .footer {
            border-top: 1px solid var(--border);
            padding: 35px 20px;
            text-align: center;
            background: #070a08;
          }

          .footer-logo {
            font-size: 25px;
            font-weight: 900;
          }

          .footer p {
            color: var(--muted);
            font-size: 12px;
            margin: 8px 0 15px;
          }

          .footer small {
            color: #65716a;
            font-size: 10px;
          }

          /* Login and Register */

          .auth-page {
            min-height: 100vh;
            width: 100%;
            display: grid;
            grid-template-columns: 1fr 1fr;
            background:
              radial-gradient(ellipse at 15% 20%, rgba(0,230,118,.09), transparent 40%),
              var(--bg);
          }

          .auth-decoration {
            min-height: 100vh;
            position: relative;
            display: grid;
            place-items: center;
            overflow: hidden;
            border-left: 1px solid var(--border);
          }

          .auth-orbit {
            position: absolute;
            width: min(65vw, 500px);
            aspect-ratio: 1;
            border: 1px solid rgba(0,230,118,.25);
            border-radius: 50%;
            box-shadow: 0 0 70px rgba(0,230,118,.07);
          }

          .auth-orbit::before, .auth-orbit::after {
            content: "";
            position: absolute;
            inset: 12%;
            border: 1px solid rgba(0,201,216,.2);
            border-radius: 50%;
          }

          .auth-orbit::after {
            inset: 25%;
            border-color: rgba(0,230,118,.3);
          }

          .auth-brand {
            position: relative;
            z-index: 1;
            font-size: clamp(45px, 7vw, 80px);
            font-weight: 900;
            letter-spacing: 3px;
          }

          .auth-brand p {
            text-align: center;
            font-size: 11px;
            letter-spacing: 5px;
            color: var(--muted);
          }

          .auth-card {
            width: min(100% - 40px, 440px);
            margin: auto;
            padding: 35px;
            background: rgba(16,22,19,.94);
            border: 1px solid var(--border);
            border-radius: 18px;
            box-shadow: 0 20px 70px rgba(0,0,0,.3);
          }

          .auth-logo {
            font-size: 26px;
            font-weight: 900;
            margin-bottom: 30px;
          }

          .auth-card h1 {
            font-size: 25px;
            margin-bottom: 8px;
          }

          .auth-description {
            color: var(--muted);
            font-size: 12px;
            line-height: 2;
            margin-bottom: 25px;
          }

          .auth-card form {
            display: flex;
            flex-direction: column;
            gap: 10px;
          }

          .auth-card input {
            width: 100%;
            padding: 13px;
            background: #080e0a;
            color: white;
            border: 1px solid var(--border);
            border-radius: 8px;
            outline: none;
            min-width: 0;
          }

          .auth-submit {
            width: 100%;
            margin-top: 13px;
          }

          .auth-bottom {
            text-align: center;
            color: var(--muted);
            font-size: 12px;
            margin-top: 24px;
          }

          .auth-bottom a {
            color: var(--green);
            font-weight: 700;
          }

          .error-message {
            color: #ff7777;
            font-size: 12px;
            line-height: 1.8;
          }

          /* Responsive design */

          @media (max-width: 1000px) {
            .nav-inner {
              padding: 12px 20px;
            }

            .nav-links {
              gap: 13px;
            }

            .nav-link {
              font-size: 11px;
            }

            .user-name {
              display: none;
            }

            .hero {
              gap: 15px;
            }

            .feature-grid, .technology-grid, .project-grid {
              grid-template-columns: repeat(2, minmax(0, 1fr));
            }
          }

          @media (max-width: 720px) {
            .nav-inner {
              min-height: 70px;
              flex-wrap: wrap;
              gap: 10px;
            }

            .menu-toggle {
              display: block;
              order: 2;
            }

            .logo {
              order: 1;
              font-size: 23px;
            }

            .nav-user {
              order: 3;
              margin-right: auto;
            }

            .nav-links {
              display: none;
              order: 4;
              width: 100%;
              padding: 15px 5px;
              border-top: 1px solid var(--border);
              flex-direction: column;
              align-items: stretch;
              gap: 0;
            }

            .nav-links.open {
              display: flex;
            }

            .nav-link {
              padding: 12px;
              font-size: 14px;
              border-bottom: 1px solid rgba(255,255,255,.04);
            }

            .hero {
              grid-template-columns: 1fr;
              padding: 65px 22px 45px;
              text-align: center;
              min-height: auto;
            }

            .hero-content {
              margin: auto;
            }

            .hero-content > p {
              margin: auto;
              font-size: 13px;
            }

            .hero-buttons {
              justify-content: center;
            }

            .hero-visual {
              min-height: 330px;
            }

            .hero-center {
              width: 150px;
              height: 150px;
            }

            .hero-center span {
              font-size: 50px;
            }

            .orbit {
              width: 260px;
              height: 260px;
            }

            .orbit-two {
              width: 315px;
              height: 315px;
            }

            .section {
              padding: 55px 20px;
            }

            .auth-page {
              grid-template-columns: 1fr;
              padding: 25px 0;
            }

            .auth-decoration {
              display: none;
            }

            .auth-card {
              width: min(100% - 32px, 460px);
              padding: 27px 22px;
            }

            .developer-card, .dashboard-card {
              flex-direction: column;
              text-align: center;
              padding: 25px 20px;
            }

            .skill-tags {
              justify-content: center;
            }
          }

          @media (max-width: 480px) {
            .feature-grid, .technology-grid, .project-grid {
              grid-template-columns: 1fr;
            }

            .hero h1 {
              font-size: 42px;
            }

            .hero-visual {
              min-height: 280px;
            }

            .hero-center {
              width: 130px;
              height: 130px;
            }

            .hero-center span {
              font-size: 43px;
            }

            .orbit {
              width: 220px;
              height: 220px;
            }

            .orbit-two {
              width: 275px;
              height: 275px;
            }

            .floating-code {
              font-size: 10px;
              padding: 8px 10px;
            }

            .code-three {
              left: 0;
            }

            .auth-card h1 {
              font-size: 21px;
            }

            .detail-card {
              padding: 25px 18px;
            }

            .detail-card h1 {
              font-size: 25px;
            }

            .contact-form {
              padding: 20px 15px;
            }

            .nav-user {
              gap: 7px;
            }

            .logout-btn {
              padding: 7px 10px;
              font-size: 11px;
            }

            .page-section {
              padding-top: 45px;
            }
          }
        `}</style>

        <AppContent />
      </div>
    </BrowserRouter>
  );
}
