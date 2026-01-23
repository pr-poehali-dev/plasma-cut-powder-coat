import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'categories', 'gallery', 'calculator', 'advantages', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const categories = [
    {
      id: 'kitchens',
      title: 'Кухни',
      description: 'Современные кухни по индивидуальным размерам с использованием натуральных материалов',
      images: [
        'https://cdn.poehali.dev/projects/6903b4db-8217-4398-bc7c-bdc75f4401a9/files/cb1e636d-2185-4858-8eaf-81c5660507b8.jpg',
        'https://cdn.poehali.dev/projects/6903b4db-8217-4398-bc7c-bdc75f4401a9/files/aa0ac715-5fcc-4027-86de-4a7c1361b31b.jpg',
        'https://cdn.poehali.dev/projects/6903b4db-8217-4398-bc7c-bdc75f4401a9/files/4e34f4a4-2319-4608-837e-80d17b2beb99.jpg',
      ]
    },
    {
      id: 'wardrobes',
      title: 'Шкафы',
      description: 'Вместительные шкафы и гардеробные системы для вашего комфорта',
      images: [
        'https://cdn.poehali.dev/projects/6903b4db-8217-4398-bc7c-bdc75f4401a9/files/e4ad96f0-5c37-46fa-b359-948cbc041b86.jpg',
        'https://cdn.poehali.dev/projects/6903b4db-8217-4398-bc7c-bdc75f4401a9/files/9e853ede-77eb-448d-8b9e-953fb5061225.jpg',
      ]
    },
    {
      id: 'dressers',
      title: 'Комоды',
      description: 'Элегантные комоды и тумбы из премиальных материалов',
      images: [
        'https://cdn.poehali.dev/projects/6903b4db-8217-4398-bc7c-bdc75f4401a9/files/79fe4acc-d6fe-4ef4-917d-daeb95fce4e5.jpg',
        'https://cdn.poehali.dev/projects/6903b4db-8217-4398-bc7c-bdc75f4401a9/files/17350d07-7899-4efc-ad36-542860044756.jpg',
      ]
    },
    {
      id: 'beds',
      title: 'Кровати',
      description: 'Комфортные кровати с изголовьями в современном стиле',
      images: [
        'https://cdn.poehali.dev/projects/6903b4db-8217-4398-bc7c-bdc75f4401a9/files/d08d5424-6415-414c-b6ae-3ab5f1255b6f.jpg',
        'https://cdn.poehali.dev/projects/6903b4db-8217-4398-bc7c-bdc75f4401a9/files/e4381863-7415-41d7-bcc2-5c2ec44a4206.jpg',
      ]
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState('');
  const [width, setWidth] = useState('');
  const [height, setHeight] = useState('');
  const [depth, setDepth] = useState('');
  const [color, setColor] = useState('');
  const [material, setMaterial] = useState('');
  const [facade, setFacade] = useState('');
  const [hardware, setHardware] = useState('');
  const [calculatorStep, setCalculatorStep] = useState(1);
  const [generatedImage, setGeneratedImage] = useState('');
  const [estimatedPrice, setEstimatedPrice] = useState(0);
  const [isGenerating, setIsGenerating] = useState(false);

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [comment, setComment] = useState('');

  const handleCalculate = async () => {
    setIsGenerating(true);
    
    const basePrice = selectedCategory === 'Кухни' ? 150000 :
                     selectedCategory === 'Шкафы' ? 80000 :
                     selectedCategory === 'Комоды' ? 45000 : 65000;
    
    const sizeMultiplier = (parseInt(width) || 100) * (parseInt(height) || 100) * (parseInt(depth) || 50) / 500000;
    const hardwareMultiplier = hardware === 'Премиум' ? 1.5 : hardware === 'Стандарт' ? 1.2 : 1;
    
    const price = Math.round(basePrice * sizeMultiplier * hardwareMultiplier);
    setEstimatedPrice(price);

    setTimeout(() => {
      const categoryImages = categories.find(c => c.title === selectedCategory)?.images || [];
      setGeneratedImage(categoryImages[0] || '');
      setIsGenerating(false);
    }, 2000);
  };

  const handleSubmitMeasurement = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Спасибо, ${name}! Мы свяжемся с вами по телефону ${phone} для уточнения деталей замера.`);
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Icon name="Trees" size={24} className="text-primary-foreground" />
              </div>
              <span className="text-2xl font-bold text-secondary">StoneTree</span>
            </div>

            <div className="hidden md:flex items-center gap-8">
              <button
                onClick={() => scrollToSection('home')}
                className={`text-sm font-medium transition-colors ${
                  activeSection === 'home' ? 'text-primary' : 'text-foreground hover:text-primary'
                }`}
              >
                Главная
              </button>
              <button
                onClick={() => scrollToSection('categories')}
                className={`text-sm font-medium transition-colors ${
                  activeSection === 'categories' ? 'text-primary' : 'text-foreground hover:text-primary'
                }`}
              >
                Категории
              </button>
              <button
                onClick={() => scrollToSection('gallery')}
                className={`text-sm font-medium transition-colors ${
                  activeSection === 'gallery' ? 'text-primary' : 'text-foreground hover:text-primary'
                }`}
              >
                Галерея
              </button>
              <button
                onClick={() => scrollToSection('calculator')}
                className={`text-sm font-medium transition-colors ${
                  activeSection === 'calculator' ? 'text-primary' : 'text-foreground hover:text-primary'
                }`}
              >
                Калькулятор
              </button>
              <button
                onClick={() => scrollToSection('advantages')}
                className={`text-sm font-medium transition-colors ${
                  activeSection === 'advantages' ? 'text-primary' : 'text-foreground hover:text-primary'
                }`}
              >
                Преимущества
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className={`text-sm font-medium transition-colors ${
                  activeSection === 'contact' ? 'text-primary' : 'text-foreground hover:text-primary'
                }`}
              >
                Контакты
              </button>
            </div>

            <Button onClick={() => scrollToSection('calculator')} className="hidden md:flex">
              Рассчитать стоимость
            </Button>

            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Icon name={mobileMenuOpen ? 'X' : 'Menu'} size={24} />
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 flex flex-col gap-4">
              <button onClick={() => scrollToSection('home')} className="text-left">Главная</button>
              <button onClick={() => scrollToSection('categories')} className="text-left">Категории</button>
              <button onClick={() => scrollToSection('gallery')} className="text-left">Галерея</button>
              <button onClick={() => scrollToSection('calculator')} className="text-left">Калькулятор</button>
              <button onClick={() => scrollToSection('advantages')} className="text-left">Преимущества</button>
              <button onClick={() => scrollToSection('contact')} className="text-left">Контакты</button>
            </div>
          )}
        </nav>
      </header>

      <main className="pt-20">
        <section id="home" className="min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-background via-muted/20 to-accent/10">
          <div className="container mx-auto px-6 py-20 text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-secondary mb-6 leading-tight">
              StoneTree — мебель на заказ<br />по индивидуальным размерам
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto">
              Кухни, шкафы, комоды и кровати в современном стиле
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" onClick={() => scrollToSection('calculator')} className="text-lg px-8">
                Рассчитать стоимость
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollToSection('contact')} className="text-lg px-8">
                Вызвать замерщика
              </Button>
            </div>
          </div>
        </section>

        <section id="categories" className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">Категории мебели</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Производим мебель премиального качества из натуральных материалов
              </p>
            </div>

            <div className="space-y-24">
              {categories.map((category, index) => (
                <div key={category.id} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-center`}>
                  <div className="flex-1 space-y-6">
                    <h3 className="text-3xl md:text-4xl font-bold text-secondary">{category.title}</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">{category.description}</p>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <Icon name="Check" size={20} className="text-primary" />
                        <span>Индивидуальные размеры</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Icon name="Check" size={20} className="text-primary" />
                        <span>Натуральные материалы</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Icon name="Check" size={20} className="text-primary" />
                        <span>Современный дизайн</span>
                      </div>
                    </div>
                    <Button onClick={() => scrollToSection('calculator')}>
                      Рассчитать стоимость
                    </Button>
                  </div>

                  <div className="flex-1 grid grid-cols-2 gap-4">
                    {category.images.map((image, idx) => (
                      <Card key={idx} className={`overflow-hidden ${idx === 0 && category.images.length === 3 ? 'col-span-2' : ''}`}>
                        <img 
                          src={image} 
                          alt={`${category.title} ${idx + 1}`}
                          className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </Card>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="gallery" className="py-24 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">Наши проекты</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Реальные работы и отзывы довольных клиентов
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="overflow-hidden group">
                <div className="relative overflow-hidden">
                  <img 
                    src="https://cdn.poehali.dev/projects/6903b4db-8217-4398-bc7c-bdc75f4401a9/files/f3c21254-6a70-4c37-a6d0-78d2daf40598.jpg"
                    alt="Кухня для семьи Петровых"
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Кухня для семьи Петровых</h3>
                  <p className="text-sm text-muted-foreground mb-4">Москва, 2025</p>
                  <div className="flex gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Icon key={i} name="Star" size={16} className="text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground italic">
                    "Кухня получилась именно такой, как мы мечтали! Все размеры идеально подошли под нашу планировку. Качество материалов превосходное."
                  </p>
                  <p className="text-sm font-semibold mt-3">— Анна Петрова</p>
                </div>
              </Card>

              <Card className="overflow-hidden group">
                <div className="relative overflow-hidden">
                  <img 
                    src="https://cdn.poehali.dev/projects/6903b4db-8217-4398-bc7c-bdc75f4401a9/files/b43a3768-4a6b-445a-87a5-9657a2f25bb5.jpg"
                    alt="Гардеробная для квартиры"
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Гардеробная для квартиры</h3>
                  <p className="text-sm text-muted-foreground mb-4">Санкт-Петербург, 2025</p>
                  <div className="flex gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Icon key={i} name="Star" size={16} className="text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground italic">
                    "Вместительная гардеробная с продуманной системой хранения. Дизайнеры учли все наши пожелания. Монтаж прошёл быстро и аккуратно."
                  </p>
                  <p className="text-sm font-semibold mt-3">— Дмитрий Соколов</p>
                </div>
              </Card>

              <Card className="overflow-hidden group">
                <div className="relative overflow-hidden">
                  <img 
                    src="https://cdn.poehali.dev/projects/6903b4db-8217-4398-bc7c-bdc75f4401a9/files/3b82eeb1-6b1e-47a6-82bb-d55dfabeea0f.jpg"
                    alt="Спальня под ключ"
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Спальня под ключ</h3>
                  <p className="text-sm text-muted-foreground mb-4">Казань, 2026</p>
                  <div className="flex gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Icon key={i} name="Star" size={16} className="text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground italic">
                    "Заказывали кровать и комод. Всё выполнено качественно, цвет идеально подошёл к интерьеру. Особенно понравилась натуральная текстура дерева."
                  </p>
                  <p className="text-sm font-semibold mt-3">— Елена Морозова</p>
                </div>
              </Card>

              <Card className="overflow-hidden group">
                <div className="relative overflow-hidden">
                  <img 
                    src="https://cdn.poehali.dev/projects/6903b4db-8217-4398-bc7c-bdc75f4401a9/files/a9d08535-1bc1-4461-a1a7-e96e7943dfc0.jpg"
                    alt="Мебель для гостиной"
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Мебель для гостиной</h3>
                  <p className="text-sm text-muted-foreground mb-4">Москва, 2025</p>
                  <div className="flex gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Icon key={i} name="Star" size={16} className="text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground italic">
                    "Заказали комод и открытые полки. Современный минималистичный дизайн отлично вписался в интерьер. Очень довольны работой мастеров!"
                  </p>
                  <p className="text-sm font-semibold mt-3">— Игорь Волков</p>
                </div>
              </Card>

              <Card className="overflow-hidden group">
                <div className="relative overflow-hidden">
                  <img 
                    src="https://cdn.poehali.dev/projects/6903b4db-8217-4398-bc7c-bdc75f4401a9/files/3b8a0cad-f50d-48c9-86e9-79ab3d5fea1d.jpg"
                    alt="Премиальная гардеробная"
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Премиальная гардеробная</h3>
                  <p className="text-sm text-muted-foreground mb-4">Екатеринбург, 2026</p>
                  <div className="flex gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Icon key={i} name="Star" size={16} className="text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground italic">
                    "Роскошная гардеробная с LED-подсветкой! Система хранения продумана до мелочей. Использовали премиальную фурнитуру — всё работает безупречно."
                  </p>
                  <p className="text-sm font-semibold mt-3">— Мария Новикова</p>
                </div>
              </Card>

              <Card className="overflow-hidden group">
                <div className="relative overflow-hidden">
                  <img 
                    src="https://cdn.poehali.dev/projects/6903b4db-8217-4398-bc7c-bdc75f4401a9/files/544ea8c3-7f2e-481e-b341-cdf7fa09a58f.jpg"
                    alt="Кухня с островом"
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Кухня с островом</h3>
                  <p className="text-sm text-muted-foreground mb-4">Новосибирск, 2025</p>
                  <div className="flex gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Icon key={i} name="Star" size={16} className="text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground italic">
                    "Большая кухня с островом для нашего загородного дома. Столешница из натурального камня — просто восхитительна! Спасибо за профессионализм."
                  </p>
                  <p className="text-sm font-semibold mt-3">— Сергей Кузнецов</p>
                </div>
              </Card>
            </div>

            <div className="text-center mt-12">
              <p className="text-lg text-muted-foreground mb-6">
                Более 500 довольных клиентов по всей России
              </p>
              <Button size="lg" onClick={() => scrollToSection('contact')}>
                Заказать свой проект
              </Button>
            </div>
          </div>
        </section>

        <section id="calculator" className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">Калькулятор мебели</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Рассчитайте стоимость вашей мебели и получите визуализацию
              </p>
            </div>

            <div className="max-w-5xl mx-auto">
              <Card className="p-8">
                {calculatorStep === 1 && (
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-secondary mb-6">Шаг 1: Выберите категорию</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {categories.map((cat) => (
                        <button
                          key={cat.id}
                          onClick={() => {
                            setSelectedCategory(cat.title);
                            setCalculatorStep(2);
                          }}
                          className={`p-6 rounded-lg border-2 transition-all hover:border-primary ${
                            selectedCategory === cat.title ? 'border-primary bg-primary/5' : 'border-border'
                          }`}
                        >
                          <div className="text-center">
                            <div className="text-4xl mb-2">
                              {cat.id === 'kitchens' && '🍳'}
                              {cat.id === 'wardrobes' && '🚪'}
                              {cat.id === 'dressers' && '📦'}
                              {cat.id === 'beds' && '🛏️'}
                            </div>
                            <p className="font-semibold">{cat.title}</p>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {calculatorStep === 2 && (
                  <div className="space-y-6">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-2xl font-bold text-secondary">Шаг 2: Параметры</h3>
                      <Button variant="ghost" onClick={() => setCalculatorStep(1)}>
                        <Icon name="ArrowLeft" size={20} className="mr-2" />
                        Назад
                      </Button>
                    </div>

                    <div className="grid md:grid-cols-3 gap-4">
                      <div>
                        <Label>Ширина (см)</Label>
                        <Input type="number" value={width} onChange={(e) => setWidth(e.target.value)} placeholder="200" />
                      </div>
                      <div>
                        <Label>Высота (см)</Label>
                        <Input type="number" value={height} onChange={(e) => setHeight(e.target.value)} placeholder="220" />
                      </div>
                      <div>
                        <Label>Глубина (см)</Label>
                        <Input type="number" value={depth} onChange={(e) => setDepth(e.target.value)} placeholder="60" />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label>Цвет</Label>
                        <select 
                          value={color} 
                          onChange={(e) => setColor(e.target.value)}
                          className="w-full p-2 border rounded-md"
                        >
                          <option value="">Выберите цвет</option>
                          <option value="Светлый дуб">Светлый дуб</option>
                          <option value="Темный орех">Темный орех</option>
                          <option value="Белый">Белый</option>
                          <option value="Серый">Серый</option>
                          <option value="Черный">Черный</option>
                        </select>
                      </div>
                      <div>
                        <Label>Материал каркаса</Label>
                        <select 
                          value={material} 
                          onChange={(e) => setMaterial(e.target.value)}
                          className="w-full p-2 border rounded-md"
                        >
                          <option value="">Выберите материал</option>
                          <option value="МДФ">МДФ</option>
                          <option value="Массив дуба">Массив дуба</option>
                          <option value="Массив ясеня">Массив ясеня</option>
                          <option value="Шпон">Шпон</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label>Материал фасадов</Label>
                        <select 
                          value={facade} 
                          onChange={(e) => setFacade(e.target.value)}
                          className="w-full p-2 border rounded-md"
                        >
                          <option value="">Выберите материал</option>
                          <option value="МДФ эмаль">МДФ эмаль</option>
                          <option value="Натуральный шпон">Натуральный шпон</option>
                          <option value="Массив">Массив</option>
                          <option value="Акрил">Акрил</option>
                        </select>
                      </div>
                      <div>
                        <Label>Фурнитура</Label>
                        <select 
                          value={hardware} 
                          onChange={(e) => setHardware(e.target.value)}
                          className="w-full p-2 border rounded-md"
                        >
                          <option value="">Выберите класс</option>
                          <option value="Бюджет">Бюджет</option>
                          <option value="Стандарт">Стандарт</option>
                          <option value="Премиум">Премиум</option>
                        </select>
                      </div>
                    </div>

                    <Button 
                      onClick={() => {
                        handleCalculate();
                        setCalculatorStep(3);
                      }}
                      className="w-full"
                      disabled={!width || !height || !depth || !color || !material || !facade || !hardware}
                    >
                      Рассчитать стоимость
                    </Button>
                  </div>
                )}

                {calculatorStep === 3 && (
                  <div className="space-y-6">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-2xl font-bold text-secondary">Результат расчёта</h3>
                      <Button variant="ghost" onClick={() => setCalculatorStep(2)}>
                        <Icon name="ArrowLeft" size={20} className="mr-2" />
                        Изменить
                      </Button>
                    </div>

                    {isGenerating ? (
                      <div className="text-center py-12">
                        <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary mb-4"></div>
                        <p className="text-lg text-muted-foreground">Генерируем визуализацию...</p>
                      </div>
                    ) : (
                      <>
                        <div className="grid md:grid-cols-2 gap-8">
                          <div>
                            <img 
                              src={generatedImage} 
                              alt="Визуализация мебели" 
                              className="w-full h-80 object-cover rounded-lg"
                            />
                          </div>
                          <div className="space-y-4">
                            <div>
                              <p className="text-sm text-muted-foreground">Категория</p>
                              <p className="text-lg font-semibold">{selectedCategory}</p>
                            </div>
                            <div>
                              <p className="text-sm text-muted-foreground">Размеры</p>
                              <p className="text-lg font-semibold">{width} × {height} × {depth} см</p>
                            </div>
                            <div>
                              <p className="text-sm text-muted-foreground">Материалы</p>
                              <p className="text-lg font-semibold">{material} / {facade}</p>
                            </div>
                            <div>
                              <p className="text-sm text-muted-foreground">Цвет</p>
                              <p className="text-lg font-semibold">{color}</p>
                            </div>
                            <div>
                              <p className="text-sm text-muted-foreground">Фурнитура</p>
                              <p className="text-lg font-semibold">{hardware}</p>
                            </div>
                            <div className="pt-4 border-t">
                              <p className="text-sm text-muted-foreground">Примерная стоимость</p>
                              <p className="text-3xl font-bold text-primary">{estimatedPrice.toLocaleString()} ₽</p>
                            </div>
                          </div>
                        </div>
                        <Button onClick={() => scrollToSection('contact')} className="w-full" size="lg">
                          Отправить заявку
                        </Button>
                      </>
                    )}
                  </div>
                )}
              </Card>
            </div>
          </div>
        </section>

        <section id="advantages" className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">Наши преимущества</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Почему выбирают StoneTree
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Ruler" size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Индивидуальные размеры</h3>
                <p className="text-muted-foreground">
                  Изготовим мебель точно под ваши размеры и планировку
                </p>
              </Card>

              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Palette" size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Современный дизайн</h3>
                <p className="text-muted-foreground">
                  Актуальные тренды и минималистичный премиальный стиль
                </p>
              </Card>

              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Star" size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Качественные материалы</h3>
                <p className="text-muted-foreground">
                  Только натуральное дерево, камень и проверенная фурнитура
                </p>
              </Card>

              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Shield" size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Гарантия</h3>
                <p className="text-muted-foreground">
                  Предоставляем гарантию на всю продукцию и бесплатный сервис
                </p>
              </Card>
            </div>
          </div>
        </section>

        <section id="contact" className="py-24 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">Вызвать замерщика</h2>
                <p className="text-lg text-muted-foreground">
                  Оставьте заявку, и мы свяжемся с вами для бесплатного замера
                </p>
              </div>

              <Card className="p-8">
                <form onSubmit={handleSubmitMeasurement} className="space-y-6">
                  <div>
                    <Label htmlFor="name">Имя</Label>
                    <Input 
                      id="name"
                      type="text" 
                      value={name} 
                      onChange={(e) => setName(e.target.value)} 
                      placeholder="Ваше имя"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">Телефон</Label>
                    <Input 
                      id="phone"
                      type="tel" 
                      value={phone} 
                      onChange={(e) => setPhone(e.target.value)} 
                      placeholder="+7 (999) 123-45-67"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="address">Город / Адрес</Label>
                    <Input 
                      id="address"
                      type="text" 
                      value={address} 
                      onChange={(e) => setAddress(e.target.value)} 
                      placeholder="Москва, ул. Примерная, 123"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="comment">Комментарий</Label>
                    <textarea 
                      id="comment"
                      value={comment} 
                      onChange={(e) => setComment(e.target.value)} 
                      placeholder="Опишите, что вы хотите заказать"
                      className="w-full min-h-[100px] p-3 border rounded-md"
                    />
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    Вызвать замерщика
                  </Button>
                </form>
              </Card>

              <div className="mt-12 space-y-6">
                <div className="text-center space-y-4">
                  <div className="flex items-center justify-center gap-3">
                    <Icon name="Phone" size={20} className="text-primary" />
                    <a href="tel:+79280730331" className="text-lg font-semibold hover:text-primary transition-colors">
                      +7 (928) 073-03-31
                    </a>
                  </div>
                  <div className="flex items-center justify-center gap-3">
                    <Icon name="Mail" size={20} className="text-primary" />
                    <a href="mailto:info@stonetree.ru" className="text-lg font-semibold hover:text-primary transition-colors">
                      info@stonetree.ru
                    </a>
                  </div>
                </div>

                <div className="flex justify-center gap-4">
                  <a 
                    href="https://wa.me/79280730331" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-[#25D366] text-white rounded-lg hover:bg-[#20BA5A] transition-colors"
                  >
                    <Icon name="MessageCircle" size={20} />
                    <span className="font-semibold">WhatsApp</span>
                  </a>
                  <a 
                    href="https://t.me/+79280730331" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-[#0088cc] text-white rounded-lg hover:bg-[#0077b5] transition-colors"
                  >
                    <Icon name="Send" size={20} />
                    <span className="font-semibold">Telegram</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-secondary text-secondary-foreground py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Icon name="Trees" size={24} className="text-primary-foreground" />
              </div>
              <span className="text-2xl font-bold">StoneTree</span>
            </div>
            <p className="text-sm opacity-80">
              © 2026 StoneTree. Производство мебели на заказ
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;