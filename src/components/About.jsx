import React from 'react'
import {
    FaPhp,
    FaJs,
    FaLaravel,
    FaDatabase,
    FaCloud,
    FaReact,
} from 'react-icons/fa'

const About = () => {
    return (
        <section
            id="about"
            className="mt-16 bg-gray-100 px-4 py-16 md:px-24 lg:px-48 xl:px-72"
        >
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row md:space-x-8">
                    <img
                        src="./assets/images/zadkiel.png"
                        alt="Foto de perfil"
                        className="mx-auto mb-4 h-48 w-48 rounded-full md:mb-0 md:ml-0 md:mr-8"
                    />
                    <div className="flex flex-col justify-center">
                        <h2 className="mb-4 text-center text-3xl font-bold text-gray-800 md:text-left">
                            Hola 👋, soy Zadkiel Troche
                        </h2>
                        <div className="mb-4 text-center md:text-left">
                            <a
                                href="https://www.linkedin.com/in/zadkiel-troche/"
                                target="_blank"
                                class="mx-4 mt-2 inline-flex items-center rounded-md bg-gray-800 px-4 py-2 text-sm font-medium text-white hover:bg-gray-600"
                            >
                                <svg
                                    class="h-6 w-6 text-gray-800 dark:text-white"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M12.5 8.8v1.7a3.7 3.7 0 0 1 3.3-1.7c3.5 0 4.2 2.2 4.2 5v5.7h-3.2v-5c0-1.3-.2-2.8-2.1-2.8-1.9 0-2.2 1.3-2.2 2.6v5.2H9.3V8.8h3.2ZM7.2 6.1a1.6 1.6 0 0 1-2 1.6 1.6 1.6 0 0 1-1-2.2A1.6 1.6 0 0 1 6.6 5c.3.3.5.7.5 1.1Z"
                                        clip-rule="evenodd"
                                    />
                                    <path d="M7.2 8.8H4v10.7h3.2V8.8Z" />
                                </svg>
                                LinkedIn
                            </a>
                            <a
                                href="./assets/cv/CV Zadkiel Troche.pdf"
                                download="CV Zadkiel Troche.pdf"
                                class="mx-4 mt-2 inline-flex items-center rounded-md bg-gray-800 px-4 py-2 text-sm font-medium text-white hover:bg-gray-600"
                            >
                                <svg
                                    class="h-6 w-6 text-gray-800 dark:text-white"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M13 11.1V4a1 1 0 1 0-2 0v7.1L8.8 8.4a1 1 0 1 0-1.6 1.2l4 5a1 1 0 0 0 1.6 0l4-5a1 1 0 1 0-1.6-1.2L13 11Z"
                                        clip-rule="evenodd"
                                    />
                                    <path
                                        fill-rule="evenodd"
                                        d="M9.7 15.9 7.4 13H5a2 2 0 0 0-2 2v4c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-2.4l-2.3 2.9a3 3 0 0 1-4.6 0Zm7.3.1a1 1 0 1 0 0 2 1 1 0 1 0 0-2Z"
                                        clip-rule="evenodd"
                                    />
                                </svg>
                                Descargar CV
                            </a>
                            <a
                                href="https://github.com/zadkiel-troche/"
                                target="_blank"
                                class="mx-4 mt-2 inline-flex items-center rounded-md bg-gray-800 px-4 py-2 text-sm font-medium text-white hover:bg-gray-600"
                            >
                                <svg
                                    class="h-6 w-6 text-gray-800 dark:text-white"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M12 2c-2.4 0-4.7.9-6.5 2.4a10.5 10.5 0 0 0-2 13.1A10 10 0 0 0 8.7 22c.5 0 .7-.2.7-.5v-2c-2.8.7-3.4-1.1-3.4-1.1-.1-.6-.5-1.2-1-1.5-1-.7 0-.7 0-.7a2 2 0 0 1 1.5 1.1 2.2 2.2 0 0 0 1.3 1 2 2 0 0 0 1.6-.1c0-.6.3-1 .7-1.4-2.2-.3-4.6-1.2-4.6-5 0-1.1.4-2 1-2.8a4 4 0 0 1 .2-2.7s.8-.3 2.7 1c1.6-.5 3.4-.5 5 0 2-1.3 2.8-1 2.8-1 .3.8.4 1.8 0 2.7a4 4 0 0 1 1 2.7c0 4-2.3 4.8-4.5 5a2.5 2.5 0 0 1 .7 2v2.8c0 .3.2.6.7.5a10 10 0 0 0 5.4-4.4 10.5 10.5 0 0 0-2.1-13.2A9.8 9.8 0 0 0 12 2Z"
                                        clip-rule="evenodd"
                                    />
                                </svg>
                                GitHub
                            </a>
                        </div>
                        <div className="mb-4 text-center md:text-left">
                            <p className="text-lg text-gray-800">
                                Soy Desarrollador Full Stack, con más de 3 años
                                de experiencia trabajando en proyectos web
                                complejos, manteniendo las actualizaciones y la
                                escalabilidad de las mismas, además de
                                desarrollar una aplicación para dispositivos
                                móviles desde cero en React Native.
                            </p>
                        </div>
                    </div>
                </div>
                <p className="mb-2 text-lg font-semibold text-gray-800">
                    Habilidades principales:
                </p>
                <div className="mt-8 gap-8">
                    <div>
                        <ul className=" text-gray-800 md:columns-6">
                            <li className="mb-2 flex items-center">
                                <FaLaravel className="mr-2 text-2xl" />
                                Laravel
                            </li>
                            <li className="mb-2 flex items-center">
                                <FaPhp className="mr-2 text-2xl" />
                                PHP
                            </li>
                            <li className="mb-2 flex items-center">
                                <FaJs className="mr-2 text-2xl" />
                                JavaScript
                            </li>
                            <li className="mb-2 flex items-center">
                                <FaDatabase className="mr-2 text-2xl" />
                                SQL
                            </li>
                            <li className="mb-2 flex items-center">
                                <FaCloud className="mr-2 text-2xl" />
                                API Rest
                            </li>
                            <li className="mb-2 flex items-center">
                                <FaReact className="mr-2 text-2xl" />
                                React Native
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
