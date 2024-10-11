import React from 'react'

export default function Politicas() {
    return (
        <section
            id="politicas"
            className="bg-gray-100 px-4 py-16 md:px-24 lg:px-48 xl:px-72"
        >
            <div className="container mx-auto">
                <h1 className="mb-8 text-3xl font-bold text-gray-800">
                    Política de Privacidad
                </h1>
                <div className="grid grid-cols-1 gap-8">
                    {/* Sección 1 */}
                    <div className="overflow-hidden rounded-lg bg-white shadow-md">
                        <div className="p-6">
                            <p className="mb-4 text-gray-800">
                                Esta aplicación móvil no recopila, almacena ni
                                comparte ningún tipo de información personal de
                                los usuarios.
                            </p>

                            <h2 className="mb-2 text-xl font-bold">
                                1. Información Recopilada
                            </h2>
                            <p className="mb-4 text-gray-800">
                                La aplicación no recopila ningún tipo de
                                información personal o sensible de los usuarios.
                                No se requiere ni se solicita el ingreso de
                                datos personales, tales como nombre, dirección
                                de correo electrónico, ubicación o cualquier
                                otra información que permita identificar al
                                usuario.
                            </p>

                            <h2 className="mb-2 text-xl font-bold">
                                2. Uso de Permisos del Dispositivo
                            </h2>
                            <p className="mb-4 text-gray-800">
                                La aplicación no solicita permisos para acceder
                                a funciones o datos del dispositivo, como la
                                ubicación, la cámara, el almacenamiento, el
                                micrófono u otros.
                            </p>

                            <h2 className="mb-2 text-xl font-bold">
                                3. Interacción con APIs Externas
                            </h2>
                            <p className="mb-4 text-gray-800">
                                La aplicación utiliza una API para obtener y
                                mostrar datos en la interfaz de usuario. Estos
                                datos son de carácter público y no contienen
                                información personal ni sensible. La aplicación
                                no almacena ni procesa datos provenientes de la
                                API.
                            </p>

                            <h2 className="mb-2 text-xl font-bold">
                                4. Herramientas de Análisis
                            </h2>
                            <p className="mb-4 text-gray-800">
                                La aplicación no utiliza herramientas de
                                análisis, seguimiento ni tecnologías similares,
                                como Google Analytics, Firebase o cualquier otro
                                servicio que recopile datos sobre el
                                comportamiento del usuario.
                            </p>

                            <h2 className="mb-2 text-xl font-bold">
                                5. Cambios en la Política de Privacidad
                            </h2>
                            <p className="mb-4 text-gray-800">
                                Nos reservamos el derecho de modificar esta
                                Política de Privacidad en cualquier momento. En
                                caso de realizar cambios, se informará a los
                                usuarios a través de una actualización de la
                                aplicación.
                            </p>

                            <h2 className="mb-2 text-xl font-bold">
                                6. Contacto
                            </h2>
                            <p className="text-gray-800">
                                Si tienes alguna pregunta o inquietud acerca de
                                esta Política de Privacidad, puedes ponerte en
                                contacto con nosotros en:
                                <a
                                    href="mailto:zadktro@gmail.com"
                                    className="text-blue-600"
                                >
                                    {' '}
                                    zadktro@gmail.com
                                </a>
                                .
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
