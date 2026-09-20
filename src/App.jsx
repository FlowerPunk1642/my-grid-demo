import Layout from './components/Layout.jsx'
import Header from './components/Header.jsx'
import Sidebar from './components/Sidebar.jsx'
import MainContent from './components/MainContent.jsx'
import Footer from './components/Footer.jsx'

function App() {
  const siteTitle = 'Мой React-сайт'
  const userName = 'Студент'

  return (
    <Layout siteTitle={siteTitle}>
      <Header title={siteTitle} userName={userName} />
      <Sidebar items={['Главная', 'О нас', 'Услуги', 'Контакты']} />

      {/* ↓↓↓ Задание 3: новый контент через children ↓↓↓ */}
      <MainContent>
        <h1>Мои любимые технологии</h1>
        <p>
          Этот блок передан внутрь MainContent через проп <code>children</code> —
          React сам собирает его из всего, что находится между тегами.
        </p>
        <ul>
          <li>React — библиотека для UI</li>
          <li>CSS Grid — двумерная раскладка</li>
          <li>Vite — быстрый сборщик</li>
        </ul>
        <p>
          Можно передавать что угодно: текст, компоненты, вложенные структуры.
        </p>
      </MainContent>
      {/* ↑↑↑ конец нового контента ↑↑↑ */}

      <Footer year={new Date().getFullYear()} />
    </Layout>
  )
}

export default App