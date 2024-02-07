import React from 'react'
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa'

const Contact = () => {
    return (
        <section
            id="contact"
            className=" px-4 py-16 md:px-24 lg:px-48 xl:px-72"
        >
            <div className="container mx-auto">
                <h2 className="mb-8 text-3xl font-bold text-white">Contacto</h2>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                    {/* Información de contacto 1 */}
                    <div className="flex items-center rounded-lg bg-white p-6 shadow-md">
                        <FaEnvelope className="mr-4 text-gray-800" />
                        <div>
                            <h3 className="mb-2 text-xl font-bold">
                                Correo Electrónico
                            </h3>
                            <p>troche20001@gmail.com</p>
                        </div>
                    </div>
                    {/* Información de contacto 2 */}
                    <div className="flex items-center rounded-lg bg-white p-6 shadow-md">
                        <FaPhoneAlt className="mr-4 text-gray-800" />
                        <div>
                            <h3 className="mb-2 text-xl font-bold">Teléfono</h3>
                            <p>+595985555919</p>
                        </div>
                    </div>
                    {/* Información de contacto 3 */}
                    <div className="flex items-center rounded-lg bg-white p-6 shadow-md">
                        <FaMapMarkerAlt className="mr-4 text-gray-800" />
                        <div>
                            <h3 className="mb-2 text-xl font-bold">
                                Dirección
                            </h3>
                            <p>Encarnacion, Paraguay</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
