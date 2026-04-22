import Icon from "@/components/ui/icon";

const integrations = [
  { name: "1C", emoji: "🏢" },
  { name: "Битрикс24", emoji: "🔶" },
  { name: "amoCRM", emoji: "💼" },
  { name: "Telegram", emoji: "✈️" },
  { name: "WhatsApp", emoji: "🟢" },
  { name: "Google", emoji: "🔵" },
  { name: "Slack", emoji: "💬" },
  { name: "Notion", emoji: "📝" },
  { name: "Zapier", emoji: "⚡" },
  { name: "HubSpot", emoji: "🟠" },
  { name: "Stripe", emoji: "💳" },
  { name: "Airtable", emoji: "🗃️" },
];

const cases = [
  {
    number: "01",
    title: "Заявки без потерь",
    desc: "Автоматический приём заявок с сайта, почты и мессенджеров — все попадают в CRM без участия менеджера.",
    accent: "bg-violet-50 border-violet-100",
    numColor: "text-violet-200",
    numHover: "group-hover:text-violet-300",
  },
  {
    number: "02",
    title: "Документооборот",
    desc: "Счета, акты и договоры формируются и отправляются клиенту автоматически по шаблону.",
    accent: "bg-sky-50 border-sky-100",
    numColor: "text-sky-200",
    numHover: "group-hover:text-sky-300",
  },
  {
    number: "03",
    title: "Отчётность",
    desc: "Ежедневные отчёты по продажам, складу и финансам — в одном дашборде без Excel.",
    accent: "bg-emerald-50 border-emerald-100",
    numColor: "text-emerald-200",
    numHover: "group-hover:text-emerald-300",
  },
  {
    number: "04",
    title: "Уведомления",
    desc: "Сотрудники и клиенты получают нужную информацию в нужный момент — в Telegram или на почту.",
    accent: "bg-amber-50 border-amber-100",
    numColor: "text-amber-200",
    numHover: "group-hover:text-amber-300",
  },
];

const features = [
  {
    icon: "Zap",
    title: "Быстрый старт",
    desc: "Первые автоматизации запускаем за 3–5 дней. Без долгих согласований и ТЗ на 50 страниц.",
    iconBg: "bg-violet-100",
    iconColor: "text-violet-600",
  },
  {
    icon: "RefreshCw",
    title: "Работает само",
    desc: "Процессы идут 24/7. Люди занимаются задачами, а не перекладыванием данных.",
    iconBg: "bg-sky-100",
    iconColor: "text-sky-600",
  },
  {
    icon: "TrendingUp",
    title: "Измеримый результат",
    desc: "Считаем, сколько часов и денег экономит каждая автоматизация.",
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-600",
  },
];

const pains = [
  "Используете большое количество Excel-файлов в работе?",
  "Монотонное копирование данных из файла в файл отнимает часы?",
  "Сотрудники допускают ошибки и опечатки при переносе данных?",
  "Формулы и связи в таблицах постоянно слетают?",
  "Сборка отчёта из нескольких файлов превращается в настоящий ад?",
  "Таблицы стали огромными и нечитабельными?",
  "Собрать данные из разных источников в один файл — долго, трудно, а иногда невозможно?",
];

export default function Index() {
  return (
    <div className="min-h-screen bg-white font-sans text-neutral-900 overflow-x-hidden">

      <div className="h-[2px] bg-gradient-to-r from-violet-500 via-sky-500 to-emerald-500" />

      <header className="px-8 py-6 flex items-center justify-between max-w-5xl mx-auto">
        <span
          className="font-display italic text-2xl tracking-wide opacity-0 animate-fade-in bg-gradient-to-r from-violet-600 to-sky-500 bg-clip-text text-transparent"
          style={{ animationDelay: "0.1s" }}
        >
          autoflow.
        </span>
        <a
          href="mailto:hello@example.com"
          className="opacity-0 animate-fade-in text-xs tracking-widest uppercase text-neutral-500 border-b border-neutral-300 pb-px hover:text-violet-600 hover:border-violet-400 transition-colors duration-200"
          style={{ animationDelay: "0.3s" }}
        >
          Связаться
        </a>
      </header>

      <main className="max-w-5xl mx-auto px-8 pt-20 pb-32">

        {/* Hero */}
        <section className="mb-36">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p
                className="opacity-0 animate-fade-in text-xs tracking-[0.25em] uppercase text-neutral-400 mb-8"
                style={{ animationDelay: "0.4s" }}
              >
                Автоматизация · Интеграции · Рост эффективности
              </p>
              <h1
                className="opacity-0 animate-fade-in font-display text-[clamp(2.5rem,6vw,5rem)] leading-none font-light text-neutral-900 mb-8"
                style={{ animationDelay: "0.5s" }}
              >
                Вы можете вести<br />
                <em className="not-italic bg-gradient-to-r from-violet-500 via-sky-500 to-emerald-500 bg-clip-text text-transparent">
                  бизнес в разы эффективнее
                </em>
              </h1>
              <div
                className="opacity-0 animate-fade-in max-w-lg"
                style={{ animationDelay: "0.7s" }}
              >
                <p className="text-neutral-500 text-lg leading-relaxed">
                  Автоматизируем бизнес-процессы: заявки, документы, отчёты, уведомления.
                  Ваши сотрудники делают то, что важно, — остальное работает само.
                </p>
              </div>
              <div
                className="opacity-0 animate-fade-in flex gap-4 mt-10"
                style={{ animationDelay: "0.9s" }}
              >
                <a
                  href="mailto:hello@example.com"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-600 to-sky-500 text-white text-sm tracking-wide px-8 py-4 hover:opacity-90 transition-opacity duration-200"
                >
                  Обсудить проект
                  <Icon name="ArrowRight" size={14} />
                </a>
              </div>
            </div>
            <div
              className="opacity-0 animate-fade-in"
              style={{ animationDelay: "0.6s" }}
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-violet-100 via-sky-50 to-emerald-50 rounded-2xl blur-2xl opacity-60" />
                <img
                  src="https://cdn.poehali.dev/projects/493ccf67-107e-4d5d-a3d4-d85c643cb77d/files/3e096512-aab7-43ec-a3bc-1df63fb2fb52.jpg"
                  alt="Веб-портал автоматизации"
                  className="relative w-full object-cover rounded-xl shadow-2xl shadow-violet-100"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Excel-боли */}
        <section
          className="opacity-0 animate-fade-in mb-36"
          style={{ animationDelay: "1.0s" }}
        >
          <div className="border border-neutral-200 p-10 md:p-14 relative overflow-hidden">
            {/* Цветной акцент-угол */}
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-violet-500 via-sky-400 to-emerald-400" />

            <div className="flex items-start gap-4 mb-10 pl-4">
              <div className="w-8 h-8 rounded-full bg-violet-100 flex items-center justify-center shrink-0 mt-1">
                <Icon name="FileSpreadsheet" size={14} className="text-violet-600" />
              </div>
              <div>
                <p className="text-xs tracking-widest uppercase text-violet-500 mb-2">Узнаёте себя?</p>
                <h2 className="font-display italic text-3xl md:text-4xl font-light text-neutral-900 leading-tight">
                  Работа в Excel<br />
                  <span className="text-neutral-400">съедает ваше время</span>
                </h2>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-0 border-t border-neutral-200 pl-4">
              {pains.map((pain, i) => (
                <div
                  key={i}
                  className="border-b border-neutral-200 py-5 flex items-start gap-4 group"
                  style={{
                    paddingRight: (i + 1) % 2 !== 0 ? "2rem" : 0,
                    paddingLeft: (i + 1) % 2 === 0 ? "2rem" : 0,
                    borderBottom: i >= pains.length - 1 ? "none" : undefined,
                    borderLeft: (i + 1) % 2 === 0 ? "1px solid #e5e7eb" : "none",
                  }}
                >
                  <span className="text-violet-400 font-display text-lg shrink-0 mt-0.5">—</span>
                  <p className="text-sm text-neutral-600 leading-relaxed">{pain}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 pt-8 border-t border-neutral-200 pl-4">
              <p className="text-neutral-900 font-semibold text-sm tracking-wide">
                Мы решаем все эти проблемы — один раз и навсегда.
              </p>
              <p className="text-neutral-500 text-sm mt-1">
                Процессы автоматизируются, данные перемещаются сами, ошибок не бывает.
              </p>
            </div>
          </div>
        </section>

        {/* Что автоматизируем */}
        <div
          className="opacity-0 animate-fade-in flex items-center gap-6 mb-16"
          style={{ animationDelay: "1.05s" }}
        >
          <div className="h-px flex-1 bg-neutral-200" />
          <span className="text-xs tracking-widest uppercase text-neutral-400">
            Что автоматизируем
          </span>
          <div className="h-px flex-1 bg-neutral-200" />
        </div>

        <section
          className="opacity-0 animate-fade-in mb-36"
          style={{ animationDelay: "1.05s" }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 border border-neutral-200">
            {cases.map((item, i) => (
              <div
                key={item.number}
                className={`group border-b border-r border-neutral-200 p-10 hover:${item.accent} transition-colors duration-300 cursor-default`}
                style={{
                  borderRight: (i + 1) % 2 === 0 ? "none" : undefined,
                  borderBottom: i >= cases.length - 2 ? "none" : undefined,
                }}
              >
                <span className={`font-display text-4xl ${item.numColor} font-light block mb-4 ${item.numHover} transition-colors duration-300`}>
                  {item.number}
                </span>
                <h3 className="font-semibold text-neutral-900 mb-3 tracking-wide">
                  {item.title}
                </h3>
                <p className="text-sm text-neutral-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Преимущества */}
        <div
          className="opacity-0 animate-fade-in flex items-center gap-6 mb-16"
          style={{ animationDelay: "1.1s" }}
        >
          <div className="h-px flex-1 bg-neutral-200" />
          <span className="text-xs tracking-widest uppercase text-neutral-400">
            Подход
          </span>
          <div className="h-px flex-1 bg-neutral-200" />
        </div>

        <section
          className="opacity-0 animate-fade-in mb-36"
          style={{ animationDelay: "1.15s" }}
        >
          <div className="grid md:grid-cols-3 border-t border-neutral-200">
            {features.map((item, i) => (
              <div
                key={item.title}
                className="border-b md:border-b-0 md:border-r last:border-r-0 border-neutral-200 pt-10 pb-10"
                style={{ paddingLeft: i === 0 ? 0 : "2rem", paddingRight: "2rem" }}
              >
                <div className={`w-9 h-9 rounded-full ${item.iconBg} flex items-center justify-center mb-6`}>
                  <Icon name={item.icon} size={16} className={item.iconColor} />
                </div>
                <h3 className="font-semibold text-neutral-900 mb-3 text-sm tracking-wide">
                  {item.title}
                </h3>
                <p className="text-sm text-neutral-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Интеграции */}
        <div
          className="opacity-0 animate-fade-in flex items-center gap-6 mb-16"
          style={{ animationDelay: "1.2s" }}
        >
          <div className="h-px flex-1 bg-neutral-200" />
          <span className="text-xs tracking-widest uppercase text-neutral-400">
            Интеграции
          </span>
          <div className="h-px flex-1 bg-neutral-200" />
        </div>

        <section
          className="opacity-0 animate-fade-in mb-36"
          style={{ animationDelay: "1.25s" }}
        >
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 border border-neutral-200">
            {integrations.map((item, i) => (
              <div
                key={item.name}
                className="group border-r border-b border-neutral-200 p-5 flex flex-col items-center gap-2 hover:bg-violet-50 transition-colors duration-200 cursor-default"
                style={{
                  borderRight: (i + 1) % 6 === 0 ? "none" : undefined,
                  borderBottom: i >= integrations.length - 6 ? "none" : undefined,
                }}
              >
                <span className="text-xl">{item.emoji}</span>
                <span className="text-xs text-neutral-500 tracking-wide group-hover:text-violet-700 transition-colors duration-200 text-center">
                  {item.name}
                </span>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-neutral-400 text-center">
            и другие системы по запросу
          </p>
        </section>

        {/* CTA */}
        <section
          className="opacity-0 animate-fade-in"
          style={{ animationDelay: "1.3s" }}
        >
          <div className="relative overflow-hidden border border-neutral-200 p-12 md:p-16 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div className="absolute inset-0 bg-gradient-to-br from-violet-50 via-white to-sky-50 pointer-events-none" />
            <div className="relative">
              <h2 className="font-display italic text-3xl md:text-4xl font-light text-neutral-900 mb-2">
                Готовы автоматизировать?
              </h2>
              <p className="text-neutral-500 text-sm">
                Расскажите о процессе — найдём, что можно убрать с плеч команды.
              </p>
            </div>
            <div className="relative flex flex-col sm:flex-row gap-4 shrink-0">
              <a
                href="mailto:hello@example.com"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-600 to-sky-500 text-white text-sm tracking-wide px-8 py-4 hover:opacity-90 transition-opacity duration-200"
              >
                Написать
                <Icon name="ArrowRight" size={14} />
              </a>
              <a
                href="tel:+79000000000"
                className="inline-flex items-center gap-2 border border-neutral-200 bg-white text-neutral-700 text-sm tracking-wide px-8 py-4 hover:border-violet-400 hover:text-violet-700 transition-colors duration-200"
              >
                <Icon name="Phone" size={14} />
                +7 900 000-00-00
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-neutral-200 px-8 py-8 max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="font-display italic text-lg bg-gradient-to-r from-violet-500 to-sky-500 bg-clip-text text-transparent">
          autoflow.
        </span>
        <p className="text-xs text-neutral-400 tracking-wide">
          © 2026 — Автоматизация бизнес-процессов
        </p>
        <a
          href="mailto:hello@example.com"
          className="text-xs text-neutral-400 hover:text-violet-600 transition-colors duration-200 tracking-wide"
        >
          hello@example.com
        </a>
      </footer>

      <div className="h-[2px] bg-gradient-to-r from-violet-500 via-sky-500 to-emerald-500" />
    </div>
  );
}