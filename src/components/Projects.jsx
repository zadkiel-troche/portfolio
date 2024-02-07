import React from 'react'
import {
    FaCloud,
    FaGit,
    FaGithub,
    FaReact,
    FaExternalLinkAlt,
    FaLaravel,
    FaJs,
    FaPhp,
} from 'react-icons/fa'

const Projects = () => {
    return (
        <section
            id="projects"
            className="px-4 py-10 md:px-24 lg:px-48 xl:px-72"
        >
            <div className="container mx-auto">
                <h2 className="mb-8 text-3xl font-bold text-white">
                    Proyectos
                </h2>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {/* Proyecto 1 */}
                    <div className="overflow-hidden rounded-lg bg-white shadow-md">
                        <img
                            src="https://play-lh.googleusercontent.com/QhFwZnaHkLsp04Suy9-qW0ewvnVOSLDQPfVUrtGDJ7B-4GYuxwySxmMNWuJHNQO2odlq=w240-h480-rw"
                            alt="Proyecto 1"
                            className="md:h-58 h-40 w-full object-cover object-center"
                        />
                        <div className="p-4">
                            <h3 className="mb-2 text-xl font-bold">
                                Progresar Movil
                            </h3>
                            <hr className="my-2" />
                            <p className="mb-4 text-gray-700">
                                App Móvil para ver el estado de los saldos de
                                los clientes ya sean de Tarjetas de Crédito,
                                Préstamos, Electrodomésticos, Seguros y pagar
                                sus saldos. Implementación del servicio de V-POS
                                de Bancard para catastro de Tarjetas y Compra
                                Simple.
                            </p>
                            <div className="mb-4 flex items-center">
                                <FaReact
                                    className="mr-2 text-2xl text-gray-500"
                                    title="React Native"
                                />
                                <FaCloud
                                    className="mr-2 text-2xl text-gray-500"
                                    title="API REST"
                                />
                                <FaGit
                                    className="mr-2 text-2xl text-gray-500"
                                    title="GIT"
                                />
                                <FaGithub
                                    className="mr-2 text-2xl text-gray-500"
                                    title="GitHub"
                                />
                            </div>
                            <a
                                href="https://play.google.com/store/apps/details?id=com.progresarcorporation.progresarmovil&hl=es"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block text-blue-500"
                            >
                                Ver más <FaExternalLinkAlt />
                            </a>
                        </div>
                    </div>
                    {/* Proyecto 2 */}
                    <div className="overflow-hidden rounded-lg bg-white shadow-md">
                        <img
                            src="./assets/images/progresar-web.png"
                            alt="Proyecto 2"
                            className="h-58 w-full object-cover object-center"
                        />
                        <div className="p-4">
                            <h3 className="mb-2 text-xl font-bold">
                                Progresar Web
                            </h3>
                            <hr className="my-2" />
                            <p className="mb-4 text-gray-700">
                                Versión Web de la aplicación móvil para ver el
                                estado de los saldos de los clientes ya sean de
                                Tarjetas de Crédito, Préstamos,
                                Electrodomésticos, Seguros y pagar sus saldos.
                                Implementación del servicio de V-POS de Bancard
                                para catastro de Tarjetas y Compra Simple.
                            </p>
                            <div className="mb-4 flex items-center">
                                <FaLaravel
                                    className="mr-2 text-2xl text-gray-500"
                                    title="Laravel"
                                />
                                <FaPhp
                                    className="mr-2 text-2xl text-gray-500"
                                    title="PHP"
                                />
                                <FaJs
                                    className="mr-2 text-2xl text-gray-500"
                                    title="JavaScript"
                                />
                                <FaCloud
                                    className="mr-2 text-2xl text-gray-500"
                                    title="API REST"
                                />
                            </div>
                            <a
                                href="https://secure.progresarcorp.com.py"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block text-blue-500"
                            >
                                Ver más <FaExternalLinkAlt />
                            </a>
                        </div>
                    </div>
                    {/* Proyecto 3 */}
                    <div className="overflow-hidden rounded-lg bg-white shadow-md">
                        <img
                            src="./assets/images/progresar-tienda.png"
                            alt="Proyecto 3"
                            className="h-58 w-full object-cover object-center"
                        />
                        <div className="p-4">
                            <h3 className="mb-2 text-xl font-bold">
                                Progresar Tienda
                            </h3>
                            <hr className="my-2" />
                            <p className="mb-4 text-gray-700">
                                E-commerce desarrollado utilizando Laravel
                                conectado a una Base de Datos para mostrar los
                                productos disponibles, ofreciendo medios de pago
                                tales como Pagos Online implementando el
                                servicio de V-Pos de Bancard (API Pasarela de
                                Pago), pagos contra entrega, Giros Tigo, Zimple
                                - Bancard (API) y Transferencias Bancarias
                                (autogestionado).
                            </p>
                            <div className="mb-4 flex items-center">
                                <FaLaravel
                                    className="mr-2 text-2xl text-gray-500"
                                    title="Laravel"
                                />
                                <FaPhp
                                    className="mr-2 text-2xl text-gray-500"
                                    title="PHP"
                                />
                                <FaJs
                                    className="mr-2 text-2xl text-gray-500"
                                    title="JavaScript"
                                />
                                <FaCloud
                                    className="mr-2 text-2xl text-gray-500"
                                    title="API REST"
                                />
                            </div>
                            <a
                                href="https://progresarelectrodomesticos.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block text-blue-500"
                            >
                                Ver más <FaExternalLinkAlt />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects
