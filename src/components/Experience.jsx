import React from 'react'

const Experience = () => {
    return (
        <section
            id="experience"
            className="bg-gray-100 px-4 py-16 md:px-24 lg:px-48 xl:px-72"
        >
            <div className="container mx-auto">
                <h2 className="mb-8 text-3xl font-bold text-gray-800">
                    Experiencia Laboral
                </h2>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                    {/* Experiencia Laboral 1 */}
                    <div className="overflow-hidden rounded-lg bg-white shadow-md">
                        <div className="p-4">
                            <h3 className="mb-2 text-xl font-bold">
                                Desarrollador Web Full Stack
                            </h3>
                            <p className="text-gray-800">
                                Progresar Corporation S.A.
                            </p>
                            <p className="text-gray-800">
                                Marzo 2020 - Agosto 2023
                            </p>
                            <ul className="mt-2 text-gray-800">
                                <li>
                                    Como Desarrollador Web Full Stack, lideré
                                    con éxito la gestión y mejora continua de
                                    múltiples plataformas clave utilizando un
                                    conjunto diverso de tecnologías. Mi enfoque
                                    se centró en el mantenimiento y
                                    actualización de sitios web complejos y
                                    sistemas internos, incluyendo una API Rest
                                    desarrollada en Laravel y una aplicación
                                    móvil en React Native.
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* Experiencia Laboral 2 */}
                    <div className="overflow-hidden rounded-lg bg-white shadow-md">
                        <div className="p-4">
                            <h3 className="mb-2 text-xl font-bold">
                                Desarrollador Full Stack
                            </h3>
                            <p className="text-gray-800">Independiente</p>
                            <p className="text-gray-800">
                                Junio 2021 - Presente
                            </p>
                            <ul className="mt-2 text-gray-800">
                                <li>
                                    Como desarrollador Full Stack Independiente
                                    he trabajado con diversos clientes, con los
                                    cuales pude mejorar mi comunicación y el
                                    relacionamiento interpersonal.
                                </li>
                                <br />
                                <li>Desarrollo de E-commerce.</li>
                                <li>Desarrollo de Landing Pages.</li>
                                <li>Desarrollo de Aplicaciones Moviles.</li>
                            </ul>
                        </div>
                    </div>
                    {/* Agrega más experiencias laborales según sea necesario */}
                </div>
            </div>
        </section>
    )
}

export default Experience
