import { useState, ChangeEvent } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [activeSection, setActiveSection] = useState('home');
  const [material, setMaterial] = useState('steel');
  const [thickness, setThickness] = useState('3');
  const [area, setArea] = useState('');
  const [coating, setCoating] = useState(false);
  const [color, setColor] = useState('standard');
  const [totalPrice, setTotalPrice] = useState(0);

  const calculatePrice = () => {
    const areaNum = parseFloat(area) || 0;
    const thicknessNum = parseFloat(thickness) || 0;
    
    let cuttingPrice = 0;
    if (material === 'steel') {
      cuttingPrice = areaNum * (50 + thicknessNum * 10);
    } else if (material === 'stainless') {
      cuttingPrice = areaNum * (80 + thicknessNum * 15);
    } else if (material === 'aluminum') {
      cuttingPrice = areaNum * (70 + thicknessNum * 12);
    }
    
    let coatingPrice = 0;
    if (coating) {
      const baseCoating = areaNum * 350;
      const colorMultiplier = color === 'standard' ? 1 : color === 'ral' ? 1.2 : 1.5;
      coatingPrice = baseCoating * colorMultiplier;
    }
    
    setTotalPrice(Math.round(cuttingPrice + coatingPrice));
  };

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-border z-50">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Zap" size={28} className="text-primary" />
              <span className="text-xl font-bold text-secondary">ПлазмаТех</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <button
                onClick={() => scrollToSection('home')}
                className={`text-sm font-semibold transition-colors ${
                  activeSection === 'home' ? 'text-primary' : 'text-foreground hover:text-primary'
                }`}
              >
                Главная
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className={`text-sm font-semibold transition-colors ${
                  activeSection === 'services' ? 'text-primary' : 'text-foreground hover:text-primary'
                }`}
              >
                Услуги
              </button>
              <button
                onClick={() => scrollToSection('portfolio')}
                className={`text-sm font-semibold transition-colors ${
                  activeSection === 'portfolio' ? 'text-primary' : 'text-foreground hover:text-primary'
                }`}
              >
                Портфолио
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className={`text-sm font-semibold transition-colors ${
                  activeSection === 'about' ? 'text-primary' : 'text-foreground hover:text-primary'
                }`}
              >
                О компании
              </button>
              <button
                onClick={() => scrollToSection('contacts')}
                className={`text-sm font-semibold transition-colors ${
                  activeSection === 'contacts' ? 'text-primary' : 'text-foreground hover:text-primary'
                }`}
              >
                Контакты
              </button>
              <button
                onClick={() => scrollToSection('calculator')}
                className={`text-sm font-semibold transition-colors ${
                  activeSection === 'calculator' ? 'text-primary' : 'text-foreground hover:text-primary'
                }`}
              >
                Калькулятор
              </button>
              <button
                onClick={() => scrollToSection('reviews')}
                className={`text-sm font-semibold transition-colors ${
                  activeSection === 'reviews' ? 'text-primary' : 'text-foreground hover:text-primary'
                }`}
              >
                Отзывы
              </button>
            </div>
            <Button onClick={() => scrollToSection('contacts')}>Связаться</Button>
          </div>
        </nav>
      </header>

      <main className="pt-20">
        <section id="home" className="py-24 bg-gradient-to-b from-muted/50 to-background">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-secondary mb-6">
                Плазменная резка и порошковая покраска металла
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Современное оборудование и высококвалифицированные специалисты для реализации проектов любой сложности
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" onClick={() => scrollToSection('services')}>
                  <Icon name="Settings" size={20} className="mr-2" />
                  Наши услуги
                </Button>
                <Button size="lg" variant="outline" onClick={() => scrollToSection('portfolio')}>
                  <Icon name="Image" size={20} className="mr-2" />
                  Портфолио
                </Button>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-16 max-w-5xl mx-auto">
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon name="Gauge" size={24} className="text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-2">Высокая точность</h3>
                <p className="text-sm text-muted-foreground">
                  Современное оборудование обеспечивает точность реза до 0.1 мм
                </p>
              </Card>
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon name="Clock" size={24} className="text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-2">Быстрые сроки</h3>
                <p className="text-sm text-muted-foreground">
                  Выполнение заказов в срок благодаря автоматизированному производству
                </p>
              </Card>
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon name="Award" size={24} className="text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-2">Гарантия качества</h3>
                <p className="text-sm text-muted-foreground">
                  Контроль качества на всех этапах производства
                </p>
              </Card>
            </div>
          </div>
        </section>

        <section id="services" className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-secondary mb-4">Наши услуги</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Комплексные решения для металлообработки с использованием передовых технологий
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <Card className="overflow-hidden hover:shadow-xl transition-shadow">
                <img
                  src="https://cdn.poehali.dev/projects/6903b4db-8217-4398-bc7c-bdc75f4401a9/files/5f3d4224-aa8b-42ec-a801-352af2ca68e3.jpg"
                  alt="Плазменная резка металла"
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Icon name="Scissors" size={24} className="text-primary" />
                    <h3 className="text-2xl font-bold">Плазменная резка</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Высокоточная резка металла толщиной от 0.5 до 50 мм. Работаем с черными и цветными металлами.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={18} className="text-primary mt-1 flex-shrink-0" />
                      <span className="text-sm">ЧПУ станки с рабочим полем до 3000×1500 мм</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={18} className="text-primary mt-1 flex-shrink-0" />
                      <span className="text-sm">Резка сложных контуров и отверстий</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={18} className="text-primary mt-1 flex-shrink-0" />
                      <span className="text-sm">Минимальный нагрев и деформация металла</span>
                    </li>
                  </ul>
                </div>
              </Card>

              <Card className="overflow-hidden hover:shadow-xl transition-shadow">
                <img
                  src="https://cdn.poehali.dev/projects/6903b4db-8217-4398-bc7c-bdc75f4401a9/files/c54b1b58-c53e-45b4-9d4f-d9cb794b22d9.jpg"
                  alt="Порошковая покраска"
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Icon name="Paintbrush" size={24} className="text-primary" />
                    <h3 className="text-2xl font-bold">Порошковая покраска</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Качественное защитно-декоративное покрытие с широкой палитрой цветов и текстур.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={18} className="text-primary mt-1 flex-shrink-0" />
                      <span className="text-sm">Камера размером до 4000×2000×2500 мм</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={18} className="text-primary mt-1 flex-shrink-0" />
                      <span className="text-sm">Более 500 цветов по каталогу RAL</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={18} className="text-primary mt-1 flex-shrink-0" />
                      <span className="text-sm">Подготовка поверхности и грунтование</span>
                    </li>
                  </ul>
                </div>
              </Card>
            </div>
          </div>
        </section>

        <section id="portfolio" className="py-24 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-secondary mb-4">Портфолио работ</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Примеры выполненных проектов для различных отраслей промышленности
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
              {[
                { 
                  title: 'Ограждения и перила', 
                  desc: 'Декоративные металлические конструкции с порошковой покраской',
                  image: 'https://cdn.poehali.dev/projects/6903b4db-8217-4398-bc7c-bdc75f4401a9/files/00314690-309a-4e38-bff6-ac4aeab80084.jpg'
                },
                { 
                  title: 'Металлоконструкции', 
                  desc: 'Каркасы зданий с защитным покрытием',
                  image: 'https://cdn.poehali.dev/projects/6903b4db-8217-4398-bc7c-bdc75f4401a9/files/66fcc714-1c8d-446b-82ac-4ac4f38b1551.jpg'
                },
                { 
                  title: 'Сложная резка', 
                  desc: 'Детали машин и запчасти для спецтехники',
                  image: 'https://cdn.poehali.dev/projects/6903b4db-8217-4398-bc7c-bdc75f4401a9/files/1ca27cac-f59e-4b6e-8af0-ebf02e119220.jpg'
                },
                { 
                  title: 'Рекламные конструкции', 
                  desc: 'Объемные буквы и вывески',
                  image: 'https://cdn.poehali.dev/projects/6903b4db-8217-4398-bc7c-bdc75f4401a9/files/b607d90d-624f-4a1f-ab49-72e13b35662c.jpg'
                },
                { 
                  title: 'Мебельные детали', 
                  desc: 'Компоненты для современной металлической мебели',
                  image: 'https://cdn.poehali.dev/projects/6903b4db-8217-4398-bc7c-bdc75f4401a9/files/6c91855c-ca2b-42a1-8e76-477d12275dbf.jpg'
                },
                { 
                  title: 'Промышленное оборудование', 
                  desc: 'Детали для тяжелой техники',
                  image: 'https://cdn.poehali.dev/projects/6903b4db-8217-4398-bc7c-bdc75f4401a9/files/b55e1b78-1ef4-4670-bc3d-f004e0e4000a.jpg'
                },
              ].map((item, idx) => (
                <Card key={idx} className="overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1 duration-300">
                  <div className="relative group">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <Button size="lg" variant="outline" onClick={() => scrollToSection('contacts')}>
                <Icon name="MessageSquare" size={20} className="mr-2" />
                Обсудить ваш проект
              </Button>
            </div>
          </div>
        </section>

        <section id="about" className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-4xl font-bold text-secondary mb-6">О компании</h2>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Компания ПлазмаТех специализируется на высокоточной плазменной резке металла и профессиональной порошковой покраске. 
                    Мы используем современное автоматизированное оборудование ведущих мировых производителей.
                  </p>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Наш опыт и техническое оснащение позволяют выполнять заказы любой сложности в кратчайшие сроки 
                    с гарантией высокого качества продукции.
                  </p>
                  <Button onClick={() => scrollToSection('contacts')}>
                    <Icon name="Phone" size={18} className="mr-2" />
                    Обсудить проект
                  </Button>
                </div>
                <div>
                  <img
                    src="https://cdn.poehali.dev/projects/6903b4db-8217-4398-bc7c-bdc75f4401a9/files/c10e21ab-6806-4c58-8eb4-7745c3613a8c.jpg"
                    alt="Производство"
                    className="rounded-lg shadow-xl"
                  />
                </div>
              </div>

              <div className="mt-16 grid md:grid-cols-2 gap-8">
                <Card className="p-6">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <Icon name="Cpu" size={24} className="text-primary" />
                    Оборудование для резки
                  </h3>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <Icon name="ChevronRight" size={16} className="text-primary mt-1 flex-shrink-0" />
                      <span>Плазменные станки с ЧПУ Hypertherm</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="ChevronRight" size={16} className="text-primary mt-1 flex-shrink-0" />
                      <span>Системы автоматического раскроя металла</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="ChevronRight" size={16} className="text-primary mt-1 flex-shrink-0" />
                      <span>Рабочие столы с автоматической очисткой</span>
                    </li>
                  </ul>
                </Card>

                <Card className="p-6">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <Icon name="Droplet" size={24} className="text-primary" />
                    Оборудование для покраски
                  </h3>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <Icon name="ChevronRight" size={16} className="text-primary mt-1 flex-shrink-0" />
                      <span>Камера порошковой покраски с рекуперацией</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="ChevronRight" size={16} className="text-primary mt-1 flex-shrink-0" />
                      <span>Конвейерная печь полимеризации</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="ChevronRight" size={16} className="text-primary mt-1 flex-shrink-0" />
                      <span>Автоматическая линия химподготовки</span>
                    </li>
                  </ul>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section id="reviews" className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-secondary mb-4">Отзывы клиентов</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Что говорят о нас наши клиенты
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name="User" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold">Дмитрий Соколов</h4>
                    <p className="text-sm text-muted-foreground">ООО "СтройМонтаж"</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" size={16} className="text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Заказывали резку металлоконструкций для производственного цеха. Всё выполнено точно по чертежам, сроки соблюдены. Качество резки отличное, никаких претензий. Рекомендую!
                </p>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name="User" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold">Елена Морозова</h4>
                    <p className="text-sm text-muted-foreground">ИП Морозова</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" size={16} className="text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Делали у ребят объёмные буквы для вывески магазина. Порошковая покраска просто великолепная - яркий насыщенный цвет, покрытие ровное. Прошло полгода, выглядит как новая!
                </p>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name="User" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold">Александр Петров</h4>
                    <p className="text-sm text-muted-foreground">ООО "ТехСервис"</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" size={16} className="text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Постоянно заказываем детали для спецтехники. Оперативно, качественно, цены адекватные. Менеджеры всегда на связи, технологи грамотно консультируют. Надёжные партнёры!
                </p>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name="User" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold">Ирина Волкова</h4>
                    <p className="text-sm text-muted-foreground">Дизайн-студия "Лофт"</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" size={16} className="text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Изготавливали декоративные металлические элементы для интерьера. Сложные формы вырезали идеально! Покраска в нестандартный цвет - тон в тон с образцом. Очень довольны результатом.
                </p>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name="User" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold">Сергей Новиков</h4>
                    <p className="text-sm text-muted-foreground">Частный заказчик</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" size={16} className="text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Заказывал ограждение для террасы. Ребята помогли с разработкой эскиза, подобрали оптимальное решение. Монтаж прошёл быстро, забор получился красивый и крепкий. Спасибо!
                </p>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name="User" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold">Михаил Кузнецов</h4>
                    <p className="text-sm text-muted-foreground">АО "МашПром"</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" size={16} className="text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Сотрудничаем уже второй год. Выполняют большие объёмы резки и покраски для нашего производства. Всегда укладываются в сроки, качество стабильное. Профессионалы своего дела!
                </p>
              </Card>
            </div>
          </div>
        </section>

        <section id="calculator" className="py-24 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-secondary mb-4">Калькулятор стоимости</h2>
                <p className="text-lg text-muted-foreground">
                  Рассчитайте ориентировочную стоимость услуг онлайн
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <Card className="p-6">
                  <h3 className="text-xl font-bold mb-6">Параметры заказа</h3>
                  <div className="space-y-6">
                    <div>
                      <label className="text-sm font-semibold mb-2 block">Тип металла</label>
                      <select
                        value={material}
                        onChange={(e: ChangeEvent<HTMLSelectElement>) => setMaterial(e.target.value)}
                        className="w-full p-2 border border-input rounded-md bg-background"
                      >
                        <option value="steel">Черная сталь</option>
                        <option value="stainless">Нержавеющая сталь</option>
                        <option value="aluminum">Алюминий</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-sm font-semibold mb-2 block">Толщина металла (мм)</label>
                      <Input
                        type="number"
                        value={thickness}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => setThickness(e.target.value)}
                        placeholder="3"
                        min="0.5"
                        max="50"
                        step="0.5"
                      />
                    </div>

                    <div>
                      <label className="text-sm font-semibold mb-2 block">Площадь резки (м²)</label>
                      <Input
                        type="number"
                        value={area}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => setArea(e.target.value)}
                        placeholder="1.5"
                        min="0.1"
                        step="0.1"
                      />
                    </div>

                    <div className="border-t border-border pt-6">
                      <div className="flex items-center gap-3 mb-4">
                        <input
                          type="checkbox"
                          id="coating"
                          checked={coating}
                          onChange={(e: ChangeEvent<HTMLInputElement>) => setCoating(e.target.checked)}
                          className="w-5 h-5"
                        />
                        <label htmlFor="coating" className="text-sm font-semibold cursor-pointer">
                          Добавить порошковую покраску
                        </label>
                      </div>

                      {coating && (
                        <div>
                          <label className="text-sm font-semibold mb-2 block">Тип покрытия</label>
                          <select
                            value={color}
                            onChange={(e: ChangeEvent<HTMLSelectElement>) => setColor(e.target.value)}
                            className="w-full p-2 border border-input rounded-md bg-background"
                          >
                            <option value="standard">Стандартные цвета</option>
                            <option value="ral">RAL каталог</option>
                            <option value="special">Спецэффекты (металлик, текстура)</option>
                          </select>
                        </div>
                      )}
                    </div>

                    <Button className="w-full" size="lg" onClick={calculatePrice}>
                      <Icon name="Calculator" size={20} className="mr-2" />
                      Рассчитать стоимость
                    </Button>
                  </div>
                </Card>

                <div className="space-y-6">
                  <Card className="p-6 bg-primary/5 border-primary/20">
                    <h3 className="text-xl font-bold mb-4">Итоговая стоимость</h3>
                    <div className="text-5xl font-bold text-primary mb-2">
                      {totalPrice > 0 ? `${totalPrice.toLocaleString('ru-RU')} ₽` : '—'}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Ориентировочная стоимость без учёта НДС
                    </p>
                  </Card>

                  <Card className="p-6">
                    <h4 className="font-bold mb-3 flex items-center gap-2">
                      <Icon name="Info" size={20} className="text-primary" />
                      Базовые расценки
                    </h4>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between pb-2 border-b border-border">
                        <span className="text-muted-foreground">Плазменная резка стали</span>
                        <span className="font-semibold">от 50 ₽/м²</span>
                      </div>
                      <div className="flex justify-between pb-2 border-b border-border">
                        <span className="text-muted-foreground">Резка нержавейки</span>
                        <span className="font-semibold">от 80 ₽/м²</span>
                      </div>
                      <div className="flex justify-between pb-2 border-b border-border">
                        <span className="text-muted-foreground">Резка алюминия</span>
                        <span className="font-semibold">от 70 ₽/м²</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Порошковая покраска</span>
                        <span className="font-semibold">от 350 ₽/м²</span>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6 bg-muted/30">
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      * Окончательная цена рассчитывается индивидуально и зависит от сложности контуров, 
                      объема заказа, срочности выполнения и других факторов. Для точного расчёта свяжитесь с нами.
                    </p>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contacts" className="py-24 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-secondary mb-4">Контакты</h2>
                <p className="text-lg text-muted-foreground">
                  Свяжитесь с нами для обсуждения вашего проекта
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <Card className="p-6">
                  <h3 className="text-xl font-bold mb-6">Напишите нам</h3>
                  <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                    <div>
                      <label className="text-sm font-semibold mb-2 block">Ваше имя</label>
                      <Input placeholder="Иван Иванов" />
                    </div>
                    <div>
                      <label className="text-sm font-semibold mb-2 block">Телефон</label>
                      <Input type="tel" placeholder="+7 (___) ___-__-__" />
                    </div>
                    <div>
                      <label className="text-sm font-semibold mb-2 block">Email</label>
                      <Input type="email" placeholder="example@mail.ru" />
                    </div>
                    <div>
                      <label className="text-sm font-semibold mb-2 block">Сообщение</label>
                      <Textarea placeholder="Опишите ваш проект..." rows={4} />
                    </div>
                    <Button className="w-full">
                      <Icon name="Send" size={18} className="mr-2" />
                      Отправить заявку
                    </Button>
                  </form>
                </Card>

                <div className="space-y-6">
                  <Card className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon name="Phone" size={24} className="text-primary" />
                      </div>
                      <div>
                        <h4 className="font-bold mb-1">Телефон</h4>
                        <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                        <p className="text-muted-foreground">+7 (495) 123-45-68</p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon name="Mail" size={24} className="text-primary" />
                      </div>
                      <div>
                        <h4 className="font-bold mb-1">Email</h4>
                        <p className="text-muted-foreground">info@plazmatech.ru</p>
                        <p className="text-muted-foreground">order@plazmatech.ru</p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon name="MapPin" size={24} className="text-primary" />
                      </div>
                      <div>
                        <h4 className="font-bold mb-1">Адрес</h4>
                        <p className="text-muted-foreground">г. Москва, ул. Промышленная, д. 15</p>
                        <p className="text-sm text-muted-foreground mt-2">Пн-Пт: 9:00 - 18:00</p>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-secondary text-white py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Icon name="Zap" size={24} className="text-primary" />
              <span className="font-bold">ПлазмаТех</span>
            </div>
            <p className="text-sm text-white/70">
              © 2024 ПлазмаТех. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}