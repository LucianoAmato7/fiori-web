import Image from 'next/image'
import Link from 'next/link'
import { Pacifico } from 'next/font/google'
import Icons from '@/utils/icons'

const pacifico = Pacifico({ weight: '400', subsets: ['latin'] })

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-pink-100">
      <header className="bg-white shadow-md">
        <nav className="container mx-auto px-6 py-3">
          <div className="flex justify-between items-center">
            <div className={`text-3xl font-bold text-purple-600 ${pacifico.className}`}>
              Fiori
            </div>
            <div className="hidden md:flex space-x-4">
              <Link href="#" className="text-gray-800 hover:text-purple-600 transition duration-300">Inicio</Link>
              <Link href="#about" className="text-gray-800 hover:text-purple-600 transition duration-300">Nosotros</Link>
              <Link href="#salones" className="text-gray-800 hover:text-purple-600 transition duration-300">Salones</Link>
              <Link href="#" className="text-gray-800 hover:text-purple-600 transition duration-300">Contacto</Link>
            </div>
          </div>
        </nav>
      </header>

      <main>
        <section className="hero bg-purple-600 text-white py-20">
          <div className="container mx-auto px-6 text-center">
            <h1 className={`text-5xl md:text-6xl font-bold mb-4 ${pacifico.className}`}>
              Celebra con Estilo
            </h1>
            <p className="text-xl mb-8">Encuentra el salón perfecto para tu evento especial</p>
            <Link href="#salones" className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-6 rounded-full text-lg transition duration-300 inline-flex items-center">
              <Icons.PartyPopper className="mr-2 text-3xl" />
              Ver Salones
            </Link>
          </div>
        </section>

        <section id="about" className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <h2 className={`text-4xl font-bold text-center text-purple-600 mb-8 ${pacifico.className}`}>
              Sobre Nosotros
            </h2>
            <div className="flex flex-wrap items-center">
              <div className="w-full md:w-1/2 mb-8 md:mb-0">
                <Image src="/placeholder.svg" alt="Equipo Fiori" width={600} height={400} className="rounded-lg shadow-lg" />
              </div>
              <div className="w-full md:w-1/2 md:pl-12">
                <p className="text-gray-700 text-lg mb-6">
                  En Fiori, nos dedicamos a hacer realidad tus sueños de celebración. Con años de experiencia en la gestión de salones de fiesta, ofrecemos una amplia variedad de espacios para todo tipo de eventos.
                </p>
                <p className="text-gray-700 text-lg">
                  Nuestro equipo de expertos está comprometido a proporcionar un servicio excepcional, asegurando que cada detalle de tu evento sea perfecto.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="salones" className="py-20 bg-gray-100">
          <div className="container mx-auto px-6">
            <h2 className={`text-4xl font-bold text-center text-purple-600 mb-12 ${pacifico.className}`}>
              Nuestros Salones
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { name: "Salón Elegancia", capacity: 150, location: "Centro de la ciudad" , image: "/placeholder.svg"},
                { name: "Jardín Ensueño", capacity: 200, location: "Zona residencial" , image: "/placeholder.svg"},
                { name: "Terraza Celestial", capacity: 100, location: "Área suburbana" , image: "/placeholder.svg"},
              ].map((salon, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transition duration-300 transform hover:scale-105">
                  <Image src={salon.image} alt={salon.name} width={400} height={250} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{salon.name}</h3>
                    <div className="flex items-center text-gray-600 mb-2">
                      <Icons.Users className="mr-2" size={18} />
                      <span>Capacidad: {salon.capacity} personas</span>
                    </div>
                    <div className="flex items-center text-gray-600 mb-4">
                      <Icons.MapPin className="mr-2" size={18} />
                      <span>{salon.location}</span>
                    </div>
                    <Link href={`/salones/${salon.name.toLowerCase().replace(' ', '-')}`} className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full inline-flex items-center transition duration-300">
                      <Icons.Eye className="mr-2" size={18} />
                      Ver salón
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-purple-800 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="mb-4">&copy; 2024 Fiori. Todos los derechos reservados.</p>
          <div className="flex justify-center space-x-4">
            <Link href="#" className="hover:text-pink-400 transition duration-300">Facebook</Link>
            <Link href="#" className="hover:text-pink-400 transition duration-300">Instagram</Link>
            <Link href="#" className="hover:text-pink-400 transition duration-300">Twitter</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

